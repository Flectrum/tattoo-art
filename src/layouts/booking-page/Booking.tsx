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
import { useLanguage } from "../../i18n/useLanguages";
import { bookingService } from "../../services/bookingservice";
import { BackButton } from "./components/BackButton";
import { Ok } from "../../assets/svg/Ok";
import { GoDown } from "../../assets/svg/GoDown";

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

export const Booking = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const { lang } = useParams();

  const styles = [
    t.booking.styles[1],
    t.booking.styles[2],
    t.booking.styles[3],
    t.booking.styles[4],
    t.booking.styles[5],
    t.booking.styles[6],
    t.booking.styles[7],
  ];

  const steps = [1, 2, 3];
  const [disabled, setDisabled] = useState(true);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    contactMethod: {
      name: "",
      svg: undefined,
      label: "",
      placeholder: "",
      contact: "",
    },
    contact: "",
    idea: "",
    style: "",
    date: "",
  });

  const [formErrors, setFormErrors] = useState<Errors>({});

  const todayDate = new Date().toISOString().split("T")[0];

  function getDate(date: string) {
    const splitDate = date.split("-");
    return splitDate[2] + "." + splitDate[1] + "." + splitDate[0];
  }

  const handleSubmit = async () => {
    console.log(formData.date);
    await bookingService.sendFormData({
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      contactMethod: formData.contactMethod.name,
      contact: formData.contact,
      idea: formData.idea,
      style: formData.style,
      date: formData.date,
    });
  };

  const handleDate = (e: ChangeEvent<HTMLSelectElement>) => {
    getDate(e.target.value);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
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

  function catchInvalidPhoneNumber(phoneNumber: string) {
    const phoneNumberDigits = phoneNumber.trim().split("");
    if (phoneNumberDigits[0] !== "+" && isNaN(Number(phoneNumberDigits[0]))) {
      return true;
    } else if (phoneNumber.length < 6) {
      return true;
    }
    for (let num = 1; num < phoneNumberDigits.length; num++) {
      if (isNaN(Number(phoneNumberDigits[num]))) {
        return true;
      }
    }
  }

  const handleNext = () => {
    const errors: Errors = {};

    if (!formData.name.trim()) {
      errors.name = t.booking.emptyFieldErr;
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = t.booking.emptyFieldErr;
    } else if (catchInvalidPhoneNumber(formData.phoneNumber)) {
      errors.phoneNumber = t.booking.incorrectNumberErr;
    }
    if (!formData.contactMethod) {
      errors.contactMethod = t.booking.emptyFieldErr;
    }

    if (!formData.contact?.trim()) {
      errors.contact = t.booking.emptyFieldErr;
    }

    if (currentStep === 2) {
      if (!formData.idea.trim()) {
        errors.idea = t.booking.emptyFieldErr;
      } else if (formData.idea.length < 10) {
        errors.idea = t.booking.descriptionErr;
      }
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white px-3 py-10">
        <h1 className="text-white text-3xl font-bold">{t.booking.h1}</h1>
        <p className="text-muted mt-3">{t.booking.fillAndContact}</p>
        <p className="mt-3">
          {t.booking.writeDirectly}
          <Link
            to={`/${lang}/contacts`}
            className="text-red-800 pl-1 pt-1 underline"
          >
            {t.booking.contactMe}
          </Link>
        </p>

        <form method="POST" className="flex w-full max-w-xl flex-col mt-1">
          <div className="flex mt-5 text-sm gap-4">
            {steps.map((step, index) => (
              <div key={index}>
                {step >= currentStep ? (
                  <div
                    className={`relative flex justify-center items-center text-xs w-6 h-6 font-semibold rounded-full ${step <= currentStep ? "bg-red-800 text-white" : "bg-[#5a5757] text-muted"}`}
                  >
                    {step}
                  </div>
                ) : (
                  <span className="flex justify-center items-center w-6 h-6 rounded-full text-red-800">
                    <Ok className="w-8 h-8 text-red-800" />
                  </span>
                )}
              </div>
            ))}
            <span className="text-sm text-muted">
              {t.booking.step} {currentStep} {t.booking.of} {steps.length}
            </span>
          </div>
          <div className="translate-y-0 opacity-100 transition-all duration-400 starting:translate-x-8 starting:opacity-0">
            {currentStep === 1 && (
              <div className="flex flex-col mt-3">
                <h2 className="flex  font-bold text-2xl">
                  {t.booking.yourDetails}
                </h2>
                <label className="mt-5">
                  {t.booking.name} <span className="text-red-800">*</span>
                </label>
                <input
                  className="relative bg-[#141414] mt-2 w-full min-w-0  rounded-lg px-2 md:px-5 py-2 border border-gray-600/80 outline-none hover:border-red-800"
                  autoFocus
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder={t.booking.yourName}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
                <label className="mt-2">
                  {t.booking.phoneNumber}{" "}
                  <span className="text-red-800">*</span>
                </label>
                <input
                  className="relative mt-2 w-full min-w-0 bg-[#141414] rounded-lg px-2 md:px-5 py-2 border border-gray-600/80 outline-none hover:border-red-800"
                  type="text"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  placeholder="+372 XXXX XXXX"
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {formErrors.phoneNumber}
                  </p>
                )}
                <label className="mt-2">
                  {t.booking.whereDiscuss}
                  <span className="text-red-800"> *</span>
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
                {formData.contactMethod.name !== "" && (
                  <>
                    <label className="mt-2">
                      {formData.contactMethod?.label}{" "}
                      <span className="text-red-800"> *</span>
                    </label>
                    <input
                      className="relative bg-[#141414] mt-2 w-full min-w-0 rounded-lg px-2 md:px-5 py-2 border border-gray-600/80 outline-none hover:border-red-800"
                      type="text"
                      required
                      onChange={handleChange}
                      value={formData.contact}
                      name="contact"
                      placeholder={formData.contactMethod?.placeholder}
                    />
                    {formErrors.contact && (
                      <p className="text-red-500 text-sm">
                        {formErrors.contact}
                      </p>
                    )}
                  </>
                )}
                <div className="flex justify-end">
                  <FormButton label={t.booking.next} onClick={handleNext} />
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="flex flex-col mt-10">
                <h2 className="flex  font-bold text-2xl">
                  {t.booking.yourTattooIdea}
                </h2>
                <label className="mt-5">
                  {t.booking.describeIdea}
                  <span className="text-red-800">*</span>
                </label>
                <textarea
                  className="relative bg-[#141414] mt-2 w-full min-w-0 rounded-lg px-3 py-2 border border-gray-600/80 outline-none focus:border-red-800"
                  rows={4}
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  placeholder={t.booking.whatDoYouWant}
                />
                {formErrors.idea && (
                  <p className="text-red-500 text-sm">{formErrors.idea}</p>
                )}
                <label className="mt-2">{t.booking.preferredStyle}</label>
                <select
                  defaultValue={"default"}
                  className="relative bg-[#141414] text-white border outline-none border-1 focus:border-red-800 border-gray-600 rounded-lg px-3 py-2"
                  name="style"
                  onChange={handleDate}
                >
                  <option
                    value={"default"}
                    disabled
                    hidden
                    className="relative bg-[#141414]"
                  >
                    {t.booking.chooseYourStyle}
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

                <label className="mt-2">{t.booking.prefferedDate}</label>
                <input
                  className="relative bg-[#141414] mt-2 w-full min-w-0 rounded-lg px-2 md:px-5 py-2 border border-gray-600/80 outline-none hover:border-red-800"
                  type="date"
                  onChange={handleChange}
                  name="date"
                  min={todayDate}
                />
                <p className="mt-1 text-muted">{t.booking.optional}</p>
                <div className="flex justify-between">
                  <BackButton
                    label={t.booking.back}
                    onClick={() => setCurrentStep(currentStep - 1)}
                  />
                  <FormButton label={t.booking.next} onClick={handleNext} />
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="flex flex-col mt-10">
                <h2 className="flex  font-bold text-2xl">
                  Review Your Request
                </h2>
                <div className="relative border bg-[#141414] border-[#2a2a2a] rounded-lg mt-5">
                  <p className="border-b border-[#2a2a2a] px-4 py-3 font-medium uppercase tracking-wider text-muted">
                    {" "}
                    Your request
                  </p>
                  <dl className="divide-y divide-[#2a2a2a] ">
                    <div className="flex gap-4 px-4 py-3">
                      <dt className="w-28 text-muted">Name</dt>
                      <dd className="flex-1 break-words text">
                        {formData.name}
                      </dd>
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
                      <dd className="flex-1 break-words text">
                        {formData.idea}
                      </dd>
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
                        {formData.date ? formData.date : "To be confirmed"}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="flex border bg-[#141414] border-[#2a2a2a] rounded-lg mt-5 p-3">
                  <div className="w-20">
                    <input
                      type="checkbox"
                      onChange={() => setDisabled(!disabled)}
                      checked={disabled ? false : true}
                      className="accent-red-800 w-4 h-4 mt-2"
                    />
                  </div>
                  <span>{t.booking.agreement}</span>
                </div>
                <div className="flex justify-between">
                  <BackButton
                    label={t.booking.back}
                    onClick={() => setCurrentStep(currentStep - 1)}
                  />
                  <div className="relative bg-black">
                    <button
                      type="button"
                      className={`mt-8 py-1 md:py-3 px-3 rounded-lg flex mx-8 md:gap-3 justify-center text-wrap items-center ${
                        disabled
                          ? "text-muted bg-red-800/40 "
                          : "bg-red-800 hover:bg-red-600"
                      }`}
                      onClick={() => handleSubmit()}
                      disabled={disabled}
                    >
                      <span className="font-bold text-lg/5">
                        {t.booking.confirm}
                      </span>{" "}
                      <GoDown className="mt-1 rotate-270 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
