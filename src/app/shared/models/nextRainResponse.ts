import moment from "moment";

export class NextRain {
    location: string
    datetime: string

    constructor(location: string, datetime: Date) {
        this.location = location;
        this.datetime = moment(datetime).format('D/M/YYYY [a las] HH:mm');
    }
}