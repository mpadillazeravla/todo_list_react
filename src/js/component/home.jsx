import React from "react";
import { useState } from "react";
import Card from "./Card.jsx";
import Input from "./Input.jsx";

//create your first component
const Home = () => {
	const [dato, setDato] = useState("");
	const [lista, setLista] = useState([]);
	// const [icon, setIcon] = useState("none");

	function handleEntrada(e) {
		setDato(e.target.value);
	}

	function addToList(e) {
		e.preventDefault(); // quito la accion predeterminada que tiene el submit, que es recargar la pagina cuando lo utilizo (pq entonces me está borrando el array al recargar pagina)
		setLista(lista.concat(dato)); // con CONCAT añado al array LISTA el valor que entra en DATO al hacer SUBMIT .
	}

	// funcion para que la X se muestre cuando pase por encima
	function showIcon() {
		if (icon === "") {
			setIcon("none");
		} else setIcon("");
	}

	const deleteTask = (i) => {
		let newList = lista.filter((task, index) => i !== index); // aqui habia puesto "{i !==index}" y con las llaves fallaba, borraba todo
		setLista(newList);
	};

	// contador tareas pendientes//
	let tasksleft =
		lista.length == "0"
			? "No tasks, add a task"
			: lista.length + " item left";

	// el onSubmit ya hace que al hacer ENTER , capturemos el dato, no tenemos que hacer nada extraño como onkeypress ni nada de eso
	return (
		<>
			<div className="container">
				<h1>todos</h1>
				<ul className="list-group list-group-flush collapse d-flex justify-content-end">
					<li className="list-group-item">
						<form onSubmit={addToList}>
							<input
								className="form-control"
								type="text"
								placeholder="What needs to be done?"
								aria-label="default input example"
								onChange={handleEntrada}
							/>
						</form>
					</li>

					{/* // aqui introduzco lo que tengo en array lista haciendo map del array lista y le añado la X */}
					{lista.map((tarea, i) => {
						return (
							<li
								className="list-group-item"
								// onMouseEnter={showIcon}
								// onMouseLeave={showIcon}
								key={i}>
								{tarea}
								<span>
									<i
										className="fa-solid fa-xmark "
										onClick={() => deleteTask(i)} // puesta arrow function porque sino fallaba el deletetask, cada vez que escribía llamaba a la funcion. Así se ejecuta solo cuando la llamo (igual que en onmouseenter)
										// style={{ display: icon }}
									></i>
								</span>
							</li>
						);
					})}
				</ul>
				<div id="taskleft">{tasksleft}</div>
			</div>
		</>
	);
};

export default Home;
