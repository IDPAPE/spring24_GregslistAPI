import { query } from "express"
import { houseService } from "../services/HouseService.js"
import BaseController from "../utils/BaseController.js"

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .post('', this.postNewHouse)
            .get('/search', this.searchHouses)
            .get('', this.getAllHouses)
            .get('/:houseId', this.getHouseById)
    }

    async getAllHouses(request, response, next) {
        try {
            const houses = await houseService.getAllHouses()
            response.send(`getting all ${houses}`)
        } catch (error) {
            next(error)
            console.error(error)
        }
    }

    async getHouseById(request, response, next) {
        try {
            const houseId = request.params.houseId
            const house = await houseService.getHouseById(houseId)
            response.send(`found house by id ${house}`)
        } catch (error) {
            next(error)
            console.error(error)
        }
    }

    async searchHouses(request, response, next) {
        try {
            const searchQuery = request.query
            const houses = await houseService.searchHouses(searchQuery)
            response.send(`found houses through searching ${houses}`)
        } catch (error) {
            next(error)
            console.error(error)
        }

    }

    async postNewHouse(request, response, next) {
        try {
            let houseData = request.body
            const house = await houseService.postNewHouse(houseData)
            response.send(`posting new house ${house}`)
        } catch (error) {
            next(error)
            console.error(error)
        }
    }
}