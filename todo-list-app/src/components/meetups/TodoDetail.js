import React from "react";

const TodoDetail = (props) => {
  return (
    <section className={classes.detail}>
      <h1>{props.title}</h1>
    </section>
  );
};

export default TodoDetail;
