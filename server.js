const express = require('express');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

const app = express();

// app.use(cookieSession({
//     keys:['key1','key2'],
//     name: 'test',
//     maxAge: 20*24*3600*1000
// }));

app.use(cookieParser());

// app.get('/',(req, res)=>{
//     console.log(req.sessionOptions);
//     req.session.views = (req.session.views || 0)+1;
//     req.session.times = (req.session.times || 0)+1;
//     res.send(req.session.views + 'views');
// });
app.get('/aaa',(req, res)=>{
    res.send(req.cookies);
});
app.get('/',(req, res)=>{
    res.cookie('test', 'wangyafei', {
        path: '/aaa',
        maxAge: 20*24*3600*1000
    });
    res.send('ok');
});

app.listen(4000);