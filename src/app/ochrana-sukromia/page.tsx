import React from "react";

const PrivacyPage = () => {
  return (
    <div className="main_section m-auto flex flex-col px-4 py-12 max-w-3xl space-y-4 min-h-[600px]">
      <h2 className="font-extrabold mb-4">Ochrana súkromia</h2>

      <p>
        Tento web nezhromažďuje žiadne osobné údaje automaticky, nepoužíva
        cookies, analytické nástroje, reklamné služby ani tretie strany.
      </p>

      <p>
        Jediným spôsobom spracovania osobných údajov je kontaktný formulár, kde
        návštevník môže dobrovoľne zadať svoje meno, telefónne číslo, e-mail a
        správu. Tieto údaje sú použité výlučne na vybavenie požiadavky a sú
        zaslané priamo e-mailom správcovi stránky.
      </p>

      <p>
        Údaje nie sú uchovávané v databáze, nie sú zdieľané s tretími stranami a
        slúžia iba na spätné kontaktovanie užívateľa.
      </p>

      <p>
        Odoslaním formulára používateľ výslovne súhlasí so spracovaním údajov za
        týmto účelom.
      </p>
    </div>
  );
};

export default PrivacyPage;
