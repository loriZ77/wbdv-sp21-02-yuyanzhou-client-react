import React, {useState} from 'react';
import TypeDropdown from "./type-dropdown";

const HeadingWidget = ({widget, editing, setWidget, deleteWidget, updateWidget}) => {

    const [cachedWidget, setCachedWidget] = useState(widget)
    return (
        <>
            {
                editing &&
                <>
                    {/*move check and delete icon here*/}
                    <i onClick={() => {
                        console.log(JSON.stringify(cachedWidget))
                        updateWidget(cachedWidget.id, cachedWidget)
                        setWidget({})
                    }} className="fas fa-2x fa-check float-right"/>
                    <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"/>

                    {/*change type using dropdown*/}
                    <select
                        onChange={(e) => {
                            console.log('current value',JSON.stringify(e.target.value))
                            console.log("cachedWidgetBefore: " + JSON.stringify(cachedWidget))
                            setCachedWidget({
                                ...cachedWidget,
                                type: e.target.value
                            })
                            setWidget(cachedWidget)
                            console.log("cachedWidgetAfter: " + JSON.stringify(cachedWidget))
                            //console.log("this is cached" + JSON.stringify(cachedWidget.type))
                        }
                        }
                        value={cachedWidget.type}
                        className="form-control">
                        {/*send the option value to server */}
                        <option value={"HEADING"}>Heading</option>)
                        <option value={"PARAGRAPH"}>Paragraph</option>)
                    </select>

                    {/*change text*/}
                    <input
                        onChange={(e) =>
                            setCachedWidget({
                                ...cachedWidget,
                                text: e.target.value
                            })}
                        value={cachedWidget.text}
                        className="form-control"/>

                    
                    
                    <select
                        onChange={(e) => {
                            setCachedWidget({...widget, size: parseInt(e.target.value)})
                            console.log('cacheInHeading', cachedWidget)
                        }}
                        value={cachedWidget.size} className="form-control">
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