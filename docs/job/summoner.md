---
jobName: 召唤师
---

# 召唤师
<FloatTOC />

## 综合介绍

秘术师是利姆萨·罗敏萨海关的工作人员，精于计算与查验货物，为进出口的货物计算税款。经历与蛮神的战斗，就能够接触到第三星历诞生于美拉西迪亚大陆的古老职业——召唤师，它是现在玩家能玩到的(设定上)最古老的职业。通过召唤蛮神之灵与自己并肩战斗，使用DOT进行持续性伤害。

召唤的主要输出依靠DOT、以太能力技能，以及召唤蛮神附体的相关技能打出高伤害，由于输出技能的组成分割成好几块，导致召唤的输出思路也要多线操作，对于喜欢复杂计算战斗的玩家来说，召唤是一个不错的选择。

另外召唤所拥有的召唤兽们也是召唤玩家的喜爱所在，召唤兽们会随着召唤的成长而增加（虽然同一时刻只能召唤一只），最后还能召唤到巴哈姆特和不死鸟，可以说是全场最靓的那个仔了。

## 召唤入门

想以召唤师开始游戏的玩家，可以在建号的时候选择==秘术师==进入游戏。其他玩家完成自己职业10级的职业任务之后，在拉诺西亚接任务<quest name="如何加入秘术师行会" />，并继续<quest name="战场上的谋略" />任务，就可以获得魔导书并转职为秘术师了。

完成秘术师30级职业任务<quest name="秘术最高级命题的证明" type="plus" />，就会开启召唤师的转职任务<quest name="业火的召唤" type="plus" />，完成任务获得<item name="召唤师之证" />并装备上，就正式成为一名召唤师了！

### 召唤特化指令

完成召唤50级职业任务<quest type="plus" name="邪道与正道" />，可以回秘术师行会接任务<quest type="plus" name="召唤兽变形" />，完成这个任务之后，就可以通过文本指令`/召唤兽投影`把召唤兽变为宝石兽了（需要再次召唤），例如：

* 输入`/召唤兽投影 泰坦之灵 红宝石兽`是把泰坦之灵变为红宝石兽。
* 输入`/召唤兽投影 泰坦之灵`是把泰坦之灵变回原本的样子。

另外可以输入`/巴哈姆特尺寸 小`缩小巴哈姆特尺寸（可选关键字有大、中、小三个，默认的巴哈是大尺寸的），每个人的巴哈尺寸都是个人设置，如果有人跟你说你的巴哈太大了，记得告诉他这个指令。 

## 练级手法

随着版本更迭，召唤师在练级期间的手法出现了一些割裂的情况。玩家需要时刻记得自己的技能有DOT，以太，宝宝（召唤）这三大部分，只要你用对了这三个部分的技能，那么你的输出就不会太低。

与之相对的，召唤并不存在“技能循环”，他的每个输出组成部分都按照既定的节奏循环，继而组成出完整的召唤师的输出手法。

召唤输出核心的基础就是DOT不能断，读条不能停，宝宝不能忘，在龙神附体/不死鸟附体期间，部分技能会变为瞬发，当你需要移动的时候，尽可能利用这一点。

### 对单体输出

