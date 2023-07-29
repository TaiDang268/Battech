import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValue = {
  username: string;
  password: string;
};

const dataUser = [
  {
    id: 1,
    username: "dangtai1",
    password: "123456789",
  },
  {
    id: 2,
    username: "dangtai2",
    password: "123456789",
  },

  {
    id: 3,
    username: "dangtai3",
    password: "123456789",
  },
];
const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValue>();
  const onSubmit = (data: FormValue) => {
    console.log(data);
  };
  const navigate = useNavigate();

  const handleOnclickSubmit = (data: FormValue) => {
    // Xác thực dữ liệu và đặt lỗi tùy ý
    if (!data.username || data.username.length < 5) {
      setError("username", {
        type: "manual",
        message: "Username is required and must be at least 5 characters",
      });
    } else {
      setError("username", {
        type: "manual",
        message: "", // Xóa thông báo lỗi nếu không có lỗi
      });
    }

    if (!data.password || data.password.length < 8) {
      setError("password", {
        type: "manual",
        message: "Password is required and must be at least 8 characters",
      });
    } else {
      setError("password", {
        type: "manual",
        message: "", // Xóa thông báo lỗi nếu không có lỗi
      });
    }

    // Nếu không có lỗi, thực hiện onSubmit
    if (!errors.username && !errors.password) {
      onSubmit(data);
    }
    //Kiểm tra người dùng tồn tại không
    const userExist = dataUser.find(
      (user) =>
        user?.username === data.username && user.password === data.password
    );
    if (!userExist) {
      setError("username", {
        type: "manual",
        message: "Invalid username or password",
      });
    }
    //Nếu không có lỗi và tồn tại user thực hiện onLoginSuccess
    if (userExist && !errors.username && !errors.password) {
      console.log("success");
      navigate("/main");
    }
  };

  return (
    <div className="w-full h-full flex justify-center pt-32">
      <div className="w-1/3 bg-slate-200 flex flex-col items-center p-4 rounded-md">
        <p className="text-2xl font-bold mb-10">Login Form</p>

        <form
          onSubmit={handleSubmit(handleOnclickSubmit)}
          className="flex flex-col "
        >
          <div className="flex mb-3 ">
            <span className="block w-24">Username</span>
            <input
              {...register("username", { required: true })}
              type="username"
              className="rounded-md outline-none leading-8 pl-2"
            />
          </div>
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          <div className="flex mb-3">
            <span className="block w-24">Password</span>
            <input
              {...register("password", { required: true })}
              type="password"
              className="rounded-md outline-none leading-8 pl-2"
            />
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div className="flex justify-end">
            <input
              type="submit"
              className="w-16 rounded-md "
              style={{ backgroundColor: "#a1eafb" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
