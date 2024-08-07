import {createBullBoard} from '@bull-board/api';
import {BullAdapter} from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from "@bull-board/express";

import evaluationQueue from '../queues/evaluationQueue';
import sampleQueue from '../queues/sample.queue';
import submissionQueues from '../queues/submissionQueues';

export const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/ui');

createBullBoard({
	queues:[new BullAdapter(sampleQueue),new BullAdapter(submissionQueues),new BullAdapter(evaluationQueue)],
	serverAdapter:serverAdapter
});