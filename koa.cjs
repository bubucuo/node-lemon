const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello KOA";
});

app.listen(3000);

// const Koa = require("koa");
// const app = new Koa();

// // logger

// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.get("X-Response-Time");
//   console.log(`欧克${ctx.method} ${ctx.url} - ${rt}`);
// });

// // x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set("X-Response-Time", `${ms}ms`);
// });

// // response

// app.use(async (ctx) => {
//   ctx.body = "Hello Koa";
//   console.log(
//     "%c [  ]-34",
//     "font-size:13px; background:pink; color:#bf2c9f;",
//     ctx
//   );
// });

// app.listen(3000);
