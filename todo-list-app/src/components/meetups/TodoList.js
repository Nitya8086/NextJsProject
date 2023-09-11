import TodoItem from "./TodoItem";
import classes from "./TodoDetail";

function TodoList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <TodoItem key={meetup.id} id={meetup.id} title={meetup.title} />
      ))}
    </ul>
  );
}

export default TodoList;
