import React  from 'react';
import TaskItemComponent from "./TaskItemComponent";
import {connect} from "react-redux";

const ListTaskComponent = props => {
    return (
        <section id="wrap-task" className="mt-3">
            {
                props.taskState.map(value =>
                    <TaskItemComponent
                        key={value.id.toString()} task={value}/>
                )
            }
        </section>
    )
}

const mapStateToProps = state => {
    return {
        taskState: state.taskReducer.tasks,
    }
}

export default connect(mapStateToProps, null)(ListTaskComponent)