import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { ContinueWithChatGPTButton } from '../dist/index.js';

test('ContinueWithChatGPTButton renders correct branding label for continue and sign-in modes', () => {
  const continueHtml = renderToString(createElement(ContinueWithChatGPTButton, { label: 'continue' }));
  assert.match(continueHtml, /<span>Continue with ChatGPT<\/span>/);

  const signInHtml = renderToString(createElement(ContinueWithChatGPTButton, { label: 'sign-in' }));
  assert.match(signInHtml, /<span>Sign in with ChatGPT<\/span>/);
  assert.doesNotMatch(signInHtml, /Sign-in with ChatGPT/);
});

test('ContinueWithChatGPTButton renders loading text when loading is true', () => {
  const loadingHtml = renderToString(createElement(ContinueWithChatGPTButton, { loading: true, label: 'sign-in' }));
  assert.match(loadingHtml, /<span>Opening ChatGPT…<\/span>/);
});
