export const isSuperAdmin = ({ req: { user } }: any) => {
  return user?.role === 'super_admin'
}
