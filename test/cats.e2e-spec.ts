import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { CatsModule } from './../src/cats/cats.module'
import { CatsService } from './../src/cats/cats.service'
import { HttpStatus, INestApplication } from '@nestjs/common'

describe('Cats (e2e)', () => {
    let app: INestApplication
    let catsService = { findAll: () => ['test'] }

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [CatsModule],
        })
            .overrideProvider(CatsService)
            .useValue(catsService)
            .compile()

        app = moduleRef.createNestApplication()
        await app.init()
    })

    it(`/GET cats`, () => {
        return request(app.getHttpServer())
            .get('/cats')
            .expect(HttpStatus.OK)
            .expect({
                data: catsService.findAll(),
            })
    })

    afterAll(async () => {
        await app.close()
    })
})
