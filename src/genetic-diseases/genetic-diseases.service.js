const GeneticDiseases = require('./genetics-disease.model')


class GeneticDiseasesService {
    static async findAll(specie) {
        let whereCondition = {
            status: 'active',
        }

        if (specie) {
            whereCondition = {
                status: 'active',
                specie: specie
            }
        }

        return await GeneticDiseases.findAll({
            where: whereCondition,
            attributes: ['name']
        })
    }

    static async findOne(id) {
        return await GeneticDiseases.findOne({
            where: {
                id: id,
                status: 'active'
            }
        })
    }

    static async create(data) {
        return await GeneticDiseases.create(data);
    }

    static async update(geneticDisease, data) {
        return await geneticDisease.update(data)
    }

    static async delete(geneticDisease) {
        return await geneticDisease.update({
            status: 'inactive'
        })
    }
}

module.exports = GeneticDiseasesService