import  { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import LightboxImage from './Lighboximage';
import styles from './Lightbox.module.css';

type LightboxProps ={
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox= ({ images, currentIndex, onClose, onNext, onPrev }:LightboxProps) => {

  const [currentImg,setCurrentImg]=useState<number>(0)
  useEffect(() => {
    setCurrentImg(currentIndex)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
     
      
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
 
  const rendernext=Array(3).fill(0).map((_,idx)=>(

    idx>0&&images[currentImg+1]?(
    <img src={images[currentImg+idx]} 
    
    onClick={()=> currentImg+idx+1>images.length?(

      setCurrentImg(0)
    ):
      setCurrentImg(currentImg+idx)}
    
     className={styles.imgpagination} />

  
  ):""
  ))
  const renderprev=Array(3).fill(0).map((_,idx)=>(

    idx>0&&images[currentImg-1]? (
    <img src={images[currentImg-(idx)]} 
    
    onClick={()=>setCurrentImg(currentImg-idx)} className={styles.imgpagination} />
    ):""
  ))

  const rendercurrent= <img src={images[currentImg]}  alt="" className={styles.currentphoto}/>
  
  return (
    <div className={styles.lightbox} onClick={handleClickOutside}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.container}>
          <div className={styles.imglight}>
        <LightboxImage src={images[currentImg]}  />

          </div>
      <div className={styles.pagination}>


        {renderprev}

        {rendercurrent}
        
        
         {rendernext}

        



      </div>

        </div>
        <button className={styles.close} onClick={onClose}><FaTimes /></button>
        <button className={styles.prev} onClick={onPrev}><FaChevronLeft /></button>
        <button className={styles.next} onClick={onNext}><FaChevronRight /></button>
      
      </div>




    </div>

  );
};

export default Lightbox;
