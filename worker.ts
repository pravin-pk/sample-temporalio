import { Worker, NativeConnection } from '@temporalio/worker';
import * as activities from './activities.ts';

async function run() {
    const connection = await NativeConnection.connect({
        address: 'localhost:7233',
    })

    const worker = await Worker.create({
        connection,
        workflowsPath: './workflows.ts',
        taskQueue: 'hello-world',
        activities,
    });

    console.log('Worker created');
    
    await worker.run();
    await connection.close();

}

run();

