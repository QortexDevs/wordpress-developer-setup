# Wordpress development environment

# Usage

1. Create repo from this template
2. Run

``` sh
composer install
```

to add Wordpress stubs

3. Run

``` sh
docker-compose up
```

4. `plugins` and `themes` directories will be created within you project folder.
5. Add your plugin files and remove all unnesessary plugins and themes from these folders.
6. Set the `PLUGIN_NAME` environment variable if you are developing plugin
7. Set the `THEME_NAME` environment variable if you are developing theme
8. Now you can place all your assets to the `src` folder and webpack will build them into one `main.js` file and place it in your plugin and/or theme assets folder
9. To run webpack use

``` sh
npm run watch
```

or

``` sh
npm run build
```
