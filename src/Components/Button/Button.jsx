import classess from "./Button.module.css";

export default function Button({ children, isActive, ... props }) {
  return (
    <button
      {... props}
      className={
        isActive ? `${classess.button} ${classess.active}` : classess.button
      }
    >
      {children}
    </button>
  );
}
