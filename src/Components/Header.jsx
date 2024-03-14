import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
      return <>
            <div className="container my-2">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul className="nav col-12 col-lg-auto me-lg-auto m-2 justify-content-center mb-md-0">
                              <li><h5  className="text-danger px-5 my-1">eventbrite</h5></li>
                              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                    <input type="search" className="form-control" placeholder="Search for events" aria-label="Search" />
                              </form>
                              
                        </ul>
                        <ul className="nav  justify-content-center mb-md-0">
                              <li><a  className="text-secondary text-decoration-none px-3">BrowseEvents</a></li>
                              <li><a  className="text-secondary text-decoration-none px-3">Host an Event</a></li>
                              <li><a  className="text-secondary text-decoration-none px-3">Help</a></li>
                        </ul>
                        <div className="dropdown text-end px-4">
                              <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                              </a>
                              <ul className="dropdown-menu text-small">
                              </ul>
                        </div>
                  </div>
            </div>
            <hr />
      </>
}

export default Header;