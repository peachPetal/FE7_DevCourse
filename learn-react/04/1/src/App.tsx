import Profile from "./components/Profile";

export default function App() {
  return (
    <>
      <Profile
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImage="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Sally Ramos"
        instaId="@sallytheramos"
        onClick={() => {
          console.log("clicked!");
        }}
      />

      <Profile
        bg="https://cdn.pixabay.com/photo/2024/03/24/17/10/background-8653526_1280.jpg"
        userImage="https://cdn.pixabay.com/photo/2023/12/04/17/16/woman-8429860_1280.jpg"
        uname="kim"
        instaId="@kim"
        onClick={() => {
          console.log("clicked!");
        }}
      />
    </>
  );
}
