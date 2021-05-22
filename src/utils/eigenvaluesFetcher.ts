import eigenvalues from '../assets/eigenvalues.json'

export default class EigenvaluesFetcher {
    private hourEigenvalues: [string, Date, number][]
    private dayEigenvalues: [string, Date, number][]
    private monthEigenvalues: [string, Date, number][]
    private yearEigenvalues: [string, Date, number][]

    constructor() {
        this.hourEigenvalues = eigenvalues.hour.map(item => {
            const date = new Date(<number>item[1], <number>item[2] - 1, <number>item[3], <number>item[4], 5, 5)
            return [<string>item[0], date, <number>item[5]]
        })
        this.dayEigenvalues = eigenvalues.day.map(item => {
            const date = new Date(<number>item[1], <number>item[2] - 1, <number>item[3], 5, 5, 5)
            return [<string>item[0], date, <number>item[4]]
        })
        this.monthEigenvalues = eigenvalues.month.map(item => {
            const date = new Date(<number>item[1], <number>item[2] - 1, 5, 5, 5, 5)
            return [<string>item[0], date, <number>item[3]]
        })
        this.yearEigenvalues = eigenvalues.year.map(item => {
            const date = new Date(<number>item[1], 5, 5, 5, 5, 5)
            return [<string>item[0], date, <number>item[2]]
        })
    }

    year(sensors: string[], start: Date, end: Date): { labels: string[], data: number[][] } {
        const convertedStart = new Date(start.getFullYear(), 1, 1, 1, 1, 1)
        const convertedEnd = new Date(end.getFullYear() + 1, 1, 1, 1, 1, 1)
        const lines = sensors.map(sensor => this.yearEigenvalues.filter(item => item[0] == sensor && convertedStart < item[1] && item[1] < convertedEnd))
        return {
            labels: lines[0].map(item => `${item[1].getFullYear()}`),
            data: lines.map(line => line.map(item => item[2])),
        }
    }

    month(sensors: string[], start: Date, end: Date): { labels: string[], data: number[][] } {
        const convertedStart = new Date(start.getFullYear(), start.getMonth(), 1, 1, 1, 1)
        const convertedEnd = new Date(end.getFullYear(), end.getMonth() + 1, 1, 1, 1, 1)
        const lines = sensors.map(sensor => this.monthEigenvalues.filter(item => item[0] == sensor && convertedStart < item[1] && item[1] < convertedEnd))
        return {
            labels: lines[0].map(item => `${item[1].getFullYear()}-${item[1].getMonth() + 1}`),
            data: lines.map(line => line.map(item => item[2])),
        }
    }

    day(sensors: string[], start: Date, end: Date): { labels: string[], data: number[][] } {
        const convertedStart = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 1, 1, 1)
        const convertedEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 1, 1, 1, 1)
        const lines = sensors.map(sensor => this.dayEigenvalues.filter(item => item[0] == sensor && convertedStart < item[1] && item[1] < convertedEnd))
        return {
            labels: lines[0].map(item => `${item[1].getFullYear()}-${item[1].getMonth() + 1}-${item[1].getDate()}`),
            data: lines.map(line => line.map(item => item[2])),
        }
    }

    hour(sensors: string[], start: Date, end: Date): { labels: string[], data: number[][] } {
        const convertedStart = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), 1, 1)
        const convertedEnd = new Date(end.getFullYear(), end.getMonth(), end.getDate(), end.getHours(), 1, 1)
        const lines = sensors.map(sensor => this.hourEigenvalues.filter(item => item[0] == sensor && convertedStart < item[1] && item[1] < convertedEnd))
        return {
            labels: lines[0].map(item => `${item[1].getFullYear()}-${item[1].getMonth() + 1}-${item[1].getDate()}-${item[1].getHours()}`),
            data: lines.map(line => line.map(item => item[2])),
        }
    }
}