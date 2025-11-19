/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  DasherFactory,
  DasherFactory_ChallengeCreated,
  Dasher,
  Dasher_RoleAdminChanged,
  Dasher_RoleGranted,
  Dasher_RoleRevoked,
  Dasher_UserJoined,
  Dasher_UserStakeClaimed,
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

Dasher.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: Dasher_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.Dasher_RoleAdminChanged.set(entity);
});

Dasher.RoleGranted.handler(async ({ event, context }) => {
  const entity: Dasher_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Dasher_RoleGranted.set(entity);
});

Dasher.RoleRevoked.handler(async ({ event, context }) => {
  const entity: Dasher_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.Dasher_RoleRevoked.set(entity);
});

Dasher.UserJoined.handler(async ({ event, context }) => {
  const entity: Dasher_UserJoined = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    _user: event.params._user,
    _timestamp: event.params._timestamp,
    _challengeAddress: event.params._challengeAddress,
    _challengeValue: event.params._challengeValue,
  };

  context.Dasher_UserJoined.set(entity);
});

Dasher.UserStakeClaimed.handler(async ({ event, context }) => {
  const entity: Dasher_UserStakeClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    contractAddress: event.srcAddress,
    _user: event.params._user,
    _claimAmount: event.params._claimAmount,
    _timestamp: event.params._timestamp,
  };

  context.Dasher_UserStakeClaimed.set(entity);
});
