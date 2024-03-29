import "./closefriends.css";

export default function CloseFriends({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="Ritvik Jindal" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
