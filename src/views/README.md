## What is view
View is a component for changeable part of the page, which change
when you go to another page.

## How to create files
* For every view create directory. Name of directory must be
  like a view name started with upper case.
* Each directory consist of 3 files: _styles.ts_ for styles, _index.ts_
  for export and _View.tsx_ for view.

### Example
```
componets
    BaseView
        BaseView.tsx  
        index.ts
        styles.ts  
```

### _index.ts_
```
export {default} from "./BaseView";
```