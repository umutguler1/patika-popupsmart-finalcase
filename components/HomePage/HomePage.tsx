import { Fragment } from "react";

import Header from "../Layout/Header";
import CamperModal from "./CamperModal";
import GeneralInfo from "./GeneralInfo";
import HomePageFooter from "./HomePageFooter";

const HomePage = () => {
  return (
    <Fragment>
      <div className="h-[910px] bg-gradient-to-b from-custom-white to-[#E3F2F6] px-52">
        <Header />

        <GeneralInfo />
        <div className="absolute w-[500px] h-[315px] left-[870px] top-[595px] bg-gradient-to-tr rounded-t-[40px] from-[#E3F2F6] to-custom-white opacity-70"></div>
        <CamperModal />
        <div className="absolute ml-[744px] mt-[175px] font-bold">
          <div className="flex items-center space-x-2 bg-custom-white rounded-xl px-4 py-3 w-fit">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_79_9552)">
                <path
                  d="M11.9995 2.02002C6.48953 2.02002 2.01953 6.49002 2.01953 12C2.01953 17.51 6.48953 21.98 11.9995 21.98C17.5095 21.98 21.9795 17.51 21.9795 12C21.9795 6.49002 17.5095 2.02002 11.9995 2.02002ZM11.4795 17.88V13.74H8.81953C8.44953 13.74 8.19953 13.34 8.37953 13.01L12.0595 5.84002C12.2895 5.37002 12.9995 5.54002 12.9995 6.07002V10.26H15.5395C15.9095 10.26 16.1495 10.65 15.9895 10.98L12.4295 18.1C12.1895 18.58 11.4795 18.41 11.4795 17.88Z"
                  fill="#F2A737"
                />
              </g>
              <defs>
                <clipPath id="clip0_79_9552">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Grow email list</p>
          </div>
          <div className="flex items-center space-x-2 bg-custom-white bg-opacity-75 rounded-xl px-4 py-3 w-fit mt-3 -ml-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_79_9559)">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.41 18.09V18.67C13.41 19.4 12.81 20 12.08 20H12.07C11.34 20 10.74 19.4 10.74 18.67V18.07C9.41 17.79 8.23 17.06 7.73 15.83C7.5 15.28 7.93 14.67 8.53 14.67H8.77C9.14 14.67 9.44 14.92 9.58 15.27C9.87 16.02 10.63 16.54 12.09 16.54C14.05 16.54 14.49 15.56 14.49 14.95C14.49 14.12 14.05 13.34 11.82 12.81C9.34 12.21 7.64 11.19 7.64 9.14C7.64 7.42 9.03 6.3 10.75 5.93V5.33C10.75 4.6 11.35 4 12.08 4H12.09C12.82 4 13.42 4.6 13.42 5.33V5.95C14.8 6.29 15.67 7.15 16.05 8.21C16.25 8.76 15.83 9.34 15.24 9.34H14.98C14.61 9.34 14.31 9.08 14.21 8.72C13.98 7.96 13.35 7.47 12.09 7.47C10.59 7.47 9.69 8.15 9.69 9.11C9.69 9.95 10.34 10.5 12.36 11.02C14.38 11.54 16.54 12.41 16.54 14.93C16.52 16.76 15.15 17.76 13.41 18.09V18.09Z"
                  fill="#63C77F"
                />
              </g>
              <defs>
                <clipPath id="clip0_79_9559">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="">Increase sales conversion</p>
          </div>
        </div>
      </div>
      <div className="h-[630px] bg-[#666666] px-52">
        <HomePageFooter />
      </div>
    </Fragment>
  );
};

export default HomePage;
