import "./style.css"

export const Pokoj = ({id, nazev, cena, mena, popis, img}) => {

  return(
    <div className="card">
        <img className="card__image" src={"/obrazky/" + img} />
        <div className="card__title">{nazev}</div>
        <div className="card__body">{cena + " " + mena + " na osobu"}</div>
      </div>
  )
}
