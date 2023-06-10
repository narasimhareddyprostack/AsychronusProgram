let goToMovie = (success, failure) => {
    let amount = 500
    amount > 10000 ? success("Go To Goa") : failure("Go to Movie")

}
goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})