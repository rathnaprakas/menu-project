import menu from "./data";
let category=menu.map((i)=>i.category)
category=new Set(category)
category=["All",...category]

let Upper=(word)=>{
    let fl=word.charAt(0)
    fl=fl.toUpperCase()
    let rl=word.slice(1)
    return fl+rl
}
let Categories=(props)=>{
    let clickHandler=(j)=>{props.categorySelector(j)}
    return <div className="btn-container">
        {category.map((i)=><button className="filter-btn" onClick={()=>{clickHandler(i)}} key={i}>{Upper(i)}</button>)}
    </div>
}

export default Categories;