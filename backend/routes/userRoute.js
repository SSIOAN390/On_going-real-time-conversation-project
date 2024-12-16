import express from "express";

const router = express.router();

router.get("/", getUsersForSidebar);

export default router;
