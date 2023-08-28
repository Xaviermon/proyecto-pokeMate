import Nav from "../../componentes/nav/nav"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonsByName } from "../../redux/actions"

const Profile = () => { 
	const user = JSON.parse(localStorage.getItem("token"))
	const dispatch = useDispatch()
	const imagenPokemon = useSelector(state => state.imagenPokemon)

	useEffect(() => {
		if(Object.keys(imagenPokemon).length === 0){
			dispatch(getPokemonsByName(user[0].pokemon))
		}
	},[dispatch, imagenPokemon, user])
	return (
    <div className="min-h-auto max-h-auto w-auto h-auto">
			<Nav/>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-0 py-24 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tu Progreso</h2>
          <p className="mt-4 text-gray-500">
            En esta area podras ver tu progreso en los ejercicios que vallas realizando y el nivel en el que vas actualmente
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

              <div key="9" className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 text-2xl">NIVEL {user[0]?.level}</dt>
                <dd className="mt-2 text-gray-500 text-2xl">{user[0]?.experiencia}</dd>
              </div>
							<div key="8" className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-2xl text-gray-900">AVANCE TOTAL</dt>
                <dd className="mt-2 text-2xl text-gray-500">description</dd>
              </div>
							<div key="7" className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-2xl text-gray-900">ARITMETICA</dt>
                <dd className="mt-2 text-2xl text-gray-500">description</dd>
              </div>
							<div key="6" className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-2xl text-gray-900">ALGEBRA</dt>
                <dd className="mt-2 text-2xl text-gray-500">description</dd>
              </div>
							<div key="5" className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-2xl text-gray-900">GEOMETRIA</dt>
                <dd className="mt-2 text-2xl text-gray-500">description</dd>
              </div>
							<div key="4" className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-2xl text-gray-900">TRIGONOMETRIA</dt>
                <dd className="mt-2 text-2xl text-gray-500">description</dd>
              </div>
							<div key="1" className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-2xl text-gray-900">RAZ. MATEMATICO</dt>
                <dd className="mt-2 text-2xl text-gray-500">description</dd>
              </div>
							<div key="3" className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-2xl text-gray-900">Nombre</dt>
                <dd className="mt-2 text-2xl text-gray-500">description</dd>
              </div>

          </dl>
        </div>
        <div className="flex flex-col backdrop:justify-center items-center ">
          <img
            src={imagenPokemon.image}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 h-96 w-96"
          />
					<div key="1" className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900 text-4xl">{user[0]?.nombre.toUpperCase()}</dt>
                <dd className="mt-2 text-gray-500 text-3xl">{user[0]?.grado}</dd>
              </div>
        </div>
      </div>
			<br />
			<br />
			<br />
			<br />
    </div>
  )
}

export default Profile