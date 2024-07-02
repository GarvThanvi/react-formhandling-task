import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => [
    await axios
      .get("http://localhost:3000/getAll")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      }),
  ];
  return (
    <div>
      <h1 style={{margin: '20px',marginLeft: '20px'}}>All Responses</h1>
      {data && data.map((info, index) => <Card key={index} info={info}></Card>)}
    </div>
  );
}
