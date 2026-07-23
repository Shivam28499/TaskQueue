import dependencyPlanner from "./manualTest.js";

describe("Dependency Planner", () => {
    test("valid dependency graph", () => {
        const tasks = [
            {id: "design", depends_on:[]},
            {id: "api", depends_on:["design"]},
            {id:"ui", depends_on: ["design"]},
            {id: "release", depends_on:["api","ui"]}
        ];

        const result = dependencyPlanner(tasks);

        expect(result).toEqual([
            "design",
            "api",
            "ui",
            "release"
        ]);
    });

    test("detect circular dependency", () => {

        const tasks = [
            {id: "A", depends_on: ["B"]},
            {id: "B", depends_on: ["A"]}
        ];

        expect(() => dependencyPlanner(tasks))
        .toThrow("Circular dependency detected");
    });

    test("detect missing dependency", () => {
        const tasks = [
            {id: "api", depends_on: ["database"]}
        ];

        expect(() => dependencyPlanner(tasks))
        .toThrow("Missing dependency: database");
    });
});