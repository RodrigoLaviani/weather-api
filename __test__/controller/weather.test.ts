import app from '../../src/app';
import supertest from 'supertest';

describe('Test weather controller', () => {
    it('get weather api success', async () => {
        const res = await supertest(app).get('/weather?location=New%20York&datetime=2021-01-21T14%3A00%3A00.000Z')
        expect(res.status).toEqual(200)
    });

    it('get nextRain api success', async () => {
        const res = await supertest(app).get('/weather/nextRain?location=New%20York&datetime=2021-01-21T14%3A00%3A00.000Z')
        expect(res.status).toEqual(200)
    });

    it('get weather api bad request', async () => {
        const res = await supertest(app).post('/weather/nextRain?location=New%20York&datetime=2021-01-21T14%3A00%3A00.000Z')
        expect(res.status).toEqual(404)
    });

    it('get nextRain api bad request', async () => {
        const res = await supertest(app).post('/weather/nextRain?location=New%20York&datetime=2021-01-21T14%3A00%3A00.000Z')
        expect(res.status).toEqual(404)
    });
})