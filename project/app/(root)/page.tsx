// import Image from "next/image";

import Hello from "../components/hello";

export default function Home() {
  console.log("what am i? server or client?");
  return (
    <>
    <h1 className="text-3xl">welcome  to  next ja</h1>
    <Hello/>
    </>
  );
}
