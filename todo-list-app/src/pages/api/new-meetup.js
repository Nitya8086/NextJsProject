import { MongoClient } from "mongodb";

//api/new-meetup
//POST/api/new-meetup
async function handle(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://nityapatel:Root@cluster0.axnsdsy.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log("result", result);
    client.close();
    res.status(201).json({ message: "Meetup Inserted!" });
  }
}
export default handle;
