var main = function () {
    var into = function () {
        btnSel();
        coverShow();
        changTab();
        echartStar();
        navFixed();
        topBall();
        echartResprosiv();
    };
    var btnSel = function () {
        $('.js-btn-my').click(function () {
            $('a[href="#about-me"]').parent('li').addClass('active');
            $('a[href="#about-me"]').parent('li').siblings('li').removeClass('active');
        });
        $('.js-btn-work').click(function () {
            $('a[href="#Portfolio"]').parent('li').addClass('active');
            $('a[href="#Portfolio"]').parent('li').siblings('li').removeClass('active');
        });
    };
    var coverShow = function () {
        $('.js-Portfolio-img').mouseenter(function () {
            var idData = $(this).attr('dataId');
            var html = template(idData, null);
            $(this).parent('.js-Portfolio-a').append(html);
            $(this).addClass('on');
        });
        $('.js-Portfolio-a').mouseleave(function () {
            $(this).find('.js-Portfolio-img').removeClass('on');
            $(this).find('.js-cover').remove();
        });
    };
    var changTab = function () {
        $('.js-nav-li').click(function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            $('#navbar').removeClass('in');
            
        });
    };
    
    var echartsIntances = [];
    var echartResprosiv=function () {
        $(window).resize(function(){
            echartsIntances.forEach(function (value) {
                value.resize();
            })
        });
    };
    
    var echartSuccess = function (id, num, text, title) {
        var myChart = echarts.init(document.getElementById(id));
        echartsIntances.push(myChart);
        // 指定图表的配置项和数据
        var option = {
            color: ['#2c3e50', '#efefef'],
            series: [
                {
                    center: ['50%', '50%'],
                    name: '技能',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: num, name: ''},
                        {value: 100 - num}
                    
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        $('#' + id).append("<span class='text-echart'>" + text + "</span><p class='title-echart'>" + title + "</p>");
    };
    var echartStar = function () {
        echartSuccess('technique-item1', 90, "90%", "HTML5");
        echartSuccess('technique-item2', 90, "90%", "CSS3");
        echartSuccess('technique-item3', 85, "85%", "JQ");
        echartSuccess('technique-item4', 80, "80%", "JS");
    };
    var navFixed = function () {
        $(window).scroll(function () {
            var $scroll_height = $(this).scrollTop();
            var h = $(".home-page").height();
            if ($scroll_height >= h) {
                $(".js-fixed").addClass("navbar-fixed-top");
            } else {
                $(".js-fixed").removeClass("navbar-fixed-top");
            }
        });
        /* $('.js-fixed').singlePageNav({offset:70});*/
        new WOW().init();
    };
    var topBall = function () {
        $(window).scroll(function () {
            var ht = $('.home-page').height() ;
            if ($(window).scrollTop() >= ht) {
                $('.top-fixed').css('display', 'block');
            } else {
                $('.top-fixed').css('display', 'none');
            }
        });
    };
    
    return {
        into: into
    }
}();

