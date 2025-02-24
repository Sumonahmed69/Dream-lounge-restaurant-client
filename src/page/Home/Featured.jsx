import SectionTitle from "../../components/SectionTitle";

const Featured = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        // backgroundRepeat: "no-repeat"
    
      }}
      className="text-white"
      
    >
        <div className=" bg-opacity-30 pb-3 pt-2 bg-black">
        <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
        </div>
     
      <div className="md:flex bg-opacity-30 py-8  bg-black">
        <div className="mx-5 p-3">
          <img
            src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="mx-5 p-3">
          <p>April 20, 2020</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
          Discover a world of culinary delights at Pizza Hut BD!
           From mouthwatering pizzas to indulgent pasta,
           tempting appetizers, and delightful desserts
           <br />

           Get food delivered in Dhaka with <span className="text-orange-500 font-bold">Dream Lounge Restaurant </span>
           <br />
           ✓ Delivery to your home or office 
           <br />
           ✓ Safe and easy payment options.


          </p>
          
          <div className=" my-12  justify-start flex ">
            {/* <h1 className=" uppercase text-xl pb-3 px-3 rounded-lg border-b-2 hover:border-black">
              read more
            </h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
