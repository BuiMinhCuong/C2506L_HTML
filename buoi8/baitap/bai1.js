function getGrade(score) {
  if (score >= 85) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else {
    return "D";
  }
}


console.log("Điểm 90:", getGrade(90)); 
console.log("Điểm 75:", getGrade(75)); 
console.log("Điểm 60:", getGrade(60)); 
console.log("Điểm 40:", getGrade(40));
