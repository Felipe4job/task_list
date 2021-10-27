import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './button';

import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();

    const history = useHistory();

    const handleTasksList = () => {
        // history.push (`/`) >>>> like i did
        history.goBack();
    };

    return (
        <>
            <div className ="back-button-container">
                <Button onClick = {handleTasksList}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    ehbfiye wgfi yrggfyu eriygw uyv irvf iwerviewyrvb iurfgb iweur iwe
                </p>
            </div>
        </>    
    );
}
 
export default TaskDetails;