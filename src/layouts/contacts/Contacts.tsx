import { Clock } from "../../assets/svg/Clock";
import { GoogleMapTag } from "../../assets/svg/GoogleMapTag";
import { Instagram } from "../../assets/svg/Instagram";
import { Phone } from "../../assets/svg/Phone";
import { Telegram } from "../../assets/svg/Telegram";

export const Contacts = () => {
  return (
    <>
      <div className="relative  px-5 md:px-0 md:container md:mx-auto py-10">
        <h1 className="text-white text-3xl font-bold">Contacts</h1>
        <p className="mt-2 text-muted">Get in touch</p>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-white">
            <div className="flex gap-3 border border-[#484747] w-2/3 bg-[#141414] hover:bg-[#353434] rounded-md p-2">
              <Telegram className="w-6" />
              <div>
                <p className="text-muted">Telegram</p>
                <p className="font-bold">@GoQa123</p>
              </div>
            </div>
            <div className="flex gap-3 border border-[#484747] w-2/3 bg-[#141414] hover:bg-[#353434] rounded-md p-2">
              <Instagram className="w-6" />
              <div>
                <p className="text-muted">Instagram</p>
                <p className="font-bold">@beqa_tattoo_art</p>
              </div>
            </div>
            <div className="flex gap-3 border border-[#484747] w-2/3 bg-[#141414] hover:bg-[#353434] rounded-md p-2">
              <Phone className="w-6" />
              <div>
                <p className="text-muted">Phone</p>
                <p className="font-bold">+372 55562148</p>
              </div>
            </div>{" "}
            <div className="flex gap-3 border border-[#484747] w-2/3 bg-[#141414] hover:bg-[#353434] rounded-md p-2">
              <Clock className="w-6" />
              <div>
                <p className="text-muted">Working hours</p>
                <p className="font-bold">Tue-Sun 10:00-19:00</p>
              </div>
            </div>
          </div>
          <div className="right text-white">
            <div className="relative aspect-video w-full overflow-hidded rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.8!2d24.7577261!3d59.4314125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929565a0104b5b%3A0xf76b0095e96d74c0!2sTattoo%20Art%20%7C%20Tattoo%20Tallinn!5e0!3m2!1sen!2see!4v1"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A. Lauteri tn 5, 10114 Tallinn"
                className="absolute inset-0 h-full w-full rounded-lg"
              ></iframe>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex">
                <GoogleMapTag className="w-4 fill-red-800 " />
                <span className="text-muted">
                  {" "}
                  A. Lauteri tn 5, 10114 Tallinn
                </span>
              </div>
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJW0sQoGUlpkIRwHRt6ZUAa_c"
                className="text-red-600"
              >
                <span className="hover:underline"> Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
