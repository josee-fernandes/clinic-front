import { data } from '@/services/data'

type TGetUserFn = () => Promise<IUser>

export const getUser: TGetUserFn = async () => {
  return data.user
}
