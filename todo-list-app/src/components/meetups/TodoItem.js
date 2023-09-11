import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./TodoItem.module.css";

function TodoItem(props) {
  const router = useRouter();
  const deleteHandeler = () => {
    router.push("/" + props.id);
  };

  return (
    <div className={classes.Card_card__Y6veD}>
      <div className={classes.TodoList_control__A2xpa}>
        <h1 className={classes.todoostyle}> Todo List</h1>
      </div>

      <div>
        <table className={classes.TodoList_table__i4q5p}>
          <tbody>
            <tr className={classes.TodoList_tr__5V8_R}>
              <td>
                <input
                  type="checkbox"
                  className={classes.checkbox}
                  onClick={deleteHandeler}
                />
              </td>
              <td className={classes.TodoList_td__JovpP}>{props.title}</td>
              <td>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoItem;
