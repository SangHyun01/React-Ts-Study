// import axios from 'axios';

// export async function fetchQuote() {
//   const url = 'https://api.quotable.io/random';

//   try {
//     const response = await axios.get(url, {
//       params: {
//         limit: 1,
//         // tags: 'inspirational|motivational|success',
//       },
//     });

//     const data = response.data;

//     return {
//       content: data.content,
//       author: data.author,
//     };
//   } catch (error) {
//     throw new Error(`API 요청 실패: ${error.message}`);
//   }
// }

// // 원래 명언 api도 사용할 예정이었으나 api server가 수시로 다운되서 삭제함