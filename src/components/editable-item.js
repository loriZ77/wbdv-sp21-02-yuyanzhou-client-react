import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        deleteItem,
        updateItem,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active?'active':''}`} to={to}>
                        {item.title}
                        <i onClick={() => setEditing(true)} className="fas fa-edit float-right"/>
                    </Link>
                </>
            }

            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...cachedItem,
                                title: e.target.value
                        })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        console.log("editable" + JSON.stringify(cachedItem))
                        updateItem(cachedItem)
                    }} className="fas fa-check"/>
                    <i onClick={() => deleteItem(item)} className="fas fa-times"/>
                </>
            }





        </>
    )
}

export default EditableItem