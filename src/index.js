module.exports = function getZerosCount(number, base) {

  let dividers = [];
  const simpleNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];

  function getBaseDeviders(base, i = 0) {
    if (!base || base < simpleNumbers[i]) {
      return;
    }
    else if (!(base % simpleNumbers[i])) {
      base = base / simpleNumbers[i];
      let num = simpleNumbers[i];
      dividers[num] = dividers[num] ? dividers[num] + 1 : 1;
      return getBaseDeviders(base, i);
    } else if (base % simpleNumbers[i]) {
      return getBaseDeviders(base, i + 1);
    }
  }

  function getDevider(specificDevider) {
    let countDeviders = 0;
    for (let i = 1, numDeviders = 0; numDeviders < number; i++) {
      numDeviders = Math.pow(specificDevider[0], i);
      let totalNumber = number / numDeviders;
      countDeviders += Math.floor(totalNumber);
    }

    return countDeviders / specificDevider[1];
  }

  getBaseDeviders(base, 0);

  let result = number;
  dividers.forEach((v, k) => { result = (k && v != "undefined" && result > getDevider([k, v])) ? getDevider([k, v]) : result});

  return Math.floor(result);
};
