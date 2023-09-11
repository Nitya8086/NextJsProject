//our-domain.com/new-meetup

import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

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
  return (
    <>
      <Head>
        <title>Add a new Meetups</title>
        <meta
          name="description"
          content="Add your own meetups  and create  amazing networking oppoturnities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandeler} />
    </>
  );
};

export default NewMeetUpPage;
