---
title: 骑士
slots: ['header', 'summary', 'default']
---
::: slot header
# 骑士
<FloatTOC />
## 综合介绍
:::

::: slot summary

剑术师是自乌尔达哈斗技场中使用剑盾战斗的斗士，成长为骑士之后就成为了守卫乌尔达哈王族的银胄团精英，使用剑术与盾牌进行攻防，保护自己的君主和效忠的王国。

骑士是MMORPG中最传统的T职业，拥有我们通常理解的真正无敌，同时他作为“对魔法略知一二”的坦克职业，有非常独特的物理+魔法输出循环，同时拥有加血、保护等等极强的团队辅助能力。目前在8人副本中主要担任ST位置。

推荐有骑士（以及圣骑士）情结的玩家选择。
:::

## 骑士入门

想以骑士开始游戏的玩家，可以在建号的时候选择==剑术师==进入游戏。其他玩家完成自己职业10级的职业任务之后，在乌尔达哈接任务<quest name="如何加入剑术师行会" />，并继续<quest name="最强剑术师之路" />任务，就可以获得单手剑并转职为剑术师了。

完成剑术师30级职业任务<quest name="纳尔札尔双剑" type="plus" />，就会开启骑士的转职任务<quest name="自由骑士的誓约" type="plus" />，完成任务获得<item name="骑士之证" />并装备上，就正式成为一名骑士了！

## 练级手法

> * [如何设置技能/快捷栏](/ui/hotbar.md)
> * [让战斗更方便的设置](/ui/battle.md)

骑士在还是剑术师的时候，就能习得<Action name="钢铁信念" />(10)，使用钢铁信念之后，所有技能都会附加10倍基础仇恨。只要开着盾姿正常输出，理论上说几乎是很难OT的。

只要骑士在MT的位置，就必须保持盾姿<Status :id="393" name="钢铁信念" />常驻，反之自己如果不是MT，就需要把它关掉。

