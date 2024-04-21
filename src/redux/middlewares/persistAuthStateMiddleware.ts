import { login, logout } from "../slices/userSlice";
import { listener } from "./listnerMiddleware";

listener.startListening({
  actionCreator: login,
  effect: (action) => {
    localStorage.setItem("userId", action.payload.userId);
  },
});

listener.startListening({
  actionCreator: logout,
  effect: () => {
    localStorage.removeItem("userId");
  },
});
