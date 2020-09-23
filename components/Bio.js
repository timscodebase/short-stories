import clsx from "clsx";

import Image from "./Image";
import { getSiteMetaData } from "utils/helpers";

export default function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className="sm:flex sm:flex-wrap sm:items-center">
      <Image
        className="mb-4 rounded-full mx-auto lg:w-40 lg:h-40 md:w-20 md:h-20 sm:w-16 sm:h-16"
        src={require("../content/assets/profile.png")}
        previewSrc={require("../content/assets/profile.png?lqip")}
        alt="Picture of the author"
      />
      <p className="text-base leading-7 text-gray-100 lg:w-full sm:w-3/4">
        Written by <b className="font-semibold">{author.name}</b>{" "}
        {author.summary}{" "}
        <a
          className="font-extrabold text-gray-200"
          href={`https://twitter.com/${social.twitter}`}
        >
          Follow him on twitter
        </a>
      </p>
    </div>
  );
}
