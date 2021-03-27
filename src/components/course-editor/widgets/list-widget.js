import React, {useState} from 'react'

const ListWidget = ({widget, editing, updateWidget, deleteWidget, setWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget);
    return (
        <div>
            {

                editing &&
                    <>

                        <i onClick={() => {
                            console.log("clicked: " + cachedWidget.ordered)
                            updateWidget(cachedWidget.id, cachedWidget)
                            setWidget({})
                        }} className="fas fa-2x fa-check float-right"/>
                        <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"/>
                        <input
                            checked={cachedWidget.ordered}
                            onChange={(e) => {
                                setCachedWidget({...cachedWidget, ordered: e.target.checked})
                                console.log(e.target.checked)
                                setWidget(cachedWidget)
                            }}

                            type="checkbox"/> Ordered
                        <br/>
                        Item List
                        <textarea
                            onChange={(e) =>
                                setCachedWidget({
                                    ...cachedWidget,
                                    text: e.target.value
                                })}
                            value={cachedWidget.text}
                            rows={10}
                            className="form-control"/>
                    </>
            }
            {
                !editing &&
                    <>
                        {
                            widget.ordered &&
                                <ol>
                                    {
                                        widget.text.split("\n").map((item) => {
                                            return (
                                                <li> {item}</li>
                                            )
                                        })
                                    }
                                </ol>
                        }

                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget.text.split("\n").map((item) => {
                                        return (
                                            <li> {item}</li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </>
            }
        </div>
    )
}

export default ListWidget