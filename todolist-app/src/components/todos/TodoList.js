"use client";
import React, { useState } from "react";
import classes from "./TodoList.module.css";
import Card from "../ui/Card";
import { TiDelete } from "react-icons/ti";
import { GrFormEdit } from "react-icons/gr";
import { AiOutlineCheckCircle } from "react-icons/ai";
import EditTodos from "./EditTodos";

const TodoList = (props) => {
  const [edit, setEdit] = useState(false);
  const [editToddos, setEditTodos] = useState({});
  // console.log("props", props);
  const todos = props.todos.filter((item) => item.completed === false);
  console.log("todo list", todos);
  const deleteTodoHandeler = async (id) => {
    console.log("idd", id);
    try {
      const response = await fetch("/api/delete-todo", {
        method: "DELETE",
        body: JSON.stringify({ id: id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("try me gaya");

      const res = await response.json();
      props.deleteTodos(id);
      console.log("iddd mila", id);
      console.log("tgvvgjb", res);
    } catch (error) {
      console.log(error);
    }
  };
  const completeHandeler = (data) => {
    console.log("completed data", data);
    data.completed = true;
    const newData = {
      tododata: data.title,
      completed: data.completed,
    };
    const response = fetch("/api/edit-todo", {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
        newData,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    newData.id = data.id;
    props.filterTodos(newData);
  };

  return (
    <Card>
      <div className={classes.content}>
        <h1>Todo List</h1>
        <h2>
          {todos.map((todo) => (
            <p className={classes.completed} key={todo.id}>
              <AiOutlineCheckCircle
                onClick={() =>
                  completeHandeler({
                    id: todo.id,
                    title: todo.title,
                    completed: todo.completed,
                  })
                }
              />
              {todo.title}
              <GrFormEdit
                className="edit"
                onClick={() => {
                  setEdit(true);
                  setEditTodos({
                    id: todo.id,
                    title: todo.title,
                    completed: todo.completed,
                  });
                }}
              />
              <TiDelete onClick={() => deleteTodoHandeler(todo.id)} />
            </p>
          ))}
        </h2>
        {edit && (
          <EditTodos
            data={editToddos}
            setEdit={setEdit}
            filterTodos={props.filterTodos}
          />
        )}
      </div>
    </Card>
  );
};

export default TodoList;
