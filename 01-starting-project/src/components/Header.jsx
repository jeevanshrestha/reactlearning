
const reactDescription = ['Fundamental', 'Crucial', 'Core'];
import reactImg from '../assets/react-core-concepts.png';
import './header.css'
export function Header() {
    const description = reactDescription[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

function genRandomInt(max) {
    return Math.floor((max + 1) * Math.random());
}
