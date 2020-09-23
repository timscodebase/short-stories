import Link from "next/link";
import { useRouter } from "next/router";

import { getSiteMetaData } from "utils/helpers";

import Bio from "components/Bio";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";
  const { title } = getSiteMetaData();

  const header = isRoot ? (
    <>
      <h1 className="mb-8">
        <Link href="/">
          <a className="font-black leading-none text-gray-200 no-underline text-5xl font-display">
            {title}
          </a>
        </Link>
      </h1>
      <Bio className="my-14" />
    </>
  ) : (
    <>
      <h1 className="mb-2">
        <Link href="/">
          <a className="text-5xl font-black text-gray-200 no-underline font-display">
            {title}
          </a>
        </Link>
      </h1>
      <Bio className="my-14" />
    </>
  );

  return (
    <div className="bg-blue-900 max-w-screen-lg px-4 py-4 mx-auto antialiased font-body">
      <div className="bg-blue-200 container-x1 flex flex-wrap">
        <header className="bg-red-600 lg:w-1/4 lg:border-r-8 lg:border-blue-900 sm:w-full p-4">
          {header}
        </header>
        <main className="lg:w-3/4 sm:w-full p-4">{children}</main>
      </div>
      <footer className="bg-blue-200 mt-2 p-4 text-center text-lg font-light">
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://nextjs.org/">Next.js</a>
        &#128293;
      </footer>
    </div>
  );
}
