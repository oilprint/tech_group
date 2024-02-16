import { Button } from "../components";


const ContactUs = () => {
  return (
    <section className="container py-[70px]" id="contactUs">
      <div className="px-[90px] py-10 flex-1 flex justify-between items-center gap-5 rounded-[20px] bg-gray-gradient">
        <div className="w-[670px]">
          <h2 className="text-[42px] text-accent uppercase leading-[1] mb-6 ">
            Do you have any questions?
          </h2>
          <p>
            We're here to help! Contact us for more information or consultation.
            <br />
            Do not hesitate to reach out to us - our friendly team is always
            ready to assist you in any way we can.
          </p>
        </div>
        <Button label="Contact Us" />
      </div>
    </section>
  );
}

export default ContactUs