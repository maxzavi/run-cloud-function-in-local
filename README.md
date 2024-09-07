# Run Cloud Function in local

## Node.js Project

In new folder, create project using:

```cmd
npm init -y
```

Add dependency Google Cloud Function framework

```cmd
npm i @google-cloud/functions-framework 
```

## Run

Run project using:

```cmd
npx @google-cloud/functions-framework --target=demo
```

Argument **target** , is function name, in this case: **demo**

```js
functions.http ('demo', (req, res)=>{
```
