## MIGRATE

CRIAR = npx sequelize migration:create --name=create_name
executar = npx sequelize db:migrate

## CONFIGURAR AMBIENTE PARA MELHOR PERFORMANCE DE DESENVOLVIMENTO

install => yarn add eslint -D ou npm install eslint -D
startar => yarn run eslint --init

1 - Instale o Prettier

2 - adicione as linhas:
"editor.formatOnSave": true,
"prettier.eslintIntegration": true,
