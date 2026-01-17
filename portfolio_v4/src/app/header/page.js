import Link from 'next/link'

const header = () => {
  return (
    <div>
        <nav className="flex gap-4">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default header