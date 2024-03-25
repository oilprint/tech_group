import { CloseBtn } from '../assets/icons';
import { messengers } from '../constants';

const Modal = ({ onClick }) => {
  return (
    <div className="backdrop fixed left-0 top-0 z-[999] w-screen h-screen flex justify-center items-center bg-bgOverlay backdrop-blur-[1px]">
      <div className="relative py-[60px] px-6 bg-dark-gradient   mx-4 max-w-[400px] w-full rounded-[20px]">
        <div>
          <h2 className="text-accent text-3xl mb-2">Get in touch</h2>
          <p className="mb-[30px]">Choose a convenient recording method for you</p>
          <ul className="flex flex-col gap-5 ">
            {messengers.map((item) => (
              <li className="py-2.5 px-5 bg-primary rounded-[10px]" key={item.id}>
                <a
                  className="flex items-center gap-4 text-5 font-bold"
                  href={item.href}
                  style={{ color: `${item.textColor}` }}
                  target="_blank"
                  rel="noopener noreferrer">
                  {<item.icon width={40} height={40} />}

                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={onClick}
          className="absolute top-6 right-8  flex justify-center items-center rounded-full border-primary border-[1px] hover:text-accent
          hover:border-accent focus:text-accent  active:bg-gray-700 w-11 h-11 transition duration-300 easy-in-out"
          type="button">
          <CloseBtn />
        </button>
      </div>
    </div>
  );
};

export default Modal;
