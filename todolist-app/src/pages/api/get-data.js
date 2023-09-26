import { MongoClient, ObjectId } from "mongodb";
async function handler(req, res) {
  console.log("hit hua");
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://root:root@cluster0.sosithg.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();
    const todoCollection = db.collection("todos");
    console.log("putt call hua");
    const updatedData = await todoCollection.find().toArray();
    console.log("putt call hua", updatedData);
    res.status(200).json({ message: updatedData });
    client.close();
  }
}
export default handler;
