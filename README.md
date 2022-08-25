# repro-lib-path-issue

## Project setup
```
yarn install
```

### Repro step

Execute command 
```
yarn build
```

Explorer the dist folder, and open myLib.css.
You should see something like :
```css
@font-face{font-family:Avenir;src:url(/fonts/AvenirLTStd-Roman.4f3c9a2f.otf) format("opentype")}
```

The first slash "/" seems to be unnecessary.

When we set `publicPath: ''` in `vue.config.js`, it works fine :

```css
@font-face{font-family:Avenir;src:url(fonts/AvenirLTStd-Roman.4f3c9a2f.otf) format("opentype")}
```

### Links

- [Vue CLI publicPath documentation](https://cli.vuejs.org/config/#publicpath)
- [Vue CLI migration guide & Asset Modules](https://cli.vuejs.org/migrations/migrate-from-v4.html#vue-cli-service)
