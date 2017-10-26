var PodajDateUrodzenia = (function () {
    function PodajDateUrodzenia() {
    }
    PodajDateUrodzenia.go = function () {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "date");
        x.setAttribute("id", "dataur");
        x.setAttribute("class", "BBB");
        document.body.appendChild(x);
        document.getElementById("dataur").onchange = function () {
            myFunction();
        };
        function myFunction() {
            var birth_date = document.getElementById("dataur").value;
            function addZero(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }
            var date = new Date();
            var cur_y = addZero(date.getFullYear());
            var cur_m = addZero(date.getMonth());
            var cur_d = addZero(date.getDate());
            var cur_date = cur_y + "-" + cur_m + "-" + cur_d;
            console.log("cur_date --> " + cur_date);
            var nn = date.getTime();
            var dni = Math.round(nn / 86400000);
            // var mmm = (Date.parse("05-20-1975"));
            var mmm = (Date.parse(String(birth_date)));
            var mm = Math.round(mmm / 86400000);
            // var mm = (Date.parse(birth_date)/86400000);
            var ilosc_dni = dni - mm;
            document.getElementById("wynik").innerHTML = "Żyjesz już: " + ilosc_dni + " dni!";
        }
    };
    return PodajDateUrodzenia;
}());
