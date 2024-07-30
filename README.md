# Оглавление

0. [Минимальные требования перед запуском проекта](#Минимальные-требования-перед-запуском-проекта)
1. [Используемый стек](#Используемый-стек)
2. [Code style](#Code-style)
3. [Как включить авто форматирование кода в различных IDE](#Как-включить-авто-форматирование-кода-в-различных-IDE)
4. [Структура проекта](#Структура-проекта)
5. [Команды](#Команды)
6. [](#)

# Минимальные требования перед запуском проекта

Ознакомиться с [используемым стеком](#Используемый-стек), хотя бы частично.

Установить минимальную версию `Node.js`: v18.20.4 (LTS)

Установить минимальную версию `npm`: v10.7.0 (Latest)

# Используемый стек

- Фреймворк - [nuxt 3 @3.12.4](https://nuxt.com/docs/getting-started/introduction) 
- Язык - [typescript @5.5.3](https://www.typescriptlang.org/docs/)
- Глобальное хранилище - [@pinia/nuxt @0.5.1](https://nuxt.com/modules/pinia)
- ui-kit - [shadcn-nuxt @0.10.4](https://www.shadcn-vue.com/docs/installation/nuxt.html)
- Линтеры - [@nuxt/eslint @0.3.13](https://eslint.nuxt.com/), [husky @9.1.2](https://github.com/typicode/husky), [lint-staged @15.2.7](https://github.com/lint-staged/lint-staged)
- Препроцессор - [SASS @1.77.8](https://sass-lang.com/)

# Code style

Несмотря на то, что на проекте используется автоматическое форматирование кода (как его включить [читать тут](#Как-включить-авто-форматирование-кода-в-различных-IDE)), есть вещи которые нужно контролировать самому **(иначе получите втык от ревьюера)**: 

- Формат имен файлов - **kebab-case** 
- Формат названий констант - **SCREAM_CASE**
- Формат названий функций и переменных - **camelCase**
- Формат названий CSS селекторов - [БЭМ](https://ru.bem.info/methodology/css/)

# Как включить авто форматирование кода в различных IDE

## VS Code

1. Скачать плагин [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. В настройках пользователя `VS Code` (`settings.json`) добавить следующие параметры:
```json
{
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.run": "onSave"
}
```
3. Перезапустить `IDE`

## Webstorm

1. Зайти в настройки `Settings`
2. Вбить в поиске `ESLint`
3. Внутри `ESLint` выбрать пункт `Automatic ESLint configuration` и поставить галочку в графе `Run eslint --fix on save`
4. Перезапустить `IDE`

Теперь при сохранении файла будет выполняться авто форматирование кода.

# Структура проекта

В этом разделе будет подробно (по возможности) описана структура проекта, чтобы не возникало вопросов, что, где и почему

Общая структура проекта будет выглядеть следующим образом:

```mermaid
graph TD;
    nuxt-template-->assets;
    nuxt-template-->components;
    nuxt-template-->composables;
    nuxt-template-->layouts;
    nuxt-template-->pages;
    nuxt-template-->public;
    nuxt-template-->server;
    nuxt-template-->utils;
    assets-->icons;
    assets-->scss;
    scss-->base;
    scss-->helpers;
    scss-->layout;
    scss-->vendors;
    icons-->16;
    icons-->24;
    icons-->32;
    public-->image;
```

Дальше разберем каждую по отдельности

## assets/

В данной директории будут находиться иконки и стили, которые доступны всему проекту

### icons/

Иконки (only SVG) разделяем по размерам, т.е. 16/20/24/32 и т.д. в пикселях

```
icons/
|
|- 16/
|
|- 24/
|
|- 32/
```

### scss/

Все файлы с расширением `.scss` начинаются с префикса `_`, за исключением `main.scss` - он является основным.

Директория разделена на 4 подпапки:

- base - базовые стили, которые применяются ко всем элементам на сайте
- helpers - вспомогательные стили, которые облегчают разработку, такие как миксины, переменные и т.д.
- layout - стили для разметки сайта
- vendors - стили для внешних библиотек или фреймворков

```
scss/
|
|- base/
|  |- _normalize.scss      // Стандартные стили
|  |- _typography.scss     // Типография: h1-h4, p и т.д.
|
|- helpers/
|  |- _mixins.scss         // Миксины SCSS
|  |- _variables.scss      // Переменные цветов, размеров и т.д.
|
|- layout/ (по необходимости)
|  |- _header.scss         // Header
|  |- _footer.scss         // Footer
|  |- _sidebar.scss        // Sidebar
|
|- vendors/ (по необходимости)
|  |- _notifications.scss  // Notifications
|
- main.scss                // Главный SCSS файл
```
# Команды

## Установка

Обязательно установите зависимости:

```bash
npm install
```

## Запуск локальной версии

Запустите сервер разработки на `http://localhost:3000` (если не занят):

```bash
npm run dev
```

## Сборка проекта

Сборка для продакшена:

```bash
npm run build
```

Локальный предварительный просмотр сборки:

```bash
npm run preview
```

Для получения дополнительной информации ознакомьтесь с [документацией по развертыванию](https://nuxt.com/docs/getting-started/deployment).
