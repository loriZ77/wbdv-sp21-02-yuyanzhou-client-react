import React from 'react';

const ParagraphWidget = ({widget, editing}) => {
    return (
        <>
            {
                editing &&
                <textarea className="form-control"
                          value={widget.text}/>
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