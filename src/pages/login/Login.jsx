import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formValues = {
      email: formData.get("email"),
      senha: formData.get("senha"),
    };

    if (formValues.email === "adm" && formValues.senha === "123") {
      alert("Login realizado com sucesso!");
      navigate("/home");

      // Armazena o usuário no localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ nome: "Angelo", tipo: "Administrador" })
      );
    } else {
      alert("Login inválido!");
    }

    console.log("Enviou:", formValues);
  };


  return (
    <div className="login-page">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={login}>
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              name="email"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              name="senha"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-success w-100 py-2" type="submit">
            Entrar
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
  );
};
