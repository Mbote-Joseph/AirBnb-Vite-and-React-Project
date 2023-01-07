import './Card.css'

let Card=({ image,rating,stars,country, text, price})=>{
    return (
        <div className="cardSection">
            <div className="card">
            <img className="cardimage" src={image} alt="_blank"/>
            <br/>
            <i class="ri-star-fill"></i> {rating} <span>({stars}).{country}</span>
            <br/>
            {text}
            <br/>
            <b> From ${price} </b> / Person
            
            
            </div>
        </div>
        
    )
}

export default Card;