export const isContentManager = ({ req: { user } }: any) => {
  return user?.role === 'super_admin' || user?.role === 'admin' || user?.role === 'content_manager'
}
