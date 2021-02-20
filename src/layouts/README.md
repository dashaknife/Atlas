## What is layout
Layout is a component for constant part of the page, which doesn't change
when you go to another page.

## How to create files
* For every layout create directory. Name of directory must be
  like a layout name started with upper case.
* Each directory consist of 3 files: _styles.ts_ for styles, _index.ts_
  for export and _Layout.tsx_ for a layout.

### Example
```
layouts
    BaseLayout
        BaseLayout.tsx  
        index.ts
        styles.ts  
```

### _index.ts_
```
export {default} from "./BaseLayout";
```