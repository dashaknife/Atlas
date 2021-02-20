## How to create files  
* For every component create directory. Name of directory must be
  like a component name started with upper case.
* Each directory consist of 3 files: _styles.ts_ for styles, _index.ts_
  for export and _Component.tsx_ for component.
  
### Example
```
componets
    BaseComponent
        BaseComponent.tsx  
        index.ts
        styles.ts  
```

### _index.ts_
```
export {default} from "./BaseComponent";
```