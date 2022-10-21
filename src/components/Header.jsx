import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setValidPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidPresupuesto ? (
        <p>Control de presopuesrto</p>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setValidPresupuesto={setValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
