const arr = [1, -3, -4, 2, 0];

function plusMinus(arr) {
  const minus = arr.reduce(
    (acc, current) => {
      if (current > 0) {
        acc.positive++;
      } else if (current < 0) {
        acc.negative++;
      } else {
        acc.zero++;
      }

      return acc;
    },
    { positive: 0, negative: 0, zero: 0 }
  );

  const positiveFraction = minus.positive / arr.length;
  const negativeFraction = minus.negative / arr.length;
  const zeroFraction = minus.zero / arr.length;

  console.log(positiveFraction.toFixed(6));
  console.log(negativeFraction.toFixed(6));
  console.log(zeroFraction.toFixed(6));
}

function staircase(n) {
  for (let line = 1; line <= n; line++) {
    let stair = "";
    for (let col = 1; col <= line; col++) {
      stair += "#";
    }
    const escapedStair = stair.padStart(n);
    console.log(escapedStair);
  }
}

const arrayA = [3, 6, 2, 10, 5];
function minMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const minArray = [];
  const maxArray = [];

  arr.map((num) => {
    minArray.push(Number(num));
    maxArray.push(Number(num));
  });

  const minSum = () => {
    console.log(minArray);
    minArray.pop();
    const min_sum = minArray.reduce((acc, current) => acc + current);

    console.log(min_sum);
  };
  const maxSum = () => {
    console.log(maxArray);
    maxArray.shift();
    const max_sum = maxArray.reduce((acc, current) => acc + current);

    console.log(max_sum);
  };

  minSum();
  maxSum();
}
minMaxSum(arrayA);
