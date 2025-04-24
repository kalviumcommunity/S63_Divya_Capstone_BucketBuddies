import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Simple placeholder pages
const Home = () => <div>Home</div>;
const Explore = () => <div>Explore</div>;
const MyBucket = () => <div>My Bucket</div>;
const Profile = () => <div>Profile</div>;
const Login = () => <div>Login</div>;
const Signup = () => <div>Signup</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/my-bucket" element={<MyBucket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
