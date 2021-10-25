setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    
    document.getElementById('hr').innerHTML = "<h3>Current Time: </h3> "+ htime + " Hrs " + mtime+" Min "+ stime+" Sec";


    hrotation = (30*htime) + (mtime/2);
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
d = new Date();
date = d.getDate();
month = d.getMonth();
year = d.getYear();


        


