

const Social = ({arr}) => {
  return (
    <ul className="flex flex-1 gap-2.5">
      {arr.map((item) => (
        <li key={item.id}>
          <a className='flex jc items-center w-11 h-11 p-1 text-primary hover:text-accent transition duration-300 ease-in-out' href={item.link}>{<item.icon />}</a>
        </li>
      ))}
    </ul>
  );
}

export default Social