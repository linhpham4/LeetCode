/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  for (let i = 0; i < k; i++) {
      largestPile = gifts[0];
      pileIndex = 0;
      
      for (let i = 0; i < gifts.length; i++) {
        if (gifts[i] > largestPile) {
            largestPile = gifts[i];
            pileIndex = i;
        };
      };

    sqrtPile = Math.floor(Math.sqrt(largestPile));
    takenGifts = largestPile - sqrtPile;
    gifts[pileIndex] = sqrtPile;

  };
  return gifts.reduce((acc, value) => acc + value, 0);  
};