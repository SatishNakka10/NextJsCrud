"use client";

import Todo from "@/Components/Todo";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [formData, setformdata] = useState({
    title: "",
    description: "",
  });

  const [tododata, settododata] = useState([]);
  const fetchtodos = async () => {
    const response = await axios("/api");
    settododata(response.data.todos);
  };

const deletetodo=async(id)=>{
  const response=await axios.delete('/api',{
    params:{
        mongoId:id
    }
  
  })
toast.success(response.data.msg)
fetchtodos()
}

const completetodo = async (id) => {
  const response = await axios.put("/api", {}, {
    params: { mongoId: id }
  });
  toast.success(response.data.msg);
  fetchtodos();
}



  useEffect(() => {
    fetchtodos();
  }, []);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformdata((form) => ({ ...form, [name]: value }));
    console.log(formData);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api", formData);
      toast.success(response.data.msg);
      setformdata({
        title: "",
        description: "",
      });
     await fetchtodos();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <form
        onSubmit={onSubmitHandler}
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
      >
        <input
          type="text"
          value={formData.title}
          onChange={onChangeHandler}
          name="title"
          className="px-3 py-2 border-2 w-full"
          placeholder="Enter Title"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={onChangeHandler}
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-600 py-3 mt-1 px-11 text-white"
        >
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto mb-24">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tododata.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  deletetodo={deletetodo}
                  completetodo={completetodo}
                ></Todo>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
