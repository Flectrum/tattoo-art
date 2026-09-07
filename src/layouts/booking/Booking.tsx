import { useState } from "react";
// import type { FormData } from "./FormData";
import { Telegram } from "../../assets/svg/Telegram";
import { Instagram } from "../../assets/svg/Instagram";
import { Email } from "../../assets/svg/Email";
import { WhatsApp } from "../../assets/svg/WhatsApp";

interface ConnectionType {
  name: string;
  svg: React.ReactNode;
}

export const Booking = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [connectionType, setConnectionType] = useState("");

  const connectionTypes: ConnectionType[] = [
    { name: "Telegram", svg: <Telegram /> },
    { name: "Instagram", svg: <Instagram /> },
    { name: "WhatsApp", svg: <WhatsApp /> },
    { name: "Email", svg: <Email /> },
  ];

  const handleClick = (connectionType: string) => {
    setConnectionType(connectionType);
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
          <div className="flex  font-bold text-2xl">Your Details</div>
          <label className="mt-5">
            Name <span className="text-red-800">*</span>
          </label>
          <input
            className=" mt-2 rounded-lg px-5 py-2 border-1 border-gray-600/80 "
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your name"
          />
          <label className="mt-2">
            Phone number <span className="text-red-800">*</span>
          </label>
          <input
            className=" mt-2 rounded-lg px-5 py-2 border-1 border-gray-600/80"
            type="text"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            placeholder="+372 XXXX XXXX"
          />
          <label className="mt-2">
            Where would you like to discuss?{" "}
            <span className="text-red-800">*</span>
          </label>
          <ul className="flex gap-3 mt-3">
            {connectionTypes.map((item, index) => (
              <li key={index} className="">
                <button
                  type="button"
                  onClick={() => handleClick(item.name)}
                  value={connectionType}
                  className={`relative flex items-center rounded-lg border-1  
                ${connectionType === item.name ? "text-red-800 border-red-800" : "text-[#737373] border-[#737373] hover:text-white"}`}
                >
                  <div className="mx-3 my-2 flex items-center gap-2">
                    <div className="w-5">{item.svg}</div>
                    {item.name}
                  </div>
                </button>
              </li>
            ))}
          </ul>
          {connectionType !== "" && (
            <>
              <label className="mt-2">
                Nickname <span className="text-red-800">*</span>
              </label>
              <input
                className=" mt-2 rounded-lg px-5 py-2 border-1 border-gray-600/80"
                type="text"
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </>
          )}
          <div className="flex justify-end">
            <button
              type="button"
              className="mt-3 h-10 border-1 border-white bg-red-800 rounded-lg hover:bg-red-600"
            >
              <span className="mx-8 font-bold text-xl">Next </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
