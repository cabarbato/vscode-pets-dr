import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class Spamton extends BasePetType {
    label = 'spamton';
    static readonly possibleColors = [PetColor.black];
    sequence = {
        startingState: States.sitIdle,
        sequenceStates: [
            {
                state: States.sitIdle,
                possibleNextStates: [States.walkRight, States.runRight],
            },
            {
                state: States.walkRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.runRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.walkLeft,
                possibleNextStates: [States.sitIdle],
            },
            {
                state: States.runLeft,
                possibleNextStates: [States.sitIdle],
            },
            {
                state: States.chase,
                possibleNextStates: [States.idleWithBall],
            },
            {
                state: States.swipe,
                possibleNextStates: [States.sitIdle],
            },
            {
                state: States.idleWithBall,
                possibleNextStates: [States.walkRight, States.walkLeft],
            },
        ],
    };

    get emoji(): string {
        return '🔪 📺';
    }

    get hello(): string {
    const quotes = [
    "KILL YOUR TV",
    'NOW IS YOUR CHANCE TO BE A [[BIG SHOT]]!',
    'I CAN BE YOUR [[NEO]]!',
    'DON\'T MISS THIS OPPORTUNITY!',
    'DELISIS KROMER'
    ]
        return quotes[Math.floor(Math.random() * quotes.length)];
    }
}

export const SPAMTON_NAMES: ReadonlyArray<string> = [
    'Spamton',
    'Big Shot',
    'Neo',
];
