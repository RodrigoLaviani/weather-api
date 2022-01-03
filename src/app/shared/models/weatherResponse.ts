export class Weather {
    location: string
    temperature: string
    rain: string

    constructor(location: string, temperature: number, rain: number) {
        this.location = location;
        this.temperature = temperature === 1 ? `${temperature} grado` : `${temperature} grados`;
        this.rain = `${rain}% de lluvia.`
    }
}