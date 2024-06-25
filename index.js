
function distanceFromHqInBlocks(someValue) {
    const hq = 42; // Headquarters is at 42nd Street
    return Math.abs(someValue - hq);
  }

  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // 1 block is 264 feet
  }

  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
      return 0; // Free for first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate of $25 for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distances over 2500 feet not allowed
    }
  }