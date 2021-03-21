import { Cat } from './cats.entity'

export const catsProviders = [
    {
        provide: 'CATS_REPOSITORY',
        useValue: Cat,
    },
]
