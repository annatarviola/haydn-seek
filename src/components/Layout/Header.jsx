import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Haydn Seek</h1>
            <nav className={styles.nav}>
                <a>Home</a>
                <a>Login</a>
            </nav>
        </div>
    )
}

export default Header