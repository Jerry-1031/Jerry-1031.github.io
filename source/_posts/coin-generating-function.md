---
title: 一类抛硬币问题的概率生成函数解法
date: 2026-04-11 23:41:39
updated: 2026-04-12 01:50:51
categories:
  - 笔记
  - 数学
  - 概率论
tags:
  - 概率论
  - 概率生成函数
  - 随机过程
mathjax: true
---

课上学的，感觉比较实用；怕我忘了，赶紧记下来。

<!-- more -->

# 题目

有一枚非均匀硬币，抛掷一次得到正面 (H) 概率为 $p$，反面 (T) 概率为 $q=1-p$。这枚硬币被连续抛掷若干次，得到一串 H-T 序列。
记 $N_1$ 为第一次观察到 HH 出现时的抛掷次数；$N_2$ 为第一次观察到 HT 出现时的抛掷次数；记 $M_1$ 为第一次观察到 TT 出现时的抛掷次数；$M_2$ 为第一次观察到 TH 出现时的抛掷次数。求 $N_1,N_2,M_1,M_2$ 的期望与方差。

# 概率生成函数

设 $X$ 为定义在非负整数上的离散随机变量。记 $P(X=k)=p_k$。$X$ 的概率生成函数定义为
$$\boxed{g_X(t)=E(t^X)=\displaystyle\sum_{k=0}^\infty p_k\cdot t^k=p_0+p_1t+p_2t^2+p_3t^3+\dots}$$
为一个关于 $t$ 的多项式，$t$ 的每一项前的系数为对应的 $X$ 的概率。在不引起歧义的前提下，$g_X(t)$ 简记为 $g(t)$。

考虑 $g(t)$ 关于 $t$ 的导数：
$$g'(t)=p_1+2p_2t+3p_3t^2+\dots$$
$X$ 的期望是 $E(X)=1p_1+2p_2+3p_3+\dots$，为 $g'(t)\mid_{t=1}$，得到期望与概率生成函数的关系：
$$\boxed{E(X)=g'(1)}$$

考虑二阶导 $g''(t)$：
$$g''(t)=2p_2+6p_3t+12p_4t^2+\dots$$
由 $E(g(X)) = \sum_{x=0}^{\infty} g(x) P(X=x)$ 得 $E(X(X-1))=2p_2+6p_3+12p^4+\dots$。由期望的线性性，有
$$g''(1)=E(X(X-1))=E(X^2-X)=E(X^2)-E(X)$$
因此
$$\boxed{E(X^2)=g''(1)+E(X)=g''(1)+g'(1)}$$

方差 $D(X)=E(X^2)-E^2(X)$，因此得到方差与概率生成函数的关系：
$$\boxed{D(X)=g''(1)+g'(1)-\left(g'(1)\right)^2}$$

# HH

先考虑一些较为容易的情况。令 $k$ 为首次出现 HH 时的总抛掷次数。记 $S_i$ 为第 $i$ 次抛掷的结果，可能为 H 或 T。

1. $k=1$ 时，由于只抛掷了一次，不可能出现 HH，故 $p_1=0$。
2. $k=2$ 时，出现 HH 的概率为 $p_2=p\cdot p=p^2$。
3. $k=3$ 时，第 2 次和第 3 次为 H。如果第 1 次也为 H，则在第 2 次时就已出现了 HH。故序列只能为 THH，$p_3=q\cdot p\cdot p=p^2q$。

考虑 $k\ge 3$ 时的情况，对第 1 次的结果进行分类：若第 1 次抛出了 H，则第 2 次只能为 T。前两次对剩余的抛掷无影响，剩余 $k-2$ 次转化为子问题处理，有
$$P(N=k,S_1=H)=P(S_1=H)\cdot P(S_2=T)\cdot P(N=k-2)=pqp_{k-2}$$
若第 1 次抛出了 T，对剩余的抛掷无影响，剩余 $k-1$ 次转化为子问题处理，有
$$P(N=k,S_1=T)=P(S_1=T)\cdot P(N=k-1)=qp_{k-1}$$
由全概率公式，得 $k\ge 3$ 时的递推式
$$P(N)=P(N=k,S_1=H)+P(N=k,S_1=T)$$
$$p_k=pqp_{k-2}+qp_{k-1}$$
同时有边界条件 $p_0=p_1=0$，$p_2=p^2$。

直接求解该递推式较为困难，考虑采取概率生成函数的方式来求解。概率生成函数的定义为 $g(t)=E(t^N)=\displaystyle\sum_{k=0}^\infty p_k\cdot t^k$。对其展开有
$$
\begin{align}
g(t) &= \sum_{k=0}^\infty p_k t^k \\
&= \sum_{k=2}^\infty p_k t^k \\
&= p_2t^2 + \sum_{k=3}^\infty p_k t^k\\
&= p^2t^2+\sum_{k=3}^\infty (pqp_{k-2}+qp_{k-1}) t^k\\
&= p^2t^2+\sum_{k=3}^\infty pqp_{k-2}t^k +\sum_{k=3}^\infty qp_{k-1}t^k\\
&= p^2t^2+pqt^2\cdot g(t)+qt\cdot g(t)
\end{align}
$$

解得 ($q=1-p$)：
$$g_{HH}(t)=\frac{p^2t^2}{1-qt-pqt^2}$$

由定义得期望 $E(N)=\sum_{k=0}^\infty k p_k=g_{HH}'(1)$：
$$\boxed{E(N_1)=\frac{1}{p}+\frac{1}{p^2}}$$

方差 $D(N)=E(N^2)-\left(E(N)\right)^2=g_{HH}''(1)+g_{HH}'(1)-\left(g_{HH}'(1)\right)^2$：
$$\boxed{D(N_1)=\frac{(1-p)(p^2+3p+1)}{p^4}}$$

