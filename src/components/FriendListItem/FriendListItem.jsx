import s from './FriendListItem.module.css'

const FriendListItem = ({friend}) => {
  return (
    <div className={s.friend_box}>
       <img src={friend.avatar} alt="Avatar" width="48" />
          <p>{friend.name}</p>
          {friend.isOnline?<p className={s.friend_on}>Online</p>:<p className={s.friend_of}>Offline</p>}  
    </div>
  )
}

export default FriendListItem;
