let count = 0
function delay() {
    let t = Math.floor(Math.random() * 10)
    const promise = new Promise((res, rej) => {
        if (t % 2 == 0) {
            res("successful")
        } else {
            rej("unsuccessful")
        }
    })

    promise.then((result) => {
        console.log(result,t)
    }).catch((error) => {
        console.log(error,t)
        count++
        if (count == 3) {
            console.log("attempt kahtm")
        }else{
            setTimeout(delay, count*3000)
        }
    })
}
delay()