召唤的基础输出DOT是<Action name="毒菌" job="秘术师" />(2)（最终升级为<Action name="剧毒菌" />）和<Action name="瘴气" job="秘术师" />(6)（最终升级为<Action name="瘴暍" />），玩家需要时刻保持目标身上存在这两个DOT之后再进行其他输出。<Action name="三重灾祸" />可以为目标同时附加两个DOT，合理规划可以减少读条上DOT的次数和时间，并利用[快照机制](/basic/battle.md#DOT)最大化DOT伤害，具体使用时机和方法可以参考满级攻略。

召唤习得<Action name="能量吸收" job="秘术师" />(18)之后，就可以使用能量吸收获得以太，当目标身上2个DOT都存在时，就可以消耗以太对目标使用<Action name="溃烂爆发" job="秘术师" />，溃烂爆发是召唤初期最强大的技能，但是它需要在目标身上同时存在两个DOT的时候才能达到最大威力（和诗人的风毒之于侧风诱导箭类似）。

召唤兽对应的技能是<Action name="灵攻I" job="秘术师" />(10)和<Action name="灵攻II" job="秘术师" />(40)，这两个技能都是由玩家进行操作的，并且能蓄积2次。对单体进行输出时应该使用绿宝石兽（<Action name="召唤" job="秘术师" />）或伊芙利特之灵（<Action name="召唤III" />），在野外solo的时候可以使用黄宝石兽/泰坦之灵（<Action name="召唤II" job="秘术师" />），黄宝石兽/泰坦之灵的灵攻I可以为玩家附加一个自身20%血量的盾，在一定程度上提升玩家的自保能力。

50级习得<Action name="内力迸发" />之后，可以命令宝宝使用它的最强大招（也是蛮神们的招牌技能）。

58级开始，召唤会习得跟巴哈姆特和不死鸟相关的一些蛮神技能，这些技能分为附体和召唤2类。

<Action name="龙神附体" />/<Action :id="16549">不死鸟附体</Action>可以让读条时间缩短2.5s（绝大部分技能都变为瞬发），同时重置<Action name="三重灾祸" />的CD时间。龙神附体的最后需要使用<Action name="死星核爆" />结束附体时间。不死鸟附体期间则需要交替使用<Action :id="16514">灵泉之炎</Action>和<Action :id="16515">炼狱之炎</Action>（分别由<Action name="毁灭" job="秘术师" />和<Action name="迸发" />自动变成）。

使用过2次龙神附体之后，就可以激活<Action name="龙神召唤" />，龙神召唤期间，玩家每使用一次技能，召唤出的亚神灵巴哈姆特就会自动发动一次<Action :id="8881">真龙波</Action>攻击，考虑到真龙波的CD，在巴哈显现期间，玩家应该尽可能多地使用攻击技能（但是真龙波CD是1.5s，因此你也保证3s内用了2个技能就可以）。另外召唤出亚灵神巴哈姆特/亚灵神不死鸟之后，<Action name="龙神迸发" />/<Action :id="16516">不死鸟迸发</Action>也变得可以使用了（分别对应巴哈姆特的<Action :id="8879">死亡轮回</Action>和不死鸟的<Action :id="16518">天启</Action>），在召唤出亚灵神之后，应该优先使用迸发技能，在整个亚灵神显现期间一共可以用处2次，不用就亏了。

最后，余下的时间则使用<Action name="毁灭" job="秘术师" />（54升级为<Action name="毁荡" />）和<Action name="毁坏" job="秘术师" />（升级后可以触发buff升级为<Action :id="7426" name="毁绝" />）输出，在毁坏触发buff变为毁绝之前，伤害最高的技能是毁荡。

### 群体AOE

召唤的AOE技能是<Action name="迸发" />(40)，另外可以通过<Action name="能量抽取" />获得以太，消耗以太可以使用<Action name="痛苦核爆" />，DOT技能对应的AOE技能则是<Action name="灾祸" job="秘术师" />（俗称传染）。

召唤在面对多个敌人的时候，首先上双毒（或者直接使用三灾），然后使用灾祸把DOT扩散给所有敌人，接下来使用迸裂填充，用能量抽取获得以太，然后使用痛苦核爆。

对应群攻的宝宝是迦楼罗之灵（<Action name="召唤" job="秘术师" />），它的两个技能都是AOE，另外伊芙利特的2技能也是AOE。

在附体或召唤亚神灵期间，玩家技能并无特殊变化，无论是<Action name="死星核爆" />、<Action name="龙神迸发" />（死亡轮回）或者<Action :id="16516">不死鸟迸发</Action>（天启）都是AOE技能，正常输出即可。

## 满级手法

满级的召唤需要能够保证自己的3个部分循环都顺畅运转：利用附体技能自动刷新三灾的特性减少手动补DOT的次数，不浪费任何一次附体和以太的CD，用宝宝技能刷新出<Action :id="7426" name="毁绝" />创造移动输出的空间，力争不浪费任何GCD无缝输出。

* [5.0召唤攻略](https://bbs.nga.cn/read.php?tid=17633131)