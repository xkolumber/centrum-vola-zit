import ButtonMui from "./components/ButtonMui";

const NotFound = () => {
  return (
    <div className="m-auto main_section  min-h-[500px] xl:min-h-screen justify-center items-center flex flex-col">
      <h2 className="text-center font-semibold">
        Ľutujeme, zadaná stránka sa nenašla.
      </h2>

      <div className="flex flew-row gap-6 mt-4">
        <ButtonMui color="#ADCA2A" text="Domov" link="/" />
      </div>
    </div>
  );
};

export default NotFound;
