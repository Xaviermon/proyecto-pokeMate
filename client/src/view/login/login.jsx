import { Link, useNavigate  } from 'react-router-dom'
import { useLocalStorage } from '../../useLocalStorage/useLocalStorage'
import { useEffect, useState } from 'react'
import { validateUser } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../imagenes/buttonStar.png'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [/* token */, setToken] = useLocalStorage('token', '')
  const [ user, setUser ] = useState({
    usuario: '',
    contraseña: ''
  })
  const login = useSelector(state => state.login)
  const userDetail = useSelector(state => state.user)
  useEffect(() => {
    if(login && userDetail.length > 0){
      setToken(userDetail)
      return navigate('/profile')
    }
    if(login === false){
      setToken('')
    }
  },[login, userDetail, setToken, navigate]);
  const handlerChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(validateUser(user))
  }
	return(
    <div className='flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 container">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-24 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            LOGIN
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Usuario
              </label>
              <div className="mt-2">
                <input
                  id="usuario"
                  name="usuario"
                  type="usuario"
                  value={user.usuario}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handlerChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="contraseña"
                  name="contraseña"
                  type="contraseña"
                  value={user.contraseña}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handlerChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Registrate:   
            <Link to={'/registro'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              AHORA
            </Link>
          </p>
        </div>
      </div>
      </div>
	)
}

export default Login