import { useState, type ChangeEvent } from "react";
import { Telegram } from "../../assets/svg/Telegram";
import { Instagram } from "../../assets/svg/Instagram";
import { Email } from "../../assets/svg/Email";
import { WhatsApp } from "../../assets/svg/WhatsApp";

interface ContactMethod {
  name: string;
  svg: React.ReactNode;
  label: string;
  placeholder: string;
  contact: string;
}

interface FormData {
  name: string;
  phoneNumber: string;
  contactMethod: ContactMethod | null;
  contact: string;
  idea: string;
  style?: string;
  date?: Date;
}

interface Errors {
  name?: string;
  phoneNumber?: string;
  contactMethod?: string;
  contact?: string;
  idea?: string;
}

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
  const [step, setStep] = useState(2);

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

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white px-3 py-10">
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
        <form method="POST" className="flex w-full max-w-xl flex-col mt-1">
          {step === 1 && (
            <div className="flex flex-col mt-10">
              <div className="flex  font-bold text-2xl">Your Details</div>
              <label className="mt-5">
                Name <span className="text-red-800">*</span>
              </label>
              <input
                className=" mt-2 w-full min-w-0 rounded-lg px-2 md:px-5 py-2 border border-gray-600/80 "
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
                className=" mt-2 w-full min-w-0 rounded-lg px-2 md:px-5 py-2 border-1 border-gray-600/80"
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
                      className={`relative flex flex-wrap items-center rounded-lg border-1  
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
                <p className="text-red-500 text-sm">This field is required</p>
              )}
              {formData.contactMethod && (
                <>
                  <label className="mt-2">
                    {formData.contactMethod?.label}{" "}
                    <span className="text-red-800">*</span>
                  </label>
                  <input
                    className=" mt-2 w-full min-w-0 rounded-lg px-2 md:px-5 py-2 border-1 border-gray-600/80"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formData.contact}
                    name="contact"
                    placeholder={formData.contactMethod?.placeholder}
                  />
                  {formErrors.contact && (
                    <p className="text-red-500 text-sm">
                      This field is required
                    </p>
                  )}
                </>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mt-8 h-10 border-1 border-white bg-red-500 rounded-lg hover:bg-red-600"
                  onClick={() => handleNext()}
                >
                  <span className="mx-8 font-bold text-xl">Next </span>
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col mt-10">
              <div className="flex  font-bold text-2xl">Your Tattoo Idea</div>
              <label className="mt-5">
                Describe your idea
                <span className="text-red-800">*</span>
              </label>
              <textarea
                className=" mt-2 w-full min-w-0 rounded-lg px-1 py-2 border-1 border-gray-600/80"
rows={4}
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                placeholder="What do you want to get tattooed? Describe the idea, size, placement..."
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm">{formErrors.idea}</p>
              )}
              <label className="mt-2">Preferred style</label>
              <select
                defaultValue={"default"}
                className="bg-black text-white border border-gray-600 rounded-lg px-3 py-2"
                onChange={handleChange}
              >
                <option value={"default"} disabled hidden></option>
                {styles.map((style, index) => (
                  <option
                    key={index}
                    value={style}
                    className="bg-black text-white"
                  >
                    {style}
                  </option>
                ))}
              </select>

              <label className="mt-2">Preferred date</label>
              <input
                className=" mt-2 w-full min-w-0 rounded-lg px-2 md:px-5 py-2 border-1 border-gray-600/80"
                type="date"
                required
                onChange={handleChange}
                name="date"
                min={todayDate}
              />
              <p className="mt-1 text-muted">Optional — we'll confirm later</p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
