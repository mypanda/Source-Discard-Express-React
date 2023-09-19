const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const socketServer = require('./socketServer')
const authRoutes = require('./routes/authRoutes')
const friendInvitationRoutes = require('./routes/friendInvitationRoutes')

const PORT = process.env.PORT || process.env.API_PORT

const app = express()
app.use(express.json())
app.use(cors())


// register the router
app.use('/api/auth', authRoutes)
app.use('/api/friend-invitation', friendInvitationRoutes)

const server = http.createServer(app)
socketServer.registerSockerServer(server)

mongoose.set('strictQuery', false) // 关闭警告
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
  })
})
.catch(err => {
  console.log('databse connection faild, Server not startrd')
  console.error(err)
})