import Image from "next/image";
import logo from '@/public/sbv-logo.png';
import Card from "@/components/Card";

import VKLogo from "@/icons/vk.svg";
import YouTubeLogo from "@/icons/youtube.svg";
import TwitchLogo from "@/icons/twitch.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-none sm:overflow-none flex-col items-center justify-start sm:justify-betwen p-12 sm:p-24 bg-white">
      <div className="flex flex-col space-y-4 sm:space-y-6">
        <div>
          <h1 className="flex justify-center mb-2 text-4xl font-bold tracking-tight text-gray-900">SBV FILMS | VLAD SBV</h1>
          <h2 className="flex justify-center mb-2 text-2xl tracking-tight text-gray-900">Владислав Стрибижев</h2>
          <span className="flex justify-center mb-2 text-sm tracking-tight text-gray-700">Видеосъёмка | Видеомонтаж | Фотосъёмка | Блог о кино и играх</span>
        </div>

        <div>     
          <a href="https://t.me/sbv_films" className="flex justify-center space-x-4 mb-2 text-xl tracking-tight text-gray-900">
            <svg height="28" width="24" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#000000" strokeWidth={12} d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z" />
            </svg>

            <span>@sbv_films</span>
          </a>

          <a href="mailto:sbv@sbv-films.ru" className="flex justify-center space-x-4 mb-2 text-xl tracking-tight text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="24" viewBox="0 0 24 24" fill="none">
              <path d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>sbv@sbv-films.ru</span>
          </a>
        </div>

        <Card link="./cv.pdf" title="РЕЗЮМЕ | ПОРТФОЛИО"></Card>

        <Card link="https://vk.com/sbv__films" title="ВКонтакте | SBV FILMS" svg={VKLogo}></Card>

        <Card link="https://www.youtube.com/channel/UC5SBaNTS08kxHiFuC0mDqZg" title="YouTube | SBV FILMS" svg={YouTubeLogo}></Card>

        <Card link="https://vk.com/sbv_films" title="ВКонтакте | VLAD SBV" svg={VKLogo}></Card>

        <Card link="https://www.youtube.com/@vlad_sbv" title="YouTube | VLAD SBV" svg={YouTubeLogo}></Card>

        <Card link="https://www.twitch.tv/vladsbv" title="Twitch | VLAD SBV" svg={TwitchLogo}></Card>
      </div>

      <footer className="flex gap-4 justify-center items-center mt-4 sm:mt-0">
        <Image src={logo} alt="SBV FILMS" className="w-36 sm:w-52"></Image>
      </footer>
    </main>
  );
}
