---
title: 圆锥曲线杂谈
date: 2023-11-28 20:42:56
updated: 2024-01-14 21:53:02
categories:
  - 笔记
  - 数学
  - 解析几何
tags:
  - 圆锥曲线
  - 解析几何
  - 卡西尼卵形线
mathjax: true
---

**内容摘要：** 本文进行了圆锥曲线的方程的统一，研究了圆锥与圆锥曲线的关联，类比圆锥曲线的定义拓展了一种类圆锥曲线，并分析了其方程、对称性、类型与特点。

**关键词：** 解析几何；圆锥曲线；卡西尼卵形线；曲线方程

<!-- more -->

# 圆锥曲线的统一方程

本章中参数均不为 $0$。

椭圆（Ellipse）标准方程：
$$\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\left(a>b>0\right)$$

双曲线（Hyperbola）标准方程：
$$\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\left(a>b>0\right)$$

抛物线（Parabola）标准方程：
$$y^2=2px$$

那么，如何才能将这三种曲线统一起来呢？

## 极坐标

**圆锥曲线的统一定义**：一动点 $P\left(x,y\right)$ 到平面上一点 $O$ 与到平面上一直线 $\ell$ 的距离之比为一常数 $e$，$P$ 形成的轨迹即为**圆锥曲线**。

不妨令 $O\left(0,0\right)$，$\ell:x=-p$，则 $O$ 到 $\ell$ 的距离为 $p$。记 $d$ 为 $P$ 到 $\ell$ 的距离，$\theta=\angle POx$，有

$$|OP|=r$$

$$d=p+r\cos\theta$$

则

$$\frac{|OP|}{d}=\frac{r}{p+r\cos\theta}=e$$

$$r\left(\theta\right)=r=e\left(p+r\cos\theta\right)$$

$$\boxed{r\left(\theta\right)=\frac{ep}{1-e\cos\theta}}$$

其中 $e$ 为**离心率**，$p$ 为焦点（即为原点）到准线的距离。

## 直角坐标

类似的，令 $O\left(0,0\right)$，$\ell:x=-p$，设 $P\left(x,y\right)$，则 $O$ 到 $\ell$ 的距离为 $p$。记 $d$ 为 $P$ 到 $\ell$ 的距离，则有

$$|OP|=\sqrt{x^2+y^2}$$

$$d=|x+p|$$

则
$$\frac{|OP|}{d}=\frac{\sqrt{x^2+y^2}}{|x+p|}=e$$

两边平方，化简得

$$\frac{x^2+y^2}{x^2+2px+p^2}=e^2$$

$$\boxed{\left(1-e^2\right)x^2+y^2-2e^2px-e^2p^2=0}$$

即为平面直角坐标系下的**圆锥曲线统一方程**。

可以证明，方程 $\left(1\right)$ 与方程 $\left(2\right)$ 等价。

因为该方程只含 $e$ 的平方项，所以 $e$ 的正负性并不会影响结果。为方便起见，下文均令 $e>0$。

## 化简

下面讨论如何将方程 $\left(2\right)$ 化简为我们熟悉的形式。

### 抛物线

当 $e=1$ 时，原方程变为

$$y^2-2px-p^2=0$$

$$y^2=2p\left(x+\frac{p}{2}\right)$$

此时方程为沿 $x$ 轴向左平移 $\frac{p}{2}$ 个单位长度的抛物线 $y^2=2px$。

注意，此处并没有说明 $p$ 的正负性，即：

- 当 $p>0$ 时，抛物线开口向右；
- 当 $p<0$ 时，抛物线开口向左。

可以认为，抛物线有一个焦点为无穷远点。

### 椭圆 | 双曲线

当 $e\neq1$ 时，将原方程对 $x$ 配方并化简：

$$\left(1-e^2\right)x^2+y^2-2e^2px-e^2p^2=0$$

$$\left(1-e^2\right)\left(x-\frac{2e^2p}{1-e^2}x\right)+y^2=e^2p^2$$

$$\left(1-e^2\right)\left(x^2-\frac{2e^2p}{1-e^2}x+\frac{e^4p^2}{\left(1-e^2\right)^2}\right)+y^2=e^2p^2+\frac{e^4p^2}{1-e^2}$$

