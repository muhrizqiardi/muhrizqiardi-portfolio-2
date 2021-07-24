import { useState } from "react";
import ChatDialog from "../components/ChatDialog";

function JasaWeb(props) {
  const [chatDialogState, setChatDialogState] = useState(false);
  return (
    <>
      <style jsx>{`
        header {
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
          <h1 id="desc" className=" text-5xl md:text-6xl text-center font-black my-7 px-5 anim-2">
            Jasa Pembuatan Website <span className="">Terjangkau</span>
          </h1>
          <p className="text-lg text-center">Ingin memiliki <span className="bg-yellow-500 font-bold"> website profile perusahaan</span>? Ingin membuat <span className="bg-yellow-500 font-bold">website untuk perlombaan</span>? atau ingin membuat <span className="bg-yellow-500 font-bold">toko online</span>? Semua tersedia dengan harga yang terjangkau, mulai dari</p>
          <p className="text-3xl font-black my-2">Rp699.000</p>
          <p>(bisa nego)</p>
          <a href="#kontak" className="rounded-md bg-yellow-500 cursor-pointer hover:scale-105 font-bold px-3 py-2 mt-7">
            Hubungi Saya
          </a>
        </section>


      </header>

      {/* Benefit */}
      {/* <section className="py-5 px-3 bg-dark text-white flex flex-col items-center">
        <h1 className="text-xl mb-5 font-bold text-center border-b-4 border-primary">
          Benefit
        </h1>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="bg-white text-black rounded-md shadow p-5 m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-center">
            <img src="/assets/jasaweb/search_illustration.png" height="100" alt="" />
            <h2 className="text-lg font-bold mb-1">
              Search Engine Optimization
            </h2>
            <p>
              Search Engine Optimization (SEO) menentukan
            </p>
          </div>
          <div className="bg-white text-black rounded-md shadow p-5 m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-center">
            <img src="/assets/jasaweb/design_illustration.png" height="100" alt="" />
            <h2 className="text-lg font-bold mb-1">
              Design yang menarik
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, non.
            </p>
          </div>
          <div className="bg-white text-black rounded-md shadow p-5 m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-center">
            <img src="/assets/jasaweb/responsive_illustration.png" height="100" alt="" />
            <h2 className="text-lg font-bold mb-1">
              Responsive Design
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, non.
            </p>
          </div>
        </div>
      </section> */}


      {/* Product and services */}
      <section className="py-5 px-3 bg-dark text-white flex flex-col items-center">
        <div className="flex items-center">
          <h1 className="text-xl mb-5 font-bold text-center  border-b-4 border-primary">
            Produk dan Jasa
          </h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="bg-white text-black rounded-md shadow m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-start overflow-hidden">
            <div className="bg-blue-200" style={{ width: "100%", height: "16rem" }}></div>
            <div className="w-full h-36 p-3 flex items-center justify-center">
              <h2 className="text-lg font-bold mb-1">
                Website Profil Perusahaan/Bisnis
              </h2>
            </div>
          </div>
          <div className="bg-white text-black rounded-md shadow m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-start overflow-hidden">
            <div className="bg-yellow-200" style={{ width: "100%", height: "16rem" }}></div>
            <div className="w-full h-36 p-3 flex items-center justify-center">
              <h2 className="text-lg font-bold mb-1">
                Website Event/Exbihition/Conference
              </h2>
            </div>
          </div>
          <div className="bg-white text-black rounded-md shadow m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-start overflow-hidden">
            <div className="bg-green-200" style={{ width: "100%", height: "16rem" }}></div>
            <div className="w-full h-36 p-3 flex items-center justify-center">
              <h2 className="text-lg font-bold mb-1">
                Ecommerce/Toko Online
              </h2>
            </div>
          </div>
          <div className="bg-white text-black rounded-md shadow m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-start overflow-hidden">
            <div className="bg-red-200" style={{ width: "100%", height: "16rem" }}></div>
            <div className="w-full h-36 p-3 flex items-center justify-center">
              <h2 className="text-lg font-bold mb-1">
                Blog Pribadi
              </h2>
            </div>
          </div>
          <div className="bg-white text-black rounded-md shadow m-5 mt-2.5 w-72 h-72 flex flex-col text-center items-center justify-start overflow-hidden">
            <div className=" bg-gradient-to-r from-red-400 to-blue-400" style={{ width: "100%", height: "16rem" }}></div>
            <div className="w-full h-36 p-3 flex items-center justify-center">
              <h2 className="text-lg font-bold mb-1">
                Dan lain-lain...
              </h2>
            </div>
          </div>
        </div>
        <a href="/#projects-section" className="text-base mt-3 font-bold text-center border-b-4 hover:text-blue-500 border-blue-500 text-white ">
          Lihat portfolio saya
        </a>
      </section>
      {/* Tahapan */}
      <section className="bg-dark py-5 px-5 flex flex-col items-center">
        <h1 className="text-xl mb-5 font-bold text-center text-white border-b-4 border-primary">
          Tahapan
        </h1>
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
      {/* Contact */}
      <section className="bg-dark py-5 px-5 flex flex-col items-center">
        <h1 id="kontak" className="text-xl mb-5 font-bold text-center text-white border-b-4 border-primary">
          Kontak
        </h1>
        <div className=" max-w-2xl mx-auto">
          <div className="bg-white text-black rounded-md shadow mb-3 px-10 lg:px-32 py-16 flex flex-col items-center justify-start">
            <p className="font-bold text-lg text-center mb-3">Hubungi saya melalui:</p>
            <a href="https://wa.me/+6281210029357?text=Hi,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda!" className="bg-green-500 text-white font-bold p-3 rounded-lg flex flex-row justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} style={{ fill: 'white', }}><path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263" /></svg>
              <span className="ml-2">WhatsApp</span>
            </a>
            <p className="my-3">atau</p>
            <a href="mailto:muhrizqiardi@gmail.com" className="bg-gray-600 text-white font-bold p-3 rounded-lg flex flex-row justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} style={{ fill: 'white', }} ><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z" /><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z" /></svg>
              <span className="ml-2">muhrizqiardi@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
      {/* Chat Bubble */}
      <span className="fixed bottom-0 right-0 p-5 flex flex-row align-top">
        <button onClick={event => setChatDialogState(x => !x)} className=" rounded-full bg-green-600 hover:bg-green-700 shadow-md cursor-pointer select-none p-4 w-max font-bold text-white">
          {/* Chat */}
          {
            chatDialogState ?
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} style={{ fill: 'white', }}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" /></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} style={{ fill: 'white' }}><path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263" /></svg>
          }
        </button>
        <span class="relative right-3 flex rounded-full h-3 w-3 bg-red-600 ">
          <span class=" inline-flex rounded-full h-3 w-3 bg-red-600 animate-ping"></span>
        </span>
      </span>
      {/* Footer */}
      <footer className="px-20 py-9 bg-yellow-500 text-center">
        Copyright © 2021 Muhammad Rizqi Ardiansyah
      </footer>

      {/* Chat Dialog */}
      {chatDialogState && <ChatDialog />}
    </>
  );
}
export default JasaWeb;
