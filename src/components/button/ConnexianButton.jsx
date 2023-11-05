import { Button } from "primereact/button";

export const ConnexianButton = ({
  type = "button",
  label,
  onClick,
}) => {
  return (
    <Button
      type={type}
      className="cursor-pointer justify-center border-none bg-blue-500 text-lg font-bold text-white hover:bg-blue-900 hover:text-white"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
