import { FunctionComponent } from "react";
import GroupComponent from "../components/GroupComponent";
//useState
import { useState } from "react";

const VoCodeRecruiterProfile: FunctionComponent = () => {
  interface Question {
    id: string;
    label: string;
  }
  
  const questions: Question[] = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "gender", label: "Gender" },
    { id: "email", label: "Email" },
    { id: "directPhoneNumber", label: "Direct Phone Number" },
    { id: "mobileNumber", label: "Mobile Number" },
    { id: "smsNumber", label: "SMS Number" },
    { id: "workingAtAPTAs", label: "How long I have been working at APTAs?" },
    { id: "totalExperience", label: "How much total years of experience do you have?" },
    { id: "workingTimes", label: "What times on this person is working, business hours for call?" },
  ];

  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[311px] box-border tracking-[normal]">
      <GroupComponent />
      <section className="self-stretch flex flex-col items-end justify-start max-w-full shrink-0 text-left text-lg text-dark font-button-button">
        <div className="self-stretch bg-white box-border flex flex-col items-end justify-start py-5 pr-[49px] pl-[51px] gap-[20px] max-w-full border-[0.5px] border-solid border-gainsboro mq1275:pl-[25px] mq1275:pr-6 mq1275:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[20px] max-w-full">
            <div className="flex-1 flex flex-row items-end justify-start min-w-[585px] max-w-full mq900:min-w-full">
              <div className="flex-1 flex flex-row items-end justify-start gap-[5.08px] max-w-full mq900:flex-wrap">
                <button className="cursor-pointer [border:none] p-[15px] bg-deepskyblue-100 w-[220px] rounded-[5.08px] flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-deepskyblue-200">
                  <b className="relative text-smi-2 tracking-[1.15px] leading-[14.71px] font-button-button text-white text-left">
                    Recruiter Profile
                  </b>
                </button>
                <button className="cursor-pointer [border:none] p-[15px] bg-dark w-[220px] rounded-[5.08px] flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-darkslategray-100">
                  <b className="relative text-smi-2 tracking-[1.15px] leading-[14.71px] font-button-button text-white text-left">
                    Client Profile
                  </b>
                </button>
                <button className="cursor-pointer [border:none] p-[15px] bg-dark w-[220px] rounded-[5.08px] flex flex-row items-center justify-center box-border hover:bg-darkslategray-100">
                  <b className="relative text-smi-2 tracking-[1.15px] leading-[14.71px] font-button-button text-white text-left">
                    Rules
                  </b>
                </button>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start min-w-[585px] max-w-full mq900:min-w-full">
              <button className="cursor-pointer [border:none] py-3 px-5 bg-forestgreen-100 rounded-[7px] flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen">
                <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
                  New Question
                </b>
              </button>
            </div>
          </div>
        <div className="self-stretch bg-white box-border flex flex-col items-end justify-start py-5 pr-[49px] pl-[51px] gap-[20px] max-w-full border-[0.5px] border-solid border-gainsboro mq1275:pl-[25px] mq1275:pr-6 mq1275:box-border">
          {questions.map((question) => (
            <div key={question.id} className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full ">
              <b className={`min-w-[200px] relative leading-[25.27px] capitalize inline-block shrink-0mq1275:min-w-[580px] ${
                  ["workingAtAPTAs", "totalExperience", "workingTimes"].includes(question.id) ? 'max-w-[370px]' : ''
                }`}>
                {question.label}
              </b>
              <input
                type="text"
                className={`h-[46px] flex-1 rounded-[5.26px] bg-whitesmoke-200 box-border overflow-hidden min-w-[1046px] max-w-full border-[0.2px] border-solid border-dark  mq1275:min-w-full `}
                value={formData[question.id] || ''}
                onChange={(e) => handleInputChange(e, question.id)}
              />
            </div>
          ))}
          </div>
          <div className="w-[292px] flex flex-row items-start justify-start gap-[6px]">
            <button className="cursor-pointer [border:none] py-[10px] px-[16px] bg-black h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-darkslategray-300">
              <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
                Close
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-[10px] px-[16px] bg-forestgreen-200 h-[47.1px] flex-1 rounded-[5.01px] flex flex-row items-center justify-center box-border hover:bg-limegreen">
              <b className="relative text-base-2 tracking-[1.25px] leading-[16.04px] font-button-button text-white text-left">
                Save
              </b>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoCodeRecruiterProfile;
