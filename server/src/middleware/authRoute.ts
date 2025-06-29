import { NextFunction, Request, Response } from "express";

export function authRoute(req: Request, res: Response, next: NextFunction) {
    if (!req.session.user_id) {
        res.status(401).json({ error: "You are not logged in" });
        return;
    }
    next();
}
