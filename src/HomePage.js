import { Link } from 'react-router-dom';

import App from './App';

import FriendListphoto from './image/FriendListphoto.png'
import chatroomphoto from './image/chatroomphoto.png'
import profilephoto from './image/profilephoto.png'
import addfriendphoto from './image/addfriend.png'

function HomePage() {
    return (
        <App>
        <div>

            <Link to="/friend-list">
                <img src={FriendListphoto} width="400" />
            </Link>

            <Link to="/">
                <img src={chatroomphoto} width="400" />
            </Link>

            <Link to="/profile">
                <img src={profilephoto} width="400" />
            </Link>

            <Link to="/add-friend">
                <img src={addfriendphoto} width="400" />
            </Link>
            
        </div>
        </App>
    )
};

export default HomePage;