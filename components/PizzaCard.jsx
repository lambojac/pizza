import styles from "../styles/PizzaCard.module.css"
import Image from "next/image"
function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.jpg" alt="" width="300" height="200"/>
      <h1 className={styles.title}>PIZZA</h1>
      <span classNmae={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
    </div>
  )
}

export default PizzaCard
