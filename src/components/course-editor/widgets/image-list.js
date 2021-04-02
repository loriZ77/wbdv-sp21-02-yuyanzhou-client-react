import React, {useState} from 'react'
import TypeDropdown from "./type-dropdown";

const ImageWidget = ({widget, editing, setWidget, deleteWidget, updateWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget);

    return (
        <div>
            {
                !editing &&
                    <img
                    width={widget.width}
                    height={widget.height}
                    src={widget.src}/>
            }

            {

                editing &&
                    <>
                        {/*<TypeDropdown*/}
                        {/*    widget={widget}*/}
                        {/*    updateWidget={updateWidget}*/}
                        {/*    setWidget={setWidget}/>*/}
                        {/*<i onClick={() => {*/}
                        {/*    updateWidget(cachedWidget.id, cachedWidget)*/}
                        {/*    setWidget({})*/}
                        {/*}} className="fas fa-2x fa-check float-right"/>*/}
                        {/*<i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"/>*/}
                        URL:
                        <input
                            onChange={(e) => {
                                const newWidget = {
                                    ...cachedWidget,
                                    src: e.target.value
                                }
                                setCachedWidget(newWidget)
                                setWidget(newWidget)
                                // setCachedWidget({
                                //     ...cachedWidget,
                                //     src: e.target.value
                                // })
                            }
                            }
                            value={cachedWidget.src}
                            className="form-control"/>

                            Width:
                        <input
                            onChange={(e) => {
                                const newWidget = {
                                    ...cachedWidget,
                                    width: e.target.value
                                }
                                setCachedWidget(newWidget)
                                setWidget(newWidget)
                                // setCachedWidget({
                                //     ...cachedWidget,
                                //     width: e.target.value
                                // })
                            }}
                            value={cachedWidget.width}
                            className="form-control"/>

                            Height:
                        <input
                            onChange={(e) => {
                                const newWidget = {
                                    ...cachedWidget,
                                    height: e.target.value
                                }
                                setCachedWidget(newWidget)
                                setWidget(newWidget)
                                // setCachedWidget({
                                //     ...cachedWidget,
                                //     height: e.target.value
                                // })
                            }}
                            value={cachedWidget.height}
                            className="form-control"/>
                    </>
            }
        </div>
    )
}

export default ImageWidget