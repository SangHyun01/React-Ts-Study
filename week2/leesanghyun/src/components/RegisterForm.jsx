import { useState } from "react";

// 비밀번호랑 비밀번호 확인 체크 기능
//

function RegisterForm() {
  // 회원정보 입력 상태 저장 객체 -> useState 사용
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [isPasswordSame, setIsPasswordSame] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedForm = { ...prev, [name]: value };

      if (name === "passwordCheck") {
        setIsPasswordSame(updatedForm.password === updatedForm.passwordCheck);
      }
      return updatedForm;
    });
  };

  // useRef 사용
  //   const nameRef = useRef();
  //   const emailRef = useRef();
  //   const passwordRef = useRef();
  //   const passwordCheckRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    // formData 사용
    // const form = e.target;
    // const formData = new FormData(form);
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        // body: formData,
      });

      const result = await res.json();
      console.log("서버 응답:", result);
    } catch (error) {
      console.log("요청 실패: ", error);
    }
    console.log("사용자 정보: ", formData);

    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    // const data = Object.fromEntries(formData.entries());
    // console.log(data);

    // const enteredName = nameRef.current.value;
    // const enteredEmail = emailRef.current.value;
    // const enteredPassword = passwordRef.current.value;
    // const enteredPasswordCheck = passwordCheckRef.current.value;
    // console.log(
    //   enteredName,
    //   enteredEmail,
    //   enteredPassword,
    //   enteredPasswordCheck
    // );
    // console.log(formData);
  }

  return (
    <>
      <h1>회원가입 폼</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              //   ref={nameRef}
              value={formData.name}
              placeholder="이름 입력"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              //   ref={emailRef}
              value={formData.email}
              placeholder="이메일 입력"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              //   ref={passwordRef}
              value={formData.password}
              placeholder="비밀번호 입력"
              onChange={handleChange}
              required
              autoComplete="true"
            />
          </div>
          <div>
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <input
              type="password"
              id="passwordCheck"
              name="passwordCheck"
              //   ref={passwordCheckRef}
              value={formData.passwordCheck}
              placeholder="비밀번호 확인"
              onChange={handleChange}
              required
            />
          </div>
          {!isPasswordSame && (
            <p>비밀번호가 일치하지 않습니다. 다시 입력해주세요.</p>
          )}
          <button>등록</button>
        </form>
      </fieldset>
    </>
  );
}
export default RegisterForm;
