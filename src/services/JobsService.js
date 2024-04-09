import { dbContext } from "../db/DbContext.js"

class JobsService {
    async getJobs() {
        const jobs = await dbContext.Jobs.find()
        return jobs
    }

    async getJobById(jobId) {
        const job = await dbContext.Jobs.findById(jobId)
        return job
    }

    async postJob(jobData) {
        const job = await dbContext.Jobs.create(jobData)
        return job
    }

    async searchJobs(searchQuery) {
        const jobs = await dbContext.Jobs.find(searchQuery)
        return jobs
    }
}

export const jobsService = new JobsService()