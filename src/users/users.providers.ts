import { User } from './user.entity'
import { USER_REPOSITORY } from 'src/utils/constants'

export const userProviders = [
    {
        provide: USER_REPOSITORY,
        useValue: User,
    },
]
