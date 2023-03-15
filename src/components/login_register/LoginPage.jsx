const LoginPage = () => {
  return (
          <main >
            <div className="LoginPage_h1">
              <h1><a href="/">Store</a></h1>
            </div>
            <div className="form-signin">
            <form className="LoginPageForm">
              <h1 className="h3 mb-3 fw-normal">Por favor, inicia sesión</h1>
              <div className="form-floating">
                <input type="email" className="form-control" name="email" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Correo electrónico</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <button className="w-100 btn btn-lg btn-dark" id="LoginPage_ButtonLogin" type="submit">Acceder</button>
              <a href="LoginPage">¿Olvidaste tu contraseña?</a>
            </form>
            </div>
            <div className="RegisterButton">
            <h6>¿Eres nuevo?</h6>
            <button className="btn btn-lg btn-dark" id="LoginPage_ButtonRegister"> <a href="RegisterPage">Crear cuenta</a></button>
            </div>
          </main>
        );
  }
  
export default LoginPage