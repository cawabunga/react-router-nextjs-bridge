# One way bridge between react-router and Next.js

### Installation
```sh
$ npm i react-router-nextjs-bridge
# or
$ yarn add react-router-nextjs-bridge
# or
$ pnpm add react-router-nextjs-bridge
```
The library assumes that you already have `react`, `next` and `react-router-dom` installed.


### Usage
Just wrap your application with `NextBridgeRouter` component. Your `react-router-dom` links will just work without any additional configuration.
```jsx
// pages/_app.jsx
import NextBridgeRouter from 'react-router-nextjs-bridge';

export default function MyApp({ Component, pageProps }) {
  return (
    <NextBridgeRouter>
      <Component {...pageProps} />
    </NextBridgeRouter>
  );
};
```
```jsx
// pages/index.jsx
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <Link to={'/foo'}>Go to Foo Page</Link>
  );
};
```
Clicking the link will lead to Foo Page, the location URL will change as well.


### Motivation
Say you want to migrate from from `create-react-app` to `next.js`.
Usually `react-router-dom` goes along with CRA. `react-router-dom` interfere with `next.js` router.
That's why you need to update the whole app and change links. Often such migration cannot be done in a single day.
So this library can help to do it gradually.

### Available Scripts
```pnpm test```

```pnpm build```
