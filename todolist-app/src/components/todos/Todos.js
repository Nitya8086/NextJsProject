"use client";
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const Todos = (props) => {
  const [todoData, setTodoData] = useState(props.todos.todos);
  function addTodo(data) {
    console.log(data);
    setTodoData([...todoData, data]);
    console.log("newTodo", todoData);
  }
  function deleteTodos(id) {
    console.log("idddd", id);
    const updateData = todoData.filter((todo) => todo.id !== id);
    setTodoData(updateData);
  }
  function filterTodos(data) {
    console.log("filterTodos", data);
    setTodoData((prevTodosData) =>
      prevTodosData.map((todo) =>
        todo.id === data.id
          ? { ...todo, title: data.tododata, completed: data.completed }
          : todo
      )
    );
    console.log("udpated data", todoData);
  }
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todoData}
        deleteTodos={deleteTodos}
        filterTodos={filterTodos}
      />
    </div>
  );
};

export default Todos;
