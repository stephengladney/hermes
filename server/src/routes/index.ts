import { Request, Response, Router } from "express"
import apiRouter from "./api"
import slackbotRouter from "./slackbot"
import webhooksRouter from "./webhooks"
import * as path from "path"

const router = Router()

router.use("/api", apiRouter)
router.use("/slackbot", slackbotRouter)
router.use("/webhooks", webhooksRouter)

router.get("/*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "../../../client/build/index.html"))
})

export default router
