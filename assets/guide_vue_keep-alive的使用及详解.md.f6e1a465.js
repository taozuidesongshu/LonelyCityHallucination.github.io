import{_ as s,o as n,c as a,N as l}from"./chunks/framework.610c50cb.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue/keep-alive的使用及详解.md","lastUpdated":1718938826000}'),p={name:"guide/vue/keep-alive的使用及详解.md"},e=l(`<h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><blockquote><p>keep-alive 是 Vue 的内置组件，当它包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 transition 相似，keep-alive 是一个抽象组件：它自身不会渲染成一个 DOM 元素，也不会出现在父组件链中。</p></blockquote><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><blockquote><p>在组件切换过程中将状态保留在<a href="https://so.csdn.net/so/search?q=%E5%86%85%E5%AD%98&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">内存</a>中，防止重复渲染DOM，减少加载时间及性能消耗，提高用户体验性。</p></blockquote><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><blockquote><p>在 created 函数调用时将需要缓存的 VNode 节点保存在 this.cache 中／在 <a href="https://so.csdn.net/so/search?q=render&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">render</a>（页面渲染） 时，如果 VNode 的 name 符合缓存条件（可以用 include 以及 exclude 控制），则会从 this.cache 中取出之前缓存的 VNode 实例进行渲染。</p></blockquote><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><ul><li>include - 字符串或正则表达式。只有名称匹配的组件会被缓存。</li><li>exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。</li><li>max - 数字。最多可以缓存多少组件实例。</li></ul><h2 id="生命周期函数" tabindex="-1">生命周期函数 <a class="header-anchor" href="#生命周期函数" aria-label="Permalink to &quot;生命周期函数&quot;">​</a></h2><p>1. activated</p><ul><li>在 keep-alive 组件激活时调用</li><li>该钩子函数在服务器端渲染期间不被调用</li></ul><p>2. deactivated</p><ul><li><p>在 keep-alive 组件停用时调用</p></li><li><p>该钩子在服务器端渲染期间不被调用</p></li><li><p>被包含在 keep-alive 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated</p></li><li><p>使用 keep-alive 会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在 activated 阶段获取数据，承担原来 created 钩子函数中获取数据的任务。</p></li><li><p>注意： 只有组件被 keep-alive 包裹时，这两个生命周期函数才会被调用，如果作为正常组件使用，是不会被调用的，以及在 2.1.0 版本之后，使用 exclude 排除之后，就算被包裹在 keep-alive 中，这两个钩子函数依然不会被调用！另外，在服务端渲染时，此钩子函数也不会被调用。</p></li></ul><h2 id="缓存所有页面" tabindex="-1">缓存所有页面 <a class="header-anchor" href="#缓存所有页面" aria-label="Permalink to &quot;缓存所有页面&quot;">​</a></h2><ol><li>在 App.vue 里面</li></ol><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-view</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="根据条件缓存页面" tabindex="-1">根据条件缓存页面 <a class="header-anchor" href="#根据条件缓存页面" aria-label="Permalink to &quot;根据条件缓存页面&quot;">​</a></h2><ol><li>在 App.vue 里面</li></ol><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  // 1. 将缓存 name 为 test 的组件</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-view</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">// 2. 将缓存 name 为 a 或者 b 的组件，结合动态组件使用</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a,b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-view</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">// 3. 使用正则表达式，需使用 v-bind</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/a|b/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-view</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">// 5.动态判断</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">includedComponents</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-view</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">// 5. 将不缓存 name 为 test 的组件</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">exclude</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-view</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="结合router-缓存部分页面" tabindex="-1">结合Router，缓存部分页面 <a class="header-anchor" href="#结合router-缓存部分页面" aria-label="Permalink to &quot;结合Router，缓存部分页面&quot;">​</a></h2><ol><li>在 router 目录下的 index.js 文件里</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> Router </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Home </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">resolve</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/components/home/home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> resolve)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Goods </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">resolve</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/components/home/goods</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> resolve)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Ratings </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">resolve</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/components/home/ratings</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> resolve)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Seller </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">resolve</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">require</span><span style="color:#BABED8;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/components/home/seller</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> resolve)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#BABED8;">(Router)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Router</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">history</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Home</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">redirect</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">goods</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">goods</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">goods</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Goods</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">keepAlive</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 不需要缓存</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ratings</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ratings</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Ratings</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">keepAlive</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 需要缓存</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">seller</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">seller</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> Seller</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">keepAlive</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 需要缓存</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">      ]</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>2.在 App.vue 里面</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$route.meta.keepAlive</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">router-view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">router-view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!$route.meta.keepAlive</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">router-view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,24),o=[e];function r(t,c,D,F,y,i){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{b as __pageData,u as default};
