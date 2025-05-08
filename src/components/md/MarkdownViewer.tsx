// MarkdownViewer.tsx
import React, { useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';
import 'highlight.js/styles/github.css'; // 可以换成你喜欢的主题
import './MarkdownViewer.css'; // 自定义样式，见下方

const md = new MarkdownIt({
    html: true,
    highlight: (str, lang) => {
        const langClass = lang && hljs.getLanguage(lang) ? `language-${lang}` : '';
        const highlighted = lang ? hljs.highlight(str, { language: lang }).value : md.utils.escapeHtml(str);
        return `
      <div class="code-block-wrapper">
        <button class="copy-btn" data-code="${encodeURIComponent(str)}">复制</button>
        <pre><code class="hljs ${langClass}">${highlighted}</code></pre>
      </div>
    `;
    },
});

interface Props {
    content: string;
}

const MarkdownViewer: React.FC<Props> = ({ content }) => {
    useEffect(() => {
        const buttons = document.querySelectorAll('.copy-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const code = decodeURIComponent(btn.getAttribute('data-code') || '');
                navigator.clipboard.writeText(code).then(() => {
                    btn.textContent = '已复制';
                    setTimeout(() => (btn.textContent = '复制'), 1000);
                });
            });
        });
    }, [content]);

    const rendered = DOMPurify.sanitize(md.render(content));

    return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: rendered }} />;
};

export default MarkdownViewer;
