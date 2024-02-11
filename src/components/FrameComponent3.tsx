import { FunctionComponent } from "react";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-button-button">
      <div className="w-[461px] flex flex-col items-start justify-start gap-[10px] max-w-full">
        <b className="relative leading-[25.27px] capitalize">Campaign Name</b>
        <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
          <input
            className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[250px] max-w-full"
            placeholder="Campaign Name"
            type="text"
          />
        </div>
      </div>
      <div className="w-[461px] flex flex-col items-start justify-start gap-[10px] max-w-full">
        <b className="relative leading-[25.27px] capitalize">Job Title</b>
        <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
          <input
            className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[250px] max-w-full"
            placeholder="Job Title"
            type="text"
          />
        </div>
      </div>
      <div className="w-[163px] flex flex-col items-start justify-start gap-[10px] min-w-[106px]">
        <b className="relative leading-[25.27px] capitalize">JobDiva Job ID</b>
        <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
          <input
            className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[86px]"
            placeholder="JobDiva Job ID"
            type="text"
          />
        </div>
      </div>
      <div className="w-[525px] flex flex-col items-start justify-start gap-[10px] max-w-full">
        <b className="relative leading-[25.27px] capitalize">Job Type</b>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[10px] max-w-full text-base text-darkslategray-200 mq900:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[5.81px]">
            <input
              className="border-darkslategray-200 accent-darkslategray-200 cursor-pointer m-0 h-[23.3px] w-[23.3px] flex flex-row items-center justify-center"
              checked={true}
              type="radio"
            />
            <div className="relative leading-[25.27px] capitalize font-medium">
              Full Time
            </div>
            <button className="cursor-pointer p-2.5 bg-whitesmoke-400 rounded-[5.26px] overflow-hidden flex flex-row items-center justify-center border-[0.2px] border-solid border-gray-100 hover:bg-lightgray hover:box-border hover:border-[0.2px] hover:border-solid hover:border-darkslategray-100">
              <div className="relative text-sm leading-[25.27px] font-button-button text-gray-100 text-left">
                Salary
              </div>
            </button>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start min-w-[224px] max-w-full text-gray-200">
            <div className="flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[5.81px] max-w-full mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[5.81px]">
                <input
                  className="cursor-pointer m-0 h-[23.3px] w-[23.3px] rounded-[58.14px] bg-white box-border border-[2.3px] border-solid border-gray-200"
                  type="radio"
                />
                <div className="relative leading-[25.27px] capitalize font-medium">
                  Contract
                </div>
              </div>
              <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[75px] border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[58px]"
                  placeholder="Hourly Rate "
                  type="text"
                />
              </div>
              <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[75px] text-sm text-gray-100 border-[0.2px] border-solid border-gray-100">
                <div className="flex-1 relative leading-[25.27px]">
                  Duration
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-end justify-start">
        <div className="h-[51px] rounded-6xs bg-gray-100 flex flex-row items-center justify-center py-[14.008905410766602px] px-[21px] box-border whitespace-nowrap">
          <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
            Fetch JD
          </b>
        </div>
      </button>
    </div>
  );
};

export default FrameComponent3;
