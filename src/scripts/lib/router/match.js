export default function match(path, routes) {
  const matched = routes.find(route => route.matcher.match(path) != null);
  if (matched) {
    return {
      handler: matched.handler,
      path: matched.path,
      action: matched.action
    };
  }
}
