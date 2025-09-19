// UserCard 컴포넌트
interface UserCardProps{
    user: {
        name: string;
        age: number;
    }
}

export default function UserCard ({ user } : UserCardProps) {
return (
  <div>
    <h2>{user.name}</h2>
    <p>Age: {user.age}</p>
  </div>
)
};