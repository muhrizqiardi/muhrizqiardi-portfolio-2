function ChatDialog(props) {
  return (
    <div className="chat-dialog overflow-hidden bg-white text-white rounded-lg drop-shadow-xl fixed bottom-20 m-3 right-0">
      <style jsx>{`
        .chat-dialog {
          animation: 0.3s cubic-bezier(.34,.77,.63,1.28) rise-up;
        }
        @keyframes rise-up {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      <div className="w-full flex flex-row items-center p-3" style={{ background: "#095e54" }}>
        <div className="w-10 h-10 rounded-full bg-gray-400"></div>
        <div className="ml-2 flex flex-col">
          <span className="text-sm">Muhammad Rizqi Ardiansyah</span>
          <span className="text-xs">Typically replies within an hour</span>
        </div>
      </div>
      <div className="flex flex-col justify-end p-3 text-black " style={{ backgroundColor: "#E6DDD4" }}>
        <div className="chat-bubble-1 bg-white  rounded-lg rounded-tl-none text-sm p-3 w-64 drop-shadow-md ">
          Halo, ada yang bisa dibantu?
        </div>
        <a href="https://wa.me/+6281210029357?text=Hi, saya tertarik dengan jasa pembuatan website Anda!" type="text" className="text-black bg-white hover:bg-gray-200 mt-36 drop-shadow-md rounded-full cursor-pointer text-sm py-3 px-5 flex flex-row justify-between items-center">
          <span className="mr-3">Hi, saya tertarik dengan jasa pembuatan website Anda!</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} style={{ fill: 'rgb(0, 0, 0)', }}><path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z" /></svg>
        </a>
      </div>
    </div>
  );
}
export default ChatDialog;
