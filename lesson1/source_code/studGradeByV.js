  
//Victorino A Adobas Jr.
//DA 2-1 


  let scores = [98, 89, 76, 64, 91, 73, 84, 77];

  let highest = scores[0];
  let totalScore = 0;
  let avgScore = 0;
  let lowestScore = scores[0];
  let passed = 0;
  let failed = 0;


  console.log();
  console.log("Welcome to vGrade Analyzer\n");
  console.log("Student Scores:");

  for (let i = 0; i < scores.length; i++){
    console.log(scores[i]);
  }i

  console.log();

  for (let i = 0; i < scores.length; i++)
      {
          let score = scores[i]
          let remark = "";

          totalScore += scores[i]
          avgScore = totalScore / scores.length;
          if (score > highest){
            highest = score;
          }
          if (score < lowestScore){
            lowestScore = score;
          }


          if (score >= 90){
              remark = "passed - excellent";
              passed++;
          }else if(score >= 80){
              remark = "passed - very good";
              passed++;
          }else if(score >= 75){
              remark = "passed - good";
              passed++;
          }else {
              remark = "Failed";
              failed++
                }
          console.log("Student " + (i + 1) + ": " + score + " - " + remark);
      }

      console.log();
      console.log("Total Score: " + totalScore);
      console.log("Average Score: " + avgScore);
      console.log("Highest Score: " + highest);
      console.log("Lowest Score: " + lowestScore);
      console.log("Passed: " + passed);
      console.log("Failed: " + failed);


