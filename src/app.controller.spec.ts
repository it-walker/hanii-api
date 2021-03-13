import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

jest.mock('./app.service')
const AppServiceMock = AppService as jest.Mock

const expectedMessage = 'test message'
AppServiceMock.mockImplementation(() => {
    return {
        getHello: () => {
            return expectedMessage
        },
    }
})

function mockClear() {
    AppServiceMock.mockClear()
}

describe('AppController', () => {
    let appController: AppController

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [
                AppService,
                { provide: AppService, useClass: AppServiceMock },
            ],
        }).compile()

        appController = app.get<AppController>(AppController)
        mockClear()
    })

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe(expectedMessage)
        })
    })
})
