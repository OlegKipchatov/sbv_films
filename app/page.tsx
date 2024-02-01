import Image from "next/image";
import logo from '@/public/SBV LOGO Black.png';
import Card from "@/components/Card";

import VKLogo from "@/icons/vk.svg";
import InstagramLogo from "@/icons/instagram.svg";
import WfolioLogo from "@/icons/wfolio.svg";
import YouTubeLogo from "@/icons/youtube.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-none sm:overflow-none flex-col items-center justify-start sm:justify-betwen p-12 sm:p-24 bg-white">
      <div className="flex flex-col space-y-4 sm:space-y-8">
        <div>
          <h1 className="flex justify-center mb-2 text-4xl font-bold tracking-tight text-gray-900">SBV Films</h1>
          <h2 className="flex justify-center mb-2 text-2xl tracking-tight text-gray-900">Владислав Стрибижев</h2>
          <span className="flex justify-center mb-2 text-sm tracking-tight text-gray-700">Фотограф / Видеограф</span>
        </div>

        <div>
          <a href="tel:+79622781788" className="flex justify-center space-x-4 mb-2 text-xl tracking-tight text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="24" viewBox="0 0 202.592 202.592">
              <path className="fill-black" d="M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761    c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874    c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769    c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816    c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055    c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747    C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507    c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235    C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497    c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282    c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067    c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279    C193.5,169.446,193.31,173.537,190.683,176.164z"/>
            </svg>
            <span>+7 (962) 278 17 88</span>
          </a>

          <a href="mailto:sbv@sbv-films.ru" className="flex justify-center space-x-4 mb-2 text-xl tracking-tight text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>sbv@sbv-films.ru</span>
          </a>
        </div>        

        <Card link="https://sbvfilms.wfolio.pro" title="wfolio" svg={WfolioLogo} primary></Card>

        <Card link="https://vk.com/sbv__films" title="ВКонтакте" svg={VKLogo}></Card>

        <Card link="https://www.instagram.com/sbv_films/" title="Instagram" svg={InstagramLogo}></Card>

        <Card link="https://www.youtube.com/channel/UC5SBaNTS08kxHiFuC0mDqZg" title="YouTube" svg={YouTubeLogo}></Card>
      </div>

      <footer className="flex flex-col justify-center mt-4 sm:mt-0">
        <Image src={logo} alt="SBV Logo" className="w-36 sm:w-52"></Image>
      </footer>
    </main>
  );
}
