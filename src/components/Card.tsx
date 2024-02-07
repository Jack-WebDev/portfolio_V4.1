import "./CSS/Card.css";

type CardProps = {
  imgSrc: string;
  title: string;
  details: string;
  cardBadge?: string;
};

const Card = ({ imgSrc, title, details, cardBadge }: CardProps) => {
  return (
    <div className="card__container">
      <img src={imgSrc} alt={title} />
      <div className="content">
        <h2 style={{textAlign: "start"}}>{title}{cardBadge && <span className="cardBadge">{cardBadge}</span>}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Card;
