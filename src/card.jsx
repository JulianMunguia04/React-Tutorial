import logoPic from './assets/ladladderlogo.png'

function Card(){
  return(
    <div className="card">
      <img className = "card-image" src={logoPic} alt="Lad Ladder Logo"></img>
      <h2 className="card-title" >Lad Ladder</h2>
      <p className='card-text'>Game to see where you rank among your friends</p>
    </div>
  );
}

export default Card