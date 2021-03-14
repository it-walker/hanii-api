import { Test } from '@nestjs/testing'
import { HttpStatus, INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'

describe('AppController (e2e)', () => {
    let app: INestApplication

    beforeAll(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [AppModule],
        }).compile()

        app = moduleFixture.createNestApplication()
        await app.init()
    })

    it('/ (GET)', () => {
        return request(app.getHttpServer()).get('/').expect(HttpStatus.OK)
        // ., { message: 'Hello World!' }, done)
    })

    afterAll(async () => {
        await app.close()
    })
})
