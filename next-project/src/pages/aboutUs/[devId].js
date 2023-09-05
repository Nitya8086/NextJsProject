import { useRouter } from "next/router";
import { details } from "./index";
export default function developer() {
  const params = useRouter();
  const id = params.query.devId;
  const dev = details.find((index) => index.id === id);

  console.log("ids", id);

  return (
    <div>
      {dev ? (
        <>
          <h1>{dev.name}</h1>
          <p>{dev.role}</p>
        </>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
}
