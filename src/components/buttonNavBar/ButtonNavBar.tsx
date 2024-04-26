import "./buttonNavBar.css";

interface ButtonParamets {
  textoShow: string;
}

const ButtonNavBar: React.FC<ButtonParamets> = ({ textoShow }) => {
  return (
    <div>
      <button className="buttonNavBar">{textoShow}</button>
    </div>
  );
};

export default ButtonNavBar;
