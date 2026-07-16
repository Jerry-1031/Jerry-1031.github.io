---
title: 导数周期
date: 2024-04-10 21:58:30
updated: 2024-04-10 21:58:30
categories:
  - 笔记
  - 数学
  - 微积分
tags:
  - 导数
  - 周期性
  - 高阶导数
mathjax: true
---

**内容摘要：** 本文根据某类函数的高阶导数出现的周期性规律定义了**导数周期**、**最小导数周期**等概念并证明了其若干基本性质，并据此构造了具有一定最小导数周期的函数.

**关键词：** 函数；导数；周期性

<!-- more -->

**[目录]**

# 绪论

以下为 $f(x)=\sin(x)$ 的若干阶导数：

- $f'(x)=\cos(x)$
- $f''(x)=-\sin(x)$
- $f'''(x)=-\cos(x)$
- $f^{(4)}(x)=\sin(x)=f(x)$ <sup id="fnref-1"><a href="#fn-1">[1]</a></sup>

<p id="fn-1"><small>[1] $f^{(n)}(x)$ 表示 $f(x)$ 的 $n$ 阶导数. <a href="#fnref-1">↩</a></small></p>

对 $f(x)=\sin(x)$ 每进行 $4$ 次求导操作后便会得到原函数，该函数的导数具有某种周期性质.

同样地，对于 $f(x)=e^x$，其 $n$ 阶导数<sup id="fnref-2"><a href="#fn-2">[2]</a></sup>也等于其本身，这似乎也是有别于多项式函数的周期性质.

<p id="fn-2"><small>[2] 若无特殊说明，本文中 $m,n\in\mathbb{N}^{*}$. <a href="#fnref-2">↩</a></small></p>

那么，是否能对此类性质给出合适的定义呢？能否找到其它具有此性质的函数呢？

# 预备公式

## 复函数、实部与虚部提取函数

对于函数 $f(x)$，若 $x\in\mathbb{R}$ 且 $f(x)\in\mathbb{C}$，则称 $f(x)$ 为复函数.

记 $\Re(z)$ 为复数 $z$ 的实部，$\Im(z)$ 为复数 $z$ 的虚部.

对于复函数 $f(x)$，有 $f(x)=\Re\left(f(x)\right)+\mathrm{i}\Im\left(f(x)\right)$.

## 欧拉公式

$$e^{\mathrm{i}\theta}=\cos\theta+\mathrm{i}\sin\theta$$

## 两函数积高阶导数公式

设两函数 $u(x)$，$v(x)$ 均存在 $n$ 阶导数，则有如下公式：

$$(uv)^{(n)}=\sum_{i=0}^{n}\mathrm{C}_n^i\cdot u^{(i)}\cdot v^{(n-i)}$$

**证明：** 当 $n=1$ 时，易证 $(uv)'=u'v+uv'$.

假设 $n=k$ 时原等式成立，即
$$(uv)^{(k)}=\sum_{i=0}^{k}\mathrm{C}_{k}^{i}u^{(i)}v^{(k-i)}$$

则当 $n=k+1$ 时
$$\begin{aligned}
  (uv)^{(k+1)}
  & = \left[(uv)^{(k)}\right]' \\
  & = \left[\sum_{i=0}^{k}\mathrm{C}_{k}^{i}u^{(i)}v^{(k-i)}\right]' \\
  & = \sum_{i=0}^{k}\mathrm{C}_{k}^{i}\left[u^{(i)}v^{(k-i)}\right]' \\
  & = \sum_{i=0}^{k}\mathrm{C}_{k}^{i}u^{(i+1)}v^{(k-i)} + \sum_{i=0}^{k}\mathrm{C}_{k}^{i}u^{(i)}v^{(k-i+1)} \\
  & = \left[\sum_{i=1}^{k}\mathrm{C}_{k}^{i-1}u^{(i)}v^{(k-i+1)}+\mathrm{C}_{k}^{k}u^{(k+1)}v\right]+\left[\mathrm{C}_{k}^{0}uv^{(k+1)}+\sum_{i=1}^{k}\mathrm{C}_{k}^{i}u^{(i)}v^{(k-i+1)}\right] \\
  & = \sum_{i=1}^{k}\left(\mathrm{C}_{k}^{i-1}+\mathrm{C}_{k}^{i}\right)u^{(i)}v^{(k-i+1)}+\mathrm{C}_{k}^{k}u^{(k+1)}v+\mathrm{C}_{k}^{0}uv^{(k+1)} \\
  & = \sum_{i=1}^{k}\mathrm{C}_{k+1}^{i}u^{(i)}v^{(k-i+1)}+\mathrm{C}_{k}^{k}u^{(k+1)}v+\mathrm{C}_{k}^{0}uv^{(k+1)} \\
  & = \sum_{i=0}^{k+1}\mathrm{C}_{k+1}^{i}u^{(i)}v^{(k-i+1)}.
\end{aligned}$$

综上所述，原等式成立.

# 导数周期与最小导数周期

## 定义

对于可导函数 $f(x)$，若其 $n$ 阶导数存在，且 $f(x)\cong f^{(n)}(x)$ <sup id="fnref-3"><a href="#fn-3">[3]</a></sup>，则称 $f(x)$ 具有**导数周期性**，且 $n$ 为 $f(x)$ 的一个**导数周期**.

<p id="fn-3"><small>[3] $f(x)\cong g(x)$ 表示 $f(x)$ 全等于 $g(x)$，即 $\forall{x\in\mathbb{R}},f(x)=g(x)$. <a href="#fnref-3">↩</a></small></p>

若 $n$ 为 $f(x)$ 的一个导数周期，且对于 $\forall{m<n}$ 均有 $m$ 不是 $f(x)$ 的导数周期，则称 $n$ 为 $f(x)$ 的**最小导数周期**，记为 $\mathbf{T_d}[f(x)]=n$.

## 性质

**性质1** $\forall{\lambda\neq0}$，$\mathbf{T_d}[\lambda f(x)]=\mathbf{T_d}[f(x)]$

**证明：** 令
$$\mathbf{T_d}[f(x)]=n$$

则
$$(\lambda f(x))^{(n)}=\lambda f^{(n)}(x)\cong\lambda f(x)$$

又 $\forall{m<n}$
$$(\lambda f(x))^{(m)}=\lambda f^{(m)}(x)\neq\lambda f(x)$$

因此
$$\mathbf{T_d}[\lambda f(x)]=n=\mathbf{T_d}[f(x)].$$

**性质2** $f(x)\cong f^{(m)}(x)\iff\mathbf{T_d}[f(x)]\mid m$ <sup id="fnref-4"><a href="#fn-4">[4]</a></sup>

<p id="fn-4"><small>[4] $n\mid m$ 表示 $m$ 被 $n$ 整除，即 $\exists{k\in\mathbb{Z}}$，$m=kn$. <a href="#fnref-4">↩</a></small></p>

**证明：** 令
$$\mathbf{T_d}[f(x)]=n$$

**必要性：** 由 $n\mid m$，不妨设
$$m=kn(k\in\mathbb{N}^{*})$$

则
$$f^{(m)}(x)=f^{(kn)}(x)=\left(f^{(n)}(x)\right)^{((k-1)n)}\cong f^{((k-1)n)}(x)\cong\dots\cong f^{((k-k)n)}(x)=f(x).$$

**充分性：** 由
$$f(x)\cong f^{(m)}(x)$$

得
$$m\geq n=\mathbf{T_d}[f(x)]$$

若 $n\mid m$ 不成立，假设
$$m=kn+t(k,t\in\mathbb{N}^{*},t<n)$$

由必要性得
$$f(x)\cong f^{(kn)}(x)$$

则
$$f^{(m)}(x)=\left(f^{(kn)}(x)\right)^{(t)}\cong f^{(t)}(x)\neq f(x)$$

与条件矛盾，因此
$$n\mid m.$$

**性质3** $\mathbf{T_d}[\sum_{i=1}^{n}f_{i}(x)]\mid\operatorname{lcm}(\mathbf{T_d}[f_{1}(x)],\mathbf{T_d}[f_{2}(x)],\dots,\mathbf{T_d}[f_{n}(x)])$ <sup id="fnref-5"><a href="#fn-5">[5]</a></sup>

<p id="fn-5"><small>[5] $\operatorname{lcm}(a_{1},a_{2},\dots,a_{n})$ 表示 $a_{1}$、$a_{2}$ $\dots$ $a_{n}$ 的最小公倍数. <a href="#fnref-5">↩</a></small></p>

**证明：** 令
$$\operatorname{lcm}(\mathbf{T_d}[f_{1}(x)],\mathbf{T_d}[f_{2}(x)],\dots,\mathbf{T_d}[f_{n}(x)])=p$$

则
$$\mathbf{T_d}[f_{i}(x)]\mid p$$

由性质2得
$$f_{i}(x)\cong f_{i}^{(p)}(x)$$

则
$$\sum_{i=1}^{n}f_{i}(x)\cong\sum_{i=1}^{n}f_{i}^{(p)}(x)=\left[\sum_{i=1}^{n}f_{i}(x)\right]^{(p)}$$

由性质2得
$$\mathbf{T_d}\left[\sum_{i=1}^{n}f_{i}(x)\right]\mid\operatorname{lcm}(\mathbf{T_d}[f_{1}(x)],\mathbf{T_d}[f_{2}(x)],\dots,\mathbf{T_d}[f_{n}(x)]).$$

**性质4** $\mathbf{T_d}\left[\sum_{i=0}^{\mathbf{T_d}[f(x)]-1}f^{(i)}(x)\right]=1$

**证明：** 令
$$\mathbf{T_d}[f(x)]=n$$

则
$$\begin{aligned}
  \sum_{i=0}^{\mathbf{T_d}[f(x)]-1}f^{(i)}(x)
  & = \sum_{i=0}^{n-1}f^{(i)}(x) \\
  & = f(x) + \sum_{i=1}^{n-1}f^{(i)}(x) \\
  & = f^{(n)}(x) + \sum_{i=1}^{n-1}f^{(i)}(x) \\
  & = \left(f^{(n-1)}(x)\right)' + \sum_{i=0}^{n-2}\left(f^{(i)}(x)\right)' \\
  & = \left[\sum_{i=0}^{n-1}f^{(i)}(x)\right]' \\
  & = \left[\sum_{i=0}^{\mathbf{T_d}[f(x)]-1}f^{(i)}(x)\right]' \\
\end{aligned}$$

因此
$$\mathbf{T_d}\left[\sum_{i=0}^{\mathbf{T_d}[f(x)]-1}f^{(i)}(x)\right]=1$$

# 对于特定最小导数周期函数的构造

## 对于最小导数周期为 3 的函数的构造

不难想到，若非基本初等函数 $f(x)$ 有导数周期性，则其一定由具有导数周期性的函数复合构成.

具有导数周期性的基本初等函数有以下两类：

+ $\mathbf{T_d}[e^x]=1$
+ $\mathbf{T_d}[\sin(x)]=\mathbf{T_d}[\cos(x)]=4$

由性质1和性质3得，由以上两类函数通过加、减复合而成的具有导数周期性的函数，其 $\mathbf{T_d}$ 只能取 $1,2,4$，无法构造出 $\mathbf{T_d}=3$ 的函数.

因此，我们可以利用两导数周期不同的函数的乘积尝试构造具有新的导数周期的函数.

不妨设 $f(x)=e^{ax}\cdot\cos(bx)\left(a\neq0,b>0\right)$.

由公式得
$$f'''(x)=a^3e^{ax}\cos(bx)-3a^2be^{ax}\sin(bx)-3ab^2e^{ax}\cos(bx)+b^3e^{ax}\sin(bx)$$

