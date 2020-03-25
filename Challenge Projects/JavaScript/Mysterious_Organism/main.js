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
      let inCommon = Math.round(((total / 15) * 100));
      console.log(`Specimen #${this.Number} and specimen #${pAequorObject.Number} have ${inCommon}% DNA in common.`);
      return inCommon;
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
    complementStrand() {
      let strandCompliment = [];
      let newElement;
      this.Dna.forEach((element) => {
        if ((element) === 'C') {
          newElement = 'G';
          strandCompliment.push(newElement);
        } else if ((element) === 'G') {
          newElement = 'C';
          strandCompliment.push(newElement);
        } else if ((element) === 'T') {
          newElement = 'A';
          strandCompliment.push(newElement);
        } else if ((element) === 'A') {
          newElement = 'T';
          strandCompliment.push(newElement);
        }
      });
      return strandCompliment;
    }
  };
};

//create 30 new instances of pAequor which will likely survive
//setIndex allows new sets to begin index at higher number / prevent specimen Number repeat
const create30 = (setIndex) => {
  const pAequorArray = [];
  for (let i = 1; i <= 30;) {
    let dnaNew = pAequorFactory(i, mockUpStrand());
    let surv = dnaNew.willLikelySurvive();
    if (surv === true) {
      if (setIndex) {
        dnaNew.Number = dnaNew.Number + setIndex;
        pAequorArray.push(dnaNew);
        i++
      } else {
        pAequorArray.push(dnaNew);
        i++
      }
    }
  }
  return pAequorArray;
}

//finds most related pAequor instances given an array of instances
const findRelatedDna = (dnaArray) => {
  let mostRelated = 0;
  let related;
  let strongestRelations = [];
  for (let k = 0; k < dnaArray.length; k++) {
    let j = k + 1;
    while (j < dnaArray.length) {
      related = pAequorFactory(dnaArray[k].Number, dnaArray[k].Dna).compareDna(dnaArray[j]);
      if (related > mostRelated) {
        mostRelated = related;
        strongestRelations = [
          [dnaArray[k].Number, dnaArray[j].Number]
        ];
      } else if (related === mostRelated) {
        strongestRelations.push([dnaArray[k].Number, dnaArray[j].Number])
      }
      j++;
    }
  }
  console.log(`The most related instances of pAequor have ${mostRelated}% of their DNA in common.`);
  console.log('The return on this fx is a array of the arrays of most related instances.');
  return strongestRelations;
};

// this fx converts an array of instances of pAequor to an array of strings
const convertArray = (array) => {
  let convertedArray = [];
  for (var i = 0; i < array.length; i++) {
    let num = array[i].Number.toString();
    let dna = array[i].Dna.join("");
    let newString = `${num}: ${dna}`;
    convertedArray.push(newString);
  }
  return convertedArray;
};

// below are tests of the functions

//test create array & log as array of strings
/*let arrayNew = create30(30);
console.log(convertArray(arrayNew));*/

// test findRelatedDna fucntion
/*let arrayNew2 = create30(30);
console.log(findRelatedDna(arrayNew2));*/

// test .complementStrand method
/*let strand = mockUpStrand();
let compliment = pAequorFactory(1, strand).complementStrand();
console.log(strand);
console.log(compliment);*/

//test .mutate method
/*let newArray = mockUpStrand();
console.log(newArray);
let test = pAequorFactory(1, newArray).mutate();
console.log(test);*/
