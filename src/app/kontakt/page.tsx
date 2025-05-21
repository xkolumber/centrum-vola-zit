import ContactForm from "../components/ContactElements/ContactForm";
import ContactInfo from "../components/ContactElements/ContactInfo";

const page = () => {
  return (
    <div className="main_section m-auto  flex flex-col md:flex-row w-full justify-between min-h-screen ">
      <div className="flex flex-col ">
        <p>Zanechajte nám správu</p>
        <h2 className="font-extrabold">Kontakt OZ</h2>
        <p className=" pt-4 mb-4">
          Ostaňme spolu v kontakte. Napíšte nám alebo nás sledujete na
          sociálnych sieťach.
        </p>
        <ContactInfo />
      </div>{" "}
      <ContactForm />
    </div>
  );
};

export default page;
