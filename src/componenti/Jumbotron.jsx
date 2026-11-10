function Jumbotron() {
    const jumbotronStyle = {
        width: "100%",
        height: "400px",
        overflow: "hidden",
        margin: 0
    };

    const imgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "top"
    };

    return (
        <div style={jumbotronStyle}>
            <img src="/jumbotron.jpg" alt="Jumbotron" style={imgStyle} />
        </div>
    );
}

export default Jumbotron;