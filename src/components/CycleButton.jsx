
import styles from '../style'

const CycleButton = () => {
  return (
    <a
      className={`${styles.flexStart} size-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer`}
      href="#"
    >
      <div
        className={`${styles.flexCenter}  p-7 bg-bg size-[100%] rounded-full `}
      >
        <p className="text-secondary text-[18px] leading-6 ">Get Started</p>
        
      </div>
    </a>
  );
}

export default CycleButton