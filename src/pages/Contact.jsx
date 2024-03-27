import { contactPhoto } from '../assets/images';
import { Social } from '../components';
import { socialMedia } from '../constants';

const Contact = () => {
  return (
    <section className="container pt-[100px] pb-12">
      <h1 className="max-w-[970px] w-full mx-auto font-tektur md:text-[56px] text-5xl block md:mb-10 mb-6 text-center leading-[1.3]">
        Our Contacts
      </h1>
      <div className="flex flex-1 gap-[30px] ss:flex-row flex-col mb-12">
        <img
          className="object-cover ss:w-1/2 w-full rounded-[20px]"
          src={contactPhoto}
          alt="Education center"
          width={570}
          height={380}
        />
        <div className="max-w-[570px] w-full rounded-[20px] p-5 pl-10 bg-gray-gradient flex flex-col gap-5">
          <div className="text-2xl">
            Address:
            <a className="block text-xl" href="https://maps.app.goo.gl/Lad3e3A3KbBLTUi67">
              5 Zabolotnoho Street, Odessa, 65123, Ukraine
            </a>
          </div>
          <div className="text-2xl">
            Phone:
            <a className="block text-xl" href="tel:+3806684411444">
              +38 066 84411444
            </a>
          </div>
          <div className="text-2xl">
            Business Hours:
            <div className="block text-xl">
              Monday - Friday: 9:00 AM - 6:00 PM <br />
              Saturday - Sunday: Closed
            </div>
          </div>
          <Social arr={socialMedia} />
        </div>
      </div>
      <p className="block max-w-[800px] text-center mx-auto text-xl p-5 pl-10 bg-gray-gradient rounded-[20px]">
        Feel free to get in touch with us for any inquiries or suggestions. We will try our best to
        respond to you as soon as possible!
      </p>
    </section>
  );
};

export default Contact;
