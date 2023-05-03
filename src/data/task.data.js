const database = require("../config/database");

exports.createTask = function(task) {
  return database.query("INSERT INTO tasks (taskName, description, priority) VALUES ($1, $2, $3)", [task.taskName, task.description, task.priority]);
};

exports.listAllTasks = function() {
  return database.query("SELECT * FROM tasks ORDER BY taskName ASC")
};

exports.findTaskById = function(id) {
  return database.query("SELECT * FROM tasks WHERE id = $1", [id])
}

exports.updateTask = function(id, task) {
  return database.query("UPDATE tasks SET taskName = $1, description = $2, priority = $3 WHERE id = $4",
  [task.taskName, task.description, task.priority, id])
};

exports.deleteTask = function(id) {
  return database.query("DELETE FROM tasks WHERE id = $1", [id])
};

exports.deleteAllTasks = function() {
  return database.query("DELETE FROM tasks");
}