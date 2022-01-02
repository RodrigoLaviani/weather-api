export class Weather {
	from: Date
	to: Date
	location: string
	temp: number
	rain: number
  
    constructor(from: Date, to: Date, location: string, temp: number, rain: number) {
      this.from = from
      this.to = to
      this.location = location
      this.temp = temp
      this.rain = rain
    }
  }