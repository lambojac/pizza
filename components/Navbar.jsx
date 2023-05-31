import Image from 'next/image'
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container }>
    <div className={styles.item }>
    <div className={styles.callButton }>
      <Image src="/img/phone.jpg"  alt="" width="32" height="32"/>
    </div>

<div className={styles.texts}>
<div className={styles.text}>ORDER NOW</div>
<div className={styles.text}>08124934944</div>
</div>
</div>
    <div className={styles.item }>
    <ul className={styles.list}>
      <li className={styles.listItem}>Homepage</li>
      <li className={styles.listItem}>Producs</li>
      <li className={styles.listItem}>Menu</li>
      <Image src="/img/cart.jpeg" alt="" width="160" height="69"/>
      <li className={styles.listItem}>Events</li>
      <li className={styles.listItem}>Blogs</li>
      <li className={styles.listItem}>Contact</li>
    </ul>
    </div>
    <div className={styles.item }>
      <div className={styles.cart}>
      <Image src="/img/cart.jpeg" alt="" width="30" height="39"/>
      <div className={styles.counter}>2</div>
      </div>
    </div>
      </div>      

    
  )
}

export default Navbar
