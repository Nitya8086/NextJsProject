"use client";
import React, { useRef } from "react";
import classes from "./TodoForm.module.css";
import Card from "../ui/Card";
const TodoForm = (props) => {
  // console.log("todoform", props);
  const todoInputTitle = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    const enterTodoTitle = todoInputTitle.current.value;
    todoInputTitle.current.value = "";
    console.log("todo", enterTodoTitle);
    const data = {
      tododata: enterTodoTitle,
      completed: false,
    };
    try {
      console.log("try me gaya");

      const response = await fetch("/api/new-todo", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      const res = await response.json();
      console.log("get data", res.result.insertedId);
      const todoData = {
        id: res.result.insertedId,
        title: enterTodoTitle,
        completed: false,
      };
      props.addTodo(todoData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <h1>Todo Name</h1>
          <textarea id="text" required rows="5" ref={todoInputTitle}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add todo</button>
        </div>
      </form>
    </Card>
  );
};

export default TodoForm;
