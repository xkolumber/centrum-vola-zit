"use client";
import React from "react";

const IconYoutube = () => {
  return (
    <>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="youtube-icon"
      >
        <path
          d="M0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18Z"
          fill="#F7F7F7"
          className="background"
        />
        <path
          d="M27.1988 13.5549C26.978 12.7067 26.3273 12.0387 25.5012 11.812C24.004 11.4 18 11.4 18 11.4C18 11.4 11.996 11.4 10.4987 11.812C9.67254 12.0387 9.02193 12.7067 8.80113 13.5549C8.4 15.0923 8.4 18.3 8.4 18.3C8.4 18.3 8.4 21.5076 8.80113 23.0451C9.02193 23.8933 9.67254 24.5613 10.4987 24.7881C11.996 25.2 18 25.2 18 25.2C18 25.2 24.004 25.2 25.5012 24.7881C26.3273 24.5613 26.978 23.8933 27.1988 23.0451C27.6 21.5076 27.6 18.3 27.6 18.3C27.6 18.3 27.6 15.0923 27.1988 13.5549Z"
          fill="#757575"
        />
        <path d="M16.2 21.6V15.6L21 18.6001L16.2 21.6Z" fill="#F7F7F7" />
      </svg>
      <style jsx>{`
        .youtube-icon {
          cursor: pointer;
        }
        .youtube-icon:hover .background {
          fill: #e0e0e0;
        }
      `}</style>
    </>
  );
};

export default IconYoutube;
