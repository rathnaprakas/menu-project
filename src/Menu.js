let Menu=(props)=>{
    return <div className='menu-item'>
        <img src={props.img} className="photo" alt={props.title}/>
        <div className='item-info'>
        <h4>{props.title}</h4>
        <h4 className='price'>${props.price}</h4>
        <p className='item-text'>{props.desc}</p>
        </div>
    </div>
}

export default Menu;