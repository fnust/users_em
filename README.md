## Инструкция по использованию 
### Установка 

- Введите в консоль команду `npm install`и дожидитесь установки пакетов необходимых зависимостей
- Далее необходимо применить миграции командой `npm run migrations:run`. Чтобы не ждать генерации миллиона пользователей, можно восстановить данные из `dump_users.sql`

### Использование 

- Серверное приложение запустится по адресу: `http://localhost:3000`.
- Реализован один эндпойнт `PUT /user/reset-problems`, который проставит флаг проблемы у пользователей в false и посчитает, сколько пользователей имело true в этом флаге.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
