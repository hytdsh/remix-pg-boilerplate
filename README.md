# remix-pg-boilerplate

Remix と PostgreSQL を使うボイラープレートです。

# やった事（だいたいの順番）

## `npx remix vite:dev` が動くまで

1. `compose.yml` は Copilot に聞きながら作成しました。
1. `.gitignore` は GitHub の gitignore 集をベースに作成しました。
1. `package.json` は `npm init -y` で作成されるものを出発点にしました。

1. https://remix.run/docs/en/main/start/quickstart を参考に、`npm i @remix-run/node @remix-run/react @remix-run/serve isbot@4 react react-dom` を実行しました。  
1. `npm i -D @remix-run/dev vite` を実行しました。

1. さらに TypeScript 化するために、`npm i -D typescript ts-node @types/node` を実行しました。
1. Copilot に従い、`package.json` の `"main": ` を `"main": "index.tx"` に書き換えました。

1. `vite.config.ts` と `app/root.tsx` は https://remix.run/docs/en/main/start/quickstart の `vite.config.js` と `app/root.jsx` を TypeScript と見立ててそのままコピーしました。
1. `tsconfig.json` は https://remix.run/docs/en/main/guides/typescript からコピーしました。

1. https://remix.run/docs/en/main/start/quickstart に従い `package.json` に `"type": "module"` を追加しました。

1. `root.tsx` で VSCode が `Cannot find name 'React'. ts(2304)` と言うワーニング？エラー？を出したので、Copilotに聞いて `npm install --save-dev @types/react @types/react-dom` を実行しました。これで VSCode を再起動したところエラーは消えました。
1. また、この `@types/react` と `@types/react-dom` は https://remix.run/docs/en/main/guides/typescript にも記載がありました。

ここまでやって

```
npx remix vite:dev
npx remix vite:build && npx remix-serve build/server/index.js
```

が動くようになりました。

1. `compose.yml` から簡単に呼ぶために `package.json` に script を追加しました。

## UnoCSS の導入

1. `npm i -D unocss` しました。
1. `uno.config.ts` を作り `vite.config.ts` を調整しました。
1. `root.tsx` を更新して、`app/routes/_index.tsx` を作成しました。これには https://github.com/unocss/unocss/tree/main/examples/remix を参照しています。

ここまでやって `http://localhost:5173/` が表示されるようになりましたが、CSSが当たっているように見えないので更に調整しました。

これには再度 https://github.com/unocss/unocss/tree/main/examples/remix を参照しています。

1. `npm i -D vite-tsconfig-paths` しました。
1. `vite.config.ts` を調整して `vite-tsconfig.paths` を使うようにしました。
1. `uno.config.ts` を調整して使用するプリセットを明示しました。

ここまでやってCSSが適用されるようになりました。

## UnoCSS の修正

UnoCSSのViteプラグインを導入した。
