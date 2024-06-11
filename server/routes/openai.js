const express = require("express");
const {Configuration, OpenAIApi} = require("openai");
const router = express.Router();

const configuration = new Configuration({
    apiKey: ""
});
const openai = new OpenAIApi(configuration);

router.post("/generate-recipe", async(req, res) => {
    const {ingredients, dietaryRestrictions} = req.body;
    try {
        const prompt = `Create a receipe using the following ingredients: ${ingredients.join(", ")}. Consider these dietary restrictions: ${dietaryRestrictions.join(", ")}.`;
        const response = await openai.createCompletion({
            model: "text-davinci-004",
            prompt, 
            max_tokens: 500,
        });
        res.json(response.data.choices[0].text.trim());
    } catch (error) {
        res.status(500).json({error: message});
    }
});

module.exports = router;