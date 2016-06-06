import { NAVIGATE } from './constants';

export function navigate(href) {
  return Promise.resolve({
    type: NAVIGATE,
    payload: {
      href
    }
  });
}
