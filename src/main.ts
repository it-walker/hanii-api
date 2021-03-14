import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { LoggingInterceptor } from './common/middleware/logging.interceptor'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())
    app.useGlobalInterceptors(new LoggingInterceptor())
    await app.listen(3002)
}
bootstrap()
