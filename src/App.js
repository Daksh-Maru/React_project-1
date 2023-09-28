// import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/hero";
import Navigation from "./components/nav";
function App() {
    return (
        <div className="App">
            <Navigation />
            <HeroSection/>
        </div>
    );
}

export default App;
