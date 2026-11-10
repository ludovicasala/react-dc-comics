function Informazioni() {

    const infoObjects = [
        {
            id: 1,
            title: "DIGITAL COMICS",
            thumb: "/buy-comics-digital-comics.png",
        },
        {
            id: 2,
            title: "DC MERCHANDISE",
            thumb: "/buy-comics-merchandise.png",
        },
        {
            id: 3,
            title: "SUBSCRIPTION",
            thumb: "/buy-comics-subscriptions.png",
        },
        {
            id: 4,
            title: "COMIC SHOP LOCATOR",
            thumb: "/buy-comics-shop-locator.png",
        },
        {
            id: 5,
            title: "DC POWER VISA",
            thumb: "/buy-dc-power-visa.svg",
        },
    ];

    return (
        <section className="info-banner">
            <div className="info-container">
                {infoObjects.map((elemento) => (
                    <div key={elemento.id} className="info-card">
                        <img src={elemento.thumb} alt={elemento.title} />
                        <span>{elemento.title}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Informazioni;