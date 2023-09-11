import { useRef } from "react";

import classes from "./NewTodoForm.module.css";

function NewTodoForm(props) {
  const titleInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;

    const todoData = {
      title: enteredTitle,
    };

    props.onAddTodo(todoData);
  }

  return (
    <div className={classes.todo}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Todo Name</label>
          <textarea
            id="todo"
            required=""
            rows="5"
            ref={titleInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Todos</button>
        </div>
      </form>
    </div>
  );
}

export default NewTodoForm;
