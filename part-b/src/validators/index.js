import { body,  param, query} from 'express-validator';

export const createTaskValidator = [

    body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({min: 3})
    .withMessage("Title must contain minimum 3 characters"),

    body("priority")
    .optional()
    .isIn(["low","medium","high","critical"])
    .withMessage(
        "Priority must be low, medium, high or critical"
    ),

    body("status")
    .optional()
    .isIn(["pending","in_progress","completed"])
    .withMessage(
        "Status must be pending, in_progress or completed"
    ),

    body("due_date")
    .notEmpty()
    .withMessage("Due data is required")
    .isISO8601()
    .withMessage("Invalid due data format"),

    body("estimated_hours")
    .notEmpty()
    .withMessage("Estimated hours is required")
    .isNumeric()
    .withMessage("Estimated hours must be a number")
];

export const updateStatusValidator = [
    param("id")
    .isInt()
    .withMessage("Task id must be a number"),

    body("status")
    .notEmpty()
    .withMessage("status is required")
    .isIn(["pending","in_progress","completed"])
    .withMessage("InvalidStatus")
]

export const taskIdValidator = [

    param("id")
        .isInt()
        .withMessage("Task id must be a number")

];

export const taskFilterValidator = [

    query("status")
        .optional()
        .isIn(["pending","in_progress","completed"])
        .withMessage(
            "Invalid status filter"
        )

];