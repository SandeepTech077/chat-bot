import TitleTwo from "./TitleTwo";
import CustomCard from "./CustomCard";
import { ProjectDataTypes } from "../../types/projectDataTypes.types";

type CardAreaProps = {
  section: string;
  title?: string;
  data: ProjectDataTypes[];
  desc?: string;
};

const CardArea = ({ section, title, data, desc }: CardAreaProps) => {
  return (
    <section className="relative top-spacing px-0 md:px-20 ">
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center">
        <TitleTwo text={section} />
        {title && (
          <h3 className="pt-7 text-3xl text-center capitalize">
            {title}
          </h3>
        )}

        {desc && (
          <p className="text-center mt-4 text-lg text-gray-600">{desc}</p>
        )}
      </div>

      {/* Grid Layout for Custom Cards */}
      <div
        className={`grid grid-cols-1  ${
          data.length === 1
            ? "place-items-center"
            : "sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        } gap-8 md:gap-10 lg:gap-20 mb-5 mt-12`}
      >
        {data.length > 0 ? (
          data.map((  item, index) => {
            return (
              <div key={item.id} className="relative">
                <CustomCard data={item} reverse={index % 3 === 1} />
              </div>
            );
          })
        ) : (
          <p className="text-center text-lg text-gray-600">No data available</p>
        )}
      </div>

    </section>
  );
};

export default CardArea;
