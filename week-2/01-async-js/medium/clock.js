let count=0;

function counter(){

    const now=new Date();

    let hours=now.getHours();

    let minutes=now.getMinutes();

    let seconds=now.getSeconds();

    const formattedTime = `${_.padStart(hours.toString(), 2, '0')}:${_.padStart(minutes.toString(), 2, '0')}:${_.padStart(seconds.toString(), 2, '0')}`;

    // console.log(hours+":"+minutes+":"+seconds);

    console.log(formattedTime)
}

setInterval(counter,1000);