import { Router } from "express";
import { ExpressServer } from "./Server/ExpressServer";

const router = Router()

router.get('/pomodoro', (_, res) => {
    return res.send([{
        Date: new Date(),
        Title: "Example",
        Events: [
            {
                Type: 'start',
                Time: new Date()
            },
            {
                Type: 'end',
                Time: new Date()
            }

        ]
    }])
})

const app = new ExpressServer(3000, router);
app.Run()

