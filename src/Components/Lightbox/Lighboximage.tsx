
import styles from './LightboxImage.module.css';

type LightboxImageProps ={
  src: string;
 
}

const LightboxImage= ({ src }:LightboxImageProps) => {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={""} className={styles.lightboximage} />
    </div>
  );
};

export default LightboxImage;
