import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const id = req.body.id;

    const client = await MongoClient.connect(
      "mongodb+srv://nityapatel:Root@cluster0.axnsdsy.mongodb.net/todo?retryWrites=true&w=majority"
    );
    const db = client.db();

    const todoCollection = db.collection("todolist");

    try {
      const obj = new ObjectId(id);
      const filter = { _id: obj };

      const result = await todoCollection.deleteOne(filter);

      if (result.deletedCount === 0) {
        res.status(404).json({ message: "Document not found" });
      } else {
        res
          .status(200)
          .json({ message: "Successfully deleted todo!", _id: id });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    } finally {
      client.close();
    }
  }
}

export default handler;
