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
          <p>April 20, 2025</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Authoritatively synergize flexible customer service whereas turnkey
            niche markets. Dynamically evisculate market-driven data vis-a-vis
            virtual innovation. Assertively cultivate customer directed sources
            after customized networks.
          </p>
          
          <div className=" my-12  justify-start flex ">
            <h1 className=" uppercase text-xl pb-3 px-3 rounded-lg border-b-2 hover:border-black">
              read more
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
