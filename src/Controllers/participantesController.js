import conn from "../Config/conn.js";
import { v4 as uuidv4 } from 'uuid'

export const participantes =(request,response)=>{
    const sql = /*sql*/`SELECT * FROM  participantes `;
    conn.query(sql, (err, data) => {
        if (err) {
            response.status(500).json({ message: "Erro ao buscar  participantes" })
            return
        }
        const  participantes = data
        response.status(200).json( participantes);
    });
}

export const criarParticipantes = (request, response) => {
    const { nome, email} = request.body

    if (!nome) {
        response.status(400).json({ message: "O nome é obrigatorio" })
        return
    } if (!email) {
        response.status(400).json({ message: "O email é obrigatorio" })
        return
    }
    const checkSql = /*sql*/ `SELECT * FROM participantes WHERE ?? = ? AND ?? = ?`
    const checkSqlData = ["nome", nome, "email",email]
    conn.query(checkSql, checkSqlData, (err, data) => {
        if (err) {
            response.status(500).json({ message: "Erro ao cadastrar participante" })
            return console.log(err);
        }
        if (data.length > 0) {
            response.status(409).json({ message: "participante já cadastrado" });
            return console.log(err);
        }

        const id = uuidv4()
        const insertSql = /*sql*/ `INSERT INTO participantes
    (??, ??, ??) VALUES (?,?,?)`

        const insertData = ["participante_id", "nome", "email", id, nome, email]
        conn.query(insertSql, insertData, (err) => {
            if (err) {
                console.error(err)
                response.status(500).json({ message: "Erro ao cadastrar participantes" });
                return
            }
            response.status(201).json({ message: "participantes cadastrado"})
            
        })

       
    });
}