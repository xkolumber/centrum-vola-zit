import { Typography } from "@mui/material";
import Image from "next/image";
import ButtonMui from "../ButtonMui";

const FirstPart = () => {
  return (
    <div className="min-h-[737px] flex justify-center items-center main_section m-auto">
      <div className="flex flex-col max-w-[800px]">
        <p className="uppercase text-[#757575]">Centrum Vôľa žiť</p>
        <div className="flex flex-col gap-2">
          <Typography variant="h2" component="h2" fontWeight={500}>
            Srdce pre deti, odborníci pre ich budúcnosť
          </Typography>
          <p className="max-w-[680px]">
            V našom združení veríme, že každé dieťa si zaslúži šancu rásť, učiť
            sa a rozvíjať svoj potenciál. Sme tím lekárov, psychológov,
            logopédov a odborníkov na financovanie zdravotnej starostlivosti.
            Spoločne pomáhame zdravotne znevýhodneným deťom prekonávať prekážky,
            aby mohli zažiť radosť z pokroku.
          </p>
          <ButtonMui color="#ADCA2A" text="Viac info" link="/" />
        </div>
      </div>

      <Image
        src="/first.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className="max-w-[462px]"
      />
    </div>
  );
};

export default FirstPart;
