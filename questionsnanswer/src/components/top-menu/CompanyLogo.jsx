const CompanyLogo = ({ img }) => {
  return (
    <div className="flex flex-col justify-center">
      <img src={img} className="h-[6rem]" />
    </div>
  );
};

export default CompanyLogo;
