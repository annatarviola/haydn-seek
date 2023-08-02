import styles from './Counter.module.css'

const Counter = ({ filteredLogs }) => {
    const hoursArr = filteredLogs.map(({ time_hr }) => time_hr)
    const minArr = filteredLogs.map(({ time_min }) => time_min)

    const totalMinutes = minArr.reduce((acc, cur) => acc + cur, 0)
    const minRemainder = totalMinutes % 60

    const totalHours = hoursArr.reduce((acc, cur) => acc + cur, 0) + Math.floor(totalMinutes / 60)
    
    console.log(totalHours)
    console.log(totalMinutes)

    return(
        <div className={styles.container}>
            <p>THIS WEEK</p>
            <h2>{totalHours} HR {minRemainder} MIN</h2>
            <p>OF PRACTICE</p>
        </div>
    )
}

export default Counter