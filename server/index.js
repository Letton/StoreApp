require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const sequelize = require('./db.js')
const router = require('./routes/index')
const ErrorMiddleware = require('./middleware/ErrorMiddleware')
const authMiddleware = require('./middleware/AuthMiddleware')

const PORT = process.env.PORT || 5000

const app = express()

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
app.use(express.json())
app.use(express.static('./uploads'))
app.use(fileUpload({}))
app.use(cookieParser())
app.use('/api', router)
app.use(authMiddleware)
app.use(ErrorMiddleware)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const start = async () => {
    try {
        sequelize.options.logging = (process.env.DB_LOGGING == 'true')
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
        app.get('/', (req, res) => {
            res.status(200).json({message: 'Works!'})
        })
    } catch(e) {
        console.log(e);
    }
}

start()