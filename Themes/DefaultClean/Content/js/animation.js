(()=>{
    //导航栏下拉菜单
    $(function(){
        var p=$(".nav p");
        var ul=$(".new");
        p.click(function(){
            p.css('background-color','#555');

            if(ul.css("display")=="none"){
                ul.slideDown();
            }else{
                p.css('background-color','#292929');
                ul.slideUp();
            }
        });
        // $(".new li").mouseout(function(){
        //     p.css('background','none');
        //     ul.slideUp();
        // });

        $(".set").click(function(){
            var _name = $(this).attr("name");
            if( $("[name="+_name+"]").length > 1 ){
                $("[name="+_name+"]").removeClass("select");
                $(this).addClass("select");
            } else {
                if( $(this).hasClass("select") ){
                    $(this).removeClass("select");
                } else {
                    $(this).addClass("select");
                }
            }
        });

        $(".nav li").click(function(){
            var li=$(this).text();
            $(".nav p").html(li);
            $(".new").hide();
            p.css('background-color','#292929');
            /*$(".set").css({background:'none'});*/
            $("p").removeClass("select") ;
        });
    })
    // 商品详情页
    $(".picture-thumbs").mouseover(e=>{
        var tar = e.target;
        if(tar.nodeName=="IMG"){
            $("#mImg").attr("src",tar.dataset.md);
        }
    })
    // 数量增减
    // console.log($(".quantity>input").val());
    var count=$(".quantity>input").val();
    $("#plus").click(function () {
        count++;
        $(".quantity>input").val(count);
    });
    $("#sub").click(function () {
        if(count > 0) count--;
        $(".quantity>input").val(count);
    })
// 商品列表页
    $('.plus').click(function () {
        var num=$(this).parents(".product_item_num").find("input").val();
        num++;
        $(this).parents(".product_item_num").find("input").val(num)
    })
    $('.sub').click(function () {
        var num=$(this).parents(".product_item_num").find("input").val();
        console.log(num);
        if(num>0) num--;
        $(this).parents(".product_item_num").find("input").val(num)
    })
    // 购物车页面
    $('.cart_plus').click(function () {
        var num=$(this).parents(".quantity").find("input").val();
        num++;
        $(this).parents(".quantity").find("input").val(num)
    })
    $('.cart_sub').click(function () {
        var num=$(this).parents(".quantity").find("input").val();
        console.log(num);
        if(num>0) num--;
        $(this).parents(".quantity").find("input").val(num)
    })
})()