$$\left(1-e^2\right)\left(x-\frac{e^2p}{1-e^2}\right)^2+y^2=\frac{e^2p^2}{1-e^2}$$

$$\frac{\left(x-\frac{e^2p}{1-e^2}\right)^2}{\frac{e^2p^2}{\left(1-e^2\right)^2}}+\frac{y^2}{\frac{e^2p^2}{1-e^2}}=1$$

令 $c=\frac{e^2p}{1-e^2}$，$a=\frac{c}{e}=\frac{ep}{1-e^2}$，则

$$\boxed{\frac{\left(x-c\right)^2}{a^2}+\frac{y^2}{a^2-c^2}=1}$$

当 $a>c$，即 $ep>e^2p$，$0<e<1$ 时，令 $b^2=a^2-c^2$，就得到

$$\frac{\left(x-c\right)^2}{a^2}+\frac{y^2}{b^2}=1$$

此时方程为沿 $x$ 轴向右平移 $c$ 个单位长度的椭圆 $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$；

当 $a<c$，即 $ep<e^2p$，$e>1$ 时，令 $-b^2=a^2-c^2$，就得到

$$\frac{\left(x-c\right)^2}{a^2}-\frac{y^2}{b^2}=1$$

此时方程为沿 $x$ 轴向左平移 $c$ 个单位长度的双曲线 $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$。

- 当 $p>0$ 时，椭圆的左焦点或双曲线的右焦点与原点重合；
- 当 $p<0$ 时，椭圆的右焦点或双曲线的左焦点与原点重合。

# 圆锥曲线的立体几何定义

2000 多年前，古希腊数学家最先开始研究圆锥曲线。**阿波罗尼斯**（Apollonius of Perga）采用平面切割圆锥的方法来研究圆锥曲线，并获得了大量的成果。

事实上，阿波罗尼斯在其著作《圆锥曲线论》中使用纯几何方法已经取得了今天高中数学中关于圆锥曲线的全部性质和结果。

## 平面切割圆锥

用一个平面去截一个二次锥面（即两全等圆锥面对顶放置，或一条直线绕另一条直线过交点旋转一周所形成的面），得到的截线就称为**圆锥曲线**（Conic Sections）。

即，若平面不经过圆锥顶点，设平面与二次锥面的轴所成的角为 $\theta$，圆锥轴与母线的夹角为 $\alpha$，则：

- 当 $\theta=90^\circ$ 时，平面与轴垂直，截线是**圆**；
- 当 $\alpha<\theta<90^\circ$ 时，截线是**椭圆**；
- 当 $\theta=\alpha$ 时，平面与母线平行，截线是**抛物线**；
- 当 $0\le\theta<\alpha$ 时，截线是**双曲线**。

![圆锥的截线](/images/posts/conic-sections/conic-section.png)

下面我们证明为何平面截圆锥面/二次锥面可截出圆锥曲线。

## Dandelin 双球

1822 年，比利时数学家 Dandelin 利用圆锥的两个内切球，在圆锥曲线上导出椭圆的焦半径的性质，从而直接用纯几何的方法说明圆锥曲线的截线定义与轨迹定义的统一性，这两个内切球即为 Dandelin 双球。

### 椭圆

\begin{proof}
当 $\alpha<\theta<90^\circ$ 时，过圆锥作一截面与母线相交，在截面的两侧放两个大小不同的球，使得它们分别与圆锥的侧面、截面相切，与截面的切点分别为 $F_1$，$F_2$，与圆锥的切点所构成的圆分别为 $\odot O_1$，$\odot O_2$。在截面与圆锥的截曲线上任取一点 $M$，过 $M$ 作圆锥的母线，与两圆分别交于 $P$，$Q$。

则 $MF_1$ 与 $MP$ 为一球的两切线长，$MF_2$ 与 $MQ$ 为另外一球的两切线长。

因为过球外一点作球的切线长相等，所以

$$MF_1=MP$$
$$MF_2=MQ$$

从而
$$MF_1+MF_2=MP+MQ=PQ=\mathrm{const.}$$

由椭圆的几何定义知，此截线为椭圆。
\end{proof}

### 双曲线

