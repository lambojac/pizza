import styles from "../styles/PizzaList.module.css"
import PizzaCard from "../components/PizzaCard.jsx"
function PizzaList() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
lorem ipsum dolor sit amet consecteur best overall graduating student in biochmistry 
      </p>
      <div className={styles.wrapper}>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
      </div>
    </div>
  )
}

export default PizzaList
