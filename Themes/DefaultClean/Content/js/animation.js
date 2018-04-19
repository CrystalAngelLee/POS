(()=>{
    // 商品详情页
    $(".picture-thumbs").mouseover(e=>{
        var tar = e.target;
        if(tar.nodeName=="IMG"){
            $("#mImg").attr("src",tar.dataset.md);
        }
    })
    // 数量增减
    console.log($(".quantity>input").val());
    var count=$(".quantity>input").val();
    $("#plus").click(function () {
        count++;
        $(".quantity>input").val(count);
    });
    $("#sub").click(function () {
        if(count != 0) count--;
        $(".quantity>input").val(count);
    })

})()