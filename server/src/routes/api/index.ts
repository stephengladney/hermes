const router = require("express").Router()
import PeopleRouter from "./people"
import TeamsRouter from "./teams"
import TeamRolesRouter from "./team_roles"
import AuthRouter from "./auth"

router.use("/auth", AuthRouter())
router.use("/people", PeopleRouter)
router.use("/teams", TeamsRouter)
router.use("/team_roles", TeamRolesRouter)

export default router
