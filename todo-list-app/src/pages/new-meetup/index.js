//our-domain.com/new-meetup

import React from "react";
import NewTodoForm from "../../components/meetups/NewTodoForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetUpPage = () => {
  const router = useRouter();
  const addTodoHandeler = async (enteredMeetupData) => {
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
        <title>Add a new Todos</title>
        <meta
          name="description"
          content="Add your own meetups  and create  amazing networking oppoturnities!"
        />
      </Head>
      <NewTodoForm onAddTodo={addTodoHandeler} />
    </>
  );
};

export default NewMeetUpPage;
