import { Injectable } from '@nestjs/common'
import { ConfigService } from './config/config.service'
import { Sequelize } from 'sequelize-typescript'

@Injectable()
export class AppService {
    private helloMessage: string
    constructor(private configService: ConfigService) {
        this.helloMessage = this.configService.get('HELLO_MESSAGE')
    }
    getHello(): string {
        return this.helloMessage
    }
}
