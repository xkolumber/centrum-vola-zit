"use client";
import Link from "next/link";
import Image from "next/image";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import { usePathname } from "next/navigation";
import IconYoutube from "../icons/IconYoutube";

const Footer = () => {
  const actual_year = new Date().getFullYear();
  const pathname = usePathname();
  return (
    <>
      <footer
        className={`gap-12 pt-16 md:p-12 md:pt-16 pb-16 2xl:pt-32 2xl:pb-32   border-t border-gray  xl:gap-72 flex justify-between   ${
          pathname.startsWith("/admin") && "!hidden"
        }`}
        id="footer_contacts"
      >
        <div className="main_section m-auto !pt-0 !pb-0 flex flex-col gap-12 md:gap-0 md:flex-row justify-between w-full  ">
          <div className="flex flex-col items-start">
            <Image
              src={"/logo.svg"}
              width={50}
              height={50}
              alt="logo"
              priority={true}
              className="w-[100px] pt-2 "
            />
          </div>
          {/* <h5 className="font-semibold">M & Z</h5> */}
          <div className="flex flex-col">
            <h5 className="uppercase mb-2 font-semibold">Kontakt</h5>
            <div className="flex flex-col ">
              <p>OZ Vôľa Žiť: Mgr. Lucia Kačmarčíková</p>
              <a href="tel:+421915653553">
                <p>Tel: +421 915 653 553</p>
              </a>
              <a href="mailto:centrum.volazit@gmail.com?subject=Otázka">
                <p>Email: centrum.volazit@gmail.com</p>{" "}
              </a>

              <div className="flex flex-row gap-4 mt-2">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100079550524517"
                  }
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
          </div>

          <div className="flex flex-col">
            <h5 className="uppercase mb-2 font-semibold">Fyzioterapia</h5>
            <p className="">Centrum Vôľa Žiť: Mgr. Alexandra Németh</p>
            <a href="tel:+421911744717">
              <p>Tel: +421 911 744 717</p>
            </a>
            <p className="">Centrum Vôľa Žiť: Bc. Peter Németh</p>
            <a href="tel:+421918457939">
              <p>Tel: +421 918 457 939</p>
            </a>
          </div>
          <div className="flex flex-col">
            <h5 className="uppercase mb-2 font-semibold">Adresa</h5>
            <div className="flex flex-col">
              <p>Dr. Alexandra 42 Kežmarok, Slovensko</p>
              <p>060 01 </p>
            </div>
          </div>
        </div>
      </footer>
      <div
        className={`flex flex-col md:flex-row justify-center items-center gap-3 md:gap-12 p-7   border-t border-gray  ${
          pathname.startsWith("/admin") && "!hidden"
        }`}
      >
        <p className="text-[12px] md:text-[14px] text-center">
          © Copyright {actual_year} Centrum vôľa žiť - všetky práva vyhradené
        </p>
      </div>
    </>
  );
};

export default Footer;
