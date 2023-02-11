$(function () {
    // フォトゾーン
    $(".photo-btn").on("click",function () {
        $(".photo").removeClass("off")
    })
    $(".photo-x").on("click",function () {
        $(".photo").toggleClass("off")
    })

    // room詳細ボタン
    $(".detail-btn").on("click",function () {
        $(this).toggleClass("on")
        $(".room-detail").toggleClass("on")
       
    });

    $(".close-btn").on("click",function () {
        $(".room-detail,.detail-btn").removeClass("on")
    })
   
})