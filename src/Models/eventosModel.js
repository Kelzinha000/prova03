
import conn from "../Config/conn.js";

const tableEventos = /*sql*/`
CREATE TABLE IF NOT EXISTS eventos(
evento_id VARCHAR(60) PRIMARY KEY, 
titulo VARCHAR (255)NOT NULL,
data_evento DATE NOT NULL,
palestrantes_id VARCHAR(60),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);
`

conn.query(tableEventos, (err)=>{
   if(err){
    console.log('erro ao criar tabela'+err.stack)
   }
   console.log('Tabela EVENTOS criada com sucesso!')
})