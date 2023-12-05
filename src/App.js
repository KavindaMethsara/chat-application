import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";

const App = () => { 
    return (
        <ChatEngine
            height="100vh"
            projectID="a679ee4c-a7f7-45b1-a40f-43378f63394e"
            userName="Demo"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    );
}

export default App;