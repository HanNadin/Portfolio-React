import feImage from '/src/assets/fe.jpeg';
import beImage from '/src/assets/be.jpeg';
import uiImage from '/src/assets/ui.jpeg';
import uxImage from '/src/assets/ux.jpeg';
import socialImage from '/src/assets/social.jpeg';
import customImage from '/src/assets/bgHome.jpeg'; // New image for the 6th card

const Service = () => {
  return (
    <>
      <div id="service" className="bg-[#34495E] min-h-screen py-12">
        <h1 className="flex justify-center text-[#ECF0F1] text-5xl font-semibold mb-8">Services</h1>
        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            
            {/* Card 1: Front-End Developing */}
            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src={feImage}
                  alt="Front-End Developing"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">Front-End Developing</h2>
                <p className="text-[#ECF0F1] text-sm">Building beautiful, responsive interfaces with modern tools.</p>
              </div>
            </div>

            {/* Card 2: Back-End Developing */}
            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src={beImage}
                  alt="Back-End Developing"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">Back-End Developing</h2>
                <p className="text-[#ECF0F1] text-sm">Creating robust, scalable server-side solutions.</p>
              </div>
            </div>

            {/* Card 3: UI Designs */}
            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src={uiImage}
                  alt="UI Designs"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">UI Designs</h2>
                <p className="text-[#ECF0F1] text-sm">Crafting user-friendly and aesthetically pleasing interfaces.</p>
              </div>
            </div>

            {/* Card 4: UX Design */}
            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src={uxImage}
                  alt="UX Design"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">UX Design</h2>
                <p className="text-[#ECF0F1] text-sm">Enhancing user experiences through research and design.</p>
              </div>
            </div>

            {/* Card 5: Social Media Management */}
            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src={socialImage}
                  alt="Social Media Management"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-[#ECF0F1] text-lg">Social Media Management</h2>
                <p className="text-[#ECF0F1] text-sm">Managing your social media presence to increase visibility and engagement.</p>
              </div>
            </div>

            {/* Card 6: Custom Solutions */}
            <div className="card card-compact bg-[#1A252F] w-52 sm:w-60 shadow-xl rounded-lg">
              <figure className="h-40">
                <img
                  src={customImage}
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
