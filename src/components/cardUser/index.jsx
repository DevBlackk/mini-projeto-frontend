/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import api from "../../utils/api";
export function CardUser({ content }) {

  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/user');
        setUser(res.data.result);
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
        {user.map((data) => (
          <div key={data.id} className="card">
            <h1> {data.username} </h1>
            <p> {data.email} </p>
            <p> {data.userType} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
