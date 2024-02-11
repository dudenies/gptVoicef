import { FunctionComponent } from "react";

const GroupComponent1: FunctionComponent = () => {
  return (
    <header className="self-stretch bg-white box-border flex flex-row items-center justify-start pt-[15px] pb-4 pr-[55px] pl-[60px] gap-[16px] top-[0] z-[99] sticky max-w-full text-left text-base text-darkslategray-200 font-button-button border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-[30px] mq1275:pr-[27px] mq1275:box-border">
      <div className="h-[78px] w-[1920px] relative bg-white box-border hidden max-w-full border-[0.5px] border-solid border-gainsboro-100" />
      <div className="w-[494px] flex flex-col items-start justify-start max-w-full text-9xl">
        <h2 className="m-0 relative text-inherit tracking-[0.18px] leading-[47px] font-medium font-inherit whitespace-nowrap z-[1]">
          VoCode-Profile Setup
        </h2>
      </div>
      <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[10.61px] max-w-full z-[2] text-left text-sm-8 text-gray-100 font-button-button mq1600:hidden">
        <div className="w-[190px] flex flex-row items-center justify-start gap-[10.08px] mq1275:hidden">
          <b className="relative leading-[23.05px] capitalize shrink-0">
            Status
          </b>
          <div className="h-[33.9px] flex-1 rounded-8xs-8 bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-start py-[10.609318733215332px] pr-4 pl-[15.913978576660156px] border-[0.2px] border-solid border-gray-100">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm-8 bg-[transparent] h-6 flex-1 relative leading-[23.05px] text-gray-100 text-left inline-block min-w-[61px]"
              placeholder="Active"
              type="text"
            />
          </div>
        </div>
        <div className="w-[189px] flex flex-row items-center justify-start gap-[10.08px] mq1275:hidden">
          <b className="relative leading-[23.05px] capitalize shrink-0 whitespace-nowrap">
            Calls Made
          </b>
          <div className="h-[33.9px] flex-1 rounded-8xs-8 bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-start py-[10.609318733215332px] pr-4 pl-[15.913978576660156px] border-[0.2px] border-solid border-gray-100">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm-8 bg-[transparent] h-6 flex-1 relative leading-[23.05px] text-gray-100 text-left inline-block min-w-[41px]"
              placeholder="999"
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[10.08px] mq1275:hidden">
          <b className="relative leading-[23.05px] capitalize whitespace-nowrap">
            Calls Completed
          </b>
          <div className="h-[33.9px] w-[100px] rounded-8xs-8 bg-whitesmoke-400 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[10.609318733215332px] pr-4 pl-[15.913978576660156px] border-[0.2px] border-solid border-gray-100">
            <input
              className="w-full [border:none] [outline:none] font-button-button text-sm-8 bg-[transparent] h-6 flex-1 relative leading-[23.05px] text-gray-100 text-left inline-block min-w-[41px]"
              placeholder="999"
              type="text"
            />
          </div>
        </div>
      </nav>
      <div className="flex flex-row items-start justify-start py-0 pr-[29px] pl-0 gap-[18px]">
        <div className="relative leading-[24px] font-medium z-[1]">Date:</div>
        <div className="relative leading-[24px] text-gray-100 z-[1]">
          03/02/22
        </div>
      </div>
      <div className="relative leading-[24px] font-medium z-[1]">Time:</div>
      <div className="flex flex-col items-start justify-start py-0 pr-6 pl-0 text-gray-100">
        <div className="relative leading-[24px] whitespace-nowrap z-[1]">
          12:45 AM EST
        </div>
      </div>
      <div className="w-[143px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border">
        <button className="cursor-pointer [border:none] p-2.5 bg-darkslategray-200 self-stretch rounded-8xs flex flex-row items-center justify-center z-[1] hover:bg-steelblue">
          <b className="relative text-sm tracking-[1.25px] leading-[16px] font-button-button text-white text-left">
            Logout
          </b>
        </button>
      </div>
      <img
        className="h-[25px] w-[23px] relative z-[1]"
        loading="eager"
        alt=""
        src="/vector.svg"
      />
      <img
        className="h-[23.9px] w-[23.9px] relative z-[1]"
        loading="eager"
        alt=""
        src="/group-4.svg"
      />
      <img
        className="h-[45px] w-[45px] relative rounded-[50%] object-cover z-[1]"
        loading="eager"
        alt=""
        src="/unsplashgrymxaqdtp8@2x.png"
      />
    </header>
  );
};

export default GroupComponent1;
