
import styles from './ImageGrid.module.css';

const{grid,column}=styles

type ImageGridProps= {
  images: string[];
  onImageClick: (index: number) => void;
  direction:"rtl"|"ltr"
}

const GridList= ({ images, onImageClick ,direction="rtl"}:ImageGridProps) => {
  return (
    <div className={grid} style={{direction}}>
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
