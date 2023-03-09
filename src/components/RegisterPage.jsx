const LoginPage = () => {
    return (
            <main >
              <div className="form-register">
              <form className="RegisterPageForm">
                <h1 className="h3 mb-3 fw-normal">Crear cuenta</h1>
                <div className="row">
                <div className="form-floating col-sm-6">
                  <input type="text" className="form-control" id="floatingInput" required />
                  <label htmlFor="floatingInput"> &nbsp;Nombre</label>
                </div>
                <div className="form-floating col-sm-6">
                  <input type="text" className="form-control" id="floatingPassword" required />
                  <label htmlFor="floatingInput"> &nbsp;Apellidos</label><br/>
                </div>
                </div>
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingPassword" required />
                  <label htmlFor="floatingInput">Nombre de usuario</label><br/>
                </div>
                <div className="form-floating">
                  <input type="email" className="form-control" id="floatingPassword" required />
                  <label htmlFor="floatingInput">Correo electrónico</label><br/>
                </div>
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingPassword" required />
                  <label htmlFor="floatingInput">Dirección</label><br/>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" required />
                  <label htmlFor="floatingPassword">Contraseña</label><br/>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" required />
                  <label htmlFor="floatingPassword">Confirmar contraseña</label><br/>
                </div>
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingPassword" required />
                  <label htmlFor="floatingInput">Número de teléfono</label><br/>
                </div>
                <div className="form-floating">
                  <input type="date" className="form-control" id="floatingPassword" required/>
                  <label htmlFor="floatingInput">Cumpleaños</label><br/>
                </div>

                <button className="w-100 btn btn-lg btn-dark" type="submit">Crear cuenta</button>
              </form>
              </div>
            </main>
          );
    }
    
  export default LoginPage