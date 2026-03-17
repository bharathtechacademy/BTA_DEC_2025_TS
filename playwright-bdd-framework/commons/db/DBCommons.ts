import {Client } from 'pg';
import config from '../../config/config.json' with {type :'json'};

export class DBCommons {

    async getData(query :string) : Promise<Array<Record<string,string>>>{

        //create a new client instance configuration 
        const client = new Client ({
            host: config.db.host,
            port: config.db.port,
            database: config.db.database,
            user: config.db.user,
            password: config.db.password
        });

        //connect to database
        await client.connect();

        //Execute the query and get the row data
        const rowData = (await client.query(query)).rows;

        //close database connection
        await client.end();

        //return the db row data
        return rowData;

    }

    

}