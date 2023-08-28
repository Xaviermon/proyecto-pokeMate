import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getOneEjercicio, relationPost } from "../../redux/actions";
import Nav from "../../componentes/nav/nav";

const EjercicioDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
	const [ rpta, setRpta ] = useState('');
	const user = JSON.parse(localStorage.getItem("token"))
	console.log(rpta);
  const navigate = useNavigate();
  const ejercicio = useSelector((state) => state.ejerciciosDetail);
	let relation = {
		ProfileId: user[0].id,
		EjercicioId: ejercicio.id
	}
  useEffect(() => {
    dispatch(getOneEjercicio(id));
  }, [dispatch, id]);

	const comparacionRespuesta = () =>{
		if(rpta === ejercicio.respuesta) {
			dispatch(relationPost(relation));
			navigate("/ejercicios");
			alert("Correcto");
		} else {
			alert("Incorrecto");
		}
	}

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center gap-4 h-screen w-auto">
        <img src={ejercicio.imagen} alt={ejercicio.problema} />
        <div>
          <label className="flex flex-col items-center justify-center gap-2 text-2xl" >
            ESCRIBE TU RESPUESTA EN FORMA DE NUMERO ENTERO EJEMPLO : 5
            <input className="h-10 w-80 text-center rounded-md " type="text" value={rpta} onChange={(e) => setRpta(e.target.value)} />
						<button
                type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={comparacionRespuesta}
						>SUBMIT</button>
          </label>
        </div>
      </div>
    </>
  );
};

export default EjercicioDetail;
