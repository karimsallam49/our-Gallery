
type imagecartprops={
    src:string
    onImageClick: (index: number) => void;

}

const ImageCard = ({ src, onImageClick }:imagecartprops) => {
  return (
    <img
    
      src={src}
      alt="Gallery Image"
      onClick={() => onImageClick}
      loading="lazy"
    />
  );
};

export default ImageCard