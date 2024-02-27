import * as SQLite from 'expo-sqlite'

const database = SQLite.openDatabase('trivia_app.db')

export function init(){
    createDB()
}

function createDB(){
    new Promise((resolve, reject)=>{
        database.transaction( (tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY NOT NULL,
            email TEXT,
            password TEXT,
            token TEXT
        )`,
                [],
                ()=>{ resolve() },
                (_,error)=>{ reject(error)})
        });
        getUser().then((user) => {
            if(user===undefined){
                database.transaction((tx)=>{
                    tx.executeSql(`INSERT INTO user ( id, email, password, token) VALUES (1, "", "", "")`,
                        [],
                        (_,result)=>{
                            resolve(result)
                        },
                        (_,error)=>{  reject(error)})
                })
            }
        })


    });
}



export function getUser(){
    return new Promise((resolve, reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`SELECT * FROM user`,
                [],
                (_,result)=>{
                    resolve(result.rows._array[0])
                },
                (_,error)=>{
                    reject(error)
                }
            )
        })
    })

}

export function saveUser(email, password, token){
    return new Promise((resolve, reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`UPDATE user SET email = ?, password = ?, token = ? WHERE id = 1`,
                [email, password, token],
                (_,result)=>{
                    resolve(result.rows._array[0])
                },
                (_,error)=>{
                    reject(error)
                }
            )
        })
    })

}