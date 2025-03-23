import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "./activities.ts";

const { greet, randomNumber } = proxyActivities<typeof activities>({
  startToCloseTimeout: '10s',
});


export async function example(person: activities.Person): Promise<string> {
  const msg = await greet(person);
  const num = await randomNumber(person);
  return `${msg} ${num}`;
}