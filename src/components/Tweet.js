import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  const{user, timestamp, message} = props.tweet
  return (
    <div className="tweet">
      {/* <img
        src={ user.image}
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span> */}
          <User userData={props.tweet.user}/>

          {/* <span className="timestamp">{timestamp}</span> */}
          <Timestamp time={timestamp}/>
        </div>

        {/* <p className="message">
       {message}
        </p> */}
        <Message message= {message}/>

        <Actions />
       
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
