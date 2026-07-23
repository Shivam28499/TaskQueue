import request from "supertest";
import app from "../src/app.js";
import db from '../src/models/index.js'

describe("Task API Test", () => {

    beforeAll(async () => {
        await db.sequelize.sync({ force: true });
    });

    test("Should create a task", async () => {

        const response = await request(app)
            .post("/api/v1/tasks")
            .send({
                title: "Build Notification API",
                priority: "high",
                status: "pending",
                due_date: "2026-08-10",
                estimated_hours: 5
            });

             console.log(response.body);



        expect(response.body.success)
            .toBe(true);

        expect(response.body.data.title)
            .toBe("Build Notification API");

    });

    test("Should fetch all tasks", async () => {

        const response = await request(app)
            .get("/api/v1/tasks");


        expect(response.body.success)
            .toBe(true);


        expect(Array.isArray(response.body.data))
            .toBe(true);

    });

   test("Should reject invalid task", async()=>{


    const response = await request(app)
            .post("/api/v1/tasks")
            .send({

                title:"",
                priority:"urgent",
                due_date:"abc",
                estimated_hours:"hello"

            });


        expect(response.body.success)
            .toBe(false);


    }); 

   test("Should update task status", async()=>{


    const response = await request(app)
            .patch("/api/v1/tasks/1/status")
            .send({

                status:"in_progress"

            });


        expect(response.body.data.status)
            .toBe("in_progress");


    }); 

   test("Should return next recommended task", async () => {

    await request(app)
                .post("/api/v1/tasks")
                .send({
                    title: "Pending Task",
                    priority: "critical",
                    status: "pending",
                    due_date: "2026-08-12",
                    estimated_hours: 2
                });

            const response = await request(app)
                .get("/api/v1/task/next");

            expect(response.body.success).toBe(true);
            expect(response.body.data.status).toBe("pending");
        });

    afterAll(async () => {
    await db.sequelize.close();
    });


});
