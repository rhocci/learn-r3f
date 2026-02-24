import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 0,
});
