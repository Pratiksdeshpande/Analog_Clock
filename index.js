//Code to get Current Date

Dd = new Date();
Ddate = Dd.getDate();
Dmonth = Dd.getMonth() + 1;
Dyear = Dd.getFullYear();
document.getElementById('Todays_Date').innerHTML = "Today's Date: " + Ddate + "-" + Dmonth + "-" + Dyear;

//Code to get realtime current time
setInterval(() => {
    cd = new Date();
    htime = cd.getHours();
    mtime = cd.getMinutes();
    stime = cd.getSeconds();

    hrotation = (30 * htime) + (mtime / 2);
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);

// var varid ='twentyfour' ;
// console.log(varid);

function switchformat(id) {
    var varid = id;
    console.log(varid);

if (varid == tweleve) {
    setInterval(format12hrs, 1000);

    function format12hrs() {
        T_date = new Date();
        htime = T_date.getHours();
        mtime = T_date.getMinutes();
        stime = T_date.getSeconds();

        var ampm = htime >= 12 ? 'PM' : 'AM';
        htime = htime % 12;
        htime = htime ? htime : 12; // the hour '0' should be '12'
        mtime = mtime < 10 ? '0' + mtime : mtime;
        stime = stime < 10 ? '0' + stime : stime;
        document.getElementById('hr').innerHTML = htime + " Hrs " + mtime + " Min " + stime + " Sec" + " " + ampm;
    };
}
else {
    setInterval(format24hrs, 1000);

    function format24hrs() {
        T_date = new Date();
        htime = T_date.getHours();
        mtime = T_date.getMinutes();
        stime = T_date.getSeconds();
        document.getElementById('hr').innerHTML = htime + " Hrs " + mtime + " Min " + stime + " Sec";
    };

}
};


    // let decide = document.getElementById('switch');






// var temp;
// function decide(){
//     if(temp==1){
//         document.getElementById('timeformatmenu').style.display = "none" ;
//         return temp=0;
//     }
//     else
//     {
//         document.getElementById('timeformatmenu').style.display = "inline" ;
//         return temp=1;
//     }
// };


// function decide(){

//     else
//     {
//         function format12(){

//             setInterval(() => {

//                 var ampm = htime >= 12 ? 'PM' : 'AM';

//                 htime = htime % 12;
//                 htime = htime ? htime : 12; // the hour '0' should be '12'
//                 mtime = mtime < 10 ? '0'+mtime : mtime;
//                 stime = stime < 10 ? '0'+stime : stime;

//                 document.getElementById('hr').innerHTML = htime + " Hrs " + mtime+" Min "+ stime+" Sec";
//             }, 1000);
//         };
//     }
// };





