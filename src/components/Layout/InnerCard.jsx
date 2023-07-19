import styles from './InnerCard.module.css'

const InnerCard = (props) => {
    return <div className={styles.inner}>
        {props.children}
    </div>
}

export default InnerCard