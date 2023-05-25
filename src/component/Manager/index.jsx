import { Link } from "react-router-dom";
import Menu from "../Menu";
import Categories from "../Categories";

export default function Manager() {
  return (
    <div>
      <div className="flex m-4">
        <Menu />
        <div className="content">
          {/* BEGIN: Top Bar */}
          <div className="top-bar">
            {/* BEGIN: Breadcrumb */}
            <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Application</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Tên bài học
                </li>
              </ol>
            </nav>
            {/* END: Breadcrumb */}
            {/* BEGIN: Search */}
            <div className="intro-x relative mr-3 sm:mr-6">
              <div className="search hidden sm:block">
                <input
                  type="text"
                  className="search__input form-control border-transparent"
                  placeholder="Search..."
                />
                <i data-lucide="search" className="search__icon dark:text-slate-500" />
              </div>
              <a className="notification sm:hidden" href="">
                {" "}
                <i
                  data-lucide="search"
                  className="notification__icon dark:text-slate-500"
                />{" "}
              </a>
              <div className="search-result">
                <div className="search-result__content">
                  <div className="search-result__content__title">Pages</div>
                  <div className="mb-5">
                    <a href="" className="flex items-center">
                      <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">
                        {" "}
                        <i className="w-4 h-4" data-lucide="inbox" />{" "}
                      </div>
                      <div className="ml-3">Mail Settings</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full">
                        {" "}
                        <i className="w-4 h-4" data-lucide="users" />{" "}
                      </div>
                      <div className="ml-3">Users &amp; Permissions</div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full">
                        {" "}
                        <i className="w-4 h-4" data-lucide="credit-card" />{" "}
                      </div>
                      <div className="ml-3">Transactions Report</div>
                    </a>
                  </div>
                  <div className="search-result__content__title">Users</div>
                  <div className="mb-5">
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="../../Lib/images/profile-1.jpg"
                        />
                      </div>
                      <div className="ml-3">Sylvester Stallone</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        sylvesterstallone@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="../../Lib/images/profile-1.jpg"
                        />
                      </div>
                      <div className="ml-3">Tom Hanks</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        tomhanks@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="../../Lib/images/profile-8.jpg"
                        />
                      </div>
                      <div className="ml-3">Leonardo DiCaprio</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        leonardodicaprio@left4code.com
                      </div>
                    </a>
                    <a href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          className="rounded-full"
                          src="../../Lib/images/profile-7.jpg"
                        />
                      </div>
                      <div className="ml-3">Johnny Depp</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        johnnydepp@left4code.com
                      </div>
                    </a>
                  </div>
                  <div className="search-result__content__title">Products</div>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../../Lib/images/preview-14.jpg"
                      />
                    </div>
                    <div className="ml-3">Oppo Find X2 Pro</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Smartphone &amp; Tablet
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../../Lib/images/preview-15.jpg"
                      />
                    </div>
                    <div className="ml-3">Nike Tanjun</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Sport &amp; Outdoor
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../../Lib/images/preview-13.jpg"
                      />
                    </div>
                    <div className="ml-3">Nikon Z6</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Photography
                    </div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../../Lib/images/preview-9.jpg"
                      />
                    </div>
                    <div className="ml-3">Samsung Q90 QLED TV</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      Electronic
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* END: Search */}
            {/* BEGIN: Notifications */}
            <div className="intro-x dropdown mr-auto sm:mr-6">
              <div
                className="dropdown-toggle notification notification--bullet cursor-pointer"
                role="button"
                aria-expanded="false"
                data-tw-toggle="dropdown"
              >
                {" "}
                <i
                  data-lucide="bell"
                  className="notification__icon dark:text-slate-500"
                />{" "}
              </div>
              <div className="notification-content pt-2 dropdown-menu">
                <div className="notification-content__box dropdown-content">
                  <div className="notification-content__title">Notifications</div>
                  <div className="cursor-pointer relative flex items-center ">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../../Lib/images/profile-1.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a href="javascript:;" className="font-medium truncate mr-5">
                          Sylvester Stallone
                        </a>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          06:05 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature from
                        45 BC, making it over 20
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../../Lib/images/profile-1.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a href="javascript:;" className="font-medium truncate mr-5">
                          Tom Hanks
                        </a>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard dummy
                        text ever since the 1500
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../../Lib/images/profile-8.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a href="javascript:;" className="font-medium truncate mr-5">
                          Leonardo DiCaprio
                        </a>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          06:05 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem{" "}
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../../Lib/images/profile-7.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a href="javascript:;" className="font-medium truncate mr-5">
                          Johnny Depp
                        </a>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          05:09 AM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem{" "}
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-full"
                        src="../../Lib/images/profile-14.jpg"
                      />
                      <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600" />
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a href="javascript:;" className="font-medium truncate mr-5">
                          Leonardo DiCaprio
                        </a>
                        <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                          01:10 PM
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        Contrary to popular belief, Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin literature from
                        45 BC, making it over 20
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Notifications */}
            {/* BEGIN: Account Menu */}
            <div className="intro-x dropdown w-8 h-8">
              <div
                className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                role="button"
                aria-expanded="false"
                data-tw-toggle="dropdown"
              >
                <img
                  alt="Midone - HTML Admin Template"
                  src="../../Lib/images/profile-8.jpg"
                />
              </div>
              <div className="dropdown-menu w-56">
                <ul className="dropdown-content bg-primary text-white">
                  <li className="p-2">
                    <div className="font-medium">Sylvester Stallone</div>
                    <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                      Frontend Engineer
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider border-white/[0.08]" />
                  </li>
                  <li>
                    <a href="" className="dropdown-item hover:bg-white/5">
                      {" "}
                      <i data-lucide="user" className="w-4 h-4 mr-2" /> Profile{" "}
                    </a>
                  </li>
                  <li>
                    <a href="" className="dropdown-item hover:bg-white/5">
                      {" "}
                      <i data-lucide="edit" className="w-4 h-4 mr-2" /> Add Account{" "}
                    </a>
                  </li>
                  <li>
                    <a href="" className="dropdown-item hover:bg-white/5">
                      {" "}
                      <i data-lucide="lock" className="w-4 h-4 mr-2" /> Reset Password{" "}
                    </a>
                  </li>
                  <li>
                    <a href="" className="dropdown-item hover:bg-white/5">
                      {" "}
                      <i data-lucide="help-circle" className="w-4 h-4 mr-2" /> Help{" "}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider border-white/[0.08]" />
                  </li>
                  <li>
                    <a href="" className="dropdown-item hover:bg-white/5">
                      {" "}
                      <i
                        data-lucide="toggle-right"
                        className="w-4 h-4 mr-2"
                      /> Logout{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* END: Account Menu */}
          </div>
          {/* END: Top Bar */}
          <div className="grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-12 lg:col-span-3 2xl:col-span-3">
              <h2 className="intro-y text-lg font-medium mr-auto mt-2">Tên bài học</h2>
              {/* BEGIN: File Manager Menu */}
              <Categories />
              {/* END: File Manager Menu */}
            </div>
            <div className="col-span-12 lg:col-span-9 2xl:col-span-9">
              {/* BEGIN: File Manager Filter */}
              <div className="intro-y flex flex-col-reverse sm:flex-row items-center">
                <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
                  <i
                    className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-slate-500"
                    data-lucide="search"
                  />
                  <input
                    type="text"
                    className="form-control w-full sm:w-64 box px-10"
                    placeholder="Search files"
                  />
                  <div
                    className="inbox-filter dropdown absolute inset-y-0 mr-3 right-0 flex items-center"
                    data-tw-placement="bottom-start"
                  >
                    <i
                      className="dropdown-toggle w-4 h-4 cursor-pointer text-slate-500"
                      role="button"
                      aria-expanded="false"
                      data-tw-toggle="dropdown"
                      data-lucide="chevron-down"
                    />
                    <div className="inbox-filter__dropdown-menu dropdown-menu pt-2">
                      <div className="dropdown-content">
                        <div className="grid grid-cols-12 gap-4 gap-y-3 p-3">
                          <div className="col-span-6">
                            <label
                              htmlFor="input-filter-1"
                              className="form-label text-xs"
                            >
                              File Name
                            </label>
                            <input
                              id="input-filter-1"
                              type="text"
                              className="form-control flex-1"
                              placeholder="Type the file name"
                            />
                          </div>
                          <div className="col-span-6">
                            <label
                              htmlFor="input-filter-2"
                              className="form-label text-xs"
                            >
                              Shared With
                            </label>
                            <input
                              id="input-filter-2"
                              type="text"
                              className="form-control flex-1"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="col-span-6">
                            <label
                              htmlFor="input-filter-3"
                              className="form-label text-xs"
                            >
                              Created At
                            </label>
                            <input
                              id="input-filter-3"
                              type="text"
                              className="form-control flex-1"
                              placeholder="Important Meeting"
                            />
                          </div>
                          <div className="col-span-6">
                            <label
                              htmlFor="input-filter-4"
                              className="form-label text-xs"
                            >
                              Size
                            </label>
                            <select id="input-filter-4" className="form-select flex-1">
                              <option>10</option>
                              <option>25</option>
                              <option>35</option>
                              <option>50</option>
                            </select>
                          </div>
                          <div className="col-span-12 flex items-center mt-3">
                            <button className="btn btn-secondary w-32 ml-auto">
                              Create Filter
                            </button>
                            <button className="btn btn-primary w-32 ml-2">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-auto flex">
                  <button className="btn btn-primary shadow-md mr-2">
                    {" "}
                    Tải tài liệu lên
                  </button>
                  <Link to="/scan" className="btn shadow-md mr-2 "> Scan tài liệu</Link>
                </div>
              </div>
              {/* END: File Manager Filter */}
              {/* BEGIN: Directory & Files */}
              <div className="intro-y grid grid-cols-12 gap-3 sm:gap-6 mt-5">
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--file mx-auto">
                      <div className="file__icon__file-name">TXT</div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Resources.txt
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      2.2 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--image mx-auto">
                      <div className="file__icon--image__preview image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          src="../../Lib/images/preview-7.jpg"
                        />
                      </div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      preview-7.jpg
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      1.4 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                    />{" "}
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Documentation
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      4 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                    />{" "}
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Documentation
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      4 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--image mx-auto">
                      <div className="file__icon--image__preview image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          src="../../Lib/images/preview-11.jpg"
                        />
                      </div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      preview-11.jpg
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      1.4 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--file mx-auto">
                      <div className="file__icon__file-name">PHP</div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Routes.php
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      1 KB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--directory mx-auto"
                    />{" "}
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Repository
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      20 KB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--file mx-auto">
                      <div className="file__icon__file-name">PHP</div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Routes.php
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      1 KB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--file mx-auto">
                      <div className="file__icon__file-name">MP4</div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Celine Dion - Ashes.mp4
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      20 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--file mx-auto">
                      <div className="file__icon__file-name">MP4</div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Celine Dion - Ashes.mp4
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      20 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--directory mx-auto"
                    />{" "}
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Repository
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      20 KB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                    />{" "}
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Laravel 7
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      120 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--directory mx-auto"
                    />{" "}
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Repository
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      20 KB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--directory mx-auto"
                    />{" "}
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Repository
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      20 KB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                    />{" "}
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Documentation
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      4 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--image mx-auto">
                      <div className="file__icon--image__preview image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          src="../../Lib/images/preview-15.jpg"
                        />
                      </div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      preview-15.jpg
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      1 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--file mx-auto">
                      <div className="file__icon__file-name">MP4</div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Celine Dion - Ashes.mp4
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      20 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                    />{" "}
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Documentation
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      4 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--image mx-auto">
                      <div className="file__icon--image__preview image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          src="../../Lib/images/preview-11.jpg"
                        />
                      </div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      preview-11.jpg
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      1.4 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--file mx-auto">
                      <div className="file__icon__file-name">TXT</div>
                    </a>
                    <a href="" className="block font-medium mt-4 text-center truncate">
                      Resources.txt
                    </a>
                    <div className="text-slate-500 text-xs text-center mt-0.5">
                      2.2 MB
                    </div>
                    <div className="absolute top-0 right-0 mr-2 mt-3 dropdown ml-auto">
                      <a
                        className="dropdown-toggle w-5 h-5 block"
                        href="javascript:;"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                      >
                        {" "}
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />{" "}
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File{" "}
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              {" "}
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Directory & Files */}
              {/* BEGIN: Pagination */}
              <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-6">
                <nav className="w-full sm:w-auto sm:mr-auto">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        {" "}
                        <i className="w-4 h-4" data-lucide="chevrons-left" />{" "}
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        {" "}
                        <i className="w-4 h-4" data-lucide="chevron-left" />{" "}
                      </a>
                    </li>
                    <li className="page-item">
                      {" "}
                      <a className="page-link" href="#">
                        ...
                      </a>{" "}
                    </li>
                    <li className="page-item">
                      {" "}
                      <a className="page-link" href="#">
                        1
                      </a>{" "}
                    </li>
                    <li className="page-item active">
                      {" "}
                      <a className="page-link" href="#">
                        2
                      </a>{" "}
                    </li>
                    <li className="page-item">
                      {" "}
                      <a className="page-link" href="#">
                        3
                      </a>{" "}
                    </li>
                    <li className="page-item">
                      {" "}
                      <a className="page-link" href="#">
                        ...
                      </a>{" "}
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        {" "}
                        <i className="w-4 h-4" data-lucide="chevron-right" />{" "}
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        {" "}
                        <i className="w-4 h-4" data-lucide="chevrons-right" />{" "}
                      </a>
                    </li>
                  </ul>
                </nav>
                <select className="w-20 form-select box mt-3 sm:mt-0">
                  <option>10</option>
                  <option>25</option>
                  <option>35</option>
                  <option>50</option>
                </select>
              </div>
              {/* END: Pagination */}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
