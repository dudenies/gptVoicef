import { FunctionComponent } from "react";
//import useState
import { useState ,useEffect} from "react";
import GroupComponent from "../components/GroupComponent";
import {
  runCampaign,testCampaign
} from "../services/campaign.services";
const VoCodeJobCampaign: FunctionComponent = () => {
  interface Question {
    id: string;
    label: string;
  }
  async function runCampaignDataEndpoint(data:any) {
    try {
      const response = await runCampaign(data);
      console.log('Campaign data written successfully:', response);
      // Handle success response if needed
    } catch (error) {
      console.error('Error writing campaign data:', error);
      // Handle error if needed
    }
  }

  async function testCampaignDataEndpoint(data:any) {
    try {
      const response = await testCampaign(data);
      console.log('Campaign data written successfully:', response);
      // Handle success response if needed
    } catch (error) {
      console.error('Error writing campaign data:', error);
      // Handle error if needed
    }
  }
  const campaignQuestions: Question[] = [
    { id: "CampaignName", label: "Campaign Name" },
    { id: "JobTitle", label: "Job Title" },
    { id: "JobDivaJobID", label: "JobDiva Job ID" },
    { id: "JobType", label: "Job Type" },
    { id: "Salary", label: "Salary" },
    { id: "HourlyRate", label: "Hourly Rate" },
    { id: "Duration", label: "Duration" },
    { id: "City", label: "City" },
    { id: "State", label: "State" },
    { id: "ZipCode", label: "Zip Code" },
    { id: "SeniorityLevel", label: "Seniority Level" },
    { id: "RemoteHybrid", label: "RemoteHybrid" },
    { id: "LLM", label: "LLM" },
    { id: "JobDescription", label: "Job Description" },
    { id: "RequiredSkills", label: "Required Skills" },
    { id: "DesiredSkills", label: "Desired Skills" },
    { id: "IndustryExperience", label: "Industry Experience" },
    { id: "RecruiterName", label: "Recruiter Name" },
    { id: "RecruiterPhoneNumber", label: "Recruiter Phone Number" },
    { id: "RecruiterEmail", label: "Recruiter Email" },
    { id: "Link", label: "Link" },
    { id: "VoiceGender", label: "Voice Gender" },
    { id: "Voice", label: "Voice" },
    { id: "EmailTemplate", label: "Email Template" },
    { id: "SMSTemplate", label: "SMS Template" },
    { id: "TestName", label: "Name" },
    { id: "TestPhoneNumber", label: "Phone Number" },
    { id: "RecruiterName", label: "Recruiter Name" },
    { id: "ClientName", label: "Client Name" },
  ];
  const campaignNameQuestion = campaignQuestions.find(question => question.id === "CampaignName");
  const jobTitleQuestion = campaignQuestions.find(question => question.id === "JobTitle");
  const jobDivaJobIDQuestion = campaignQuestions.find(question => question.id === "JobDivaJobID");
  const jobTypeQuestion = campaignQuestions.find(question => question.id === "JobType");
  const salaryQuestion = campaignQuestions.find(question => question.id === "Salary");
  const hourlyRateQuestion = campaignQuestions.find(question => question.id === "HourlyRate");
  const durationQuestion = campaignQuestions.find(question => question.id === "Duration");
  const cityQuestion = campaignQuestions.find(question => question.id === "City");
  const stateQuestion = campaignQuestions.find(question => question.id === "State");
  const zipCodeQuestion = campaignQuestions.find(question => question.id === "ZipCode");
  const seniorityLevelQuestion = campaignQuestions.find(question => question.id === "SeniorityLevel");
  const remoteHybridQuestion = campaignQuestions.find(question => question.id === "RemoteHybrid");
  const llmQuestion = campaignQuestions.find(question => question.id === "LLM");
  const jobDescriptionQuestion = campaignQuestions.find(question => question.id === "JobDescription");
  const requiredSkillsQuestion = campaignQuestions.find(question => question.id === "RequiredSkills");
  const desiredSkillsQuestion = campaignQuestions.find(question => question.id === "DesiredSkills");
  const industryExperienceQuestion = campaignQuestions.find(question => question.id === "IndustryExperience");
  const recruiterNameQuestion = campaignQuestions.find(question => question.id === "RecruiterName");
  const recruiterPhoneNumberQuestion = campaignQuestions.find(question => question.id === "RecruiterPhoneNumber");
  const recruiterEmailQuestion = campaignQuestions.find(question => question.id === "RecruiterEmail");
  const linkQuestion = campaignQuestions.find(question => question.id === "Link");
  const voiceGenderQuestion = campaignQuestions.find(question => question.id === "VoiceGender");
  const voiceQuestion = campaignQuestions.find(question => question.id === "Voice");
  const emailTemplateQuestion = campaignQuestions.find(question => question.id === "EmailTemplate");
  const smsTemplateQuestion = campaignQuestions.find(question => question.id === "SMSTemplate");
  const testNameQuestion = campaignQuestions.find(question => question.id === "TestName");
  const testPhoneNumberQuestion = campaignQuestions.find(question => question.id === "TestPhoneNumber");
  const clientNameQuestion = campaignQuestions.find(question => question.id === "ClientName");
  type FormData = {
    [key: string]: string | string[];
  };
  const [campaignFormData, setFormData] = useState<any>({});
  useEffect(() => {
    // Your logic here to handle the changes in campaignFormData
    console.log('campaignFormData changed:', campaignFormData);
  }, [campaignFormData]); // Dependency array containing campaignFormData

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [id]: value }));
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>, id: string) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [id]: value }));
  };
  const [jobType, setJobType] = useState<string>('Full Time');

  const handleJobTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setJobType(value); // Update the jobType state

    // Update the campaignFormData with id "JobType" and the selected value
    setFormData((prevData: any) => ({ ...prevData, JobType: value }));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [id]: value }));
  };
  const [remoteHybrid, setRemoteHybrid] = useState('');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [id]: value }));
  };
  
  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [desiredSkills, setDesiredSkills] = useState<string[]>([]);

  const [requiredskillInput, setRequiredSkillInput] = useState<string>('');
  const [desiredSkillInput, setDesiredSkillInput] = useState<string>('');

  const [industry, setIndustry] = useState<string[]>([]);
  const [industryInput, setIndustryInput] = useState<string>('');


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && requiredskillInput.trim() !== '') {
      setRequiredSkills((prevSkills) => [...prevSkills, requiredskillInput.trim()]);
      setRequiredSkillInput('');
      setFormData((prevData: any) => ({
        ...prevData,
        RequiredSkills: Array.isArray(prevData.RequiredSkills) ? [...prevData.RequiredSkills, requiredskillInput.trim()] : [requiredskillInput.trim()]
      }));
    }
  };
  const handleSkillRemove = (index: number) => {
    setRequiredSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };
  const handleKeyDownDesired = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && desiredSkillInput.trim() !== '') {
      setDesiredSkills((prevSkills) => [...prevSkills, desiredSkillInput.trim()]);
      setDesiredSkillInput('');
      setFormData((prevData: any) => ({
        ...prevData,
        DesiredSkills: Array.isArray(prevData.DesiredSkills) ? [...prevData.DesiredSkills, desiredSkillInput.trim()] : [desiredSkillInput.trim()]
      }));
    }
  };
  const handleDesiredSkillRemove = (index: number) => {
    setDesiredSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const handleKeyDownIndustry = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && industryInput.trim() !== '') {
      setIndustry((prevIndustry) => [...prevIndustry, industryInput.trim()]);
      setIndustryInput('');
      setFormData((prevData: any) => ({
        ...prevData,
        Industry: Array.isArray(prevData.Industry) ? [...prevData.Industry, industryInput.trim()] : [industryInput.trim()]
      }));
    }
  };
  const handleIndustrylRemove = (index: number) => {
    setIndustry((prevIndustry) => prevIndustry.filter((_, i) => i !== index));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target) return;
      const text = event.target.result as string;

      // Split the text by line breaks to get rows
      const rows = text.split(/\r?\n/);

      // Parse the CSV data
      const data = rows.map(row => row.split(','));
      // Remove rows where all values are null
      const filteredData = data.filter(row => row.some(value => value.trim() !== ''));
      // Assume the first row contains headers
      const headers = filteredData[0];
      const parsedData = filteredData.slice(1).map(row =>
        headers.reduce((acc: { [key: string]: any }, header, index) => {
          // Use regular expression to detect numeric values and convert them to strings
          const value = row[index];
          acc[header] = value;
          return acc;
        }, {})
      );
      

      // Set the parsed data in the campaignFormData state
      setFormData((prevData: any) => ({
        ...prevData,
        csvFile: parsedData // Assuming you want to store the parsed data under the "csvFile" ID
      }));
    };
    reader.readAsText(file);
  };

  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border tracking-[normal]">
      <GroupComponent />
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <section className="self-stretch bg-white box-border flex flex-col items-start justify-start py-5 pr-[51px] pl-[49px] gap-[8px] max-w-full text-left text-lg text-gray-100 font-button-button border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-button-button">
          <div className="w-[461px] flex flex-col items-start justify-start gap-[10px] max-w-full">
  <b className="relative leading-[25.27px] capitalize">{campaignNameQuestion?.label} <span className="text-red-500">*</span> {/* Red star icon */}</b>
  <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
    <input
      className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[250px] max-w-full"
      placeholder={campaignNameQuestion?.label}
      type="text"
      onChange={(e) => handleInputChange(e, campaignNameQuestion?.id || "")}
      required // Add the required attribute
    />
    
  </div>
