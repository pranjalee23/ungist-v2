export const isAdmin = ({ req: { user } }: any) => {
  return user?.role === 'super_admin' || user?.role === 'admin'
}
