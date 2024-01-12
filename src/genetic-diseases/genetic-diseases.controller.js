const GeneticDiseasesService = require("./genetic-diseases.service")


const findAll = async (req, res) => {
    try {
        const { specie } = req.query

        const geneticDiseases = await GeneticDiseasesService.findAll(specie)

        return res.status(200).json({
            specie,
            geneticDiseases
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

const findOne = async (req, res) => {
    try {

        const { id } = req.params
        const geneticDisease = await GeneticDiseasesService.findOne(id)

        if (!geneticDisease) {
            return res.status(404).json({
                status: "error",
                message: `Genetic Disease with id ${id} not found`
            })
        }
        return res.status(200).json({

            data: geneticDisease
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

const createDisease = async (req, res) => {
    try {

        const { name, description, mortalityRate, treatment, symptoms, hasDisability, cause, specie } = req.body
        await GeneticDiseasesService.create({ name, description, mortalityRate, treatment, symptoms, hasDisability, cause, specie })

        return res.status(201).json({

            status: "success",
            message: 'Genetic Disease created succesfully'
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

const updateDisease = async (req, res) => {
    try {

        const { id } = req.params
        const { name, description } = req.body
        const geneticDisease = await GeneticDiseasesService.findOne(id)

        if (!geneticDisease) {
            return res.status(404).json({
                status: "error",
                message: `Genetic Disease with id ${id} not found`
            })
        }

        await GeneticDiseasesService.update(geneticDisease, { name, description })

        return res.status(200).json({

            status: "success",
            message: 'Genetic Disease updated succesfully'
        })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

const deleteDisease = async (req, res) => {
    try {
        const { id } = req.params
        const geneticDisease = await GeneticDiseasesService.findOne(id)

        if (!geneticDisease) {
            return res.status(404).json({
                status: "error",
                message: `Genetic Disease with id ${id} not found`
            })
        }

        await GeneticDiseasesService.delete(geneticDisease)
        return res.status(204).json(null)
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

module.exports = {
    findAll,
    findOne,
    createDisease,
    updateDisease,
    deleteDisease
}