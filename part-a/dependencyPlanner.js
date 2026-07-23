
function dependencyPlanner(tasks) {
    const graph = {};

    const indegree = {};

    const result = [];

    const queue = [];

    for (const task of tasks) {
        console.log("task:",task);
        graph[task.id] = [];
        indegree[task.id] = 0;
        console.log("graph id:",graph[task.id]);
        console.log("indegree:",indegree[task.id]);
    }

    for (const task of tasks) {

        for (const dependency of task.depends_on) {
            console.log("check in graph:",(dependency in graph));
            if (!(dependency in graph)) {
                throw new Error(`Missing dependency: ${dependency}`);
            }

            graph[dependency].push(task.id);

            indegree[task.id]++;
            console.log("indegreeNNN:",indegree);
        }
    }

    for (const taskId in indegree) {

        if (indegree[taskId] === 0) {
            queue.push(taskId);
        }

    }

    while (queue.length > 0) {

        const current = queue.shift();

        result.push(current);

        for (const neighbour of graph[current]) {

            indegree[neighbour]--;

            if (indegree[neighbour] === 0) {
                queue.push(neighbour);
            }

        }

    }

    if (result.length !== tasks.length) {
        throw new Error("Circular dependency detected");
    }

    return result;

}

export default dependencyPlanner;