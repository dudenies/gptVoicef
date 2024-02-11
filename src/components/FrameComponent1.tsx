import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  platform?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  platform,
}) => {
  return (
    <div className="self-stretch flex flex-row items-end justify-start max-w-full text-left text-lg text-gray-100 font-button-button">
      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
        <b className="relative leading-[25.27px] capitalize">Required Skills</b>
        <div className="self-stretch rounded-[5.26px] bg-whitesmoke-300 box-border overflow-hidden flex flex-row items-start justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
          <div className="flex-1 flex flex-row items-center justify-start gap-[5.81px] max-w-full mq450:flex-wrap">
            <button className="cursor-pointer [border:none] py-1.5 px-2.5 bg-white rounded-[5.26px] overflow-hidden flex flex-row items-center justify-center gap-[2.91px] hover:bg-gainsboro-200">
              <div className="relative text-sm leading-[25.27px] font-button-button text-gray-100 text-left">
                Figma
              </div>
              <img
                className="h-[18.1px] w-[18.1px] relative overflow-hidden shrink-0"
                alt=""
                src="/icbaselineclose.svg"
              />
            </button>
            <div className="w-[57px] rounded-[5.26px] bg-white overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-2.5 box-border gap-[2.91px]">
              <input
                className="w-[calc(100%_-_38.1px)] [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[10px]"
                placeholder="JS"
                type="text"
              />
              <img
                className="h-[18.1px] w-[18.1px] relative overflow-hidden shrink-0"
                alt=""
                src="/icbaselineclose.svg"
              />
            </div>
            <button className="cursor-pointer [border:none] py-1.5 px-2.5 bg-white rounded-[5.26px] overflow-hidden flex flex-row items-center justify-center gap-[2.91px] hover:bg-gainsboro-200">
              <div className="relative text-sm leading-[25.27px] font-button-button text-gray-100 text-left">
                WP
              </div>
              <img
                className="h-[18.1px] w-[18.1px] relative overflow-hidden shrink-0"
                alt=""
                src="/icbaselineclose.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] py-1.5 px-[9px] bg-white rounded-[5.26px] overflow-hidden flex flex-row items-center justify-center gap-[2.91px] whitespace-nowrap hover:bg-gainsboro-200">
              <div className="relative text-sm leading-[25.27px] font-button-button text-gray-100 text-left">{`Developer Website `}</div>
              <img
                className="h-[18.1px] w-[18.1px] relative overflow-hidden shrink-0"
                alt=""
                src="/icbaselineclose.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
