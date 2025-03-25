import './Header.css'

const Header = () => {
    return (
        <header className="container-header">
            <nav className="container-child_header">
                <a href="/">Quarto</a>
                <a href="/">Sala</a>
                <a href="/"> Cozinha</a>
            </nav>
        </header>
    );
}

export default Header;