import './Card.css';

function Card(props){
    const classes='card '+props.className;

    return (
        
        // the prop children will basically take the content inside the card wrapper coz for props we can't put something inside a Card (wrapper)
    <div className={classes}>{props.children}</div>
    )
}
export default Card;