import{_ as s,o as a,c as n,N as e}from"./chunks/framework.610c50cb.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue/在vue事件中传入$event，使用e.target和e.currentTarget有什么区别.md","lastUpdated":1718938826000}'),l={name:"guide/vue/在vue事件中传入$event，使用e.target和e.currentTarget有什么区别.md"},p=e(`<h3 id="用概念区分" tabindex="-1">用概念区分 <a class="header-anchor" href="#用概念区分" aria-label="Permalink to &quot;用概念区分&quot;">​</a></h3><blockquote><p>event.currentTarget始终指向事件所绑定的元素，而event.target指向事件发生时的元素。</p></blockquote><h3 id="示例说明" tabindex="-1">示例说明 <a class="header-anchor" href="#示例说明" aria-label="Permalink to &quot;示例说明&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">javascript:;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">openPlays($event)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">openplays-btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      记住，我通过换行符隔开，方便测试</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">iconfont</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"></span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="点击a时触发openplays-传入当前对象" tabindex="-1">点击a时触发openPlays，传入当前对象 <a class="header-anchor" href="#点击a时触发openplays-传入当前对象" aria-label="Permalink to &quot;点击a时触发openPlays，传入当前对象&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">openPlays (e) {</span></span>
<span class="line"><span style="color:#BABED8;">      console.log(e.target,e.currentTarget)</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="当点击-i-区域之外时" tabindex="-1">当点击“i”区域之外时： <a class="header-anchor" href="#当点击-i-区域之外时" aria-label="Permalink to &quot;当点击“i”区域之外时：&quot;">​</a></h3><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">a</span></span>
<span class="line"><span style="color:#babed8;">a</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="当点击a中的-i-时" tabindex="-1">当点击a中的“i”时： <a class="header-anchor" href="#当点击a中的-i-时" aria-label="Permalink to &quot;当点击a中的“i”时：&quot;">​</a></h3><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">i</span></span>
<span class="line"><span style="color:#babed8;">a</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,10),t=[p];function o(r,c,i,d,u,b){return a(),n("div",null,t)}const F=s(l,[["render",o]]);export{D as __pageData,F as default};
