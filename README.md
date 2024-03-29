# Сервис обращений пользователей

Задача на разработку: Разработать приложение «Сервис обращений пользователей»
Описание:
Сервис представляет собой страницу, на которой пользователь может оставить обращение разработчикам и посмотреть уже имеющиеся обращения со статусом их выполнения.
Приложение должно состоять из клиентской и серверной частей.

## ТЗ

Для верстки клиента используйте макет Figma (для этого продублируйте проект и работайте с копией):
https://www.figma.com/file/VNto0PxDJv2EC2oYlAFx6f/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-_2?type=design&node-id=0-1&mode=design&t=tmcGrnz5WmHvJ2eV-0

Для создания обращения необходимо нажать на кнопку «создать обращение».
После этого в отдельном окне открывается форма для заполнения данных в обращении.
Автор указывает свое имя, выбирает тип обращение и описывает его.
Обращения могут быть нескольких типов:

- Ошибка
- Замечание
- Рекомендация

После нажатия на кнопку «Отправить», обращение попадает на бэкенд, разбирается и кладется в фиктивную базу данных (для упрощения – записывает в json). Если удастся подключить базу данных, это будет плюсом.
При этом на фронтенде новое обращение появляется в таблице обращений со статусом «В очереди».
Статусы обращений могут быть:

- В очереди
- В работе
- Готово

Все обращения отображаются в таблице с возможностью фильтрации по столбцам: «Дата», «Автор», «Тип», «Статус».
Дополнительная информация по каждому обращению отображается в модальном окне, которое открывается при нажатии на обращение.

### Задача на frontend: Разработать функциональность «Просмотр обращений и создание нового обращений»

1. Верстка страницы по макету в figma (см выше) или по своему макету;
2. Реализовать store приложения;
3. Реализация отправки и получение информации с бэкенда;
4. Обработка ошибок.
5. TypeScript.

### Дополнительно (будет плюсом):

- сборщик модулей webpack;
- адаптивная верстка;
- использование css-модулей;
- виртуализация таблицы;
- валидация форм.
- реализация клиентской часть в виде микрофронтенда с использованием webpack module federation;
- контейнеризация клиентской и серверной частей (Docker), и их запуск с помощью Docker-compose;
- тестирование функциональности сервиса.

## Работа сервиса

Запуск приложения производится по скрипту "start" (например, `npm run start`).
За данными серверной части (API) в соответствии с файлом `.env` сервис обращается по адресу `http://127.0.0.1:3005`

