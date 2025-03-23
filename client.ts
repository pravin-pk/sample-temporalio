import { Connection, Client } from '@temporalio/client';
import { example } from './workflows.ts';

async function run() {

    const client = new Client();

    console.log("Connected to Temporal server");
    
    const resultPromise = client.workflow.execute(example, {
        taskQueue: 'hello-world',
        args: [{name: 'PK'}],
        workflowId: `workflow-1`,
    }).then(
        result => ({ status: 'fulfilled', result }),
        error => ({ status: 'rejected', reason: error })
      );

    const result = await Promise.all([resultPromise]);
    console.log(result);
    await client.connection.close();
}
  
run()