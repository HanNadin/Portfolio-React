const Service = () => {
  return (
    <>
      <div id="service" className="bg-[#34495E] min-h-screen py-12">
        <h1 className="flex justify-center text-[#ECF0F1] text-5xl font-semibold mb-8">Services</h1>
        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            
            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src="/assets/fe.jpeg"
                  alt="Front-End Developing"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">Front-End Developing</h2>
                <p className="text-[#ECF0F1] text-sm">Building beautiful, responsive interfaces with modern tools.</p>
              </div>
            </div>

            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src="/assets/be.jpeg"
                  alt="Back-End Developing"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">Back-End Developing</h2>
                <p className="text-[#ECF0F1] text-sm">Creating robust, scalable server-side solutions.</p>
              </div>
            </div>

            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src="/assets/ui.jpeg"
                  alt="UI Designs"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">UI Designs</h2>
                <p className="text-[#ECF0F1] text-sm">Crafting user-friendly and aesthetically pleasing interfaces.</p>
              </div>
            </div>

            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src="/assets/ux.jpeg"
                  alt="UX Design"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">UX Design</h2>
                <p className="text-[#ECF0F1] text-sm">Enhancing user experiences through research and design.</p>
              </div>
            </div>

            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src="/assets/social.jpeg"
                  alt="Social Media Management"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">Social Media Management</h2>
                <p className="text-[#ECF0F1] text-sm">Managing your social media presence to increase visibility and engagement.</p>
              </div>
            </div>

            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src="/assets/bgHome.jpeg"
                  alt="Custom Solutions"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">Custom Solutions</h2>
                <p className="text-[#ECF0F1] text-sm">Tailoring web solutions to meet your specific needs.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
