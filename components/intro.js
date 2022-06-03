import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-center mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href='/'>
          <a>Nick Oliver - Software Developer</a>
          </Link>
      </h1>
      <h4 className="text-center md:text-left text-2xl mt-5 md:pl-8">
        <Link href='/blog'>
          <a className="hover:underline">Blog</a>
        </Link>
      </h4>
      <h4 className="text-center md:text-left text-2xl mt-5 md:pl-8">
        <Link href='https://rpubs.com/noliver' target="_blank">
          <a className="hover:underline">Data Science</a>
        </Link>
      </h4>
    </section>
  )
}
