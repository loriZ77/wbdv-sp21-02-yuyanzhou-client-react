import React, {useState} from 'react';
import TypeDropdown from "./type-dropdown";

const ParagraphWidget = ({widget, editing, deleteWidget, updateWidget, setWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)

    return (
        <>
            {
                editing &&
                    <>
                        <i onClick={() => {
                            console.log(JSON.stringify(cachedWidget))
                            updateWidget(cachedWidget.id, cachedWidget)
                            setWidget({})
                        }} className="fas fa-2x fa-check float-right"/>
                        <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"/>

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
                        <textarea
                            onChange={(e) =>
                                setCachedWidget({
                                    ...cachedWidget,
                                    text: e.target.value
                                })}
                            value={cachedWidget.text}
                            className="form-control"/>
                        {/*<TypeDropdown*/}
                        {/*    widget={widget}*/}
                        {/*    setWidget={setWidget}/>,*/}
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