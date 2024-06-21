import{_ as e,o as s,c as n,N as a}from"./chunks/framework.610c50cb.js";const m=JSON.parse('{"title":"env.development 和 .env.production环境文件 p​rocess.env属性","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue/vue中env环境文件介绍.md","lastUpdated":1718938826000}'),l={name:"guide/vue/vue中env环境文件介绍.md"},p=a(`<h1 id="env-development-和-env-production环境文件-process-env属性" tabindex="-1">env.development 和 .env.production环境文件 p<wbr>rocess.env属性 <a class="header-anchor" href="#env-development-和-env-production环境文件-process-env属性" aria-label="Permalink to &quot;env.development 和 .env.production环境文件 p&lt;wbr&gt;rocess.env属性&quot;">​</a></h1><h2 id="模式" tabindex="-1">模式 <a class="header-anchor" href="#模式" aria-label="Permalink to &quot;模式&quot;">​</a></h2><p>模式是 <strong>Vue CLI 项目</strong>中一个重要的概念。默认情况下，一个 Vue CLI 项目有三个模式： 开发,测试,生产</p><ul><li><code>development</code> 模式用于 <code>vue-cli-service serve</code></li><li><code>test</code>模式用于 <code>vue-cli-service test:unit</code></li><li><code>production</code> 模式用于 <code>vue-cli-service build</code> 和 <code>vue-cli-service test:e2e</code></li></ul><p><a href="https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">vue官方文档</a></p><h2 id="环境文件" tabindex="-1">环境文件 <a class="header-anchor" href="#环境文件" aria-label="Permalink to &quot;环境文件&quot;">​</a></h2><table><thead><tr><th>文件名</th><th>作用</th></tr></thead><tbody><tr><td>.env</td><td>在所有的环境中被载入</td></tr><tr><td>.env.local</td><td>在所有的环境中被载入,但会被git忽略</td></tr><tr><td>.env.[mode]</td><td>只在指定的模式中被载入</td></tr><tr><td>.env.[mode].local</td><td>只在指定的模式中被载入,但会被git忽略</td></tr></tbody></table><ul><li><code>.env</code> 全局默认配置文件，不论什么环境都会加载合并</li><li><code>.env.development</code> 开发环境下的配置文件</li><li><code>.env.production</code>生产环境下的配置文件</li></ul><h2 id="环境文件加载优先级" tabindex="-1">环境文件加载<a href="https://so.csdn.net/so/search?q=%E4%BC%98%E5%85%88%E7%BA%A7&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">优先级</a> <a class="header-anchor" href="#环境文件加载优先级" aria-label="Permalink to &quot;环境文件加载[优先级](https://so.csdn.net/so/search?q=%E4%BC%98%E5%85%88%E7%BA%A7&amp;spm=1001.2101.3001.7020)&quot;">​</a></h2><p>为一个特定模式准备的环境文件 (例如 <code>.env.production</code>) 将会比一般的环境文件 (例如 <code>.env</code>) 拥有更高的优先级。</p><h2 id="环境文件发生变化-你需要重启服务。" tabindex="-1">环境文件发生变化，你需要重启服务。 <a class="header-anchor" href="#环境文件发生变化-你需要重启服务。" aria-label="Permalink to &quot;环境文件发生变化，你需要重启服务。&quot;">​</a></h2><p>原因: <code>.env 环境文件</code>是通过运行 <code>vue-cli-service 命令</code>载入的</p><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><ol><li><strong>项目根目录中&gt;&gt;&gt;放置下列文件&gt;&gt;&gt;指定环境变量</strong></li><li><strong>一个环境文件只包含环境变量的’‘键=值’&#39;对</strong></li><li><strong>被载入的变量将会对<code>vue-cli-service</code>的所有命令、插件和依赖可用。</strong></li></ol><p>示例 : 在<code>vue-element-admin</code>后台前端解决方案的<code>.env.development</code>文件中的代码</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># just a flag</span></span>
<span class="line"><span style="color:#babed8;">ENV = &#39;development&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># base api</span></span>
<span class="line"><span style="color:#babed8;">VUE_APP_BASE_API = &#39;/dev-api&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>注意：属性名必须以<code>VUE_APP_</code>开头，比如<code>VUE_APP_XXX</code></strong> (vue_cli 框架会自动过滤掉非VUE_APP开头的变量名)</p><h2 id="关于文件的加载" tabindex="-1">关于文件的加载： <a class="header-anchor" href="#关于文件的加载" aria-label="Permalink to &quot;关于文件的加载：&quot;">​</a></h2><p>根据<strong>启动命令</strong>vue会自动加载对应的环境，vue是根据文件名进行加载的，不要乱起名，也无需专门控制加载哪个文件</p><p>比如执行<code>npm run serve</code>命令，会自动加载<code>.env.development</code>文件</p><h2 id="关于process-env属性" tabindex="-1">关于p<wbr>rocess.env属性 <a class="header-anchor" href="#关于process-env属性" aria-label="Permalink to &quot;关于p&lt;wbr&gt;rocess.env属性&quot;">​</a></h2><p>全局属性，任何地方均可使用<br><code>process 对象</code>是一个 global （全局变量），提供有关信息，控制当前 Node.js 进程。作为一个对象，它对于 Node.js 应用程序始终是可用的，故无需使用 require()。</p><p><strong>关于文件名：必须以如下方式命名，不要乱起名，也无需专门手动控制加载哪个文件</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">.env //全局默认配置文件，不论什么环境都会加载合并</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">.env.development //开发环境下的配置文件</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">.env.production //生产环境下的配置文件</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>关于文件内容：</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">注意：属性名必须以VUE_APP_开头，比如VUE_APP_XXX</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">.env：</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">.env.development：</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>关于文件的加载：</strong></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">根据启动命令vue会自动加载对应的环境，vue是根据文件名进行加载的，</span></span>
<span class="line"><span style="color:#babed8;">所以上面说“不要乱起名，也无需专门控制加载哪个文件”</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">比如执行npm run serve命令，会自动加载.env.development文件</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>启动项目：</strong></p><p>打印p<wbr>rocess.env属性（全局属性，任何地方均可使用）：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">可见NODE_ENV被改为了development，覆盖掉了.env中的全局属性</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">.env中的全局属性NODE_ENV、VUE_APP_URL被覆盖，</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">.env中的全局属性VUE_APP_PREVIEW、VUE_APP_DEFAULT_PARAM被保留</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,31),r=[p];function o(t,c,i,d,b,u){return s(),n("div",null,r)}const h=e(l,[["render",o]]);export{m as __pageData,h as default};
