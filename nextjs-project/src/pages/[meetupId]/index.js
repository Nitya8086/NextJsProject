import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const router = useRouter();
  return (
    <MeetupDetail
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVeYVkodHl4CG9TEpPrTl8dqxFxcVjes6tbubEoe5C-kfYIlXiYTkSJo_6fZ12mkyH4I&usqp=CAU"
      title=" First meetup"
      address="Some address some  address"
      description="This is a frist meetup"
    />
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://nityapatel:Root@cluster0.axnsdsy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString,
      },
    })),
  };
}
export async function getStaticProps(context) {
  //fetch data for simgle meet up
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://nityapatel:Root@cluster0.axnsdsy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const selectedMeetup = db.collection("meetups");
  const meetups = await meetupsCollection.findOne({ _id: meetupId });
  client.close();
  console.log(meetupId);
  return {
    props: {
      meetupData: selectedMeetup,
    },
  };
}

export default MeetupDetails;
