import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-end justify-start max-w-full text-left text-lg text-gray-100 font-button-button">
      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
        <b className="relative leading-[25.27px] capitalize">
          Industry Experience
        </b>
        <div className="self-stretch rounded-[5.26px] bg-whitesmoke-300 box-border overflow-hidden flex flex-row items-start justify-center p-2.5 max-w-full text-sm border-[0.2px] border-solid border-gray-100">
          <div className="flex-1 overflow-x-auto flex flex-row items-center justify-start gap-[5.81px] max-w-full">
            <div className="rounded-[5.26px] bg-white overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-2.5 gap-[2.91px]">
              <div className="relative leading-[25.27px] whitespace-nowrap">
                FInance
              </div>
              <img
                className="h-[18.1px] w-[18.1px] relative overflow-hidden shrink-0"
                alt=""
                src="/icbaselineclose.svg"
              />
            </div>
            <div className="rounded-[5.26px] bg-white overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-2.5 gap-[2.91px]">
              <div className="relative leading-[25.27px] whitespace-nowrap">
                Banking
              </div>
              <img
                className="h-[18.1px] w-[18.1px] relative overflow-hidden shrink-0"
                alt=""
                src="/icbaselineclose.svg"
              />
            </div>
            <div className="rounded-[5.26px] bg-white overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-2.5 gap-[2.91px]">
              <div className="relative leading-[25.27px] whitespace-nowrap">
                Entertainment
              </div>
              <img
                className="h-[18.1px] w-[18.1px] relative overflow-hidden shrink-0"
                alt=""
                src="/icbaselineclose.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
