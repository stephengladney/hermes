import { Request, Response, Router } from "express"
import axios from "axios"
import * as qs from "querystring"

const payload = {
  client_id: process.env.SLACK_CLIENT_ID,
  client_secret: process.env.SLACK_CLIENT_SECRET,
  redirect_uri: "https://b54635b08710.ngrok.io/api/auth/redirect",
}

function exchangeCodeForToken(code: string) {
  return axios.post(
    "https://slack.com/api/oauth.v2.access",
    qs.stringify({ code, ...payload }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  )
}

export default function AuthRouter() {
  let router = Router()

  router.get("/redirect", async (req: Request, res: Response) => {
    const code = req.query.code as string
    try {
      const token = (await exchangeCodeForToken(code)).data
      console.log(token)
      res.send(token)
    } catch (err) {
      console.log(err)
    }
  })
  return router
}
