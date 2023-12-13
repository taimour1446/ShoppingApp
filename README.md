# ShoppingApp

Main focus is on functionality rather then UI.

### Major versions

- `react` 18.2.0
- `react-native` 0.73.0

### Directory Structure (src)

Root directory structure is present at the bottom.

- `assets` Contains all static assets like pngs.
- `components` Contains components to render UI of single items.
- `containers` Contains components to communicate with API / Redux and pass data to UI respective component using FlatList or any other component.
- `navigation` Contains router and navigation setup.
- `screens` Contains UI screens to render respective container.
- `store` Contains redux setup.
- `utils` Contains external libs and utilities.

### Redux setup

Ducks pattern is used for redux setup using `@reduxjs/toolkit`.
`entities` folder contains redux setup for each specific module with specific file name. Each file `contains` `actions`, `reducers`, `functions / callbacks` and `selectors`.

### Tests cases

`Jest` is used for writin test cases. `__test__` folder contains all test cases. There are 3 modules in `__test__` folder.

- `MenuListContainer.test.tsx` contains 2 tests for main menu rendering.
- `ProductListContainer.test.tsx` contains 2 tests for products rendering and verify updates.
- `CartContainer.test.tsx` contains 3 tests for cart rendering, adding and updating item quantity.

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
