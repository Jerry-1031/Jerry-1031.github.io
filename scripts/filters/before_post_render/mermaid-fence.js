'use strict';

// NexT renders Mermaid tag blocks, while Markdown fences are handled as plain code.
const mermaidFence = /(^|\r?\n)[ \t]*```mermaid[ \t]*\r?\n([\s\S]*?)\r?\n[ \t]*```(?=\r?\n|$)/gi;

hexo.extend.filter.register('before_post_render', data => {
  data.content = data.content.replace(mermaidFence, (_match, lineStart, diagram) => {
    return `${lineStart}{% mermaid %}\n${diagram}\n{% endmermaid %}`;
  });
  return data;
}, 5);
