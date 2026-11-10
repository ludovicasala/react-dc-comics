import Logo from "./Logo";

function AppHeader() {

    /* const stileLogo = {
        height: 45px;
        display: block;
    }; */

    const linksObjects = [
        { id: 1, text: 'CHARACTERS', url: '#' },
        { id: 2, text: 'COMICS', url: '#' },
        { id: 3, text: 'MOVIES', url: '#' },
        { id: 4, text: 'TV', url: '#' },
        { id: 5, text: 'GAMES', url: '#' },
        { id: 6, text: 'COLLECTIBLES', url: '#' },
        { id: 7, text: 'VIDEOS', url: '#' },
        { id: 8, text: 'FANS', url: '#' },
        { id: 9, text: 'NEWS', url: '#' },
        { id: 10, text: 'SHOP', url: '#' },
    ];

    const links = linksObjects.map(elemento => {
        return <li key={elemento.id}><a href="#">{elemento.text}</a></li>;
    });

    return (
        <header>
            <Logo />
            <nav>
                <ul>
                    {links}
                </ul>
            </nav>
        </header>
    )

}

export default AppHeader