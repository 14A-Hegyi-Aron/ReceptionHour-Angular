import { TeacherModel } from "./teacher.model";

export interface MeetingModel {
  id: number | null,
  teacher: TeacherModel | null,
  teacherId: number | null,
  date: string,
  parentName: string,
}
