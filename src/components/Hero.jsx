import CycleButton from "./CycleButton";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="absolute size-[500px] blur-[500px] bg-[#175CE5] top-[180px]" />
      <div className="absolute size-[500px] blur-[500px] bg-[#FA00D2] top-[130px] left-[25%]" />
      <div className="container py-16">
        <div className="flex items-center  h-[50vh] relative">
          <div className="max-w-[600px] w-full shrink-0">
            <h1 className="text-8xl mb-10 text-primary font-tektur">
              Secure
              <span className="text-secondary2 "> Your Digital </span>
              <span> World </span>
            </h1>
            <p className="text-[36px] text-accent w-[470px] leading-[48px] mb-2">
              with Cutting-Edge Cyber Security Solutions
            </p>
            <div className="w-full flex justify-end">
            
            </div>
          </div>
          <div className="w-[100%] h-[100%] relative" />
          <div className='absolute top-0 -right-28 w-[100%] h-[100%] bg-[url("./assets/hero.png")] bg-no-repeat bg-[right_center] bg-contain' />
          <div className="absolute size-[400px] blur-[340px] bg-[#175CE5] right-0" />
        </div>
      </div>
    </section>
  );
}

export default Hero