import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import NewTodoForm from "../meetups/NewTodoForm";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <h1 className={classes.todolist}>Add New Todo</h1>
      <NewTodoForm />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
