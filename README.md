# Vite + Tailwind CSS Starter

> A [Tailwind CSS](http://tailwindcss.com/) starter template for [Vite](https://github.com/vitejs/vite)

## Tailwind UI Users

If you have access to [Tailwind UI](https://tailwindui.com), follow these steps to add it:

1. Install first-party plugins:

```sh
yarn add @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
```

2. Add the plugins to `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
```

## Installation

```sh
yarn
```

## Development

```sh
yarn dev
```

## Build

```sh
yarn build
```
