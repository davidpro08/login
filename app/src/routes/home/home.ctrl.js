"use strict"

const UserStorage = require("../../models/UserStorage");


const output = {
    hello: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["davidpro", "배성빈", "유성우"],
    psword: ["moon0817", "tyzm쇼크", "ryu0101"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인이 실패했습니다."
        return res.json(response);
    }
}


module.exports = {
    output,
    process,
};