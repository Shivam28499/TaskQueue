import dependencyPlanner from "./dependencyPlanner.js";

const tasks = [
    { id: "design", depends_on: [] },
    { id: "api", depends_on: ["design"] },
    { id: "ui", depends_on: ["design"] },
    { id: "release", depends_on: ["api", "ui"] }
];

try {
    const result = dependencyPlanner(tasks);
    console.log(result);
} catch (error) {
    console.log(error.message);
}