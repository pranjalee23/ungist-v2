export const isTeacher = ({ req: { user } }: any) => {
  return user?.role === 'super_admin' || user?.role === 'admin' || user?.role === 'teacher'
}