\begin{proof}
当 $0\le\theta<\alpha$ 时，过二次锥面作一截面平行于圆锥的轴，在上下两圆锥内分别各放一球，使得它们分别与圆锥的侧面、截面相切，与截面的切点分别为 $F_1$，$F_2$，与圆锥的切点所构成的圆分别为 $\odot O_1$，$\odot O_2$。在截面与圆锥的截曲线上任取一点 $M$，过 $M$ 作圆锥的母线，与两圆分别交于 $P$，$Q$。

则 $MF_1$ 与 $MP$ 为一球的两切线长，$MF_2$ 与 $MQ$ 为另外一球的两切线长。

因为过球外一点作球的切线长相等，所以

$$MF_1=MP$$
$$MF_2=MQ$$

从而
$$|MF_1-MF_2|=|MP-MQ|=PQ=\mathrm{const.}$$

由双曲线的几何定义知，此截线为双曲线。
\end{proof}

### 抛物线

\begin{proof}
当 $\theta=\alpha$ 时，设圆锥顶点为 $V$，容易证明：存在一条过圆锥顶点的直线 $VA$ 与截面 $\lambda$ 平行。

在圆锥内放一球，使得球与圆锥的侧面、截面相切，与截面的切点为 $F$，与圆锥的切点所构成的圆为 $\odot O$。在截面与圆锥的截曲线上任取一点 $M$，则 $MF$ 为球的切线长。过 $M$ 作圆锥的一条母线，与 $\odot O$ 交于 $P$，即与球切于 $P$，则 $MP$ 为球的切线长，从而

$$MF=MP$$

设截面为 $\lambda$，$\odot O$ 所在的平面为 $\mu$，过 $M$ 作 $MH\perp AB$ 垂足为 $H$。

设 $\lambda\cap\mu=\ell$，过 $H$ 作 $HN\perp\ell$ 垂足为 $N$，则

$$MN\perp\ell$$
$$MN\parallel VA$$
$$MH\parallel VO$$

根据空间等角定理，有
$$\angle AVO=\angle NMH$$

因为
$$\angle AVO=\angle PMH=\theta$$

所以
$$\angle PMH=\angle NMH$$

从而易有
$$\mathrm{Rt}\triangle MPH\cong\mathrm{Rt}\triangle MNH$$

所以
$$MP=MN$$

又因为球的切线长相等，$MF=MP$，则有
$$MF=MN$$

$MN$ 为截线上一点 $M$ 到定直线 $\ell$ 的距离，$MF$ 为 $M$ 到定点 $F$ 的距离。两距离相等，由抛物线的几何定义知，此截线为抛物线。
\end{proof}

综上所述，不难看出 Dandelin 双球（抛物线只要其中一球）在证明过程中的作用：即巧妙的利用了「球的切线长相等」，将曲线上任意一点到焦点的距离作了转化。

- 在椭圆和双曲线的证明中，转移到同一条母线上；
- 在抛物线的证明中，转化为点到直线的距离。

其余类型的曲线容易证明，这里不做过多说明。

# 圆锥曲线与修辞手法

在英语中，

- Ellipse/Ellipsis（椭圆/省略）
- Hyperbola/Hyperbole（双曲线/夸张）
- Parabola/Parabole（抛物线/隐喻）

看起来非常相像，但它们的意思好像没有什么关联。

其实在古希腊语中，它们是完全相同的：

- $\varepsilon\lambda\lambda\varepsilon\iota\psi\iota\varsigma$（缺少）
- $\upsilon\pi\varepsilon\rho\beta o\lambda\eta$（过度）
- $\pi\alpha\rho\alpha\beta o\lambda\eta$（类比）

我们已经知道，

- 椭圆离心率 $e<1$
- 双曲线离心率 $e>1$
- 抛物线离心率 $e=1$

这就是它们之间的关联。

---

圆锥曲线是平面截圆锥所得到的截面交线。阿波罗尼斯曾把椭圆叫「亏曲线」，把双曲线叫做「超曲线」，把抛物线叫做「齐曲线」。

- Parabole，意为截面的斜率与圆锥母线的斜率相同（即平行关系），这就是抛物线；
- Hyperbole，意为截面的斜率超过了圆锥母线的斜率，这样的圆锥曲线就是双曲线；
- Ellipsis，意为截面的斜率不足于圆锥母线的斜率，得到的曲线则是椭圆。

