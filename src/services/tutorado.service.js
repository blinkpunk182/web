import axios from "axios";
import { BASE_API_URL } from "../utils/constants";
import { obtenerUsuario } from "./auth.service";

export const registrarTutorado = async (tutorado) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/tutorado`, tutorado);
    return response || {};
  } catch (error) {
    return error?.response?.data?.error;
  }
};

export const actualizarTutorado = async (id, tutorado) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/tutorado/${id}`,
      tutorado
    );
    return response || {};
  } catch (error) {
    return error?.response?.data?.error;
  }
};

export const desactiveTutorado = async (id) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/tutorado/active-and-desactive/${id}`,
      {}
    );
    return response || {};
  } catch (error) {
    return error?.response?.data?.error;
  }
};

export const getTutorados = async () => {
  try {
    const tutor = obtenerUsuario();
    const response = await axios.get(
      `${BASE_API_URL}/tutorado/get-by-tuthor/${tutor?.id}`
    );
    return response?.data || [];
  } catch (error) {
    return error?.response?.data?.error;
  }
};

export const getPerfilTutorado = async (id) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/tutorado/${id}`);
    return response?.data || {};
  } catch (error) {
    return error?.response?.data?.error;
  }
};

export const createPerimetro = async (id, coords) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/tutorado/createPerimetro/${id}`,
      { coords }
    );
    return response || {};
  } catch (error) {
    return error?.response?.data?.error;
  }
};

// export const getUbicacion = async (idTutorado) => {
//   try {
//     const response = await axios.get(
//       `${BASE_API_URL}/tutorado/obtener-ubicacion/${idTutorado}`
//     );
//     return response || {};
//   } catch (error) {
//     return error?.response?.data?.error;
//   }
// };

export const deletePerimetro = async (id) => {
  try {
    const response = await axios.put(
      `${BASE_API_URL}/tutorado/deletePerimetro/${id}`,
      {}
    );
    return response || {};
  } catch (error) {
    return error?.response?.data?.error;
  }
};

export const getNotificationsByTutor = async (tutor, limit = 0) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/notificacion/get-by-tutor/${tutor}/${limit}`
    );
    return response?.data || {};
  } catch (error) {
    return error?.response?.data?.error;
  }
};

export const getNotificationsByIdTutorado = async (idTutorado) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/notificacion/${idTutorado}`
    );
    return response?.data || {};
  } catch (error) {
    return error?.response?.data?.error;
  }
};
