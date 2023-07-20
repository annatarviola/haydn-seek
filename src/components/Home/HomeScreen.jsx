import ImportantDates from "./ImportantDates";
import Goals from "./Goals";
import Counter from "./Counter";
import styles from './HomeScreen.module.css'

const HomeScreen = () => {
    return (
        <div className={styles.container}>
            <Counter />
            <ImportantDates />
            <Goals />
        </div>
    )
}

export default HomeScreen


// link for possible calendar help: https://codepen.io/dbk91/pen/jzadxM