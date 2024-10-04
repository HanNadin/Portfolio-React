import homePhoto from "assets/myPhoto.jpeg"

const Home = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen bg-[url('/src/assets/bgHome3.jpeg')] bg-cover bg-center bg-opacity-50 relative"
    >
      {/* Overlay to darken background for better text visibility */}
      <div className="absolute inset-0 bg-[#2C3E50] opacity-60"></div>

      <div className="hero-content flex-col lg:flex-row relative z-10 text-white">
        <img
          src={homePhoto}
          className="max-w-72 rounded-lg shadow-2xl object-cover h-auto w-full lg:w-1/3"
          alt="Profile"
        />
        <div className="ml-10">
          <h1 className="text-6xl font-bold leading-tight text-[#ECF0F1]">
            Era Nadine G.P.
          </h1>
          <h2 className="py-4 text-2xl font-medium text-[#ECF0F1]">Web Developer</h2>
          <p className="text-lg max-w-xl mb-6 text-[#ECF0F1]">
            Selamat datang di portofolio saya! Saya adalah siswa SMKN 13 Bandung
            yang memiliki minat besar dalam pengembangan web. Saya dikenal
            sebagai pribadi yang disiplin, pekerja keras, mampu bekerja dalam
            tim, serta fasih berbahasa Inggris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