# 仿射变换

对于一些椭圆或双曲线的小题，我们可以利用**仿射变换**的方式来快速解决问题。

## 概念与定义

圆方程
$$\left(\frac{x}{r}\right)^2+\left(\frac{y}{r}\right)^2=1$$

椭圆方程
$$\left(\frac{x}{a}\right)^2+\left(\frac{y}{b}\right)^2=1$$

由于圆有很好的几何与代数性质，且观察到两方程的形式非常相似，我们考虑将椭圆压缩/拉伸成圆。

\begin{definition}[仿射变换]
对椭圆 $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ $\left(a>b>0\right)$，置变换 $x'=\frac{x}{a}$ 与 $y'=\frac{y}{b}$，则椭圆化为单位圆 $x^2+y^2=1$。
\end{definition}

## 性质

容易证明下列性质：

\begin{theorem}[斜率关系]
变换后，平面内任意一条直线的斜率变为原来的 $\frac{a}{b}$。
\end{theorem}

\begin{theorem}[面积关系]
变换后，平面上任意区域的面积变为原来的的 $\frac{1}{ab}$。
\end{theorem}

\begin{theorem}[平行关系]
变换前后，两条直线的平行关系保持不变。
\end{theorem}

\begin{theorem}[平行长度关系]
变换前后，两条平行直线的长度之比保持不变。
\end{theorem}

\begin{theorem}[对称关系]
变换前后，线段中点（任意等分点）保持不变；关于 $x$，$y$ 轴或与原点对称的元素依然对称。
\end{theorem}

\begin{corollary}[重心]
变换前后，平面上任一区域的重心保持不变。
\end{corollary}

## 例题

\begin{example}
两中心为原点且焦点在 $x$ 轴上的椭圆离心率相同，从外侧椭圆两正半轴上的顶点 $A$，$B$ 分别作内侧椭圆的切线，两条切线的斜率乘积为 $-\frac{1}{4}$。

求椭圆的离心率。
\end{example}

\begin{proof}
将纵坐标乘 $\frac{a}{b}$，两椭圆变换成圆，此时容易证明变换后的两切线垂直，即斜率之积为 $-1$。

因为原切线斜率之积为 $-\frac{1}{4}$，所以 $\frac{a}{b}=2$，即离心率 $e=\frac{\sqrt{3}}{2}$。
\end{proof}

\begin{example}
过椭圆左顶点 $A$ 作直线 $AQ$ 与椭圆相交于 $Q$，与 $y$ 轴相交于 $M$。过原点作直线 $OP\parallel AQ$ 与椭圆相交于 $P$。

证明：$AQ\times AM=2OP^2$。
\end{example}

\begin{proof}
设 $B$ 为椭圆右顶点。将纵坐标乘 $\frac{a}{b}$，椭圆变换成半径为 $r=b$ 的圆，连接 $OQ'$，$BM'$。

注意到两等腰三角形 $\triangle OAQ'\sim\triangle M'AB$，得

$$\frac{AO}{AQ'}=\frac{AM'}{AB}$$

又因为 $AO=r=OP'$，且 $AB=2r$，立刻得

$$AQ'\times AM'=AO\times AB=2r^2=2OP'^2$$

由于 $OP\parallel AQ$，所以

