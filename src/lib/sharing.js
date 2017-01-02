/* @flow */

export function facebookUrl(link: string) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(link)}`;
}

export function twitterUrl(link: string, text: string) {
  return `https://twitter.com/intent/tweet?text=${encodeURI(text)}&url=&original_referer=${encodeURI(link)}`;
}
