# Core (Must have Vue.js minimal files)

## What is it ?

It's a folder that contains vitals mixins, scss, directives
and components to create a reactive website.
It's modular. Import just what you need.

- **SCSS** for a set of custom properties (variables).

For Vue.js usage:

- **Mixins** for easy component customisation with SCSS custom properties.
- **Directives** for must have reactivity

- And some ready for use customizable **components**

## What it contains

- SCSS functions
- Mixins to inject in your components (colors ,shape, shades)
- Directives (scroll)

## How to use ?

You may import only the part you need:

First import the scss you need.
Folow these [instructions](https://github.com/Areskul/scss#Scss)

Then import the mixins you need.
Folow these [instructions](https://github.com/Areskul/mixins#Mixins)

```javascript
import { color, elevation, border } from "core/mixins/styles";
export default {
  mixins: [color, elevation, border],
};
```

Then import the directives you need.
