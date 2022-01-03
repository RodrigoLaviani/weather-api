import mongoose from 'mongoose'

export const initDatabaseConnection = (): any => {
    mongoose.connect(`mongodb+srv://weather:weather1234@weathercluster.3smqt.mongodb.net/weather?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      })
      .then(() => console.log(`Connected to database`))
      .catch(error => { 
        console.log(error)
        throw error 
      })
  }