import ContactInfo from "../components/ContactElements/ContactInfo";

const page = () => {
  return (
    <div className="main_section m-auto  flex flex-col w-full justify-between min-h-screen ">
      <div className="flex flex-col ">
        <ContactInfo />
      </div>{" "}
    </div>
  );
};

export default page;
