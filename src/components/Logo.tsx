/** @jsxImportSource @emotion/react */

import * as React from "react";

const Logo = ({ color, css }: { color: string; css?: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 4124 2696"
    css={css}
  >
    <path
      fill={color}
      d="M4046.683 1281.693c-30.87 0-55.19 8.504-72.96 25.477-17.733 17.01-25.843 42.487-25.843 76.434v291.836c0 159.019-46.319 281.015-137.446 365.953-91.09 84.902-208.882 127.389-386.466 127.389l-.332-643.802v-129.795c0-90.245 14.693-160.575 44.006-208.455 29.351-47.843 77.23-81.825 143.602-101.911-66.372-20.049-114.251-54.032-143.602-101.911-29.313-47.258-44.006-117.328-44.006-208.454V554.418c0-50.955-13.898-89.538-41.691-118.124-27.794-27.794-68.689-41.691-122.757-41.691h-22.918V.856h171.152c178.278 0 311.922 42.487 403.012 127.389 91.127 84.938 137.446 206.934 137.446 365.953V786.34c0 33.83 8.11 59.155 25.843 76.128 17.77 17.009 42.09 25.477 72.96 25.477h76.433v393.748h-76.433Zm-1473.919 291.216H2069.72c-6.945 199.611-63.441 350.999-169.501 454.691-113.492 109.876-279.893 165.065-498.359 165.065-127.402 0-242.052-20.483-344.723-61.378-102.707-40.894-187.247-100.753-253.62-179.502l294.153-347.424c43.21 54.068 85.698 94.202 127.91 120.44 41.169 26.949 84.38 39.375 129.183 39.375 57.108 0 100.753-16.973 130.863-50.956 16.261-18.332 28.122-41.414 35.601-69.12V946.571H979.545V534.295h1090.912v589.279h502.307V549.166h546.614v1621.312l-71.953-.771c-535.821 2.592-474.661-305.516-474.661-596.798ZM887.862 2301.435v393.747H716.466c-177.585 0-311.922-42.487-403.012-127.389-91.127-84.938-136.654-206.934-136.654-365.953V1910.4c0-33.83-8.902-59.82-26.636-76.83-17.769-16.973-41.404-24.64-72.959-24.64H.772v-394.584h76.433c31.555 0 55.19-8.469 72.959-25.478 17.734-16.973 26.636-42.451 26.636-76.434v-291.836c0-159.019 45.527-281.015 136.654-365.953 91.09-84.902 207.91-127.389 385.494-127.389l1.305 553.562v220.036c0 91.126-14.694 160.611-44.008 208.454-29.35 47.879-77.085 81.862-143.602 101.911 66.517 20.085 114.252 54.068 143.602 101.911 29.314 48.77 44.008 117.364 44.008 208.455v220.035c0 50.955 13.896 90.33 41.69 118.124 27.794 27.794 68.689 41.691 122.757 41.691h23.162Z"
    />
  </svg>
);

export default Logo;
