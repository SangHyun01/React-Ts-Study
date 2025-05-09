import {useState} from "react";

// 회원가입 폼
// 1. 이름
// 2. 전화번호
// 3. 이메일주소
// 4. 비밀번호

const Register = () => {
    const [data, setData] = useState({
        name : "",
        phone : "",
        email : "",
        password : "",
    });

    const onChangeData = (e) => {
        const {name, value} = e.target;
        setData((prevData) => ({
            ... prevData,
            [name]: value,
        }));
    };

    const onSubmitData = (e) => {
        e.preventDefault();

        // 유효성 검사
        if (!data.name || !data.phone || !data.email || !data.password) {
            alert('정보를 모두 입력하세요!');
            return;
        }
    };

    return (
    <form onSubmit={onSubmitData}>
      <h2>회원가입</h2>
      <div>
        <label>
          이름 : 
          <input
            type="name"
            name="name"
            value={data.name}
            onChange={onChangeData}
            required
          />
        </label>
      </div>
      <div>
        <label>
          전화번호 : 
          <input
            type="phone"
            name="phone"
            value={data.phone}
            onChange={onChangeData}
            required
          />
        </label>
      </div>
      <div>
        <label>
          이메일 : 
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeData}
            required
          />
        </label>
      </div>
      <div>
        <label>
          비밀번호 : 
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeData}
            required
          />
        </label>
      </div>
      <br></br>
      <button type="submit">완료</button>
    </form>
    );
};

export default Register;
