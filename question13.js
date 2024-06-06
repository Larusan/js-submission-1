// Question 13

function addTask(tasks, newTask) {
    tasks.push(newTask);
    return tasks;
}

const tasks = ['Buy groceries', 'Clean the house'];

console.log(addTask(tasks, 'Pay bills')); 
// Output: ['Buy groceries', 'Clean the house', 'Pay bills']
  