import React, {useState} from 'react'
import {updateWidget} from "../../../services/widget-service";

const TypeDropdown = ({widget,updateWidget, setWidget}) => {
    const[cachedItem, setCachedItem] = useState(widget)
    return (
        <select
            onChange={(e) => setWidget(widget => ({
                ...widget, text: e.target.value
            }))
            }
            value={widget.type}
            className="form-control">
            {/*send the option value to server */}
            <option value={1}>Heading</option>)
            <option value={2}>Paragraph</option>)
        </select>
    )
}

export default TypeDropdown
