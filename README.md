# Wordpress Visual Studio Code Development Environment

Configures Visual Studio Code for Wordpress development.

## Usage

1. Create repo from this template
1. Run

``` sh
composer install
```

to add Wordpress stubs

1. Install all suggested extensions

1. Run

``` sh
docker-compose up
```

1. `plugins` and `themes` directories will be created within you project folder.
1. Add your plugin files and remove all unnesessary plugins and themes from these folders.
1. Set the `PLUGIN_NAME` environment variable if you are developing plugin
1. Set the `THEME_NAME` environment variable if you are developing theme
1. Set plugin or theme prefix in `phpcs.xml.dist`
``` xml
<property name="prefixes" type="array" value="CHILD_THEME, CHILD_TEXT_DOMAIN, %%you plugin or theme prefix%%" />
```
1. Now you can place all your assets to the `src` folder and webpack will build them into one `main.js` file and place it in your plugin and/or theme assets folder
1. To run webpack use

``` sh
npm run watch
```

or

``` sh
npm run build
```
