const {Review} = require("../models/model");

class reviewController {
    async create(req, res) {
        try {
            const {number, name} = req.body

            if (number.length === 11 && name) {
                let candidate = await Review.findAll({where: {number}})
                if (candidate.length === 0) {
                    candidate = Review.create({number, name})
                    return res.json(candidate)
                } else {
                    return res.json("error")
                }
            }
        } catch (e) {
            return res.json(e)
        }
    }

    async getReviews(req, res) {
        const reviews = await Review.findAll()

        return res.json(reviews)
    }
}

module.exports = new reviewController()