# HT

同理，有
$$p_1=0$$
$$p_2=pq$$

对 $k\ge 3$ 时，若第 $1$ 次抛出了 H，且直到第 $k$ 次才第一次出现 HT，则代表前 $k-1$ 次都是H，第 $k$ 次才出现 T。这部分的概率是
$$P(N=k,S_1=H)=p^{k-1} q$$
若第 $1$ 次抛出了 T，则对剩余的抛掷无影响，剩余 $k-1$ 次转化为子问题处理，有
$$P(N=k,S_1=T)=qp_{k-1}$$
得递推式
$$p_k=P(N=k,S_1=H) + P(N=k,S_1=T)=p^{k-1}q+qp_{k-1}$$

展开生成函数
$$
\begin{align}
g(t) &= \sum_{k=0}^\infty p_k t^k \\
&= pqt^2 + \sum_{k=3}^\infty p_k t^k\\
&= pqt^2+\sum_{k=3}^\infty (p^{k-1} q+ q p_{k-1}) t^k\\
&= pqt^2+\sum_{k=3}^\infty p^{k-1} qt^k+ \sum_{k=3}^\infty q p_{k-1} t^k\\
&= pqt^2+\frac{p^2 q t^3}{1-pt}+ qtg(t)
\end{align}
$$

解得
$$g_{HT}(t)=\frac{p q t^2}{(1-pt) (1-qt)}$$

期望 $E(N_2)=g_{HT}'(1)$：
$$\boxed{E(N_2)=\frac{1}{p}+\frac{1}{q}}$$
方差 $D(N_2)=g_{HT}''(1)+g_{HT}'(1)-\left(g_{HT}'(1)\right)^2$：
$$\boxed{D(N_2)=\frac{3 p^2-3 p+1}{(1-p)^2 p^2}=\frac{1-p}{p^2}+\frac{1-q}{q^2}}$$

# TT 与 TH

H 和 T 的地位在逻辑上是对称的，求 TH 就是把原来针对 HT 的事件空间里的 H 变成 T，T 变成 H。因此在公式层面，只需要将 $p$ 替换为 $q=1-p$，$q$ 替换为 $p$ 即可。这里直接给出结果：

$$g_{TT}(t)=\frac{q^2t^2}{1-pt-pqt^2}$$
$$\boxed{E(M_1)=\frac{1}{q}+\frac{1}{q^2}}$$
$$\boxed{D(M_1)=\frac{p(p^2-5p+5)}{(1-p)^4}}$$

$$g_{TH}(t)=\frac{p q t^2}{(1-pt) (1-qt)}$$
$$\boxed{E(M_2)=\frac{1}{p}+\frac{1}{q}}$$
$$\boxed{D(M_2)=\frac{1-p}{p^2}+\frac{1-q}{q^2}}$$

# 图像

将 $N_1, N_2, M_1, M_2$ 对应的期望与方差看作关于正面概率 $p$ 的函数，定义域为 $[0,1]$。

使用 Mathematica 绘图

