
$(document).ready(function () {
    $("#tripleGrid").click(function () {  
        $(".products").addClass("active");      
    });

    $("#quadGrid").click(function () {  
        $(".products").removeClass("active");      
    });

});

$(document).ready(function () {
    var myArray = [
        { 'id': 1, 'img': 'img/korkmaz-turbo-duduklu-tencere5lt.jpeg', 'productTitle': 'Korkmaz Turbo Düdüklü Tencere 5 lt A155', 'discount': '%32', 'price': '249,90 TL', 'discountPrice': '169,00 TL', 'discountCart': null, 'cartPrice': '', 'fastShiping': '' },
        { 'id': 2, 'img': 'img/korkmaz-turbo-duduklu-tencere7lt.jpeg', 'productTitle': 'Korkmaz Turbo Düdüklü Tencere 7 lt A156', 'discount': '%32', 'price': '285,00 TL', 'discountPrice': '194,90 TL', 'discountCart': '12', 'cartPrice': '171,51 TL', 'fastShiping': 'Süper Hızlı ' },
        { 'id': 3, 'img': 'img/korkmaz-caydanlık.jpeg', 'productTitle': 'Korkmaz Kappa Çaydanlık A078-01', 'discount': '%57', 'price': '299,90 TL', 'discountPrice': '129,00 TL', 'discountCart': null, 'cartPrice': '', 'fastShiping': '' },
        { 'id': 4, 'img': 'img/korkmaz-tencere-seti.jpeg', 'productTitle': 'Korkmaz A1678 Kappa 8 Parça Tencere Takımı', 'discount': '%27', 'price': '750,00 TL', 'discountPrice': '546,53 TL', 'discountCart': '35', 'cartPrice': '355,24 TL', 'fastShiping': '' },
        { 'id': 5, 'img': 'img/korkmaz-turbo-duduklu-tencere5lt.jpeg', 'productTitle': 'Korkmaz Turbo Düdüklü Tencere 5 lt A155', 'discount': '%32', 'price': '249,90 TL', 'discountPrice': '169,00 TL', 'discountCart': null, 'cartPrice': '', 'fastShiping': '' },
        { 'id': 6, 'img': 'img/korkmaz-turbo-duduklu-tencere7lt.jpeg', 'productTitle': 'Korkmaz Turbo Düdüklü Tencere 7 lt A156', 'discount': '%32', 'price': '285,00 TL', 'discountPrice': '194,90 TL', 'discountCart': '12', 'cartPrice': '171,51 TL', 'fastShiping': 'Süper Hızlı ' },
        { 'id': 7, 'img': 'img/korkmaz-caydanlık.jpeg', 'productTitle': 'Korkmaz Kappa Çaydanlık A078-01', 'discount': '%57', 'price': '299,90 TL', 'discountPrice': '129,00 TL', 'discountCart': null, 'cartPrice': '', 'fastShiping': '' },
        { 'id': 8, 'img': 'img/korkmaz-tencere-seti.jpeg', 'productTitle': 'Korkmaz A1678 Kappa 8 Parça Tencere Takımı', 'discount': '%27', 'price': '750,00 TL', 'discountPrice': '546,53 TL', 'discountCart': '35', 'cartPrice': '355,24 TL', 'fastShiping': '' },
        { 'id': 9, 'img': 'img/korkmaz-turbo-duduklu-tencere5lt.jpeg', 'productTitle': 'Korkmaz Turbo Düdüklü Tencere 5 lt A155', 'discount': '%32', 'price': '249,90 TL', 'discountPrice': '169,00 TL', 'discountCart': null, 'cartPrice': '', 'fastShiping': '' },
        { 'id': 10, 'img': 'img/korkmaz-turbo-duduklu-tencere7lt.jpeg', 'productTitle': 'Korkmaz Turbo Düdüklü Tencere 7 lt A156', 'discount': '%32', 'price': '285,00 TL', 'discountPrice': '194,90 TL', 'discountCart': '12', 'cartPrice': '171,51 TL', 'fastShiping': 'Süper Hızlı ' },
        { 'id': 11, 'img': 'img/korkmaz-caydanlık.jpeg', 'productTitle': 'Korkmaz Kappa Çaydanlık A078-01', 'discount': '%57', 'price': '299,90 TL', 'discountPrice': '129,00 TL', 'discountCart': null, 'cartPrice': '', 'fastShiping': '' },
        { 'id': 12, 'img': 'img/korkmaz-tencere-seti.jpeg', 'productTitle': 'Korkmaz A1678 Kappa 8 Parça Tencere Takımı', 'discount': '%27', 'price': '750,00 TL', 'discountPrice': '546,53 TL', 'discountCart': '35', 'cartPrice': '355,24 TL', 'fastShiping': '' },

    ]

    buildTable(myArray)

    function buildTable(data) {
        var table = document.getElementById('myTable')

        for (var i = 0; i < data.length; i++) {

            var row = `<div class="item" id="product_${data[i].id}">
                    <a href="#">
                        <div class="img">
                            <img src="${data[i].img}" alt="">
                        </div>
                        <div class="productInfo">
                            <div class="productTitle">
                                <span>${data[i].productTitle}</span>
                            </div>
                            <div class="discount">
                                <div class="discountRate">
                                    <span>${data[i].discount}</span>
                                </div>

                                <div class="discountPrice">
                                    <del>${data[i].price}</del>
                                    <b>${data[i].discountPrice}</b>
                                </div>
                            </div>

                            <div class="basket ${data[i].discountCart == null?"none":""}">
                                <span>Sepette %<b>${data[i].discountCart}</b> indirimli fiyat</span>
                                <strong>${data[i].cartPrice}</strong>
                            </div>

                            <div class="fastShipping">
                                <b>${data[i].fastShiping}</b>
                            </div>
                        </div>
                    </a>
                    </div >`

            table.innerHTML += row
                                   
        }
    }
});