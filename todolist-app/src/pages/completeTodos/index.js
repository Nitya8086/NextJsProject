import { MongoClient } from "mongodb";
import React from "react";

const CompleteTodos = (props) => {
  console.log("completeTodos", props);
  return (
    <div>
      <ul>
        {props.todos.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // fetch data from api
  const client = await MongoClient.connect(
    "mongodb+srv://root:root@cluster0.sosithg.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const todosCollection = db.collection("todos");
  const todos = await todosCollection.find().toArray();
  console.log("todosss", todos);
  client.close();
  const completetodo = todos.filter((item) => item.completed === true);
  console.log("dur dur", completetodo);
  return {
    props: {
      todos: completetodo.map((todo) => ({
        title: todo.tododata,
        id: todo._id.toString(),
        completed: todo.completed,
      })),
      revalidate: 1,
    },
  };
}
export default CompleteTodos;
