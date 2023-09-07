//our-domain.com/new-meetup

import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const addMeetupHandeler = (enteredMeetupData) => {
    console.log("meet", enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandeler} />;
};

export default NewMeetUpPage;
