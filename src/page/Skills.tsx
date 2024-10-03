const Skills = () => {
  return (
    <>
      <div id="skills" className="w-full h-[calc(100vh-4rem)] bg-[#2C3E50] pt-16">
        <h1 className="flex justify-center text-[#ECF0F1] text-5xl mb-12 font-semibold">Skills</h1>
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-12 px-8">
          {/* Skill 1 (Left) */}
          <div>
            <label className="text-white text-xl text-[#ECF0F1]">HTML</label>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-[#1A5276] h-6 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          {/* Skill 2 (Right) */}
          <div>
            <label className="text-white text-xl text-[#ECF0F1]">CSS</label>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-[#1A5276] h-6 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          {/* Skill 3 (Left) */}
          <div>
            <label className="text-white text-xl text-[#ECF0F1]">JavaScript</label>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-[#1A5276] h-6 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
          {/* Skill 4 (Right) */}
          <div>
            <label className="text-white text-xl text-[#ECF0F1]">React</label>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-[#1A5276] h-6 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          {/* Skill 5 (Left) */}
          <div>
            <label className="text-white text-xl text-[#ECF0F1]">Node.js</label>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-[#1A5276] h-6 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          {/* Skill 6 (Right) */}
          <div>
            <label className="text-white text-xl text-[#ECF0F1]">Tailwind CSS</label>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-[#1A5276] h-6 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          {/* Skill 7 (Left) */}
          <div>
            <label className="text-white text-xl text-[#ECF0F1]">Laravel</label>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-[#1A5276] h-6 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          {/* Skill 8 (Right) */}
          <div>
            <label className="text-white text-xl text-[#ECF0F1]">English</label>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
              <div className="bg-[#1A5276] h-6 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
