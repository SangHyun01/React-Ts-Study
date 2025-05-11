import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };
    const handleSignupClick = () => {
        navigate('/signup');
    };
    return (
        <div className={styles.header}>
            <button className={styles.loginButton} onClick={handleLoginClick}>
                로그인
            </button>
            <button className={styles.signupButton} onClick={handleSignupClick}>
                회원가입
            </button>
        </div>
    );
}
export default Header;