import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A ffirst meetup",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fphoto&psig=AOvVaw3cc7qAecGvRWwQUhBspTAW&ust=1694159503920000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJC1nuKCmIEDFQAAAAAdAAAAABAE",
    address: "Some address 5, some city ",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fphoto&psig=AOvVaw3cc7qAecGvRWwQUhBspTAW&ust=1694159503920000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJC1nuKCmIEDFQAAAAAdAAAAABAE",
    address: "Some address 5, some city ",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://www.google.com/search?sca_esv=563328209&sxsrf=AB5stBj5jN-WViU_p-P30xxN8GCec6wdMw:1694073098733&q=photos&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiv3ZeKgpiBAxW2QfUHHZWCAvIQ0pQJegQICxAB&biw=1366&bih=651&dpr=1#imgrc=qcYtHxBEwYRUGM",
    address: "Some address 5, some city ",
    description: "This is a third meetup",
  },
];
const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
