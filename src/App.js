import { ChatEngine } from 'react-chat-engine';
import LoginForm from './Components/LoginForm';
import ChatFeed from './Components/ChatFeed';
import './App.css';

const App = () =>
{

    if(!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine
           height="100vh"
           projectID="
           f42fca9b-c75b-4329-92d6-71fdecd5e216"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/>}
        />
    )
}

export default App;