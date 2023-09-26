"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "../ui/Card";

const EditTodos = (props) => {
  console.log("EditTodos", props);
  const todoInputRef = useRef("");
  // console.log("gettitle", props.data.title);
  useEffect(() => {
    todoInputRef.current.value = props.data.title;
  }, []);
  const submitHandler = async (event) => {
    event.preventDefault();
    const editTodo = todoInputRef.current.value;
    const newData = {
      tododata: editTodo,
      completed: props.data.completed,
    };
    console.log("dataaa", newData);
    const response = await fetch("/api/edit-todo", {
      method: "POST",
      body: JSON.stringify({
        id: props.data.id,
        newData,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = newData;
    data.id = props.data.id;
    data.completed = props.data.completed;
    props.filterTodos(data);
    props.setEdit(false);
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <input type="text" ref={todoInputRef} />
        <div>
          <button>edit</button>
        </div>
      </form>
    </Card>
  );
};

export default EditTodos;
