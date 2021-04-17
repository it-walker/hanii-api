import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { LoggingInterceptor } from './common/middleware/logging.interceptor'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Hanii-api')
        .setDescription('Hanii-api')
        .setVersion('1.0')
        .addTag('20210401')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)

    // global endpoints prefix
    app.setGlobalPrefix('hanii-api/v1')
    app.useGlobalPipes(new ValidationPipe())
    app.useGlobalInterceptors(new LoggingInterceptor())
    await app.listen(3002)
}
bootstrap()
