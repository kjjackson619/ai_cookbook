const express = require("express");
const axios = require("axios");
const router = express.Router();

const SPOONACULAR_API_KEY = "";
const SPOONACULAR_BASE_URL = "";

router.get('/search', async (req, res) => {
    const {query, diet} = req.query;
    try {
        const response = await axios.get(`${SPOONACULAR_BASE_URL}/complexSearch`, {
            params: {
                query,
                diet,
                apiKey: SPOONACULAR_API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get("/:id/information", async (req, res) => {
    const {id} = req.params;
    try {
        const response = await axios.get(`${SPOONACULAR_BASE_URL}/complexSearch`, {
            params: {
                query,
                diet, 
                apiKey: SPOONACULAR_API_KEY
            }
         });
         res.json(response.data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;

