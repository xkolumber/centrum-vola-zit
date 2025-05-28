import { Metadata } from "next";
import ContactInfo from "../components/ContactElements/ContactInfo";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Máte otázky alebo záujem o naše služby? Neváhajte nás kontaktovať. Sme tu pre rodičov a deti, ktoré potrebujú odbornú starostlivosť, terapiu a podporu.",

  keywords: [
    "centrum vôľa žiť",
    "centrum vola zit",
    "kontakt",
    "pomoc ďeťom",
    "centrum pre deti",
    "zdravotné znevýhodnenie",
    "rehalitácia",
    "občianske združenie",
    "spišská belá",
    "kežmarok",
  ],
  openGraph: {
    title: "Kontakt",
    description:
      "Máte otázky alebo záujem o naše služby? Neváhajte nás kontaktovať. Sme tu pre rodičov a deti, ktoré potrebujú odbornú starostlivosť, terapiu a podporu.",
    images: [
      {
        url: "https://d9xqr11l6v5wz.cloudfront.net/o_nas.jpg",
        alt: "Centrum vôľa žiť",
        width: 1200,
        height: 630,
      },
    ],
  },
};

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
