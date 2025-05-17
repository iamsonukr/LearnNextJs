import Image from "next/image";
import Hello from "./components/page";

export default function Home() {
  console.log("What am i doing here")
  return (
    <>
    <p className="text-3xl" >Welcome </p>
    <Hello/>
    </>
  );
}
