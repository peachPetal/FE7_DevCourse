interface ProfileCardProps {
  backgroundImage: string;
  userImage: string;
  userName: string;
  userInstagramId: string;
  onFollowClick: () => void;
}

export const ProfileCard = ({
  backgroundImage,
  userImage,
  userName,
  userInstagramId,
  onFollowClick,
}: ProfileCardProps) => {
  return (
    <article className="card">
      <div>
        <img
          className="card-img"
          src= {backgroundImage}
          alt="background-pic"
        />
      </div>
      <div className="profile">
        <img
          className="prof-img"
          src= {userImage}
          alt="profile-pic"
        />
        <h3 className="alias">{userName}</h3>
        <p className="username">{userInstagramId}</p>
        <button onClick={onFollowClick}>Follow</button>
      </div>
    </article>
  );
};