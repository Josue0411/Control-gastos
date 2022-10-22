
import { useState } from "react";
import Mensaje from './Mensaje'
import CerrarModal from "../img/cerrar.svg";
const Modal = ({ setModal, animarModal, setAnimarModal,guardarGasto }) => {
  const [mensaje,setMetsaje]=useState('')
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setMetsaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMetsaje('')
      }, 1500);
      return;
    }
    guardarGasto({nombre,cantidad,categoria})
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarModal} alt="Cerrar modal" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        action=""
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>ç
        {mensaje && <Mensaje tipo="error"  > {mensaje} </Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la Cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            name=""
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gastos" />
      </form>
    </div>
  );
};

export default Modal;
