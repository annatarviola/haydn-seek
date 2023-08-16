import styles from './Cards.module.css'

const InnerCard = (props) => {
    return <div className={`${styles.inner} ${props.className}`}>
        {props.children}
    </div>
}

export default InnerCard