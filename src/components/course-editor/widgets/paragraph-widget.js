import React, {useState} from 'react';
import TypeDropdown from "./type-dropdown";
import HeadingWidget from "./heading-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-list";

const ParagraphWidget = ({widget, editing, deleteWidget, updateWidget, setWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)

    return (
        <>
            {
                editing &&
                    <>
                        {/*<TypeDropdown*/}
                        {/*    widget={widget}*/}
                        {/*    updateWidget={updateWidget}*/}
                        {/*    setWidget={setWidget}*/}
                        {/*    editing = {editing}/>*/}

                        {/*change text*/}
                        <textarea
                            onChange={(e) => {
                                // console.log("target: " + e.target.value)
                                // console.log("original: " + widget.text)
                                const newWidget = {
                                    ...cachedWidget,
                                    text: e.target.value
                                }
                                setCachedWidget(newWidget)
                                setWidget(newWidget)
                                // setCachedWidget({
                                //     ...cachedWidget,
                                //     text: e.target.value
                                // })
                                // setWidget({...widget, text: e.target.value})
                            }
                            }
                            // value={widget.text}

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