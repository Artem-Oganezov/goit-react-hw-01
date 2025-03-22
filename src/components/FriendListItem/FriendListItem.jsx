

const FriendListItem = ({friend}) => {
  return (
    <div>
       <img src={friend.avatar} alt="Avatar" width="48" />
          <p>{friend.name}</p>
          {friend.isOnline?<p>Online</p>:<p>Offline</p>}  
    </div>
  )
}

export default FriendListItem;
