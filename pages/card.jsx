import Image from "next/image"
import styles from "../styles/Order.module.css"

function Order() {
    const status=0
const statusClass=(index)=>{
if (index-status<1)return styles.done
if (index-status===1)return styles.inProgress
if (index-status>1)return styles.undone
}

  return (
    <div>
        <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.row}>
              <table className={styles.table}>

<tr className={styles.tr}>
<th>Order ID</th>
<th>Customer</th>
<th>Address</th>
<th>Total</th>
</tr>
<tr>

<td>
<span className={styles.id}>12356434</span>
</td>
<td>
    <span className={styles.name}>JOHN DOE</span>
</td>
<td>
    <span className={styles.address}>Elton st.212-33 LA</span>
</td>
<td>
    <span className={styles.total}>$79.80</span>
</td>
</tr>

        </table>
              </div>
              <div className={styles.row}>
              <div className={statusClass(0)}>
<Image src="/img/payment.png" width="50" height="30" alt="nil"/>
<span>payment</span>
<div className={styles.checkedIcon}>
    <Image src="/img/on.png" width="30" height="40" alt=""/>
</div>
              </div>
              <div className={statusClass(1)}>
<Image src="/img/preparing.png" width="50" height="30" alt="nil"/>
<span>preparing</span>
<div className={styles.checkedIcon}>
    <Image src="/img/delivered.png" width="30" height="40" alt=""/>
</div>
              </div>
              <div className={statusClass(2)}>
<Image src="/img/on.png" width="50" height="30" alt="nil"/>
<span>on the way</span>

              </div>
              </div>
            </div>
            <div className={styles.right}></div>
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
<button disabled className={styles.button}>PAID</button>
        </div>
      </div>
    </div>
  )
}

export default Order

