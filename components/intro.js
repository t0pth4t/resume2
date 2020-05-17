import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href='/'>
          <a>Nick Oliver - Software Devloper</a>
          </Link>
      </h1>
      <h4 className="text-center md:text-left text-2xl mt-5 md:pl-8">
        <Link href='/blog'>
          <a className="hover:underline">Blog</a>
        </Link>
      </h4>
    </section>
  )
}
