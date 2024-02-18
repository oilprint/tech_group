import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Button, Modal } from "../components";


const ContactUs = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="container md:py-[70px] py-10" id="contactUs">
      <div className="md:px-[90px] px-8 py-10 flex-1 flex justify-between sm:flex-row flex-col items-start gap-8 rounded-[20px] bg-gray-gradient">
        <div className="flex flex-col md:max-w-[670px] w-full">
          <h2 className="md:text-[42px] text-3xl text-accent uppercase leading-[1.3] mb-6 ">
            Do you have any questions?
          </h2>
          <p>
            We're here to help! Contact us for more information or consultation.
            <br />
            Do not hesitate to reach out to us - our friendly team is always
            ready to assist you in any way we can.
          </p>
        </div>
        <Button onClick={() => setOpenModal(true)} label="Contact Us" />
        <CSSTransition
          in={openModal}
          timeout={300}
          classNames="modalOpen" unmountOnExit
        >
          <Modal onClick={() => setOpenModal(false)} />
        </CSSTransition>
      </div>
    </section>
  );
}

export default ContactUs