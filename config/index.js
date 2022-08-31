export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxc8cfd2cda4a1d56c",

    // 公众号APP_SECRET
    APP_SECRET: "db0e3d8e375e6c9132b7661474939f21",

    // 模板消息id
    TEMPLATE_ID: "NTDWLcIZLD2FelATJdCeFdLLTt5VnkgtWmCujsS0Plw",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "ARr_Fi7CB8AOFJMXxApix0W9gr_9OfIzTBXBcrqc7vc",

    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
 
    USERS: [
      {name: '肥肥', id: "AR13557501058"}, 
    ],
    
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: '',id: "AR13557501058"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "江苏",
    // 所在城市
    CITY: "苏州",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    FESTIVALS: [
      {"type": "生日", "name": "老婆", "year": "1996", "date": "01-01"},
      {"type": "节日", "name": "结婚纪念日", "year": "2020", "date": "01-04"},
      {"type": "生日", "name": "李四", "year": "1996", "date": "08-29"},
      {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "08-29"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    FESTIVALS_LIMIT: 3,

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2015-05-01",
    // 结婚纪念日
    MARRY_DATE: "2020-01-04",


    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

