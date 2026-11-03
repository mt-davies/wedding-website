import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const collections = {
  engagement: {
    jsonFile: 'engagement.json',
    dateOrder: 'desc',
    title: 'Engagement Photos!',
  },
  dating: {
    jsonFile: 'dating.json',
    dateOrder: 'asc',
    title: 'Our Story Through Photos',
  },
};

const Gallery = () => {
  const { collection } = useParams();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [columnCount, setColumnCount] = useState(3);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 600px)');
    const tabletQuery = window.matchMedia('(max-width: 900px)');
    const updateColumnCount = () => {
      setColumnCount(mobileQuery.matches ? 1 : tabletQuery.matches ? 2 : 3);
    };

    updateColumnCount();
    mobileQuery.addEventListener('change', updateColumnCount);
    tabletQuery.addEventListener('change', updateColumnCount);

    return () => {
      mobileQuery.removeEventListener('change', updateColumnCount);
      tabletQuery.removeEventListener('change', updateColumnCount);
    };
  }, []);

  useEffect(() => {
    const config = Object.hasOwn(collections, collection) ? collections[collection] : undefined;
    const controller = new AbortController();

    setImages([]);
    setError('');

    if (!config) {
      setError('This gallery collection does not exist.');
      setIsLoading(false);
      return () => controller.abort();
    }

    setIsLoading(true);

    const loadImages = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}images/gallery/${collection}/${config.jsonFile}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Gallery request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data) || !data.every((image) => image && typeof image.filename === 'string')) {
          throw new Error(`Invalid image list in ${config.jsonFile}`);
        }

        setImages(data);
      } catch (loadError) {
        if (loadError.name === 'AbortError') {
          return;
        }

        console.error('Failed to load gallery images:', loadError);
        setError('Images could not be loaded.');
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadImages();
    return () => controller.abort();
  }, [collection]);

  const config = collections[collection];
  const sortedImages = config
    ? [...images].sort((first, second) => {
        const dateOrder = first.date.localeCompare(second.date);
        const byDate = config.dateOrder === 'desc' ? -dateOrder : dateOrder;

        return byDate || first.filename.localeCompare(second.filename);
      })
    : images;
  const galleryColumns = Array.from({ length: columnCount }, () => []);
  sortedImages.forEach((image, index) => {
    galleryColumns[index % columnCount].push(image);
  });

  return (
    <div>

      <Navbar></Navbar>

      

      <h2>{config?.title || (collection ? `${collection[0].toUpperCase()}${collection.slice(1)} Gallery` : 'Gallery')}</h2>

      {isLoading && <p>Loading images...</p>}
      {error && <p role="alert">{error}</p>}
      {!isLoading && !error && (
        <div className="gallery-grid">
          {galleryColumns.map((column, columnIndex) => (
            <div className="gallery-column" key={columnIndex}>
              {column.map((image) => (
                <div className="gallery-image-container" key={image.filename}>
                  <img
                    className="gallery-image"
                    src={`${import.meta.env.BASE_URL}images/gallery/${collection}/${encodeURIComponent(image.filename)}`}
                    alt={image.caption || image.filename}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
