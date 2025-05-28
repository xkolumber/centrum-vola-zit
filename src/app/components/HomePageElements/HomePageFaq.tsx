"use client";
import IconPlus from "@/app/icons/IconPlus";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import { useState } from "react";

const faq_data = [
  {
    title: "Od akého veku viete pomôcť môjmu dieťaťu?",
    desc: "Najvhodnejšie je začať s terapiami od 5. mesiaca veku dieťaťa. V prípade mladšieho veku nás však neváhajte kontaktovať – radi s Vami preberieme možnosti a poradíme individuálne.",
  },
  {
    title: "Bude moje dieťa chodiť?",
    desc: "Každé dieťa je jedinečné a preto nemožno dať jednoznačnú odpoveď. Vďaka špecializovaným terapiám však dokážeme výrazne zlepšiť jeho motorické schopnosti a celkovú kvalitu života.",
  },
  {
    title: "Ako viem svojmu dieťaťu zabezpečiť financovanie terapií?",
    desc: "Existuje viacero možností finančnej podpory – od príspevkov zo sociálneho systému, cez príspevky z rôznych nadácií, až po individuálne zbierky. Radi vám poradíme s výberom najvhodnejšej formy podpory.",
  },
];

const HomePageFaq = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  const handleChange = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? false : index));
  };
  return (
    <div className="w-full bg-[#F1F1F1]  flex justify-center pt-8 pb-8">
      <div className="main_section justify-center w-full flex flex-col md:flex-row gap-8 xl:gap-16 ">
        <div className="flex flex-col w-full ">
          <p>Faq</p>
          <h2 className="font-extrabold ">Najčastejšie kladené otázky</h2>
          <p className=" pt-4 mb-8 2xl:mb-24">
            Tu nájdete odpovede na otázky, ktoré nám najčastejšie kladú rodičia.
            Ak medzi nimi nenájdete tú svoju, pokojne nás kontaktujte – sme tu
            pre Vás.
          </p>
          {faq_data.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <Accordion
                key={index}
                expanded={isExpanded}
                onChange={() => handleChange(index)}
                disableGutters
                square
                className="!bg-[#F1F1F1] !shadow-none"
                sx={{
                  borderTop: index === 0 ? "none" : "1px solid #e0e0e0",
                  "&::before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary className="!pt-6 !pb-6">
                  <Box display="flex" alignItems="center" gap={3}>
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        transition: "transform 0.3s ease",
                        transform: isExpanded
                          ? "rotate(45deg)"
                          : "rotate(0deg)",
                      }}
                    >
                      <IconPlus />
                    </Box>
                    <h5 className="font-extrabold">{item.title}</h5>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{item.desc}</p>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePageFaq;
