import ReactLogo from "../images/logo512.png";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img src={ReactLogo} alt="Logo Situs Web" className="nav-icon" />
      <h3 className="nav-logo_text">React Facts</h3>

      <div className="toggler">
        <p className="toggler-light">Light</p>
        <div>
          <input type="checkbox" class="checkbox" id="checkbox" />
          <label for="checkbox" class="checkbox-label" onClick={props.toggleDarkMode}>
            <span class="ball"></span>
          </label>
        </div>
        <p className="toggler-dark">Dark</p>
      </div>
    </nav>
  );
}
