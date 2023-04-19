import * as dotenv from 'dotenv'
import app from './server'

dotenv.config()
// Proper way to assign a PORT
const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listen on port ${port}...`));