import IconFacebook from "@/app/icons/IconFacebook";
import IconInstagram from "@/app/icons/IconInstagram";
import IconYoutube from "@/app/icons/IconYoutube";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const data = [
  {
    title: "Pripravený pomôcť",
    desc: "Lucia Kačmarčíková",
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
    desc: "+421 999 999 999",
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
    title: "Navšívte nás na",
    desc: "Dr. Alexandra 42 060 01 Kežmarok, Slovensko",
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
    <div className="">
      <div className="flex flex-col gap-6">
        {data.map((object, index) => (
          <div className="flex flex-row gap-4 items-center" key={index}>
            {" "}
            <div
              className="circle_contact flex justify-center items-center"
              style={{
                backgroundColor: object.color,
              }}
            >
              {object.icon}
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
        <IconInstagram />
        <IconFacebook />
        <IconYoutube />
      </div>
    </div>
  );
};

export default ContactInfo;
