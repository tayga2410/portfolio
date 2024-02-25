import classess from "./Button.module.css";

export default function Button({ children, isActive, className, ...props }) {
  const buttonClass = isActive ? `${classess.button} ${classess.active}` : classess.button;
  const combinedClassName = className ? `${buttonClass} ${classess.formButton} ${className}` : buttonClass;

  return (
    <button
      {...props}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
