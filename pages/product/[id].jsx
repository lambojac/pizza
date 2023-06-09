import styles from "../../styles/Product.module.css"
import Image from "next/image"
import {useState} from "react"

const Product=() =>{
    const [size, setSize]=useState(0)
const pizza={
    id:1,
    img:"/img/pizza.jpg",
    name:"CAMPANGOLA",
    price:[19.9, 23.9, 27.9],
    desc:"Lorem ipsum dolor sit amet connesetur adispicing"
};


  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.container}>
                <Image src={pizza.img} width="700" height="300"/>
            </div>
        </div>
        <div className={styles.right}>
<h1 className={styles.title}>{pizza.name}</h1>
<span className={styles.price}>${pizza.price[size]}</span>
<p className={styles.desc}>{pizza.desc}</p>
<h3 className={styles.choose}>Choose the size</h3>
<div className={styles.sizes}>
<div className={styles.size} onClick={()=>setSize(0)
}>
 <Image src="/img/size.jpg" width="30" height="40"  alt=""/>
 <span className={styles.number}>Small</span>
</div>
<div className={styles.size}onClick={()=>setSize(1)
}>
 <Image src="/img/size.jpg" width="30" height="40"  alt=""/>
 <span className={styles.number}>Medium</span>
</div>
<div className={styles.size}onClick={()=>setSize(2)
}>
 <Image src="/img/size.jpg" width="30" height="40"  alt=""/>
 <span className={styles.number}>Large</span>
</div>
</div>
<h3 className={styles.choose}>choose additional ingredients</h3>
<div className={styles.ingredients}>
<div className={styles.option}>
<input type="checkbox" id="double" name="double" className={styles.checkbox}/>
<label htmlFor="double">Double Ingredients</label>
</div>
<div className={styles.option}>
<input type="checkbox" id="cheese" name="cheese" className={styles.checkbox}/>
<label htmlFor="Extra cheese">Extra cheese</label>
</div>
<div className={styles.option}>
<input type="checkbox" id="spicy" name="spicy" className={styles.checkbox}/>
<label htmlFor="spicy sauce">spicy sauce</label>
</div>
<div className={styles.option}>
<input type="checkbox" id="garlic" name="garlic" className={styles.checkbox}/>
<label htmlFor="garlic sauce">garlic sauce</label>
</div>
</div>
<div className={styles.add}>
    <input type="number" defaultValue={1} className={styles.quantity}/>
    <button className={styles.button}>Add to cart</button>
</div>
        </div>
    </div>
  )
}

export default Product
