import CallToAction from "../components/CallToAction";
import StepBack from "../components/StepBack";

const page = () => {
  return (
    <div className="main_section m-auto  flex flex-col w-full min-h-screen ">
      <StepBack />
      <h2 className="font-extrabold">Zraková stimulácia</h2>
      <p className="pt-4">
        Zraková stimulácia je dôležitou súčasťou podpory detí so zrakovým
        znevýhodnením. Včasná diagnostika a odborné zásahy môžu významne
        ovplyvniť celkový vývin dieťaťa. Na Slovensku pôsobí niekoľko
        kvalifikovaných zrakových terapeutiek, ktoré poskytujú odbornú pomoc
        rodinám detí s poruchami zraku.
      </p>
      <p className="mt-4">
        Jednou z nich je <span className="font-bold">Mariana Garneková</span>,
        ktorá pôsobí v{" "}
        <span className="font-bold">
          Špecializovanom centre poradenstva a prevencie pre deti a žiakov so
          zrakovým postihnutím
        </span>{" "}
        v Levoči. Mariana poskytuje odbornú starostlivosť deťom od narodenia do
        7 rokov, pričom sa zameriava na:
      </p>
      <ul className="">
        <li>Posúdenie funkčného zraku</li>
        <li>Zrakovú stimuláciu a terapiu</li>
        <li>Úpravu prostredia pre podporu zrakového vývinu dieťaťa</li>
      </ul>
      <h5 className="font-extrabold mt-4">Čomu sa venujeme?</h5>
      <p>
        Zameriavame sa na deti so zrakovým a viacnásobným znevýhodnením, ako sú:
      </p>
      <ul>
        <li>katarakta</li>
        <li>glaukóm</li>
        <li>slabozrakosť</li>
        <li>slepota</li>
        <li>genetické ochorenia</li>
        <li>syndrómy</li>
        <li>ROP</li>
        <li>nystagmus</li>
        <li>centrálna porucha zraku</li>
        <li>amblyopia a iné</li>
      </ul>
      <h5 className="font-extrabold mt-4">Ako prebieha vyšetrenie?</h5>
      <p>Používame špeciálne testy na hodnotenie funkčného zraku, napríklad:</p>
      <ul>
        <li>Ley Hyvärinen</li>
        <li>Cardiff Acuity Test</li>
        <li>City Cardiff</li>
        <li>In Sight</li>
      </ul>
      <p>
        Sledujeme zrakovú ostrosť, kontrastnú citlivosť, koordináciu oko-ruka či
        binokulárne videnie. Na základe výsledkov poskytujeme rodičom praktické
        odporúčania, ako s dieťaťom pracovať, aké pomôcky či hračky používať, a
        ako upraviť domáce prostredie.
      </p>
      <h5 className="font-extrabold mt-4">Podpora v domácom prostredí</h5>
      <p>
        Podpora pokračuje aj mimo centra – v domácnosti. Pomáhame rodinám
        vytvoriť zrakovo priaznivé prostredie:
      </p>
      <ul className="">
        <li>upravujeme osvetlenie,</li>
        <li>odporúčame kontrastné prvky v priestore,</li>
        <li>zjednodušujeme vizuálne podnety,</li>
        <li>
          pozorujeme bežné aktivity dieťaťa (jedenie, hra, hygienické návyky ) a
          hľadáme spôsoby, ako ich spraviť dostupnejšími a jednoduchšími.
        </li>
      </ul>{" "}
      <p>
        S rodinami sa stretávame pravidelne, sledujeme pokroky dieťaťa a
        prispôsobujeme terapiu jeho aktuálnym potrebám.
      </p>
      <div className="mt-16 lg:mt-32">
        <CallToAction />
      </div>
    </div>
  );
};

export default page;