```mathematica
HH[t_] := (p^2 t^2)/(1 - q t - p q t^2);
HT[t_] := (p q t^2)/((-1 + p t) (-1 + q t));
TT[t_] := (q^2 t^2)/(1 - p t - p q t^2);
TH[t_] := (p q t^2)/((-1 + p t) (-1 + q t));

EHH[p_] = FullSimplify[HH'[1] /. q -> 1 - p];
EHT[p_] = FullSimplify[HT'[1] /. q -> 1 - p];
ETT[p_] = FullSimplify[TT'[1] /. q -> 1 - p];
ETH[p_] = FullSimplify[TH'[1] /. q -> 1 - p];

DHH[p_] = FullSimplify[HH''[1] + HH'[1] - (HH'[1])^2 /. q -> 1 - p];
DHT[p_] = FullSimplify[HT''[1] + HT'[1] - (HT'[1])^2 /. q -> 1 - p];
DTT[p_] = FullSimplify[TT''[1] + TT'[1] - (TT'[1])^2 /. q -> 1 - p];
DTH[p_] = FullSimplify[TH''[1] + TH'[1] - (TH'[1])^2 /. q -> 1 - p];

Plot[{EHH[p], EHT[p], ETT[p], ETH[p]}, {p, 0, 1}, 
 PlotLegends -> "Expressions", PlotRange -> {0, 12}]

Plot[{DHH[p], DHT[p], DTT[p], DTH[p]}, {p, 0, 1}, 
 PlotLegends -> "Expressions", PlotRange -> {0, 44}]
```

![期望随正面概率变化](/images/posts/coin-generating-function/expectation.png)

![方差随正面概率变化](/images/posts/coin-generating-function/variance.png)

# 公平硬币

当硬币是公平的， $p=q=\frac{1}{2}$ 时，代入计算可得
$$E(N_1)=E(M_1)=6$$
$$E(N_2)=E(M_2)=4$$

$$D(N_1)=D(M_1)=22$$
$$D(N_2)=D(M_2)=4$$

# 一些性质

由于 $g_{HT}(t)$ 关于 $p$ 与 $q$ 对称，因此将 $p$ 与 $q$ 互换并不会改变其本身，即 $g_{HT}(t)=g_{TH}(t)$。由于概率生成函数包含每一项 $p_k$ 的信息，因此对 HT 和 TH 组合，**$N_2$ 与 $M_2$ 的分布相同**。于是有
$$E(N_2)=E(M_2)$$
$$D(N_2)=D(M_2)$$
观察图像可知：HT 与 TH 的期望与方差确实相同。

---

对期望，
1. HH 在 $p=1$ 即全正面时取得最小值为 $2$；TT 在 $p=0$ 即全背面时取得最小值为 $2$。这符合直觉：全正面/全背面一定能保证抛掷两次即可获得 HH/TT；若引入非正面/非背面则会增加干扰，进而增加期望。HH 在 $p\to 0$ 即全背面时趋于无穷；TT 在 $p\to 1$ 即全正面时趋于无穷，同样符合直觉。HH 与 TT 均单调，HH 单调递减，TT 单调递增。
2. HT 与 TH 在 $p=\frac{1}{2}$ 时取得最小值为 $4$，随 $p$ 增大先减后增。

对方差，
1. HH 在 $p=1$ 即全正面时取得最小值为 $0$；TT 在 $p=0$ 即全背面时取得最小值为 $0$。没有不确定性，结果一定一致，方差为 $0$。HH 在 $p\to 0$ 即全背面时趋于无穷；TT 在 $p\to 1$ 即全正面时趋于无穷。HH 与 TT 均单调，HH 单调递减，TT 单调递增。
2. HT 与 TH 在 $p=\frac{1}{2}$ 时取得最小值为 $4$，随 $p$ 增大先减后增。

---

生成函数在 $t=1$ 时的值代表了所有概率之和，即 $\displaystyle\sum_{k=0}^\infty P(N=k)$。
对于 $g_{HH}(t)=\frac{p^2t^2}{1-qt-pqt^2}$，代入 $t=1$：
$$g_{HH}(1) = \frac{p^2}{1-q-pq} = \frac{p^2}{p^2} = 1$$
对于上述 $g_{HT}(t)=\frac{p q t^2}{(1-pt) (1-qt)}$，代入 $t=1$：
$$g_{HT}(1) = \frac{pq}{(1-q)(1-p)} = \frac{pq}{p \cdot q} = 1$$
对 TT 和 TH 同理。因此有
$$g_{HH}(1) = g_{HT}(1) = g_{TT}(1) = g_{TH}(1) = 1$$
这证明了无论抛掷多少次，只要时间无限长，这些序列一定会出现。
