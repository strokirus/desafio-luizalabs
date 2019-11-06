const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const rp = require('request-promise');
const validator = require('jsonschema').Validator;
const opencage = require('opencage-api-client');
const OPEN_CAGE_KEY = "7560f6d73dc74841ad81ef74407ee6fe";

const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "cep server",
    "type": "object",
    "properties": {
        "number": {
            "type": "string",
            // eslint-disable-next-line no-useless-escape
            "pattern": "^[0-9]{5}\-[0-9]{3}$"
        },
    },
    "required": [
        "number"
    ]
};

const app = express();

app.use(cors());

app.get('/cep', (req, res) => {
    async function getCoordinates (address) {
        try {
            const res = await opencage.geocode({ q: address, key: OPEN_CAGE_KEY });

            if (res.results.length > 0) {
                return res.results[0].geometry;
            }
            
            return undefined;
        } catch (e) {
            console.error(e);
            return undefined;
        }
    }

    async function getCep(number, res) {
        let options = {
            method: 'GET',
            uri: `https://viacep.com.br/ws/${number}/json/`,
            json: true,
        };
    
        const r = await rp(options);

        if (r.erro) {
            res.status(417).json(r);

            return false;
        }

        r.geo = await getCoordinates(`${r.logradouro} ${r.complemento} ${r.bairro} ${r.localidade} ${r.uf}`);
    
        res.status(200).json(r);

        return true;
    }
    

    const query = req.query;
    let response= new validator().validate(query, schema);

    if (response.errors.length > 0) {
        res.status(412).json({ message: "Format error" });
        return false;
    }

    return getCep(query.number, res);
});

exports.app = functions.https.onRequest(app);
