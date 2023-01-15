import express, { Request, Response } from "express"

import UserRoute from "./routes/user.router"

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.json({
    routes: {
      "/users": {
        "/": {
          GET: "Get all users",
          POST: "Create a new user"
        },
        "/:id": {
          GET: "Get a user by id",
          PATCH: "Update a user by id",
          DELETE: "Delete a user by id"    
        }
      }
    }
  })
})

app.use("/users", UserRoute)

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})