若
$$f(x)\cong f'''(x)$$

比对系数得
$$\left\{\begin{matrix} 
  a^3-3ab^2=1 \\
  -3a^2b+b^3=0
\end{matrix}\right.$$

解得
$$\left\{\begin{matrix} 
  a=-\frac{1}{2} \\
  b=\frac{\sqrt{3}}{2}
\end{matrix}\right.$$

即
$$f(x)=e^{-\frac{x}{2}}\cos\left(\frac{\sqrt{3}}{2}x\right)$$

该函数满足 $\mathbf{T_d}[f(x)]=3$.

## 对于最小导数周期为任意正整数的函数的构造

对于 $f(x)=e^{ax}$，其 $n$ 阶导数 $f^{(n)}(x)=a^{n}e^{ax}$.

若 $f(x)\cong f^{(n)}(x)$，易得 $a^{n}=1$.

当 $a\in\mathbb{R}$ 时，$a$ 只可能为 $\pm1$，此时 $f(x)=e^{\pm{x}}$，$\mathbf{T_d}[f(x)]=1$ 或 $2$.

当 $a\in\mathbb{C}$ 时，$a=\cos\frac{2k\pi}{n}+\mathrm{i}\sin\frac{2k\pi}{n}\left(k\in\mathbb{N}^{*},k<n\right)$.

不妨令 $k=1$，得 $a=\cos\frac{2\pi}{n}+\mathrm{i}\sin\frac{2\pi}{n}$，此时

$$\boxed{f(x)=e^{\left(\cos\frac{2\pi}{n}+\mathrm{i}\sin\frac{2\pi}{n}\right)x}}$$

满足 $n$ 为 $f(x)$ 的一个导数周期.

又对于 $\forall{m<n}$，由
$$a^{m}=\cos\frac{2m\pi}{n}+\mathrm{i}\sin\frac{2m\pi}{n}\neq1$$

得
$$f^{(m)}(x)=a^{m}e^{ax}\neq f(x)$$

因此
$$\mathbf{T_d}[f(x)]=n.$$

由于 $f(x)$ 为复函数，不妨尝试分别提取 $f(x)$ 的实部与虚部研究其导数周期性.

$$\begin{aligned}
  f(x)
  & = e^{\left(\cos\frac{2\pi}{n}+\mathrm{i}\sin\frac{2\pi}{n}\right)x} \\
  & = e^{\left(\cos\frac{2\pi}{n}\right)x}\cdot e^{\mathrm{i}\left(\sin\frac{2\pi}{n}\right)x} \\
  & = e^{\left(\cos\frac{2\pi}{n}\right)x}\cdot\left[\cos\left(\left(\sin\frac{2\pi}{n}\right)x\right)+\mathrm{i}\sin\left(\left(\sin\frac{2\pi}{n}\right)x\right)\right]
\end{aligned}$$

$$\left\{\begin{matrix} 
  \Re\left(f(x)\right)=e^{\left(\cos\frac{2\pi}{n}\right)x}\cdot\cos\left(\left(\sin\frac{2\pi}{n}\right)x\right) \\
  \Im\left(f(x)\right)=e^{\left(\cos\frac{2\pi}{n}\right)x}\cdot\sin\left(\left(\sin\frac{2\pi}{n}\right)x\right)
\end{matrix}\right.$$

由
$$f(x)=\Re\left(f(x)\right)+\mathrm{i}\Im\left(f(x)\right)$$

得
$$f^{(n)}(x)=\left(\Re\left(f(x)\right)\right)^{(n)}+\mathrm{i}\left(\Im\left(f(x)\right)\right)^{(n)}$$

又由 $\mathbf{T_d}[f(x)]=n$ 得
$$f(x)\cong f^{(n)}(x)$$

则
$$\Re\left(f(x)\right)+\mathrm{i}\Im\left(f(x)\right)=\left(\Re\left(f(x)\right)\right)^{(n)}+\mathrm{i}\left(\Im\left(f(x)\right)\right)^{(n)}$$

实虚部分别比对得
$$\left\{\begin{matrix} 
  \Re\left(f(x)\right)=\left(\Re\left(f(x)\right)\right)^{(n)} \\
  \Im\left(f(x)\right)=\left(\Im\left(f(x)\right)\right)^{(n)}
\end{matrix}\right.$$

因此 $n$ 为 $\Re\left(f(x)\right)$ 与 $\Im\left(f(x)\right)$ 的一个导数周期.

下面证明其最小性.

假设 $\exists{m<n}$ 使得
$$\Re\left(f(x)\right)=\left(\Re\left(f(x)\right)\right)^{\left(m\right)}$$

即
$$e^{\left(\cos\frac{2\pi}{n}\right)x}\cdot\cos\left(\left(\sin\frac{2\pi}{n}\right)x\right)=\left(e^{\left(\cos\frac{2\pi}{n}\right)x}\cdot\cos\left(\left(\sin\frac{2\pi}{n}\right)x\right)\right)^{(m)}$$

则由三角函数求导的对称性可得
$$e^{\left(\cos\frac{2\pi}{n}\right)x}\cdot\sin\left(\left(\sin\frac{2\pi}{n}\right)x\right)=\left(e^{\left(\cos\frac{2\pi}{n}\right)x}\cdot\sin\left(\left(\sin\frac{2\pi}{n}\right)x\right)\right)^{(m)}$$

即
$$\Im\left(f(x)\right)=\left(\Im\left(f(x)\right)\right)^{\left(m\right)}$$

则 $f(x)=f^{(m)}(x)$，与 $\mathbf{T_d}[f(x)]=n$ 矛盾.

因此
$$\mathbf{T_d}\left[\Re\left(f(x)\right)\right]=\mathbf{T_d}\left[\Im\left(f(x)\right)\right]=n.$$

简化起见，令
$$\boxed{\begin{matrix}
  H_n(x)=\Re\left(f(x)\right)=e^{\left(\cos\frac{2\pi}{n}\right)x}\cdot\cos\left(\left(\sin\frac{2\pi}{n}\right)x\right) \\
  I_n(x)=\Im\left(f(x)\right)=e^{\left(\cos\frac{2\pi}{n}\right)x}\cdot\sin\left(\left(\sin\frac{2\pi}{n}\right)x\right)
\end{matrix}}$$

满足 $\mathbf{T_d}[H_n(x)]=\mathbf{T_d}[I_n(x)]=n$.

此时可得：

+ $H_1(x)=e^x$
+ $H_2(x)=e^{-x}$
+ $H_3(x)=e^{-\frac{x}{2}}\cos\left(\frac{\sqrt{3}}{2}x\right)$
+ $H_4(x)=\cos{x}$
+ $\dots$

均符合相应的最小导数周期.

$I_n(x)$ 同样具有此性质.

# 总结
在第一部分中，本文由指数函数、三角函数的高阶导数出现的周期性规律为缘由，定义了描述相关性质的**导数周期**、**最小导数周期**等概念，并证明了此概念的若干基本性质. 在第二部分中，本文根据第一部分的结论分别构造了最小导数周期为 $3$ 的函数以及具有任意最小导数周期的函数 $H_n(x)$ 与 $I_n(x)$.
