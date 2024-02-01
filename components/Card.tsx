import Image from "next/image";

type Props = {
    link: string,
    title: string,
    svg: string,
    primary?: boolean
}

export default function Card (props: Props) {
    const { link, title, svg: Logo } = props;

    const imgAlt = `${title} Logo`;

    return(
        <a href={link} className="flex flex-row justify-center items-center space-x-2 p-2 bg-white hover:bg-gray-100 border border-gray-200 rounded-full shadow">
          <Image src={Logo} width={24} height={24} alt={imgAlt} />
          <span>{title}</span>
        </a>
    );
}