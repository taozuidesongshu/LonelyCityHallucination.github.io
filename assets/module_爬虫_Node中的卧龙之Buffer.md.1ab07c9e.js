import{_ as s,o as a,c as n,N as e}from"./chunks/framework.610c50cb.js";const m=JSON.parse('{"title":"Node中的卧龙之Buffer","description":"","frontmatter":{},"headers":[],"relativePath":"module/爬虫/Node中的卧龙之Buffer.md","lastUpdated":1718938826000}'),l={name:"module/爬虫/Node中的卧龙之Buffer.md"},p=e(`<h1 id="node中的卧龙之buffer" tabindex="-1">Node中的卧龙之Buffer <a class="header-anchor" href="#node中的卧龙之buffer" aria-label="Permalink to &quot;Node中的卧龙之Buffer&quot;">​</a></h1><hr><p>在计算机所有的内容中,无论是文字、数字、图片、音频、视频最终都会使用二进制展示。</p><p><code>JavaScript</code> 可以处理非常直观的数据,例如字符串,无论是宽字节字符串或者是单字节字符串,通常我们展示给用户的也是这些内容,但是 <code>JavaScript</code> 处理图片这些就显得无能为力了,实际上在网页端,图片一直是交给浏览器去处理的,我们只是负责告诉浏览器一个图片的地址,浏览器最终显示出来。</p><p>由于应用场景的不同,在 <code>Node</code> 中,应用需要处理网络协议、操作数据库、处理图片、接受文件上传等,在网络流和文件的操作中,还要处理大量二进制数据,<code>JavaScript</code> 自有的字符串远远不能满足这些需求,于是 <code>Buffer</code> 对象应运而生。</p><h2 id="buffer" tabindex="-1">Buffer <a class="header-anchor" href="#buffer" aria-label="Permalink to &quot;Buffer&quot;">​</a></h2><p><code>Buffer</code> 类是 <code>JavaScript Uint8Array</code> 类的子类,并扩展了涵盖其他用例的方法。<code>Node.js</code> api在任何支持 <code>buffer</code>的地方都接受普通的 <code>Uint8Arrays</code>。在 <code>Node</code> 源码中具体有以下定义:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">class FastBuffer extends Uint8Array {</span></span>
<span class="line"><span style="color:#babed8;">  constructor(bufferOrLength, byteOffset, length) {</span></span>
<span class="line"><span style="color:#babed8;">    super(bufferOrLength, byteOffset, length);</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>Buffer</code> 在中文有缓冲的意思,在数据的传送过程中,数据到达的速度比进程消耗的速度快,那么少数早到达的数据会处于等待去等候被处理,反之则如果数据到达的速度比进程消耗的数据慢,那么先到达的数据需要等待一定量的数据到达之后才能被处理,这里的等待区就之的是 <code>Buffer</code> 缓冲区。</p><h2 id="buffer的基本使用" tabindex="-1">Buffer的基本使用 <a class="header-anchor" href="#buffer的基本使用" aria-label="Permalink to &quot;Buffer的基本使用&quot;">​</a></h2><p>在了解了 <code>Buffer</code> 的一些概念我们开始对它的一些 <code>API</code> 进行讲解,想要查看更多的示例请查阅官方文档。</p><h2 id="buffer-from" tabindex="-1">Buffer.from() <a class="header-anchor" href="#buffer-from" aria-label="Permalink to &quot;Buffer.from()&quot;">​</a></h2><p>在官方文档中, <code>Buffer.from</code> 方法根据传进来的参数不同,它会对其进行不同的处理,具体如下所示:</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42cf9c42caa0410f96fb08225d505d01~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>在这里我们看看第四个方法,该方法接收一个字符串和一个可选参数(编码方式),返回一个新的 <code>Buffer</code>,其中包含所提供字符串的副本,具体实例如下所示:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { Buffer } from &quot;node:buffer&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const buffer = Buffer.from(&quot;moment&quot;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">console.log(buffer);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>具体的返回的是一个新的 <code>Buffer</code>,它是一串16进制的东西,再将这些值转换为10进制的值,也可以说转换为 <code>ASCII</code> 值,它们会对应回原来的英文单词,具体如下图所示:</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f245d18c27f4c9d8ad51f12e8be08f2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><h2 id="buffer-tostring" tabindex="-1">Buffer.toString() <a class="header-anchor" href="#buffer-tostring" aria-label="Permalink to &quot;Buffer.toString()&quot;">​</a></h2><p>既然可以做到编码,那么也有对应的解码方式,<code>Buffer.toString()</code> 就是对 <code>Buffer</code> 进行解码的方法,请看以下实例代码所示:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { Buffer } from &quot;node:buffer&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const buffer = Buffer.from(&quot;moment&quot;);</span></span>
<span class="line"><span style="color:#babed8;">const foo = Buffer.from(&quot;你个叼毛&quot;, &quot;utf16le&quot;);</span></span>
<span class="line"><span style="color:#babed8;">const bar = Buffer.from(&quot;你小子&quot;, &quot;utf16le&quot;);</span></span>
<span class="line"><span style="color:#babed8;">const baz = Buffer.from(&quot;小黑子&quot;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">console.log(buffer); // &lt;Buffer 6d 6f 6d 65 6e 74&gt;</span></span>
<span class="line"><span style="color:#babed8;">console.log(foo); // &lt;Buffer 60 4f 2a 4e fc 53 db 6b&gt;</span></span>
<span class="line"><span style="color:#babed8;">console.log(bar); // &lt;Buffer 60 4f 0f 5c 50 5b&gt;</span></span>
<span class="line"><span style="color:#babed8;">console.log(baz); // &lt;Buffer e5 b0 8f e9 bb 91 e5 ad 90&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 解码</span></span>
<span class="line"><span style="color:#babed8;">console.log(buffer.toString()); // moment</span></span>
<span class="line"><span style="color:#babed8;">console.log(foo.toString(&quot;utf16le&quot;)); // 你个叼毛</span></span>
<span class="line"><span style="color:#babed8;">console.log(bar.toString()); // \`O\\P[</span></span>
<span class="line"><span style="color:#babed8;">console.log(baz.toString()); // 小黑子</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>什么样的编码方式就应该用什么样的解码方式,如果两者不同有可能会引起乱码的情况出现,编码和解码两者如果都不传参数,默认使用的是 <code>utf-8</code> 的字符编码。</p><h2 id="buffer-alloc" tabindex="-1">BUffer.alloc() <a class="header-anchor" href="#buffer-alloc" aria-label="Permalink to &quot;BUffer.alloc()&quot;">​</a></h2><p>该方法返回一个已初始化的 <code>Buffer</code>,如果没有填充,则默认为0,具体代码示例如下所示:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { Buffer } from &quot;node:buffer&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const foo = Buffer.alloc(10);</span></span>
<span class="line"><span style="color:#babed8;">const bar = Buffer.alloc(10, &quot;hi&quot;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">foo[0] = 0x66;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">console.log(foo); // &lt;Buffer 66 00 00 00 00 00 00 00 00 00&gt;</span></span>
<span class="line"><span style="color:#babed8;">console.log(bar); // &lt;Buffer 68 69 68 69 68 69 68 69 68 69&gt;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="buffer和文件之间的操作" tabindex="-1">Buffer和文件之间的操作 <a class="header-anchor" href="#buffer和文件之间的操作" aria-label="Permalink to &quot;Buffer和文件之间的操作&quot;">​</a></h2><p>在 <code>Node</code> 中,操作图片等文件是最常见不过的操作了,那么接下来我们看看通过 <code>fs</code> 模块读取过来的内容是一个怎么样的数据,具体如下所示:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { readFileSync } from &quot;node:fs&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const file = readFileSync(&quot;./moment.jpg&quot;);</span></span>
<span class="line"><span style="color:#babed8;">console.log(file);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>最终查看终端有如下输出:</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a73bf221622477cbbb3fe7b369742fa~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>我们可以通过返回的数据来进行操作,可以直接进行文件的写操作,具体代码如下所示:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { readFileSync, writeFileSync } from &quot;node:fs&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const file = readFileSync(&quot;./moment.jpg&quot;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">writeFileSync(&quot;./wao.png&quot;, file);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>执行代码你会发现图片被完整的输出了,如下图所示:</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86d74f93f6e340449408f92aec97415b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><h2 id="buffer的内存分配" tabindex="-1">Buffer的内存分配 <a class="header-anchor" href="#buffer的内存分配" aria-label="Permalink to &quot;Buffer的内存分配&quot;">​</a></h2><p><code>Buffer</code> 对象的内存分配不是在 <code>V8</code> 的堆内存中,而是在 <code>Node</code> 的 <code>C++</code> 层面实现内存的申请的,引起理大量的字节数据不能采用需要一点内存就向操作系统申请一点内存的方式,这可能造成带量的内存申请的系统调用,对操作系统有一定压力。为此 <code>Node</code> 在内存的使用上应用的是 <code>C++</code> 层面申请内存,在 <code>JavaScript</code> 中分配内存的策略。这种内存的分配方式被称为堆外内存。</p><p>为了高效地使用申请来的内存,<code>Node</code> 采用了 <code>slab</code> 分配机制,它是一种动态内存分配管理机制,简单而言它就是一块申请好的固定大小的内存区域,它分为以下三种状态:</p><ul><li>full: 完全分配状态;</li><li>partial: 部分分配状态;</li><li>empty: 没有被分配状态;</li></ul><p>因为当我们创建 <code>Buffer</code> 时,并不会频繁的向操作系统申请内存,它会默认申请一个 <code>8 * 1024</code> 个字节打下的内存,也就是 <code>8kb</code>,它在源码中有如下的定义:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Buffer.poolSize = 8 * 1024;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>此时,新构造的 <code>slab</code>如下图所示:</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/366113f0594e4499b378774669ac301a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>当我们分配一个大小为 1 KB的 <code>Buffer</code> 对象之后,<code>slab</code> 的内存如下图所示:</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c8d2098aef444aa914b3f148e2f7747~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>这个时候的 <code>slab</code> 状态为 <code>partial</code>,当再次创建一个 <code>Buffer</code> 独享时,构造过程中将会判断这个 <code>slab</code> 的剩余空间是否足够,如果足够,使用剩余空间,并更新 <code>slab</code> 的分配状态,再次分配的示意图如下图所示:</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ca5ac2118c14ab9b05f703c4d82d84f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?" alt="image.png"></p><p>如果 <code>slab</code> 剩余的空间不够,将会构造新的 <code>slab</code>,原 <code>slab</code> 中剩余的空间会造成浪费。</p><p>由于同一个 <code>slab</code> 可能分配给多个 <code>Buffer</code> 对象使用,只有这些小 <code>Buffer</code> 对象都在作用域释放时并都可以回收时,<code>slab</code> 的 <code>8KB</code> 空间才会被回收,尽管创建一个字节的 <code>Buffer</code> 对象,但是如果不释放它,实际可能是 <code>8KB</code> 内存没有被释放。</p><h2 id="buffer-对象分配" tabindex="-1">Buffer 对象分配 <a class="header-anchor" href="#buffer-对象分配" aria-label="Permalink to &quot;Buffer 对象分配&quot;">​</a></h2><p>在整个应用启动的时候,<code>Node</code> 就直接调用了 <code>createPool()</code> 方法来初始化了一个 <code>8kb</code> 的内存空间,这样在第一次进行内存分配时也会变得更高效,另外在初始化的同时还初始化了一个新的变量 <code>poolOffset = 0</code> 这个变量会记录已经使用了多少字节,在源码中的具体定义如下所示:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Buffer.poolSize = 8 * 1024;</span></span>
<span class="line"><span style="color:#babed8;">let poolSize, poolOffset, allocPool;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">function createPool() {</span></span>
<span class="line"><span style="color:#babed8;">  poolSize = Buffer.poolSize;</span></span>
<span class="line"><span style="color:#babed8;">  allocPool = createUnsafeBuffer(poolSize).buffer;</span></span>
<span class="line"><span style="color:#babed8;">  markAsUntransferable(allocPool);</span></span>
<span class="line"><span style="color:#babed8;">  poolOffset = 0;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">createPool();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="buffer的拼接" tabindex="-1">Buffer的拼接 <a class="header-anchor" href="#buffer的拼接" aria-label="Permalink to &quot;Buffer的拼接&quot;">​</a></h2><p><code>Buffer</code> 在使用场景中,通常是以一段一段的方式传输,以下是常见的从输入流中读取内容的示例代码,如下所示:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { createReadStream } from &quot;fs&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const result = createReadStream(&quot;./moment.md&quot;);</span></span>
<span class="line"><span style="color:#babed8;">let data = &quot;&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">result.on(&quot;data&quot;, (chunk) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  data += chunk;</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">result.on(&quot;end&quot;, () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  console.log(data); // 不是所有的牛奶都叫特仑苏</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>一旦输入流中有宽字节编码时,问题就会暴露出来,如果你在通过 <code>Node</code> 开发的网站看到乱码符号 <code>�</code>,那么该问题的起源多半来自于这里,在上面的代码中,<code>data += chunk;</code> 等价于下列的代码,如下:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">data = data.toString() + chunk.toString();</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>值得注意的是,歪国人的语境通常是指英文环境,在它们的场景下,这个 <code>toString()</code> 不会造成任何问题,但对于宽字节的中文,却会形成问题,我们将文件可读流每次读取的 <code>Buffer</code> 长度限制为 <code>7</code>,具体情况如下代码所示:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">import { createReadStream } from &quot;fs&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const result = createReadStream(&quot;./moment.md&quot;, { highWaterMark: 7 });</span></span>
<span class="line"><span style="color:#babed8;">let data = &quot;&quot;;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">result.on(&quot;data&quot;, (chunk) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  data += chunk;</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">result.on(&quot;end&quot;, () =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  console.log(data); // 不是���有��牛奶都叫���仑��</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在上面的示例中,产生这个输出结构的原因在于文件可读流在读取时会逐个读取 <code>Buffer</code>,我们将其设置了 <code>Buffer</code> 对象的长度为 <code>7</code>,它需要读取多次才能完整的读取,在这个过程,我们已知一个中文的长度为三个长度的 <code>Buffer</code> 对象,这就导致了有些数据的 <code>Buffer</code> 对象是缺失的,所以只能显示乱码了,我们在看上面的输出,<code>7</code> 个长度的 <code>Buffer</code> 对象只能读取两个中文,所以在 <code>不是</code> 后面也就显示了 <code>�</code> 乱码了。</p><h2 id="buffer-的-js-层的实现" tabindex="-1">Buffer 的 JS 层的实现 <a class="header-anchor" href="#buffer-的-js-层的实现" aria-label="Permalink to &quot;Buffer 的 JS 层的实现&quot;">​</a></h2><p><code>Buffer</code> 模块的实现非常复杂,代码也非常多,但是很多都是编码解码以及内存分配的逻辑,在 <code>Node</code> 中,它的实现方式分为三种,分别是:</p><ul><li><code>JavaScript</code> 层实现;</li><li><code>C++</code> 层实现;</li><li><code>C++</code> 层的另一种实现;</li></ul><p>我们从常用的使用方式 <code>Buffer.from</code> 来看看 <code>Buffer</code> 的核心实现,具体代码如下所示:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Buffer.from = function from(value, encodingOrOffset, length) {</span></span>
<span class="line"><span style="color:#babed8;">  if (typeof value === &quot;string&quot;) return fromString(value, encodingOrOffset);</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">function fromString(string, encoding) {</span></span>
<span class="line"><span style="color:#babed8;">  return fromStringFast(string, ops);</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">function fromStringFast(string, ops) {</span></span>
<span class="line"><span style="color:#babed8;">  const length = ops.byteLength(string);</span></span>
<span class="line"><span style="color:#babed8;">  // 长度太长，从 C++ 层分配</span></span>
<span class="line"><span style="color:#babed8;">  if (length &gt;= Buffer.poolSize &gt;&gt;&gt; 1)</span></span>
<span class="line"><span style="color:#babed8;">    return createFromString(string, ops.encodingVal);</span></span>
<span class="line"><span style="color:#babed8;">  // 剩下的不够了，扩容</span></span>
<span class="line"><span style="color:#babed8;">  if (length &gt; poolSize - poolOffset) createPool();</span></span>
<span class="line"><span style="color:#babed8;">  let b = new FastBuffer(allocPool, poolOffset, length);</span></span>
<span class="line"><span style="color:#babed8;">  const actual = ops.write(b, string, 0, length);</span></span>
<span class="line"><span style="color:#babed8;">  if (actual !== length) {</span></span>
<span class="line"><span style="color:#babed8;">    b = new FastBuffer(allocPool, poolOffset, actual);</span></span>
<span class="line"><span style="color:#babed8;">  }</span></span>
<span class="line"><span style="color:#babed8;">  poolOffset += actual;</span></span>
<span class="line"><span style="color:#babed8;">  alignPool();</span></span>
<span class="line"><span style="color:#babed8;">  return b;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>这段代码的主要逻辑如下:</p><ul><li>如果长度大于 <code>Node.js</code> 设置的阈值,则调用 <code>createFromString</code> 通过 <code>C++</code> 层直接分配内存;</li><li>否则判断之前剩下的内存是否足够,足够则直接分配。<code>Node.js</code> 初始化时会首先分配一大块内存由 <code>JavaScript</code> 管理,每次从这块内存了切分一部分给使用方,如果不够则扩容;</li></ul><p>在上面的代码中出现了 <code>createPool()</code> 函数的调用,该函数在前面已经讲过了,在该函数中 通过 <code>new FastBuffer(allocPool, poolOffset, length)</code> 从内存池中分配一块内存。</p><h2 id="参考资源" tabindex="-1">参考资源 <a class="header-anchor" href="#参考资源" aria-label="Permalink to &quot;参考资源&quot;">​</a></h2><ul><li>书籍: <code>深入浅出 Node.js</code></li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fnodejs.org%2Fdist%2Flatest-v18.x%2Fdocs%2Fapi%2Fbuffer.html%23static-method-bufferallocsize-fill-encoding" title="https://nodejs.org/dist/latest-v18.x/docs/api/buffer.html#static-method-bufferallocsize-fill-encoding" target="_blank" rel="noreferrer">Node官网</a></li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Ftheanarkh.github.io%2Funderstand-nodejs%2Fchapter27-%25E6%25B7%25B1%25E5%2585%25A5%25E7%2590%2586%25E8%25A7%25A3%2520Node.js%2520%25E7%259A%2584%2520Buffer%2F" title="https://theanarkh.github.io/understand-nodejs/chapter27-%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%20Node.js%20%E7%9A%84%20Buffer/" target="_blank" rel="noreferrer">Node.js 源码剖析</a></li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>体验过 <code>JavaScript</code> 友好的字符串操作后,有些开发者可能会形成思维定势,将 <code>Buffer</code> 当做字符串来理解。但字符串与 <code>Buffer</code> 之间有实质上的差异,即 <code>Buffer</code> 是二进制数据,字符串与 <code>Buffer</code> 之间存在编码关系。</p>`,71),o=[p];function r(c,b,t,i,d,u){return a(),n("div",null,o)}const y=s(l,[["render",r]]);export{m as __pageData,y as default};
