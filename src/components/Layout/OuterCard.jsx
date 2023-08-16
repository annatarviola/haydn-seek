import styles from './Cards.module.css'

const OuterCard = (props) => {
    return <div className={`${styles.outer} ${props.className}`}>
        {props.children}
    </div>
}

export default OuterCard