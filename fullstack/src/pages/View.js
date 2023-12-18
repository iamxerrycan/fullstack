import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getSingleUser = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/user/${id}`);
      if (response.status === 200) {
        setData(response.data);
        
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  console.log(data);

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  return (
    <div className="main">
      <table className="user-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
