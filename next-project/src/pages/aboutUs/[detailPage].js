import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const details = [
  {
    id: 1,
    name: "Yash",
    role: "Senior Developer",
  },

  {
    id: 2,
    name: "Vaibhav",
    role: "Backend Developer",
  },

  {
    id: 3,
    name: "Suresh",
    role: "Frontend Developer",
  },
];
const DetailPage = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log("ID:", id);

  const detailName = details.find((member) => member[id] === id);
  console.log("nitya", detailName);

  return (
    <Fragment>
      <h1>About Us</h1>

      {detailName ? (
        <div>
          <Link href={`/aboutUs/${detailName.id}`}>
            <p>Name: {detailName.name}</p>
          </Link>
          <p>Role: {detailName.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
      {/* <ul>
        {detais.map((member) => (
          <li key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <p>{detailName}</p>
          </li>
        ))}
      </ul> */}
    </Fragment>
  );
};

export default DetailPage;
