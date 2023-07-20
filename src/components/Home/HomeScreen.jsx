import ImportantDates from "./ImportantDates";
import Goals from "./Goals";
import Counter from "./Counter";
import Calendar from "./Calendar/Calendar";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  return (
    <>
      <Calendar />
      <div className={styles.container}>
        <Counter />
        <ImportantDates />
        <Goals />
      </div>
    </>
  );
};

export default HomeScreen;

// link for possible calendar help: https://codepen.io/dbk91/pen/jzadxM
