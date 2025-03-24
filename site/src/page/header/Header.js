import './Header.css'

const Header = () => {
    return (
        <header className="container-header">
            <nav className="container-child_header">
                <a href="/">Home</a>
                <a href="/">Contact</a>
                <a href="/">About Us</a>
            </nav>
        </header>
    );
}

export default Header;