import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { logout } from "../redux/slices/userSlice";

const Homepage = () => {
  const isLoggedIn = useAppSelector((state) => state.userState.isLoggedIn);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  return (
    <>
      <div>Homepage</div>
      {isLoggedIn ? (
        <div>
          <div>Logged in</div>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <div>Not logged in</div>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
    </>
  );
};

export default Homepage;
