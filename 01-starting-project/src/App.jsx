import { Header} from "./components/Header";

import {useState} from "react";

import {CORE_CONCEPTS} from "./data.js";
import {CoreConcept} from "./components/CoreConcept";
import {TabButtons} from "./components/TabButtons";


function MainGoal() {
    return (<p>My main goal is: to learn React.js</p>);
}

function App() {
    const [selectedTopic, setSelectedTopic]=useState('Please click a button to learn React.js');

    function handleSelect(selectedButton){

        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    return (<div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>

                        <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}
                                     image={CORE_CONCEPTS[0].image}/>
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />

                    </ul>
                </section>
                <section id="examples"  >
                    <h2>
                        Examples
                    </h2>
                    <menu>
                       <TabButtons onSelect={() => handleSelect('components')}  >Components</TabButtons>
                       <TabButtons onSelect={() => handleSelect('jsx')} >JSX</TabButtons>
                       <TabButtons onSelect={() => handleSelect('props')} >Props</TabButtons>
                       <TabButtons onSelect={() => handleSelect('state')} >State</TabButtons>
                    </menu>
                    <div id="tab-content">{selectedTopic}</div>
                </section>
                <h2>Time to get started!</h2>
            </main>
            <MainGoal/>
        </div>);
}


export default App;
