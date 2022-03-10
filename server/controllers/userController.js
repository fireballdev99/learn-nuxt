import connection from "../connectDB.js";

// SELECT
export const getUser = async (req, res) => {
    const id = req.body.id
    const sql = `SELECT * FROM users WHERE id = ${id}`
    const [resp] = await connection.execute(sql);
    try {
        if (resp.length != 0) {
            console.log({
                status: 'ok',
                user: resp
            });
            res.status(200).send({
                status: 'ok',
                user: resp
            })
        } else {
            res.status(200).send({ status: 'error', message: 'No data in rows', user: [] });

        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            status: 'error',
            message: err.message,
            err
        })
    }
}

// SELECT ALL
export const getAllUser = async (req, res) => {
    const sql = `SELECT * FROM users`
    const [resp] = await connection.execute(sql);
    try {
        console.log({
            status: 'ok',
            user: resp
        });
        res.status(200).send({
            status: 'ok',
            user: resp
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }

}

// INSERT
export const createUser = async (req, res) => {
    const username = req.body.username;
    const passwords = req.body.passwords;
    const sql = `INSERT INTO users (username,passwords) VALUES ('${username}','${passwords}')`;
    const [resp] = await connection.execute(sql);
    if (resp.insertId) {
        try {
            console.log({
                status: 'ok',
                message: 'User is created',
                id: resp.insertId
            });
            res.status(200).send({
                status: 'ok',
                message: 'User is created',
                id: resp.insertId
            })
        } catch (err) {
            console.log(err);
            res.status(500).send({
                status: 'error',
                message: err.message,
                err
            })
        }
    } else {
        res.send({ status: 'error', message: "User isn't inserted", result: [] });
    }
}

// UPDATE
export const editPassword = async (req, res) => {
    const id = req.body.id
    const passwords = req.body.passwords;
    const sql = `UPDATE users SET passwords = '${passwords}' WHERE id = ${id} LIMIT 1`;
    const [resp] = await connection.execute(sql);
    if (resp.affectedRows === 1) {
        try {
            console.log({
                status: 'ok',
                message: 'User is updated',
                info: resp.info
            });
            res.status(200).send({
                status: 'ok',
                message: 'User is updated',
                info: resp.info
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({
                status: 'error',
                message: err.message,
                err
            })
        }
    } else {
        console.log({
            status: 'error',
            message: 'Rows not affected!',
            info: resp.info
        });
        res.send({
            status: 'error',
            message: 'Rows not affected!',
            info: resp.info
        });
    }

}

// DELETE
export const deleteUser = async (req, res) => {
    const id = req.body.id
    const sql = `DELETE FROM users WHERE id = ${id}`;
    const [resp] = await connection.execute(sql);
    if (resp.affectedRows === 0) {
        try {
            res.status(200).send({
                status: 'error',
                message: 'Rows not affected!',
            });
            console.log({
                status: 'error',
                message: 'Rows not affected!',
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({
                status: 'error',
                message: err.message
            })
        }
    } else {
        res.status(200).send({
            status: 'ok',
            message: 'User is deleted',
        });
        console.log(resp);
    }
}