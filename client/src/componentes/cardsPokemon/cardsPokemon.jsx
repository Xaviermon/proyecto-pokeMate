import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postEjercicio } from "../../redux/actions";

const CardsPokemon = () => {
  const [imagen, setImagen] = useState("");
	const dispatch = useDispatch();
  const [pregunta, setPregunta] = useState({
    problema: "",
    respuesta: "",
    curso: "",
    imagen: "",
  });
  console.log(pregunta.imagen);
  const handlerImage = () => {
    const formData = new FormData();
    formData.append("file", imagen);
    formData.append("upload_preset", "ejercicios");
    axios
      .post("https://api.cloudinary.com/v1_1/dc049un4k/image/upload", formData)
      .then((res) => setPregunta({ ...pregunta, imagen: res.data.secure_url }));
  };
  const handlerChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setPregunta({ ...pregunta, [property]: value });
  };
	const handleSubmit = () => {
		dispatch(postEjercicio(pregunta));
	}
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>
        <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
        <br />
      </div>
      <button onClick={handlerImage}
        type="submit"
        className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>agregar imagen</button>

      <label>Problema</label>
      <input
        type="text"
        name="problema"
        value={pregunta.problema}
        onChange={handlerChange}
      />
      <label>respuesta</label>
      <input
        type="text"
        name="respuesta"
        value={pregunta.respuesta}
        onChange={handlerChange}
      />
      <label>curso</label>
      <input
        type="text"
        name="curso"
        value={pregunta.curso}
        onChange={handlerChange}
      />

      <button
        type="submit"
				className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={()=>handleSubmit()}
      >
        agregar
      </button>
    </div>
  );
};

export default CardsPokemon;
