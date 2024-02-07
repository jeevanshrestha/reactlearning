import { Header} from "./components/Header";

import {useState} from "react";

import {CORE_CONCEPTS} from "./data.js";
import {EXAMPLES} from "./data.js";
import {CoreConcept} from "./components/CoreConcept";
import {TabButtons} from "./components/TabButtons";


function MainGoal() {
    return (<p>My main goal is: to learn React.js</p>);
}

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {

        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic.</p>;
    if(selectedTopic) {
        tabContent = <div id="tab-content">

            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
        </div>
    }

    return (<div>
        <Header/>
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>

                    {/*<CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}*/}
                    {/*             image={CORE_CONCEPTS[0].image}/>*/}

                    {CORE_CONCEPTS.map(core_concept =>(
                        <CoreConcept key={core_concept.title} {...core_concept} />
                    ))}


                </ul>
            </section>
            <section id="examples">
                <h2>
                    Examples
                </h2>
                <menu>
                    <TabButtons onSelect={() => handleSelect('components')} isSelected={selectedTopic==='components'}>Components</TabButtons>
                    <TabButtons onSelect={() => handleSelect('jsx')} isSelected={selectedTopic==='jsx'}>JSX</TabButtons>
                    <TabButtons onSelect={() => handleSelect('props')} isSelected={selectedTopic==='props'}>Props</TabButtons>
                    <TabButtons onSelect={() => handleSelect('state')} isSelected={selectedTopic==='state'}>State</TabButtons>
                </menu>
                {/*{!selectedTopic && <p>Please select a topic.</p>}*/}
{/*                {selectedTopic && <div id="tab-content">*/}

{/*                    <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
{/*                    <p>{EXAMPLES[selectedTopic].description}</p>*/}
{/*`                    <pre>*/}
{/*                        <code>{EXAMPLES[selectedTopic].code}</code>*/}
{/*                    </pre>*/}
{/*                </div>*/}
{/*                }*/}
                {tabContent}
            </section>
            <h2>Time to get started!</h2>
        </main>
        <MainGoal/>
    </div>);
}


export default App;
