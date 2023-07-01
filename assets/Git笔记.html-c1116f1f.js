import{_ as n,p as s,q as a,a1 as e}from"./framework-6700cb35.js";const i={},t=e(`<h1 id="git笔记" tabindex="-1"><a class="header-anchor" href="#git笔记" aria-hidden="true">#</a> Git笔记</h1><p><strong>打开 git bash</strong></p><p><strong>设置用户名与邮箱</strong> 这个配置文件保存在&quot;用户&quot;目录下的gitconfig文件中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;MixJade&quot;</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token number">1114185977</span>@qq.com
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看配置信息</strong> 可以直接打开文件，或者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">--list</span>
$ <span class="token function">git</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看所有文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span>
$ <span class="token function">touch</span> helloWorld.txt
$ <span class="token function">git</span> status
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;GIT的第一步&quot;</span>
$ <span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:MixJade/MixJadeWarehouse.git
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> remote
$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
$ <span class="token function">git</span> pull <span class="token parameter variable">--rebase</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git六连</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> init
$ <span class="token function">git</span> branch <span class="token parameter variable">-M</span> main
$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:MixJade/MyNotes.git
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;MixJade&quot;</span>
$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function c(o,p){return s(),a("div",null,l)}const d=n(i,[["render",c],["__file","Git笔记.html.vue"]]);export{d as default};
