import { Link } from "react-router-dom";


export default function Mg_content() {
  return (
   <>
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
                    
                    Tải tài liệu lên
                  </button>
                  <Link to="/scan" className="btn shadow-md mr-2 "> Scan tài liệu</Link>
                </div>
              </div>
          
              <div className="intro-y grid grid-cols-12 gap-3 sm:gap-6 mt-5">
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--image mx-auto">
                      <div className="file__icon--image__preview image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          src="https://w7.pngwing.com/pngs/521/255/png-transparent-computer-icons-data-file-document-file-format-others-thumbnail.png"
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                    />
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                    />
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--image mx-auto">
                      <div className="file__icon--image__preview image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          src="https://w7.pngwing.com/pngs/521/255/png-transparent-computer-icons-data-file-document-file-format-others-thumbnail.png"
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--directory mx-auto"
                    />
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--directory mx-auto"
                    />
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                    />
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--directory mx-auto"
                    />
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--directory mx-auto"
                    />
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md  pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                    />
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--image mx-auto">
                      <div className="file__icon--image__preview image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          src="https://w7.pngwing.com/pngs/521/255/png-transparent-computer-icons-data-file-document-file-format-others-thumbnail.png"
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a
                      href=""
                      className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                    />
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
                    <a href="" className="w-3/5 file__icon file__icon--image mx-auto">
                      <div className="file__icon--image__preview image-fit">
                        <img
                          alt="Midone - HTML Admin Template"
                          src="https://w7.pngwing.com/pngs/521/255/png-transparent-computer-icons-data-file-document-file-format-others-thumbnail.png"
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                  <div className="file box rounded-md px-5 pt-8 pb-5  sm:px-5 relative zoom-in">
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
                        
                        <i
                          data-lucide="more-vertical"
                          className="w-5 h-5 text-slate-500"
                        />
                      </a>
                      <div className="dropdown-menu w-40">
                        <ul className="dropdown-content">
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i data-lucide="users" className="w-4 h-4 mr-2" /> Share
                              File
                            </a>
                          </li>
                          <li>
                            <a href="" className="dropdown-item">
                              
                              <i
                                data-lucide="trash"
                                className="w-4 h-4 mr-2"
                              /> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
              <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-6">
                <nav className="w-full sm:w-auto sm:mr-auto">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        
                        <i className="w-4 h-4" data-lucide="chevrons-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        
                        <i className="w-4 h-4" data-lucide="chevron-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        
                        <i className="w-4 h-4" data-lucide="chevron-right" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        
                        <i className="w-4 h-4" data-lucide="chevrons-right" />
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
   </>
  )
}
