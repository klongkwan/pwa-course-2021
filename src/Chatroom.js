import { Link } from 'react-router-dom';
import back from './image/back.png';

function Chatroom() {
return(

    <div>
        Chatroom
        <Link to="/"><img src="back"  alt="back"/></Link>
    </div>
    )
};

export default Chatroom;