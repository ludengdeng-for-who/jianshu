import axios from "axios";
import * as types from "./actiontypes"

export const getDetail = () => {
  return async (dispatch) => {
    const { data:{data} } = await axios.get("/api/detail.json");
    data.content = `
    <img src='https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2956999.jpg?max_age=2592000' alt=''/>
    <p>
      我叫于倩，今年29岁。明天是八月二十四，我的未来婆婆找算命先生帮我们算好的黄道吉日，明天我就要结婚了，嫁给一个自己不喜欢的男人！
    </p>
    <p>
      1991年出生的我，今年已经29岁了，父母的催婚已如家常便饭。我常常想，读书的时候不准恋爱，工作了又常常忙的饭都吃不上，相识的异性不是已婚就是有女朋友了，结婚难道是国家派发对象吗？嘴上叫嚣着，心里却明白，29不只是一个数字，它不仅代表着大龄剩女，也代表着身体的衰老，皱纹的渐多，可能保养品也要吃起来了。所以内心越发的不能平静，渐渐不知道应该如何抉择。既然不知道那就按照生活本身的轨迹走，相亲、结婚、养育小孩，最后走向死亡。想想，人生还真是无趣的很！
    </p>
    <p>
      我的相亲对象，不高，不帅，不体面。170cm的身高，嗯，离我心目中的理想身高差了一些；长相正常，偏黑了一些，不太帅；健身教练，可能常常锻炼，看起来比较结实。好像一切都还算不错，至少身体健康、四肢健全！
    </p>
    <p>
      我望着衣柜里面的婚纱，款式简洁，素白如雪，不难看，但不是我心目中恋恋不忘的款式。内心没有结婚的喜悦感，好像有一种淡淡的悲哀，是失望吗？还是绝望？
    </p>
    <p>
      想起与他的第一次见面，他在自己表姐的陪同下拎了烟酒到我家中，举止不算拘束。我带着满脸的笑容热情接待，内心却平静如水，我，不心动。吃过饭，他带着我去了中百，我们买了一些小零食，简单交谈了一些就分开了。我想，他应该也是同样的想法，婚姻不过是搭伙过日子对方是谁并不重要，只要不太反感结婚也没什么大不了，不然他也不会每次都给我买相同的零食，不问口味，亦不问是否喜欢。
    </p>
    <p>
      年轻的时候太过苛刻，对生活对自己。不容自己受半点委屈，常常针锋相对，言语激烈。也想着将来的老公有点点高、有点点帅、事业也是有点小小的成就，温柔一点、体贴一点、幽默一点。不贪心的话，至少对自己好一点，工作稳定一点，收入足够支撑我们未来的小家庭，偶尔浪漫一下。嗯，光是想想就会觉得幸福！
    </p>
    <p>
      现在，越来越不爱微信，不爱看朋友圈，因为怕会羡慕，让自己平静的内心掀起无用的波澜。可能是生活教我成长变得麻木与冷漠，爱情于我不过是奢侈品，在这种快速衰老的年纪结婚才是生活应该有的样子。纵然不是心目中的白马王子，却也等不到白马王子的到来。
    </p>`
    dispatch(setDetail(data));
  };
};
const setDetail = (data)=>{
    return {
        type:types.GETDETAIL,
        payload:{
            data
        }
    }
}