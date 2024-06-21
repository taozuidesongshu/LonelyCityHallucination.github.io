import{_ as e,o as a,c as r,N as t}from"./chunks/framework.610c50cb.js";const b=JSON.parse('{"title":"vue项目打包后使用reverse-sourcemap反编译到源码","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue/vue项目打包后使用reverse-sourcemap反编译到源码.md","lastUpdated":1718938826000}'),o={name:"guide/vue/vue项目打包后使用reverse-sourcemap反编译到源码.md"},s=t('<h1 id="vue项目打包后使用reverse-sourcemap反编译到源码" tabindex="-1">vue项目打包后使用reverse-sourcemap反编译到源码 <a class="header-anchor" href="#vue项目打包后使用reverse-sourcemap反编译到源码" aria-label="Permalink to &quot;vue项目打包后使用reverse-sourcemap反编译到源码&quot;">​</a></h1><p><strong>首先得说一下，vue项目中<code>productionSourceMap</code>这个属性。该属性对应的值为<code>true</code>|<code>false</code>。</strong></p><ul><li>当<code>productionSourceMap: true,</code>时：<br> 1、打包后能看到<code>xxxx.js.map</code>文件,<code>map文件够通过反编译看到源码</code>;<br> 2、打包后会导致文件变大(因为多了很多map文件导致的)；</li><li>当<code>productionSourceMap: false,</code>时：<br> 1、打包后无法看到<code>xxxx.js.map</code>文件,<code>所以无法进行反编译</code>;<br> 2、打包后的文件很小(因为没有map文件);<br><strong>如下两张截图就可以验证2的描述</strong>_</li></ul><p><code>productionSourceMap: **false**</code>，打包后文件的大小2.8M</p><p><img src="https://img2022.cnblogs.com/blog/1161361/202208/1161361-20220819140655037-1030471922.png" alt=""></p><p><code>productionSourceMap: true</code>，打包后文件的大小9.6M</p><p><img src="https://img2022.cnblogs.com/blog/1161361/202208/1161361-20220819140714849-168784945.png" alt=""></p><h4 id="那么对于productionsourcemap-true的情况-我们如何对打包后的通过编译看到源码呢" tabindex="-1">那么对于<code>productionSourceMap: true</code>的情况，我们如何对打包后的通过编译看到源码呢 <a class="header-anchor" href="#那么对于productionsourcemap-true的情况-我们如何对打包后的通过编译看到源码呢" aria-label="Permalink to &quot;那么对于`productionSourceMap: true`的情况，我们如何对打包后的通过编译看到源码呢&quot;">​</a></h4><ul><li><p>步骤一：全局安装reverse-sourcemap，终端输入如下内容<br><code>sudo npm install --global reverse-sourcemap</code></p></li><li><p>步骤二：以<code>0.474fa9e4cdfb9c4219bc.js.map</code>文件为例进行反编译。</p><p><img src="https://upload-images.jianshu.io/upload_images/2364940-bb9a64dcff69c893.png" alt=""></p></li><li><p>步骤三：为了更加直观看到效果，先将步骤二的<code>0.474fa9e4cdfb9c4219bc.js.map</code>文件放到自定义的<code>aimFile</code>目录中</p><p><img src="https://upload-images.jianshu.io/upload_images/2364940-55a6766f58292a02.png" alt=""></p></li><li><p>步骤四：打开terminal终端，cd到<code>aimFile</code>目录，然后输入<code>reverse-sourcemap --output-dir sourceCode 0.474fa9e4cdfb9c4219bc.js.map</code>，实现将反编译后的源码输入到<code>sourceCode</code>目录</p><p><img src="https://upload-images.jianshu.io/upload_images/2364940-8f7ecb8ad13cf60d.png" alt=""></p><p><img src="https://upload-images.jianshu.io/upload_images/2364940-94fe13f754e6c154.png" alt=""></p></li><li><p>步骤五：可以看到反编译成功了，而且也可以得知<code>xxxx.js.map</code>文件经过反编译后得到的源文件，实际上是很多文件的集合。</p></li></ul><h2 id="二、问题描述" tabindex="-1">二、问题描述 <a class="header-anchor" href="#二、问题描述" aria-label="Permalink to &quot;二、问题描述&quot;">​</a></h2><p>工作中，遇到了一个前同事开发的一个项目，打包之后已经发布了，但是，在使用后期发现需要修改<a href="https://so.csdn.net/so/search?q=%E6%BA%90%E7%A0%81&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">源码</a>，有些需求不满足，结果发现同事没有将代码提交到SVN ，导致找不到源码</p><p>于是在网上找到了 <code>reverse-sourcemap 工具，可以将.js.map文件转为源码，然后基于反编译的文件再做修改</code></p><h2 id="三、快速入门" tabindex="-1">三、快速入门 <a class="header-anchor" href="#三、快速入门" aria-label="Permalink to &quot;三、快速入门&quot;">​</a></h2><h2 id="_3-1-安装" tabindex="-1">3.1 安装 <a class="header-anchor" href="#_3-1-安装" aria-label="Permalink to &quot;3.1 安装&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">npm install --global reverse-sourcemap</span></span>\n<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_3-2-案例" tabindex="-1">3.2 案例 <a class="header-anchor" href="#_3-2-案例" aria-label="Permalink to &quot;3.2 案例&quot;">​</a></h2><ol><li><p>单个sourceMap文件<a href="https://so.csdn.net/so/search?q=%E5%8F%8D%E7%BC%96%E8%AF%91&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">反编译</a><br><code>reverse-sourcemap -o aaa -v app.9fbea7c7.js.map</code><br><strong>将 app.9fbea7c7.js.map 反编译到 aaa 目录下</strong></p></li><li><p>批量sourceMap反编译<br><code>reverse-sourcemap -o origin -v ./static/js</code><br><strong>将 ./static/js目录下所有的 .js.map 类型的文件（递归）反编译到 origin 目录下面</strong></p></li></ol><p><img src="https://img-blog.csdnimg.cn/e4defe080c62493db37c3c73d47cad07.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6IOW6bmFNjg=,size_11,color_FFFFFF,t_70,g_se,x_16" alt="请添加图片描述"></p><ol start="3"><li>reverse-sourcemap属性说明</li></ol><table><thead><tr><th>属性名</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>-h, --help</td><td>Help and usage instructions</td><td></td></tr><tr><td>-V, --version</td><td>Version number</td><td></td></tr><tr><td>-v, --verbose</td><td>Verbose output, will print which file is currently being processed</td><td>输出路径</td></tr><tr><td>-o, --output-dir</td><td>String Output directory - default: .</td><td>默认是当前目录 .</td></tr><tr><td>-M, --match String</td><td>Regular expression for matching and filtering files - default: .map$</td><td>默认是 .map 类型的文件</td></tr><tr><td>-r, --recursive</td><td>Recursively search matching files</td><td>默认递归</td></tr></tbody></table><h2 id="一、文章参考" tabindex="-1">一、文章参考 <a class="header-anchor" href="#一、文章参考" aria-label="Permalink to &quot;一、文章参考&quot;">​</a></h2><ol><li><a href="https://www.npmjs.com/package/reverse-sourcemap" target="_blank" rel="noreferrer">reverse-sourcemap npm</a></li><li><a href="http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html" target="_blank" rel="noreferrer">JavaScript Source Map 详解</a></li></ol>',22),c=[s];function d(p,i,l,n,u,m){return a(),r("div",null,c)}const g=e(o,[["render",d]]);export{b as __pageData,g as default};
