import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
} from 'sequelize-typescript'

@Table({ tableName: 'users' })
export class User extends Model<User> {
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    public id: number

    @Column({
        allowNull: false,
    })
    name: string

    @Column({
        allowNull: false,
    })
    age: number

    @Column({
        allowNull: false,
        validate: {
            isEmail: true,
        },
    })
    email: string

    @CreatedAt public createdAt: Date

    @UpdatedAt public updatedAt: Date

    @DeletedAt public deletedAt: Date
}
