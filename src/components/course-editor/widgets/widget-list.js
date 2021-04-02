import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom"
import widgetService from "../../../services/widget-service"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import widgetActions from "../../../actions/widget-actions";
import ListWidget from "./list-widget";
import ImageWidget from "./image-list";

const WidgetList = ({
    widgets=[],
    findWidgetsForTopic,
    deleteWidget,
    updateWidget,
    createWidgetsForTopic
                    }) => {
    const [editingWidget, setEditingWidget] = useState({});
    const [widget, setWidget] = useState({});
    const {topicId} = useParams();
    useEffect(() => {
        findWidgetsForTopic(topicId)

    }, [topicId])
    return (
        <div>
            <h2>Widget List # {widgets.length} id: {editingWidget.id}</h2>
            <i onClick={() => createWidgetsForTopic(topicId)} className="fas fa-plus fa-2x"/>
            <ul className="list-group"> {
                widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {/*{editingWidget.type}*/}

                        {
                            editingWidget.id === widget.id &&
                                <>
                                    {/*<i onClick={() => {*/}
                                    {/*    console.log(JSON.stringify(editingWidget))*/}
                                    {/*    updateWidget(widget.id, editingWidget)*/}
                                    {/*    setEditingWidget({})*/}
                                    {/*}} className="fas fa-2x fa-check float-right"/>*/}
                                    {/*<i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"/>*/}
                                    <i onClick={() => {
                                        updateWidget(editingWidget.id, editingWidget)
                                        setEditingWidget({})
                                    }} className="fas fa-2x fa-check float-right"/>
                                    <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"/>
                                    {widget.type}
                                    <select
                                        onChange={(e) => {
                                            const newType = e.target.value
                                            const newWidget = {
                                                ...widget,
                                                type: newType
                                            }
                                            console.log('target value',JSON.stringify(e.target.value))
                                            setEditingWidget(widget => ({...widget, type: e.target.value}))
                                            // setEditingWidget(newWidget)

                                            console.log('editing: ', JSON.stringify(editingWidget.type))
                                            console.log("widget: " + JSON.stringify(widget.type))
                                            setWidget(newWidget)
                                            widget.type = newType
                                            console.log("after click, widget: " + JSON.stringify(widget.type))
                                            //console.log("this is cached" + JSON.stringify(cachedWidget.type))
                                            }
                                        }
                                        value={editingWidget.type}
                                        className="form-control">
                                        {/*send the option value to server */}
                                        <option value={"HEADING"}>Heading</option>
                                        <option value={"PARAGRAPH"}>Paragraph</option>
                                        <option value={"IMAGE"}>Image</option>
                                        <option value={"LIST"}>List</option>)
                                    </select>

                                </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => {
                                setEditingWidget(widget)
                                setWidget(widget)
                                //console.log(JSON.stringify(widget))
                            }} className="fas fa-2x fa-cog float-right"/>
                        }

                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                widget={widget}
                                editing={widget.id === editingWidget.id}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                setWidget={setEditingWidget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                widget={widget}
                                editing={widget.id === editingWidget.id}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                setWidget={setEditingWidget}/>
                        }
                        {
                            widget.type === "LIST" &&
                                <ListWidget
                                    widget = {widget}
                                    editing={widget.id === editingWidget.id}
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    setWidget={setEditingWidget}
                                />
                        }
                        {
                            widget.type === "IMAGE" &&
                            <ImageWidget
                                widget = {widget}
                                editing={widget.id === editingWidget.id}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                setWidget={setEditingWidget}

                            />
                        }
                    </li>)
            }

            </ul>
        </div>
    )
}

    const stpm = (state) => ({
        widgets: state.widgetReducer.widgets
    })

    const dtpm = (dispatch) => {
        return {

            findWidgetsForTopic: (topicId) => {
                widgetActions.findWidgetsForTopic(dispatch, topicId)
            },

            createWidgetsForTopic: (topicId) => {
                widgetActions.createWidgetsForTopic(dispatch, topicId)
            },

            deleteWidget: (wid) =>
                widgetActions.deleteWidget(dispatch, wid),
                    // .then(widgetToDelete => dispatch({
                    //     type: "DELETE_WIDGET",
                    //     widgetToDelete
                    // }))
                //console.log(widgets)

            updateWidget: (wid, widget) =>
                widgetActions.updateWidget(dispatch, wid, widget)

        }
    }


export default connect(stpm, dtpm)(WidgetList)