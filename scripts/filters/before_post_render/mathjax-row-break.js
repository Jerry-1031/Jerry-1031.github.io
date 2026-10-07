'use strict';

const rowBreakToken = 'HEXOMATHROWBREAKTOKEN';
const mathExpression = /\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g;

function protectMathRowBreaks(data) {
  data.content = data.content.replace(mathExpression, expression => {
    return expression.replace(/\\\\/g, rowBreakToken);
  });
  return data;
}

function restoreMathRowBreaks(data) {
  data.content = data.content.replace(new RegExp(rowBreakToken, 'g'), '\\\\');
  return data;
}

hexo.extend.filter.register('before_post_render', protectMathRowBreaks, 4);
hexo.extend.filter.register('after_post_render', restoreMathRowBreaks, 5);
