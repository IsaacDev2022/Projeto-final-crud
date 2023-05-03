const router = require('express-promise-router')();
const taskData = require('../data/task.data');

// Rota para cadastrar tarefas
// http://localhost:3000/api/tasks + dados via body
router.post('/tasks', async function(req, res) {
    const task = req.body;
    const taskName = req.body.taskName;
    const description = req.body.description;
    const priority = req.body.priority;
    try {
        const newTask = await taskData.createTask(task);
        res.status(201).send({
            message: "Sua tarefa foi adicionada com sucesso!",
            body: {
                task: { taskName, description, priority }
            }
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// Rota para buscar uma lista com todas as tarefas
// http://localhost:3000/api/tasks
router.get('/tasks', async function(req, res) {
    try {
        const getTasks = await taskData.listAllTasks();
        res.status(201).send(getTasks.rows);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// Rota para buscar uma tarefa específica via ID
// http://localhost:3000/api/tasks/{qualquer_id}
router.get('/tasks/:id', async function(req, res) {
    try {
        const getTask = await taskData.findTaskById(req.params.id);
        res.status(201).send(getTask.rows);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// Rota para atualizar uma tarefa usando PUT
// http://localhost:3000/api/tasks/{qualquer_id}
router.put('/tasks/:id', async function(req, res) {
    const task = req.body;
    try {
        const updateTask = await taskData.updateTask(req.params.id, task);
        res.status(201).send({
            message: "Sua tarefa foi atualizada com sucesso!",
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// Rota para atualizar uma tarefa usando PATCH
// http://localhost:3000/api/tasks/{qualquer_id}
router.patch('/tasks/:id', async function(req, res) {
    const task = req.body;
    try {
        const updateTask = await taskData.updateTask(req.params.id, task);
        res.status(201).send({
            message: "Sua tarefa foi atualizada com sucesso!",
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// Rota para deletar uma tarefa usando ID
// http://localhost:3000/api/tasks/{qualquer_id}
router.delete('/tasks/:id', async function(req, res) {
    try {
        const deleteTask = await taskData.deleteTask(req.params.id);
        res.status(201).send({
            message: "Sua tarefa foi deletada com sucesso!",
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// Rota para deletar todas as tarefas
// http://localhost:3000/api/tasks
router.delete('/tasks', async function(req, res) {
    try {
        const deleteAllTasks = await taskData.deleteAllTasks();
        res.status(201).send({
            message: "Todas as suas tarefas foram deletadas com sucesso",
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;