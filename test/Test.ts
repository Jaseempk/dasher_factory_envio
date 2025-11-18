import assert from "assert";
import { 
  TestHelpers,
  DasherFactory_ChallengeCreated
} from "generated";
const { MockDb, DasherFactory } = TestHelpers;

describe("DasherFactory contract ChallengeCreated event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for DasherFactory contract ChallengeCreated event
  const event = DasherFactory.ChallengeCreated.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("DasherFactory_ChallengeCreated is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await DasherFactory.ChallengeCreated.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualDasherFactoryChallengeCreated = mockDbUpdated.entities.DasherFactory_ChallengeCreated.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedDasherFactoryChallengeCreated: DasherFactory_ChallengeCreated = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      _creator: event.params._creator,
      _challengeContractAddress: event.params._challengeContractAddress,
      _startingDate: event.params._startingDate,
      _totalDuration: event.params._totalDuration,
      _stakeAmount: event.params._stakeAmount,
      _timestamp: event.params._timestamp,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualDasherFactoryChallengeCreated, expectedDasherFactoryChallengeCreated, "Actual DasherFactoryChallengeCreated should be the same as the expectedDasherFactoryChallengeCreated");
  });
});
