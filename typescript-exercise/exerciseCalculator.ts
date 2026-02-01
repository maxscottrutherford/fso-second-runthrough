interface ExerciseInfo {
  regDays: number;
  trainDays: number;
  targetVal: number;
  avgTime: number;
  targetReached: boolean;
  rating: number;
  ratingInfo: string;
}

interface ExerciseValues {
  targetVal: number;
  days: number[];
}

const parseExerciseArguments = (args: string[]): ExerciseValues => {
  if (args.length < 4) throw new Error('Not enough arguments');

  const target = Number(args[2]);
  if (isNaN(target)) throw new Error('Provided target was not a number!');

  const days = args.slice(3).map((a) => Number(a));
  if (days.some((d) => isNaN(d))) {
    throw new Error('Provided daily exercise values were not numbers!');
  }

  return {
    targetVal: target,
    days
  };
};

const calculateExercises = (targetVal: number, days: number[]): ExerciseInfo => {
  const regDays = days.length;
  const trainDays = days.filter((d) => d > 0).length;
  const totalTrainTime = days.reduce((acc, curr) => acc + curr, 0);
  const avgTime = totalTrainTime / regDays;
  const targetReached = avgTime >= targetVal;

  let rating = 0;
  let ratingInfo = '';

  if (avgTime + 1 < targetVal) {
    rating = 1;
    ratingInfo = "You could've done more, put some more effort in next time.";
  } else if (avgTime < targetVal) {
    rating = 2;
    ratingInfo = 'Not bad, but not great';
  } else {
    rating = 3;
    ratingInfo = "Exactly what we're looking for";
  }

  return {
    regDays,
    trainDays,
    targetVal,
    avgTime,
    targetReached,
    rating,
    ratingInfo
  };
};

try {
  const { targetVal, days } = parseExerciseArguments(process.argv);
  console.log(calculateExercises(targetVal, days));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
