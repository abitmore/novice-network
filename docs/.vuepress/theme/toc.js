export const TOC = {
  main: [
    {
      title: '',
      children: [
        {
          href: '/',
          title: '首页'
        }
      ]
    },
    {
      title: '入坑准备',
      children: [
        {
          href: '/before/pay.htm',
          title: '收费方式及福利'
        },
        {
          href: '/before/char.htm',
          title: '下载注册与创建角色'
        },
        {
          href: '/before/job.htm',
          title: '职业选择'
        }
      ]
    },
    {
      title: '新人指南',
      children: [
        {
          href: '/before/world.htm',
          title: '游戏背景介绍'
        },
        {
          href: '/basic/core.htm',
          title: '新人必知'
        },
        {
          href: '/ui/how.htm',
          title: '界面指南',
          folder: 'config'
        },
        {
          href: '/ui/how.htm',
          title: '概览',
          belongsTo: 'config',
          indent: 1
        },
        {
          href: '/ui/hotbar.htm',
          title: '设置技能/热键栏',
          belongsTo: 'config',
          indent: 1
        },
        {
          href: '/ui/config.htm',
          title: '开始游戏设置',
          belongsTo: 'config',
          indent: 1
        },
        {
          href: '/ui/battle.htm',
          title: '让战斗更方便的设置',
          belongsTo: 'config',
          indent: 1
        },
        {
          href: '/basic/quest.htm',
          title: '任务分类及重要支线'
        },
        {
          href: '/basic/map.htm',
          title: '地图移动与飞行'
        },
        {
          href: '/basic/item.htm',
          title: '道具、背包与市场'
        },
        {
          href: '/basic/equip.htm',
          title: '装备介绍',
          folder: 'equip'
        },
        {
          href: '/basic/equip.htm',
          title: '装备分类与强度',
          belongsTo: 'equip',
          indent: 1
        },
        {
          href: '/basic/equip-looking.htm',
          title: '染色与投影',
          belongsTo: 'equip',
          indent: 1
        },
        {
          href: '/basic/communication.htm',
          title: '玩家交流'
        },
        {
          href: '/basic/battle.htm',
          title: '战斗与副本',
          folder: 'battle'
        },
        {
          href: '/basic/battle.htm',
          title: '概览',
          belongsTo: 'battle',
          indent: 1
        },
        {
          href: '/basic/battle-mech.htm',
          title: '战斗机制',
          belongsTo: 'battle',
          indent: 1
        },
        {
          href: '/basic/dungeon.htm',
          title: '副本介绍',
          belongsTo: 'battle',
          indent: 1
        },
        {
          href: '/basic/dummy.htm',
          title: '木桩&木人',
          belongsTo: 'battle',
          indent: 1
        },
        {
          href: '/basic/levelup.htm',
          title: '练级指南'
        }
      ]
    },
    {
      title: '进阶指南',
      children: [
        {
          href: '/basic/config.htm',
          title: '游戏设置详解'
        },
        {
          href: '/advanced/glossary.htm',
          title: '黑话缩略语词典'
        },
        {
          href: '/duty/',
          title: '副本攻略'
        },
        {
          href: '/advanced/macro-intro.htm',
          title: '宏指南',
          folder: 'macro'
        },
        {
          href: '/advanced/macro-intro.htm',
          title: '概览',
          belongsTo: 'macro',
          indent: 1
        },
        {
          href: '/advanced/macrology-1.htm',
          title: '宏学上 宏基础',
          belongsTo: 'macro',
          indent: 1
        },
        {
          href: '/advanced/macrology-2.htm',
          title: '宏学中 宏进阶',
          belongsTo: 'macro',
          indent: 1
        },
        {
          href: '/advanced/macrology-3.htm',
          title: '宏学下 宏拾遗',
          belongsTo: 'macro',
          indent: 1
        },
        {
          href: '/advanced/currency.htm',
          title: '货币系统（神典石）'
        },
        {
          href: '/advanced/bis.htm',
          title: '毕业装备'
        }
      ]
    },
    {
      title: '战斗玩法',
      children: [
        {
          href: '/job/bluemage.htm',
          title: '青魔法师'
        },
        {
          href: '/topic/hunt.htm',
          title: '怪物狩猎'
        },
        {
          href: '/topic/variant.htm',
          title: '多变迷宫'
        },
        {
          href: '/topic/battle.htm',
          title: '挑战副本'
        },
        {
          href: '/topic/raid.htm',
          title: '高难度挑战副本一览'
        },
        {
          href: '/topic/pvp.htm',
          title: 'PVP',
          folder: 'pvp'
        },
        {
          href: '/topic/pvp.htm',
          title: '概览',
          belongsTo: 'pvp',
          indent: 1
        },
        {
          href: '/topic/crystallineconflict.htm',
          title: '水晶冲突（5v5）',
          belongsTo: 'pvp',
          indent: 1
        },
        {
          href: '/topic/frontline.htm',
          title: '纷争前线（战场）',
          belongsTo: 'pvp',
          indent: 1
        },
        {
          href: '/topic/rivalwings.htm',
          title: '烈羽争锋',
          belongsTo: 'pvp',
          indent: 1
        },
        {
          href: '/topic/shine.htm',
          title: '发光武器',
          folder: 'shine'
        },
        {
          href: '/topic/shine.htm',
          title: '概览',
          belongsTo: 'shine',
          indent: 1
        },
        {
          href: '/topic/relic.htm',
          title: '上古、黄道武器(古武)',
          belongsTo: 'shine',
          indent: 1
        },
        {
          href: '/topic/anima.htm',
          title: '元灵武器(魂武)',
          belongsTo: 'shine',
          indent: 1
        },
        {
          href: '/topic/eureka-weapon.htm',
          title: '禁地兵装(优武)',
          belongsTo: 'shine',
          indent: 1
        },
        {
          href: '/topic/resistance.htm',
          title: '义军武器(女王之刃)',
          belongsTo: 'shine',
          indent: 1
        },
        {
          href: '/topic/manderville.htm',
          title: '曼德维尔武器',
          belongsTo: 'shine',
          indent: 1
        }
      ]
    },
    {
      title: '特殊战斗区域',
      children: [
        {
          href: '/topic/dd.htm',
          title: '深层迷宫'
        },
        {
          href: '/topic/eureka.htm',
          title: '禁地优雷卡',
          folder: 'eureka'
        },
        {
          href: '/topic/eureka.htm',
          title: '基本情报',
          belongsTo: 'eureka',
          indent: 1
        },
        {
          href: '/topic/eureka/anemos.htm',
          title: '常风之地',
          belongsTo: 'eureka',
          indent: 1
        },
        {
          href: '/topic/eureka/pagos.htm',
          title: '恒冰之地',
          belongsTo: 'eureka',
          indent: 1
        },
        {
          href: '/topic/eureka/pyros.htm',
          title: '涌火之地',
          belongsTo: 'eureka',
          indent: 1
        },
        {
          href: '/topic/eureka/hydatos.htm',
          title: '丰水之地',
          belongsTo: 'eureka',
          indent: 1
        },
        {
          href: '/topic/eureka-weapon.htm',
          title: '优雷卡武器',
          belongsTo: 'eureka',
          indent: 1
        },
        {
          href: '/topic/bozjan.htm',
          title: '南方博兹雅战线'
        }
      ]
    },
    {
      title: '休闲玩法及日常',
      children: [
        {
          href: '/topic/daily.htm',
          title: '每日/每周任务'
        },
        {
          href: '/topic/treasure.htm',
          title: '休闲赚钱挖宝'
        },
        {
          href: '/topic/island.htm',
          title: '开拓无人岛'
        },
        {
          href: '/topic/story.htm',
          title: '剧情任务'
        },
        {
          href: '/topic/goldsaucer.htm',
          title: '金碟游乐场',
          folder: 'goldsaucer',
        },
        {
          href: '/topic/goldsaucer.htm',
          title: '概览',
          belongsTo: 'goldsaucer',
          indent: 1
        },
        {
          href: '/topic/gs-gate.htm',
          title: '机遇临门',
          belongsTo: 'goldsaucer',
          indent: 1
        },
        {
          href: '/topic/gs-minigame.htm',
          title: '迷你小游戏',
          belongsTo: 'goldsaucer',
          indent: 1
        },
        {
          href: '/topic/gs-cactpot.htm',
          title: '仙人彩',
          belongsTo: 'goldsaucer',
          indent: 1
        },
        {
          href: '/topic/gs-fashion.htm',
          title: '时尚品鉴',
          belongsTo: 'goldsaucer',
          indent: 1
        },
        {
          href: '/topic/triple-triad.htm',
          title: '九宫幻卡',
          belongsTo: 'goldsaucer',
          indent: 1
        },
        {
          href: '/topic/gs-race.htm',
          title: '陆行鸟竞赛',
          belongsTo: 'goldsaucer',
          indent: 1
        },
        {
          href: '/topic/gs-mahjong.htm',
          title: '多玛方城战',
          belongsTo: 'goldsaucer',
          indent: 1
        },
        {
          href: '/topic/gs-minion.htm',
          title: '萌宠之王',
          belongsTo: 'goldsaucer',
          indent: 1
        },
        {
          href: '/topic/relax.htm',
          title: '休闲活动'
        }
      ]
    },
    {
      title: '其他玩法系统',
      children: [
        {
          href: '/topic/social.htm',
          title: '社群与社交',
          folder: 'social'
        },
        {
          href: '/topic/plate.htm',
          title: '冒险者铭牌',
          belongsTo: 'social',
          indent: 1
        },
        {
          href: '/topic/craft.htm',
          title: '能工巧匠（制作）',
          folder: 'craft'
        },
        {
          href: '/topic/craft.htm',
          title: '概览',
          belongsTo: 'craft',
          indent: 1
        },
/*         {
          href: '/topic/craft-action.htm',
          title: '技能介绍',
          belongsTo: 'craft',
          indent: 1
        }, */
        {
          href: '/topic/craft-levelup.htm',
          title: '练级指南',
          belongsTo: 'craft',
          indent: 1
        },
        {
          href: '/topic/gather.htm',
          title: '大地使者（采集）',
          folder: 'gather'
        },
        {
          href: '/topic/gather.htm',
          title: '概览',
          belongsTo: 'gather',
          indent: 1
        },
        {
          href: '/topic/gather-levelup.htm',
          title: '练级指南',
          belongsTo: 'gather',
          indent: 1
        },
        {
          href: '/topic/fisher.htm',
          title: '钓鱼指南',
          belongsTo: 'gather',
          indent: 1
        },
        {
          href: '/topic/ocean-fishing.htm',
          title: '海钓手册',
          belongsTo: 'gather',
          indent: 1
        },
        {
          href: '/advanced/retainer.htm',
          title: '雇员系统'
        },
        {
          href: '/advanced/grandCompany.htm',
          title: '大国防联军'
        },
        {
          href: '/advanced/fate.htm',
          title: '临危受命（FATE）'
        }
      ]
    }, /* 这部分不要了，暂存备考
    {
      title: '界面指南',
      children: [
        { title: '基础指南', href: '/ui/how.htm' },
        { title: '掌握UI', href: '/ui/know.htm' },
        { title: '常见问题', href: '/ui/faq.htm' },
        { title: '装备和道具', href: '/ui/equipment.htm' },
        { title: '买入卖出', href: '/ui/item.htm' },
        { title: '玩家交流', href: '/ui/communication.htm' },
        { title: '神典石', href: '/ui/currency.htm' },
        { title: '战斗界面', href: '/ui/battle.htm' }
      ]
    }, */
    {
      title: '其他',
      children: [
        {
          href: '/topic/other.htm',
          title: '周边衍生'
        },
        {
          href: '/basic/international.htm',
          title: '国际服专题'
        }
      ]
    },
    {
      title: '职业专题',
      children: [
        { title: '职业介绍', href: '/job/' },
        {
          title: '骑士（剑术师）',
          href: '/job/paladin.htm',
          img: '/images/jobs/paladin.png'
        },
        {
          title: '战士（斧术师）',
          href: '/job/warrior.htm',
          img: '/images/jobs/warrior.png'
        },
        {
          title: '暗黑骑士',
          href: '/job/darkknight.htm',
          img: '/images/jobs/darkknight.png'
        },
        {
          title: '绝枪战士',
          href: '/job/gunbreaker.htm',
          img: '/images/jobs/gunbreaker.png'
        },
        {
          title: '武僧（格斗家）',
          href: '/job/monk.htm',
          img: '/images/jobs/monk.png'
        },
        {
          title: '龙骑士（枪术师）',
          href: '/job/dragoon.htm',
          img: '/images/jobs/dragoon.png'
        },
        {
          title: '忍者（双剑师）',
          href: '/job/ninja.htm',
          img: '/images/jobs/ninja.png'
        },
        {
          title: '武士',
          href: '/job/samurai.htm',
          img: '/images/jobs/samurai.png'
        },
        {
          title: '钐镰客',
          href: '/job/reaper.htm',
          img: '/images/jobs/reaper.png'
        },
        {
          title: '吟游诗人（弓箭手）',
          href: '/job/bard.htm',
          img: '/images/jobs/bard.png'
        },
        {
          title: '机工士',
          href: '/job/machinist.htm',
          img: '/images/jobs/machinist.png'
        },
        {
          title: '舞者',
          href: '/job/dancer.htm',
          img: '/images/jobs/dancer.png'
        },
        {
          title: '黑魔法师（咒术师）',
          href: '/job/blackmage.htm',
          img: '/images/jobs/blackmage.png'
        },
        {
          title: '召唤师（秘术师）',
          href: '/job/summoner.htm',
          img: '/images/jobs/summoner.png'
        },
        {
          title: '赤魔法师',
          href: '/job/redmage.htm',
          img: '/images/jobs/redmage.png'
        },
        {
          title: '青魔法师',
          href: '/job/bluemage.htm',
          img: '/images/jobs/bluemage.png'
        },
        {
          title: '白魔法师（幻术师）',
          href: '/job/vvhit3mage.htm',
          img: '/images/jobs/vvhit3mage.png'
        },
        {
          title: '学者（秘术师）',
          href: '/job/scholar.htm',
          img: '/images/jobs/scholar.png'
        },
        {
          title: '占星术士',
          href: '/job/astrologian.htm',
          img: '/images/jobs/astrologian.png'
        },
        {
          title: '贤者',
          href: '/job/sage.htm',
          img: '/images/jobs/sage.png'
        }
      ]
    },
    {
      title: '常用网站',
      externalChildren: [
        { title: '最终幻想14国服官网', href: 'http://ff.sdo.com' },
        { title: 'NGA最终幻想14版', href: 'https://bbs.nga.cn/thread.php?fid=-362960' },
        { title: '素素攻略站', href: 'https://www.ffxiv.cn/' },
        { title: '最终幻想XIV中文维基', href: 'https://ff14.huijiwiki.com' },
        { title: '加兰德数据库(中文版)', href: 'https://garlandtools.cn/db/' }
      ]
    }
  ]
}
