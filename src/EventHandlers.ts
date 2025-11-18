/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  DasherFactory,
  DasherFactory_ChallengeCreated,
} from "generated";

DasherFactory.ChallengeCreated.handler(async ({ event, context }) => {
  const entity: DasherFactory_ChallengeCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _creator: event.params._creator,
    _challengeContractAddress: event.params._challengeContractAddress,
    _startingDate: event.params._startingDate,
    _totalDuration: event.params._totalDuration,
    _stakeAmount: event.params._stakeAmount,
    _timestamp: event.params._timestamp,
  };

  context.DasherFactory_ChallengeCreated.set(entity);
});
