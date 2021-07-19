import { useStateContext } from "../../AnimeProvider";

const SideNav = (props) => {
  const globalState = useStateContext();
  return (
    <div
      className={`side-nav ${
        globalState.sideNavOpen ? "side-nav--active" : ""
      }`}
    >
      <div
        className="side-nav__close-btn"
        onClick={() => globalState.setSideNavOpenAction(false)}
      >
        <i className="fas fa-times" />
      </div>
      <ul className="side-nav__main">
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>

        <li>
          <a href="/">Series</a>
        </li>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/">Watch List</a>
        </li>
        <li>
          <a href="/">Just Added</a>
        </li>
        <li>
          <a href="/">Last Chance</a>
        </li>
      </ul>
      <div className="side-nav__divider" />
      <ul className="side-nav__main">
        <li>
          <a href="/">Shonen </a>
        </li>
        <li>
          <a href="/">Seinen </a>
        </li>
        <li>
          <a href="/">Isekai </a>
        </li>
        <li>
          <a href="/">Comedy </a>
        </li>
        <li>
          <a href="/">Crime </a>
        </li>
        <li>
          <a href="/">Drama </a>
        </li>
        <li>
          <a href="/">Sci-fi </a>
        </li>
        <li>
          <a href="/">Horror </a>
        </li>
        <li>
          <a href="/">Sports </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
