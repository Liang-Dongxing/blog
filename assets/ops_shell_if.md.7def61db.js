import{_ as s,c as n,o as a,d as l}from"./app.c4b59cef.js";const i=JSON.parse('{"title":"shell\u811A\u672C\u4E4B if \u6761\u4EF6\u5224\u65AD\u7528\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"if \u57FA\u672C\u8BED\u6CD5","slug":"if-\u57FA\u672C\u8BED\u6CD5","link":"#if-\u57FA\u672C\u8BED\u6CD5","children":[]},{"level":2,"title":"if \u6269\u5C55\u8BED\u6CD5","slug":"if-\u6269\u5C55\u8BED\u6CD5","link":"#if-\u6269\u5C55\u8BED\u6CD5","children":[]},{"level":2,"title":"\u5B9E\u4F8B","slug":"\u5B9E\u4F8B","link":"#\u5B9E\u4F8B","children":[]}],"relativePath":"ops/shell/if.md","lastUpdated":1668512834000}'),p={name:"ops/shell/if.md"},o=l(`<h1 id="shell\u811A\u672C\u4E4B-if-\u6761\u4EF6\u5224\u65AD\u7528\u6CD5" tabindex="-1">shell\u811A\u672C\u4E4B if \u6761\u4EF6\u5224\u65AD\u7528\u6CD5 <a class="header-anchor" href="#shell\u811A\u672C\u4E4B-if-\u6761\u4EF6\u5224\u65AD\u7528\u6CD5" aria-hidden="true">#</a></h1><h2 id="if-\u57FA\u672C\u8BED\u6CD5" tabindex="-1">if \u57FA\u672C\u8BED\u6CD5 <a class="header-anchor" href="#if-\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> \u6761\u4EF6\u5224\u65AD </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u6761\u4EF6\u6210\u7ACB\u6267\u884C\u7684\u8BED\u53E5</span></span>
<span class="line"><span style="color:#89DDFF;">else</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u6761\u4EF6\u4E0D\u6210\u7ACB\u6267\u884C\u7684\u8BED\u53E5</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span></code></pre></div><h2 id="if-\u6269\u5C55\u8BED\u6CD5" tabindex="-1">if \u6269\u5C55\u8BED\u6CD5 <a class="header-anchor" href="#if-\u6269\u5C55\u8BED\u6CD5" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> \u6761\u4EF6\u5224\u65AD </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u6761\u4EF6\u6210\u7ACB\u6267\u884C\u7684\u8BED\u53E5</span></span>
<span class="line"><span style="color:#89DDFF;">elif</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> \u6761\u4EF6\u5224\u65AD </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u6761\u4EF6\u6210\u7ACB\u6267\u884C\u7684\u8BED\u53E5</span></span>
<span class="line"><span style="color:#89DDFF;">else</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u6761\u4EF6\u4E0D\u6210\u7ACB\u6267\u884C\u7684\u8BED\u53E5</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">1\uFF1A\u5224\u65AD\u76EE\u5F55</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">doiido\u662F\u5426\u5B58\u5728\uFF0C\u82E5\u4E0D\u5B58\u5728\uFF0C\u5219\u65B0\u5EFA\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">doiido</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000mkdir </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">doiido</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">2\uFF1A\u5224\u65AD\u666E\u901A\u6587\u4EF6</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">doiido\u662F\u5426\u5B58\uFF0C\u82E5\u4E0D\u5B58\u5728\uFF0C\u5219\u65B0\u5EFA\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">doiido</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000touch </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">doiido</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">3\uFF1A\u5224\u65AD</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">doiido\u662F\u5426\u5B58\u5728\u5E76\u4E14\u662F\u5426\u5177\u6709\u53EF\u6267\u884C\u6743\u9650</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">doiido</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000mkdir </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">doiido</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    chmod +x </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">doiido</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">4\uFF1A\u662F\u5224\u65AD\u53D8\u91CF</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">doiido\u662F\u5426\u6709\u503C</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-n</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">doiido</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000</span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">doiido</span><span style="color:#C3E88D;"> is empty</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000</span><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> 0</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">5\uFF1A\u4E24\u4E2A\u53D8\u91CF\u5224\u65AD\u662F\u5426\u76F8\u7B49</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">var1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">var2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000</span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$var1 eq $var2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">\u3000\u3000</span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$var1 not eq $var2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">6\uFF1A\u6D4B\u8BD5\u9000\u51FA\u72B6\u6001\uFF1A</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">? </span><span style="color:#89DDFF;">-eq</span><span style="color:#A6ACCD;"> 0 </span><span style="color:#89DDFF;">];</span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">That is ok</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">7\uFF1A\u6570\u503C\u7684\u6BD4\u8F83\uFF1A</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-gt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">150</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">num</span><span style="color:#C3E88D;"> is biger than 150</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">8\uFF1Aa</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">b\u4E14a</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">c</span></span>
<span class="line"><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;"> a </span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> b </span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;"> a </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;"> c </span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#89DDFF;">[[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">-gt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">-lt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">9\uFF1Aa</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">b\u6216a</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">c</span></span>
<span class="line"><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;"> a </span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> b </span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#C3E88D;"> a </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;"> c </span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#89DDFF;">[[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">]]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">-gt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">-lt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">c </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">10\uFF1A\u68C0\u6D4B\u6267\u884C\u811A\u672C\u7684\u7528\u6237</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">whoami</span><span style="color:#89DDFF;">)&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">You have no permission to run </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0</span><span style="color:#C3E88D;"> as non-root user.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> 1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E0A\u9762\u7684\u8BED\u53E5\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u7684\u7CBE\u7B80\u8BED\u53E5</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">whoami</span><span style="color:#89DDFF;">)&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">You have no permission to run </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">0</span><span style="color:#C3E88D;"> as non-root user.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> 1 </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">11\uFF1A\u6B63\u5219\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">doiido=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hero</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">doiido</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> h</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]];</span><span style="color:#89DDFF;">then</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello\uFF0Chero</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">fi</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function D(t,c,r,F,y,C){return a(),n("div",null,e)}const d=s(p,[["render",D]]);export{i as __pageData,d as default};
