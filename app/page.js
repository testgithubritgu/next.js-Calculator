'use client'
import Link from "next/link";

export default async function Home({ params ,searchParams}) {
  console.log(await params)
  return (
    <>
  <h1>
    this is my first next.js Calculator App
  </h1>
  <Link href={"/about"}>
  Go To About
  </Link>
    </>
  );
}
