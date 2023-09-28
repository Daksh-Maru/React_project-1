const HeroSection = () => {
    return (
        <header className="hero-container">
            <div className="hero-left">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU
                        WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE
                        TO HELP YOU WITH OUR SHOES.
                    </p>

                    <div className="hero-buttons">
                        <button className="hero-shopnow">Shop Now</button>
                        <button className="hero-category">Category</button>
                    </div>

                    <span className="hero-span">Also Available On</span>
                    <div className="hero-shopicons">
                        <img src="./images/flipkart.png" alt="flipkart-img" />
                        <img src="./images/amazon.png" alt="amazon-img" />
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src="./images/shoe_image.png" alt="shoe_img" />
            </div>
        </header>
    );
};

export default HeroSection;
