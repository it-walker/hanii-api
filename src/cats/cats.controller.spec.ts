import { HttpStatus } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { LoggingInterceptor } from 'src/common/middleware/logging.interceptor'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cats.interface'

jest.mock('./cats.service')
const CatsServiceMock = CatsService as jest.Mock

const baseCats: Cat[] = [
    {
        name: 'rin',
        age: 10,
        breed: '雑種',
    },
    {
        name: 'hani',
        age: 5,
        breed: '茶トラ',
    },
]

CatsServiceMock.mockImplementation(() => {
    return {
        create: (cat: Cat) => {
            return 1
        },
        findAll: () => {
            return baseCats
        },
    }
})

function mockClear() {
    CatsServiceMock.mockClear()
}

describe('CatsController', () => {
    let controller: CatsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CatsService,
                { provide: CatsService, useClass: CatsServiceMock },
                LoggingInterceptor,
            ],
            controllers: [CatsController],
        }).compile()

        controller = module.get<CatsController>(CatsController)
        mockClear()
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('create', async () => {
        const cat = {
            name: 'name',
            age: 12,
            breed: 'golden',
        }
        expect(await controller.create(cat, undefined)).toBeNull()
    })

    it('findAll()', async () => {
        const result = ['test']
        expect(await controller.findAll()).toStrictEqual(baseCats)
    })
})
