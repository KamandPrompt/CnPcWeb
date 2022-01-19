export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            {/* <span className='sr-only'>Toggle navigation</span>{' '} */}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            cnp IIT MANDI
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li class="dropdown">
              <a href='#features' className='page-scroll dropbtn'>
                Why recruit?
              </a>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li class="dropdown">
              <a href='#features' className='page-scroll dropbtn'>
              Recruiters valley
              </a>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li class="dropdown">
              <a href='#features' className='page-scroll dropbtn'>
              Students column
              </a>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li class="dropdown">
              <a href='#features' className='page-scroll dropbtn'>
              Contact us
              </a>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 3</a>
                <a href="#">Link 3</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            {/* <li>
              <a href='#about' className='page-scroll'>
              Recruiters valley
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
              Students column
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
              Contact us
              </a>
            </li> */}
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