$$\frac{AQ'}{AQ}=\frac{AM'}{AM}=\frac{OP'}{OP}$$

因此

$$AQ\times AM=2OP^2$$
\end{proof}

# 一种类圆锥曲线——Cassini 卵形线

我们已经知道：

- 到两定点距离之**和**为定值的点的轨迹为**椭圆**；
- 到两定点距离之**差**的绝对值为定值的点的轨迹为**双曲线**。

那么，如果将其换成**积**呢？

## 定义

\begin{definition}[Cassini 卵形线]
到两定点的距离之积为定值的点的轨迹为 Cassini 卵形线。
\end{definition}

与椭圆的定义类似，$P\left(x,y\right)$ 为平面上的一动点，与在 $x$ 轴上的两定点 $F_1\left(-c,0\right)$，$F_2\left(c,0\right)$ 满足 $|PF_1|\cdot|PF_2|=a^2$ 时，$P$ 的轨迹就称为 **Cassini 卵形线**。

将两定点 $F_1$，$F_2$ 称为 Cassini 卵形线的**焦点**，并定义**类离心率** $e=\frac{c}{a}$ 满足 $e>0$，$\varepsilon=\frac{a}{c}$。

![有着不同离心率的 Cassini 卵形线](/images/posts/conic-sections/cassini.png)

## 直角坐标系方程

$$|PF_1|\cdot|PF_2|=\boxed{\sqrt{\left(x+c\right)^2+y^2}\cdot\sqrt{\left(x-c\right)^2+y^2}=a^2}$$

$$c^4-2c^2x^2+2c^2y^2+x^4+2x^2y^2+y^4=a^4$$

$$\boxed{\left(x^2+y^2\right)^2-2c^2\left(x^2-y^2\right)=a^4-c^4}$$

## 对称性

由于方程中关于 $x$ 与 $y$ 的项均有平方，所以该曲线有中心对称性和轴对称性，对称中心为原点，两对称轴为 $x$ 轴与 $y$ 轴。

## 类型

- 当 $\varepsilon=0$ 时，图像为两个点；
- 当 $0<\varepsilon<1$ 时，图像分为两支封闭的曲线，随 $\varepsilon$ 的增大而扩大；
- 当 $\varepsilon=1$ 时，图像自相交叉，为**伯努利双纽线**；
- 当 $1<\varepsilon<\sqrt{2}$ 时，图像是一条没有自交点的联通曲线，且中部凹陷；
- 当 $\varepsilon=\sqrt{2}$ 时，图像是一条没有自交点的联通曲线，且中部扁平；
- 当 $\varepsilon>\sqrt{2}$ 时，图像是一条没有自交点的联通曲线，且中部凸出。

## 与坐标轴的交点

### 与纵轴的交点

在方程中，令 $x=0$，整理化简得
$$y^2=a^2-c^2$$

- 当 $a^2-c^2<0$，即 $\varepsilon<1$ 时 $y$ 无实数解，图像与 $y$ 轴无交点；
- 当 $a^2-c^2=0$，即 $\varepsilon=1$ 时 $y=0$，图像与 $y$ 轴仅有 $1$ 个交点，为原点 $\left(0,0\right)$；
- 当 $a^2-c^2>0$，即 $\varepsilon>1$ 时 $y=\pm\sqrt{a^2-c^2}$，图像与 $y$ 轴有 $2$ 个关于 $x$ 轴对称的交点，为 $\left(0,\pm\sqrt{a^2-c^2}\right)$。

### 与横轴的交点

在方程中，令 $y=0$，整理化简得
$$\left|x+c\right|\left|x-c\right|=a^2$$
$$x^2=c^2\pm a^2$$

- 当 $a=0$，即 $\varepsilon=0$ 时，$x=\pm c$，图像与 $x$ 轴有 $2$ 个关于 $y$ 轴对称的交点，即为 $F_{1,2}$；
- 当 $0<a<c$，即 $0<\varepsilon<1$ 时，$x=\pm\sqrt{c^2\pm a^2}$，图像与 $x$ 轴有 $4$ 个关于坐标轴对称的交点 $\left(\pm\sqrt{c^2+a^2},0\right)$ 与 $\left(\pm\sqrt{c^2-a^2},0\right)$；
- 当 $a=c$，即 $\varepsilon=1$ 时，$x=0$ 或 $x=\pm\sqrt{c^2+a^2}$，图像与 $x$ 轴有 $3$ 个交点 $\left(0,0\right)$ 与 $\left(\pm\sqrt{c^2+a^2},0\right)$；
- 当 $a>c$，即 $\varepsilon>1$ 时，$x=\pm\sqrt{c^2+a^2}$，图像与 $x$ 轴有 $2$ 个关于 $y$ 轴对称的交点 $\left(\pm\sqrt{c^2+a^2},0\right)$。

上述结论也可由图像快速得到。

## 边界

### 左右边界

$$\boxed{x=\pm\sqrt{a^2+c^2}}$$

\begin{proof}
显然左右边界位于 $x$ 轴上。令 $y=0$，解方程得
$$x=\pm\sqrt{a^2+c^2}$$
\end{proof}

### 上下边界

$$\boxed{y=\begin{cases}
\pm\dfrac{a^2}{2c}&\varepsilon\le\sqrt{2}\\
\pm\sqrt{a^2-c^2}&\varepsilon>\sqrt{2}\\
\end{cases}}$$

\begin{proof}
当 $\varepsilon\le\sqrt{2}$ 时，曲线上下内凹，有
$$S_{\triangle PF_1F_2}=\frac{1}{2}|PF_1|\cdot|PF_2|\cdot\sin\angle F_1PF_2\le\frac{1}{2}|PF_1|\cdot|PF_2|=\frac{1}{2}a^2$$

又
$$S_{\triangle PF_1F_2}=\frac{1}{2}\cdot2c\cdot h$$

因此
$$h\le\frac{a^2}{2c}$$

当 $\varepsilon>\sqrt{2}$ 时，曲线上下外凸，边界位于曲线与 $y$ 轴的交点处。令 $x=0$，解方程得

$$y=\pm\sqrt{a^2-c^2}$$
\end{proof}

由该性质的证明容易得到：

- 若 $\varepsilon\le\sqrt{2}$，则当且仅当 $P$ 位于上下边界时，$\sin\angle F_1PF_2=1$，$PF_1\perp PF_2$；
- 若 $\varepsilon>\sqrt{2}$，则曲线上不存在 $P$ 点使得 $PF_1\perp PF_2$。

## 极值点

我们称位于上下边界处的点 $M$ 称为 Cassini 卵形线的**极值点**。

当 $\varepsilon\le\sqrt{2}$ 时，将 $y_M=\pm\frac{a^2}{2c}$ 代入曲线方程，得
$$\sqrt{\frac{a^4}{4c^2}+\left(x_M-c\right)^2}\sqrt{\frac{a^4}{4c^2}+\left(x_M+c\right)^2}=a^2$$

解得
$$x_M=\pm\frac{\sqrt{4c^4-a^4}}{2c}$$

因此
$$\boxed{M\left(\pm\dfrac{\sqrt{4c^4-a^4}}{2c^2},\pm\dfrac{a^2}{2c}\right)\text{ where }\varepsilon\le\sqrt{2}}$$

当 $\varepsilon>\sqrt{2}$ 时，显然
$$\boxed{M\left(0,\pm\sqrt{a^2-c^2}\right)\text{ where }\varepsilon>\sqrt{2}}$$

## 其它性质

\begin{lemma}
当 $\varepsilon<\sqrt{2}$ 时，曲线上下内凹，曲线上存在 $4$ 个极值点 $M\left(\pm\dfrac{\sqrt{4c^4-a^4}}{2c^2},\pm\dfrac{a^2}{2c}\right)$ 使得  $MF_1\perp MF_2$。
\end{lemma}

\begin{proof}
$$\overrightarrow{MF_1}\cdot\overrightarrow{MF_2}=\left(\frac{\sqrt{4c^4-a^4}}{2c}+c\right)\left(\frac{\sqrt{4c^4-a^4}}{2c}-c\right)+\left(\frac{a^2}{2c}\right)^2=0$$
$$MF_1\perp MF_2$$
\end{proof}

\begin{theorem}
$$\boxed{S_{\triangle PF_1F_2}\le\frac{a^2}{2}}$$
\end{theorem}

\begin{corollary}
当 $\varepsilon\le\sqrt{2}$ 时，
$$\boxed{S_{\triangle PF_1F_2\max}=\frac{a^2}{2}}$$
\end{corollary}

\begin{proof}
$$S_{\triangle PF_1F_2}=\frac{1}{2}|PF_1|\cdot|PF_2|\cdot\sin\angle F_1PF_2\le\frac{1}{2}|PF_1|\cdot|PF_2|=\frac{a^2}{2}$$

1. 当 $\varepsilon\le\sqrt{2}$ 时，曲线上下内凹，有极值点 $M$ 满足
$$MF_1\perp MF_2$$
$$\sin\angle F_1MF_2=1$$

因此
$$S_{\triangle PF_1F_2\max}=\frac{a^2}{2}$$

2. 当 $\varepsilon>\sqrt{2}$ 时，$e<\frac{1}{\sqrt{2}}$，曲线上下外凸，任取一点 $P$，与极值点 $M$ 有
$$S_{\triangle PF_1F_2}=\frac{1}{2}|F_1F_2|\cdot|y_P|\le\frac{1}{2}|F_1F_2|\cdot|y_M|=S_{\triangle MF_1F_2}$$

同时，$S_{\triangle PF_1F_2}=\frac{1}{2}|PF_1|\cdot|PF_2|\cdot\sin\angle F_1PF_2=\frac{a^2}{2}\sin\angle F_1PF_2$，所以
$$\frac{a^2}{2}\sin\angle F_1PF_2\le\frac{a^2}{2}\sin\angle F_1MF_2$$
$$\sin\angle F_1PF_2\le\sin\angle F_1MF_2$$

又
$$\sin\frac{\angle F_1MF_2}{2}=\sin\angle F_1MO=\frac{c}{a}=e<\frac{1}{\sqrt{2}}$$

因此
$$\angle F_1MF_2<90^\circ$$
$$\sin\angle F_1MF_2<1$$
$$\sin\angle F_1PF_2<1$$
$$S_{\triangle PF_1F_2}=\frac{a^2}{2}\sin\angle F_1PF_2<\frac{a^2}{2}$$

综上
$$S_{\triangle PF_1F_2}\le\frac{a^2}{2}$$

当且仅当 $\sin\angle F_1PF_2=1$，$PF_1\perp PF_2$ 时 $S_{\triangle PF_1F_2\max}=\frac{a^2}{2}$，此时 $P$ 即为极值点 $M$ 且 $\varepsilon\le\sqrt{2}$。
\end{proof}

可以看出，$\varepsilon=\sqrt{2}$ 是一个很重要的分界点。

\begin{theorem}
$$\boxed{|PF_1|+|PF_2|\ge2a}$$
\end{theorem}

\begin{proof}
由基本不等式 $x+y\ge2\sqrt{xy}$ $\left(x,y>0\right)$，得
$$|PF_1|+|PF_2|\ge2\sqrt{|PF_1|\cdot|PF_2|}=2a$$

当且仅当 $|PF_1|=|PF_2|$，$P$ 位于图像与 $y$ 轴的交点时不等式取等。
\end{proof}

即当 $a>c$ 时，有共同焦点与离心率的椭圆位于 Cassini 卵形线的内部。

![椭圆在 Cassini 卵形线内部](/images/posts/conic-sections/ellipsis.png)

## 极坐标系方程

令 $r^2=x^2+y^2$，$\tan\theta=\frac yx$，有

$$x^2=\frac{r^2}{1+\tan^2\theta}=r^2\cos^2\theta$$
$$y^2=\frac{r^2\tan^2\theta}{1+\tan^2\theta}=r^2\sin^2\theta$$

由直角坐标系下的方程代入，得

$$r^4-2c^2r^2\cos2\theta+c^4-a^4=0$$

解关于 $r^2$ 的方程，舍去负根，化简得

$$\boxed{r\left(\theta\right)=\sqrt{c^2\cos2\theta\pm\sqrt{a^4+\frac{c^4}{2}\left(\cos4\theta-1\right)}}}$$

事实上，当且仅当 $a\le c$，$0<\varepsilon\le 1$ 时存在 $\pm$ 号取负的情况，其余情况下 $\pm$ 号仅需取正。

图为 $a=2^{-1/4}$，$c=1$ 时的情况。

![极坐标系下的 Cassini 卵形线](/images/posts/conic-sections/polar.png)

# 总结

本文进行了圆锥曲线方程的统一；介绍了圆锥曲线的立体几何定义，引入了 Dandelin 双球的概念——通过平面切割圆锥的方法，通过球的切线长度的性质证明了椭圆和双曲线的定义与轨迹的统一性；讨论了仿射变换的概念、定义与几个重要性质，以及其在解决椭圆相关问题中的应用；通过类比圆锥曲线的定义，拓展了一种到两定点距离之积为定值的点所形成的轨迹的类圆锥曲线——Cassini 卵形线，并研究了其定义、方程、对称性以及其他几何性质。
