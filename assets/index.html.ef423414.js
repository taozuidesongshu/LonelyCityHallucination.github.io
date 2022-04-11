import{_ as r,r as o,o as p,c as l,a as n,e as a,F as t,d as e,b as c}from"./app.2c8e1465.js";const i={},d=e(`<h1 id="docker-\u5BB9\u5668\u5E38\u7528\u64CD\u4F5C\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#docker-\u5BB9\u5668\u5E38\u7528\u64CD\u4F5C\u8BE6\u89E3" aria-hidden="true">#</a> docker \u5BB9\u5668\u5E38\u7528\u64CD\u4F5C\u8BE6\u89E3</h1><h2 id="_1-\u521B\u5EFA\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a> 1.\u521B\u5EFA\u5BB9\u5668</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B0\u5EFA\u5E76\u542F\u52A8\u4E00\u4E2Asrs\u955C\u50CF\u7684\u5BB9\u5668</span>
$ <span class="token function">docker</span> run -it --restart<span class="token operator">=</span>always -p <span class="token number">1985</span>:1985 -v /dev:/dev2 -v /mnt/nfs:/mnt/volume1 --name srs-service srs
--restart<span class="token operator">=</span>always <span class="token comment"># \u8868\u793A\u5F00\u673A\u542F\u7528</span>
-p <span class="token number">1985</span>:1985 <span class="token comment"># \u8868\u793A\u4E3B\u673A\u7AEF\u53E3\u4E0Edocker\u7AEF\u53E3\u7684\u6620\u5C04</span>
-v /mnt/nfs:/mnt/volume1  <span class="token comment"># \u8868\u793A\u672C\u673A/mnt/nfs\u76EE\u5F55\u6302\u8F7D\u5230\u5BB9\u5668/mnt/volume1\u76EE\u5F55</span>
srs <span class="token comment"># \u8868\u793A\u955C\u50CF\u6807\u8BC6\u7B26</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_2-\u542F\u52A8-\u505C\u6B62\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_2-\u542F\u52A8-\u505C\u6B62\u5BB9\u5668" aria-hidden="true">#</a> 2.\u542F\u52A8/\u505C\u6B62\u5BB9\u5668</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8</span>
$ <span class="token function">docker</span> container start xxx
<span class="token comment"># \u7EC8\u6B62</span>
$ <span class="token function">docker</span> container stop xxx
<span class="token comment"># \u67E5\u8BE2\u4FEE\u6539</span>
$ <span class="token function">docker</span> container <span class="token function">diff</span> xxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_3-\u8FDB\u5165\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_3-\u8FDB\u5165\u5BB9\u5668" aria-hidden="true">#</a> 3.\u8FDB\u5165\u5BB9\u5668</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5BB9\u5668\u5217\u8868\uFF08-a \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u6240\u6709\u5DF2\u7ECF\u521B\u5EFA\u7684\u5305\u62EC\u7EC8\u6B62\u72B6\u6001\u7684\u5BB9\u5668\uFF09</span>
$ <span class="token function">docker</span> container <span class="token function">ls</span> -a
<span class="token comment"># \u8FDB\u5165\u5BB9\u5668</span>
$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it xxx /bin/bash <span class="token comment">#xxx \u4E3A\u5BB9\u5668\u6807\u8BC6\u7B26</span>
<span class="token comment"># \u53EF\u4EE5\u901A\u8FC7 docker container update \u66F4\u65B0\u5BB9\u5668\uFF0C\u4F8B\u5982 </span>
<span class="token function">docker</span> container update --restart<span class="token operator">=</span><span class="token string">&quot;no&quot;</span> <span class="token operator">&lt;</span> container id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4-\u5BFC\u51FA\u548C\u5BFC\u5165\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_4-\u5BFC\u51FA\u548C\u5BFC\u5165\u5BB9\u5668" aria-hidden="true">#</a> 4.\u5BFC\u51FA\u548C\u5BFC\u5165\u5BB9\u5668</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5BFC\u51FA\u5BB9\u5668 \u672C\u5730\u67D0\u4E2A\u5BB9\u5668\u5FEB\u7167 \u4F7F\u7528\u547D\u4EE4 docker export </span>
$ <span class="token function">docker</span> <span class="token builtin class-name">export</span> xxx <span class="token operator">&gt;</span> container20201216.tar
<span class="token comment"># \u5BFC\u51FA\u5BB9\u5668 \u4F7F\u7528 docker import</span>
$ <span class="token function">cat</span> container20201216.tar <span class="token operator">|</span> <span class="token function">docker</span> <span class="token function">import</span> - srs/srs:v1.0
<span class="token comment"># \u901A\u8FC7\u6307\u5B9A URL \u6216\u8005\u67D0\u4E2A\u76EE\u5F55\u6765\u5BFC\u5165\uFF0C\u4F8B\u5982</span>
$ <span class="token function">docker</span> <span class="token function">import</span> http://example.com/exampleimage.tgz example/imagerepo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_5-\u5220\u9664\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_5-\u5220\u9664\u5BB9\u5668" aria-hidden="true">#</a> 5. \u5220\u9664\u5BB9\u5668</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u53EF\u4EE5\u4F7F\u7528 docker container rm \u6765\u5220\u9664\u4E00\u4E2A\u5904\u4E8E\u7EC8\u6B62\u72B6\u6001\u7684\u5BB9\u5668, \u5982</span>
$ <span class="token function">docker</span> container <span class="token function">rm</span>  trusting_newton
<span class="token comment"># \u5982\u679C\u6570\u91CF\u592A\u591A\u8981\u4E00\u4E2A\u4E2A\u5220\u9664\u53EF\u80FD\u4F1A\u5F88\u9EBB\u70E6\uFF0C\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u53EF\u4EE5\u6E05\u7406\u6389\u6240\u6709\u5904\u4E8E\u7EC8\u6B62\u72B6\u6001\u7684\u5BB9\u5668\u3002</span>
$ <span class="token function">docker</span> container prune
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_6-\u5BB9\u5668\u7684\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_6-\u5BB9\u5668\u7684\u4FE1\u606F" aria-hidden="true">#</a> 6. \u5BB9\u5668\u7684\u4FE1\u606F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># PID \u4FE1\u606F</span>
$ <span class="token function">docker</span> inspect --format <span class="token string">&#39;{{ .State.Pid }}&#39;</span> <span class="token operator">&lt;</span>CONTAINER ID or NAME<span class="token operator">&gt;</span>
<span class="token comment"># IP \u5730\u5740</span>
$ <span class="token function">docker</span> inspect --format <span class="token string">&#39;{{ .NetworkSettings.IPAddress }}&#39;</span> <span class="token operator">&lt;</span>CONTAINER ID or NAME<span class="token operator">&gt;</span>
<span class="token comment"># \u5BB9\u5668\u914D\u7F6E</span>
$ <span class="token function">docker</span> inspect <span class="token operator">&lt;</span>CONTAINER ID or NAME<span class="token operator">&gt;</span>
<span class="token comment"># \u5BB9\u5668\u76D1\u63A7</span>
$ <span class="token function">docker</span> stats
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u5DF2\u7ECF\u8FD0\u884C\u7684\u5BB9\u5668\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>docker update</code> \u66F4\u65B0\u914D\u7F6E\u53C2\u6570 <code>&lt;CONTAINER ID or NAME&gt;</code>\uFF08\u9700\u8981\u5148\u505C\u6B62\u5BB9\u5668\u7684\u8FD0\u884C\uFF09 \u6216\u8005\u901A\u8FC7 <code>/var/lib/docker/containers/\u5BB9\u5668ID</code> \u4E0B\u7684 <code>hostconfig.json</code> \u7B49\u6587\u4EF6\uFF0C\u4FEE\u6539\u542F\u52A8\u914D\u7F6E\u53C2\u6570</p></blockquote><h2 id="_7-\u63A7\u5236\u5BB9\u5668\u7CFB\u7EDF\u8D44\u6E90\u5360\u7528" tabindex="-1"><a class="header-anchor" href="#_7-\u63A7\u5236\u5BB9\u5668\u7CFB\u7EDF\u8D44\u6E90\u5360\u7528" aria-hidden="true">#</a> 7. \u63A7\u5236\u5BB9\u5668\u7CFB\u7EDF\u8D44\u6E90\u5360\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> create <span class="token comment">#\u547D\u4EE4\u521B\u5EFA\u5BB9\u5668</span>
<span class="token function">docker</span> run <span class="token comment">#\u521B\u5EFA\u5E76\u542F\u52A8\u5BB9\u5668\u7684\u65F6\u5019</span>
<span class="token comment"># \u53EF\u4EE5\u4F7F\u7528:</span>
 -c<span class="token operator">|</span>--cpu-shares<span class="token punctuation">[</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># \u53C2\u6570\u6765\u8C03\u6574\u5BB9\u5668\u4F7F\u7528 CPU \u7684\u6743\u91CD</span>
-m<span class="token operator">|</span>--memory<span class="token punctuation">[</span><span class="token operator">=</span>MEMORY<span class="token punctuation">]</span> <span class="token comment"># \u53C2\u6570\u6765\u8C03\u6574\u5BB9\u5668\u4F7F\u7528\u5185\u5B58\u7684\u5927\u5C0F\u3002</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_8-docker-\u6E90" tabindex="-1"><a class="header-anchor" href="#_8-docker-\u6E90" aria-hidden="true">#</a> 8. docker \u6E90</h2><ul><li>Docker \u5B98\u65B9\u4E2D\u56FD\u533A\uFF1Ahttps://registry.docker-cn.com</li><li>\u7F51\u6613\uFF1Ahttp://hub-mirror.c.163.com</li><li>\u4E2D\u56FD\u79D1\u6280\u5927\u5B66\uFF1Ahttps://docker.mirrors.ustc.edu.cn</li><li>\u963F\u91CC\u4E91\uFF1Ahttps://y0qd3iq.mirror.aliyuncs.com</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://y0qd3iq.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="docker\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#docker\u4ED3\u5E93" aria-hidden="true">#</a> Docker\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u767B\u9646\u6210\u529F\u540E\uFF0C\u53EF\u4EE5\u62C9\u53D6\u8D26\u53F7\u4E0B\u7684\u5168\u90E8\u955C\u50CF</span>
<span class="token function">docker</span> login

<span class="token comment"># \u9000\u51FA\u8D26\u53F7</span>
<span class="token function">docker</span> <span class="token builtin class-name">logout</span>

<span class="token comment"># \u641C\u7D22\u955C\u50CF</span>
<span class="token function">docker</span> search

<span class="token comment"># \u5C06\u672C\u5730\u7684\u955C\u50CF\u63A8\u5230\u4ED3\u5E93</span>
<span class="token function">docker</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="dockerfile\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#dockerfile\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Dockerfile\u5E38\u7528\u547D\u4EE4</h2>`,22),u={href:"https://www.cnblogs.com/XiaoYang-sir/p/16092169.html?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"},m=c("\u4F20\u9001\u95E8"),b={href:"https://www.cnblogs.com/zhangxiaoji/p/16096432.html?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"},h=c("Docker \u6838\u5FC3\u77E5\u8BC6\u56DE\u987E"),k=e(`<h3 id="from" tabindex="-1"><a class="header-anchor" href="#from" aria-hidden="true">#</a> FROM</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5\uFF1AFROM &lt;image&gt;:&lt;tag&gt;</span>
<span class="token comment"># \`FROM\`:\u6307\u660E\u6784\u5EFA\u7684\u65B0\u955C\u50CF\u662F\u6765\u81EA\u4E8E\u54EA\u4E2A\u57FA\u7840\u955C\u50CF \u5982\u679C\u6CA1\u6709\u9009\u62E9tag\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u4E3A Latest\u3002</span>
<span class="token comment"># \u5982\u679C\u4E0D\u4EE5\u4EFB\u4F55\u955C\u50CF\u4E3A\u57FA\u7840\uFF0C\u90A3\u4E48 \u5199\u6CD5\u4E3A\uFF1AFROM scratch\u3002scratch \u955C\u50CF\u662F\u4E00\u4E2A\u7A7A\u955C\u50CF\uFF0C</span>
<span class="token comment"># \u53EF\u4EE5\u7528\u4E8E\u6784\u5EFA busybox \u7B49\u8D85\u5C0F\u955C\u50CF\uFF0C\u53EF\u4EE5\u8BF4\u662F\u771F\u6B63\u7684\u4ECE\u96F6\u5F00\u59CB\u6784\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u955C\u50CF\u3002</span>
FROM centos:7
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="maintainer" tabindex="-1"><a class="header-anchor" href="#maintainer" aria-hidden="true">#</a> MAINTAINER</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6307\u660E\u955C\u50CF\u7EF4\u62A4\u8005\u53CA\u5176\u8054\u7CFB\u65B9\u5F0F\uFF08\u4E00\u822C\u662F\u90AE\u7BB1\u5730\u5740\uFF09</span>
<span class="token comment"># \u8BED\u6CD5\uFF1ALABEL &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt; &lt;key&gt;=&lt;value&gt; ...</span>
LABEL <span class="token assign-left variable">maintainer</span><span class="token operator">=</span><span class="token string">&quot;xxx.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="run-\u6784\u5EFA\u955C\u50CF\u65F6\u8FD0\u884C\u7684shell\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#run-\u6784\u5EFA\u955C\u50CF\u65F6\u8FD0\u884C\u7684shell\u547D\u4EE4" aria-hidden="true">#</a> RUN \u6784\u5EFA\u955C\u50CF\u65F6\u8FD0\u884C\u7684Shell\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6784\u5EFA\u955C\u50CF\u65F6\u8FD0\u884C\u7684 Shell \u547D\u4EE4\uFF0C\u6BD4\u5982\u6784\u5EFA\u7684\u65B0\u955C\u50CF\u4E2D\u60F3\u5728 /usr/local \u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A Java \u76EE\u5F55\u3002</span>
RUN <span class="token function">mkdir</span> -p /usr/local/java
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="add-\u62F7\u8D1D\u6587\u4EF6\u6216\u76EE\u5F55\u5230\u955C\u50CF\u4E2D-\u5982\u679C\u662Furl\u6216\u538B\u7F29\u5305-\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u6216\u81EA\u52A8\u89E3\u538B\u3002" tabindex="-1"><a class="header-anchor" href="#add-\u62F7\u8D1D\u6587\u4EF6\u6216\u76EE\u5F55\u5230\u955C\u50CF\u4E2D-\u5982\u679C\u662Furl\u6216\u538B\u7F29\u5305-\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u6216\u81EA\u52A8\u89E3\u538B\u3002" aria-hidden="true">#</a> ADD:\u62F7\u8D1D\u6587\u4EF6\u6216\u76EE\u5F55\u5230\u955C\u50CF\u4E2D, \u5982\u679C\u662FURL\u6216\u538B\u7F29\u5305\uFF0C\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u6216\u81EA\u52A8\u89E3\u538B\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5\uFF1AADD &lt;src&gt;... &lt;dest&gt;</span>
ADD jdk-11.0.6_linux-x64_bin.tar.gz /usr/local/java
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="copy-\u62F7\u8D1D\u6587\u4EF6\u6216\u76EE\u5F55\u5230\u955C\u50CF\u4E2D\u3002\u7528\u6CD5\u548C-add-\u4E00\u6837-\u53EA\u662F\u4E0D\u652F\u6301\u81EA\u52A8\u4E0B\u8F7D\u548C\u89E3\u538B\u3002" tabindex="-1"><a class="header-anchor" href="#copy-\u62F7\u8D1D\u6587\u4EF6\u6216\u76EE\u5F55\u5230\u955C\u50CF\u4E2D\u3002\u7528\u6CD5\u548C-add-\u4E00\u6837-\u53EA\u662F\u4E0D\u652F\u6301\u81EA\u52A8\u4E0B\u8F7D\u548C\u89E3\u538B\u3002" aria-hidden="true">#</a> COPY \u62F7\u8D1D\u6587\u4EF6\u6216\u76EE\u5F55\u5230\u955C\u50CF\u4E2D\u3002\u7528\u6CD5\u548C ADD \u4E00\u6837\uFF0C\u53EA\u662F\u4E0D\u652F\u6301\u81EA\u52A8\u4E0B\u8F7D\u548C\u89E3\u538B\u3002</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5\uFF1ACOPY &lt;src&gt;... &lt;dest&gt;</span>
COPY jdk-11.0.6_linux-x64_bin.tar.gz /usr/local/java
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="workdir" tabindex="-1"><a class="header-anchor" href="#workdir" aria-hidden="true">#</a> WORKDIR</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E3A\`RUN\u3001CMD\u3001\u4EE5\u53CACOPY , ADD\`\u7B49\u8BBE\u7F6E\u9ED8\u8BA4\u5DE5\u4F5C\u76EE\u5F55,\u542F\u52A8\u5BB9\u5668\u540E\u4F1A\u8FDB\u5165\u8FD9\u4E2A\u76EE\u5F55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="volumn" tabindex="-1"><a class="header-anchor" href="#volumn" aria-hidden="true">#</a> Volumn</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u6302\u8F7D\u70B9\uFF08\u5171\u4EAB\u5377\uFF09, \u7528\u4E8E\u5BB9\u5668\u95F4\u6587\u4EF6\u5171\u4EAB\uFF0C\u67D0\u4E2A\u5BB9\u5668\u4FEE\u6539\u4E86\u6587\u4EF6\uFF0C \u5176\u4ED6\u5BB9\u5668\u5185\u7684\u76F8\u540C\u76EE\u5F55\u7684\u6587\u4EF6\u4E5F\u4F1A\u540C\u6B65\u66F4\u6539\uFF0C \u8981\u786E\u4FDD\u4E0D\u540C\u5BB9\u5668\u95F4\u6709\u76F8\u540C\u7684\u76EE\u5F55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="expose" tabindex="-1"><a class="header-anchor" href="#expose" aria-hidden="true">#</a> Expose</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u66B4\u9732\u5BB9\u5668\u8FD0\u884C\u65F6\u7684\u76D1\u542C\u7AEF\u53E3\u7ED9\u5916\u90E8\uFF0C\u53EF\u4EE5\u6307\u5B9A\u7AEF\u53E3\u662F\u76D1\u542C TCP \u8FD8\u662F UDP\uFF0C\u5982\u679C\u672A\u6307\u5B9A\u534F\u8BAE\uFF0C\u5219\u9ED8\u8BA4\u4E3A TCP\u3002</span>
<span class="token comment"># \u8BED\u6CD5\uFF1AEXPOSE &lt;port&gt; [&lt;port&gt;/&lt;protocol&gt;...]</span>
EXPOSE <span class="token number">80</span> <span class="token number">443</span> <span class="token number">8080</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># :\u542F\u52A8\u5BB9\u5668\u65F6\u6267\u884C\u7684\`Shell\`\u547D\u4EE4, \u4F1A\u88AB\`docker run\` \u7684\u53C2\u6570\u6240\u8986\u76D6</span>
<span class="token comment"># \u542F\u52A8\u5BB9\u5668\u65F6\u6267\u884C\u7684 Shell \u547D\u4EE4\uFF0C\u5728 Dockerfile \u4E2D\u53EA\u80FD\u6709\u4E00\u6761 CMD \u547D\u4EE4\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u591A\u6761 CMD\uFF0C\u53EA\u6709\u6700\u540E\u4E00\u6761 CMD \u4F1A\u751F\u6548\u3002</span>
<span class="token comment"># \u8BED\u6CD5\uFF1A</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;executable&quot;</span>, <span class="token string">&quot;param1&quot;</span>, <span class="token string">&quot;param2&quot;</span><span class="token punctuation">]</span>
<span class="token comment"># \u793A\u4F8B\uFF1ACMD [&quot;/usr/local/tomcat/bin/catalina.sh&quot;, &quot;run&quot;]</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;param1&quot;</span>, <span class="token string">&quot;param2&quot;</span><span class="token punctuation">]</span>
<span class="token comment"># \u793A\u4F8B\uFF1ACMD [&quot;echo&quot;, &quot;$JAVA_HOME&quot;]</span>
CMD <span class="token builtin class-name">command</span> param1 param2
<span class="token comment"># \u793A\u4F8B\uFF1ACMD echo $JAVA_HOME</span>
CMD <span class="token builtin class-name">echo</span> <span class="token variable">$JAVA_HOME</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> ENV</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u5BB9\u5668\u5185\u73AF\u5883\u53D8\u91CF\u3002</span>
<span class="token comment"># \u8BED\u6CD5\uFF1AENV &lt;key&gt; &lt;value&gt;\u6DFB\u52A0\u5355\u4E2A\uFF0CENV &lt;key&gt;=&lt;value&gt; ...\u6DFB\u52A0\u591A\u4E2A\u3002</span>
ENV JAVA_HOME /usr/local/java/jdk-11.0.6/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="docker-image\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker-image\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Docker image\u5E38\u7528\u547D\u4EE4</h2><p><code>docker build</code>: \u6839\u636E<code>dockerfile</code>\u6784\u5EFA\u4E00\u4E2A\u955C\u50CF</p><p><code>docker images</code> : \u5217\u51FA\u6240\u6709\u7684\u955C\u50CF</p><p><code>docker rmi</code> : \u5220\u9664\u955C\u50CF</p><p><code>docker pull</code>: \u5728\u4E3B\u673A\u4E0A\u4F7F\u7528\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u955C\u50CF\u65F6docker\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u8FD9\u4E2A\u955C\u50CF\uFF0C \u60F3\u8981\u63D0\u524D\u4E0B\u8F7D\u5C31\u4F7F\u7528\u8FD9\u4E2A\u547D\u4EE4\u6765\u4E0B\u8F7D</p><p><code>docker run</code> : \u4F7F\u7528\u955C\u50CF\u751F\u6210\u5BB9\u5668\u5E76\u542F\u52A8</p><ul><li><code>-- privileged</code> \uFF1A\u4F7F\u5BB9\u5668\u4E2D\u7684root\u62E5\u6709\u771F\u6B63\u7684root\u6743\u9650\uFF0C\u5426\u5219root\u53EA\u662F\u5916\u90E8\u4E00\u4E2A\u666E\u901A\u7528\u6237\u6743\u9650</li><li><code>-t</code>: \u5728\u5BB9\u5668\u5185\u6307\u5B9A\u4E00\u4E2A\u4F2A\u7EC8\u7AEF\u6216\u8005\u7EC8\u7AEF</li><li><code>-i</code>: \u5141\u8BB8\u63A7\u5236\u53F0\u4EA4\u4E92</li><li><code>-d</code>: \u8BA9\u5BB9\u5668\u5728\u540E\u53F0\u8FD0\u884C</li><li><code>-p</code>: \u5C06\u5185\u90E8\u7684\u7F51\u7EDC\u7AEF\u53E3\u968F\u673A\u6620\u5C04\u5230\u4E3B\u673A\u4E0A\uFF0C \u4E5F\u53EF\u4EE5\u6307\u5B9A\u7AEF\u53E3</li><li><code>- P</code> : \u968F\u673A\u7AEF\u53E3\u6620\u5C04,\u5BB9\u5668\u5185\u90E8\u7AEF\u53E3\u968F\u673A\u6620\u5C04\u5230\u4E3B\u673A\u7684\u7AEF\u53E3</li><li><code>--name</code>: \u547D\u540D\u5BB9\u5668\uFF0C \u4E0D\u6307\u5B9Adocker\u4F1A\u81EA\u52A8\u547D\u540D</li><li><code>-h/--hostname</code>: \u8BBE\u5B9A\u5BB9\u5668\u7684\u4E3B\u673A\u540D\uFF0C \u4F1A\u88AB\u5199\u5230\u5BB9\u5668\u5185\u7684/etc/hostname\u548C/etc/hosts</li><li><code>-v</code>: \u6302\u8F7D\u5BBF\u4E3B\u673A\u7684\u4E00\u4E2A\u76EE\u5F55 /\u5BBF\u4E3B\u673A\u76EE\u5F55\uFF1A/\u5BB9\u5668\u76EE\u5F55</li></ul><p><code>docker tag</code>: \u7ED9\u672C\u5730\u955C\u50CF\u6253\u6807\u7B7E \u53D6\u6D88\u6807\u7B7E\u4F7F\u7528 docker rmi</p><p><code>docker save</code>:\u5C06\u6307\u5B9A\u955C\u50CF\u4FDD\u5B58\u6210 tar \u5F52\u6863\u6587\u4EF6\u3002 <code>docker save \u2013o export.tar imageId </code></p><p><code>docker load</code> :\u7528\u6765\u8F7D\u5165\u955C\u50CF\u5305</p><p><code>docker load \u2013i export.tar</code></p><h2 id="docker-container\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker-container\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Docker container\u5E38\u7528\u547D\u4EE4</h2><p><code>docker ps</code>: \u5217\u51FA\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</p><p><code>docker logs</code>: \u67E5\u770B\u5BB9\u5668\u5185\u7684\u6807\u51C6\u8F93\u51FA</p><p><code>docker start </code> \u5BB9\u5668\u542F\u52A8</p><p><code>docker stop</code> \u5BB9\u5668\u505C\u6B62</p><p><code>docker rm /rm \u2013f</code> : \u5220\u9664\u5BB9\u5668</p><p><code>docker port</code> : \u663E\u793A\u5BB9\u5668\u7684\u7AEF\u53E3</p><p><code>docker top</code>: \u67E5\u770B\u5BB9\u5668\u5185\u8FD0\u884C\u7684\u8FDB\u7A0B</p><p><code>docker exec</code> :\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u4E2D\u6267\u884C\u547D\u4EE4 <code>- i</code> \u5141\u8BB8\u63A7\u5236\u53F0\u4EA4\u4E92 <code>-t</code> \u5728\u5BB9\u5668\u5185\u6307\u5B9A\u4E00\u4E2A\u4F2A\u7EC8\u7AEF\u6216\u8005\u7EC8\u7AEF</p><p><code>docker inspect</code> : \u67E5\u770B\u5BB9\u5668\u7684\u5E95\u5C42\u4FE1\u606F\uFF0C \u8FD4\u56DE\u5BB9\u5668\u7684\u914D\u7F6E\u548C\u72B6\u6001\u4FE1\u606F</p><p><code>docker cp</code>:\u5BB9\u5668\u548C\u5BBF\u4E3B\u673A\u4E4B\u95F4\u7684\u6587\u4EF6\u590D\u5236</p><p>\u4E0B\u8F7D\u6587\u4EF6 <code>docker cp </code><code>\u5BB9\u5668ID:/home/test C://Users//Administrator//Desktop</code></p><p>\u4E0A\u4F20\u6587\u4EF6 <code>docker cp </code><code>C://Users//Administrator//Desktop//test2 \u5BB9\u5668ID:/home</code></p><p><code>docker commit</code>:\u4ECE\u5BB9\u5668\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u955C\u50CF</p><p><code>ocker commit containerId aaa:tag</code></p><p><code>-m</code> : \u63D0\u4EA4\u7684\u63CF\u8FF0\u4FE1\u606F</p><p><code>-a</code>\uFF1A\u6307\u5B9A\u955C\u50CF\u4F5C\u8005</p><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5BB9\u5668\u8D44\u6E90\u5360\u7528</span>
<span class="token function">docker</span> stats --no-stream  
<span class="token comment"># \u91CD\u542F\u6307\u5B9A\u5BB9\u5668</span>
<span class="token function">docker</span> restart \u5BB9\u5668id
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,50);function g(v,x){const s=o("ExternalLinkIcon");return p(),l(t,null,[d,n("p",null,[n("a",u,[m,a(s)]),n("a",b,[h,a(s)])]),k],64)}var _=r(i,[["render",g],["__file","index.html.vue"]]);export{_ as default};
