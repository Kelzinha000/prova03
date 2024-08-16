
import conn from "../Config/conn.js";

const tablePalestrante = /*sql*/`
CREATE TABLE IF NOT EXISTS palestrantes(
palestrantes_id VARCHAR(60) PRIMARY KEY, 
nome VARCHAR (255)NOT NULL, 
area_especializacao VARCHAR(255) NOT NULL
);
`

conn.query(tablePalestrante, (err)=>{
   if(err){
    console.log('erro ao criar tabela'+err.stack)
   }
   console.log('Tabela PALESTRANTES criada com sucesso!')
})