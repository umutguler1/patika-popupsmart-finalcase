import React from "react";

const Header = () => {
  return (
    <nav className=" w-full h-[82px] flex items-center justify-between font-inter">
      <button className="flex items-center space-x-[10px]">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0004 36C4.70288 36 0 31.5808 0 18.0004C0 4.41999 4.70288 0 18.0004 0C31.2979 0 36 4.41999 36 18.0004C36 31.5808 31.2979 36 18.0004 36Z"
            fill="#7D4AEA"
          />
          <path
            opacity="0.4"
            d="M12.0001 13.25V16C12.0001 18.8003 12.0001 20.2004 12.5451 21.27C13.0245 22.2108 13.7894 22.9757 14.7302 23.455C15.7997 24 17.1999 24 20.0001 24H22.75C22.75 24.6967 22.75 25.0451 22.7067 25.3369C22.4482 27.0797 21.0797 28.4482 19.3369 28.7067C19.0451 28.75 18.6967 28.75 18 28.75H13.65C11.4098 28.75 10.2897 28.75 9.43404 28.314C8.68139 27.9305 8.06947 27.3186 7.68597 26.566C7.25 25.7103 7.25 24.5902 7.25 22.35V18.0001C7.25 17.3033 7.25 16.9549 7.29331 16.663C7.55186 14.9202 8.92023 13.5519 10.663 13.2933C10.9549 13.25 11.3033 13.25 12.0001 13.25Z"
            fill="white"
          />
          <path
            d="M22.35 7.25C24.5902 7.25 25.7103 7.25 26.566 7.68597C27.3186 8.06947 27.9305 8.68139 28.314 9.43404C28.75 10.2897 28.75 11.4098 28.75 13.65V16.35C28.75 18.5902 28.75 19.7103 28.314 20.566C27.9305 21.3186 27.3186 21.9305 26.566 22.314C25.7103 22.75 24.5902 22.75 22.35 22.75H19.65C17.4098 22.75 16.2897 22.75 15.434 22.314C14.6814 21.9305 14.0695 21.3186 13.686 20.566C13.25 19.7103 13.25 18.5902 13.25 16.35V13.65C13.25 11.4098 13.25 10.2897 13.686 9.43404C14.0695 8.68139 14.6814 8.06947 15.434 7.68597C16.2897 7.25 17.4098 7.25 19.65 7.25H22.35Z"
            fill="white"
          />
        </svg>

        <h3 className="font-extrabold leading-[18px]">modal.cards</h3>
      </button>
      <div className="flex items-center gap-x-[30px] mr-52 text-sm">
        <button className="flex items-center space-x-2">
          <p>Solutions</p>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.4425 0.442871L5 3.87787L1.5575 0.442871L0.5 1.50037L5 6.00037L9.5 1.50037L8.4425 0.442871Z"
              fill="black"
            />
          </svg>
        </button>

        <button>Product Tour</button>
        <button>Showcase</button>
        <button>Pricing</button>
      </div>
      <div className="flex items-center space-x-10 text-sm">
        <button className="w-fit">Sign In</button>
        <button className="bg-custom-purple text-custom-white px-5 py-2 rounded-3xl w-36 text-center drop-shadow-md">
          Try for free
        </button>
      </div>
    </nav>
  );
};

export default Header;
