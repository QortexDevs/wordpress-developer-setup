# WordPress Visual Studio Code Development Environment

Configures Visual Studio Code for WordPress development.

Includes
* [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards)
* Stylelint for CSS
* ESLint for JS
* Webpack for building frontend

Prerequisites
* [Docker](https://docs.docker.com/desktop/)
* [PHP](https://www.php.net/manual/en/install.php) (To use composer on the host machine)
* [Composer](https://getcomposer.org/)
* [NodeJS](https://nodejs.org/) (To compile assets on host machine)

## Usage

1. Create repo from this template
1. Run

```sh
composer install
```

to add WordPress stubs

1. Install all suggested extensions

1. Run

```sh
docker-compose up
```

1. `plugins` and `themes` directories will be created within you project folder.
1. Add your plugin files and remove all unnesessary plugins and themes from these folders.
1. Set the `PLUGIN_NAME` environment variable if you are developing plugin
1. Set the `THEME_NAME` environment variable if you are developing theme
1. Set plugin or theme prefix in `phpcs.xml.dist`

```xml
<property name="prefixes" type="array" value="CHILD_THEME, CHILD_TEXT_DOMAIN, %%you plugin or theme prefix%%" />
```

1. Now you can place all your assets to the `src` folder and webpack will build them into one `main.js` file and place it in your plugin and/or theme assets folder
1. To run webpack use

```sh
npm run watch
```

or

```sh
npm run build
```

# Настройки для разработки WordPress для Visual Studio Code

Настраивает проект для разработки .

Содержит
* [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards)
* Stylelint для CSS
* ESLint для JS
* Webpack для сборки фронтенда

Необходимое ПО
* [Docker](https://docs.docker.com/desktop/)
* [PHP](https://www.php.net/manual/en/install.php) (To use composer on the host machine)
* [Composer](https://getcomposer.org/)
* [NodeJS](https://nodejs.org/) (To compile assets on host machine)

## Как использовать

1. Создайте репозиторий из этого шаблона
1. Запустите 

```sh
composer install
```

чтобы установить пакеты со стандартами кодирования для Вордпресса и заглушки для автокомплита

1. Установите в Visual Studio Code все предлагаемые расширения

1. Запустите проект

```sh
docker-compose up
```

1. Папки `plugins` и `themes` будут созданы в корне проекта.
1. Добавьте в папку `plugins` код своего плагина, если разрабатываете плагин.
1. Добавьте в папку `themes` код своей темы, если разрабатываете тему.
1. Установите переменную окружения `PLUGIN_NAME` в значение названия папки с плагином, если вы разрабатываете плагин.
1. Установите переменную окружения `THEME_NAME` в значение названия папки с темой, если вы разрабатываете тему.
1. Установит перфикс плагина или темы в `phpcs.xml.dist`

```xml
<property name="prefixes" type="array" value="CHILD_THEME, CHILD_TEXT_DOMAIN, %%you plugin or theme prefix%%" />
```

1. Положите весь фронтенд в папку `src`, чтобы Webpack собрирал и складывал его в папку assets вашего плагина или темы
1. Запустите Вебпак для разработки

```sh
npm run watch
```

или для финальной сборки

```sh
npm run build
```
