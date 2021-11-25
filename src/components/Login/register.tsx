import { LoginStyled } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import Logo from "../../assets/images/mao-de-vaca.png";

import { toast } from "react-toastify";

interface UserRegisterData {
  name: string;
  email: string;
  password: string;
}

interface RegisterProps {
  handleRegister: (boolean: boolean) => void;
}

function Register({ handleRegister }: RegisterProps) {
  let navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo 6 dígitos"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const registerSucceeded = (name: string) =>
    toast.success(`Bem-vindo ${name}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const registerFailed = () =>
    toast.error("Cadastro falhou", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleForm = (userRegisterData: UserRegisterData) => {
    api
      .post("/register", {
        name: userRegisterData.name,
        email: userRegisterData.email,
        password: userRegisterData.password,
      })
      .then((response) => {
        localStorage.setItem("@mao-de-vaca:token", response.data.accessToken);
        localStorage.setItem("@mao-de-vaca:id", response.data.user.id);
        navigate("dashboard");
        registerSucceeded(response.data.user.name);
      })
      .catch((err) => {
        console.log(err);
        registerFailed();
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

      <h3>Cadastre-se</h3>

      <form onSubmit={handleSubmit(handleForm)}>
        <div
          className={
            errors.name?.message ? "input-container fail" : "input-container"
          }
        >
          <input placeholder=" " {...register("name")}></input>
          <label>{errors.name?.message || "Nome"}</label>
        </div>
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
        <div
          className={
            errors.confirmPassword?.message
              ? "input-container fail"
              : "input-container"
          }
        >
          <input
            placeholder=" "
            type="password"
            {...register("confirmPassword")}
          ></input>
          <label>
            {errors.confirmPassword?.message || "Confirme sua senha"}
          </label>
        </div>

        <button type="submit" className="confirm-button">
          Cadastrar
        </button>
      </form>
      <div className="button-container">
        <button className="switch-button" onClick={() => handleRegister(false)}>
          Já tem cadastro? Faça Login
        </button>
      </div>
    </LoginStyled>
  );
}

export default Register;
