import s from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'


const FriendList = ({friends}) => {
    return (
        <ul className={s.friend_list}>
            {friends.map(friend => (
                <li className={s.friend_item} key={friend.id}>
                  <FriendListItem  friend={friend} />
                </li>
            ))}	 
        </ul>
    );
};


export default FriendList;