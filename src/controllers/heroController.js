const heroModel = require("../models/heroModel");

const getAllHeroes = async (req, res) => {
    try {
        const heroes = await heroModel.getHeroes();
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Heróis!" });
    }
};

const getHero = async (req, res) => {
    try {
        const hero = await heroModel.getHeroById(req.params.id);
        if (!hero) {
            return res.status(404).json({ message: "Herói não encontrado!" });
        }
        res.json(hero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Herói!" });
    }
};

const createHero = async (req, res) => {
    try {
        const { name, publisher_id } = req.body;
        const newHero = await heroModel.createHero(name, publisher_id);
        res.status(201).json(newHero);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar Herói!" });
    }
};

const updateHero = async (req, res) => {
    try {
        const { name, publisher_id } = req.body;
        const updateHero = await heroModel.updateHero(req.params.id, name, publisher_id);
        if (!updateHero) {
            return res.status(404).json({ message: "Herói não encontrado!" });
        }
        res.json(updateHero);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar Herói!" });
    }
};

const deleteHero = async (req, res) => {
    try {
        const message = await heroModel.deleteHero(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Herói!" });
    }
};

module.exports = { getAllHeroes, getHero, createHero, updateHero, deleteHero };
