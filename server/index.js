const express = require('express')
const server = express()
const Mock = require('mockjs')

server.get('/api/home/banner', function (req, res) {
  const data = Mock.mock({
    code:0,
    message:"ok",
    "data|5":[{
        "id|+1":1,
        bgColor:"@color", 
        imgPath: '@image(320x180, @bgColor,@id)'
    }]
})
  res.json(data)
})
server.get('/api/menu/list', function (req, res) {
  const  teaData = {
    code:1,
    message:"ok",
    data:require ("./data/tea.json")
  }
  res.json(teaData)
})


server.listen(9000,'localhost', (error)=>{
  error || console.log('启动成功')})