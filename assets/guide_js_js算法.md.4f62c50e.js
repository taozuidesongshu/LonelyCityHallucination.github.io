import{_ as s,o as a,c as n,N as e}from"./chunks/framework.610c50cb.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/js/js算法.md","lastUpdated":1718938826000}'),l={name:"guide/js/js算法.md"},p=e(`<p><a href="https://www.toutiao.com/article/6803302196621345283/?app=news_article_lite&amp;timestamp=1650465865&amp;use_new_style=1&amp;req_id=202204202244250101581560120814DBBA&amp;group_id=6803302196621345283&amp;share_token=38032DE7-1B79-43AF-B567-79FD5E676E50" target="_blank" rel="noreferrer"></a></p><h2 id="_106、shuffle" tabindex="-1">106、shuffle <a class="header-anchor" href="#_106、shuffle" aria-label="Permalink to &quot;106、shuffle&quot;">​</a></h2><p>使用 Fisher–Yates shuffle 洗牌算法对数组的内容进行随机排序，生成新的数组。</p><p>什么是 Fisher–Yates shuffle 洗牌算法? 算法是一个用来将一个有限集合生成一个随机排列的算法（数组随机排序）。这个算法生成的随机排列是等概率的。同时这个算法非常高效。</p><p>更多关于 Fisher–Yates shuffle 洗牌算法的内容，你可以查看</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const shuffle = ([...arr]) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">let m = arr.length;</span></span>
<span class="line"><span style="color:#babed8;">while (m) {</span></span>
<span class="line"><span style="color:#babed8;">const i = Math.floor(Math.random() * m--);</span></span>
<span class="line"><span style="color:#babed8;">[arr[m], arr[i]] = [arr[i], arr[m]];</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;">return arr;</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const foo = [1, 2, 3];</span></span>
<span class="line"><span style="color:#babed8;">shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>107、similarity 查找两个数组之间的交集。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const similarity = (arr, values) =&gt; arr.filter(v =&gt; values.includes(v));</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">similarity([1, 2, 3], [1, 2, 4]); // [1, 2]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>108、sleep 用于延迟异步函数的执行。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const sleep = ms =&gt; new Promise(resolve =&gt; setTimeout(resolve, ms));</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">async function sleepyWork() {</span></span>
<span class="line"><span style="color:#babed8;">console.log(&quot;I&#39;m going to sleep for 1 second.&quot;);</span></span>
<span class="line"><span style="color:#babed8;">await sleep(1000);</span></span>
<span class="line"><span style="color:#babed8;">console.log(&#39;I woke up after 1 second.&#39;);</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_109、smoothscroll" tabindex="-1">109、smoothScroll <a class="header-anchor" href="#_109、smoothscroll" aria-label="Permalink to &quot;109、smoothScroll&quot;">​</a></h2><p>此段代码用于让指定的DOM节点平滑滚动到可视区域。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const smoothScroll = element =&gt;</span></span>
<span class="line"><span style="color:#babed8;">document.querySelector(element).scrollIntoView({ behavior: &#39;smooth&#39; });</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">smoothScroll(&#39;#fooBar&#39;); // scrolls smoothly to the element with the id fooBar smoothScroll(&#39;.fooBar&#39;); // scrolls smoothly to the first element with a class of fooBar</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_110、sortcharactersinstring-此段代码将单词的内容按照字母的顺序进行重新排序。" tabindex="-1">110、sortCharactersInString 此段代码将单词的内容按照字母的顺序进行重新排序。 <a class="header-anchor" href="#_110、sortcharactersinstring-此段代码将单词的内容按照字母的顺序进行重新排序。" aria-label="Permalink to &quot;110、sortCharactersInString 此段代码将单词的内容按照字母的顺序进行重新排序。&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const sortCharactersInString = str =&gt; [...str].sort((a, b) =&gt; a.localeCompare(b)).join(&#39;&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">sortCharactersInString(&#39;cabbage&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// &#39;aabbceg&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>111、splitLines 用于将一段字符串按照”换行符“分割成数组进行输出。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const splitLines = str =&gt; str.split(/\\r?\\n/);</span></span>
<span class="line"><span style="color:#babed8;">splitLines(&#39;This\\nis a\\nmultiline\\nstring.\\n&#39;);</span></span>
<span class="line"><span style="color:#babed8;">// [&#39;This&#39;, &#39;is a&#39;, &#39;multiline&#39;, &#39;string.&#39; , &#39;&#39;]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>112、tripHTMLTags 格式化去掉 HTML 代码内容，输出文本内容。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const stripHTMLTags = str =&gt; str.replace(/&lt;[^&gt;]*&gt;/g, &#39;&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">stripHTMLTags(&#39;&lt;p&gt;&lt;em&gt;lorem&lt;/em&gt; &lt;strong&gt;ipsum&lt;/strong&gt;&lt;/p&gt;&#39;); // &#39;lorem ipsum&#39;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_113、sum-此段代码用于计算数字之和。" tabindex="-1">113、sum 此段代码用于计算数字之和。 <a class="header-anchor" href="#_113、sum-此段代码用于计算数字之和。" aria-label="Permalink to &quot;113、sum 此段代码用于计算数字之和。&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const sum = (...arr) =&gt; [...arr].reduce((acc, val) =&gt; acc + val, 0);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">sum(1, 2, 3, 4); // 10</span></span>
<span class="line"><span style="color:#babed8;">sum(...[1, 2, 3, 4]); // 10</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>114、tail 用于获取数组除第一个元素之外的所有元素，如果数组只有一个元素，则返回本数组。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const tail = arr =&gt; (arr.length &gt; 1 ? arr.slice(1) : arr);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">tail([1, 2, 3]); // [2,3]</span></span>
<span class="line"><span style="color:#babed8;">tail([1]); // [1]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_115、take-从数组开始位置截取n个元素-生成新的数组。" tabindex="-1">115、take 从数组开始位置截取n个元素，生成新的数组。 <a class="header-anchor" href="#_115、take-从数组开始位置截取n个元素-生成新的数组。" aria-label="Permalink to &quot;115、take 从数组开始位置截取n个元素，生成新的数组。&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const take = (arr, n = 1) =&gt; arr.slice(0, n);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">take([1, 2, 3], 5); // [1, 2, 3]</span></span>
<span class="line"><span style="color:#babed8;">take([1, 2, 3], 0); // []</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_116、takeright" tabindex="-1">116、takeRight <a class="header-anchor" href="#_116、takeright" aria-label="Permalink to &quot;116、takeRight&quot;">​</a></h2><p>从数组开始末尾截取n个元素，生成新的数组。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const takeRight = (arr, n = 1) =&gt; arr.slice(arr.length - n, arr.length);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">takeRight([1, 2, 3], 2); // [ 2, 3 ]</span></span>
<span class="line"><span style="color:#babed8;">takeRight([1, 2, 3]); // [3]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_117、timetaken-用来计算函数执行的时间。" tabindex="-1">117、timeTaken 用来计算函数执行的时间。 <a class="header-anchor" href="#_117、timetaken-用来计算函数执行的时间。" aria-label="Permalink to &quot;117、timeTaken 用来计算函数执行的时间。&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const timeTaken = callback =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">console.time(&#39;timeTaken&#39;);</span></span>
<span class="line"><span style="color:#babed8;">const r = callback();</span></span>
<span class="line"><span style="color:#babed8;">console.timeEnd(&#39;timeTaken&#39;);</span></span>
<span class="line"><span style="color:#babed8;">return r;</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">timeTaken(() =&gt; Math.pow(2, 10));</span></span>
<span class="line"><span style="color:#babed8;">// 1024, (logged): timeTaken: 0.02099609375ms</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_118、times" tabindex="-1">118、times <a class="header-anchor" href="#_118、times" aria-label="Permalink to &quot;118、times&quot;">​</a></h2><p>按照指定的次数，进行回调函数。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const times = (n, fn, context = undefined) =&gt; { let i = 0; while (fn.call(context, i) !== false &amp;&amp; ++i &lt; n) {} };</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">var output = &#39;&#39;; times(5, i =&gt; (output += i)); console.log(output); // 01234</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_119、tocurrency-此段代码用于按照指定的货币类型格式化货币数字。" tabindex="-1">119、toCurrency 此段代码用于按照指定的货币类型格式化货币数字。 <a class="header-anchor" href="#_119、tocurrency-此段代码用于按照指定的货币类型格式化货币数字。" aria-label="Permalink to &quot;119、toCurrency 此段代码用于按照指定的货币类型格式化货币数字。&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const toCurrency = (n, curr, LanguageFormat = undefined) =&gt;</span></span>
<span class="line"><span style="color:#babed8;">Intl.NumberFormat(LanguageFormat, { style: &#39;currency&#39;, currency: curr }).format(n);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">toCurrency(123456.789, &#39;EUR&#39;);</span></span>
<span class="line"><span style="color:#babed8;">// €123,456.79  | currency: Euro | currencyLangFormat: Local</span></span>
<span class="line"><span style="color:#babed8;">toCurrency(123456.789, &#39;USD&#39;, &#39;en-us&#39;);</span></span>
<span class="line"><span style="color:#babed8;">// $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)</span></span>
<span class="line"><span style="color:#babed8;">toCurrency(123456.789, &#39;USD&#39;, &#39;fa&#39;);</span></span>
<span class="line"><span style="color:#babed8;">// ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi</span></span>
<span class="line"><span style="color:#babed8;">toCurrency(322342436423.2435, &#39;JPY&#39;);</span></span>
<span class="line"><span style="color:#babed8;">// ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local</span></span>
<span class="line"><span style="color:#babed8;">toCurrency(322342436423.2435, &#39;JPY&#39;, &#39;fi&#39;);</span></span>
<span class="line"><span style="color:#babed8;">// 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_120、todecimalmark" tabindex="-1">120、toDecimalMark <a class="header-anchor" href="#_120、todecimalmark" aria-label="Permalink to &quot;120、toDecimalMark&quot;">​</a></h2><p>用于格式化数字，将其转换成逗号分隔的数字字符串。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const toDecimalMark = num =&gt; num.toLocaleString(&#39;en-US&#39;);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">toDecimalMark(12305030388.9087); // &quot;12,305,030,388.909&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_121、toggleclass-使用-element-classlist-toggle-来切换元素中指定样式类。" tabindex="-1">121、toggleClass 使用 element.classList.toggle() 来切换元素中指定样式类。 <a class="header-anchor" href="#_121、toggleclass-使用-element-classlist-toggle-来切换元素中指定样式类。" aria-label="Permalink to &quot;121、toggleClass 使用 element.classList.toggle() 来切换元素中指定样式类。&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const toggleClass = (el, className) =&gt; el.classList.toggle(className);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">toggleClass(document.querySelector(&#39;p.special&#39;), &#39;special&#39;);</span></span>
<span class="line"><span style="color:#babed8;">// The paragraph will not have the &#39;special&#39; class anymore</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_122、tomorrow" tabindex="-1">122、tomorrow <a class="header-anchor" href="#_122、tomorrow" aria-label="Permalink to &quot;122、tomorrow&quot;">​</a></h2><p>用于获取明天的日期。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const tomorrow = () =&gt; { let t = new Date(); t.setDate(t.getDate() + 1); return t.toISOString().split(&#39;T&#39;)[0]; };</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">tomorrow(); // 2019-09-08 (if current date is 2018-09-08)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_123、unfold-基于初始值-和步长生成一个新的数组。" tabindex="-1">123、unfold 基于初始值，和步长生成一个新的数组。 <a class="header-anchor" href="#_123、unfold-基于初始值-和步长生成一个新的数组。" aria-label="Permalink to &quot;123、unfold 基于初始值，和步长生成一个新的数组。&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const unfold = (fn, seed) =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">let result = [],</span></span>
<span class="line"><span style="color:#babed8;">val = [null, seed];</span></span>
<span class="line"><span style="color:#babed8;">while ((val = fn(val[1]))) result.push(val[0]);</span></span>
<span class="line"><span style="color:#babed8;">return result;</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">var f = n =&gt; (n &gt; 50 ? false : [-n, n + 10]);</span></span>
<span class="line"><span style="color:#babed8;">unfold(f, 10);</span></span>
<span class="line"><span style="color:#babed8;">// [-10, -20, -30, -40, -50]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_124、union" tabindex="-1">124、union <a class="header-anchor" href="#_124、union" aria-label="Permalink to &quot;124、union&quot;">​</a></h2><p>合并两个数组，并删除重复的内容。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const union = (a, b) =&gt; Array.from(new Set([...a, ...b])); union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_125、uniqueelements-使用-es6-的-set-和-rest-运算去除数组中重复的元素。" tabindex="-1">125、uniqueElements 使用 ES6 的 set 和 …rest 运算去除数组中重复的元素。 <a class="header-anchor" href="#_125、uniqueelements-使用-es6-的-set-和-rest-运算去除数组中重复的元素。" aria-label="Permalink to &quot;125、uniqueElements 使用 ES6 的 set 和 …rest 运算去除数组中重复的元素。&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">onst uniqueElements = arr =&gt; [...new Set(arr)];</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">uniqueElements([1, 2, 2, 3, 4, 4, 5]);</span></span>
<span class="line"><span style="color:#babed8;">// [1, 2, 3, 4, 5]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_126-validatenumber" tabindex="-1">126. validateNumber <a class="header-anchor" href="#_126-validatenumber" aria-label="Permalink to &quot;126. validateNumber&quot;">​</a></h2><pre><code> 用于检查参数类型是否是数字。
</code></pre><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">const validateNumber = n =&gt; !isNaN(parseFloat(n)) &amp;&amp; isFinite(n) &amp;&amp; Number(n) == n;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">validateNumber(&#39;10&#39;); // true</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_127-words-将一段英文字符串拆分成单词数组-去除一些特殊符号-。" tabindex="-1">127. words 将一段英文字符串拆分成单词数组（去除一些特殊符号）。 <a class="header-anchor" href="#_127-words-将一段英文字符串拆分成单词数组-去除一些特殊符号-。" aria-label="Permalink to &quot;127. words 将一段英文字符串拆分成单词数组（去除一些特殊符号）。&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const words = (str, pattern = /[^a-zA-Z-]+/) =&gt; str.split(pattern).filter(Boolean);</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">words(&#39;I love javaScript!!&#39;);</span></span>
<span class="line"><span style="color:#babed8;">// [&quot;I&quot;, &quot;love&quot;, &quot;javaScript&quot;]</span></span>
<span class="line"><span style="color:#babed8;">words(&#39;python, javaScript &amp; coffee&#39;);</span></span>
<span class="line"><span style="color:#babed8;">// [&quot;python&quot;, &quot;javaScript&quot;, &quot;coffee&quot;]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_128-在网页上获取选定的文本" tabindex="-1">128 . 在网页上获取选定的文本 <a class="header-anchor" href="#_128-在网页上获取选定的文本" aria-label="Permalink to &quot;128 . 在网页上获取选定的文本&quot;">​</a></h2><blockquote><p>浏览器在全局窗口对象上有一个名为 getSelection 的内置方法。使用此方法，你可以创建一个单行，返回网页上突出显示或选定的文本。</p></blockquote><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> getSelectedText </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSelection</span><span style="color:#BABED8;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,58),r=[p];function t(o,i,c,b,d,u){return a(),n("div",null,r)}const y=s(l,[["render",t]]);export{h as __pageData,y as default};
