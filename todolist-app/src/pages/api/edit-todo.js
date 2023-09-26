import { MongoClient, ObjectId } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      "mongodb+srv://root:root@cluster0.sosithg.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todoCollection = db.collection("todos");
    console.log("putt call hua");
    const { id, newData } = req.body;
    console.log("id and new", id, newData);
    const query = { _id: new ObjectId(id) };
    const updatedData = await todoCollection.findOneAndReplace(query, newData);
    console.log("putt call hua", updatedData);
    res.status(200).json({ message: "updated" });
    client.close();
  }
}
export default handler;
