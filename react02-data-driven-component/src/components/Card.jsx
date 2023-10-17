// import Katie from '../images/Katie.png'
import Star from "../images/star.png"



export default function Card(props) {
  let badgeText
  if(props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className='card'>
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={require(`../../public/images/${props.item.coverImg}`)} alt="" className='card-image'/>
      <div className='card-stats'>
        <img src={Star} alt="" className='card-star'/>
        <span>{props.item.stats.rating}</span>
        <span className='gray'>({props.item.stats.reviewCount}) -</span>
        <span className='gray'>{props.item.country} </span>
      </div>
      <p>{props.item.title} </p>
      <p> <span className='bold'>${props.item.price} </span> / person</p>
    </div>
  )
}