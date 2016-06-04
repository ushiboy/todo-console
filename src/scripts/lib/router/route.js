import Path from 'path-parser';

export default function route(path, handler, action) {
  const matcher = new Path(path);
  return {
    matcher,
    build: matcher.build.bind(matcher),
    path,
    handler,
    action
  };
}
