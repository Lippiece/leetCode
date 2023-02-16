/* eslint-disable fp/no-nil */

import getRunningSum from "../scripts/getRunningSum";

/* eslint-disable fp/no-unused-expression */
describe("passes", () => {
  /*
   * Input: nums = [1,2,3,4]
   * Output: [1,3,6,10]
   * Explanation: [1, 1+2, 1+2+3, 1+2+3+4].
   *
   * Example 2:
   * Input: nums = [1,1,1,1,1]
   * Output: [1,2,3,4,5]
   * Explanation: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
   *
   * Example 3:
   * Input: nums = [3,1,2,10,1]
   * Output: [3,4,6,16,17]
   */

  test("should return the running sum of 1d array", () => {
    expect(getRunningSum([ 1, 2, 3, 4 ], 0)).toEqual([ 1, 3, 6, 10 ]);
    expect(getRunningSum([ 1, 1, 1, 1, 1 ], 0)).toEqual([ 1, 2, 3, 4, 5 ]);
    expect(getRunningSum([ 3, 1, 2, 10, 1 ], 0)).toEqual([ 3, 4, 6, 16, 17 ]);
  });

  test("should run fast", () => {
    const nums     = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000)
    );
    const result   = getRunningSum(nums, 0);
    const expected = nums.reduce((accumulator, value) => {
      if (accumulator.length === 0) {
        accumulator.push(value);
      } else {
        accumulator.push(value + accumulator[ accumulator.length - 1 ]);
      }

      return accumulator;
    }, []);

    expect(result).toEqual(expected);
  });
});
