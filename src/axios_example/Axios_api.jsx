import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const Axios_api = () => {
  const [data, setData] = useState([]); // 데이터 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 로딩 시작
      setError(null); // 이전 에러 초기화

      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        setData(response.data); // 데이터 저장
      } catch (err) {
        setError(err.message); // 에러 저장
      } finally {
        setLoading(false); // 로딩 끝
      }
    };

    fetchData();
  }, []); // 컴포넌트 마운트 시 1회 실행

  if (loading) return <p>Loading...</p>; // 로딩 중 표시
  if (error) return <p>Error: {error}</p>; // 에러 표시

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Axios_api;
