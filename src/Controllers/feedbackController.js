import conn from "../Config/conn.js"
import {v4 as uuidv4} from 'uuid'


export const getFeedbacks = (request, response) => {
    const sql = /*sql*/`SELECT * FROM feedbacks `;
        conn.query(sql, (err, data) => {
            if (err) {
                response.status(500).json({ message: "Erro ao dar feedback" })
                return
            }
            const feedbacks = data
            response.status(200).json(feedbacks);
        });
}


  export const feedback = (request, response)=>{

    const { participante_id,evento_id, comentario } = request.body

    
        if (!participante_id) {
            response.status(400).json({ message: "O id do participante é obrigatorio" })
            return
        } 

        if (!evento_id) {
            response.status(400).json({ message: "O  Id do evento é obrigatorio" })
            return
        } 
        if (!comentario) {
            response.status(400).json({ message: "O comentarios é obrigatorio" })
            return
        }



    const checkSql = /*sql*/ `SELECT * FROM feedbacks WHERE ?? = ? AND ?? = ? AND ?? = ? `
    const checkSqlData = ["participante_id", participante_id, "evento_id",evento_id,"comentario", comentario]
    conn.query(checkSql, checkSqlData, (err, data) => {
        if (err) {
            console.error(err)
            response.status(500).json({ message: "Erro Criar feedback" })
            return console.log(err);
        }
        if (data.length > 0) {
            response.status(409).json({ message: "esse feedback já foi feito" });
            return console.log(err);
        }
        
        const id = uuidv4()
        const insertSql = /*sql*/ `INSERT INTO feedbacks
        (??, ??, ??,??) VALUES (?,?,?,?)`

        const insertData = [ "feedbacks_id","participante_id", "evento_id", "comentario", id,participante_id, evento_id,  comentario]
        conn.query(insertSql, insertData, (err) => {
            if (err) {
                console.error(err)
                response.status(500).json({ message: "Erro ao criar feedback" });
                return
            }
            response.status(201).json({ message: "Feedback feito com sucesso"})
            
        })

    
    });
}
