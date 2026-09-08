import { useState, type ChangeEvent } from "react";
import { Telegram } from "../../assets/svg/Telegram";
import { Instagram } from "../../assets/svg/Instagram";
import { Email } from "../../assets/svg/Email";
import { WhatsApp } from "../../assets/svg/WhatsApp";

interface FormData {
  name: string;
  phoneNumber: string;
  communicationType: string;
}

interface ConnectionType {
  name: string;
  svg: React.ReactNode;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export const Booking = () => {
  const [warnings, setWarnings] = useState<FormErrors>({});
  const [formStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    communicationType: "",
  });

  const connectionTypes: ConnectionType[] = [
    { name: "Telegram", svg: <Telegram /> },
    { name: "Instagram", svg: <Instagram /> },
    { name: "WhatsApp", svg: <WhatsApp /> },
    { name: "Email", svg: <Email /> },
  ];

  const hadleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof FormData;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (warnings[name]) {
      setWarnings((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleClick = (type: string) => {
    setFormData((prev) => ({ ...prev, communicationType: type }));

    if (warnings.communicationType) {
      setWarnings((prev) => ({ ...prev, connectionType: undefined }));
    }
  };

  const handleNextButton = () => {
    const newWarning: FormErrors = {
      name: "",
      phoneNumber: "",
      communicationType: "",
    };

    if (!formData.name.trim()) {
      newWarning.name = "This field is required";
    }
    if (!formData.phoneNumber.trim()) {
      newWarning.phoneNumber = "This field is required";
    }
    if (!formData.communicationType.trim()) {
      newWarning.communicationType = "This field is required";
    }

    setWarnings(newWarning);

    console.log(formData.communicationType);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white py-10">
        <div className="text-white text-3xl font-bold">Book a Session</div>
        <div className="text-muted mt-3">
          Fill in the form and I'll contact you within 24 hours
        </div>
        <div className="mt-3">
          If I don't reply within 24 hours, write to me directly
          <a href="#" className="text-red-800 pl-1 pt-1 underline">
            Contact me →
          </a>
        </div>
        <form method="POST" className="flex flex-col mt-10">
          {formStep === 1 && (
            <div className="flex flex-col mt-10">
              <div className="flex  font-bold text-2xl">Your Details</div>
              <label className="mt-5">
                Name <span className="text-red-800">*</span>
              </label>
              <input
                className=" mt-2 rounded-lg px-2 md:px-5 py-2 border-1 border-gray-600/80 "
                type="text"
                name="name"
                onChange={hadleChange}
                value={formData.name}
                placeholder="Your name"
              />
              {warnings.name && (
                <p className="text-red-500 text-sm">{warnings.name}</p>
              )}
              <label className="mt-2">
                Phone number <span className="text-red-800">*</span>
              </label>
              <input
                className=" mt-2 rounded-lg px-2 md:px-5 py-2 border-1 border-gray-600/80"
                type="text"
                name="phoneNumber"
                onChange={hadleChange}
                value={formData.phoneNumber}
                placeholder="+372 XXXX XXXX"
              />
              {warnings.phoneNumber && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
              <label className="mt-2">
                Where would you like to discuss?{" "}
                <span className="text-red-800">*</span>
              </label>
              <ul className="flex gap-3 mt-3">
                {connectionTypes.map((item, index) => (
                  <li key={index} className="">
                    <button
                      type="button"
                      value={formData.communicationType}
                      onClick={() => handleClick(item.name)}
                      name="connectionType"
                      className={`relative flex items-center rounded-lg border-1  
                ${formData.communicationType === item.name ? "text-red-500 border-red-500" : "text-[#737373] border-[#737373] hover:text-white"}`}
                    >
                      <div className="mx-3 my-2 flex items-center gap-2">
                        <div className="w-5">{item.svg}</div>
                        {item.name}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              {warnings.communicationType && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
              {formData.communicationType !== "" && (
                <>
                  <label className="mt-2">
                    Nickname <span className="text-red-800">*</span>
                  </label>
                  <input
                    className=" mt-2 rounded-lg px-2 md:px-5 py-2 border-1 border-gray-600/80"
                    type="text"
                    required
                    onChange={hadleChange}
                    value={formData.phoneNumber}
                  />
                  {warnings.communicationType && (
                    <p className="text-red-500 text-sm">
                      This field is required
                    </p>
                  )}
                </>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mt-3 h-10 border-1 border-white bg-red-500 rounded-lg hover:bg-red-600"
                  onClick={() => handleNextButton()}
                >
                  <span className="mx-8 font-bold text-xl">Next </span>
                </button>
              </div>
            </div>
          )}
          {formStep === 2 && <>SECOND STEP</>}
        </form>
      </div>
    </>
  );
};
