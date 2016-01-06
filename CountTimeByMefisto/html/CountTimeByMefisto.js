/**
 * Created by mefisto on 2016/1/6.
 * writer:0.0.1
 * description:1.how to use it?
 *                  $("#countTime").CountTimeByMefisto({ //填入绑定div
 *                    endtime:("11/28/2016 17:00:00") //填入截止日期
 *                   });
 *             2.how to change it?
 *             <style>
 *               .timerbg {width: 30px;height: 20px;background-color: black;color: #fff;text-align: center;line-height: 20px;margin-left: 3px;margin-right:3px;display: inline-block;}
 *              </style>
 */

(function ($) {
    $.fn.CountTimeByMefisto = function (options) {

        //创建一些默认值，拓展任何被提供的选项
        var settings = $.extend({
            'endtime': 'endtime'
        }, options);

        return this.each(function () {
            var endtime=new Date(settings.endtime);
        function countdown() {
            //endtime = new Date("11/28/2016 17:00:00");//结束时间
            today = new Date();//当前时间
            delta_T = endtime.getTime() - today.getTime();//时间间隔
            window.setTimeout(countdown, 1000);
            total_days = delta_T / (24 * 60 * 60 * 1000);//总天数
            total_show = Math.floor(total_days);//实际显示的天数
            total_hours = (total_days - total_show) * 24;//剩余小时
            hours_show = Math.floor(total_hours);//实际显示的小时数
            total_minutes = (total_hours - hours_show) * 60;//剩余的分钟数
            minutes_show = Math.floor(total_minutes);//实际显示的分钟数
            total_seconds = (total_minutes - minutes_show) * 60;//剩余的分钟数
            seconds_show = Math.floor(total_seconds);//实际显示的秒数
            countTime.innerHTML = "<span class='timerbg'>"+total_show+"</span>"+"天"+"<span class='timerbg'>"+hours_show+"</span>"+"时"+"<span class='timerbg'>"+minutes_show+"</span>"+"分"+ "<span class='timerbg'>"+seconds_show+"</span>"+"秒";;

        }

        countdown();



        });
    };
})(jQuery);

