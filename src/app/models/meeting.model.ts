import { TeacherModel } from "./teacher.model";

export interface MeetingModel {
  id: number | null,
  teacher: TeacherModel | null,
  teacherId: string,
  date: string,
  parentName: string,
}
