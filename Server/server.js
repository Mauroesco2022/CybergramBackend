const express = require ('express')
require('dotenv').config()
const {dbConnection} = require('../database/config')
const http = require('http');
const {Server}  = require('socket.io');
const cors = require('cors')

const app = express();
const server =  http.createServer();
const io = new Server(server, {
    cors: {origin: '*'}
}); 

//Funcionalidad de sockets para chat
io.on('connection', (socket) => {
    console.log('conectado')
    socket.broadcast.emit('chat_message', {
        usuario: 'INFO',
        mensaje: 'Se ha conectado un nuevo usuario'
    });
    socket.on('chat_message', (data) => {
        io.emit('chat_message' , data)
    });
});

//Se abre en un server distinto porque en el mismo que el de app. No funciona, manda error 404
server.listen(3500)
app.listen(process.env.PORT, ()  =>{
    console.log('servidor corriendo en puerto', process.env.PORT)
})

class servidor {
    constructor(){
        this.PORT = process.env.PORT || 4001;
        this.app = express();
        this.server = require('http').createServer(this.app);
        this.io   = require('socket.io')(this.server)
        
        

        this.paths = {
            user :'/api/user', 
            publicacion:'/api/publicacion',
            comentario:'/api/comentario'
        }

        this.connectionToDB();
        this.addMiddlewares();
        this.SetRoutes();
    }
    
    async connectionToDB(){
        await dbConnection();
    }

    addMiddlewares(){
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    SetRoutes(){
        this.app.use(this.paths.user, require('../routes/user'))
        this.app.use(this.paths.publicacion, require('../routes/publicacion'))
        this.app.use(this.paths.comentario, require('../routes/comentario'))

    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('servidor corriendo en puerto', process.env.PORT)
        })
    }
}

module.exports = servidor;















