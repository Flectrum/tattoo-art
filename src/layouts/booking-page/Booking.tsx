import { useState, type ChangeEvent } from "react";
import { Telegram } from "../../assets/svg/Telegram";
import { Instagram } from "../../assets/svg/Instagram";
import { Email } from "../../assets/svg/Email";
import { WhatsApp } from "../../assets/svg/WhatsApp";
import { Link, useParams } from "react-router-dom";
import type { ContactMethod } from "../../models/ContactMethod";
import type { FormData } from "../../models/FormData";
import type { Errors } from "../../models/FormErrors";
import { FormButton } from "./components/FormButton";

const contactMethods: ContactMethod[] = [
  {
    name: "Telegram",
    svg: <Telegram />,
    label: "Your Telegram username or phone number",
    placeholder: "@username or +372 XXXX XXXX",
    contact: "",
  },
  {
    name: "Instagram",
    svg: <Instagram />,
    label: "Your Instagram handle",
    placeholder: "@yourhandle",
    contact: "",
  },
  {
    name: "WhatsApp",
    svg: <WhatsApp />,
    label: "Your WhatsApp number",
    placeholder: "+372 XXXX XXXX",
    contact: "",
  },
  {
    name: "Email",
    svg: <Email />,
    label: "Your email address",
    placeholder: "your@email.com",
    contact: "",
  },
];

const styles = [
  "Blackwork",
  "Geometric",
  "Fineline",
  "Realism",
  "Ornamental",
  "Trash-polka",
  "Watercolor",
];

