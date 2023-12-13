# ShoppingApp

Main focus is on functionality rather then UI.

### Major versions

- `react` 18.2.0
- `react-native` 0.73.0

### Directory Structure (src)

Root directory structure is present at the bottom.

- [assets](/src/assets) Contains all static assets like pngs.
- [components](/src/components) Contains components to render UI of single items.
- [containers](/src/containers) Contains components to communicate with API / Redux and pass data to UI respective component using FlatList or any other component.
- [navigation](/src/navigation) Contains router and navigation setup.
- [screens](/src/screens) Contains UI screens to render respective container.
- [store](/src/store) Contains redux setup.
- [utils](/src/utils) Contains external libs and utilities.

### Redux setup

Ducks pattern is used for redux setup using `@reduxjs/toolkit`.
[entities](src/store/entities) folder contains redux setup for each specific module with the specific file name. Each file `contains` `actions`, `reducers`, `functions/callbacks` and `selectors`.

### Tests cases

`Jest` is used for writing test cases. `__tests__` folder contains all test cases. There are 3 modules in [__tests__](__tests__) folder.

- [MenuListContainer.test.tsx](__tests__/MenuListContainer.test.tsx) contains 2 tests for main menu rendering.
- [ProductListContainer.test.tsx](__tests__/ProductListContainer.test.tsx) contains 2 tests for products rendering and verifying updates.
- [CartContainer.test.tsx](__tests__/CartContainer.test.tsx) contains 3 tests for cart rendering, adding and updating item quantity.

### Major libraries

- `@react-navigation`
- `@reduxjs/toolkit`
- `apisauce`
- `react-redux`

### Directory Structure (Root)

```
├── __test__
├── android
├── configurations
| ├── AppConfig.tsx
├── ios
├── node_modules
├── src
| ├── assets
| ├── components
| | |── cart ──> **Item.tsx
| | |── menu ──> **Item.tsx
| | |── product ──> **Item.tsx
| | └── Header.tsx
| ├── containers
| | |── cart ──> **Container.tsx
| | |── menu ──> **Container.tsx
| | |── product ──> **Container.tsx
| ├── navigation
| ├── screens
| | |── cart ──> **Screen.tsx
| | |── home ──> **Screen.tsx
| | |── menu ──> **Screen.tsx
| | |── product ──> **Screen.tsx
| ├── store
| | |── datasource ──> Api.tsx
| | |── entities ──> **.tsx
| | |── middlewares ──> DataSource.tsx
| | |── ConfigureStore.tsx
| | └── Reducers.tsx
| ├── navigation
| | └── Router.tsx
| └── utils
| └── ToastMessage.tsx
├── .eslintrc.js
├── .prettierrc.js
├── .watchmanconfig
├── App.tsx
├── babel.config.js
├── Gemfile
├── index.js
├── jest.config.js
├── jest.setup.js
├── metro.config.js
├── package.json
├── react-native.config.js
├── README.md
├── tsconfig.json
└── yarn.lock

```
