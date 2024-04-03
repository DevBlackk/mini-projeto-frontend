/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import api from "../../utils/api";
export function CardMusic({ content }) {

  const [music, setMusic] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/music');
        setMusic(res.data.result);
        console.log(res.data.result);
      } catch (error) {
        console.log("Error getting information:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-card">
      <h1 className="card-title">{content}</h1>
      <div className="card-content">
        {music.map((data) => (
          <div key={data.id} className="card">
            <h1> {data.title} </h1>
            <p> {data.duration} min</p>
            <p> {data.releaseDate} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
