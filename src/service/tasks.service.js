const taskData = require('../data/task.data');

exports.createTask = async function(task) {
    return taskData.createTask(task);
}

exports.listAllTasks = async function() {
    return taskData.listAllTasks();
}

exports.findTaskById = async function(id) {
    return taskData.findTaskById(id);
}

exports.updateTask = async function(id, task) {
    return taskData.updateTask(id, task);
}

exports.deleteTask = async function(id) {
    return taskData.deleteTask(id);
}

exports.deleteAllTasks = async function() {
    return taskData.deleteAllTasks();
}