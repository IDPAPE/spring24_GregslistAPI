import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router
            .get('', this.getJobs)
            .get('/search', this.searchJobs)
            .get('/:jobId', this.getJobById)
            .post('', this.postJob)
    }

    async getJobs(request, response, next) {
        try {
            const jobs = await jobsService.getJobs()
            response.send(`getting all jobs ${jobs}`)
        } catch (error) {
            console.error(error)
            next(error)
        }
    }

    async searchJobs(request, response, next) {
        try {
            const searchQuery = request.query
            const jobs = await jobsService.searchJobs(searchQuery)
            response.send(`searching for job ${jobs}`)
        } catch (error) {
            console.error(error)
            next(error)
        }
    }

    async getJobById(request, response, next) {
        try {
            const jobId = request.params.jobId
            const job = await jobsService.getJobById(jobId)
            response.send(`finding job by id ${job}`)
        } catch (error) {
            console.error(error)
            next(error)
        }
    }

    async postJob(request, response, next) {
        try {
            const jobData = request.body
            const job = await jobsService.postJob(jobData)
            response.send(`posting job ${job}`)
        } catch (error) {
            console.error(error)
            next.error
        }
    }
}