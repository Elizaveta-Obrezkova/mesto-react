import logo from '../Images/Logo_Mesto.svg';

function Header() {
    return (
        <header className="header page__header">
            <img src={logo} className="logo" alt="Логотип проекта Место" />
        </header>
    );
}

export default Header;
