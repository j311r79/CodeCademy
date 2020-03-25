// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

//specimen factory function
const pAequorFactory = (specimenNum, dna) => {
  return {
    Number: specimenNum,
    Dna: dna,
    mutate() {
      let randomIndex = Math.floor(Math.random() * dna.length);
      let newBase = returnRandBase();
      while (newBase === dna[randomIndex]) {
        newBase = returnRandBase();
      }
      dna[randomIndex] = newBase;
      return dna;
    },
    compareDna(pAequorObject) {
      let total = 0
      for (let i = 0; i < this.Dna.length; i++) {
        if (pAequorObject.Dna[i] === this.Dna[i]) {
          total++
        }
      }
      let inCommon = Math.round(((total / this.Dna.length) * 100));
      return `Specimen #${this.Number} and specimen #${pAequorObject.Number} have ${inCommon}% DNA in common.`;
    },
    willLikelySurvive() {
      let total = 0
      for (let i = 0; i < this.Dna.length; i++) {
        if (this.Dna[i] === 'C' || this.Dna[i] === 'G') {
          total++;
        }
      }
      let survive = Math.floor(((total / this.Dna.length) * 100));
      if (survive >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

//create 30 new instances of pAequor which will likely survive
const create30 = () => {
  const pAequorArray = [];
  for (let i = 1; i <= 30;) {
    let dnaNew = pAequorFactory(i, mockUpStrand());
    let surv = dnaNew.willLikelySurvive();
    if (surv === true) {
      let newArray = [dnaNew.Number, dnaNew.Dna];
      pAequorArray.push(newArray);
      i++
    }
  } return pAequorArray;
}

console.log(create30());
