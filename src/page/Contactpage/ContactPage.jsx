import SectionTitle from "../../components/SectionTitle";
import Cover from "../Shared/Cover/Cover";

const ContactPage = () => {
  const img =
    "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <Cover img={img} title={"Contact Us"}></Cover>
      <SectionTitle subHeading="Visit Us" heading="Our Location"></SectionTitle>
      <div className="">
        <div className="grid md:grid-cols-3 container mx-auto my-16 items-center lg:grid-cols-3 gap-10 ">
          <div className="card-body items-center justify-center flex-col flex h-[220px] bg-base-100  border-2 text-center">
            <h1>logo</h1>
            <h2 className="text-xl font-bolder">Phone</h2>
            <p>0123456789</p>
          </div>
          <div className="card-body h-[220px]  bg-base-100  border-2 text-center">
            <h1>logo</h1>
            <h2 className="text-xl font-bolder">Address</h2>
            <p>Lorem ipsum dolor sit,</p>
          </div>
          <div className="card-body h-[220px] bg-base-100  border-2 text-center">
            <h1>logo</h1>
            <h2 className="text-xl font-bolder">Working Hours</h2>
            <p>Mon - Fri: 08:00 - 22:00</p> <p> Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>

      <SectionTitle
        subHeading="Send Us a Message"
        heading="Contact From"
      ></SectionTitle>

      <section className="p-6  bg-base-200 text-slate-900">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md  ">
           
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full  sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
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
                  type="text"
                  placeholder=""
                  className="w-full h-[250px] rounded-md focus:ring  text-gray-900  border-gray-700"
                />
              </div>
           
            </div>
            
          </fieldset>  
          
          <button className="btn btn-outline  mx-auto ">Send Message</button>
    
        </form>
      </section>
      <div className="h-44">

      </div>
    </div>
  );
};

export default ContactPage;
