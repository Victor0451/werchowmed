import moment from "moment";
import axios from "axios";
import { ip } from "../config/config";
import toastr from "toastr";

// VARIALES PROMOCION
export const registrarHistoria = async (accion, user) => {
  const historial = {
    operador: user,
    fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
    accion: accion,
  };

  await axios
    .post(`${ip}api/sgi/historialacciones/reghistorial`, historial)
    .then((res) => {
      if (res.status === 200) {
        // toastr.info("Esta accion se registo en el historial", "ATENCION")
      }
    })
    .catch((error) => {
      console.log(error);
      toastr.error(
        "Ocurrio un error al registrar la accion en el historial",
        "ATENCION"
      );
    });
};
