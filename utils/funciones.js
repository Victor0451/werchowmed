import moment from "moment";
import axios from "axios";
import toastr from "toastr";

export const registrarHistoria = async (accion, user) => {
  const historial = {
    operador: user,
    fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
    accion: accion,
    f: "sistema",
  };

  await axios
    .post(`/api/historia`, historial)
    .then((res) => {
      if (res.status === 200) {
        toastr.info("Esta accion se registo en el historial");
      }
    })
    .catch((error) => {
      console.log(error);
      toastr.error("Ocurrio un error al registrar la accion en el historial");
    });
};
