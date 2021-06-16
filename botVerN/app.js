const express = require('express')
const axios = require('axios');
const app = express()
app.use(express.json())

/*
 *Generate 4 digit Code for autho
 */

app.post('/sign', function(req, res) {
    try {
        // let urlString = 'https://api.telegram.org/bot/sendMessage?chat_id=CHAT_ID&parse_mode=html&text=MESSAGE'
        const phone = JSON.stringify(req.body)
        console.log(phone);
        var val = Math.floor(1000 + Math.random() * 9000);
        console.log(val);

        axios.get(`https://api.telegram.org/bot1825319402:AAF1TuHoA061HC15sIS7x6MDQ8UjhvH-R7I/sendMessage?chat_id=@verNumberAssalam&parse_mode=html&text=${phone}|code:${val}`)
        res.status(200).json({
            status: 'success',

        })
    } catch (err) {
        console.log(err);
    }
})


const port = 3000
app.listen(port, () => {
    console.log('__AppRuning');
})