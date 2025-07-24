function NavBar() {
  return (
    <nav className='fixed max-w-[893px] w-[90%] left-1/2 -translate-x-1/2 top-[25px] z-50 flex justify-between items-center rounded-b-full backdrop-blur-lg  bg-[linear-gradient(rgba(117,117,117,0.4)_0%,rgba(51,51,51,0.45)_100%)]'>
      <div className='logo'>
        <img src='./img/icons/logo2.svg' alt='logo' />
      </div>
      <ul className='nav-links'>
        <li className='nav-link'>
          <a href='#'>
            <img src='./img/icons/quicksilver.png' alt='link' />
            QuickSilver
          </a>
        </li>
        <li className='nav-link'>
          <a href='#'>Build</a>
        </li>
        <li className='nav-link'>
          <a href='#'>Participate</a>
        </li>
        <li className='nav-link'>
          <a href='#'>Discover</a>
        </li>
        <li className='nav-link'>
          <a href='#'>About</a>
        </li>
      </ul>

      <div className='social-links'>
        <a href='#'>
          <img src='x.svg' alt='' />{" "}
        </a>
        <a href='#' className='btn subscribe'>
          Subscribe
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
