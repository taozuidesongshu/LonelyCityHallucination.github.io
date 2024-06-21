import{_ as s,o as a,c as n,N as p}from"./chunks/framework.610c50cb.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/js/v-if 判断元素满足多个条件的写法.md","lastUpdated":1718938826000}'),l={name:"guide/js/v-if 判断元素满足多个条件的写法.md"},e=p(`<blockquote><p><code>v-if</code>判断type满足0的时候写法是：<code>v-if=&quot;type=== 0&quot;</code>，</p></blockquote><blockquote><p>那如果type同时要满足0，1，2三个值的时候，我们在<code>v-if</code>里用 <code>||</code> 并列写像这样：<code>v-if=&quot;type=== 0 || type=== 1 || type=== 2&quot;</code>，这样虽然可以，但如果条件太多了，就显得代码有点冗余！</p></blockquote><p>所以，最简便的写法就是：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// [ ]里可以放字符串，数值等</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">v</span><span style="color:#89DDFF;">-</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0,1,2].includes(type) </span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>我们还可以使用下面的方法:</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 判断状态</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">matchState</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">reg</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!!</span><span style="color:#82AAFF;">String</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">state</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">reg</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 返回true/false</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这个方法复用性高，适用于多个标签都需要用到此判断的情况下使用。</p><p>接下来我们就可以在需要的标签上使用：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">v</span><span style="color:#89DDFF;">-</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">matchState(type,/[012]/)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,9),o=[e];function t(c,r,i,y,F,d){return a(),n("div",null,o)}const _=s(l,[["render",t]]);export{u as __pageData,_ as default};
