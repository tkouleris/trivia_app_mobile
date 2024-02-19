import * as SQLite from 'expo-sqlite'

const database = SQLite.openDatabase('trivia_app.db')

export function init(){
    createDB()
    return getUser();
}

function createDB(){
    console.log('createDB');
    new Promise((resolve, reject)=>{
        database.transaction( (tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY NOT NULL,
            email TEXT,
            password TEXT,
            token TEXT
        )`,
                [],
                ()=>{ console.log('db created'); resolve() },
                (_,error)=>{ reject(error)})
        });

        database.transaction((tx)=>{
            tx.executeSql(`INSERT INTO user ( id, email, password, token) VALUES (2, "", "", "")`,
                [],
                (_,result)=>{
                    console.log('record created')
                    resolve(result)
                },
                (_,error)=>{  reject(error)})
        })
    });
}

export function getUser(){
    console.log('getUser');
    return new Promise((resolve, reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`SELECT * FROM user`,
                [],
                (_,result)=>{
                    console.log('record')
                    resolve(result.rows._array[0])
                },
                (_,error)=>{
                    console.log('error')
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