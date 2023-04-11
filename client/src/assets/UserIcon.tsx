import { SVGProps } from "react";

export default (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="0"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M74.0217 27.5C74.0217 40.4787 63.2717 51 50.0109 51C36.75 51 26 40.4787 26 27.5C26 14.5213 36.75 4 50.0109 4C63.2717 4 74.0217 14.5213 74.0217 27.5ZM31.0586 27.5C31.0586 37.7443 39.5438 46.049 50.0109 46.049C60.4779 46.049 68.9631 37.7443 68.9631 27.5C68.9631 17.2557 60.4779 8.95098 50.0109 8.95098C39.5438 8.95098 31.0586 17.2557 31.0586 27.5Z"
        className="fill-black transition-all duration-200 dark:fill-white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 54C22.402 54 13 63.402 13 75V91.4516C13 94.213 15.2386 96.4516 18 96.4516H82C84.7614 96.4516 87 94.213 87 91.4516V75C87 63.402 77.598 54 66 54H34ZM34.9677 59.3066C26.1312 59.3066 18.9677 66.4701 18.9677 75.3066V88.1453C18.9677 89.8022 20.3109 91.1453 21.9677 91.1453H78.0323C79.6891 91.1453 81.0323 89.8022 81.0323 88.1453V75.3066C81.0323 66.4701 73.8688 59.3066 65.0323 59.3066H34.9677Z"
        className="fill-black transition-all duration-200 dark:fill-white"
      />
    </svg>
  );
};
