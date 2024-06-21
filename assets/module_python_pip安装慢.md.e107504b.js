import{_ as s,o as a,c as e,N as n}from"./chunks/framework.610c50cb.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"module/python/pip安装慢.md","lastUpdated":1718938826000}'),p={name:"module/python/pip安装慢.md"},l=n(`<h2 id="python-pip-安装第三方库-速度很慢的解决办法" tabindex="-1">Python：pip 安装第三方库，速度很慢的解决办法 <a class="header-anchor" href="#python-pip-安装第三方库-速度很慢的解决办法" aria-label="Permalink to &quot;Python：pip 安装第三方库，速度很慢的解决办法&quot;">​</a></h2><h2 id="举个例子-比如想要安装-mlxtend-库" tabindex="-1">举个例子，比如想要安装 mlxtend 库 <a class="header-anchor" href="#举个例子-比如想要安装-mlxtend-库" aria-label="Permalink to &quot;举个例子，比如想要安装 mlxtend 库&quot;">​</a></h2><p>1.键盘按着 win + R键，输入cmd并点击确定，打开命令行窗口；在 cmd 敲入命令</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mlxtend</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>但是发现下载安装文件非常慢，有可能出现警告，还有可能最后显示当下载到百分之几十的时候窗口中就会出现一堆红字，最后安装失败。<br><strong>原因</strong>：在命令行窗口内输入pip help install，查看帮助文档，向下滑动可以看到<br> -i, --index-url …选项，文档中可以看到python默认安装源的地址实质访问的下载网站是<a href="https://pypi.Python.org/simple/" target="_blank" rel="noreferrer">https://pypi.Python.org/simple/</a><br> 因为这是一个国外网站，所以在国内下载速度比较慢。</p><h2 id="方法一" tabindex="-1">方法一： <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一：&quot;">​</a></h2><p>使用国内源<br> 在 cmd 更改为敲入命令（<br><strong>pip install -i <a href="https://pypi.tuna.tsinghua.edu.cn/simple" target="_blank" rel="noreferrer">https://pypi.tuna.tsinghua.edu.cn/simple</a> 库</strong><br> ）</p><ul><li>清华大学源</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mlxtend</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者命令行中输入</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://pypi.tuna.tsinghua.edu.cn/simple</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">mlxtend</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>以后使用 pip 安装第三方包时，都可以把<br><strong>-i <a href="https://pypi.douban.com/simple" target="_blank" rel="noreferrer">https://pypi.douban.com/simple</a></strong> 作为必填的内容，这样速度会变得很快。</p><h2 id="方法二" tabindex="-1">方法二： <a class="header-anchor" href="#方法二" aria-label="Permalink to &quot;方法二：&quot;">​</a></h2><p>第二种就是一劳永逸的方法，选择配置国内镜像源。<br> 首先找到C:\\Users\\Solitude\\AppData\\Roaming，这个路径的文件夹，如果你没有找到，那就是你的文件夹被隐藏了，解决办法如下：<br> 打开C盘，点击左上角的“查看”-“选项”- 显示/隐藏 中勾选“隐藏的项目”，然后确定即可。这样你就能看到AppData文件夹了。（如下图）<br><img src="https://img-blog.csdnimg.cn/20201223104625788.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODMyMDUw,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"><br> 找到路径后，首选在该路径下新建文件夹，命名为“pip”，然后在pip文件夹中新建一个txt格式的文本文档，打开文本文档，将下面这些代码复制到文本文档中，关闭保存。然后将txt格式的文本文档重新命名为“pip.ini”，这样就创建了一个配置文件。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">[global]</span></span>
<span class="line"><span style="color:#babed8;">timeout = 60000</span></span>
<span class="line"><span style="color:#babed8;">index-url = https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"><span style="color:#babed8;">[install]</span></span>
<span class="line"><span style="color:#babed8;">use-mirrors = true</span></span>
<span class="line"><span style="color:#babed8;">mirrors = https://pypi.tuna.tsinghua.edu.cn</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>文档中的链接地址还可以更换其他的如下：<br> 阿里云 <a href="http://mirrors.aliyun.com/pypi/simple/" target="_blank" rel="noreferrer">http://mirrors.aliyun.com/pypi/simple/</a><br> 中国科技大学 <a href="https://pypi.mirrors.ustc.edu.cn/simple/" target="_blank" rel="noreferrer">https://pypi.mirrors.ustc.edu.cn/simple/</a><br> 豆瓣(douban) <a href="http://pypi.douban.com/simple/" target="_blank" rel="noreferrer">http://pypi.douban.com/simple/</a><br> 清华大学 <a href="https://pypi.tuna.tsinghua.edu.cn/simple/" target="_blank" rel="noreferrer">https://pypi.tuna.tsinghua.edu.cn/simple/</a><br> 中国科学技术大学 <a href="http://pypi.mirrors.ustc.edu.cn/simple/" target="_blank" rel="noreferrer">http://pypi.mirrors.ustc.edu.cn/simple/</a><br> 这样再使用pip进行包安装时候就默认选择国内源进行安装了，速度超快！！！</p><h2 id="本地离线安装方法" tabindex="-1">本地离线安装方法 <a class="header-anchor" href="#本地离线安装方法" aria-label="Permalink to &quot;本地离线安装方法&quot;">​</a></h2><p>查找第三方包可以从以下网址查找：<br> 1、<a href="https://pypi.org/" target="_blank" rel="noreferrer">PyPI · The Python Package Index</a><br><img src="https://img-blog.csdnimg.cn/2a3138c411954d6db0681d035fe54c2f.png" alt="在这里插入图片描述"></p><p>2、<a href="https://www.lfd.uci.edu/~gohlke/pythonlibs/" target="_blank" rel="noreferrer">Archived: Python Extension Packages for Windows - Christoph Gohlke (uci.edu)<br></a><br><img src="https://img-blog.csdnimg.cn/8613b3cc0ae84909a6151e9764411b89.png" alt="在这里插入图片描述"></p><ol><li>如果你下载的是whl文件，下载完后放到你先要安装的位置文件夹，在所在位置打开cmd，使用pip install 文件名（包括whl后缀）</li><li>如果你下载的是压缩包，直接将解压后的文件夹放入到你想安装的位置，一般是放到之前安装的库一起，然后打开文件夹，进入cmd，输入<code>python setup.py install</code></li></ol>`,20),r=[l];function t(i,o,c,d,h,b){return a(),e("div",null,r)}const y=s(p,[["render",t]]);export{u as __pageData,y as default};
