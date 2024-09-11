import Image from "next/image"

const Card = ({imgSrc, title, rating, price, slashedPrice}) => {
  return (
    <div>
      <Image src={imgSrc} alt="card-img" width={400} height={400} className="rounded-lg" />
      <div className="">
            <h3>{title}</h3>
            <p>{rating}</p>
            <p>{price}</p>
      </div>
    </div>
  )
}

export default Card
