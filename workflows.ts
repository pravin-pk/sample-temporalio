import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "./activities.ts";

const { writeToFile } = proxyActivities<typeof activities>({
  startToCloseTimeout: '10s',
  retry: {
    initialInterval: '1s',
    maximumAttempts: 5,
  },
});


export async function example(person: any): Promise<string> {
  const filePath = await writeToFile(person);
  return `File saved at ${filePath}`;
}