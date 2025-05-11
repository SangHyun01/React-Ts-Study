// 회원가입, 로그인, 유효성 검증 + 소셜 로그인
// backend 폴더 만들어서 입력한 회원 정보가 backend의 userdata.js 에 저장되도록 fetch 해보기

import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>홈</h1>
      <Link to="/login">로그인</Link>
      <Link to="/register">회원가입</Link>
    </>
  );
}

export default App;