export const Booking = () => {
  const [step, setStep] = useState(1);
  const { lang } = useParams();

  const todayDate = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    contactMethod: null,
    contact: "",
    idea: "",
  });

  const [formErrors, setFormErrors] = useState<Errors>({});

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleContactMethod = (type: ContactMethod) => {
    setFormData((prev) => ({ ...prev, contactMethod: type, contact: "" }));
    setFormErrors((prev) => ({
      ...prev,
      contactMethod: undefined,
      contact: "",
    }));
  };

  const handleNext = () => {
    const errors: Errors = {};

    if (!formData.name.trim()) {
      errors.name = "This field is required";
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "This field is required";
    }
    if (!formData.contactMethod) {
      errors.contactMethod = "This field is required";
    }

    if (!formData.contact?.trim()) {
      errors.contact = "This field is required";
    }

    if (step === 2) {
      if (!formData.idea.trim()) {
        errors.idea = "This field is required";
      } else if (formData.idea.length < 10) {
        errors.idea = "Description must be at least 10 characters";
      }
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }

    console.log(formData.style);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white px-3 py-10">
        <h1 className="text-white text-3xl font-bold">Book a Session</h1>
        <p className="text-muted mt-3">
          Fill in the form and I'll contact you within 24 hours
        </p>
        <p className="mt-3">
          If I don't reply within 24 hours, write to me directly
          <Link
            to={`/${lang}/contacts`}
            className="text-red-800 pl-1 pt-1 underline"
          >
            Contact me →
          </Link>
        </p>
        <form method="POST" className="flex w-full max-w-xl flex-col mt-1">
          {step === 1 && (
            <div className="flex flex-col mt-10">
              <h2 className="flex  font-bold text-2xl">Your Details</h2>
              <label className="mt-5">
                Name <span className="text-red-800">*</span>
              </label>
              <input
                className="relative bg-[#141414] mt-2 w-full min-w-0  rounded-lg px-2 md:px-5 py-2 border border-gray-600/80 "
                autoFocus
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Your name"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm">{formErrors.name}</p>
              )}
              <label className="mt-2">
                Phone number <span className="text-red-800">*</span>
              </label>
              <input
                className="relative mt-2 w-full min-w-0 bg-[#141414] rounded-lg px-2 md:px-5 py-2 border-1 border-gray-600/80"
                type="text"
                name="phoneNumber"
                onChange={handleChange}
                value={formData.phoneNumber}
                placeholder="+372 XXXX XXXX"
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
              <label className="mt-2">
                Where would you like to discuss?{" "}
                <span className="text-red-800">*</span>
              </label>
              <ul className="flex flex-wrap gap-3 mt-3">
                {contactMethods.map((item, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      value={formData.contactMethod?.name}
                      onClick={() => handleContactMethod(item)}
                      name="connectionType.name"
                      className={`relative bg-[#141414] flex flex-wrap items-center rounded-lg border-1  
                ${formData.contactMethod?.name === item.name ? "text-red-500 border-red-500" : "text-[#737373] border-[#737373] hover:text-white"}`}
                    >
                      <div className="mx-3 my-2 flex items-center gap-2">
                        <div className="w-5">{item.svg}</div>
                        {item.name}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              {formErrors.contactMethod && (
                <p className="text-red-500 text-sm">
                  {formErrors.contactMethod}
                </p>
              )}
              {formData.contactMethod && (
                <>
                  <label className="mt-2">
                    {formData.contactMethod?.label}{" "}
                    <span className="text-red-800">*</span>
                  </label>
                  <input
                    className="relative bg-[#141414] mt-2 w-full min-w-0 rounded-lg px-2 md:px-5 py-2 border-1 border-gray-600/80"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formData.contact}
                    name="contact"
                    placeholder={formData.contactMethod?.placeholder}
                  />
                  {formErrors.contact && (
                    <p className="text-red-500 text-sm">{formErrors.contact}</p>
                  )}
                </>
              )}
              <div className="flex justify-end">
                <FormButton label="Next" onClick={handleNext} />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col mt-10">
              <h2 className="flex  font-bold text-2xl">Your Tattoo Idea</h2>
              <label className="mt-5">
                Describe your idea
                <span className="text-red-800">*</span>
              </label>
              <textarea
                className="relative bg-[#141414] mt-2 w-full min-w-0 rounded-lg px-1 py-2 border-1 border-gray-600/80"
                rows={4}
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                placeholder="What do you want to get tattooed? Describe the idea, size, placement..."
              />
              {formErrors.idea && (
                <p className="text-red-500 text-sm">{formErrors.idea}</p>
              )}
              <label className="mt-2">Preferred style</label>
              <select
                defaultValue={"default"}
                className="relative bg-[#141414] text-white border border-gray-600 rounded-lg px-3 py-2"
                name="style"
                onChange={handleChange}
              >
                <option
                  value={"default"}
                  disabled
                  hidden
                  className="relative bg-[#141414]"
                >
                  Choose your option...
                </option>
                {styles.map((style, index) => (
                  <option
                    key={index}
                    value={style}
                    className="relative bg-[#141414] text-white"
                  >
                    {style}
                  </option>
                ))}
              </select>

              <label className="mt-2">Preferred date</label>
              <input
                className="relative bg-[#141414] mt-2 w-full min-w-0 rounded-lg px-2 md:px-5 py-2 border-1 border-gray-600/80"
                type="date"
                required
                onChange={handleChange}
                name="date"
                min={todayDate}
              />
              <p className="mt-1 text-muted">Optional — we'll confirm later</p>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="mt-10 h-8 rounded-lg  hover:bg-[#2a2a2a]"
                  onClick={() => setStep(step - 1)}
                >
                  <span className="mx-6 font-semibold text-xl">Back </span>
                </button>
                <FormButton label="Next" onClick={handleNext} />
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col mt-10">
              <h2 className="flex  font-bold text-2xl">Review Your Request</h2>
              <div className="relative border bg-[#141414] border-[#2a2a2a] rounded-lg mt-5">
                <p className="border-b border-[#2a2a2a] px-4 py-3 font-medium uppercase tracking-wider text-muted">
                  {" "}
                  Your request
                </p>
                <dl className="divide-y divide-[#2a2a2a] ">
                  <div className="flex gap-4 px-4 py-3">
                    <dt className="w-28 text-muted">Name</dt>
                    <dd className="flex-1 break-words text">{formData.name}</dd>
                  </div>
                  <div className="flex gap-4 px-4 py-3">
                    <dt className="w-28 text-muted">Phone</dt>
                    <dd className="flex-1 break-words text">
                      {formData.phoneNumber}
                    </dd>
                  </div>
                  <div className="flex gap-4 px-4 py-3">
                    <dt className="w-28 text-muted">Discuss via</dt>
                    <dd className="flex-1 break-words text">
                      {formData.contactMethod?.name} — {formData.contact}
                    </dd>
                  </div>
                  <div className="flex gap-4 px-4 py-3">
                    <dt className="w-28 text-muted">Idea</dt>
                    <dd className="flex-1 break-words text">{formData.idea}</dd>
                  </div>
                  <div className="flex gap-4 px-4 py-3">
                    <dt className="w-28 text-muted">Style</dt>
                    <dd className="flex-1 break-words text">
                      {formData.style ? formData.style : "To be confirmed"}
                    </dd>
                  </div>
                  <div className="flex gap-4 px-4 py-3">
                    <dt className="w-28 text-muted">Date</dt>
                    <dd className="flex-1 break-words text">
                      {formData.date
                        ? formData.date.toString()
                        : "To be confirmed"}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="mt-10 h-8 rounded-lg  hover:bg-[#2a2a2a]"
                  onClick={() => setStep(step - 1)}
                >
                  <span className="mx-6 font-semibold text-xl">Back </span>
                </button>
                <FormButton label="Confirm" onClick={handleNext} />
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
