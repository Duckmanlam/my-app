export default function Menu() {
  return (
    <div>
      <div className="mobile-menu md:hidden">
          <div className="scrollable" data-simplebar="init">
            <div className="simplebar-wrapper" style={{ margin: 0 }}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div
                  className="simplebar-offset"
                  style={{ right: 0, bottom: 0 }}
                >
                  <div
                    className="simplebar-content-wrapper"
                    tabIndex={0}
                    role="region"
                    aria-label="scrollable content"
                    style={{ height: "100%", overflow: "hidden" }}
                  >
                    <div className="simplebar-content" style={{ padding: 0 }}>
                      <ul className="scrollable__content py-2">
                        <li>
                          <a href="#" className="menu menu--active">
                            <div className="menu__icon">
                              {" "}
                              <img
                                src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d404589b0aaf22114e189_Screenshot%202023-03-23%20at%205.46.20%20PM.png"
                                alt=""
                                className="w-6"
                              />
                            </div>
                            <div className="menu__title"> Dashboard </div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="menu">
                            <div className="menu__icon">
                              {" "}
                              <img
                                src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d404589b0aaf22114e189_Screenshot%202023-03-23%20at%205.46.20%20PM.png"
                                alt=""
                                className="w-6"
                              />
                            </div>
                            <div className="menu__title"> E-Commerce </div>
                          </a>
                        </li>
                        <li>
                          <a href="side-menu-light-inbox.html" className="menu">
                            <div className="menu__icon">
                              <img
                                src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d404589b0aaf22114e189_Screenshot%202023-03-23%20at%205.46.20%20PM.png"
                                alt=""
                                className="w-6"
                              />
                            </div>
                            <div className="menu__title"> Inbox </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="side-menu-light-file-manager.html"
                            className="menu"
                          >
                            <div className="menu__icon">
                              {" "}
                              <img
                                src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d404589b0aaf22114e189_Screenshot%202023-03-23%20at%205.46.20%20PM.png"
                                alt=""
                                className="w-6"
                              />
                            </div>
                            <div className="menu__title"> File Manager </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="side-menu-light-point-of-sale.html"
                            className="menu"
                          >
                            <div className="menu__icon">
                              {" "}
                              <img
                                src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d404589b0aaf22114e189_Screenshot%202023-03-23%20at%205.46.20%20PM.png"
                                alt=""
                                className="w-6"
                              />{" "}
                            </div>
                            <div className="menu__title"> Point of Sale </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="simplebar-placeholder"
                style={{ width: "auto", height: 266 }}
              />
            </div>
          </div>
        </div>
        <nav className="side-nav">
            <a href="" className="intro-x flex items-center pl-5 pt-4">
              <img
                alt="Midone - HTML Admin Template"
                className="w-6"
                src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d404589b0aaf22114e189_Screenshot%202023-03-23%20at%205.46.20%20PM.png"
              />
              <span className="hidden xl:block text-white text-lg ml-3">
                {" "}
                Rubick{" "}
              </span>
            </a>
            <div className="side-nav__devider my-6" />
            <ul>
              <li>
                <a href="#.html" className="side-menu side-menu--active">
                  <div className="side-menu__icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="home"
                      className="lucide lucide-home"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>{" "}
                  </div>
                  <div className="side-menu__title">Trang chủ</div>
                </a>
                <ul className="side-menu__sub-open"></ul>
              </li>
              <li>
                <a href="#" className="side-menu side-menu--open">
                  <div className="side-menu__icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="box"
                      className="lucide lucide-box"
                    >
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1={12} y1="22.08" x2={12} y2={12} />
                    </svg>{" "}
                  </div>
                  <div className="side-menu__title">Tài liệu của tôi</div>
                </a>
              </li>
              <li>
                <a href="#" className="side-menu side-menu--open">
                  <div className="side-menu__icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="shopping-bag"
                      className="lucide lucide-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>{" "}
                  </div>
                  <div className="side-menu__title">Lịch sử bài tập</div>
                </a>
              </li>
              <li>
                <a href="side-menu-light-inbox.html" className="side-menu">
                  <div className="side-menu__icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="inbox"
                      className="lucide lucide-inbox"
                    >
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                      <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"></path>
                    </svg>{" "}
                  </div>
                  <div className="side-menu__title">Hỏi đáp</div>
                </a>
              </li>
              <li>
                <a
                  href="side-menu-light-file-manager.html"
                  className="side-menu"
                >
                  <div className="side-menu__icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="hard-drive"
                      className="lucide lucide-hard-drive"
                    >
                      <line x1={22} y1={12} x2={2} y2={12} />
                      <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"></path>
                      <line x1={6} y1={16} x2="6.01" y2={16} />
                      <line x1={10} y1={16} x2="10.01" y2={16} />
                    </svg>{" "}
                  </div>
                  <div className="side-menu__title"> File Manager </div>
                </a>
              </li>
              <li>
                <a href="side-menu-light-chat.html" className="side-menu">
                  <div className="side-menu__icon">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="message-square"
                      className="lucide lucide-message-square"
                    >
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>{" "}
                  </div>
                  <div className="side-menu__title">Hỗ trợ</div>
                </a>
              </li>
              <li></li>
            </ul>
          </nav>
    </div>
  );
}
