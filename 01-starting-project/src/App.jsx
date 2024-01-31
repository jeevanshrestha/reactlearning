
const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
    return Math.floor((max + 1) * Math.random());
}
 function MainGoal()
{
    return(
        <p>My main goai is: to learn React.js</p>
    );
}
function Header() {
    const description = reactDescription[genRandomInt(2)];

    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}
function App() {
  return (
    <div>
    <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
        <MainGoal />
    </div>
  );
}

export default App;
