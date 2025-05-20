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
        className={`gap-12 pt-16 md:p-12 md:pt-16 md:pb-16 2xl:pt-32 2xl:pb-32   border-t border-gray  xl:gap-72 flex justify-between   ${
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
              <p>Zodp.osoba: Lucia Kačmarčíková</p>
              <a href="tel:+421911565363">
                <p>Tel: +4219186554146</p>
              </a>
              <a href="mailto:info@fstavenergy.sk?subject=Otázka">
                <p>Email: centrumvolazit@gmail.com</p>{" "}
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
                  href={"https://www.youtube.com"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconYoutube />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="uppercase mb-2 font-semibold">Fakturačné údaje</h5>
            <div className="flex flex-col">
              <p>IČO: 46205284</p>
              <p>DIČ: 2023283680</p>
              <p>IČ DPH:SK2023283680</p>
            </div>
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
        <Link className="text-[10px] md:text-[12px] underline" href={"/"}>
          VOP + GDPR{" "}
        </Link>
      </div>
    </>
  );
};

export default Footer;
