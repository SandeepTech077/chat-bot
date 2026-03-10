import Title from "../Common/Title";
import { awardsData } from "../../assets/data/awards";
import Icons from "../../assets/Icons";

const Achievements = () => {
  return (
    <section className="top-spacing bg-[#FCFCFC] lg:px-10  sm:px-0 ">
      <div className="container-base flex flex-col space-y-8 py-10">
        {/* First row */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side */}
          <div className="md:w-1/2">
            <Title text="A Showcase of Success" />
            {/* <h2 className="text-3xl pt-8 pb-5">Our Achievement</h2> */}
            <p className="text-customGrey">
              Explore our collection of prestigious awards that reflect our
              dedication to mission or values.
            </p>
          </div>

          {/* Right side - First 2 awards */}
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {awardsData.slice(0, 2).map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-lg gap-5 p-6 flex md:flex-col   sm:flex-row transition-transform duration-300 ease-in-out transform  hover:shadow-lg"
              >
                <img
                  src={Icons.trophy}
                  alt="trophy"
                  className="w-12 h-12 mb-4"
                />
                <span className="text-base ">{award.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Remaining awards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {awardsData.slice(2).map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 gap-5 flex md:flex-col   sm:flex-row transition-transform duration-300 ease-in-out transform  hover:shadow-lg"
            >
              <img loading="lazy" src={Icons.trophy} alt="trophy" className="w-12 h-12 mb-4" />
              <span className="text-base">{award.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
