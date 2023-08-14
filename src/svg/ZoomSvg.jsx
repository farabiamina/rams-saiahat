import * as React from "react";
const SVGComponent = (props) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 2.56066L3.96967 5.03033C4.26256 5.32322 4.73744 5.32322 5.03033 5.03033C5.32322 4.73744 5.32322 4.26256 5.03033 3.96967L2.56066 1.5L4.5 1.5C4.91421 1.5 5.25 1.16421 5.25 0.75C5.25 0.335787 4.91421 0 4.5 0H0.75C0.335787 0 0 0.335786 0 0.75V4.5C0 4.91421 0.335786 5.25 0.75 5.25C1.16421 5.25 1.5 4.91421 1.5 4.5L1.5 2.56066Z"
      fill="white"
    />
    <path
      d="M8.03033 6.96967C7.73744 6.67678 7.26256 6.67678 6.96967 6.96967C6.67678 7.26256 6.67678 7.73744 6.96967 8.03033L9.43934 10.5H7.5C7.08579 10.5 6.75 10.8358 6.75 11.25C6.75 11.6642 7.08579 12 7.5 12H11.25C11.6642 12 12 11.6642 12 11.25V7.5C12 7.08579 11.6642 6.75 11.25 6.75C10.8358 6.75 10.5 7.08579 10.5 7.5V9.43934L8.03033 6.96967Z"
      fill="white"
    />
  </svg>
);
export default SVGComponent;