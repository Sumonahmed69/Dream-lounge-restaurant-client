import { useRef } from "react";
import SectionTitle from "../../components/SectionTitle";
import Cover from "../Shared/Cover/Cover";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaClock, FaHome, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const img =
    "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <Cover img={img} title={"Contact Us"}></Cover>
      <SectionTitle subHeading="Visit Us" heading="Our Location"></SectionTitle>
      <div className="">
        <div className="grid md:grid-cols-3 container mx-auto my-16 items-center lg:grid-cols-3 gap-10 ">
          <div className="card-body hover:scale-110 hover:border-gray-500 hover:rounded-lg items-center justify-center flex-col flex h-[220px] bg-base-100  border-2 text-center">
            <div>
              <FaPhone />
            </div>
            <h2 className="text-xl font-bolder ">Phone</h2>
            <p>0123456789</p>
          </div>
          <div className="card-body hover:scale-110 hover:border-gray-500 hover:rounded-lg items-center justify-center flex-col flex h-[220px] bg-base-100  border-2 text-center">
            <div>
              <FaHome />
            </div>
            <h2 className="text-xl font-bolder">Address</h2>
            <p>Keraniganj, Dhaka-1310</p>
          </div>
          <div className="card-body hover:scale-110 hover:border-gray-500 hover:rounded-lg items-center justify-center flex-col flex h-[220px] bg-base-100  border-2 text-center">
            <div>
              <FaClock />
            </div>
            <h2 className="text-xl font-bolder">Working Hours</h2>
            <p>Mon - Fri: 08:00 - 22:00</p> <p> Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <iframe
        // className=" container  "
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d280.9538043237664!2d90.40839218970724!3d23.701286760280222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1740328725200!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <SectionTitle
        subHeading="Send Us a Message"
        heading="Contact From"
      ></SectionTitle>

      <section className="p-6  bg-base-200 text-slate-900">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md  ">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full  sm:col-span-3">
                <label htmlFor="Name" className="text-sm">
                  Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="name"
                  required
                  placeholder="name"
                  className="w-full pl-5 h-10 rounded-md focus:ring  text-gray-900  border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  className="w-full pl-5 h-10 rounded-md focus:ring  text-gray-900  border-gray-700"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Message
                </label>
                <input
                  id="address"
                  required
                  type="text"
                  name="message"
                  placeholder=""
                  className="w-full h-[200px] rounded-md focus:ring  text-gray-900  border-gray-700"
                />
              </div>
            </div>
          </fieldset>

          <button className="btn btn-outline  mx-auto ">Send Message</button>

          {success && <p>Email sent successfully!</p>}

          {error && <p>Failed to send email.</p>}
        </form>
      </section>
      <div className="h-44"></div>
    </div>
  );
};

export default ContactPage;
