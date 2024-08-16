import conn from "../Config/conn.js";

const tableFeedbacks = /*sql*/`
CREATE TABLE IF NOT EXISTS feedbacks(
feedbacks_id VARCHAR(60) PRIMARY KEY, 
comentario VARCHAR(255)NOT NULL, 
evento_id VARCHAR(60),
participante_id VARCHAR(60),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (participante_id) REFERENCES participantes( participante_id),
FOREIGN KEY (evento_id) REFERENCES eventos(evento_id)
);
`

conn.query(tableFeedbacks, (err)=>{
   if(err){
    console.log('erro ao criar tabela'+err.stack)
   }
   console.log('Tabela FEEDBACKS criada com sucesso!')
})