</div>

            <div className="w-[461px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">{jobTitleQuestion?.label}</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={jobTitleQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, jobTitleQuestion?.id || "")}
                />
              </div>
            </div>
            <div className="w-[163px] flex flex-col items-start justify-start gap-[10px] min-w-[106px]">
              <b className="relative leading-[25.27px] capitalize">{jobDivaJobIDQuestion?.label}</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[86px]"
                  placeholder={jobDivaJobIDQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, jobDivaJobIDQuestion?.id || "")}
                />
              </div>
            </div>
            <div className="w-[525px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">Job Type</b>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[10px] max-w-full text-base text-darkslategray-200 mq900:flex-wrap">
                <div className="flex flex-row items-center justify-start gap-[5.81px]">
                  <input
                    className="border-darkslategray-200 accent-darkslategray-200 cursor-pointer m-0 h-[23.3px] w-[23.3px] flex flex-row items-center justify-center"
                    checked={jobType === 'Full Time'}
                    onChange={handleJobTypeChange}
                    value="Full Time"
                    type="radio"
                  />
                  <div className="relative leading-[25.27px] capitalize font-medium">
                    Full Time
                  </div>
                  {jobType === 'Full Time' && (
                    <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[75px] border-[0.2px] border-solid border-gray-100">
                      <input
                        className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[58px]"
                        placeholder={salaryQuestion?.label}
                        type="text"
                        onChange={(e) => handleInputChange(e, salaryQuestion?.id || "")}
                      />
                    </div>
                  )}
                </div>
                <div className="flex-1 flex flex-row  items-start justify-center min-w-[224px] max-w-full text-gray-200">
                  <div className="flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[5.81px] items-center max-w-full mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-start gap-[5.81px]">
                      <input
                        className="cursor-pointer m-0 h-[23.3px] w-[23.3px] rounded-[58.14px] bg-white box-border border-[2.3px] border-solid border-gray-200"
                        checked={jobType === 'Contract'}
                        onChange={handleJobTypeChange}
                        value="Contract"
                        type="radio"
                      />
                      <div className="relative leading-[25.27px] capitalize font-medium">
                        Contract
                      </div>
                    </div>
                    {jobType === 'Contract' && (
                      <>
                        <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[75px] border-[0.2px] border-solid border-gray-100">
                          <input
                            className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[58px]"
                            placeholder={hourlyRateQuestion?.label}
                            type="text"
                            onChange={(e) => handleInputChange(e, hourlyRateQuestion?.id || "")}
                          />
                        </div>
                        <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[75px] text-sm text-gray-100 border-[0.2px] border-solid border-gray-100">
                          <input
                            className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[58px]"
                            placeholder={durationQuestion?.label}
                            type="text"
                            onChange={(e) => handleInputChange(e, durationQuestion?.id || "")}
                          />
                        </div>
                      </>
                    )}
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
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-0.5 pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-button-button">
            <div className="w-[936px] flex flex-col items-start justify-start gap-[10px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">Job Location</b>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[10px] mq900:flex-wrap">
                <div className="flex-1 flex flex-row items-center justify-start min-w-[229px]">
                  <div className="flex-1 rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
                    <input
                      className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[171px]"
                      placeholder={cityQuestion?.label}
                      type="text"
                      onChange={(e) => handleInputChange(e, cityQuestion?.id || "")}
                    />
                  </div>
                </div>
                <div className="flex-[0.933] rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[229px] border-[0.2px] border-solid border-gray-100 mq450:flex-1">
                  <input
                    className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[171px]"
                    placeholder={stateQuestion?.label}
                    type="text"
                    onChange={(e) => handleInputChange(e, stateQuestion?.id || "")}
                  />
                </div>
                <div className="flex-[0.933] rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 min-w-[229px] border-[0.2px] border-solid border-gray-100 mq450:flex-1">
                  <input
                    className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[171px]"
                    placeholder={zipCodeQuestion?.label}
                    type="text"
                    onChange={(e) => handleInputChange(e, zipCodeQuestion?.id || "")}
                  />
                </div>
              </div>
            </div>
            <div className="w-[274px] flex flex-col items-start justify-start gap-[10px] min-w-[178px]">
              <b className="relative leading-[25.27px] capitalize">Seniority level</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">
                <select
                  className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                  onChange={(e) => handleSelectChange(e, seniorityLevelQuestion?.id || "")} // Handle selection change
                >
                  <option className="text-lg" value="High">High</option>
                  <option className="text-lg" value="Mid">Mid</option>
                  <option className="text-lg" value="Low">Low</option>
                </select>
                <img className="h-3 w-[22px] relative" alt="" src="/vector-1.svg" />
              </div>
            </div>
            <div className="w-[274px] flex flex-row items-center justify-start gap-[30px] min-w-[178px] min-h-[46px] text-base text-gray-200">
  <label className="flex flex-row items-center justify-start gap-[10px]">
    <input
      type="radio"
      name="remoteOrHybrid"
      className="h-[23px] w-[23px] relative"
      value="Remote"
      onChange={(e) => handleRadioChange(e, remoteHybridQuestion?.id || "")}
    />
    <div className="relative leading-[25.27px] capitalize font-medium">
      Remote
    </div>
  </label>
  <label className="flex flex-row items-center justify-start gap-[10px]">
    <input
      type="radio"
      name="remoteOrHybrid"
      className="h-[23px] w-[23px] relative"
      value="Hybrid"
      onChange={(e) => handleRadioChange(e,remoteHybridQuestion?.id || "")}
    />

    <div className="relative leading-[25.27px] capitalize font-medium">Hybrid</div>
  </label>
