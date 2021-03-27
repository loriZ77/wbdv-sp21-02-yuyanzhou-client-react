import React, {useState} from 'react'
import {updateWidget} from "../../../services/widget-service";

const TypeDropdown = ({widget,updateWidget, setWidget}) => {
    // console.log("widget passed in: " + JSON.stringify(widget))
    // console.log("widget passed in: after" )
    const[cachedItem, setCachedItem] = useState(widget)
    return (
        <>
        <select
            onChange={(e) => {
                const type = e.target.value
                console.log('target value',JSON.stringify(e.target.value))
                //console.log("cachedItem: " + JSON.stringify(cachedItem))
                const newWidget = {
                    ...cachedItem,
                    type: type
                }
                setCachedItem(newWidget)

                setWidget(newWidget)
                //console.log("cachedItemAfter: " + JSON.stringify(cachedItem))
                console.log("this is cached" + JSON.stringify(cachedItem.type))
            }
            }
            value={cachedItem.type}
            className="form-control">
            {/*send the option value to server */}
            <option value={"HEADING"}>Heading</option>)
            <option value={"PARAGRAPH"}>Paragraph</option>)
        </select>

            {cachedItem.type}
            </>
    )
}


export default TypeDropdown
