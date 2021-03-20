import React from 'react';
import TypeDropdown from "./type-dropdown";

const HeadingWidget = ({widget, editing, updateWidget, setWidget}) => {
    return (
        <>
            {
                editing &&
                <>
                    <TypeDropdown
                    widget={widget}
                    setWidget={setWidget}/>
                    <input
                        //onChange={(e) => se}
                        value={widget.text}
                        className="form-control"/>
                    <select value={widget.size} className="form-control">
                        {/*send the option value to server */}
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>

                </>

            }
            {
                !editing &&
                <>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}

                </>
            }

        </>

    )
}


export default HeadingWidget