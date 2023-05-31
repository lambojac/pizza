import styles from "../styles/Footer.module.css"
import Image from 'next/legacy/image'
const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
 <Image src="/img/bg.jpg" objectFit="cover"  width="500" height="500" alt="" />
    </div>
    <div className={styles.item}>
      <div className={styles.card}>
<h2 className={styles.motto}>
  OH YS, WE I MADE IT PIZZA APP WELL BUILT PIZZA
</h2>
      </div>

      <div className={styles.card}>
<h1 className={styles.title}>FIND OUR RESTAURANT</h1>
<p className={styles.text}>
  1654 R. KENNY ROAD #304
  <br/>NEW york 85022
  <br/>(602) 867-1010
</p>
<p className={styles.text}>
  1654 R. KENNY ROAD #304
  <br/>NEW york 85022
  <br/>(602) 867-1010
</p>
<p className={styles.text}>
  1654 R. KENNY ROAD #304
  <br/>NEW york 85022
  <br/>(602) 867-1010
</p>
<p className={styles.text}>
  1654 R. KENNY ROAD #304
  <br/>NEW york 85022
  <br/>(602) 867-1010
</p>
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
MONDAY TILL FRIDAY
  <br/>9:00-22:00
  <br/>(602) 867-1010
</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
