(()=>{
    //导航栏下拉菜单
    $(function(){
        var p=$(".nav p");
        var ul=$(".new");
        p.mouseenter(function(){
            p.addClass('active');
            ul.slideDown();
        });
        $("#nav").mouseleave(function () {
            p.removeClass('active');
            ul.slideUp();
        });
        // console.log(p.text());
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
        $(this).parents(".quantity").find("input").val(num);
        // 商品单价
        var point = $(this).parents(".quantity").siblings(".unit-price").find("p.product-unit-price span").text();
        // 该商品的总价
        var amount = $(this).parents(".quantity").siblings(".subtotal").find("span.product-subtotal");
        var total = point*num;
        amount.text(total);
        TotalPrice();
    })
    $('.cart_sub').click(function () {
        var num=$(this).parents(".quantity").find("input").val();
        if(num>0) num--;
        $(this).parents(".quantity").find("input").val(num);
        var point = $(this).parents(".quantity").siblings(".unit-price").find("p.product-unit-price span").text();
        var amount = $(this).parents(".quantity").siblings(".subtotal").find("span.product-subtotal");
        var total = point*num;
        amount.text(total);
        TotalPrice()
    })
    function TotalPrice() {
        var totalprice = 0;
        var quantity = 0;
        // $(".shop_product_cart").find(".goodsCheck").each(function () {
        $(".goodsCheck").each(function () {
            //获取该商品的总价
            var p = $(this).parents(".remove-from-cart").siblings(".subtotal").find("span.product-subtotal").text();
            totalprice += parseFloat(p);
            $(".cart_quantity_amount>span").text(parseFloat(totalprice).toFixed(2));
            // 获取该商品的数量
            var n = parseInt($(this).parents(".remove-from-cart").siblings(".quantity").find("input").val());
            quantity += n;
            $(".cart_quantity_total>span").text(quantity);
        })
    }
    //Points页面
    var point =  $("td.points");
    point.each(function(){
        var str=$(this).text();
        if(str.indexOf('+')>-1){
           $(this).addClass("green");
        }
    })
})()