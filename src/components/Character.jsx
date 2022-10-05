import { Link } from "react-router-dom"

const Character = ({character}) => {
  return (
    
      <div className="character" style={{
          background: `url(${character.imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
      }}>
        <Link to={`/characters/${character.id}`}>
          <div className="link">
            <p>{character.fullName}</p>
          </div>
        </Link>
      </div>    
    
  )
}

export default Character