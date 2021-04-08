import React, {useState} from 'react'

const TypeDropdown = ({widget,updateWidget, setWidget, editing}) => {
    // console.log("widget passed in: " + JSON.stringify(widget))
    // console.log("widget passed in: after" )
    const[cachedWidget, setCachedWidget] = useState(widget)
    return (
        <>
        <select
            onChange={(e) => {
                const type = e.target.value
                console.log('target value',JSON.stringify(e.target.value))
                //console.log("cachedWidget: " + JSON.stringify(cachedWidget))
                const newWidget = {
                    ...cachedWidget,
                    type: type
                }
                setCachedWidget(newWidget)
                setWidget(newWidget)
                //console.log("cachedWidgetAfter: " + JSON.stringify(cachedWidget))
                console.log("this is cached" + JSON.stringify(cachedWidget.type))
            }
            }
            value={cachedWidget.type}
            className="form-control">
            {/*send the option value to server */}
            <option value={"HEADING"}>Heading</option>
            <option value={"PARAGRAPH"}>Paragraph</option>
            <option value={"IMAGE"}>Image</option>
            <option value={"LIST"}>List</option>)
        </select>

        </>
    )
}


export default TypeDropdown
