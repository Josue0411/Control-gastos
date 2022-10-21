const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <p>Grafica aqui</p>
      <div className="contenido-presupuesto">
        <span>Presupueso: </span>${presupuesto}
      </div>
    </div>
  );
};

export default ControlPresupuesto;
