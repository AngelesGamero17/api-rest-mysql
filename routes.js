const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('select * from empleado', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        
        conn.query('insert into empleados set? ',[req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('se insertado correctamente')
        })
    })
})

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('delect  *from empleados where id = ?',[req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('se eleiminado correctamente')
        })
    })
})


routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('update empleados set? where id = ?',[req.body,req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('se actualizado  correctamente')
        })
    })
})


module.exports = routes