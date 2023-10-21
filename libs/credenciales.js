import jsCookie from "js-cookie";

const credenciales = async () => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500));

  if (jsCookie.get("token")) {
    // authorized
    return {
      name: jsCookie.get("usuario"),
    };
  }

  // not authorized
  const error = new Error("Not authorized!");
  error.status = 403;
  throw error;
};
export default credenciales;
