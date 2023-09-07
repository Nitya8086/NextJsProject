import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const details = [
  { id: "1", name: "Yash", role: "Senior Developer" },

  { id: "2", name: "Vaibhav", role: "Backend Developer" },

  { id: "3", name: "Suresh", role: "Frontend Developer" },
];
const AboutPage = () => {
  const developerName = details.map((member) => {
    return (
      <div key={member.id}>
        <Link href={`aboutUs/${member.id}`}>
          <h1>Name : {member.name}</h1>
        </Link>
      </div>
    );
  });
  return <div>{developerName}</div>;
};

export default AboutPage;
