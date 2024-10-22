import Gallery from "../Components/Gallery/Gallery";
import styles from"./ImageGallery.module.css"

const{container}=styles

const HomePagge= () => {
  return (
    <div className={container} >
      <h1><span>Our</span>Gallery</h1>

      <Gallery/>
    </div>
   
  );
};

export default HomePagge;
