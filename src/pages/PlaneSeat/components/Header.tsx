const Header = () => {
  return (
    <>
      <div className={`header-nav`}>
        <div className="logo">
          <img src="./logo.svg" alt="logo" width="auto" height="95px" />
        </div>
        <div className="menu-nav">
          <ul>
            <li>Book</li>
            <li>Check-in</li>
            <li>Flight Status</li>
            <li>Manage Booking</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
