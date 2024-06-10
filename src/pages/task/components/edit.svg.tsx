import { SVGProps } from "react";
const Edit = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        {...props}
    >
        <path fill="none" stroke="none" d="M0 0h24v24H0z" />
        <path
            stroke="none"
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        />
    </svg>
);
export default Edit;
