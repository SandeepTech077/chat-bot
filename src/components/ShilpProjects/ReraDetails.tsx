interface ReraProps {
  reg: string;
}

const ReraDetails = ({ reg }: ReraProps) => {
  if (reg === null) return;

  return (
    <section className="w-full h-auto bg-[#F8F8F8] flex flex-col justify-center items-center text-center px-2 py-6 top-spacing">
      <div className="container flex flex-col justify-center items-center text-center px-2 ">
        <h3 className=" font-semibold text-3xl ">Rera Details</h3>
        <span className="uppercase  pt-5 text-sm sm:text-base break-words w-full">
          RERA REGISTRATION NO: {reg}
        </span>
        <span className="uppercase  text-sm sm:text-base">
          WEBSITE: HTTPS://GUJRERA.GUJARAT.GOV.IN/
        </span>
      </div>
    </section>
  );
};

export default ReraDetails;
