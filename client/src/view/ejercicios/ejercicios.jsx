import Nav from "../../componentes/nav/nav" 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEjercicios } from "../../redux/actions";
import CardEjercicios from "../../componentes/cardEjercicio/cardEjercicio";
const Ejercicios = () => {
	const dispatch = useDispatch();
  const ejercicios = useSelector((state) => state.ejercicios);
	console.log(ejercicios);

  useEffect(() => {
		if(ejercicios.length === 0) dispatch(getEjercicios());
  }, [dispatch, ejercicios]);
  return (
			<>
			<Nav />
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {ejercicios.map((ejercicio) => {
        return (
          <CardEjercicios
            key={ejercicio?.id}
						id={ejercicio?.id}
            problema={ejercicio?.problema}
            respuesta={ejercicio?.respuesta}
            curso={ejercicio?.curso}
            imagen={ejercicio?.imagen}
          />
        );
      })}
    </div>
		</>
  );	
}
export default Ejercicios