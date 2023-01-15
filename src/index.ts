import express, { Request, Response } from "express"

import UserRoute from "./routes/user.router"

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World")
})

app.use("/users", UserRoute)

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})
