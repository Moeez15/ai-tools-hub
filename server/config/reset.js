import { pool } from './database.js'
import './dotenv.js'
import toolData from '../data/tools.js'

const createToolsTable = async () => {

    const createTableQuery = `
        DROP TABLE IF EXISTS tools;

        CREATE TABLE IF NOT EXISTS tools (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL,
            pricing VARCHAR(10) NOT NULL,
            use_case VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            image TEXT NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 tools table created successfully')
    }
    catch (err) {
      console.error('⚠️ error creating tools table', err)
    }

}

const seedToolsTable = async () => {

    await createToolsTable()

    toolData.forEach((tool) => {
        const insertQuery = {
            text: 'INSERT INTO tools (name, category, pricing, use_case, description, image) VALUES ($1, $2, $3, $4, $5, $6)'
        }

        const values = [
            tool.name,
            tool.category,
            tool.pricing, 
            tool.use_case,
            tool.description,
            tool.image
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting tool', err)
                return
            }

            console.log(`✅ ${tool.name} added successfully`)
        })
    })

}

seedToolsTable()