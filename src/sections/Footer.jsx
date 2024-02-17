import { Social, FooterItem } from '../components';
import { footerLinks, socialMedia } from "../constants";
import { logo, Copywrite } from "../assets/icons";


const Footer = () => {
  console.log(footerLinks);
  return (
    <footer className="container pt-[70px] pb-9 w-full">
      <div className="flex md:gap-[100px] gap-12 flex-wrap justify-between md:flex-row flex-col  border-solid border-b border-b-[#3F3E45] mb-9">
        <div className="flex-1 flex flex-col max-w-[240px] w-full ">
          <a href="#">
            <img
              src={logo}
              alt="logo Education Center 5"
              width={240}
              height={50}
            />
          </a>
          <div className="ml-auto">
            <Social arr={socialMedia} />
          </div>
        </div>
        <ul className="grow flex gap-12 flex-wrap justify-between mb-9">
          {footerLinks.map((item) => (
            <FooterItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
      <div className="opacity-60 flex items-center gap-1">
        <span>Copyright</span>
        <span>
          <Copywrite />
        </span>
        <span>2024 5educenter. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer