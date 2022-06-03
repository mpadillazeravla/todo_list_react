import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

//create your first component
const Input = () => {
	const [dato, setDato] = useState("");
	const [lista, setLista] = useState([]);

	function handleEntrada(e) {
		setDato(e.target.value);
	}

	function addToList(e) {
		e.preventDefault(); // quito la accion predeterminada que tiene el submit, que es recargar la pagina cuando lo utilizo (pq entonces me está borrando el array al recargar pagina)
		setLista(lista.concat(dato)); // con CONCAT añado al array LISTA el valor que entra en DATO al hacer SUBMIT .
	}

	const tareas = lista.map((tarea, i) => {
		return <li key={i}>{tarea}</li>;
	});

	// el onSubmit ya hace que al hacer ENTER , capturemos el dato, no tenemos que hacer nada extraño como onkeypress ni nada de eso
	return (
		<>
			<div>
				<form onSubmit={addToList}>
					<input
						className="form-control"
						type="text"
						placeholder="Default input"
						aria-label="default input example"
						onChange={handleEntrada}
					/>
				</form>
				<ul className="list-group list-group-flush">{tareas}</ul>
			</div>
		</>
	);
};

//falta eliminar y

export default Input;
