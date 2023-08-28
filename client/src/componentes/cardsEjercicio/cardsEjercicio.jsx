import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEjercicios } from "../../redux/actions";
import CardEjercicios from "../cardEjercicio/cardEjercicio";

const CardsEjercicios = () => {
  const dispatch = useDispatch();
  const ejercicios = useSelector((state) => state.ejercicios);
	console.log(ejercicios);

  useEffect(() => {
		if(ejercicios.length === 0) dispatch(getEjercicios());
  }, [dispatch, ejercicios]);
  return (
    <div>
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
  );
};

export default CardsEjercicios;
