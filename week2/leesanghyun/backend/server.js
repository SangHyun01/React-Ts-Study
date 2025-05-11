const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const upload = multer();
const port = 5000;
const app = express();

app.use(cors());
app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true })); // FormData 파싱

app.post("/register", upload.none(), (req, res) => {
  const userData = req.body;

  const filePath = path.join(__dirname, "userdata.js");

  const content = `module.exports = ${JSON.stringify(userData, null, 2)}`;

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log("파일 저장 실패: ", err);
      return res.status(500).json({ message: "파일 저장 실패" });
    }
    console.log("userdata 저장됨: ", userData);
    res.json({ message: "회원정보 저장완료" });
  });
});
app.listen(port, () => {
  console.log(`서버 실행중: http://localhost:${port}`);
});
