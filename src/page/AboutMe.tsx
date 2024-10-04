const AboutMe = () => {
  return (
    <>
    <div id="about" className="hero bg-[#34495E] w-full h-[calc(100vh-4rem)]">
        <div className="hero-content flex-col lg:flex-row justify-between w-full">
          <div className="text-left text-white">
            <h1 className="text-[#ECF0F1] text-5xl font-bold opacity-90">About Me</h1>
            <p className="py-3 text-lg opacity-70 font-bold">Hallo</p>
            <ul className="font-bold text-xl">
              {/* Details */}
              <li className="flex items-center py-2">
                <span className="text-[#ECF0F1] opacity-90 w-52">Name:</span>
                <span className="opacity-70">Era Nadine Gloria</span>
              </li>
              {/* Second line of details */}
              <li className="flex items-center py-2">
                <span className="text-[#ECF0F1] opacity-90 w-52">Date Of Birth:</span>
                <span className="opacity-70">22 April 2007</span>
              </li>
              {/* Third line of details */}
              <li className="flex items-center py-2">
                <span className="text-[#ECF0F1] opacity-90 w-52">Address:</span>
                <span className="opacity-70">Jl. Sanggar Kencana XXV no.11A - 23, Kota Bandung</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-[#ECF0F1] opacity-90 w-52">Zip Code:</span>
                <span className="opacity-70">40286</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-[#ECF0F1] opacity-90 w-52">Email:</span>
                <span className="opacity-70">Eranadine3540@gmail.com</span>
              </li>
              <li className="flex items-center py-2">
                <span className="text-[#ECF0F1] opacity-90 w-52">Phone:</span>
                <span className="opacity-70">+62 812-2197-2695</span>
              </li>
              <li className="flex space-x-4 items-center py-2">
                <a href="https://www.instagram.com/nadzz_354?igsh=dTlxbmYydHRnZXE4">
                  <button className="btn btn-ghost opacity-90 w-20">
                    <img src="/assets/instagram.jpeg" alt="Instagram" />
                  </button>
                </a>
                <button className="btn btn-ghost opacity-90 w-20">
                  <img src="/assets/mail.jpeg" alt="Mail" />
                </button>
                <a href="https://wa.me/qr/2SSYSOLYRCFBO1">
                  <button className="btn btn-ghost opacity-90 w-20">
                    <img src="/assets/whatsapp.jpeg" alt="Whatsapp" />
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <img
            src="/assets/myPhoto2.jpeg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Profile"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
