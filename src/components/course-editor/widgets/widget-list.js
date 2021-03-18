import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams} from "react-router-dom"
import widgetService from "../../../services/widget-service"
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const WidgetList = ({
    widgets=[],
    findAllWidgets
                    }) => {
    const {topicId} = useParams();
    useEffect(() => {
        findAllWidgets(topicId)
    }, [topicId])
    return (
        <div>
            <h2>Widget List # {widgets.length}</h2>
            <ul className="list-group"> {
                widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            widget.type === "HEADING" &&
                                <HeadingWidget widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget widget={widget}/>
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
            findAllWidgets: (topicId) => {
                widgetService.findAllWidgets(topicId)
                    .then(theWidgets => dispatch({
                        type: "FIND_ALL_WIDGETS",
                        widgets: theWidgets
                    }))
            }

        }
    }


export default connect(stpm, dtpm)(WidgetList)