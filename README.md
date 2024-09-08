# remix-pg-boilerplate

Remix と PostgreSQL を使うボイラープレートです。

# やった事（だいたいの順番）

`compose.yml` は Copilot に聞きながら作成しました。
`.gitignore` は GitHub の gitignore 集をベースに作成しました。
`package.json` は `npm init -y` で作成されるものを出発点にしました。

https://remix.run/docs/en/main/start/quickstart を参考に、
`npm i @remix-run/node @remix-run/react @remix-run/serve isbot@4 react react-dom` を実行しました。
`npm i -D @remix-run/dev vite` を実行しました。

さらに TypeScript 化するために、
`npm i -D typescript ts-node @types/node` を実行しました。
Copilot に従い、`package.json` の `"main": ` を `"main": "index.tx"` に書き換えました。

`vite.config.ts` と `app/root.tsx` は https://remix.run/docs/en/main/start/quickstart の `vite.config.js` と `app/root.jsx` を TypeScript と見立ててそのままコピーしました。
`tsconfig.json` は https://remix.run/docs/en/main/guides/typescript からコピーしました。

https://remix.run/docs/en/main/start/quickstart に従い `package.json` に `"type": "module"` を追加しました。

`root.tsx` で VSCode が `Cannot find name 'React'. ts(2304)` と言うワーニング？エラー？を出したので、Copilotに聞いて `npm install --save-dev @types/react @types/react-dom` を実行しました。これで VSCode を再起動したところエラーは消えました。
また、この `@types/react` と `@types/react-dom` は https://remix.run/docs/en/main/guides/typescript にも記載がありました。

ここまでやって
`npx remix vite:dev`
`npx remix vite:build && npx remix-serve build/server/index.js`
が動くようになりました。

`compose.yml` から簡単に呼ぶために `package.json` に script を追加しました。
