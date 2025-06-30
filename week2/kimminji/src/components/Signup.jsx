import styles from './Signup.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axiosInstance'; // axios 인스턴스 import

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    phonenum: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('회원가입 입력값:', formData);

    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
    //   const response = await axios.post('/signup', formData);
    //   console.log('회원가입 응답:', response.data);

      navigate('/login');
    } catch (error) {
      console.error('회원가입 에러:', error);
    }
  };

  return (
    <div>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <h1 className={styles.title}>회원가입</h1>
        <div className={styles.signupContainer}>
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phonenum"
            placeholder="전화번호"
            value={formData.phonenum}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.signupButton}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default Signup;
