import React from "react";

const iconTypes: any = {
  loading: (
    <svg
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        strokeLinecap="round"
        r="40"
        strokeWidth="4"
        stroke="#009ef7"
        strokeDasharray="62.83185307179586 62.83185307179586"
        transform="rotate(253.819 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1.7s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="50"
        cy="50"
        fill="none"
        strokeLinecap="round"
        r="35"
        strokeWidth="4"
        stroke="#fff"
        strokeDasharray="54.97787143782138 54.97787143782138"
        strokeDashoffset="54.97787143782138"
        transform="rotate(-253.819 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;-360 50 50"
          keyTimes="0;1"
          dur="1.7s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  ),
  success: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48">
        <path d="M512.9 958.5c-246.7 0-447.4-200.7-447.4-447.4S266.2 63.6 512.9 63.6 960.3 264.3 960.3 511 759.6 958.5 512.9 958.5z m0-867.7c-231.8 0-420.3 188.6-420.3 420.3s188.6 420.3 420.3 420.3 420.3-188.6 420.3-420.3S744.7 90.8 512.9 90.8z" fill="#ffffff"></path>
        <path d="M253.7 493.3S317.6 642.4 417 642.4c95.9 0 387.2-339 387.2-339s-283 462.1-377.7 462.1c-78.7 0.1-135.5-112.4-172.8-272.2z" fill="#ffffff"></path>
    </svg>
  ),
  error: (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="9304"
      width="48"
      height="48"
    >
      <path d="M512.4 923.4c-107.5 0-209-41.5-285.9-116.7-77-75.4-120.6-176.2-122.7-284-1.1-55.2 8.6-108.9 29-159.8 19.6-49.1 48.2-93.4 85-131.7 36.8-38.3 79.9-68.6 128.2-90.2 50-22.3 103.3-34.2 158.5-35.3 2.8-0.1 5.5-0.1 8.3-0.1 107.5 0 209 41.5 285.9 116.7 77 75.4 120.6 176.2 122.7 284 1.1 55.2-8.6 108.9-29 159.8-19.6 49.1-48.2 93.4-85 131.7s-79.9 68.6-128.2 90.2c-50 22.3-103.3 34.2-158.5 35.3-2.7 0-5.5 0.1-8.3 0.1z m0.4-789.7c-2.6 0-5.2 0-7.7 0.1-210 4.2-377.4 178.4-373.2 388.4C136 728 306.7 895.5 512.5 895.5c2.6 0 5.2 0 7.7-0.1 210-4.2 377.4-178.4 373.2-388.4-4.1-205.9-174.9-373.3-380.6-373.3z" fill="#ffffff" p-id="9305"></path><path d="M705.7 707.4c-7 7-18.5 7-25.5 0L320 347.1c-7-7-7-18.5 0-25.5s18.5-7 25.5 0l360.3 360.3c6.9 7 6.9 18.5-0.1 25.5z" fill="#ffffff" p-id="9306"></path><path d="M320.3 707.4c7 7 18.5 7 25.5 0L706 347.1c7-7 7-18.5 0-25.5s-18.5-7-25.5 0L320.3 681.9c-7 7-7 18.5 0 25.5z" fill="#ffffff" p-id="9307"></path>
    </svg>
  )
};

const Icon = (props: any) => {
  return iconTypes[props.type];
};

export default Icon;
