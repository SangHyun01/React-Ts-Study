import styles from './Header.module.css';

function Header() {
  const today = new Date();
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const time = today.getHours() >  12 ? '오후' : '오전';
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${week[today.getDay()]} ${time}`;

  return (
    <div className={styles.header}>
      <p className={styles.title}>
        <span className={styles.date}>{formattedDate}</span> 의 할 일들을 기록해보세요
      </p>
    </div>
  );
}

export default Header;
