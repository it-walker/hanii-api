import { Test, TestingModule } from '@nestjs/testing'
import { AppService } from './app.service'
import { ConfigService } from './config/config.service'

jest.mock('./config/config.service')
const ConfigServiceMock = ConfigService as jest.Mock

const expectedMessage = 'test message'
ConfigServiceMock.mockImplementation(() => {
    return {
        get: () => {
            return expectedMessage
        },
    }
})

function mockClear() {
    ConfigServiceMock.mockClear()
}

describe('AppService', () => {
    let service: AppService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppService,
                { provide: ConfigService, useClass: ConfigServiceMock },
            ],
        }).compile()

        service = module.get<AppService>(AppService)
        mockClear()
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('getHello()', () => {
        it('should have deletePassword removed', () => {
            const helloSpy = jest
                .spyOn(ConfigService.prototype, 'get')
                .mockReturnValue(expectedMessage)
            expect(service.getHello()).toBe(expectedMessage)
        })
    })
})
