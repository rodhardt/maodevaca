import { LoginStyled } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import Logo from "../../assets/images/mao-de-vaca.png";

import { toast } from "react-toastify";

interface UserLoginData {
  email: string;
  password: string;
}

interface LoginProps {
  handleRegister: (boolean: boolean) => void;
}

function Login({ handleRegister }: LoginProps) {
  let navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const loginSucceeded = (name: string) =>
    toast.success(`Bem-vindo ${name}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const loginFailed = () =>
    toast.error("Login falhou", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleForm = (userLoginData: UserLoginData) => {
    api
      .post("/login", userLoginData)
      .then((response) => {
        localStorage.setItem("@mao-de-vaca:token", response.data.accessToken);
        localStorage.setItem("@mao-de-vaca:id", response.data.user.id);
        navigate("/dashboard");
        loginSucceeded(response.data.user.name);
      })
      .catch((err) => {
        console.log(err);
        loginFailed();
      });
  };

  return (
    <LoginStyled>
      <div className="logo-container">
        <div className="image-container">
          <img src={Logo} alt="mao-de-vaca" />
        </div>
        <h1>mão-de-vaca</h1>
      </div>

      <h3>Faça seu Login</h3>

      <form onSubmit={handleSubmit(handleForm)}>
        <div
          className={
            errors.email?.message ? "input-container fail" : "input-container"
          }
        >
          <input placeholder=" " {...register("email")}></input>
          <label>{errors.email?.message || "E-mail"}</label>
        </div>

        <div
          className={
            errors.password?.message
              ? "input-container fail"
              : "input-container"
          }
        >
          <input
            placeholder=" "
            type="password"
            {...register("password")}
          ></input>
          <label>{errors.password?.message || "Senha"}</label>
        </div>

        <button type="submit" className="confirm-button">
          Login
        </button>
      </form>
      <div className="button-container">
        <button className="switch-button" onClick={() => handleRegister(true)}>
          Cadastre-se
        </button>
      </div>
    </LoginStyled>
  );
}

export default Login;
