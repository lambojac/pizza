import styles from "../styles/Cart.module.css";
import Image from "next/legacy/image";

function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>

        <table className={styles.table}>
<tr className={styles.tr}>
<th>Product</th>
<th>Name</th>
<th>Extras</th>
<th>Price</th>
<th>Quantity</th>
<th>Total</th>
</tr>
<tr>
<td>
    <div className={styles.imgContainer}>
<Image src="/img/pizza.jpg"  width="100" height="50" objectFit="cover" alt=""/>
    </div>
</td>

<td>
<span className={styles.name}>CORALZO</span>
</td>
<td>
    <span className={styles.extras}>Double igredients, Spicy sauce</span>
</td>
<td>
    <span className={styles.price}>$19.90</span>
</td>
<td>
    <span className={styles.quantity}>2</span>
</td>
<td>
    <span className={styles.total}>$49.90</span>
</td>
</tr>
<tr className={styles.tr}>
<th>Product</th>
<th>Name</th>
<th>Extras</th>
<th>Price</th>
<th>Quantity</th>
<th>Total</th>
</tr>
<tr>
<td>
    <div className={styles.imgContainer}>
<Image src="/img/pizza.jpg"  width="100" height="50" objectFit="cover" alt=""/>
    </div>
</td>

<td>
<span className={styles.name}>CORALZO</span>
</td>
<td>
    <span className={styles.extras}>Double igredients, Spicy sauce</span>
</td>
<td>
    <span className={styles.price}>$19.90</span>
</td>
<td>
    <span className={styles.quantity}>2</span>
</td>
<td>
    <span className={styles.total}>$49.90</span>
</td>
</tr>

        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SubTOTAL</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>TOTAL</b>$59.60
          </div>
<button disabled className={styles.button}>BUY NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
