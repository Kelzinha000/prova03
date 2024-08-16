    import conn from '../Config/conn.js'
    import {v4 as uuidv4} from 'uuid'

    export const eventos = (request, response) => {
        const sql = /*sql*/`SELECT * FROM eventos `;
            conn.query(sql, (err, data) => {
                if (err) {
                    response.status(500).json({ message: "Erro ao buscar evento" })
                    return
                }
                const eventos = data
                response.status(200).json(eventos);
            });
    }


    export const criarEventos = (request, response) => {
        const { titulo, data_evento} = request.body
        

        if (!titulo) {
            response.status(400).json({ message: "O titulo é obrigatorio" })
            return
        } if (!data_evento) {
            response.status(400).json({ message: "O data é obrigatorio" })
            return
        } 
        const checkSql = /*sql*/ `SELECT * FROM eventos WHERE ?? = ? AND ?? = ?`
        const checkSqlData = ["titulo", titulo, "data_evento", data_evento]
        conn.query(checkSql, checkSqlData, (err, data) => {
            if (err) {
                console.error(err)
                response.status(500).json({ message: "Erro Criar Evento" })
                return console.log(err);
            }
            if (data.length > 0) {
                response.status(409).json({ message: "Evento já cadastrado" });
                return console.log(err);
            }
            
            const id = uuidv4()
            const insertSql = /*sql*/ `INSERT INTO eventos
            (??, ??, ??) VALUES (?,?,?)`

            const insertData = ["evento_id", "titulo", "data_evento", id, titulo, data_evento]
            conn.query(insertSql, insertData, (err) => {
                if (err) {
                    console.error(err)
                    response.status(500).json({ message: "Erro ao cadastrar eventos" });
                    return
                }
                response.status(201).json({ message: "Evento cadastrado"})
                
            })

        
        });
    }

    export const editEvento = (request, response) => {
        const {evento_id} = request.params
        const {titulo, data_evento} = request.params

            if (!titulo) {
                return response.status(400).json({ message: "O Titulo é obrigatório" })
            }
            if (!data_evento) {
                return response.status(400).json({ message: "O data é obrigatório" })
            }
        
        const checkSql = /*sql*/ `SELECT * FROM  eventos WHERE ?? = ?`
        const checkData = ["evento_id", evento_id]
            conn.query(checkSql, checkData, (err, data) => {
                if (err) {
                response.status(500).json({ err: "Erro ao buscar Evento" })
                return
                }
                if (data.length === 0) {
                response.status(404).json({ err: "Evento não encontrado" })
                }


        const checkTituloSql = /*sql*/ `SELECT* FROM eventos WHERE ?? = ? AND ?? != ?`
        const checkTituloData = ["titulo", titulo, "evento_id", evento_id]
            conn.query(checkTituloSql, checkTituloData, (err, data) => {
                if (err) {
                response.status(500).son({ err: "Err0 ap buscar titulo" })
                return
                }

                if (data.length > 0) {
                response.status(409).json({ err: "Titulo do Evento já estar em uso" })
                return
                }

        const updateSql = /*sql*/ `UPDATE eventos SET titulo = "${titulo}", data_evento ="${data_evento}"
        WHERE evento_id = "${evento_id}"`
            conn.query(updateSql, (err)=>{
            if(err){
                console.error(err)
                response.status(500).json({message:"Erro ao atualizar EVENTO"})
            }
            response.status(200).json({message:"Evento atualizado"})
                })
        })
        
    }
)}

        export const deleteEvetos =(request, response)=>{

                const {id} = request.params
            
                const deleteSql = /*sql*/ `DELETE FROM eventos WHERE id = "${id}" `
                conn.query(deleteSql, (err, info)=>{
                    if(err){
                        console.error(err)
                        return response.status(500).json({message:"Erro ao deletar"})
                    }
                    if(info.affectedRows === 0 ){
                  return response.status(404).json({message:"evento não encontrado"})
            
                    }
                  response.status(200).json({messagem: "Deletado com sucesso"})
                })
             
        }

