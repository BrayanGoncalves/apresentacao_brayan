
const configDatabase = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'senha123',
    database: 'apresentacao_brayan',
    define: {
        timestamps: true, /* Essa parametrização diz que toda tabela terá um campo created_at e outro updated_at */
        underscored: true, /* Essa parametrização diz que os nomes de colunas das tabelas serão separadas por underline. EXEMPLO: UserGroup --> user_group */
    }
}

module.exports = configDatabase;