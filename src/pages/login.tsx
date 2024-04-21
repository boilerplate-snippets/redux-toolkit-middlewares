import { SubmitHandler, useForm } from "react-hook-form";
import { supabase } from "../libs/supabase";
import { useAppDispatch } from "../redux/hooks/hooks";
import { login as loginAction } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<{
    username: string;
    password: string;
  }>();

  const onSubmit: SubmitHandler<{
    username: string;
    password: string;
  }> = (data) => {
    login(data.username, data.password);
  };

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error(error);
      return;
    }

    dispatch(loginAction({ userId: data?.user?.id as string }));

    navigate("/");
  };

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} type="text" placeholder="username" />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
