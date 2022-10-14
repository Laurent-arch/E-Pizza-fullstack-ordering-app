import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>The Best Pizza in Town</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ea? Fugit quam nulla porro. Perferendis eos iure et harum magnam molestiae quidem facere?
        </p>
        <div className={styles.wrapper}>
            {pizzaList.map((pizza) => {
              return <PizzaCard key={pizza._id} pizza={pizza} />
            })}
        </div>
    </div>
  )
}

export default PizzaList