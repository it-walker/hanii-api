import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserAndPhoto1619168540283 implements MigrationInterface {
    name = 'UserAndPhoto1619168540283'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `gender` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
        )
        await queryRunner.query(
            'CREATE TABLE `photo` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(500) NOT NULL, `description` text NOT NULL, `filename` varchar(255) NOT NULL, `views` int NOT NULL, `isPublished` tinyint NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'
        )
        await queryRunner.query(
            'ALTER TABLE `photo` ADD CONSTRAINT `FK_4494006ff358f754d07df5ccc87` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION'
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `photo` DROP FOREIGN KEY `FK_4494006ff358f754d07df5ccc87`'
        )
        await queryRunner.query('DROP TABLE `photo`')
        await queryRunner.query('DROP TABLE `user`')
    }
}
