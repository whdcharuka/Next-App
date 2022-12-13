import headerStyles from '../styles/Header.module.css';

const Header = () => {
    const x = 2
    return (
        <div>
            <h1 className={headerStyles.tittle}>
                <span>Web Dev</span>News
            </h1>
            <p className={headerStyles.description}>
                Keep up date with the latest web dev news
            </p>
        </div>
    )
}

export default Header