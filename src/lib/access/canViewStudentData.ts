export const canViewStudentData = ({ req: { user } }: any) => {
  return (
    user?.role === 'super_admin' ||
    user?.role === 'admin' ||
    user?.role === 'teacher' ||
    user?.role === 'operations_manager'
  )
}
