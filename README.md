# embed_diagnose

A diagnostic maker widget that can be embedded in some websites.

# how to use

## sample

Please read [it](https://github.com/engclass-z/embed_diagnose/blob/main/debug/index.ts).

## esm

1. `TODO: npm publish`

```
import EmbedDiagnose from 'embed_diagnose'

EmbedDiagnose({
  elementId: 'someId',
  param: {
    ...
  }
})
```

## umd

1. Download [js and css](https://github.com/engclass-z/embed_diagnose/blob/main/minify).
1. Load these files in your website.
1. Set script with reference to [it](https://github.com/engclass-z/embed_diagnose/blob/main/src/app/param.ts).

```
<html>
<head>
  ...
  <link href="embed_diagnose.css" rel="stylesheet">
  ...
</head>
<body>
  ...
  <div id="someId"></div>
  ...
  <script type="text/javascript" src="embed_diagnose.min.js"></script>
  <script>
    EmbedDiagnose({
      elementId: 'someId',
      param: {
        ...
      }
    })
  </script>
</body>
</html>
```

# development

Initial setting

```
$ yarn
```

Build project

```
$ yarn build
```

Debug project

```
$ yarn debug
```
