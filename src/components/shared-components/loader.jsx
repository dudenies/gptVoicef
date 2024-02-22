import React from 'react';

function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center mt-[-10px]">
          <div className="rounded-full bg-indigo-200 w-[30px] h-[30px] mt-[-10px] relative flex justify-center items-center animate-spin">
            <svg
              className="absolute top-[2px] right-0"
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_2495_2146" fill="white">
                <path
                  d="M12 16C12 12.2354 10.2933 8.66604 7.90411 5.64394C5.5149 2.62185 2.08539 0.504832 -1.44345e-07 0.0103149L-4.76837e-07 2.85757C2.82123 3.88153 4.98324 5.57919 6.61458 7.86994C8.24593 10.1607 9.12353 13.0004 9.12353 16H12Z"
                />
              </mask>
              <path
                d="M12 16C12 12.2354 10.2933 8.66604 7.90411 5.64394C5.5149 2.62185 2.08539 0.504832 -1.44345e-07 0.0103149L-4.76837e-07 2.85757C2.82123 3.88153 4.98324 5.57919 6.61458 7.86994C8.24593 10.1607 9.12353 13.0004 9.12353 16H12Z"
                stroke="#4338CA"
                strokeWidth="5"
                mask="url(#path-1-inside-1_2495_2146)"
              />
            </svg>
            <div className="rounded-full bg-white w-[20px] h-[20px]"></div>
          </div>
        </div>
      );
}

export default LoadingSpinner;
