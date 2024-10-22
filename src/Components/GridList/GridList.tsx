
import styles from './ImageGrid.module.css';

const{grid}=styles

type ImageGridProps= {
  images: string[];
  onImageClick: (index: number) => void;
}

const GridList= ({ images, onImageClick }:ImageGridProps) => {
  return (
    <div className={grid}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery Image ${index + 1}`}
          onClick={() => onImageClick(index)}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default GridList;
