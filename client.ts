import { Connection, Client } from '@temporalio/client';
import { example } from './workflows.ts';
import { v4 as uuidv4 } from 'uuid';

async function run() {

    const client = new Client();

    console.log("Connected to Temporal server");
    
    const resultPromise = client.workflow.execute(example, {
        taskQueue: 'temporal-test',
        args: [{ name: 'Testing' }],
        workflowId: `${new Date().toISOString()}-${uuidv4()}`,
    }).then(
        result => ({ status: 'completed', result }),
        error => ({ status: 'rejected', reason: error })
    );

    const result = await Promise.all([resultPromise]);
    console.log(result);
    await client.connection.close();
}
  
run()