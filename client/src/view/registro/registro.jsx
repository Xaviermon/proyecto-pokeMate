import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectorPokemon from "../../componentes/select/select";
import { postUser } from "../../redux/actions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { validateUser } from "./validate";

const Registro = () => {
  const pokemonSelect = useSelector((state) => state.selectPokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    grado: "",
    usuario: "",
    celular: "",
    contraseña: "",
    pokemon: "sin pokemon",
  });
  const [error, setError] = useState({
    nombre: "",
    apellido: "",
    grado: "",
    usuario: "",
    celular: "",
    contraseña: ""
  });
  const handleRegistro = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [property]: value, pokemon: pokemonSelect?.name });
    setError(validateUser({ ...user, [property]: value }));
  };
  const handleSubmit = () => {
    if(Object.keys(validateUser(user)).length === 0 && user.pokemon !== "sin pokemon"){
    dispatch(postUser(user));
    Swal.fire({
      icon: "success",
      title: "Usuario Registrado",
      showConfirmButton: false,
      timer: 2000,
    });
    return navigate("/");
  }
    else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Complete todos los campos",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Registrate
          </h2>
        </div>
        <SelectorPokemon></SelectorPokemon>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombres
              </label>
              <div className="mt-2">
                <input
                  id="nombre"
                  name="nombre"
                  type="nombre"
                  value={user.nombre}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleRegistro}
                />
              <p className="mt-2 text-red-600">{error.nombre}</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Apellidos
              </label>
              <div className="mt-2">
                <input
                  id="apellido"
                  name="apellido"
                  type="apellido"
                  value={user.apellido}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleRegistro}
                />
              <p className="mt-2 text-red-600">{error.apellido}</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Grado
              </label>
              <div className="mt-2">
                <input
                  id="grado"
                  name="grado"
                  type="grado"
                  value={user.grado}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleRegistro}
                />
              <p className="mt-2 text-red-600">{error.grado}</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre de usuario
              </label>
              <div className="mt-2">
                <input
                  id="usuario"
                  name="usuario"
                  type="usuario"
                  value={user.usuario}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleRegistro}
                />
              <p className="mt-2 text-red-600">{error.usuario}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  celular
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="celular"
                  name="celular"
                  type="celular"
                  value={user.celular}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleRegistro}
                />
              <p className="mt-2 text-red-600">{error.celular}</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="contraseña"
                  name="contraseña"
                  type="text"
                  value={user.contraseña}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleRegistro}
                />
              <p className="mt-2 text-red-600">{error.contraseña}</p>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => handleSubmit()}
              >
                registrate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
