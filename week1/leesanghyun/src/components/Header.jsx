import { Link } from "react-router-dom";
import classes from "./header.module.css";

function Header() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Todo 앱 만들기</h1>
      <div className={classes.link}>
        <Link to="/login">로그인</Link>
        <Link to="/register">회원가입</Link>
      </div>
    </div>
  );
}

export default Header;
