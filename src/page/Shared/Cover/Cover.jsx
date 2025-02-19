const Cover = ({ img, title }) => {
  return (
    <div>
      <div
        className="hero h-[700px] "
        style={{
          backgroundImage: `url('${img}')`,
        }}
      >
        <div className="hero-overlay  "></div>

        <div className="container mx-auto bg-opacity-30  bg-black p-10">
          <div className=" py-5">
            <h2 className="uppercase text-neutral-content text-center text-6xl tracking-tighter font-bold">
              {title}
            </h2>
            <div className="space-x-2 text-center  text-white  py-2 lg:py-0">
              <span> Provident cupiditate voluptatem et in.</span>
              <span className="font-bold  text-slate-100 text-lg">Yummy </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
