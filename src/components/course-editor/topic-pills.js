import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";

const TopicPills = (
    {
        topics=[
            {_id: "123", title: "Topic A"},
            {_id: "223", title: "Topic B"},
            {_id: "323", title: "Topic C"}],
    }) => {
    return (
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem
                        item={topic}/>
                    </li>)
                }
                <li>
                    <i className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>
    )
}

const stpm = () => {

}

const dtpm = () => {

}
export default connect(stpm, dtpm)(TopicPills)