const Days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

function Time(){

    let newdate = new Date();

    const date = newdate.getDate()
    const month = newdate.getMonth()+1
    const year = newdate.getFullYear()
    const day = Days[newdate.getDay()]

    document.querySelector('.date').innerHTML = `${date}-${month}-${year}/${day}`;

    const hour = `${newdate.getHours() - 12 < 10 ? '0' : ''}${newdate.getHours()-12}`
    const minute = `${newdate.getMinutes() < 10 ? '0' : ''}${newdate.getMinutes()}`
    const second = `${newdate.getSeconds() < 10 ? '0' : ''}${newdate.getSeconds()}`
    const mlsecond = `${Math.floor(newdate.getMilliseconds()/10) < 10 ? '0' : ''}${Math.floor(newdate.getMilliseconds()/10)}`

    document.querySelector('.time').innerHTML = `${hour}:${minute}:${second}:${mlsecond}`
}

setInterval(()=>{
    Time()
},10)
