function JasaWeb(props) {
  return (
    <>
      <style jsx>{`
        header {
          background: url("/assets/bg-color.svg");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>

      <header id="header" className={`px-5 md:px-20 `}>
        <div className={`navbar md:h-14 h-auto flex flex-row items-center justify-center py-2`}>
          <a href="/"><img src="/assets/animated_signature.svg" alt="" className=" h-11" /></a>
        </div>

        {/* Hero */}
        <section id="hero" className="py-10 flex flex-col items-center justify-center">
          {/* Hero Text */}
          <h1 id="desc" className=" text-5xl md:text-6xl text-center font-black my-7 px-5 anim-2 leading-snug">
            Jasa Pembuatan Website <span className=" text-yellow-500">Terjangkau</span>
          </h1>
          <div className="rounded-md bg-gradient-to-r from-yellow-600 to-yellow-500 text-white cursor-pointer hover:scale-105 font-bold px-3 py-2 mt-7">
            Hubungi Saya
          </div>
        </section>


      </header>


      {/* Advantages */}
      <section className="py-5 px-3 bg-dark text-white flex flex-col items-center">
        <h1 className="text-xl mb-5 font-bold text-center">
          Advantage
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="bg-white text-black rounded-md shadow p-5 m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-center">
            <img src="/assets/jasaweb/search_illustration.svg" height="100" alt="" />
            <h2 className="text-lg font-bold mb-1">
              Search Engine Optimization
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, non.
            </p>
          </div>
          <div className="bg-white text-black rounded-md shadow p-5 m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-center">
            <img src="/assets/jasaweb/design_illustration.svg" height="100" alt="" />
            <h2 className="text-lg font-bold mb-1">
              Design yang menarik
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, non.
            </p>
          </div>
          <div className="bg-white text-black rounded-md shadow p-5 m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-center">
            <img src="/assets/jasaweb/responsive_illustration.svg" height="100" alt="" />
            <h2 className="text-lg font-bold mb-1">
              Responsive Design
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, non.
            </p>
          </div>
        </div>
      </section>

      {/* Tahapan */}
      <section className="bg-yellow-500 py-5 px-5">
        <h1 className="font-bold text-xl mb-5 text-center">Tahapan</h1>
        <div className=" max-w-2xl mx-auto">
          <div className="bg-white text-black rounded-md shadow mb-3 p-5 w-full flex flex-row items-center justify-start">
            <span className="text-6xl w-24 text-center mr-5">
              1
            </span>
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-lg font-bold mb-1">
                Search Engine Optimization
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, non.
              </p>
            </div>
          </div>
          <div className="bg-white text-black rounded-md shadow mb-3 p-5 w-full flex flex-row items-center justify-start">
            <span className="text-6xl w-24 text-center mr-5">
              2
            </span>
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-lg font-bold mb-1">
                Search Engine Optimization
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, non.
              </p>
            </div>
          </div>
          <div className="bg-white text-black rounded-md shadow mb-3 p-5 w-full flex flex-row items-center justify-start">
            <span className="text-6xl w-24 text-center mr-5">
              3
            </span>
            <div className="flex flex-col justify-start items-start">
              <h2 className="text-lg font-bold mb-1">
                Search Engine Optimization
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, non.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default JasaWeb;
