import { test } from '@playwright/test';
import { DBCommons } from '../../commons/db/DBCommons.js';

test.describe('DB  tests', () => {

    let db: DBCommons;

    //initialize all common functions from DB Common methods
    test.beforeEach(async () => {
        db = new DBCommons();
    });

    //Test Case : Validate the db test results
    test('Validate the DB test', async () => {
       const data =  await db.getData("Select film_id,title,description from Film order by film_id asc limit 10");
    //   console.log(data); //print all the rows. 
    //    console.log(data[4]);//print the 5 row data
        console.log(data[4].title);//print the 5 row data
    });

});