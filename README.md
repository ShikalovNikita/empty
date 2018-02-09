# Init_Workplace v4.2
Шаблон помогает быстро начать вёрстку проекта.

Перед началом работы нужно установить зависимости:
```bash
npm install
```

## Templates
Шаблоны собираются из папки `templates` с помощью [Nunjucks]. Составные части лежат в `partials`. Основной шаблон лежит в `layouts/_layout.html`.

## CSS
Верстаются в `src/sass/_main.sass` и `src/sass/_common.sass`, компилируются в `build/css/app.css`. Миксины и сбросы стилей указаны в файлах `src/sass/helpers/_mixins.sass` и `src/sass/helpers/_reset.sass`

## JS
Установлен Babel, [GreenSock](https://greensock.com) (для анимаций)

## Flags
* `gulp --tunnel=[name]` or `gulp server --tunnel [name]` - Запускает Develop-сервер и позволяет легко получить доступ через прокси на удаленной машине (Powered by [Localtunnel.me](https://localtunnel.me/)). Сервис будет доступен по адресу `[name].localtunnel.me`.

## Authors
[Никита Шикалов](https://github.com/ShikalovNikita).