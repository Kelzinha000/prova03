import conn from "../Config/conn.js"

export const inscreverParticipantes = (request, response) => {
   const {nome} = request.params
   if (!nome) {
    response.status(400).json({ message: "O nome é obrigatorio" })
    return
}
    const checkSql = /*sql*/ `SELECT * FROM inscreverParticipantes WHERE ?? = ? `
    const checkSqlData = ["nome", nome]
    conn.query(checkSql, checkSqlData, (err,data)=>{
        if (err) {
            response.status(500).json({ message: "Erro ao inscrever" })
            return console.log(err);
        }
        if (data.length > 0) {
            response.status(409).json({ message: "Já foi inscrito" });
            return console.log(err);
        }

    })
    const id = uuidv4()
        const insertSql = /*sql*/ `INSERT INTO inscreverParticipantes
    (??, ??) VALUES (?,?)`

        const insertData = [ "inscricao_id",  "nome", id ,nome]
        conn.query(insertSql, insertData, (err) => {
            if (err) {
                console.error(err)
                response.status(500).json({ message: "Erro ao increver" });
                return
            }
            response.status(201).json({ message: "incrição feita com sucesso!"})
            
            
        })

       
    ;
}
