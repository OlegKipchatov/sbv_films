import Image from "next/image";
import logo from '@/public/SBV LOGO Black.png';
import Card from "@/components/Card";

import VKLogo from "@/icons/vk.svg";
import InstagramLogo from "@/icons/instagram.svg";
import WfolioLogo from "@/icons/wfolio.svg";
import YouTubeLogo from "@/icons/youtube.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex flex-col space-y-8">
        <div className="">
          <h1 className="flex justify-center mb-2 text-4xl font-bold tracking-tight text-gray-900">SBV Films</h1>
          <h2 className="flex justify-center mb-2 text-2xl tracking-tight text-gray-900">Владислав Стрибижев</h2>
          <span className="flex justify-center mb-2 text-sm tracking-tight text-gray-700">Фотограф / Видеограф</span>
        </div>

        <div className="">
          <a href="tel:+79622781788" className="flex justify-center mb-2 text-xl tracking-tight text-gray-900">+7 (962) 278 17 88</a>
          <a href="mailto:sbv@sbv-films.ru" className="flex justify-center mb-2 text-xl tracking-tight text-gray-700">sbv@sbv-films.ru</a>
        </div>

        <Card link="https://sbvfilms.wfolio.pro" title="wfolio" svg={WfolioLogo} primary></Card>

        <Card link="https://vk.com/sbv__films" title="ВКонтакте" svg={VKLogo}></Card>

        <Card link="https://www.instagram.com/sbv_films/" title="Instagram" svg={InstagramLogo}></Card>

        <Card link="https://www.youtube.com/channel/UC5SBaNTS08kxHiFuC0mDqZg" title="YouTube" svg={YouTubeLogo}></Card>
      </div>

      <footer className="flex flex-col justify-center">
        <Image src={logo} width={200} alt="SBV Logo"></Image>
      </footer>
    </main>
  );
}
