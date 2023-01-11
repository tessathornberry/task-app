import React from 'react';
import initialData from './initialData.js';
import Column from './Column.js';
// import '@atlaskit/css-reset';


const App = () => {
  let data = initialData;

  return (
    <>
    {data.columnOrder.map(columnId => {
      const column = data.columns[columnId];
      const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />;
    })}
    </>
  )

};

export default App;
