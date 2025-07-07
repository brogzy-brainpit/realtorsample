import React from 'react';

function Landing() {
  return (
    <div className="bg-red-600 mix-blend-scree w-screen h-screen overflow-hidden">
      <div className="flex w-full h-full">
        {/* Left side */}
        <div className="w-[50vw] mix-blend-scree h-full bg-red-950 flex items-center justify-center">
          <svg
  className="shrink-0"
  viewBox="0 0 516 516"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{ opacity: 1, transform: 'none' }}
>
  <g clipPath="url(#a)" fill="black">
    <path d="M250.01 265.62v250H171.9V343.74h-.02c-8.63.01-15.62 6.99-15.62 15.62v43.56h-.02v112.7H93.78v-112.7h-.02v-43.56c0-8.63-6.99-15.62-15.62-15.62h-.02v171.88H0v-250h250.01ZM0 0v250h250.01V0H0Zm156.26 171.85c0 5.7-1.53 11.05-4.2 15.65-5.4 9.33-15.49 15.6-27.05 15.6v.04H93.76V46.84h31.25v.03c11.57 0 21.67 6.29 27.07 15.63 2.66 4.6 4.18 9.93 4.18 15.62v93.73ZM265.61 265.62v78.12h93.75v-15.62c0-5.71 1.53-11.05 4.2-15.66 5.41-9.32 15.5-15.59 27.05-15.59s21.64 6.27 27.05 15.59c2.67 4.61 4.2 9.95 4.2 15.66 0 5.71-1.52 11.03-4.18 15.62-5.4 9.34-15.5 15.63-27.07 15.63v.03H265.6v156.22h250.01v-250H265.6h.01Zm97.94 156.26c5.4-9.34 15.5-15.63 27.07-15.63s21.67 6.29 27.07 15.63c2.66 4.6 4.18 9.93 4.18 15.62 0 5.69-1.52 11.03-4.19 15.63-5.4 9.34-15.49 15.62-27.06 15.62-11.57 0-21.66-6.28-27.06-15.62-2.67-4.6-4.19-9.94-4.19-15.63 0-5.69 1.52-11.02 4.18-15.62ZM515.62 250v-78.12h-93.75v15.62c0 5.71-1.53 11.05-4.2 15.66-5.41 9.32-15.5 15.59-27.05 15.59s-21.64-6.27-27.05-15.59c-2.67-4.61-4.2-9.95-4.2-15.66 0-5.71 1.52-11.03 4.18-15.62 5.4-9.34 15.5-15.63 27.07-15.63v-.03h125.01V0H265.62v250h250.01-.01ZM417.69 93.75c-5.4 9.34-15.5 15.63-27.07 15.63s-21.67-6.29-27.07-15.63c-2.66-4.6-4.18-9.93-4.18-15.62 0-5.69 1.52-11.03 4.19-15.63 5.4-9.34 15.49-15.62 27.06-15.62 11.57 0 21.66 6.28 27.06 15.62 2.67 4.6 4.19 9.94 4.19 15.63 0 5.69-1.52 11.02-4.18 15.62Z" />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h515.62v515.62H0z" />
    </clipPath>
  </defs>
</svg>

        </div>

        {/* Right side with styled video */}
        <div className="w-[50vw] h-full relative group overflow-hidden">
          {/* VIDEO */}
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
          >
            <source src="/videos/demastrategiescom.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-700 ease-in-out pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
