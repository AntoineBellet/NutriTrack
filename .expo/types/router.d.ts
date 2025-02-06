/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/sign-in` | `/sign-in`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/sign-up` | `/sign-up`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/add` | `/add`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/camera` | `/camera`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/indexShop` | `/indexShop`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/[id]` | `/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/sign-in` | `/sign-in`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/sign-up` | `/sign-up`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/add` | `/add`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/camera` | `/camera`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/indexShop` | `/indexShop`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/[id]` | `/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/sign-in${`?${string}` | `#${string}` | ''}` | `/sign-in${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/sign-up${`?${string}` | `#${string}` | ''}` | `/sign-up${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/add${`?${string}` | `#${string}` | ''}` | `/add${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/camera${`?${string}` | `#${string}` | ''}` | `/camera${`?${string}` | `#${string}` | ''}` | `${'/(main)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/indexShop${`?${string}` | `#${string}` | ''}` | `/indexShop${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/sign-in` | `/sign-in`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/sign-up` | `/sign-up`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/add` | `/add`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/camera` | `/camera`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/indexShop` | `/indexShop`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | `${'/(main)'}/${Router.SingleRoutePart<T>}` | `/${Router.SingleRoutePart<T>}` | { pathname: `${'/(main)'}/[id]` | `/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
