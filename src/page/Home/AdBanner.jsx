const AdBanner = () => {
  return (
    <div className="my-20 pt-8 container mx-auto ">
      <div className="p-6   py-12 bg-[url('https://as2.ftcdn.net/v2/jpg/02/11/60/49/1000_F_211604911_wn1FqBnH7TRfN87ux5pnQ2sgZUj7rGYd.jpg')] text-gray-900">
        <div className="container mx-auto bg-opacity-30  bg-black p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-white text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center  text-white  py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold  text-slate-100 text-lg">Yummy </span>
            </div>
           
            <button className="btn hover:btn-outline  "> Oder Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
