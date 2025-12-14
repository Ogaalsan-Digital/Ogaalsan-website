import Link from "next/link";
import MobileMenu from "../MobileMenu";
import SearchPopup from "../SearchPopup";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  isOffcanvus,
  handleOffcanvus,
}) {
  return (
    <>
      <header
        id="sticky-header"
        className={`transparent-header header-style-two ${
          scroll ? "sticky-menu" : ""
        }`}
      >
        <div className="container custom-container">
          <div className="heder-top-wrap">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location" />
                      Mogadishu, Somalia
                    </li>
                    <li>
                      <i className="flaticon-mail" />
                      <Link href="mailto:consultancyogaalsan@gmail.com">
                        consultancyogaalsan@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="header-top-right">
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-area">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo-ogalsan.png"
                          alt="OgaalSan Consultancy Logo"
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="active">
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/services">Services</Link>
                        </li>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action">
                      <ul className="list-wrap">
                        <li className="header-contact-two">
                          <div className="icon">
                            <i className="flaticon-phone-call" />
                          </div>
                          <div className="content">
                            <span>Hot Line Number</span>
                            <span>
                              <Link href="tel:770904044">770904044</Link>
                              <Link href="tel:770904045">770904045</Link>
                            </span>
                          </div>
                        </li>
                        <li className="header-search" onClick={handleSearch}>
                          <Link href="#">
                            <i className="flaticon-search" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo-ogalsan.png"
                          alt="OgaalSan Consultancy Logo"
                        />
                      </Link>
                    </div>
                    <div className="mobile-search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="flaticon-search" />
                        </button>
                      </form>
                    </div>
                    <div className="menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" onClick={handleMobileMenu} />
              </div>
            </div>
          </div>
        </div>
        <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
      </header>
    </>
  );
}
