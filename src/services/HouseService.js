import { dbContext } from "../db/DbContext.js"


class HouseService {

    async getAllHouses() {
        const houses = await dbContext.Houses.find()
        return houses
    }

    async postNewHouse(houseData) {
        const house = await dbContext.Houses.create(houseData)
        return house
    }

    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        return house
    }

    async searchHouses(searchQuery) {
        const houses = await dbContext.Houses.find(searchQuery)
        return houses
    }
}

export const houseService = new HouseService()