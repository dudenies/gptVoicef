import { FunctionComponent } from "react";

const FrameIB1: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-white box-border flex flex-col items-start justify-start py-2.5 pr-[51px] pl-[49px] max-w-full text-left text-lg text-gray-100 font-button-button border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
      <div className="self-stretch flex flex-row items-end justify-start max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[20px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
            <b className="relative leading-[25.27px] capitalize">
              Voice gender
            </b>
            <div className="h-[46px] flex flex-row items-start justify-start gap-[10px] text-base text-gray-200">
              <div className="self-stretch flex flex-row items-center justify-start gap-[5.81px]">
                <input
                  className="cursor-pointer m-0 h-[23.3px] w-[23.3px] rounded-[58.14px] bg-white box-border border-[2.3px] border-solid border-gray-200"
                  type="radio"
                  name="radioGroup-1"
                />
                <div className="relative leading-[25.27px] capitalize font-medium">
                  Male
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[5.81px]">
                <input
                  className="cursor-pointer m-0 h-[23.3px] w-[23.3px] rounded-[58.14px] bg-white box-border border-[2.3px] border-solid border-gray-200"
                  type="radio"
                  name="radioGroup-1"
                />
                <div className="relative leading-[25.27px] capitalize font-medium">
                  Female
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
            <b className="relative leading-[25.27px] capitalize">Voice</b>
            <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] max-w-full whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
              <div className="flex-1 relative leading-[25.27px] inline-block max-w-[calc(100%_-_25px)]">
                11Labs Kevin
              </div>
              <img
                className="h-3 w-[22px] relative"
                alt=""
                src="/vector-5.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
            <b className="relative leading-[25.27px] capitalize">
              Email Template
            </b>
            <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] max-w-full whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
              <div className="flex-1 relative leading-[25.27px] inline-block max-w-[calc(100%_-_25px)]">
                Email Template
              </div>
              <img
                className="h-3 w-[22px] relative"
                alt=""
                src="/vector-5.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
            <b className="relative leading-[25.27px] capitalize">
              SMS Template
            </b>
            <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] max-w-full whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
              <div className="flex-1 relative leading-[25.27px] inline-block max-w-[calc(100%_-_25px)]">
                SMS Template
              </div>
              <img
                className="h-3 w-[22px] relative"
                alt=""
                src="/vector-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameIB1;
