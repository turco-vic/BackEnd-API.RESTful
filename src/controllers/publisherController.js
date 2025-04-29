const publisherModel = require("../models/publisherModel");

const getAllPublishers = async (req, res) => {
    try {
        const publishers = await publisherModel.getPublishers();
        res.json(publishers);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Editora!" });
    }
};

const getPublisher = async (req, res) => {
    try {
        const publisher = await publisherModel.getPublisherById(req.params.id);
        if (!publisher) {
            return res.status(404).json({ message: "Editora não encontrada!" });
        }
        res.json(publisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Editora!" });
    }
};

const createPublisher = async (req, res) => {
    try {
        const { name } = req.body;
        const newPublisher = await publisherModel.createPublisher(name);
        res.status(201).json(newPublisher);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar Editora!" });
    }
};

const updatePublisher = async (req, res) => {
    try {
        const { name } = req.body;
        const updatePublisher = await publisherModel.updatePublisher(req.params.id, name);
        if (!updatePublisher) {
            return res.status(404).json({ message: "Editora não encontrada!" });
        }
        res.json(updatePublisher);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Erro ao atualizar Editora!" });
    }
};

const deletePublisher = async (req, res) => {
    try {
        const message = await publisherModel.deletePublisher(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Editora!" });
    }
};

module.exports = { getAllPublishers, getPublisher, createPublisher, updatePublisher, deletePublisher };
