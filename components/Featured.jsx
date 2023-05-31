import styles from "../styles/Featured.module.css"
import Image from "next/legacy/image"
import {useState} from "react"

function Featured() {
    const [index, setIndex]=useState(0)
    const images = [
        "/img/pizza.jpg",
        "/img/featured2.png",
        "/img/featured3.png",
      ];
      const handleArrow=(direction)=>{
        if(direction==="l"){
          setIndex(index!==0 ? index-1:2)  
        }
        if(direction==="r"){
          setIndex(index!==2 ? index+1:0)  
        }
      }
      
      
      return (
        <div className={styles.container}>
            <div className={styles.arrowContainer}style={{left:0}} onClick={()=>handleArrow("l")}>
          <Image src="/img/arrow1.png" layout="fill" objectFit="contain"/>
          </div>
          <div className={styles.wrapper} style={{transform:`translate(${-100*index}vw)`}}>
            <div className={styles.imgContainer}>
              {images.map((img, i) => (
                <div className={styles.imgcontainer} key={i}>
                <Image src={img}  width="300" height="100" objectFit="container" />
              </div>
              ))}
            </div>
          </div>
          <div className={styles.arrowContainer}style={{right:0}} onClick={()=>handleArrow("r")} >
          <Image src="/img/arrow1.png" width="50" height="50" alt="" objectFit="contain" />
          </div>
        </div>
      );
              }

export default Featured
