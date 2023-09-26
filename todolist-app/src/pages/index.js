import Todos from "@/components/todos/Todos";
import { MongoClient } from "mongodb";
const HomePage = (props) => {
  console.log("honepage", props);
  return (
    <>
      <Todos todos={props} />
    </>
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

  return {
    props: {
      todos: todos.map((todo) => ({
        title: todo.tododata,
        id: todo._id.toString(),
        completed: todo.completed,
      })),
      revalidate: 1,
    },
  };
}

export default HomePage;
