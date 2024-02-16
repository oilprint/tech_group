import { Social } from '../components';
import { footerLinks } from "../constants";

const Footer = () => {
  console.log(footerLinks);
  return (
    <footer>
      <div>
        <div>
          <a href="#">
            <img src="" alt="" />
          </a>
          <Social />
        </div>
        <ul>
          {footerLinks.map((item) => ( <li key={item.id}>
              <h3>{item.title}</h3>
              <ul>
                {item.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer