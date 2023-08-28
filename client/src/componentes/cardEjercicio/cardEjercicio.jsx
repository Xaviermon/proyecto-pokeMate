/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardEjercicios = (props) => {
  return (
		<Link to={`/ejercicioDetail/${props.id}`}>
    <div className=" group relative">
      <div className="aspect-h-1 aspect-w-1 w-80 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={props.imagen}
          alt={props.problema}
          className="h-96 w-96 object-cover object-center lg:h-96 lg:w-96"
        />
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <div>
          <h2 className="text-xl text-center text-red-600">
            {props.problema}
            <br />
            {props.curso}
          </h2>
        </div>
      </div>
    </div>
		</Link>
  );
};
export default CardEjercicios;
