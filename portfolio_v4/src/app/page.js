import Link from "next/link";

export default function Home() {
  return (
    <>
     <nav className="flex gap-4">
      <Link href="/">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/">Projects</Link>
      <Link href="/">Contact</Link>
     </nav>
    
    </>
  );
}
