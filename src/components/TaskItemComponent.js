import React from 'react';
import {connect} from "react-redux";
import {actionRemove, actionComplete} from "../redux/actions";

const TaskItemComponent = props => {
    const className = !props.task.status ? 'item-task bg-grey' : 'item-task bg-grey success';

    const removeTask = () => {
        props.remove(props.task.id);
    }

    const changeStatus = () => {
        props.completeTask(props.task.id);
    }
    return (
        <div className={className}>
            <div className="content-task">
                <h3>{props.task.name}</h3>
                <p>{props.task.description}</p>
            </div>
            <div className="action-task">
                {!props.task.status && <button onClick={changeStatus} className="btn">Complete</button>}
                <button className="btn" onClick={removeTask}>Delete</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        remove: id => {
            dispatch(actionRemove(id))
        },
        completeTask: id => {
            dispatch(actionComplete(id));
            console.log(id)
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItemComponent);