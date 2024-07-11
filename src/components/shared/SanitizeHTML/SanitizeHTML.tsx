import { HTMLAttributes, createElement } from 'react';
import sanitize from 'sanitize-html';

type SanitizeHTMLProps = {
  children: string;
  tag: string;
} & HTMLAttributes<HTMLElement>;

export const SanitizeHTML = ({ children, tag, ...rest }: SanitizeHTMLProps) => {
  const sanitizedHTML = sanitize(children, {
    allowedTags: ['b', 'i', 'em', 'strong'],
  });

  return createElement(tag, { ...rest }, sanitizedHTML);
};
