import Menu from "../Menu/Menu";

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
      <div className='wrapper'>
          {/* <Header /> */}
          <div className="flex mt-[4.7rem] md:mt-0">
              <Menu />
              <div className='content'>{children}</div>
          </div>
      </div>
  );
}

export default DefaultLayout;