骑士作为一个T职业，除了需要掌握自身的输出、减伤等技能运用的同时，还需要有控场意识。可以阅读[T职基础攻略](https://bbs.nga.cn/read.php?tid=19311442)和[四人副本-坦克必备意识和技巧集锦](https://bbs.nga.cn/read.php?tid=15417017)这两篇文章，更详细了解T职业的减伤、攻防，以及部分副本的应对实例。

### 对单体拉怪/输出

骑士基础技能连击是<Action name="先锋剑" />(1)→<Action name="暴乱剑" />(4)→<Action name="战女神之怒" />(26)（60级后升级为<Action name="王权剑" />），以及<Action name="投盾" />(15)。

骑士单拉的手法就是在盾姿下，以投盾开怪，然后重复战女神之怒的一套连击，60级后战女神会自动变为<Action name="王权剑" />。而到了64级和76级则会分别为这套连击增加<Action name="圣灵" />和<Action name="赎罪剑" />。

在初期阶段，<Action name="战逃反应" />尽可能做到好了就开。

作为略懂魔法的职业，骑士在64级才能习得第一个攻击魔法——<Action name="圣灵" />，在BOSS战中，就可以使用圣灵开怪了（如果有倒计时，就在倒计时还有2s的时候开始使用），4人本拉小怪的途中仍然正常使用投盾；每次使用完王权剑连击后，更会赠送一个瞬发威力增强<Action name="圣灵" />，一定要在下次使用王权剑之前打出来！而68级习得<Action name="安魂祈祷" />之后，就可以使用<Action name="安魂祈祷" />→<Action name="圣灵" />x 4这样的魔法连击，80级之后骑士再次学会魔法大招<Action name="悔罪" />，在安魂祈祷效果内使用即可（先使用安魂祈祷，然后使用3次圣灵和1次悔罪）。

76级习得<Action name="赎罪剑" />之后，每成功打出一次王权剑连击，就可以使用3次赎罪剑。

到这里，骑士的基本循环已经基本形成：（预读<Action name="圣灵" />开怪 → ）打一套王权剑连击 → <Action name="战逃反应" /><Action name="安魂祈祷" /> → <Action name="圣灵" /> x 5（80级后变为4个圣灵和一个悔罪，满级后变为悔罪连击和1个圣灵） → <Action name="赎罪剑" /> x 3，然后重复基础的王权剑+圣灵+赎罪剑循环到下一次站逃/安魂。

30级习得的<Action name="深奥之灵" />（86级后升级为<Action name="偿赎剑" />）是一个能力技，需要插入在<Status :id="76" name="战逃反应" />buff期间，好了就用。<Action name="厄运流转" />(50)虽然是一个AOE技能，但是因为是不占GCD的能力技，因此在对单体输出时，也可以同样插入到技能循环中。理想中每次站逃安魂中各用一次，30s后立刻可以再用一次，时刻记得好了立刻就用。

最后，<Action name="调停" />(74)是骑士历经5年终于获得的位移技能，这个技能在爆发期可以当做输出技能使用，也可以用于副本机制应对，对副本不熟练时尽量留一层以备不时之需。

### 对多怪拉怪/输出

骑士在群拉的时候需要<i class="xiv mouse-right-button"></i>右键选中比较近的目标，保证自己一直在平A，只有这样才能够获得==忠义==（用来开各种减伤）。

骑士在2只怪时使用单拉手法，在面对超过2只怪的时候则使用<Action name="全蚀斩" />(6)→<Action name="日珥斩" />(40)的连击。骑士的AOE爆发和单体一样，只是将基本循环换为日珥斩连击，然后在<Action name="战逃反应">战逃</Action><Action name="安魂祈祷">安魂</Action>后使用<Action name="圣环" />替换圣灵，<Action name="悔罪" />和其他能力技（厄运流转、偿赎剑）照常插入即可。

特别要注意的是，虽然圣环在84级之后有了回血的能力，但是骑士在咏唱魔法时无法进行格挡，并不划算，因此没有<Status :id="2673" name="神圣魔法效果提高" />（通过日珥斩连击获得）或<Status :id="1368" name="安魂祈祷" />的时候，不要读条使用圣环。

### 减伤及辅助

职能技能<Action name="铁壁" />是20%小减伤，<Action name="预警" />(38)则是30%的大减伤，<Action name="神圣领域" />(50)是超无敌的无敌。骑士在4人本中狂拉一大波小怪然后开无敌是很常见的做法，平时则综合交替使用其他减伤。另外需要注意的是，神圣领域无法抵挡在开启之前已经判定但开启之后才生效的伤害。

另外<Action name="盾阵" />(35)是一个15%的小减伤，而86级之后升级为<Action name="圣盾阵" />，则进一步加强了减伤能力，并增加回血能力。由于CD很短，所以有==忠义==就可以经常开，不要让忠义溢出了。

52级习得的<Action name="壁垒" />可以100%触发格挡，格挡是骑士特有的能力，而格挡的效果则与盾牌的性能有关，通常成功格挡约等于17%~20%的减伤。

骑士对他人的减伤有<Action name="保护" />和<Action name="干预" />，群体减伤是<Action name="圣光幕帘" />和<Action name="武装戍卫" />。<Action name="保护" />是由自己替目标承担伤害；<Action name="干预" />则是一个复合减伤，可以部分继承自己身上已有的减伤效果，另外还带有一定回血能力；<Action name="圣光幕帘" />开启后需要由治疗触发（可以用直接治疗技能触发，或者在84级之后由圣灵或圣环触发），触发后会给范围内的队友加血，同时赋予自身血量10%的盾；<Action name="武装戍卫" />俗称大翅膀，为身后的队友减伤15%（自身不能移动，一旦移动，翅膀就会消失）。

职能技能<Action name="雪仇" />是一个降低自身周围敌人攻击的技能，在4人副本面对一群小怪时，经常与<Action name="亲疏自行" />一起组成减伤链的最后一环。而在8人副本等难度较高的副本里，雪仇通常会作为重要减伤的一环安排到团队减伤中。

最后<Action name="深仁厚泽" />是治疗技能，治疗队友时，自己能获得治疗量50%的回血，在副本里发生紧急状况时，可以一人救俩，实乃最终保队神技。

### 副本实战及应急

在四人本中，确认自己的<Status :id="393" name="钢铁信念" />已打开，在八人本中，如果你不做MT，那么请把它关上，如果你不确定要不要做MT，可以打字跟队友商量一下（默认情况下则是先开盾姿的一方为MT）。

OT或需要换T时，需要先使用<Action name="挑衅" />，让自己的仇恨变为当前最高仇恨。当对方挑衅换T后，自己应该主动关掉盾姿，并对搭档使用<Action name="退避" />。

骑士拥有最多的打断技能：<Action name="下踢" />、<Action name="插言" />、<Action name="盾牌猛击" />，当怪物读条栏有发光边缘时，表示这个技能可以被<Action name="插言" />打断，但是实际上有必要打断的技能并不多。<Action name="下踢" />和<Action name="盾牌猛击" />都是使敌方<Status :id="2" name="眩晕" />而打断，由于FF14中有抗性机制的存在，过多使用打断反而有可能导致需要打断的时候出现抗性，高等级的怪物大都具有眩晕抗性，无法通过眩晕打断。可以查看[副本攻略](/duty/)确认需要/能够打断的技能。

如果你在ST时发现场上倒T或倒奶了，请务必第一时间打开盾姿<Status :id="393" name="钢铁信念" />。

45级习得的<Action name="保护" />是个终极把妹技能，当队友在你10m以内时对他使用保护，你俩之间就会有一条线，此时对你队友的伤害都会由你承担。通常在治疗OT时，或者你不小心倒T刚刚复活又无法立刻对所有小怪建立仇恨时，你可以把保护甩给当前承伤的同伴，然后再慢慢把怪的仇恨拉回来。

74级的<Action name="调停" />是一个位移技能，可以用于副本机制的应对。

在一般4人本中，<Action name="神圣领域" />也可以当做应急技能。推荐绑定一个喊话宏以提醒治疗注意。出现团血血崩的时候，骑士可以开启神圣领域然后奶人，分担治疗压力。

无论是哪种应急手段都需要你沉着、冷静，判断要果断，很有可能生死只在一念间。

## 满级手法

<img src="./job.assets/pld_6_4.png" />

:::segment grey

《帕拉丁儿6.4操作指南》 图片制作：洛可可@晨曦王座

:::

> 因精力有限，本站无法提供满级手法参考，可前往NGA论坛查找[骑士的满级攻略](https://bbs.nga.cn/thread.php?key=%E9%AA%91%E5%A3%AB&fid=698)
