const Navigation = () => {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <img src="./images/brand_logo.png" alt="nike-img" />
            </div>
            <ul className="nav-list">
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button classname="login-btn">login</button>
        </nav>
    );
};

export default Navigation;
