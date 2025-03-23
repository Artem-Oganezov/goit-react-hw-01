import clsx from 'clsx';
import s from './Profile.module.css'



const Profile = ({ name, tag, location, image, stats }) => {
  return (
<div className={s.profile_box} >
   <div className={s.avatar_box}>
      <img className={s.avatar_img}
      src={image}
          alt="User avatar"
          width={150}
     />
      <p className={s.profile_text}>{name }</p>
      <p >@{tag}</p>
      <p >{location}</p>
   </div>

  <ul className={s.list}>
    <li className={clsx(s.item , s.border)}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={s.item}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={s.item}>
      <span>Likes</span>
      <span>{stats.likes }</span>
    </li>
  </ul>
</div>);
};
 
export default Profile;

