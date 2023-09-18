

function Concepts(props){
    return(
      
        <li className="concept">
          <img src={props.src} alt={props.title} />
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </li>
     
    )
}

export default Concepts;