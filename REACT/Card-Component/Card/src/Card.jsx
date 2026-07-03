import icon from "./assets/shikamaru.png";

function Card() {
  return (
    <div className="card">
      <img src={icon} alt="profile" className="card-img"></img>
      <h4 className="card-title">My Card</h4>
      <p className="card-disc">I like shogi and watching clouds</p>
    </div>
  );
}

export default Card;
