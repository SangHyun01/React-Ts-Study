import styles from './Login.module.css';
import { useState } from 'react';
import axios from '../utils/axiosInstance.jsx';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('입력값:', formData);

    try {
    //   await axios.post('/login', formData); 
      setIsLoggedIn(true);
      navigate('/main-page'); 
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  return (
    <div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1 className={styles.title}>로그인</h1>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="username"
            placeholder="아이디"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className={styles.loginSubmit} type="submit">
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
