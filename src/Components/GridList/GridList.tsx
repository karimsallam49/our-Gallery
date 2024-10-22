
import styles from './ImageGrid.module.css';

const{grid,column}=styles

type ImageGridProps= {
  images: string[];
  onImageClick: (index: number) => void;
}

const GridList= ({ images, onImageClick }:ImageGridProps) => {
  return (
    <div className={grid}>
      {images.map((src, index) => (
        <div className={column}>

          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => onImageClick(index)}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default GridList;
