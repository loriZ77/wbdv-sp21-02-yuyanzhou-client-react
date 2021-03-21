import React from 'react';
import TypeDropdown from "./type-dropdown";

const ParagraphWidget = ({widget, editing, updateWidget, setWidget}) => {
    return (
        <>
            {
                editing &&
                    <>
                        <TypeDropdown
                            widget={widget}
                            setWidget={setWidget}/>,
                        <textarea className="form-control"
                                  value={widget.text}/>
                    </>

            }
            {
                !editing &&
                <p>
                    {widget.text} {editing}
                </p>
            }

        </>
    )
}

export default ParagraphWidget