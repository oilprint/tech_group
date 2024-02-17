
const FooterItem = ({title, id, links }) => {
  return (
    <li key={id}>
      <h3 className="text-2xl mb-4">{title}</h3>
      <ul className='flex flex-col gap-4'>
        {links.map((link) => (
          <li key={link.id}>
            <a className="text-base hover:text-accent active:text-secondary focus:outline-1 focus:outline-offset-4 focus:outline-accent" href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
          

export default FooterItem