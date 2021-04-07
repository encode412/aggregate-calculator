function getInput() {
const jambScore = document.getElementById("jamb-score");

 // get utme aggregate
 const getUtmeAgg = () => {
   // get utme score
   const utmeScore = parseInt(jambScore.value, 10);
   // calculate utme aggregate
   return parseFloat((utmeScore / 8).toFixed(2));
    //get jamb score

 };

   // get post utme score
   const pUtmeScore = () => parseInt(document.getElementById("post-jamb-score").value, 10)

     // get waec aggregate
  const getWaecAgg = () => {
   const grades = Array.from(document.querySelectorAll('#dropdown'));
   return grades
     .map(grade => parseFloat(grade.value))
     .reduce((grade, sum) => {
       grade += sum;
       return grade;
     }, 0);
 };
 //assign
 const utme = getUtmeAgg();
 const pUtme = pUtmeScore();
 const waec = getWaecAgg();
 //local storage
 localStorage.setItem("jambScoreOne", utme)
 localStorage.setItem("pjambScoreOne", pUtme)
 localStorage.setItem("oLevel", waec)



// get total aggregate
 const totalAgg = parseFloat(utme + pUtme + waec).toFixed(2);
 localStorage.setItem("total", totalAgg)


}
 



 


   

    
    
   
 


    

   



