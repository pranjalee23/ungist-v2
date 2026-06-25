export const isOperationsManager = ({ req: { user } }: any) => {
  return (
    user?.role === 'super_admin' || user?.role === 'admin' || user?.role === 'operations_manager'
  )
}
