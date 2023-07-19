import styles from './OuterCard.module.css'

const OuterCard = (props) => {
    return <div className={styles.outer}>
        {props.children}
    </div>
}

export default OuterCard