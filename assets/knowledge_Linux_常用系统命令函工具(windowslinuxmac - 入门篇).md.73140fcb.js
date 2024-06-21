import{_ as s,o as t,c as a,N as l}from"./chunks/framework.610c50cb.js";const m=JSON.parse('{"title":"常用系统命令函工具(windows/linux/mac - 入门篇)","description":"","frontmatter":{},"headers":[],"relativePath":"knowledge/Linux/常用系统命令函工具(windowslinuxmac - 入门篇).md","lastUpdated":1718938826000}'),e={name:"knowledge/Linux/常用系统命令函工具(windowslinuxmac - 入门篇).md"},n=l(`<h1 id="常用系统命令函工具-windows-linux-mac-入门篇" tabindex="-1">常用系统命令函工具(windows/linux/mac - 入门篇) <a class="header-anchor" href="#常用系统命令函工具-windows-linux-mac-入门篇" aria-label="Permalink to &quot;常用系统命令函工具(windows/linux/mac - 入门篇)&quot;">​</a></h1><blockquote><p>使用了 wsl 要在 windows 和 linux 之间进行切换? 这里以 window: PowerShell/CMD, Liunx: Zsh 为例熟悉常用命令</p></blockquote><h2 id="终端工具" tabindex="-1">终端工具 <a class="header-anchor" href="#终端工具" aria-label="Permalink to &quot;终端工具&quot;">​</a></h2><ol><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmicrosoft%2Fterminal" title="https://github.com/microsoft/terminal" target="_blank" rel="noreferrer">microsoft/terminal</a></li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fwez%2Fwezterm" title="https://github.com/wez/wezterm" target="_blank" rel="noreferrer">wez/wezterm</a> 采用 Rust 编写， lua 配置</li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fgnachman%2FiTerm2" title="https://github.com/gnachman/iTerm2" target="_blank" rel="noreferrer">gnachman/iTerm2</a></li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvercel%2Fhyper" title="https://github.com/vercel/hyper" target="_blank" rel="noreferrer">vercel/hyper</a> web 技术编写</li></ol><h2 id="常用-shell" tabindex="-1">常用 shell <a class="header-anchor" href="#常用-shell" aria-label="Permalink to &quot;常用 shell&quot;">​</a></h2><ul><li>zsh</li><li>bash</li><li>powershell</li><li>...</li></ul><h2 id="时间日期" tabindex="-1">时间日期 <a class="header-anchor" href="#时间日期" aria-label="Permalink to &quot;时间日期&quot;">​</a></h2><ul><li>date</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">date</span></span>
<span class="line"><span style="color:#F78C6C;">time</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># cmd/zsh</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="查看别名" tabindex="-1">查看别名 <a class="header-anchor" href="#查看别名" aria-label="Permalink to &quot;查看别名&quot;">​</a></h2><ul><li>cmd 中没有 alias 别名</li></ul><p>在 PowerShell/zsh/... 中，可以查看命令别名</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">alias</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>在 PowerShell 中，得到的是 PowerShell 全名与短名的关系:</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d37f551e96a842af859a47e2e629188d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="image.png"></p><ul><li>Zsh 中是，得到的是各种内置别名，以 git 居多，当然如果在 ~/.zshrc 中配置 alias 后得到的</li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8910343c76f04a34ade063dabda9e0fa~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="image.png"></p><h2 id="切换当前位置" tabindex="-1">切换当前位置 <a class="header-anchor" href="#切换当前位置" aria-label="Permalink to &quot;切换当前位置&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>cd</td><td>Set-location/cd</td><td>cd</td><td>切换指定的目录</td></tr></tbody></table><ul><li>cmd/zsh/PowerShell...</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">d:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">windwow:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">切换到</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">d</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">盘</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/etc/hosts</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">切换到</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">etc</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">目录下处理</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">hosts</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">文件</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">%hosts%</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>PowerShell</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Set-location</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">d:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">windwows</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">PowerShell:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">切换到</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">d</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">盘</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>PowerShell 有两个命令支持，很强大</p><h2 id="列出当前文件列表" tabindex="-1">列出当前文件列表 <a class="header-anchor" href="#列出当前文件列表" aria-label="Permalink to &quot;列出当前文件列表&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>dir</td><td>dir/ls/gci/Get-ChildItem</td><td>dir/ls</td><td>查看当前文件下文件/文件夹</td></tr></tbody></table><ul><li>cmd 查看 windows 环境变量路径：</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">env:</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># powershell</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="当前用户" tabindex="-1">当前用户 <a class="header-anchor" href="#当前用户" aria-label="Permalink to &quot;当前用户&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>whoami</td><td></td><td></td><td></td></tr></tbody></table><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">whoami</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># cmd/powershell/zsh</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="ip-列表查询" tabindex="-1">ip 列表查询 <a class="header-anchor" href="#ip-列表查询" aria-label="Permalink to &quot;ip 列表查询&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>切换到系统目录，然后执行ipconfig</td><td>ipconfig</td><td>ifconfig</td><td></td></tr></tbody></table><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ifconfig</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># linux zsh</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>cmd</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">C:</span><span style="color:#BABED8;">\\w</span><span style="color:#C3E88D;">indows</span><span style="color:#BABED8;">\\s</span><span style="color:#C3E88D;">ystem32</span></span>
<span class="line"><span style="color:#FFCB6B;">ipconfig</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>推荐: <code>C:\\windows\\system32</code> 加入到系统环境变量</p><h2 id="查看进程" tabindex="-1">查看进程 <a class="header-anchor" href="#查看进程" aria-label="Permalink to &quot;查看进程&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>tasklist</td><td>ps/tasklist</td><td>ps/top</td><td></td></tr></tbody></table><p>liunx 第三方进程：htop 包</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># linux  zsh</span></span>
<span class="line"><span style="color:#FFCB6B;">top</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># linux zsh</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="结束某个进程" tabindex="-1">结束某个进程 <a class="header-anchor" href="#结束某个进程" aria-label="Permalink to &quot;结束某个进程&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>taskkill</td><td>taskkill</td><td>kill/killall</td><td></td></tr></tbody></table><h2 id="网络监测" tabindex="-1">网络监测 <a class="header-anchor" href="#网络监测" aria-label="Permalink to &quot;网络监测&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>ping</td><td></td><td></td><td></td></tr></tbody></table><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ping</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">baidu.com</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># zsh/cmd/powershell</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="tree-命令" tabindex="-1">tree 命令 <a class="header-anchor" href="#tree-命令" aria-label="Permalink to &quot;tree 命令&quot;">​</a></h2><p>linux 不会内置 tree 命令，需要手动安装</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tree</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>tree</td><td></td><td></td><td></td></tr></tbody></table><ul><li>linux zsh</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tree</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># linux zsh</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>windows tree 用法</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tree</span><span style="color:#BABED8;"> [drive:]</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">path</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">/F</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">/A</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">参数:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">**</span><span style="color:#BABED8;">drive</span><span style="color:#89DDFF;">**</span><span style="color:#BABED8;"> 盘符</span></span>
<span class="line"><span style="color:#89DDFF;">**</span><span style="color:#BABED8;">path</span><span style="color:#89DDFF;">**</span><span style="color:#BABED8;"> 文件路径</span></span>
<span class="line"><span style="color:#89DDFF;">**</span><span style="color:#BABED8;">/F</span><span style="color:#89DDFF;">**</span><span style="color:#BABED8;"> 递归列出所有文件</span></span>
<span class="line"><span style="color:#89DDFF;">**</span><span style="color:#BABED8;">/A</span><span style="color:#89DDFF;">**</span><span style="color:#BABED8;"> 只查看文件夹, 忽略文件</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="获取-command-命令" tabindex="-1">获取 command 命令 <a class="header-anchor" href="#获取-command-命令" aria-label="Permalink to &quot;获取 command 命令&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>where</td><td>gcm/Get-Command</td><td>which/whereis</td><td>查询命令位置（或者是否存在）</td></tr></tbody></table><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">where</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># cmd</span></span>
<span class="line"><span style="color:#FFCB6B;">gcm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">code</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># powershell</span></span>
<span class="line"><span style="color:#FFCB6B;">Get-Command</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># powershell</span></span>
<span class="line"><span style="color:#82AAFF;">which</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lazygit</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># zsh</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="文件压缩-展开" tabindex="-1">文件压缩/展开 <a class="header-anchor" href="#文件压缩-展开" aria-label="Permalink to &quot;文件压缩/展开&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>compact</td><td>compact</td><td>gzip/gunzip/tar/bzip2/cpio</td><td>用于压缩文件</td></tr></tbody></table><h2 id="创建文件" tabindex="-1">创建文件 <a class="header-anchor" href="#创建文件" aria-label="Permalink to &quot;创建文件&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>ni/New-Item</td><td>touch</td><td></td></tr></tbody></table><ul><li>cmd</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">abc.rs</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>powershell</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ni</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">abc.js</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>zsh</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">touch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">abc.ts</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="输出文件内容" tabindex="-1">输出文件内容 <a class="header-anchor" href="#输出文件内容" aria-label="Permalink to &quot;输出文件内容&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>echo</td><td></td><td></td><td></td></tr></tbody></table><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">%PATH%</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># cmd</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="dns-客户端-hosts" tabindex="-1">DNS 客户端 hosts <a class="header-anchor" href="#dns-客户端-hosts" aria-label="Permalink to &quot;DNS 客户端 hosts&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td><code>C:\\Windows\\System32\\drivers\\etc</code></td><td><code>C:\\Windows\\System32\\drivers\\etc</code></td><td><code>/etc/hosts</code></td><td>hosts 目录</td></tr></tbody></table><h2 id="内置编辑器" tabindex="-1">内置编辑器 <a class="header-anchor" href="#内置编辑器" aria-label="Permalink to &quot;内置编辑器&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>notepad</td><td>notepad</td><td>vi/vim/gedit/nano</td><td>在终端中编辑文件</td></tr></tbody></table><h2 id="当前文件夹路径" tabindex="-1">当前文件夹路径 <a class="header-anchor" href="#当前文件夹路径" aria-label="Permalink to &quot;当前文件夹路径&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>pwd</td><td>显示当前文件夹路径</td><td></td><td></td></tr></tbody></table><h2 id="输出文本内容" tabindex="-1">输出文本内容 <a class="header-anchor" href="#输出文本内容" aria-label="Permalink to &quot;输出文本内容&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>type/cat/Get-Content</td><td>cat</td><td>显示指定文件内容</td></tr></tbody></table><h2 id="删除文件" tabindex="-1">删除文件 <a class="header-anchor" href="#删除文件" aria-label="Permalink to &quot;删除文件&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>del</td><td>rm/del/Remove-Item</td><td>rm</td><td></td></tr></tbody></table><h2 id="复制文件" tabindex="-1">复制文件 <a class="header-anchor" href="#复制文件" aria-label="Permalink to &quot;复制文件&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>copy</td><td>cp/Copy-Item</td><td>cp</td><td>说明</td></tr></tbody></table><h2 id="移动文件" tabindex="-1">移动文件 <a class="header-anchor" href="#移动文件" aria-label="Permalink to &quot;移动文件&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>move</td><td>mv/Move-Item</td><td>mv</td><td>移动文件到指定位置</td></tr></tbody></table><h2 id="文件权限" tabindex="-1">文件权限 <a class="header-anchor" href="#文件权限" aria-label="Permalink to &quot;文件权限&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>-</td><td>chmod</td><td>文件权限</td></tr></tbody></table><h2 id="cmd-内置环境变量" tabindex="-1">cmd 内置环境变量 <a class="header-anchor" href="#cmd-内置环境变量" aria-label="Permalink to &quot;cmd 内置环境变量&quot;">​</a></h2><ul><li>cmd 命令</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">set</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="打开资源管理" tabindex="-1">打开资源管理 <a class="header-anchor" href="#打开资源管理" aria-label="Permalink to &quot;打开资源管理&quot;">​</a></h2><table><thead><tr><th>cmd(win)</th><th>PowerShell(wind)</th><th>zsh(linux)</th><th>macOS</th><th>说明</th></tr></thead><tbody><tr><td>explorer</td><td>explorer</td><td>open</td><td>open</td><td>打开文件资源管理器</td></tr></tbody></table><ul><li>cmd/powershell Windows</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">explorer</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">./</span></span>
<span class="line"><span style="color:#FFCB6B;">explorer.exe</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">./</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>zsh Linux/MacOS</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">open</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">./</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="windows-内置环境变量" tabindex="-1">Windows 内置环境变量 <a class="header-anchor" href="#windows-内置环境变量" aria-label="Permalink to &quot;Windows 内置环境变量&quot;">​</a></h2><blockquote><p>以下来源于网络</p></blockquote><table><thead><tr><th>环境变量</th><th>作用域</th><th>说明</th></tr></thead><tbody><tr><td>%ALLUSERSPROFILE%</td><td>局部</td><td>返回所有“用户配置文件”的位置。</td></tr><tr><td>%APPDATA%</td><td>局部</td><td>返回默认情况下应用程序存储数据的位置。</td></tr><tr><td>%CD%</td><td>局部</td><td>返回当前目录字符串。</td></tr><tr><td>%CMDCMDLINE%</td><td>局部</td><td>返回用来启动当前的 Cmd.exe 的准确命令行。</td></tr><tr><td>%CMDEXTVERSION%</td><td>系统</td><td>返回当前的“命令处理程序扩展”的版本号。</td></tr><tr><td>%COMPUTERNAME%</td><td>系统</td><td>返回计算机的名称。</td></tr><tr><td>%COMSPEC%</td><td>系统</td><td>返回命令行解释器可执行程序的准确路径。</td></tr><tr><td>%DATE%</td><td>系统</td><td>返回当前日期。使用与 date /t 命令相同的格式。由 Cmd.exe 生成。有关 date 命令的详细信息，请参阅 Date。</td></tr><tr><td>%ERRORLEVEL%</td><td>系统</td><td>返回最近使用过的命令的错误代码。通常用非零值表示错误。</td></tr><tr><td>%HOMEDRIVE%</td><td>系统</td><td>返回连接到用户主目录的本地工作站驱动器号。基于主目录值的设置。用户主目录是在“本地用户和组”中指定的。</td></tr><tr><td>%HOMEPATH%</td><td>系统</td><td>返回用户主目录的完整路径。基于主目录值的设置。用户主目录是在“本地用户和组”中指定的。</td></tr><tr><td>%HOMESHARE%</td><td>系统</td><td>返回用户的共享主目录的网络路径。基于主目录值的设置。用户主目录是在“本地用户和组”中指定的。</td></tr><tr><td>%LOGONSEVER%</td><td>局部</td><td>返回验证当前登录会话的域控制器的名称。</td></tr><tr><td>%NUMBER_OF_PROCESSORS%</td><td>系统</td><td>指定安装在计算机上的处理器的数目。</td></tr><tr><td>%OS%</td><td>系统</td><td>返回操作系统的名称。Windows 2000 将操作系统显示为 Windows_NT。</td></tr><tr><td>%PATH%</td><td>系统</td><td>指定可执行文件的搜索路径。</td></tr><tr><td>%PATHEXT%</td><td>系统</td><td>返回操作系统认为可执行的文件扩展名的列表。</td></tr><tr><td>%PROCESSOR_ARCHITECTURE%</td><td>系统</td><td>返回处理器的芯片体系结构。值: x86，IA64。</td></tr><tr><td>%PROCESSOR_IDENTFIER%</td><td>系统</td><td>返回处理器说明。</td></tr><tr><td>%PROCESSOR_LEVEL%</td><td>系统</td><td>返回计算机上安装的处理器的型号。</td></tr><tr><td>%PROCESSOR_REVISION%</td><td>系统</td><td>返回处理器修订号的系统变量。</td></tr><tr><td>%PROMPT%</td><td>局部</td><td>返回当前解释程序的命令提示符设置。由 Cmd.exe 生成。</td></tr><tr><td>%RANDOM%</td><td>系统</td><td>返回 0 到 32767 之间的任意十进制数字。由 Cmd.exe 生成。</td></tr><tr><td>%SYSTEMDRIVE%</td><td>系统</td><td>返回包含 Windows XP 根目录（即系统根目录）的驱动器。</td></tr><tr><td>%SYSTEMROOT%</td><td>系统</td><td>返回 Windows XP 根目录的位置。</td></tr><tr><td>%TEMP% and %TMP%</td><td>系统和用户</td><td>返回对当前登录用户可用的应用程序所使用的默认临时目录。有些应用程序需要 TEMP，而其它应用程序则需要 TMP。</td></tr><tr><td>%TIME%</td><td>系统</td><td>返回当前时间。使用与 time /t 命令相同的格式。由 Cmd.exe 生成。有关 time 命令的详细信息，请参阅 Time。</td></tr><tr><td>%USERDOMAIN%</td><td>局部</td><td>返回包含用户帐户的域的名称。</td></tr><tr><td>%USERNAME%</td><td>局部</td><td>返回当前登录的用户的名称。</td></tr><tr><td>%UserProfile%</td><td>局部</td><td>返回当前用户的配置文件的位置。</td></tr><tr><td>%WINDIR%</td><td>系统</td><td>返回操作系统目录的位置。</td></tr></tbody></table><h2 id="powershell" tabindex="-1">PowerShell <a class="header-anchor" href="#powershell" aria-label="Permalink to &quot;PowerShell&quot;">​</a></h2><p>使用：</p><ul><li>powershell</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Get-Variable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">env:</span></span>
<span class="line"><span style="color:#FFCB6B;">dir</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">env:</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="powershell-常用变量" tabindex="-1">powershell 常用变量 <a class="header-anchor" href="#powershell-常用变量" aria-label="Permalink to &quot;powershell 常用变量&quot;">​</a></h2><table><thead><tr><th>Powershell内置变量名称</th><th>说明</th></tr></thead><tbody><tr><td>$$</td><td>当前会话中收到的最后一行中的最后一个令牌(你可以理解为最后一条执行命令)</td></tr><tr><td>$?</td><td>最后一个操作的执行状态。这个操作可以是Powershell命令，或是调用exe等的返回值，如果最后一个操作成功，则$?包含的值时True,否则包含的值是False。这个内置在判断上一个操作是否成功执行时，非常有用。</td></tr><tr><td>$LastExitCode</td><td>最后一个基于 Windows 的程序的退出代码。注意区分该变量与$?的区别</td></tr><tr><td>$True</td><td>包含True，可以在命令或脚本中使用此内置变量来代替字符串&quot;TRUE&quot;。</td></tr><tr><td>$False</td><td>包含False,可以在命令或脚本中使用此内置变量来代替字符串&quot;FALSE&quot;。</td></tr><tr><td>$NULL</td><td>包含NULL或空值。可以在命令和脚本中使用此变量表示 NULL，而不是使用字符串&quot;NULL&quot;。如果该字符串转换为非空字符串或非零整数，则可将该字符串解释为TRUE。</td></tr><tr><td>$_</td><td>包含管道对象中的当前对象，在对管道中的对象做筛选或是执行相应的操作命令时，该内置变量尤其有用。如以下命令是筛选所有以 Get-Com 开头的命令Get-Command</td></tr><tr><td>$This</td><td>在定义脚本属性或脚本方法的脚本块中，This变量引用要扩展的对象。这个和高级语言中的this一样，表示的是当前要引用的对象。注意该内置变量与This 变量引用要扩展的对象。这个和高级语言中的this一样，表示的是当前要引用的对象。注意该内置变量与_的不同。</td></tr><tr><td>$PID</td><td>当前 Windows PowerShell 会话的进程的进程标识符 (PID)，一个整数表示的数字</td></tr><tr><td>$ShellID</td><td>当前Shell的标示符，如Microsoft.PowerShell</td></tr><tr><td>$PsUICulture</td><td>操作系统中当前所用的用户界面 (UI) 区域性的名称(例如，如果是简体中文，则该值是zh-CN)。UI 区域性确定哪些文本字符串用于用户界面元素（如菜单和消息）。这是系统的System.Globalization.CultureInfo.CurrentUICulture.Name 属性的值</td></tr><tr><td>$PsCulture</td><td>操作系统中当前所用的区域性的名称(例如，如果是简体中文，则该值是zh-CN)。区域性确定数字、货币和日期等项的显示格式。这是系统的 System.Globalization.CultureInfo.CurrentCulture.Name 属性的值。</td></tr><tr><td>$PsHome</td><td>Windows PowerShell 的安装目录的完整路径（通常为 %windir%\\System32\\WindowsPowerShell\\v1.0）。可以在 Windows PowerShell 文件的路径中使用此变量。</td></tr><tr><td>$Home</td><td>用户的主目录的完整路径，等效于 %homedrive%或%homepath% 环境变量</td></tr><tr><td>$Pwd</td><td>当前目录的完整路径</td></tr><tr><td>$Host</td><td>表示 Windows PowerShell 的当前主机应用程序(通俗点讲就是代表当前主机)。可以使用此变量在命令中表示当前主机，或者显示或更改主机的属性，如 Host.version、Host.version、Host.CurrentCulture 或 $host.ui.rawui.setbackgroundcolor(&quot;Red&quot;)。</td></tr><tr><td>$Profile</td><td>当前用户和当前主机应用程序的 Windows PowerShell 配置文件的完整路径。可以在命令中使用此变量表示配置文件</td></tr><tr><td>$PsVersionTable</td><td>只读哈希表，表示当前运行的Powershell版本的详细信息，该表包含下列项。CLRVersion：               公共语言运行时 (CLR) 的版本BuildVersion：             当前版本的内部版本号PSVersion：                Windows PowerShell 版本号WSManStackVersion：        WS-Management 堆栈的版本号PSCompatibleVersions：     与当前版本兼容的 Windows PowerShell 版本SerializationVersion ：    序列化方法的版本PSRemotingProtocolVersion : Windows PowerShell 远程管理协议的版本</td></tr></tbody></table><h2 id="linux-常用环境变量" tabindex="-1">linux 常用环境变量 <a class="header-anchor" href="#linux-常用环境变量" aria-label="Permalink to &quot;linux 常用环境变量&quot;">​</a></h2><table><thead><tr><th>环境变量</th><th>说明</th></tr></thead><tbody><tr><td>PATH</td><td>决定了shell将到哪些目录中寻找命令或程序</td></tr><tr><td>HOME</td><td>当前用户主目录</td></tr><tr><td>HISTSIZE</td><td>历史记录数</td></tr><tr><td>LOGNAME</td><td>当前用户的登录名</td></tr><tr><td>HOSTNAME</td><td>指主机的名称</td></tr><tr><td>SHELL</td><td>当前用户Shell类型</td></tr><tr><td>LANGUGE</td><td>语言相关的环境变量，多语言可以修改此环境变量</td></tr><tr><td>MAIL</td><td>当前用户的邮件存放目录</td></tr><tr><td>PS1</td><td>基本提示符，对于root用户是#，对于普通用户是$</td></tr></tbody></table><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><ul><li>一些常用 Shell 的 Windows/Linux/MacOS 命令</li><li>持续更新中...</li></ul><p><a href="https://juejin.cn/post/7148956786781847559" target="_blank" rel="noreferrer">原文</a></p>`,109),r=[n];function d(o,p,i,c,h,b){return t(),a("div",null,r)}const y=s(e,[["render",d]]);export{m as __pageData,y as default};
