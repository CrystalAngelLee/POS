$(()=>{
    // 商品选择功能实现
    $(".goodsCheck").click(function () {
        //获取所有的商品
        var products = $(this).closest(".cart").find(".goodsCheck");
        //获取所有被选中的商品
        var productsC = $(this).closest(".cart").find(".goodsCheck:checked");
        var allC = $(".allCheck");//全选
        if(products.length == productsC.length){
            allC.prop("checked",true);
        }else{
            allC.prop("checked",false);
        }

    })
    $(".allCheck").click(function () {
        // console.log()
        if($(this).prop("checked")==true){
            $(this).parents(".order-summary-content").find(".goodsCheck").prop("checked",true);
            $(".allCheck").prop("checked",true);
        }else{
            $(this).parents(".order-summary-content").find(".goodsCheck").prop("checked",false);
            $(".allCheck").prop("checked",false);
        }
    })


})()