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
    const {topicId} = useParams();
    useEffect(() => {
        console.log("widgets" + widgets);
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
                                </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"/>
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