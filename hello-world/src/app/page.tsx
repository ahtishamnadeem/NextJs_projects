import Link from "next/link";

// here is the example to link the pages in Next.js  

export default function Home() {
  return (
    <div>
      <ul className="flex  justify-center gap-4 bg-orange-800 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/our-projects">Our-Projects</Link>
        </li>
      </ul>

      <h1 className="mt-20">Home Page</h1>
      <br />
      <br />
      <h2 className="flex items-center justify-center text-lg font-bold text-red-700">First (Next.js) Hello World Program with Dynamic-Routing</h2>
    </div>
  );
}
