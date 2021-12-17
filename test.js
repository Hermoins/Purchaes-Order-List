const express=require('express')
const app = express()
//访问静态资源文件
//中间件
app.use(express.static('dist/Purchase-Order-Poc'))

//也可以这样 上下两种方式选一个 
// app.use('/static',express('dist/Purchase-Order-Poc'))
//注意此时静态文件不是根路径了，打开会报错
//转到 index.html 看到<base href="/">标签
//改成 <base href="./">就可以了

//监听端口

app.listen(3000,function(){
	console.log("listen port 3000 success")
})
