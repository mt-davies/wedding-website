import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const collections = {
  engagement: 'engagement.json',
  dating: 'dating.json',
};

const Gallery = () => {
  const { collection } = useParams();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const jsonFile = Object.hasOwn(collections, collection) ? collections[collection] : undefined;
    const controller = new AbortController();

    setImages([]);
    setError('');

    if (!jsonFile) {
      setError('This gallery collection does not exist.');
      setIsLoading(false);
      return () => controller.abort();
    }

    setIsLoading(true);

    const loadImages = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}images/gallery/${collection}/${jsonFile}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Gallery request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data) || !data.every((image) => image && typeof image.filename === 'string')) {
          throw new Error(`Invalid image list in ${jsonFile}`);
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

  const sortedImages = [...images].sort(
    (first, second) => Number(first.preferredOrder) - Number(second.preferredOrder)
  );

  return (
    <div>
      <Link to="/" style={{ color: 'black' }}>Back to Home</Link>
      <h1>{collection ? `${collection[0].toUpperCase()}${collection.slice(1)} Gallery` : 'Gallery'}</h1>

      {isLoading && <p>Loading images...</p>}
      {error && <p role="alert">{error}</p>}
      {!isLoading && !error && (
        <div className="gallery-grid">
          {sortedImages.map((image) => (
            <div className="gallery-image-container" key={image.filename}>
              <img
                className="gallery-image"
                src={`${import.meta.env.BASE_URL}images/gallery/${collection}/${encodeURIComponent(image.filename)}`}
                alt={image.caption || image.filename}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
