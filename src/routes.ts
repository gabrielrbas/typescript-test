import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
      name: "Gabriel",
      duration: 10,
      educator: "Ali"
  })
  return response.send()
}