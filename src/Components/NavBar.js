import './NavBar.css';

export function NavBar() {
return (
<nav className = "nav-bar">
    <h1 className = "logo">
        <span className="logo-text1">S<span className="logo-text2">imon</span></span>
        <span className="logo-text1">P<span className="logo-text2">artridge</span></span>
    </h1>
    <ul className = "nav-ul">
        <a href="skills.asp" className="nav-link">Skills</a>
        <a href="projects.asp" className="nav-link">Projects</a>
        <a href="about.asp" className="nav-link">About</a>
        <a href="contact.asp" className="nav-link">Contact</a>
    </ul>
</nav>
);
}