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
    title: "This is the frequently ask question",
    desc: "This is description needed",
  },
  {
    title: "This is the frequently ask question",
    desc: "This is description needed",
  },
  {
    title: "This is the frequently ask question",
    desc: "This is description needed",
  },
];

const HomePageFaq = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  const handleChange = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? false : index));
  };
  return (
    <div className="w-full bg-[#F1F1F1]  flex justify-center pt-8 pb-8 2xl:pt-32 2xl:pb-32">
      <div className="main_section justify-center w-full flex flex-col md:flex-row gap-8 xl:gap-16 ">
        <div className="flex flex-col w-full ">
          <h2 className="font-extrabold text-center">
            Najčastejšie kladené otázky
          </h2>
          <p className="text-center pt-4 mb-8 2xl:mb-24">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe
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
