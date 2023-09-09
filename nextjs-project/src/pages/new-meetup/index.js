//our-domain.com/new-meetup

import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetUpPage = () => {
  const router = useRouter();
  const addMeetupHandeler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandeler} />;
};

export default NewMeetUpPage;
