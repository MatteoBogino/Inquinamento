const labels = [
    'AQI (indice qualità aria)',
    'Livello Biossido di Azoto',
    'Polveri grossolane',
    'Polveri fini',
];
const dataa = {
    labels: labels,
    datasets: [{
        label: 'Elementi inquinanti',
        backgroundColor: 'rgb(7, 92, 7)',
        borderColor: 'rgb(7, 92, 7)',
        data: [],
    }]
};
const config = {
    type: 'bar',
    data: dataa,
    options: {}
};
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
    
    
    //inizio cerca dati cerca
    let standardUrl="https://api.waqi.info/feed/";
    let token="/?token=c98c647030c97e8ad08bfd0e2a72a31024cbbc48";
    document.getElementById("cerca").addEventListener("click", function(){
        let city= document.getElementById("city").value.toLowerCase();
        let url= standardUrl + city + token;
        let httpReq = new XMLHttpRequest(); 
        httpReq.onload = function (res) {
            let response = res.target.response;
            let data = JSON.parse(response);
            document.getElementById('data-search-time').innerHTML = data.data.time.s;
            document.getElementById('data-search-aqi').innerHTML = data.data.aqi;
            document.getElementById('data-search-iaqi').innerHTML = data.data.iaqi.no2.v;
            document.getElementById('data-search-p').innerHTML = data.data.iaqi.p.v;
            document.getElementById('data-search-h').innerHTML = data.data.iaqi.h.v;
            document.getElementById('data-search-w').innerHTML = data.data.iaqi.w.v;
            document.getElementById('data-search-t').innerHTML = data.data.iaqi.t.v;
            document.getElementById('data-search-pm10').innerHTML = data.data.iaqi.pm10.v;
            document.getElementById('data-search-pm25').innerHTML = data.data.iaqi.pm25.v ;
        };
        httpReq.open("GET",url,true);
        httpReq.send();
    });
    //fine cerca dati cerca

    function value(dati){
        if (!dati.iaqi.time.s){
            dati.iaqi.time.s = "/";
        }
        if (!dati.iaqi.aqi){
            dati.iaqi.aqi = "/";
        }
        if (!dati.iaqi.no2.v){
            dati.iaqi.no2.v = "/";
        }
        if (!dati.iaqi.p.v){
            dati.iaqi.p.v = "/";
        }
        if (!dati.iaqi.h.v){
            dati.iaqi.h.v = "/";
        }
        if (!dati.iaqi.w.v){
            dati.iaqi.w.v = "/";
        }
        if (!dati.iaqi.t.v){
            dati.iaqi.t.v = "/";
        }
        if (!dati.iaqi.pm10.v){
            dati.iaqi.pm10.v = "/";
        }
        if (!dati.iaqi.pm25.v){
            dati.iaqi.pm25.v = "/";
        }
        return dati;
    }
    
    document.getElementById("collapsible").addEventListener("click", function(){
        let city= "roma";
        let url= standardUrl + city + token;
        let httpReq = new XMLHttpRequest(); 
        httpReq.onload = function (res) {
            let response = res.target.response;
            let data = JSON.parse(response);
            dataa.datasets.data = data.data.aqi;
            dataa.datasets.data = data.data.iaqi.no2.v;
            document.getElementById('data-roma-time').innerHTML = data.data.time.s;
            document.getElementById('data-roma-aqi').innerHTML = data.data.aqi;
            document.getElementById('data-roma-iaqi').innerHTML = data.data.iaqi.no2.v;
            document.getElementById('data-roma-p').innerHTML = data.data.iaqi.p.v;
            document.getElementById('data-roma-h').innerHTML = data.data.iaqi.h.v;
            document.getElementById('data-roma-w').innerHTML = data.data.iaqi.w.v;
            document.getElementById('data-roma-t').innerHTML = data.data.iaqi.t.v;
            document.getElementById('data-roma-pm10').innerHTML = data.data.iaqi.pm10.v;
            document.getElementById('data-roma-pm25').innerHTML = data.data.iaqi.pm25.v;
        };
        httpReq.open("GET",url,true);
        httpReq.send();
    });
    document.getElementById("collapsible").addEventListener("click", function(){
        let city= "milano";
        let url= standardUrl + city + token;
        let httpReq = new XMLHttpRequest(); 
        httpReq.onload = function (res) {
            let response = res.target.response;
            let data = JSON.parse(response);
            document.getElementById('data-milano-time').innerHTML = data.data.time.s;
            document.getElementById('data-milano-aqi').innerHTML = data.data.aqi;
            document.getElementById('data-milano-iaqi').innerHTML = data.data.iaqi.no2.v;
            document.getElementById('data-milano-p').innerHTML = data.data.iaqi.p.v;
            document.getElementById('data-milano-h').innerHTML = data.data.iaqi.h.v;
            document.getElementById('data-milano-w').innerHTML = data.data.iaqi.w.v;
            document.getElementById('data-milano-t').innerHTML = data.data.iaqi.t.v;
            document.getElementById('data-milano-pm10').innerHTML = data.data.iaqi.pm10.v;
            document.getElementById('data-milano-pm25').innerHTML = data.data.iaqi.pm25.v;
        };
        httpReq.open("GET",url,true);
        httpReq.send();
    });
    document.getElementById("collapsible").addEventListener("click", function(){
        let city= "napoli";
        let url= standardUrl + city + token;
        let httpReq = new XMLHttpRequest(); 
        httpReq.onload = function (res) {
            let response = res.target.response;
            let data = JSON.parse(response);
            document.getElementById('data-napoli-time').innerHTML = data.data.time.s;
            document.getElementById('data-napoli-aqi').innerHTML = data.data.aqi;
            document.getElementById('data-napoli-iaqi').innerHTML = data.data.iaqi.no2.v;
            document.getElementById('data-napoli-p').innerHTML = data.data.iaqi.p.v;
            document.getElementById('data-napoli-h').innerHTML = data.data.iaqi.h.v;
            document.getElementById('data-napoli-w').innerHTML = data.data.iaqi.w.v;
            document.getElementById('data-napoli-t').innerHTML = data.data.iaqi.t.v;
            document.getElementById('data-napoli-pm10').innerHTML = data.data.iaqi.pm10.v;
            document.getElementById('data-napoli-pm25').innerHTML = data.data.iaqi.pm25.v;
        };
        httpReq.open("GET",url,true);
        httpReq.send();
    });
    document.getElementById("collapsible").addEventListener("click", function(){
        let city= "firenze";
        let url= standardUrl + city + token;
        let httpReq = new XMLHttpRequest(); 
        httpReq.onload = function (res) {
            let response = res.target.response;
            let data = JSON.parse(response);
            document.getElementById('data-firenze-time').innerHTML = data.data.time.s;
            document.getElementById('data-firenze-aqi').innerHTML = data.data.aqi;
            document.getElementById('data-firenze-iaqi').innerHTML = data.data.iaqi.no2.v;
            document.getElementById('data-firenze-p').innerHTML = data.data.iaqi.p.v;
            document.getElementById('data-firenze-h').innerHTML = data.data.iaqi.h.v;
            document.getElementById('data-firenze-w').innerHTML = data.data.iaqi.w.v;
            document.getElementById('data-firenze-t').innerHTML = data.data.iaqi.t.v;
            document.getElementById('data-firenze-pm10').innerHTML = data.data.iaqi.pm10.v;
            document.getElementById('data-firenze-pm25').innerHTML = data.data.iaqi.pm25.v;
        };
        httpReq.open("GET",url,true);
        httpReq.send();
    });
    document.getElementById("collapsible").addEventListener("click", function(){
        let city= "pisa";
        let url= standardUrl + city + token;
        let httpReq = new XMLHttpRequest(); 
        httpReq.onload = function (res) {
            let response = res.target.response;
            let data = JSON.parse(response);
            document.getElementById('data-pisa-time').innerHTML = data.data.time.s;
            document.getElementById('data-pisa-aqi').innerHTML = data.data.aqi;
            document.getElementById('data-pisa-iaqi').innerHTML = data.data.iaqi.no2.v;
            document.getElementById('data-pisa-p').innerHTML = data.data.iaqi.p.v;
            document.getElementById('data-pisa-h').innerHTML = data.data.iaqi.h.v;
            document.getElementById('data-pisa-w').innerHTML = data.data.iaqi.w.v;
            document.getElementById('data-pisa-t').innerHTML = data.data.iaqi.t.v;
            document.getElementById('data-pisa-pm10').innerHTML = data.data.iaqi.pm10.v;
            document.getElementById('data-pisa-pm25').innerHTML = data.data.iaqi.pm25.v;
        };
        httpReq.open("GET",url,true);
        httpReq.send();
    });
    document.getElementById("collapsible").addEventListener("click", function(){
        let city= "bologna";
        let url= standardUrl + city + token;
        let httpReq = new XMLHttpRequest(); 
        httpReq.onload = function (res) {
            let response = res.target.response;
            let data = JSON.parse(response);
            document.getElementById('data-bologna-time').innerHTML = data.data.time.s;
            document.getElementById('data-bologna-aqi').innerHTML = data.data.aqi;
            document.getElementById('data-bologna-iaqi').innerHTML = data.data.iaqi.no2.v;
            document.getElementById('data-bologna-p').innerHTML = data.data.iaqi.p.v;
            document.getElementById('data-bologna-h').innerHTML = data.data.iaqi.h.v;
            document.getElementById('data-bologna-w').innerHTML = data.data.iaqi.w.v;
            document.getElementById('data-bologna-t').innerHTML = data.data.iaqi.t.v;
            document.getElementById('data-bologna-pm10').innerHTML = data.data.iaqi.pm10.v;
            document.getElementById('data-bologna-pm25').innerHTML = data.data.iaqi.pm25.v;
        };
        httpReq.open("GET",url,true);
        httpReq.send();
    });

     //inizio apertura pannello cerca
    var coll=document.getElementsByClassName("btn-outline-primary");
    var i=i;
    for (i=0; i<coll.length; i++){
        coll[i].addEventListener("click",function(){
            this.classList.toggle("active");
            var content= this.nextElementSibling;
            if(content.style.display==="block"){
                content.style.display="none";
            } else{
                content.style.display="block";
            }
        });
    }; 
    document.getElementById("findc").addEventListener("click", function(){
    document.getElementById("find").style.display="none";
    document.getElementById("city").value="";
    });
    //chiusura pannello cerca

    //inizio apertura pannelli i
    var coll=document.getElementsByClassName("collapsible");
    var i=i;
    for (i=0; i<coll.length; i++){
        coll[i].addEventListener("click",function(){
            this.classList.toggle("active");
            var content= this.nextElementSibling;
            if(content.style.display==="block"){
                content.style.display="none";
            } else{
                content.style.display="block";
            }
        });
    };   
    document.getElementById("chiusura").addEventListener("click", function(){
    document.getElementById("content").style.display="none";
    });
    document.getElementById("chiusur").addEventListener("click", function(){
    document.getElementById("conten").style.display="none";
    });
    document.getElementById("chiu").addEventListener("click", function(){
    document.getElementById("con").style.display="none";
    });
    document.getElementById("chi").addEventListener("click", function(){
    document.getElementById("co").style.display="none";
    });
    document.getElementById("ch").addEventListener("click", function(){
    document.getElementById("c").style.display="none";
    });
    document.getElementById("chiusuraa").addEventListener("click", function(){
    document.getElementById("contentt").style.display="none";
    });
    //chiusura pannelli i
    
    
    