import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}
