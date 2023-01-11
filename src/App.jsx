import React from 'react';
import initialData from './initialData.js';
import Column from './Column.jsx';
import {DragDropContext} from 'react-beautiful-dnd';


const App = () => {
  let data = initialData;
  let onDragEnd = (result) => {

  }

  return (
    <DragDropContext
    onDragEnd={onDragEnd}>
    {data.columnOrder.map(columnId => {
      const column = data.columns[columnId];
      const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />;
    })}
    </DragDropContext>
  )

};

export default App;
