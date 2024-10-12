// main.ts

export interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

export interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits"
  };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits"
  };
}

// Example usage:

const major1: MajorCredits = { credits: 30, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 20, brand: "MajorCredits" };
const minor1: MinorCredits = { credits: 15, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 10, brand: "MinorCredits" };

const totalMajorCredits = sumMajorCredits(major1, major2);
const totalMinorCredits = sumMinorCredits(minor1, minor2);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`); // Output: 50
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`); // Output: 25
