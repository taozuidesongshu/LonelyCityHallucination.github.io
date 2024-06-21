import{_ as e,o as s,c as a,N as n}from"./chunks/framework.610c50cb.js";const q=JSON.parse('{"title":"python requirements文件生成和安装","description":"","frontmatter":{},"headers":[],"relativePath":"module/python/requirements文件生成和安装.md","lastUpdated":1718938826000}'),t={name:"module/python/requirements文件生成和安装.md"},r=n(`<h1 id="python-requirements文件生成和安装" tabindex="-1">python requirements文件生成和安装 <a class="header-anchor" href="#python-requirements文件生成和安装" aria-label="Permalink to &quot;python requirements文件生成和安装&quot;">​</a></h1><h2 id="如何自动生成和安装requirements-txt依赖" tabindex="-1">如何自动生成和安装requirements.txt依赖 <a class="header-anchor" href="#如何自动生成和安装requirements-txt依赖" aria-label="Permalink to &quot;如何自动生成和安装requirements.txt依赖&quot;">​</a></h2><p>在查看别人的<a href="https://so.csdn.net/so/search?q=Python%E9%A1%B9%E7%9B%AE&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">Python项目</a>时，经常会看到一个requirements.txt文件，里面记录了当前程序的所有依赖包及其精确版本号。这个文件有点类似与Rails的Gemfile。其作用是用来在另一台PC上重新构建项目所需要的运行环境依赖。</p><p>requirements.txt可以通过<a href="https://so.csdn.net/so/search?q=pip%E5%91%BD%E4%BB%A4&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">pip命令</a>自动生成和安装</p><h2 id="生成requirements-txt文件" tabindex="-1">生成requirements.txt文件 <a class="header-anchor" href="#生成requirements-txt文件" aria-label="Permalink to &quot;生成requirements.txt文件&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">freeze</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">requirements.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装requirements-txt依赖" tabindex="-1">安装requirements.txt依赖 <a class="header-anchor" href="#安装requirements-txt依赖" aria-label="Permalink to &quot;安装requirements.txt依赖&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">requirements.txt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>pip的freeze命令保存了保存当前Python环境下所有类库包，其它包括那些你没有在当前项目中使用的类库。 （如果你没有virtualenv）。</p><h2 id="仅生成工程依赖" tabindex="-1">仅生成工程依赖 <a class="header-anchor" href="#仅生成工程依赖" aria-label="Permalink to &quot;仅生成工程依赖&quot;">​</a></h2><p>使用 pipreqs 用于生成 requirements.txt 文件可以根据需要导入的任何项目</p><p>生成方式：</p><ol><li><p>进入当前工程根目录</p></li><li><p>运行如下命令：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pipreqs</span></span>
<span class="line"><span style="color:#FFCB6B;">pipreqs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">./</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--encoding=utf8</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><p>即可在工程根目录下生成requirements.txt文件</p><h2 id="也可以反向通过requirements-txt-删除安装的包" tabindex="-1">也可以反向通过requirements.txt 删除安装的包 <a class="header-anchor" href="#也可以反向通过requirements-txt-删除安装的包" aria-label="Permalink to &quot;也可以反向通过requirements.txt 删除安装的包&quot;">​</a></h2>`,15),l=[r];function p(o,i,c,u,m,h){return s(),a("div",null,l)}const y=e(t,[["render",p]]);export{q as __pageData,y as default};
