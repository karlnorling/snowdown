const { startServer } = require('snowpack');
const server = await startServer({});
const runtime = server.getServerRuntime();
const Koa = require('koa');
const app = module.exports = new Koa();

app.use(async function(ctx) {
  ctx.body = 'Hello World';
});


/*
// Advanced Example: Express + React SSR
app.use(async (req, res, next) => {
  // Server-side import our React component
  const importedComponent = await runtime.importModule('/dist/MyReactComponent.js');
  const MyReactComponent = importedComponent.exports.default;
  // Render your react component to HTML
  const html = ReactDOMServer.renderToString(React.createElement(MyReactComponent, null));
  // Load contents of index.html
  const htmlFile = fs.readFileSync('./index.html', 'utf8');
  // Inserts the rendered React HTML into our main div
  const document = htmlFile.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
  // Sends the response back to the client
  res.send(document);
});
*/