</div>
<div className="w-[274px] flex flex-col items-start justify-start gap-[10px] min-w-[178px]">
<b className="relative leading-[25.27px] capitalize">LLM</b>
<div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] whitespace-nowrap text-sm border-[0.2px] border-solid border-gray-100">

<select
  className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
  onChange={(e) => handleSelectChange(e,llmQuestion?.id || "")}
>
  <option value="Synthflow" className="text-lg">Synthflow</option>
  <option value="VoCode" className="text-lg">VoCode</option>
</select>
<img className="h-3 w-[22px] relative" alt="" src="/vector-1.svg" />
</div>
</div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start max-w-full">
  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
    <b className="relative leading-[25.27px] capitalize">
      Job Description
    </b>
    <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-start justify-center p-2.5 min-h-[222px] max-w-full text-sm border-[0.2px] border-solid border-gray-100" style={{ wordWrap: 'break-word' }}>
  <div className="flex-1 relative leading-[25.27px]">
  <textarea
  className="block w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] relative leading-[25.27px] text-gray-100 text-left min-w-[171px] resize-none"
  placeholder={jobDescriptionQuestion?.label}
  rows={10} // Set the number of visible lines
  onChange={(e) => handleTextareaChange(e, jobDescriptionQuestion?.id || "")} // Use the new function
