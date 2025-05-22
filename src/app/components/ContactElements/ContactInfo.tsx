import IconFacebook from "@/app/icons/IconFacebook";
import IconInstagram from "@/app/icons/IconInstagram";
import IconYoutube from "@/app/icons/IconYoutube";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Link from "next/link";
import ContactForm from "./ContactForm";

const data = [
  {
    title: "Ochotná pomôcť",
    desc: "Mgr. Lucia Kačmarčíková",
    color: "#F4D529",
    icon: <VolunteerActivismIcon />,
  },
  {
    title: "Náš e-mail",
    desc: "centrum.volazit@gmail.com",
    color: "#C5D327",
    icon: <MailIcon />,
  },
  {
    title: "Telefónny kontakt",
    desc: "+421 915 653 553",
    color: "#20A9E1",
    icon: (
      <CallIcon
        style={{
          color: "#ffffff",
        }}
      />
    ),
  },

  {
    title: "Občianske združenie",
    desc: "Zimná 442/46, 059 01 Spišská Belá, Slovensko",
    color: "#a970e6",
    icon: (
      <LocationPinIcon
        style={{
          color: "#ffffff",
        }}
      />
    ),
  },
];

const data2 = [
  {
    title: "Ochotní pomôcť",
    desc: "Mgr. Alexandra Németh, Mgr. Lucia Kačmarčíková",
    color: "#F4D529",
    icon: <VolunteerActivismIcon />,
  },
  {
    title: "Náš e-mail",
    desc: "centrum.volazit@gmail.com",
    color: "#C5D327",
    icon: <MailIcon />,
  },
  {
    title: "Telefónny kontakt",
    desc: "+421 911 744 717, +421 915 653 553",
    color: "#20A9E1",
    icon: (
      <CallIcon
        style={{
          color: "#ffffff",
        }}
      />
    ),
  },
  {
    title: "Sídlo",
    desc: "Dr. Alexandra 42, 060 01 Kežmarok, Slovensko",
    color: "#2E63AD",
    icon: (
      <LocationPinIcon
        style={{
          color: "#ffffff",
        }}
      />
    ),
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <div className="flex flex-col gap-6 ">
          <h2 className="font-extrabold">Kontakt Centrum</h2>
          {data2.map((object, index) => (
            <div className="flex flex-row gap-4 items-center" key={index}>
              {" "}
              <div className="">
                <div
                  className="circle_contact flex justify-center items-center"
                  style={{
                    backgroundColor: object.color,
                  }}
                >
                  {object.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[12px]">{object.title}</p>
                <p className="font-semibold -mt-2">{object.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-extrabold mt-24">Kontakt OZ</h2>
          {data.map((object, index) => (
            <div className="flex flex-row gap-4 items-center" key={index}>
              {" "}
              <div className="m">
                <div
                  className="circle_contact flex justify-center items-center"
                  style={{
                    backgroundColor: object.color,
                  }}
                >
                  {object.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[12px]">{object.title}</p>
                <p className="font-semibold -mt-2">{object.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h4 className="font-extrabold mt-16">Sledujte nás</h4>
        <div className="flex flex-row gap-4 mt-4">
          <Link
            href={"https://www.facebook.com/profile.php?id=100079550524517"}
            target="_blank"
            rel="noreferrer"
          >
            <IconFacebook />
          </Link>
          <Link
            href={"https://www.instagram.com/centrumvolazit"}
            target="_blank"
            rel="noreferrer"
          >
            <IconInstagram />
          </Link>

          <Link
            href={"https://www.youtube.com/watch?v=yr6Xx1BDj40"}
            target="_blank"
            rel="noreferrer"
          >
            <IconYoutube />
          </Link>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactInfo;
