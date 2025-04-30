import Header from "./components/Header";
import "./App.css";

import Todos from "./components/Todos";

// 목록 별로 세부 사항 리스트 추가할 수 있도록
// 회원가입 정보 백엔드로 POST 요청 보내서 data에 저장하는 거
// 로그인 할 때는 다시 그거 불러오는 거 구현해보기

function App() {
  return (
    <>
      <Header />
      <Todos />
    </>
  );
}

export default App;
