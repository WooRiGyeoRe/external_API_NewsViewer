import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

// const App = () => {
//   const [data, setData] = useState(null);
//   // 불러오기 버튼 누르면 가짜 API 호출
//   {
//     /*
//     const onClick = () => {
//     axios
//       // axios.get 함수 => 파라미터로 전달된 주소에 GET 요청
//       .get('https://jsonplaceholder.typicode.com/todos/1')
//       // 결과는 .then을 통해 비동기적으로 확인
//       .then((response) => {
//         setData(response.data);
//       });
//   };
//     */
//   }
//   // async 적용
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=us&apiKey=60eb9eafe0cb42d2ab9c7bd9f21f9a71',
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// };

const App = () => {
  return <NewsList />;
};

export default App;