/>
  </div>
</div>


  </div>
</div>
<div className="self-stretch flex flex-row items-end justify-start max-w-full text-left text-lg text-gray-100 font-button-button">
      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
        <b className="relative leading-[25.27px] capitalize">Required Skills</b>
        <div className="self-stretch rounded-[5.26px] bg-whitesmoke-300 box-border overflow-hidden flex flex-row items-start justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
          <div className="flex-1 flex flex-row items-center justify-start gap-[5.81px] max-w-full mq450:flex-wrap ">
            {requiredSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-[2.91px] rounded-[5.26px] bg-white">
                <div className="relative text-sm leading-[25.27px] font-button-button text-gray-100 text-left ">{skill}</div>
                <img
                  className="h-[18.1px] w-[18.1px] cursor-pointer"
                  alt=""
                  src="/icbaselineclose.svg"
                  onClick={() => handleSkillRemove(index)}
                />
              </div>
            ))}
            <input
              className="w-[calc(100%_-_38.1px)] [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[10px]"
              placeholder="Type a skill"
              type="text"
              value={requiredskillInput}
              onChange={(e) => setRequiredSkillInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-end justify-start max-w-full text-left text-lg text-gray-100 font-button-button">
      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
        <b className="relative leading-[25.27px] capitalize">Desired Skills</b>
        <div className="self-stretch rounded-[5.26px] bg-whitesmoke-300 box-border overflow-hidden flex flex-row items-start justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
          <div className="flex-1 flex flex-row items-center justify-start gap-[5.81px] max-w-full mq450:flex-wrap ">
            {desiredSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-[2.91px] rounded-[5.26px] bg-white">
                <div className="relative text-sm leading-[25.27px] font-button-button text-gray-100 text-left ">{skill}</div>
                <img
                  className="h-[18.1px] w-[18.1px] cursor-pointer"
                  alt=""
                  src="/icbaselineclose.svg"
                  onClick={() => handleDesiredSkillRemove(index)}
                />
              </div>
            ))}
            <input
              className="w-[calc(100%_-_38.1px)] [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[10px]"
              placeholder="Type a skill"
              type="text"
              value={desiredSkillInput}
              onChange={(e) => setDesiredSkillInput(e.target.value)}
              onKeyDown={handleKeyDownDesired}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="self-stretch flex flex-row items-end justify-start max-w-full text-left text-lg text-gray-100 font-button-button">
      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
        <b className="relative leading-[25.27px] capitalize">Industry Experience </b>
        <div className="self-stretch rounded-[5.26px] bg-whitesmoke-300 box-border overflow-hidden flex flex-row items-start justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
          <div className="flex-1 flex flex-row items-center justify-start gap-[5.81px] max-w-full mq450:flex-wrap ">
          {industry.map((ind, index) => (
              <div key={index} className="flex items-center gap-[2.91px] rounded-[5.26px] bg-white">
                <div className="relative text-sm leading-[25.27px] font-button-button text-gray-100 text-left ">{ind}</div>
                <img
                  className="h-[18.1px] w-[18.1px] cursor-pointer"
                  alt=""
                  src="/icbaselineclose.svg"
                  onClick={() => handleIndustrylRemove(index)}
                />
              </div>
            ))}
            <input
              className="w-[calc(100%_-_38.1px)] [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[10px]"
              placeholder="Type a industry"
              type="text"
              value={industryInput}
              onChange={(e) => setIndustryInput(e.target.value)}
              onKeyDown={handleKeyDownIndustry}
            />
          </div>
        </div>
      </div>
    </div>
          
        </section>
        <section className="self-stretch bg-white box-border flex flex-col items-start justify-start py-2.5 pr-[51px] pl-[49px] max-w-full text-left text-lg text-gray-100 font-button-button border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[20px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">{recruiterNameQuestion?.label}</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={recruiterNameQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, recruiterNameQuestion?.id || "")}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">{recruiterPhoneNumberQuestion?.label}</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={recruiterPhoneNumberQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, recruiterPhoneNumberQuestion?.id || "")}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">
              {recruiterEmailQuestion?.label}
              </b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={recruiterEmailQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, recruiterEmailQuestion?.id || "")}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[330px] max-w-full">
              <b className="relative leading-[25.27px] capitalize">{linkQuestion?.label}</b>
              <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 box-border overflow-hidden flex flex-row items-center justify-center p-2.5 max-w-full border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] capitalize text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={linkQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, linkQuestion?.id || "")}
                />
              </div>
            </div>
          </div>
        </section>
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
    value="Male" // Set value attribute to "Male"
    onChange={(e) => handleRadioChange(e, voiceGenderQuestion?.id || "")}
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
    value="Female" // Set value attribute to "Female"
    onChange={(e) => handleRadioChange(e, voiceGenderQuestion?.id || "")}
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
                <select
                  className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                  onChange={(e) => handleSelectChange(e, voiceQuestion?.id || "")} // Handle selection change
                >
                  <option className="text-lg" value="11Labs Kevin">11Labs Kevin</option>
                  <option className="text-lg" value="Voice2">Voice2</option>
                  <option className="text-lg" value="Voice3">Voice3</option>
                </select>
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
                <select
                  className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                  onChange={(e) => handleSelectChange(e, emailTemplateQuestion?.id || "")} // Handle selection change
                >
                  <option className="text-lg" value="emailTemplate1">Email Template 1</option>
                  <option className="text-lg" value="emailTemplate2">Email Template 2</option>
                  <option className="text-lg" value="emailTemplate3">Email Template 3</option>
                </select>
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
                <select
                  className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                  onChange={(e) => handleSelectChange(e, smsTemplateQuestion?.id || "")} // Handle selection change
                >
                  <option className="text-lg" value="smsTemplateQuestion1">SMS Template 1</option>
                  <option className="text-lg" value="smsTemplate2">SMS Template 2</option>
                  <option className="text-lg" value="smsTemplate3">SMS Template 3</option>
                </select>
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
        <section className="self-stretch bg-white box-border flex flex-col items-start justify-start py-2.5 pr-[51px] pl-[49px] max-w-full border-[0.5px] border-solid border-gainsboro-100 mq1275:pl-6 mq1275:pr-[25px] mq1275:box-border">
          <footer className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] max-w-full text-left text-lg text-gray-100 font-button-button">
            <div className="flex-1 flex flex-row items-end justify-start py-0 pr-px pl-0 box-border gap-[20px] min-w-[990px] max-w-full mq1275:min-w-full mq1600:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[211px] max-w-full">
                <b className="relative leading-[25.27px] capitalize">{testNameQuestion?.label}</b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={testNameQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, testNameQuestion?.id || "")}
                />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[211px] max-w-full">
                <b className="relative leading-[25.27px] capitalize">
                {testPhoneNumberQuestion?.label}
                </b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 border-[0.2px] border-solid border-gray-100">
                <input
                  className="w-full [border:none] [outline:none] font-button-button text-sm bg-[transparent] h-[26px] flex-1 relative leading-[25.27px] text-gray-100 text-left inline-block min-w-[250px] max-w-full"
                  placeholder={testPhoneNumberQuestion?.label}
                  type="text"
                  onChange={(e) => handleInputChange(e, testPhoneNumberQuestion?.id || "")}
                />
                </div>
              </div>
              <button
      className="cursor-pointer border-none py-[14.008905410766602px] px-[21px] bg-deepskyblue-100 h-[51px] rounded-6xs flex items-center justify-center box-border whitespace-nowrap hover:bg-deepskyblue-200"
      onClick={() => testCampaignDataEndpoint(campaignFormData)} // Call the function directly on button click
    >
      <b className="relative text-base tracking-[1.75px] leading-[22.41px] uppercase font-button-button text-white text-left">
        test call
      </b>
    </button>
              {/* <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[211px] max-w-full">
                <b className="relative leading-[25.27px] capitalize">{`Recruiter Name `}</b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] text-sm border-[0.2px] border-solid border-gray-100">
                  <div className="flex-1 relative leading-[25.27px]">Name</div>
                  <img
                    className="h-[6.6px] w-[12.1px] relative"
                    alt=""
                    src="/vector-8.svg"
                  />
                </div>
              </div> */}
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[211px] max-w-full">
      <b className="relative leading-[25.27px] capitalize">CSV File</b>
      <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] text-sm border-[0.2px] border-solid border-gray-100">
        {/* Input element for file selection */}
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="hidden" // Hide the input element
          id="csvFileInput"
        />
        <label htmlFor="csvFileInput" className="cursor-pointer">Upload CSV</label>
      </div>
    </div>

              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[211px] max-w-full">
                <b className="relative leading-[25.27px] capitalize">Client name</b>
                <div className="self-stretch rounded-[5.26px] bg-whitesmoke-400 overflow-hidden flex flex-row items-center justify-center p-2.5 gap-[2.91px] text-sm border-[0.2px] border-solid border-gray-100">
                <select
                  className="flex-1 relative leading-[25.27px]  text-gray-100 text-left bg-transparent appearance-none outline-none border-none"
                  onChange={(e) => handleSelectChange(e, clientNameQuestion?.id || "")} // Handle selection change
                >
                  <option className="text-lg" value="client1">client 1</option>
                  <option className="text-lg" value="client2">client 2</option>
                  <option className="text-lg" value="client3">client 3</option>
                </select>
                  <img
                    className="h-[6.6px] w-[12.1px] relative"
                    alt=""
                    src="/vector-8.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-start gap-[10px]">
              <button className="cursor-pointer [border:none] py-[14.008905410766602px] px-[21px] bg-gray-100 h-[51px] rounded-6xs flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-darkslategray-100">
                <b className="relative text-base tracking-[1.75px] leading-[22.41px] font-button-button text-white text-left">
                  Run Later
                </b>
              </button>
              <button
      className="cursor-pointer border-none py-[14.008905410766602px] px-[21px] bg-deepskyblue-100 h-[51px] rounded-6xs flex items-center justify-center box-border whitespace-nowrap hover:bg-deepskyblue-200"
      onClick={() => runCampaignDataEndpoint(campaignFormData)} // Call the function directly on button click
    >
      <b className="relative text-base tracking-[1.75px] leading-[22.41px] uppercase font-button-button text-white text-left">
        RUN NOW
      </b>
    </button>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default VoCodeJobCampaign;
