import Button from "./Button";


const Hero = () => {
  return (
    <section id="home" className="pb-16  bg-hero bg-contain bg-center ">
      {/* <div className="absolute size-[500px] blur-[500px] bg-[#175CE5] top-[180px]" /> */}
      {/* <div className="absolute size-[300px] blur-[300px] bg-[#6c00fa] top-[50px] left-[25%] z-[1]" /> */}
      <div className="container">
        <div className="flex items-center py-10 bg-[url('./assets/hero.png')] bg-no-repeat bg-[right_center] bg-contain h-[70vh] ">
          <div className="max-w-[600px] w-full shrink-0">
            <h1 className="text-8xl mb-10 text-primary font-tektur">
              Secure
              <span className="text-secondary2 "> Your Digital </span>
              <span> World </span>
            </h1>
            <p className="text-[36px] text-primary w-[470px] leading-[48px] mb-10">
              with Cutting-Edge Cyber Security Solutions
            </p>
            <Button  />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero