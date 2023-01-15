import { Request, Response } from "express";

import { prisma } from "@services/prisma"

export async function getAllUsers(req: Request, res: Response){
  try {
    const data = await prisma.user.findMany()

    res.json(data)
  } catch (error) {
    res.status(404).json({ message: "No users found" })
  }
}

export async function getUser(req: Request, res: Response){
  const { id } = req.params

  try {
    const data = await prisma.user.findUnique({
      where: { id }
    })

    res.json(data) 
  } catch (error) {
    res.status(404).json({ message: "User not found" })
  }
}

export async function createUser(req: Request, res: Response){
  const { email, password, name, surname, username } = req.body

  try {
    const data = await prisma.user.create({
      data: { email, password, name, surname, username }
    })

    data.password = ''

    res.json(data)
  } catch (error) {
    res.status(409).json({ message: "User already exists" })
  }
}

export async function updateUser(req: Request, res: Response){
  const { id } = req.params
  const { email, password, name, surname, username } = req.body

  try {
    const data = await prisma.user.update({
      where: { id },
      data: { email, password, name, surname, username }
    })

    data.password = ''

    res.json(data)
  } catch (error) {
    res.status(404).json({ message: "User not found" })
  }
}

export async function deleteUser(req: Request, res: Response){
  const { id } = req.params

  try {
    const data = await prisma.user.delete({
      where: { id }
    })

    res.json(data)
  } catch (error) {
    res.status(404).json({ message: "User not found" })
  }
}