import { jwtDecode } from "jwt-decode";
import { UserInterface } from "../interfaces/userInterface";

export const getToken = () => localStorage.getItem("token") || null;

export const getUser = (): UserInterface | null => {
  const token = getToken();
  if (!token) return null
  return jwtDecode(token);
};
export const deleteToken = () => localStorage.removeItem("token");
