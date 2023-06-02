const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`<h1>Demon Slayer</h1>
    <a href="/home"> Hashiras
    <img src="https://res.cloudinary.com/teepublic/image/private/s--RMUfzTB2--/t_Preview/b_rgb:191919,c_limit,f_auto,h_630,q_90,w_630/v1605833837/production/designs/16292685_0.jpg">`)
})
app.get('/home', (req,res) => {
    res.send(`<h2>The Hashiras</h2>
    <ol>Giyū Tomioka</ol>
    <ol>Shinobu Kochō</ol>
    <ol>Kyojuro Rengoku</ol>
    <ol>Tengen Uzui</ol>
    <ol>Mitsuri Kanroji</ol>
    <ol>Muichirō Tokitō</ol>
    <ol>Gyomei Himejima</ol>
    <ol>Obanai Iguro</ol>
    <ol>Sanemi Shinazugawa</ol>
    <img src="https://i0.wp.com/thenewsfetcher.com/wp-content/uploads/2020/08/Demon-Slayers-Hashira.jpg">
    <a href="/hashiras">Soon to be Hashiras`)

})

app.get('/hashiras', (req,res) => {
    res.send(`<h3>The Boys!</h3>
    <ol>Tanjiro Kamado</ol>
    <ol>Zenitsu Agatsuma</ol>
    <ol>Inosuke Hashibira</ol>
    <img src="https://i.pinimg.com/originals/2d/c6/ff/2dc6ffe93ac8255a6d0d2161c182827d.png">
    <a href="/backpack">Whos in Tanjiros backpack?`)
})

app.get('/backpack', (req,res) => {
    res.send(`<h1>NEZUKO!!!!!!!!</h1>
    <img src ="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/02/nezuko-feature.jpg" class="nezuko">`)
})


app.listen(port, () => {
    console.log(`server running om http://localhost:${port}`)
})