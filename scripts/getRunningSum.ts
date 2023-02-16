const getRunningSum = (array: number[], previous: number): number[] => {
  const newPrevious = array[0] + previous;
  return [
    newPrevious,
    ...(array.slice(1).length > 0
      ? getRunningSum(array.slice(1), newPrevious)
      : []),
  ];
};
export default getRunningSum;
