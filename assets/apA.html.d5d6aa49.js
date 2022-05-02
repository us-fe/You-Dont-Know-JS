import{_ as n,d as s}from"./app.a957722f.js";const a={},p=s(`<h1 id="\u4F60\u4E0D\u61C2js-\u4F5C\u7528\u57DF\u4E0E\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4E0D\u61C2js-\u4F5C\u7528\u57DF\u4E0E\u95ED\u5305" aria-hidden="true">#</a> \u4F60\u4E0D\u61C2JS\uFF1A\u4F5C\u7528\u57DF\u4E0E\u95ED\u5305</h1><h1 id="\u9644\u5F55a-\u52A8\u6001\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u9644\u5F55a-\u52A8\u6001\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u9644\u5F55A\uFF1A\u52A8\u6001\u4F5C\u7528\u57DF</h1><p>\u5728\u7B2C\u4E8C\u7AE0\u4E2D\uFF0C\u4F5C\u4E3A\u4E0E JavaScript \u4E2D\uFF08\u4E8B\u5B9E\u4E0A\uFF0C\u5176\u4ED6\u5927\u591A\u6570\u8BED\u8A00\u4E5F\u662F\uFF09\u4F5C\u7528\u57DF\u7684\u5DE5\u4F5C\u65B9\u5F0F\u6A21\u578B \u2014\u2014 \u201C\u8BCD\u6CD5\u4F5C\u7528\u57DF\u201D\u7684\u5BF9\u6BD4\uFF0C\u6211\u4EEC\u8C08\u5230\u4E86\u201C\u52A8\u6001\u4F5C\u7528\u57DF\u201D\u3002</p><p>\u6211\u4EEC\u5C06\u7B80\u5355\u5730\u68C0\u89C6\u52A8\u6001\u4F5C\u7528\u57DF\uFF0C\u6765\u5F7B\u5E95\u8BF4\u660E\u8FD9\u79CD\u6BD4\u8F83\u3002\u4F46\u66F4\u91CD\u8981\u7684\u662F\uFF0C\u5BF9\u4E8E JavaScript \u4E2D\u7684\u53E6\u4E00\u79CD\u673A\u5236\uFF08<code>this</code>\uFF09\u6765\u8BF4\u52A8\u6001\u4F5C\u7528\u57DF\u5B9E\u9645\u4E0A\u662F\u5B83\u7684\u4E00\u4E2A\u8FD1\u4EB2\u8868\u5144\uFF0C\u6211\u4EEC\u5C06\u5728\u672C\u7CFB\u5217\u7684\u201C<em>this\u4E0E\u5BF9\u8C61\u539F\u578B</em>\u201D\u4E2D\u8BE6\u7EC6\u8BB2\u89E3\u8FD9\u79CD\u673A\u5236\u3002</p><p>\u6B63\u5982\u6211\u4EEC\u5728\u7B2C\u4E8C\u7AE0\u4E2D\u770B\u5230\u7684\uFF0C\u8BCD\u6CD5\u4F5C\u7528\u57DF\u662F\u4E00\u7EC4\u5173\u4E8E <em>\u5F15\u64CE</em> \u5982\u4F55\u67E5\u8BE2\u53D8\u91CF\u548C\u5B83\u5728\u4F55\u5904\u80FD\u591F\u627E\u5230\u53D8\u91CF\u7684\u89C4\u5219\u3002\u8BCD\u6CD5\u4F5C\u7528\u57DF\u7684\u5173\u952E\u6027\u8D28\u662F\uFF0C\u5B83\u662F\u5728\u4EE3\u7801\u7F16\u5199\u65F6\u88AB\u5B9A\u4E49\u7684\uFF08\u5047\u5B9A\u4F60\u4E0D\u4F7F\u7528 <code>eval()</code> \u6216 <code>with</code> \u4F5C\u5F0A\u7684\u8BDD\uFF09\u3002</p><p>\u52A8\u6001\u4F5C\u7528\u57DF\u770B\u8D77\u6765\u5728\u6697\u793A\uFF0C\u6709\u5145\u5206\u7684\u7406\u7531\uFF0C\u5B58\u5728\u8FD9\u6837\u4E00\u79CD\u6A21\u578B\uFF0C\u5B83\u7684\u4F5C\u7528\u57DF\u662F\u5728\u8FD0\u884C\u65F6\u88AB\u786E\u5B9A\u7684\uFF0C\u800C\u4E0D\u662F\u5728\u7F16\u5199\u65F6\u9759\u6001\u5730\u786E\u5B9A\u7684\u3002\u8BA9\u6211\u4EEC\u901A\u8FC7\u4EE3\u7801\u6765\u8BF4\u660E\u8FD9\u6837\u7684\u5B9E\u9645\u60C5\u51B5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> a <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5728 <code>foo()</code> \u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF\u4E2D\u6307\u5411 <code>a</code> \u7684 RHS \u5F15\u7528\u5C06\u88AB\u89E3\u6790\u4E3A\u5168\u5C40\u53D8\u91CF <code>a</code>\uFF0C\u5B83\u5C06\u5BFC\u81F4\u8F93\u51FA\u7ED3\u679C\u4E3A\u503C <code>2</code>\u3002</p><p>\u76F8\u6BD4\u4E4B\u4E0B\uFF0C\u52A8\u6001\u4F5C\u7528\u57DF\u672C\u8EAB\u4E0D\u5173\u5FC3\u51FD\u6570\u548C\u4F5C\u7528\u57DF\u662F\u5728\u54EA\u91CC\u548C\u5982\u4F55\u88AB\u58F0\u660E\u7684\uFF0C\u800C\u662F\u5173\u5FC3 <strong>\u5B83\u4EEC\u662F\u4ECE\u4F55\u5904\u88AB\u8C03\u7528\u7684</strong>\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5B83\u7684\u4F5C\u7528\u57DF\u94FE\u6761\u662F\u57FA\u4E8E\u8C03\u7528\u6808\u7684\uFF0C\u800C\u4E0D\u662F\u4EE3\u7801\u4E2D\u4F5C\u7528\u57DF\u7684\u5D4C\u5957\u3002</p><p>\u6240\u4EE5\uFF0C\u5982\u679C JavaScript \u62E5\u6709\u52A8\u6001\u4F5C\u7528\u57DF\uFF0C\u5F53 <code>foo()</code> \u88AB\u6267\u884C\u65F6\uFF0C<strong>\u7406\u8BBA\u4E0A</strong> \u4E0B\u9762\u7684\u4EE3\u7801\u5C06\u5F97\u51FA <code>3</code> \u4F5C\u4E3A\u8F93\u51FA\u7ED3\u679C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> a <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3  (\u4E0D\u662F 2!)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8FD9\u600E\u4E48\u53EF\u80FD\uFF1F\u56E0\u4E3A\u5F53 <code>foo()</code> \u4E0D\u80FD\u4E3A <code>a</code> \u89E3\u6790\u51FA\u4E00\u4E2A\u53D8\u91CF\u5F15\u7528\u65F6\uFF0C\u5B83\u4E0D\u4F1A\u6CBF\u7740\u5D4C\u5957\u7684\uFF08\u8BCD\u6CD5\uFF09\u4F5C\u7528\u57DF\u94FE\u5411\u4E0A\u8D70\u4E00\u5C42\uFF0C\u800C\u662F\u6CBF\u7740\u8C03\u7528\u6808\u5411\u4E0A\u8D70\uFF0C\u4EE5\u627E\u5230 <code>foo()</code> \u662F <em>\u4ECE\u4F55\u5904</em> \u88AB\u8C03\u7528\u7684\u3002\u56E0\u4E3A <code>foo()</code> \u662F\u4ECE <code>bar()</code> \u4E2D\u88AB\u8C03\u7528\u7684\uFF0C\u5B83\u5C31\u4F1A\u5728 <code>bar()</code> \u7684\u4F5C\u7528\u57DF\u4E2D\u68C0\u67E5\u53D8\u91CF\uFF0C\u5E76\u4E14\u5728\u8FD9\u91CC\u627E\u5230\u6301\u6709\u503C <code>3</code> \u7684 <code>a</code>\u3002</p><p>\u5947\u602A\u5417\uFF1F\u6B64\u65F6\u6B64\u523B\u4F60\u53EF\u80FD\u4F1A\u8FD9\u6837\u8BA4\u4E3A\u3002</p><p>\u4F46\u8FD9\u53EF\u80FD\u53EA\u662F\u56E0\u4E3A\u4F60\u4EC5\u5728\u62E5\u6709\u8BCD\u6CD5\u4F5C\u7528\u57DF\u7684\u4EE3\u7801\u4E2D\u5DE5\u4F5C\u8FC7\u3002\u6240\u4EE5\u52A8\u6001\u4F5C\u7528\u57DF\u770B\u8D77\u6765\u964C\u751F\u3002\u5982\u679C\u4F60\u4EC5\u4F7F\u7528\u52A8\u6001\u4F5C\u7528\u57DF\u7684\u8BED\u8A00\u7F16\u5199\u8FC7\u4EE3\u7801\uFF0C\u5B83\u770B\u8D77\u6765\u5C31\u662F\u5F88\u81EA\u7136\u7684\uFF0C\u800C\u8BCD\u6CD5\u4F5C\u7528\u57DF\u5C06\u662F\u4E2A\u602A\u4E1C\u897F\u3002</p><p>\u8981\u6E05\u695A\uFF0CJavaScript <strong>\u5B9E\u9645\u4E0A\u6CA1\u6709\u52A8\u6001\u4F5C\u7528\u57DF</strong>\u3002\u5B83\u62E5\u6709\u8BCD\u6CD5\u4F5C\u7528\u57DF\u3002\u5C31\u8FD9\u4E48\u7B80\u5355\u3002\u4F46\u662F <code>this</code> \u673A\u5236\u6709\u4E9B\u50CF\u52A8\u6001\u4F5C\u7528\u57DF\u3002</p><p>\u5173\u952E\u7684\u5DEE\u5F02\uFF1A<strong>\u8BCD\u6CD5\u4F5C\u7528\u57DF\u662F\u7F16\u5199\u65F6\u7684\uFF0C\u800C\u52A8\u6001\u4F5C\u7528\u57DF\uFF08\u548C <code>this</code>\uFF09\u662F\u8FD0\u884C\u65F6\u7684</strong>\u3002\u8BCD\u6CD5\u4F5C\u7528\u57DF\u5173\u5FC3\u7684\u662F <em>\u51FD\u6570\u5728\u4F55\u5904\u88AB\u58F0\u660E</em>\uFF0C\u4F46\u662F\u52A8\u6001\u4F5C\u7528\u57DF\u5173\u5FC3\u7684\u662F\u51FD\u6570 <em>\u4ECE\u4F55\u5904</em> \u88AB\u8C03\u7528\u3002</p><p>\u6700\u540E\uFF1A<code>this</code> \u5173\u5FC3\u7684\u662F <em>\u51FD\u6570\u662F\u5982\u4F55\u88AB\u8C03\u7528\u7684</em>\uFF0C\u8FD9\u63ED\u793A\u4E86 <code>this</code> \u673A\u5236\u4E0E\u52A8\u6001\u4F5C\u7528\u57DF\u7684\u60F3\u6CD5\u6709\u591A\u4E48\u7D27\u5BC6\u7684\u5173\u8054\u3002\u8981\u4E86\u89E3\u66F4\u591A\u5173\u4E8E <code>this</code> \u7684\u7EC6\u8282\uFF0C\u8BF7\u9605\u8BFB \u201C<em>this\u4E0E\u5BF9\u8C61\u539F\u578B</em>\u201D\u3002</p>`,17);function e(o,c){return p}var l=n(a,[["render",e],["__file","apA.html.vue"]]);export{l as default};
