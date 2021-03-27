import React, {useState} from 'react'

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
                        <i onClick={() => {
                            console.log("clicked: " + cachedWidget.ordered)
                            updateWidget(cachedWidget.id, cachedWidget)
                            setWidget({})
                        }} className="fas fa-2x fa-check float-right"/>
                        <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"/>
                        URL:
                        <input
                            onChange={(e) =>
                                setCachedWidget({
                                    ...cachedWidget,
                                    src: e.target.value
                                })}
                            value={cachedWidget.src}
                            className="form-control"/>

                            Width:
                        <input
                            onChange={(e) =>
                                setCachedWidget({
                                    ...cachedWidget,
                                    width: e.target.value
                                })}
                            value={cachedWidget.width}
                            className="form-control"/>

                            Height:
                        <input
                            onChange={(e) =>
                                setCachedWidget({
                                    ...cachedWidget,
                                    height: e.target.value
                                })}
                            value={cachedWidget.height}
                            className="form-control"/>
                    </>
            }
        </div>
    )
}

export default ImageWidget