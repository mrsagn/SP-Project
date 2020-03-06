// Veriye ulaşmak için gerekli fonksiyon;
// CORS'u atlatmak için herokuapp üzerinden istek atıyorum
// function getFunc()
// {
//     var startDate = document.getElementById('startDate').value
//     var endDate = document.getElementById('endDate').value
//     const URL = 'https://cors-anywhere.herokuapp.com/https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate='+endDate+'&startDate='+startDate+''
//     fetch(URL, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json'}})
//     .then(response => response.text())
//     .then(str => {(new window.DOMParser()).parseFromString(str, "text/xml"); console.log(str)})
//     .then(data => {readFile(data)===>> LOCALdekini okuduğum için böyle bıraktım. 
//                                          Normalde şartlarda burası çalışmayacak})
// }


// Localdeki data.json dosyasından okuma yapmak için gerekli fonksiyon;
// Burada localdeki JSON verilerini tablo oluşturup gösteriyor fakat istediğiniz şekilde değil.
// Bütün contractlar ve bunları price ve quantity'si. 
function readFile(file, callback) {
    var myJSON= new XMLHttpRequest();
    myJSON.overrideMimeType("application/json");
    myJSON.open("GET", file, true);
    myJSON.onreadystatechange = function() {
        if (myJSON.readyState === 4 && myJSON.status == "200") {
            callback(myJSON.responseText);
        }
    }
    myJSON.send(null);
}
readFile("/data.json", function(text){
    var data = JSON.parse(text);
    document.write("<table>");
    document.write("<tr><td>Contract</td>");
    document.write("<td>Price</td>");
    document.write("<td>Quantity</td></tr>");
    for(i=0; i<data.body.intraDayTradeHistoryList.length; i++){
        document.write("<tr><td>"+data.body.intraDayTradeHistoryList[i].conract+"</td>");
        document.write("<td>"+data.body.intraDayTradeHistoryList[i].price+"</td>");
        document.write("<td>"+data.body.intraDayTradeHistoryList[i].quantity+"</td></tr>");
    }
    document.write("</table>")
    console.log(data.body.intraDayTradeHistoryList[0].id);
});

// data.body.intraDayTradeHistoryList[0].id
// data.body.intraDayTradeHistoryList[0].date
// data.body.intraDayTradeHistoryList[0].contract
// data.body.intraDayTradeHistoryList[0].price
// data.body.intraDayTradeHistoryList[0].quantity

// document.write("<tr><td>"+data.body.intraDayTradeHistoryList[i].contract+"</td>");
// document.write("<td>"+data.body.intraDayTradeHistoryList[i].price+"</td>");
// document.write("<td>"+data.body.intraDayTradeHistoryList[i].quantity+"</td></tr>");
