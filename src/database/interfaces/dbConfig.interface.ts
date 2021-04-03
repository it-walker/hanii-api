export interface IDatabaseConfigAttributes {
    username?: string
    password?: string
    database?: string
    host?: string
    port?: string | number
    dialect?: string
    urlDatabase?: string
    autoLoadModels?: boolean
    synchronize?: boolean
}

export interface IDatabaseConfig {
    development: IDatabaseConfigAttributes
    test: IDatabaseConfigAttributes
    production: IDatabaseConfigAttributes
}
