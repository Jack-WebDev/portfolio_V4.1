import "./CSS/Button.css";

type ButtonProp = { title: string; href: string };

const Button = ({ title, href }: ButtonProp) => {
  return (
    <a href={href} target="_blank" className="connect">
      {title}
    </a>
  );
};

export default Button;
