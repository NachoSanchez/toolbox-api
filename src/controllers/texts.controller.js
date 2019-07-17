'use strict';

const textsCtrl = {};
const Text = require('../models/Text');

textsCtrl.getTexts = async (req,res) => {
    const texts = await Text.find();
    res.json(texts);
};

textsCtrl.createText = async (req,res) => {
    const { title, content, date } = req.body;
    const newText = new Text({
        title,
        content,
        date
    });
    await newText.save();
    res.json({message: 'Text created'})
};

textsCtrl.getText = async (req,res) => {
    const text = await Text.findById(req.params.id);
    res.json(text);
}

textsCtrl.updateText = async (req,res) => {
    const { title, content } = req.body;
    await Text.findOneAndUpdate({_id: req.params.id}, {
        title,
        content
    })
    res.json({message: 'Text updated'});
}

textsCtrl.deleteText = async (req,res) => {
    await Text.findOneAndDelete(req.params.id)
    res.json({message: 'Text deleted'});
}

module.exports = textsCtrl;