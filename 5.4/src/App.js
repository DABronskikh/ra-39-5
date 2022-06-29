import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import TagList from "./components/TagList";
import SocialList from "./components/SocialList";

function App() {
    return (
        <div className="container">

            <Sidebar id="sidebar">
                <Widget title={'Теги'}>
                    <TagList items={['JavaScript', 'Node.JS', 'new']}/>
                </Widget>
                <Widget title={'Социальные сети'}>
                    <SocialList items={[
                        'VK',
                        'Email',
                        <TagList items={['JavaScript', 'Node.JS', 'new']}/>,
                        'Github',
                        'new',
                        '654',
                    ]}/>
                </Widget>
            </Sidebar>

        </div>
    );
}

export default App;
