import React from "react";


function ListItems (props){

    const items = props.items;
    const ListItems = items.map(item => {
        return <div className="list" key={item.key}> 
        <p>
            <input className='textbox2' type='text' id={item.key} value={item.text}  onChange={
                (e) => {
                    props.setUpdate(e.target.value, item.key)
                }
            }/>
        </p>
        <button onClick={ () => props.deleteItems(item.key)}>Delete</button>
        </div>
    })
return(
<div>{ListItems} </div>
)
}

export default ListItems;