import { FunctionComponent } from "react";

export type NestedFramesType = {
  platform?: string;
};

const NestedFrames: FunctionComponent<NestedFramesType> = ({ platform }) => {
  return (
    <div className="self-stretch rounded-3xs bg-whitesmoke-200 flex flex-col items-start justify-start p-2.5 box-border gap-[12px] max-w-full text-left text-lg text-gray-100 font-button-button">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full">
        <div className="flex-1 flex flex-row items-center justify-start gap-[10px] min-w-[1134px] max-w-full mq1600:flex-wrap mq1600:min-w-full">
          <b className="relative leading-[25.27px] capitalize">{platform}</b>
          <div className="flex-1 rounded-[5.26px] bg-white box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[1049px] max-w-full text-sm border-[0.2px] border-solid border-gray-100 mq1275:min-w-full">
            <div className="flex-1 relative leading-[25.27px] inline-block max-w-full">
              Question
            </div>
          </div>
        </div>
        <div className="h-9 w-9 rounded-3xs bg-red flex flex-row items-center justify-center py-[5px] px-[11px] box-border text-right text-white">
          <b className="h-[27px] relative tracking-[0.33px] flex items-center">
            X
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start max-w-full">
        <div className="w-[1744px] flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
          <b className="w-[120px] relative leading-[25.27px] capitalize inline-block shrink-0">
            Answer
          </b>
          <div className="flex-1 rounded-[5.26px] bg-white box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[1049px] max-w-full text-sm border-[0.2px] border-solid border-gray-100 mq1275:min-w-full">
            <div className="flex-1 relative leading-[25.27px] inline-block max-w-full">
              Answer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedFrames;
