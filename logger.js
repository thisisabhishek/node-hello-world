import {format} from 'date-fns'

let dateTime = format(new Date(), 'MM/dd/yyyy HH:mm:ss')

export const infoLogger = (msg) => {
    console.log(`INFO - ${dateTime} - ${msg}`)
}

export const errorLogger = (msg) => {
    console.error(`ERROR - ${dateTime} - ${msg}`)
}