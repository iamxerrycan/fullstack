import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./AddEdit.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddEdit = () => {
  const initialState = {
    name: "",
    email: "",
    contact: "",
  };

  const { id } = useParams();
  const history = useNavigate();

  const [input, setInput] = useState(initialState);
  const { name, email, contact } = input;

  useEffect(() => {
    if (id) {
      getSingleuser(id);
    }
  }, [id]);

  const getSingleuser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      setInput({ ...response.data }[0]);
    }
  };

  const addUser = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/user", data);
      if (response.status === 200) {
        toast.success(response.data);
      }
    } catch (error) {
      console.error("data not added:", error);
    }
  };

  const updateUser = async (data, id) => {
    try {
      const response = await axios.put(`http://localhost:5000/user/${id}`,data);
      if (response.status === 200) {
        toast.success(response.data);
      }
    } catch (error) {
      console.error("data not added:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("please fill all the input");
    } else {
      if (!id) {
        addUser(input);
      } else {
        updateUser(input, id);
      }

      history("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter name..."
          value={name}
          onChange={handleChange}
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          value={email}
          onChange={handleChange}
          id="email"
          name="email"
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          placeholder="Enter contact number..."
          value={contact}
          onChange={handleChange}
          id="contact"
          name="contact"
        />
        <button type="submit" className="submit-btn">
          {id ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddEdit;
