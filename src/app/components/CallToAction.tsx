import Link from "next/link";
import React from "react";
import ButtonMui from "./ButtonMui";

const CallToAction = () => {
  return (
    <div className="bg-[#F1F1F1] p-8 rounded-xl text-center m-auto flex justify-center flex-col items-center">
      <h3 className=" font-extrabold mb-2">Potrebujete poradiť?</h3>
      <p className="text-gray-700 mb-4 max-w-[700px] text-center">
        Ak máte doma dieťa so špeciálnymi potrebami, alebo hľadáte pomoc,
        poradenstvo či konkrétnu terapiu – neváhajte nás kontaktovať. Radi vám
        pomôžeme.
      </p>
      <Link href="/kontakt">
        <ButtonMui color="#ADCA2A" text="Kontaktujte nás" link="/kontakt" />
      </Link>
    </div>
  );
};

export default CallToAction;
