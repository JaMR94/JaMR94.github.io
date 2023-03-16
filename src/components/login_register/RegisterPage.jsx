import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {

  const router = useRouter()

  const [form, setForm] = useState({
      name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      phone_number: '',
      birth_date: ''

  })

  const handleChange = (e) => {
    const {value, name} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  }
  const postData = async (form) => {
    try{
        console.log(form);
          const res = await fetch('https://ecommerce-unid.000webhostapp.com/users', {
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(form),
          });
          
          const data = await res.json();
          console.log(data);



          router.push('/')

    } catch(error){
        console.log(error);
    }

  }

    return (
            <main >
            <div className="RegisterPage_h1">
              <h1><a href="/">Store</a></h1>
            </div>
              <div className="form-register">
              <form className="RegisterPageForm" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Crear cuenta</h1>
                <div className="row">
                <div className="form-floating col-sm-6">
                  <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
                  <label> &nbsp;Nombre</label>
                </div>
                <div className="form-floating col-sm-6">
                  <input type="text" name="last_name" className="form-control" id="floatingInput_Apellidos" value={form.last_name} onChange={handleChange}  required />
                  <label id="floatingInput_Apellidos"> &nbsp;Apellidos</label><br/>
                </div>
                </div>
                <div className="form-floating">
                  <input type="text" name="username" className="form-control" value={form.username} onChange={handleChange}  required />
                  <label>Nombre de usuario</label><br/>
                </div>
                <div className="form-floating">
                  <input type="email"  name="email" className="form-control"  value={form.email} onChange={handleChange}   required />
                  <label>Correo electrónico</label><br/>
                </div>
                <div className="form-floating">
                  <input type="password"  name="password" className="form-control"   value={form.password} onChange={handleChange}  required />
                  <label>Contraseña</label><br/>
                </div>
                <div className="form-floating">
                  <input type="text"  name="phone_number" className="form-control" value={form.phone_number} onChange={handleChange}   required />
                  <label>Número de teléfono</label><br/>
                </div>
                <div className="form-floating">
                  <input type="date" name="birth_date" className="form-control" value={form.birth_date} onChange={handleChange}  required/>
                  <label>Cumpleaños</label><br/>
                </div>

                <button className="w-100 btn btn-lg btn-dark" id="RegisterPage_ButtonRegister" type="submit">Crear cuenta</button>
              </form>
              </div>
            </main>
          );
    }
    
  export default LoginPage