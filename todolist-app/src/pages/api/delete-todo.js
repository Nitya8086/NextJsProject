import { MongoClient, ObjectId } from "mongodb";

async function handeler(req, res) {
  console.log("enter hua");
  if (req.method === "DELETE") {
    const client = await MongoClient.connect(
      "mongodb+srv://root:root@cluster0.sosithg.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const todosCollection = db.collection("todos");
    const { id } = req.body;
    const query = { _id: new ObjectId(id) };
    const result = await todosCollection.deleteOne(query);
    console.log("result", result);
    res.status(201).json({ message: "Todo deleted!!" });
    client.close();
  }
}
export default handeler;
