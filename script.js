"use strict";

const landingScreen =
  document.getElementById("landing-screen");

const adventureScreen =
  document.getElementById("adventure-screen");

const challengeOverlay =
  document.getElementById("challenge-overlay");




const startButton =
  document.getElementById("start-button");

const backButton =
  document.getElementById("back-button");

const explorer =
  document.getElementById("explorer");

const levelDisplay =
  document.getElementById("level-display");

const scoreDisplay =
  document.getElementById("score-display");

const progressDisplay =
  document.getElementById("progress-display");

const challengeLevel =
  document.getElementById("challenge-level");

const challengeTitle =
  document.getElementById("challenge-title");

const challengeInstruction =
  document.getElementById("challenge-instruction");

const challengePoints =
  document.getElementById("challenge-points");

const documentationTitle =
  document.getElementById("documentation-title");

const documentationContent =
  document.getElementById("documentation-content");

const codeEditor =
  document.getElementById("code-editor");

const runButton =
  document.getElementById("run-button");

const submitButton =
  document.getElementById("submit-button");

const consoleOutput =
  document.getElementById("console-output");

const feedbackMessage =
  document.getElementById("feedback-message");

const jungleMusic =
  document.getElementById("jungle-music");


const CHALLENGE_STATE_KEY = "jeremy-java-active-challenge";


const checkpoints = [
  {
    level: 1,
    left: "24%",
    top: "74%",
  },
  {
    level: 2,
    left: "34%",
    top: "64%",
  },
  {
    level: 3,
    left: "44%",
    top: "54%",
  },
  {
    level: 4,
    left: "54%",
    top: "44%",
  },
  {
    level: 5,
    left: "64%",
    top: "35%",
  },
  {
    level: 6,
    left: "73%",
    top: "27%",
  },
  {
    level: 7,
    left: "82%",
    top: "19%",
  },
  {
    level: 8,
    left: "90%",
    top: "11%",
  },
];


let currentChallengeIndex = 0;
let currentCheckpointIndex = 0;
let currentLevel = 1;

let score = 0;
let completedLevels = 0;

let revealedHintCount = 0;
let movementTimerId = null;
let delayedActionId = null;

let gameFinished = false;




const javaDocumentation = {
  title: "Java Fundamentals Guide",

  content: `
   <section class="documentation-section">
  <h4>Level 1 – Challenge 1 Hints</h4>
  <ol>
    <li>
      What information does the program receive, and what final information
      must it display?
    </li>

    <li>
      Try drawing very small boards such as 1 × 1, 2 × 2, 3 × 3 and 4 × 4.
      How many black squares does each board contain?
    </li>

    <li>
      What pattern do you notice when the side length changes from an even
      number to an odd number?
    </li>

    <li>
      Before counting the black squares, what total quantity can you calculate
      from the side length?
    </li>

    <li>
      If the total number of squares can be divided equally between two colours,
      how many belong to each colour?
    </li>

    <li>
      What happens when the total number of squares is odd? Since the top-right
      square is black, which colour receives the extra square?
    </li>

    <li>
      Does this problem require many separate decisions, or can one calculation
      work for both even-sized and odd-sized boards?
    </li>

    <li>
      How will your Java program receive the value of the side length from the
      user?
    </li>

    <li>
      After completing the calculation, have you included a statement that
      displays the result on the screen?
    </li>

    <li>
      Check your Java syntax carefully. Are brackets matched? Are statements
      completed with semicolons? Are variable names written consistently?
    </li>

    <li>
      Test your program using the side lengths 10, 21, 36 and 111. Does the
      result follow the pattern you discovered with the smaller boards?
    </li>
  </ol>
</section>

   <section class="documentation-section">
  <h4>1. Level 1 Challenge 2 Hints</h4>

  <ol>
    <li>
      What two measurements must the program receive before it can calculate
      the patient's BMI?
    </li>


<li>
  Look carefully at the example inputs. Are values such as 1.73 and 1.82
  whole numbers or decimal numbers?
</li>

<li>
  Which Java data type would allow your program to store measurements that
  contain decimal points?
</li>

<li>
  In what order will the two input values be entered? How will your program
  know which value represents mass and which represents height?
</li>

<li>
  The formula contains height squared. What does it mean to square a number?
  Try calculating the square of 2, 3 and 1.5 by hand.
</li>

<li>
  Which part of the BMI calculation should happen first: squaring the height
  or dividing the mass?
</li>

<li>
  How could brackets help Java perform the calculation in the correct order?
</li>

<li>
  Calculate one example manually before writing the code. Does your result
  contain a decimal part?
</li>

<li>
  The instruction says to round the answer down. If the calculated BMI is
  19.8, should the final answer be 19 or 20? What about 24.1?
</li>

<li>
  What Java operation or method can always move a decimal value down to the
  nearest whole number?
</li>

<li>
  After rounding down, does the final answer still need to be stored as a
  decimal value, or can it be stored as a whole number?
</li>

<li>
  Does the problem require several different decisions, or can the same
  calculation work for every valid mass and height?
</li>

<li>
  Does your output contain only the final number, without labels, words or
  extra spaces?
</li>

<li>
  Check your Java syntax carefully. Are your brackets matched? Are your
  statements completed with semicolons? Are the variable names written the
  same way throughout the program?
</li>

<li>
  Test your program using these input sets:
  40 and 1.47, 120 and 1.76, 100 and 2.20, and 228 and 1.90.
  Do all the results appear to have been rounded down correctly?
</li>


  </ol>
</section>


    

    <section class="documentation-section">

  <h4>2. Level 2 Challenge 1 Hints</h4>

  

  <ol>

    <li>
      What information is entered first, and what does that value tell the
      program about the remaining input?
    </li>


<li>
  If the number of days is 7, how many temperature values should the
  program read?
</li>

<li>
  Since the same action must be performed for every day, what programming
  structure can repeat a task a known number of times?
</li>

<li>
  What condition must a temperature satisfy for that day to count as part
  of a heatwave?
</li>

<li>
  What does the word consecutive mean? Would temperatures of 31°C, 33°C,
  25°C and 35°C form one heatwave or more than one?
</li>

<li>
  Act out the sequence using marks on paper. Add one mark whenever the
  temperature is at least 30°C. What should happen to the marks when a
  cooler day appears?
</li>

<li>
  What variable could keep track of the heatwave that is happening right
  now?
</li>

<li>
  What separate variable could remember the longest heatwave found so far?
</li>

<li>
  Why would one variable not be enough to remember both the current
  sequence and the best sequence?
</li>

<li>
  When a hot day is read, which value should change?
</li>

<li>
  After changing the current sequence, how can the program determine
  whether it has found a new longest heatwave?
</li>

<li>
  When the temperature is below 30°C, should the longest heatwave be erased,
  or should only the current sequence be affected?
</li>

<li>
  Does the program need to keep every temperature after checking it, or can
  it make a decision about each temperature immediately?
</li>

<li>
  What should the program output if none of the temperatures reach 30°C?
</li>

<li>
  What should happen if every temperature entered is at least 30°C?
</li>

<li>
  Test your reasoning using this input:
  7 20 32 45 30 32 16 19.
  Where does the heatwave begin, where does it end, and how long is it?
</li>

<li>
  Also test a sequence containing two separate heatwaves. Does your program
  remember the longer one after the first sequence ends?
</li>

<li>
  Check the required output carefully. Does your result include the words
  "Longest heatwave:", the number of days, and the word "days"?
</li>

<li>
  Review your Java syntax. Are the brackets matched, are statements
  completed with semicolons, and are variable names written consistently?
</li>


  </ol>

</section>


    
     
      
<section class="documentation-section">
  

<h4>2. Level 2 Challenge 2 Hints</h4>

  <ol>
    <li>
      What information must the user enter before the program can determine
      the tree's growth speed?
    </li>


<li>
  Is the answer determined only by the number of letters in the tree's
  name, or does the type of each letter also matter?
</li>

<li>
  Write the name of a tree on paper and examine one letter at a time.
  What must the program decide about each letter?
</li>

<li>
  How can the program determine how many letters are contained in the
  tree's name?
</li>

<li>
  Since every letter must be examined, what programming structure could
  repeat the same check for each position in the name?
</li>

<li>
  How can the program retrieve the letter found at a particular position
  in a word?
</li>

<li>
  The letters are divided into three groups. What question should the
  program ask first about the current letter?
</li>

<li>
  If the letter is not a vowel, what second group must the program check?
</li>

<li>
  If the letter belongs to neither of the first two groups, which scoring
  rule remains?
</li>

<li>
  What variable could begin at zero and keep the combined score as each
  letter is examined?
</li>

<li>
  After deciding which group a letter belongs to, what should happen to
  the running score?
</li>

<li>
  Should the running score be replaced each time, or should the new
  letter's points be added to the score already calculated?
</li>

<li>
  Would uppercase and lowercase letters be treated as equal automatically?
  For example, would the program recognise both A and a in the same way?
</li>

<li>
  How could the whole tree name be converted into one consistent letter
  case before checking its characters?
</li>

<li>
  Calculate the score of a short tree name manually. Record each letter's
  category and keep a running total after every letter.
</li>

<li>
  Once all letters have been processed, what must the program do with the
  final score?
</li>

<li>
  Draw the three growth ranges on paper. Where do the boundary values
  24, 25, 35 and 36 belong?
</li>

<li>
  In what order could the program test the score ranges so that each score
  receives exactly one growth speed?
</li>

<li>
  Does the required output contain the calculated score, or only the
  tree's growth classification?
</li>

<li>
  Test your reasoning with the names Acacia and Pinetree. For each name,
  list the letters, classify them, calculate the total and then determine
  the correct growth range.
</li>

<li>
  Test a name written entirely in uppercase. Does the program produce the
  same result as it does for the lowercase version?
</li>

<li>
  Review your Java syntax. Are the brackets matched, are statements
  completed with semicolons, and are character values written correctly?
</li>


  </ol>

</section>


<section class="documentation-section">

  <h4>3. Level 3 Challenge 1 Hints</h4>

  <ol>
    <li>
      What three values must the program receive, and what does each value
      represent?
    </li>


<li>
  In what order are the length, width and number of folds entered?
</li>

<li>
  The given length and width describe the sheet while it is folded. What
  measurement can you calculate immediately from these two values?
</li>

<li>
  What mathematical operation is used to find the area of a rectangle?
</li>

<li>
  Take a piece of paper and fold it once. Compare the visible folded area
  with the area after opening that one fold. What relationship do you
  notice?
</li>

<li>
  Try the same experiment with a piece of paper folded twice. Does opening
  each fold change the area in the same way?
</li>

<li>
  Begin with a small folded area, such as 10 square centimetres. Write down
  what happens to the area after the first, second and third unfoldings.
  What pattern appears?
</li>

<li>
  Which value changes while the sheet is being unfolded: the number of
  folds, the calculated area, or both?
</li>

<li>
  Does the program need to know whether the sheet was folded along its
  length or its width if it only needs to calculate the final area?
</li>

<li>
  If the sheet has been folded several times, what programming structure
  could repeat the unfolding calculation once for every fold?
</li>

<li>
  What should control how many times that repetition occurs?
</li>

<li>
  Should the area calculated during one repetition replace the previous
  area, or should it build from the area already calculated?
</li>

<li>
  What should happen when the number of folds is zero? Should the unfolding
  calculation run at all?
</li>

<li>
  Use the example with length 250, width 250 and zero folds. Does your
  reasoning leave the original folded area unchanged?
</li>

<li>
  Work through the example with length 70, width 95 and two folds on paper.
  Begin with the folded area and show how it changes after each unfolding.
</li>

<li>
  How many variables are needed to store the three inputs? Do you also need
  another variable to keep the changing area?
</li>

<li>
  Does the required output contain explanatory words, or should it contain
  only the final area as a number?
</li>

<li>
  Remember that length and width are measured in centimetres. What unit
  should be used for the calculated area?
</li>

<li>
  Test your program using these input sets:
  11 15 1 and 38 51 4. Calculate the expected results on paper before
  running the program.
</li>

<li>
  Review your Java syntax. Are all brackets matched, are statements
  completed with semicolons, and are the variable names written
  consistently?
</li>


  </ol>

</section>


<section class="documentation-section">

  <h4>3. Level 3 Challenge 2 Hints</h4>

  <ol>
    <li>
      What two values must the program receive, and what does each value
      represent?
    </li>


<li>
  Look at the example inputs. Are the coordinates always whole numbers, or
  can they contain decimal values?
</li>

<li>
  Which Java data type would be suitable for storing coordinates such as
  0.9, 0.53 and -0.55?
</li>

<li>
  Draw a circle with its centre at (0, 0). Place several points inside,
  directly on, and outside the circle. What must the program determine for
  every point?
</li>

<li>
  The problem provides a mathematical method for finding the distance from
  a point to the centre. Which values from the input are used in this
  calculation?
</li>

<li>
  What does it mean to square a coordinate? Try squaring 0.5, 1 and -0.5
  on paper.
</li>

<li>
  Does squaring a negative coordinate produce a negative or positive
  result? How does this affect points with negative coordinates?
</li>

<li>
  Work through the point (0.1, 0.3) manually. After applying the distance
  calculation, is the point less than, equal to, or more than one unit from
  the centre?
</li>

<li>
  Work through the point (0.9, 0.53) manually. Why does this point receive
  a different colour from the first example?
</li>

<li>
  The radius of the circle is 1. What comparison separates points outside
  the circle from points inside it?
</li>

<li>
  What should happen when the distance is exactly equal to 1? Carefully
  check which colour the instructions assign to a point on the circle.
</li>

<li>
  How many possible outputs are there? What decision-making structure can
  select between these two outputs?
</li>

<li>
  Do you need separate decisions for points inside and points on the
  circle, or do both cases produce the same result?
</li>

<li>
  Since both sides of the distance comparison involve non-negative values,
  can you compare the squared values instead? Consider whether this would
  change which side of the circle a point lies on.
</li>

<li>
  If you compare squared values, what is the square of the circle's radius?
</li>

<li>
  Does the required output include the coordinates or calculated distance,
  or should it display only the appropriate colour?
</li>

<li>
  Make sure the output matches the required spelling and capitalisation.
  Would "Blue" be treated the same as "BLUE"?
</li>

<li>
  Test your reasoning using these coordinate pairs:
  0.9 0.8, 0.2 0.96, -0.5 0.87 and 0.83 -0.55.
  Calculate each result on paper before running the program.
</li>

<li>
  Add your own boundary tests. What should the program output for points
  such as (1, 0), (0, 1) and (0, 0)?
</li>

<li>
  Review your Java syntax. Are the brackets matched, are statements
  completed with semicolons, and are the variable names written
  consistently?
</li>


  </ol>

</section>

<section class="documentation-section">

  <h4>4. Level 4 Challenge 1 Hints</h4>

  <ol>
    <li>
      What two pieces of information must the program receive before it can
      check the DNA?
    </li>


<li>
  What does the first DNA string represent, and what does the second DNA
  string represent?
</li>

<li>
  Write the four DNA characters on paper. Which character is opposite to
  A, T, G and C?
</li>

<li>
  Look at the two DNA strings position by position. Which character in the
  backup strand must be compared with the first character in the original
  strand?
</li>

<li>
  Should the first character of one strand ever be compared with the
  second or third character of the other strand?
</li>

<li>
  How many characters does each DNA strand contain, and how many
  comparisons must the program perform?
</li>

<li>
  Since the same type of comparison must be performed at every position,
  what programming structure could repeat this process?
</li>

<li>
  How can the program retrieve a character from a particular position in
  a string?
</li>

<li>
  For one position, what combinations of original and backup characters
  should be accepted as correct?
</li>

<li>
  Is checking only that the two characters are different enough? Consider
  whether A and C are different but still valid opposites.
</li>

<li>
  Can you create one condition that becomes true when the two current
  characters form a correct opposite pair?
</li>

<li>
  What should the program conclude when one pair of corresponding
  characters is not opposite?
</li>

<li>
  If corruption is found at one position, can later correct characters
  make the entire DNA strand valid again?
</li>

<li>
  What variable could remember whether an incorrect pair has been found
  while the program moves through the strings?
</li>

<li>
  What initial value should this variable have before any characters have
  been checked?
</li>

<li>
  When an incorrect pair is discovered, how should the value of this
  variable change?
</li>

<li>
  Once corruption has been found, is there any need to continue checking
  the remaining characters?
</li>

<li>
  Work through the example ACTAG and TGATC on paper. Compare the characters
  at each matching position and record whether each pair is valid.
</li>

<li>
  Work through GTACG and CACGC. At which position does the first incorrect
  pair appear?
</li>

<li>
  After all necessary comparisons have been completed, what two possible
  results can the program display?
</li>

<li>
  Check the required spelling and capitalisation carefully. Should the
  program print "Ok", "Corrupted", or the exact uppercase words shown in
  the instructions?
</li>

<li>
  Test your program using these DNA pairs:
  ACACA TGTCT, ATGGC GCCAT, TCGCT AGCGA and TTGAC TTGAC.
  Predict each result on paper before running the code.
</li>

<li>
  Create an additional test where only the final pair is incorrect. Does
  the program still detect the corruption?
</li>

<li>
  Review your Java syntax. Are the brackets matched, are statements
  completed with semicolons, and are character values placed inside single
  quotation marks?
</li>


  </ol>

</section>


<section class="documentation-section">

  <h4>4. Level 4 Challenge 2 Hints</h4>

  <p>
    Use paper to simulate the sandpile before writing the program. Work through
    one avalanche at a time and record every change.
  </p>

  <ol>
    <li>
      What does the first input value represent, and how many heights should
      the program read after receiving it?
    </li>


<li>
  The number of heights is not known before the program runs. What kind of
  container could store all the heights?
</li>

<li>
  If the table has length 5, which positions in the container represent
  the first and last places on the table?
</li>

<li>
  Select one position in a sandpile. Which two neighbouring heights must
  be considered before deciding whether it should avalanche?
</li>

<li>
  What does “more than a unit taller” mean mathematically? Test your
  interpretation using heights 4 and 2, then heights 4 and 3.
</li>

<li>
  Does a position need to be too tall compared with both neighbours, or is
  being too tall compared with either neighbour enough to cause an
  avalanche?
</li>

<li>
  How should the program treat the space immediately outside the left and
  right edges of the table?
</li>

<li>
  For a position in the middle of the table, how can the program find the
  height immediately to its left?
</li>

<li>
  How can the program find the height immediately to its right?
</li>

<li>
  What problem could occur if the program attempts to retrieve a position
  to the left of the first height?
</li>

<li>
  What problem could occur if it attempts to retrieve a position to the
  right of the final height?
</li>

<li>
  How can the program recognise that the current position is on the left
  or right edge before accessing a neighbour?
</li>

<li>
  When one position avalanches, how many units leave that position?
</li>

<li>
  Where does each of those units attempt to move?
</li>

<li>
  For a position in the middle of the table, does any sand leave the table
  during that avalanche?
</li>

<li>
  What happens to the unit that moves left when the first position on the
  table avalanches?
</li>

<li>
  What happens to the unit that moves right when the final position
  avalanches?
</li>

<li>
  Simulate one avalanche in the pile 1 4 1. Which position is unstable,
  and what are the three heights immediately after it avalanches?
</li>

<li>
  After changing those heights, is the sandpile guaranteed to be stable,
  or could the change cause another position to avalanche?
</li>

<li>
  Why would checking every position only once be insufficient for some
  sandpiles?
</li>

<li>
  What must be true about an entire pass through the sandpile before the
  program can conclude that the pile is stable?
</li>

<li>
  What kind of variable could remember whether at least one avalanche
  occurred during the current pass?
</li>

<li>
  At the beginning of each new pass, what should the program initially
  assume about the sandpile?
</li>

<li>
  If an avalanche occurs during that pass, how should that assumption
  change?
</li>

<li>
  The provided avalanche method returns either true or false. What useful
  information could that result communicate to the main simulation?
</li>

<li>
  When should the avalanche method return false?
</li>

<li>
  When should the avalanche method return true?
</li>

<li>
  Before any avalanches occur, how could you calculate the total amount of
  sand currently on the table?
</li>

<li>
  What repeated operation is needed to calculate the total of all values
  stored in the list?
</li>

<li>
  After the sandpile becomes stable, how could you calculate the amount of
  sand still remaining on the table?
</li>

<li>
  If sand can disappear only by falling from an edge, what relationship
  exists between the starting total, the ending total and the amount that
  fell?
</li>

<li>
  Why is it unnecessary to count every falling unit separately if the
  starting and ending totals are known?
</li>

<li>
  Work through the pile 3 2 1 manually. Continue applying avalanches until
  no position is unstable. Compare the starting and ending totals.
</li>

<li>
  Test a pile that is already stable. Should the starting and ending totals
  be different?
</li>

<li>
  Test a table containing only one position. Remember that both sides of
  this position are edges with height zero.
</li>

<li>
  Test your program using the following cases:
  3 with heights 3 1 2,
  5 with heights 1 1 6 1 1,
  4 with heights 4 3 2 1,
  and 5 with heights 1 7 1 7 1.
</li>

<li>
  For every test, write down the starting total, simulate the changes, find
  the ending total and predict the output before running the program.
</li>

<li>
  Does the required output contain an explanation, or should it print only
  the amount of sand that fell?
</li>

<li>
  Review your Java syntax. Are list positions valid, are brackets matched,
  are statements completed with semicolons, and are method return values
  handled correctly?
</li>


  </ol>

</section>



<section class="documentation-section">
  

<h4>5. Level 5 Challenge 1 Hints</h4>

  

  <ol>
    <li>
      What single value must the program receive from the user?
    </li>


<li>
  Does the input represent a Fibonacci value, or does it represent a
  position in the sequence?
</li>

<li>
  Write the first eight Fibonacci numbers on paper and number their
  positions starting from 1.
</li>

<li>
  What values are found at positions 1 and 2?
</li>

<li>
  Why might positions 1 and 2 need to be considered before repeating the
  usual Fibonacci calculation?
</li>

<li>
  To calculate the number at position 3, which earlier values are needed?
</li>

<li>
  To calculate the number at position 4, which two values are needed?
</li>

<li>
  Does calculating a new Fibonacci number require the whole sequence, or
  only a small number of the most recent values?
</li>

<li>
  What variables could remember the two values needed to calculate the next
  number?
</li>

<li>
  After adding the two previous values, where should the newly calculated
  value be stored temporarily?
</li>

<li>
  Before calculating another number, which older value is no longer
  needed?
</li>

<li>
  How should the two remembered values move forward after a new Fibonacci
  number has been calculated?
</li>

<li>
  Be careful about the order in which the variables are updated. What could
  go wrong if one previous value is overwritten before it has been used?
</li>

<li>
  Since the same calculation is repeated until position N is reached, what
  programming structure would be suitable?
</li>

<li>
  At which Fibonacci position should the repeated calculation begin if the
  first two values are already known?
</li>

<li>
  What condition should stop the repetition at exactly the requested
  position?
</li>

<li>
  Trace your variables manually for N = 3. Does the final value become 2?
</li>

<li>
  Trace them again for N = 6. Do the remembered values move through
  1, 1, 2, 3, 5 and 8 correctly?
</li>

<li>
  What should the program output when N is 1? What should it output when
  N is 2?
</li>

<li>
  Does the required output contain an explanation or sequence, or only the
  Fibonacci number at position N?
</li>

<li>
  Test your program with small inputs first, such as 1, 2, 3, 4 and 6.
  These make it easier to find an incorrect starting position or loop
  boundary.
</li>

<li>
  After the small tests work, test larger valid inputs such as 10, 21, 36
  and 45.
</li>

<li>
  The challenge limits N to values from 1 through 45. Should the value 111
  be used as a valid test for this problem?
</li>

<li>
  Check whether the program performs one calculation at a time rather than
  repeatedly calculating Fibonacci numbers that were already found.
</li>

<li>
  Review your Java syntax. Are the brackets matched, are statements
  completed with semicolons, and are variables updated in the correct
  order?
</li>

<li>
  Confirm that a result is printed for both the early positions and the
  positions that require repetition.
</li>


  </ol>

</section>


    

   <section class="documentation-section">

  <h4>5. Level 5 Challenge 2 Hints</h4>

  <ol>
    <li>
      What single value must the program receive from the user?
    </li>


<li>
  Write down all eight South African coin and note values mentioned in the
  challenge.
</li>

<li>
  What does it mean for a teller to use the smallest possible number of
  coins and notes?
</li>

<li>
  For R6, compare using three R2 coins with using one R5 coin and one R1
  coin. Which option uses fewer items?
</li>

<li>
  When making a large amount of change, should the teller begin with the
  smallest denomination or the largest denomination? Test both approaches
  on paper.
</li>

<li>
  Suppose the amount is R486. How many R200 notes can be used without
  exceeding the amount?
</li>

<li>
  Which mathematical operation tells you how many times one whole value
  fits inside another?
</li>

<li>
  After selecting the R200 notes for R486, how much money still needs to
  be changed?
</li>

<li>
  Which mathematical operation can calculate the amount left after taking
  as many notes of one denomination as possible?
</li>

<li>
  Once one denomination has been processed, which denomination should be
  considered next?
</li>

<li>
  Should the program continue using the original amount throughout the
  calculation, or should it continue with the amount still remaining?
</li>

<li>
  Since the same calculation must be performed for eight denominations,
  what programming structure could avoid writing the same code eight
  times?
</li>

<li>
  What type of structure could store all eight denomination values in one
  place?
</li>

<li>
  What second structure could store how many of each coin or note is
  required?
</li>

<li>
  How can the position of a denomination in the first structure correspond
  to the position of its count in the second structure?
</li>

<li>
  In which order should the denominations be stored to make the
  minimum-item calculation easier?
</li>

<li>
  Look carefully at the required output. Is it printed in the same order
  in which the denominations are most conveniently processed?
</li>

<li>
  The program may calculate from the largest denomination downwards, but
  the answer must begin with R1. How could the counts be visited in the
  opposite direction when printing?
</li>

<li>
  How many integers must appear in every output, even when some
  denominations are not used?
</li>

<li>
  If no R50 notes are required, should the program skip that position or
  print zero?
</li>

<li>
  How many spaces should separate the eight output values?
</li>

<li>
  Should there be labels such as "R1" and "R2" in the output, or only the
  eight counts?
</li>

<li>
  Work through an amount of R6 on paper. Record the count for every
  denomination, including those that are not used.
</li>

<li>
  Work through R4. Why should the output show two R2 coins instead of four
  R1 coins?
</li>

<li>
  Test a boundary amount such as R1. Which one of the eight output
  positions should contain 1?
</li>

<li>
  Test R200. Which output position should contain 1, and which positions
  should contain zero?
</li>

<li>
  Test an amount that uses several denominations, such as R388. Calculate
  the expected counts manually before running the program.
</li>

<li>
  Test your program using 10, 21, 36 and 111. For each amount, write the
  eight expected counts in the required order before checking your code.
</li>

<li>
  After all denominations have been processed, what should be true about
  the amount still remaining?
</li>

<li>
  Review your Java syntax. Are the array positions valid, are statements
  completed with semicolons, and does the printing loop move in the correct
  direction?
</li>

<li>
  Confirm that your program prints exactly eight space-separated integers
  and no additional explanatory text.
</li>


  </ol>
</section>



<section class="documentation-section">

  <h4>6. Level 6 Challenge 1 Hints</h4>

  <ol>
    <li>
      What two words must the program receive, and which one represents the
      correct answer?
    </li>


<li>
  The two words always have the same length. How can the program determine
  how many positions must be examined?
</li>

<li>
  What three symbols can appear in the final output, and what does each
  symbol represent?
</li>

<li>
  Write the target word above the guessed word on paper so that characters
  at matching positions are directly below each other.
</li>

<li>
  Which colour can be determined immediately by comparing characters at
  the same position?
</li>

<li>
  How can the program access the character found at a particular position
  in each word?
</li>

<li>
  Since every position must be examined, what programming structure could
  repeat the comparison?
</li>

<li>
  If the target and guessed characters at one position are identical,
  which symbol should be recorded for that position?
</li>

<li>
  Once a letter has received a green match, should that occurrence of the
  target letter still be available for another guessed letter?
</li>

<li>
  Why might checking for yellow letters before identifying all green
  letters cause an incorrect result?
</li>

<li>
  Consider a target word containing one letter A and a guess containing
  two letters A. Should both guessed letters automatically receive yellow?
</li>

<li>
  What information must the program remember about target letters that
  have not already been used by green matches?
</li>

<li>
  Since the words contain only uppercase letters from A to Z, how many
  different possible letters must the program track?
</li>

<li>
  What type of structure could store how many unused occurrences remain
  for each letter?
</li>

<li>
  How could each uppercase letter be connected to a numbered position in
  that structure?
</li>

<li>
  During an initial pass through the words, what should happen when the
  characters at the current position match exactly?
</li>

<li>
  During that same pass, what information should be recorded when the
  target character does not match the guessed character?
</li>

<li>
  What temporary symbol could mark a guessed position whose final colour
  has not yet been decided?
</li>

<li>
  After all green positions have been identified, which positions still
  need to be checked for possible yellow matches?
</li>

<li>
  How can the program determine whether an unmatched guessed letter still
  occurs among the unused target letters?
</li>

<li>
  If an unused occurrence exists, which symbol should be assigned to the
  guessed position?
</li>

<li>
  After assigning yellow, why must the number of available occurrences of
  that letter be reduced?
</li>

<li>
  If no unused occurrence remains, which symbol should stay at that
  position?
</li>

<li>
  Why are two passes through the words useful for this challenge?
</li>

<li>
  What structure could store one output symbol for every position in the
  guessed word?
</li>

<li>
  Work through the words MUSIC and MOUSE on paper. Identify exact matches
  first, then examine the remaining letters.
</li>

<li>
  Work through BBQERS and BUBBLE carefully. Which repeated letters make
  this example more difficult than a simple position comparison?
</li>

<li>
  Test a case where the target contains one copy of a letter but the guess
  contains several copies. Make sure the letter is not awarded more times
  than it occurs in the target.
</li>

<li>
  Test two identical words. What should every output position contain?
</li>

<li>
  Test two words that share no letters. What should every output position
  contain?
</li>

<li>
  Test two words containing the same letters arranged in different
  positions. Which symbols would you expect?
</li>

<li>
  Does the required output include the target word, the guessed word or an
  explanation, or should it contain only the colour-coding symbols?
</li>

<li>
  Confirm that the number of output symbols is exactly equal to the length
  of the input words.
</li>

<li>
  Check the required capitalisation carefully. The program must distinguish
  between G, Y and the hyphen symbol.
</li>

<li>
  Review your Java syntax. Are array positions valid, are brackets matched,
  are statements completed with semicolons, and are characters written
  inside single quotation marks?
</li>


  </ol>
</section>


  <section class="documentation-section">

  <h4>6. Level 6 Challenge 2 Hints</h4>

  <ol>
    <li>
      What temperature is measured once, and which temperature is measured
      several times?
    </li>


<li>
  How many fuel-temperature measurements must the program receive?
</li>

<li>
  In what order do the ambient temperature and fuel temperatures appear in
  the input?
</li>

<li>
  Since all the temperatures are whole numbers, which Java data type could
  store them?
</li>

<li>
  What does it mean for a fuel temperature to be 10°C less than the ambient
  temperature?
</li>

<li>
  Write an ambient temperature of 30°C on paper. Which fuel temperatures
  are exactly 10°C lower, and which are more than 10°C lower?
</li>

<li>
  Look carefully at the second example. Why does a fuel temperature of
  20°C not produce "Low" when the ambient temperature is 30°C?
</li>

<li>
  Based on that example, should the program treat a difference of exactly
  10°C as suspicious?
</li>

<li>
  What comparison would distinguish a temperature that is more than 10°C
  below the ambient temperature from one that is exactly 10°C below it?
</li>

<li>
  Could you test the fuel temperature against a temperature limit calculated
  from the ambient temperature?
</li>

<li>
  Could you instead calculate the difference between the ambient and fuel
  temperatures? Would both approaches produce the same decision?
</li>

<li>
  The team is suspected if any one of the three measurements meets the
  suspicious condition. Does every measurement need to be suspicious?
</li>

<li>
  What should the final result be if only the first fuel measurement is
  suspicious?
</li>

<li>
  What should the result be if only the final fuel measurement is
  suspicious?
</li>

<li>
  What kind of variable could remember whether a suspicious measurement
  has been found?
</li>

<li>
  Before reading the fuel measurements, what should the program initially
  assume about the team?
</li>

<li>
  How should that assumption change when a suspicious temperature is
  discovered?
</li>

<li>
  If a later measurement is not suspicious, should it erase the fact that
  an earlier suspicious measurement was found?
</li>

<li>
  Since the same check must be performed exactly three times, what
  programming structure could avoid repeating the same code?
</li>

<li>
  What should control the number of repetitions?
</li>

<li>
  Does the program need to store all three fuel temperatures, or can each
  value be checked immediately after it is read?
</li>

<li>
  After all three measurements have been checked, what two possible results
  can the program display?
</li>

<li>
  The evaluator is case-sensitive. Are "LOW", "low" and "Low" treated as
  the same output?
</li>

<li>
  Check the exact spelling of the safe result. Should the program output
  "OK", "Okay" or "Ok"?
</li>

<li>
  Work through the first example on paper. For an ambient temperature of
  28°C, compare each of the values 13°C, 25°C and 19°C with the suspicious
  limit.
</li>

<li>
  Work through the second example carefully. Which measurements are
  exactly 10°C below the ambient temperature, and why does the result remain
  "Ok"?
</li>

<li>
  Test the program with an ambient temperature of 40°C and fuel
  temperatures of 30°C, 31°C and 40°C. What should happen at the exact
  boundary?
</li>

<li>
  Test it again with an ambient temperature of 40°C and fuel temperatures
  of 29°C, 35°C and 40°C. How should one suspicious value affect the final
  answer?
</li>

<li>
  Test a case where all three fuel temperatures are higher than the ambient
  temperature. Should any of them be considered suspicious?
</li>

<li>
  Does the required output contain the temperatures or an explanation, or
  should it contain only one word?
</li>

<li>
  Review your Java syntax. Are the brackets matched, are statements
  completed with semicolons, and are variable names written consistently?
</li>

<li>
  Confirm that all three fuel temperatures are read and that the final
  result is printed only after the required measurements have been checked.
</li>


  </ol>
</section>





   <section class="documentation-section">

  <h4>7. Level 7 Challenge 1 Hints</h4>

  <p>
    First solve the problem for a chosen number of cakes. Only then think about
    how to find the greatest number that can be afforded.
  </p>

  <ol>
    <li>
      What seven values must the program receive from the input?
    </li>


<li>
  Which four values describe the resources currently available, and which
  three values describe the recipe for one cake?
</li>

<li>
  Suppose you decide to make a particular number of cakes. How could you
  calculate the total eggs required?
</li>

<li>
  How would the same calculation be performed for milk and flour?
</li>

<li>
  For a chosen number of cakes, compare the required quantity of each
  ingredient with the quantity already available.
</li>

<li>
  If the required number of eggs is smaller than the number already
  available, how many eggs must be purchased?
</li>

<li>
  Could subtracting the available amount from the required amount ever
  produce a negative answer?
</li>

<li>
  Since a negative number of missing ingredients is impossible, how could
  the program ensure that a missing quantity never falls below zero?
</li>

<li>
  Perform the missing-ingredient calculation separately for eggs, milk and
  flour.
</li>

<li>
  Once the missing quantities are known, how can the program calculate the
  cost of buying the missing eggs?
</li>

<li>
  How can it calculate the costs of the missing milk and flour?
</li>

<li>
  What must be done with the three ingredient costs to find the total amount
  needed?
</li>

<li>
  How can the program decide whether the chosen number of cakes is
  affordable?
</li>

<li>
  If the required cost is exactly equal to the available money, should that
  number of cakes be considered possible?
</li>

<li>
  Would a separate method that receives a number of cakes and returns its
  purchasing cost make the main problem easier to understand?
</li>

<li>
  What information would such a method need in order to calculate the
  missing ingredients?
</li>

<li>
  Test your cost calculation using the first example and a target of two
  cakes. Are any ingredients missing?
</li>

<li>
  Test the same example using a target of three cakes. Which ingredients
  are missing, and what would they cost?
</li>

<li>
  Now use the second example. Why are three cakes affordable when R40 is
  available?
</li>

<li>
  Is a fourth cake affordable in that example? Calculate the missing
  ingredients and their total cost on paper.
</li>

<li>
  As the chosen number of cakes increases, can the cost of the missing
  ingredients ever decrease?
</li>

<li>
  If a particular number of cakes is affordable, what can you conclude
  about every smaller number of cakes?
</li>

<li>
  If a particular number of cakes is too expensive, what can you conclude
  about every larger number of cakes?
</li>

<li>
  This creates two regions: affordable values followed by unaffordable
  values. What searching method is suitable for finding the boundary
  between two ordered regions?
</li>

<li>
  What should the lower search boundary initially represent?
</li>

<li>
  Is making zero cakes always possible, regardless of the available
  ingredients and money?
</li>

<li>
  How can the program choose an upper search boundary when the maximum
  number of cakes is not immediately known?
</li>

<li>
  Could the program begin with a small upper boundary and repeatedly enlarge
  it while that number of cakes remains affordable?
</li>

<li>
  Once an unaffordable upper boundary has been found, what do you know about
  the location of the maximum affordable answer?
</li>

<li>
  How can the middle of the current search range be calculated?
</li>

<li>
  When the middle value is affordable, should the search continue below it
  or above it?
</li>

<li>
  When the middle value is unaffordable, which part of the search range can
  be discarded?
</li>

<li>
  How can the middle value be chosen so that a two-value search range does
  not repeat forever?
</li>

<li>
  What condition indicates that the lower and upper search boundaries have
  reached the final answer?
</li>

<li>
  Why would checking 0 cakes, 1 cake, 2 cakes and so on individually be
  inefficient when the possible answer is large?
</li>

<li>
  The input values can reach one million. Could multiplying two valid
  values produce a number too large for an <code>int</code>?
</li>

<li>
  Which Java whole-number type can safely store larger ingredient totals,
  purchasing costs and search boundaries?
</li>

<li>
  Test the case where the available ingredients already support several
  cakes and no money is available. Which ingredient limits production?
</li>

<li>
  Test a case where all stored ingredients are zero but some money is
  available. Can the same cost calculation still be used?
</li>

<li>
  Test a case where one ingredient is plentiful but another is completely
  unavailable. Does the program calculate only the ingredients that must
  actually be purchased?
</li>

<li>
  Test a case where the money is exactly enough for one additional cake.
  Does the program accept equality correctly?
</li>

<li>
  Does the required output contain a description, ingredient quantities or
  purchasing costs, or should it contain only the maximum number of cakes?
</li>

<li>
  Review your Java syntax. Are method parameters in the correct order, are
  brackets matched, are statements completed with semicolons, and are the
  returned values stored using a suitable data type?
</li>

<li>
  Confirm that the value printed by the program is affordable and that the
  next larger number of cakes is not affordable.
</li>

<section class="documentation-section">

  <h4>7. Level 7 Challenge 2 Hints</h4>

  <p>
    Begin by arranging and pairing a small number of pizza prices on paper.
    Compare different pairings before deciding which approach gives the lowest
    total cost.
  </p>

  <ol>
    <li>
      What does the first input value tell the program?
    </li>


<li>
  How many pizza prices should the program read after receiving this value?
</li>

<li>
  What does the 2-for-1 rule allow the group to receive after paying for
  one pizza?
</li>

<li>
  Can the free pizza be more expensive than the pizza that was paid for?
</li>

<li>
  If two pizzas are paired together, which of their two prices must be
  paid?
</li>

<li>
  Suppose two pizzas cost R40 and R70. Can the group pay R40 and receive
  the R70 pizza for free?
</li>

<li>
  Which pizza would have to be paid for in that pair?
</li>

<li>
  Since every paid pizza can cover one other pizza, how many pizzas should
  be paid for when the group contains six people?
</li>

<li>
  More generally, what fraction of the pizzas will the group pay for?
</li>

<li>
  The pizza prices are already sorted. In what order are they given?
</li>

<li>
  How does having the prices in sorted order help when deciding which
  pizzas should be paired?
</li>

<li>
  Start with four pizza prices: 10, 20, 30 and 40. Try pairing 10 with 40
  and 20 with 30. What is the total amount paid?
</li>

<li>
  Now pair 10 with 20 and 30 with 40. What is the new total amount paid?
</li>

<li>
  Which of those two pairing arrangements is cheaper?
</li>

<li>
  What happens when a very expensive pizza is paired with a very cheap
  pizza? Which price must still be paid?
</li>

<li>
  Could pairing two expensive pizzas allow one expensive pizza to become
  free?
</li>

<li>
  Based on your paper experiments, should expensive pizzas generally be
  paired with cheap pizzas or with pizzas close to their own value?
</li>

<li>
  Examine two neighbouring prices in the sorted list. If they form one
  pair, which of the two contributes to the total cost?
</li>

<li>
  Write the example prices in pairs:
  101 and 129, 145 and 150, 160 and 169.
  Which value must be paid in each pair?
</li>

<li>
  Add the paid values from those pairs. Does the result match the example
  output?
</li>

<li>
  If the first price is stored at position zero, which positions represent
  the prices that must be paid?
</li>

<li>
  What pattern do those positions follow?
</li>

<li>
  How could the remainder operator help the program identify alternating
  positions?
</li>

<li>
  Could a loop instead move through the prices two positions at a time?
</li>

<li>
  Does the program need to store every pizza price, or can it decide
  whether to add a price as soon as that price is read?
</li>

<li>
  What variable is needed to keep the running total of all pizzas that
  must be paid for?
</li>

<li>
  What should the initial value of this total be before any prices are
  processed?
</li>

<li>
  When the current pizza is one that must be paid for, what should happen
  to the running total?
</li>

<li>
  When the current pizza is free, should its price affect the running
  total?
</li>

<li>
  Why is adding every pizza price incorrect for this problem?
</li>

<li>
  Why is adding only the cheaper pizza from each pair also incorrect?
</li>

<li>
  Pizza prices can be as large as one billion, and there can be up to
  200,000 pizzas. Could the final total exceed the maximum value of a Java
  <code>int</code>?
</li>

<li>
  Which Java whole-number type should be used for pizza prices and the
  total cost?
</li>

<li>
  Can the number of pizzas itself be stored safely in an
  <code>int</code>?
</li>

<li>
  Test two pizzas with prices 50 and 50. Which one is paid for, and what is
  the final total?
</li>

<li>
  Test four pizzas with prices 1, 2, 100 and 101. Compare the result of
  pairing neighbouring prices with the result of pairing the cheapest and
  most expensive prices.
</li>

<li>
  Test six pizzas with prices 5, 5, 5, 5, 5 and 5. How many of the prices
  should contribute to the total?
</li>

<li>
  Test eight pizzas with prices 10, 21, 36, 50, 72, 90, 111 and 140.
  Form the pairs on paper and predict the minimum total before running the
  program.
</li>

<li>
  Confirm that the program reads exactly the number of prices specified by
  the first input value.
</li>

<li>
  Does the required output contain the selected prices or an explanation,
  or should it contain only the minimum total?
</li>

<li>
  Review your Java syntax. Are the loop boundaries correct, are statements
  completed with semicolons, and is the running total stored using the
  correct data type?
</li>

<li>
  Finally, verify your answer by trying a different valid pairing. Can that
  pairing produce a lower total than the one selected by your program?
</li>


  </ol>
</section>



<section class="documentation-section">
  <h4>8. Level 8 Challenge 1 Hints</h4>

  <p>
    Begin by following the reaction of one jelly baby colour on paper. Do not
    attempt to calculate the entire reactor immediately.
  </p>

  <ol>
    <li>
      What does the first input value represent?
    </li>


<li>
  After reading the number of colours, how many starting quantities should
  the program receive?
</li>

<li>
  What does each value in the starting quantities represent?
</li>

<li>
  How many production rules must be read?
</li>

<li>
  For each colour, how many values describe the jelly babies it produces?
</li>

<li>
  What does the final value on each production-rule line represent?
</li>

<li>
  Would a one-dimensional structure be enough to store how many babies of
  every colour are produced by every other colour?
</li>

<li>
  What kind of structure could use one dimension for the exploding colour
  and another dimension for the produced colour?
</li>

<li>
  Should the number of jelly tots produced directly by each colour be
  stored together with the baby-production rules or in a separate
  structure?
</li>

<li>
  First consider one jelly baby that produces no new jelly babies. How many
  tots will eventually result from it?
</li>

<li>
  Now consider one red baby that directly produces one tot and two green
  babies. If each green baby eventually produces three tots, how many tots
  eventually result from the original red baby?
</li>

<li>
  Why is counting only the tots produced directly by the original colour
  insufficient?
</li>

<li>
  To calculate the result for one colour, what must be known about every
  new colour that it produces?
</li>

<li>
  Does this suggest that the calculation for one colour may need to call
  the same calculation for another colour?
</li>

<li>
  What programming technique allows a method to solve a problem by calling
  itself for smaller connected problems?
</li>

<li>
  What should the calculation for one colour use as its initial total?
</li>

<li>
  If one baby of the current colour produces several babies of another
  colour, how should the result of that other colour contribute to the
  total?
</li>

<li>
  Why must the number of produced babies be multiplied by the number of
  tots eventually produced by one baby of that colour?
</li>

<li>
  If a production quantity is zero, is there any reason to continue into
  that colour's calculation?
</li>

<li>
  Work through the first example beginning with one baby of the second
  colour. How many tots does it eventually produce?
</li>

<li>
  Next calculate the result of one baby of the first colour using the
  result you found for the second colour.
</li>

<li>
  Finally, how should the starting quantities of both colours affect the
  reactor's total?
</li>

<li>
  If several starting babies have the same colour, should the result for
  that colour be recalculated separately for every baby?
</li>

<li>
  What structure could remember a result that has already been completely
  calculated for a colour?
</li>

<li>
  How could remembering completed results prevent repeated work when
  several production paths reach the same colour?
</li>

<li>
  Consider a yellow baby that produces another yellow baby. Will the
  reaction ever reach a point where no jelly babies remain?
</li>

<li>
  Consider two colours where the first produces the second and the second
  produces the first. Does the reaction terminate?
</li>

<li>
  How could the colours and their production relationships be viewed as
  points connected by directed paths?
</li>

<li>
  In this model, what does a path from colour A to colour B mean?
</li>

<li>
  What does it mean when the calculation follows production paths and
  reaches a colour that is already part of the current unfinished path?
</li>

<li>
  Why does reaching such a colour indicate a cycle?
</li>

<li>
  Why would a reachable cycle cause the explosions to continue forever?
</li>

<li>
  If a reaction never ends, what value must the program output according
  to the instructions?
</li>

<li>
  Is it enough to record only whether a colour has ever been visited?
</li>

<li>
  How could the program distinguish between a colour whose calculation is
  currently in progress and one whose calculation has already been
  completed?
</li>

<li>
  Consider using three states for every colour: not visited, currently
  being calculated, and completely calculated. What does each state tell
  the program?
</li>

<li>
  What should happen when the calculation reaches a colour marked as
  currently being calculated?
</li>

<li>
  What should happen when it reaches a colour whose result has already been
  completely calculated?
</li>

<li>
  Before following the colours produced by the current colour, which state
  should be assigned to it?
</li>

<li>
  After all its production paths have been processed successfully, which
  state should the colour receive?
</li>

<li>
  At what point should the completed total for that colour be stored for
  future use?
</li>

<li>
  Should every cycle in the complete collection of production rules cause
  an answer of zero, or only a cycle that can be reached from a colour that
  is initially present?
</li>

<li>
  Why should the main calculation begin only from colours whose starting
  quantity is greater than zero?
</li>

<li>
  If an unreachable group of colours contains a cycle, can it affect the
  actual reaction inside the bioreactor?
</li>

<li>
  What kind of variable could remember that an infinite reaction has been
  discovered anywhere in the reachable calculation?
</li>

<li>
  Once an infinite reaction has been detected, is there any reason to
  continue calculating finite totals?
</li>

<li>
  What should the program print immediately after discovering that a
  reachable reaction never terminates?
</li>

<li>
  If no reachable cycle is found, how should the eventual result of one
  starting colour be included in the final total?
</li>

<li>
  Why must that result be multiplied by the initial number of babies of
  that colour?
</li>

<li>
  The quantities in the input can be as large as one billion. Could the
  final result exceed the range of a Java <code>int</code>?
</li>

<li>
  Which Java whole-number type should be used for starting quantities,
  production quantities, memoized results and the final total?
</li>

<li>
  Can the colour index and the number of colours still be stored using an
  <code>int</code>?
</li>

<li>
  Trace the first example on paper. Draw an arrow from one colour to
  another whenever a positive number of that colour is produced.
</li>

<li>
  Does the graph for the first example contain a reachable cycle?
</li>

<li>
  Calculate the eventual number of tots produced by one baby of each colour
  before applying the starting quantities.
</li>

<li>
  Trace the second example in the same way. Which production path returns
  to a colour that is already being processed?
</li>

<li>
  Why must the second example produce zero even though some explosions
  directly produce jelly tots?
</li>

<li>
  Test a single colour that produces only five jelly tots and no new
  babies. What should happen?
</li>

<li>
  Test a single colour that produces one baby of its own colour and one
  jelly tot. Does the reaction terminate?
</li>

<li>
  Test two colours where the first produces the second and the second
  produces no babies. Can the program correctly combine both stages?
</li>

<li>
  Test two colours where each one produces the other. Can the program
  detect that the current calculation has returned to an unfinished
  colour?
</li>

<li>
  Test a case where two different colours both produce a third colour.
  Is the third colour's result calculated once and then reused?
</li>

<li>
  Test a case containing a cycle that cannot be reached from any starting
  colour. Should that unused cycle change the answer?
</li>

<li>
  Does the required output contain reaction details or explanations, or
  should it contain only the final number of collectable jelly tots?
</li>

<li>
  Confirm that the final total is printed only after all reachable
  reactions have been shown to terminate.
</li>

<li>
  Review your Java syntax. Are array dimensions correct, are indices within
  range, are recursive results stored correctly, and are statements
  completed with semicolons?
</li>

<li>
  Finally, check that every recursive path ends in one of three ways: a new
  calculation, a previously completed result, or the detection of a cycle.
</li>


  </ol>
</section>


<section class="documentation-section">
  

<h4>8. Level 8 Challenge 2 Hints</h4>

  <p>
    Begin by drawing a timeline. For each second, record which raindrops reach
    the bucket level and where the bucket could be positioned.
  </p>

  <ol>
    <li>
      What two values are provided on the first line of input?
    </li>


<li>
  How many pairs of raindrop coordinates must the program read?
</li>

<li>
  Which coordinate of a raindrop changes as it falls?
</li>

<li>
  Does the horizontal coordinate of a raindrop ever change?
</li>

<li>
  A raindrop begins at height y and falls one unit at the end of every
  second. After how many seconds will it reach height 1?
</li>

<li>
  Test your reasoning with raindrops starting at heights 2, 3 and 5. At
  which second does each one reach the bucket?
</li>

<li>
  What information should the program store for every raindrop: its
  original height, or the second at which it can be collected?
</li>

<li>
  How can the program determine the final second during which any
  raindrop can be collected?
</li>

<li>
  Why is there no need to continue moving the bucket after the final
  raindrop has reached height 1?
</li>

<li>
  What does the bucket's position represent: its centre, its right
  endpoint or its left endpoint?
</li>

<li>
  If the bucket's left endpoint is at position p and its length is L,
  which horizontal coordinates does it cover?
</li>

<li>
  Draw a bucket of length 3 beginning at position 4. Which integer
  coordinates lie above the bucket?
</li>

<li>
  For a raindrop at horizontal position x, what must be true about p for
  the bucket to collect it?
</li>

<li>
  Instead of testing one bucket position, determine every possible left
  endpoint that would allow the bucket to collect a raindrop at x.
</li>

<li>
  What is the leftmost bucket position that can still cover x?
</li>

<li>
  What is the rightmost bucket position that can still cover x?
</li>

<li>
  How should those positions be restricted so that the left endpoint
  remains within the allowed range?
</li>

<li>
  Several raindrops may arrive during the same second. For a particular
  bucket position, how can the program determine how many of them would be
  collected?
</li>

<li>
  Could you build a table where each row represents a second and each
  column represents a possible bucket position?
</li>

<li>
  What would a value stored at
  <code>catches[time][position]</code> represent?
</li>

<li>
  A single raindrop can be caught by a continuous range of bucket
  positions. Would updating every position in that range separately be
  efficient for every raindrop?
</li>

<li>
  How could marking the beginning and end of a range help record that an
  event affects every position within that range?
</li>

<li>
  After marking all such ranges for one second, what running calculation
  could recover the number of catches available at each position?
</li>

<li>
  How could a difference array followed by cumulative totals reduce the
  amount of repeated work?
</li>

<li>
  Once the possible catches are known for every time and position, what
  decision must be made at each second?
</li>

<li>
  At the beginning, can the bucket be placed at any valid position, or
  must it travel there from an earlier position?
</li>

<li>
  After one second, how far may the bucket move before the next group of
  raindrops arrives?
</li>

<li>
  If the bucket is at position p during the current second, which positions
  could it have occupied during the previous second?
</li>

<li>
  Remember that the bucket may move left, move right or remain stationary.
  How many previous positions might need to be considered?
</li>

<li>
  What special checks are required when the bucket is at the leftmost or
  rightmost valid position?
</li>

<li>
  Suppose you know the best result for every possible position at the
  previous second. How could this information be used to find the best
  result for position p during the current second?
</li>

<li>
  Should the current second's catches replace the previous score or be
  added to it?
</li>

<li>
  What could
  <code>dp[time][position]</code> represent so that each new result can be
  built from earlier results?
</li>

<li>
  Which previous score should be selected before adding the catches
  available at the current position?
</li>

<li>
  Why is selecting only the best bucket position at each individual second
  not always correct?
</li>

<li>
  Could a position that catches fewer drops now allow the bucket to reach
  a much better position later?
</li>

<li>
  How does keeping a best score for every position avoid making a decision
  too early?
</li>

<li>
  After processing the final second, where in the final row of the table
  will the maximum number of collected raindrops be found?
</li>

<li>
  Is knowing the maximum number enough to receive full marks for this
  challenge?
</li>

<li>
  What additional information must the program print?
</li>

<li>
  While calculating the best score for a state, what information could be
  stored to remember which previous bucket position produced that score?
</li>

<li>
  What could
  <code>parent[time][position]</code> represent?
</li>

<li>
  Once the best final position is known, should the path be reconstructed
  from the first second forward or from the final second backward?
</li>

<li>
  How can the stored parent positions be followed to recover the complete
  path?
</li>

<li>
  Since reconstruction moves backward through time, how can the positions
  later be printed in chronological order?
</li>

<li>
  What should the second output line contain?
</li>

<li>
  How many bucket positions must be printed after the path length?
</li>

<li>
  Confirm that consecutive printed positions differ by no more than one.
</li>

<li>
  Confirm that every printed left endpoint is inside the permitted range.
</li>

<li>
  Trace the first example on paper. At which seconds do the four raindrops
  reach height 1?
</li>

<li>
  For each of those seconds, mark every bucket position that could catch
  the arriving raindrop.
</li>

<li>
  Check whether the example path 0, 1, 2, 1 obeys the movement rule.
</li>

<li>
  At each second of that path, which raindrop is collected?
</li>

<li>
  Trace the second example. Several raindrops arrive during the same
  second. Can one bucket position collect more than one of them?
</li>

<li>
  Test a case containing one raindrop. Which bucket positions are valid
  starting positions for collecting it?
</li>

<li>
  Test several raindrops that arrive at the same second and lie within one
  bucket-length interval. Can all of them be collected together?
</li>

<li>
  Test two raindrops that arrive in consecutive seconds but are too far
  apart for the bucket to reach both. How should the program choose between
  them?
</li>

<li>
  Test raindrops near horizontal positions 0 and 999. Do the bucket-range
  calculations remain inside valid array positions?
</li>

<li>
  Test a case containing seconds during which no raindrops arrive. Must the
  bucket still have a valid position during those seconds?
</li>

<li>
  Could movement during an empty second help the bucket reach a later
  raindrop?
</li>

<li>
  With up to 1000 seconds and 1000 possible positions, how many dynamic
  programming states are required?
</li>

<li>
  For each state, only a small number of previous positions are checked.
  Is this fast enough for the given limits?
</li>

<li>
  Why would checking every raindrop against every position at every second
  perform far more work than necessary?
</li>

<li>
  Does the required output contain explanations, or only the maximum,
  path length and bucket positions?
</li>

<li>
  Review your Java syntax. Are array dimensions large enough, are indices
  within range, are statements completed with semicolons, and are parent
  positions stored before reconstruction?
</li>

<li>
  Finally, verify both parts of the result: the reported maximum must match
  the drops collected by the printed path, and the printed path must obey
  every movement restriction.
</li>


  </ol>
</section>


  `,
};


const challenges = [
{
  id: 1,
  level: 1,
  challengeNumber: 1,
  totalChallengesInLevel: 2,

  title: "Checkered Boards",

  instruction:
    "Chess, checkers and many other games are played on checkered boards. Write a Java program that reads the side length S of an S by S checkered board and outputs the number of black squares. Assume that the top-right square is always black. Example 1: Input: 5, Output: 13. Example 2: Input: 8, Output: 32.",

  starterCode: `

public class Main {
    public static void main(String[] args) {

       // Calculate the number of black squares
    }
}`,

  expectedOutput: `Input: 5
Output: 13

Input: 8
Output: 32`,

  points: 100,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      (
        code.includes("nextInt()") ||
        code.includes("nextInt(")
      );

    const calculatesTotalSquares =
      code.includes("S * S") ||
      code.includes("S*S");

    const calculatesBlackSquares =
      code.includes("(S * S + 1) / 2") ||
      code.includes("(S*S+1)/2") ||
      code.includes("(S * S) / 2 + (S * S) % 2") ||
      code.includes("(S*S)/2+(S*S)%2") ||
      code.includes("Math.ceil");

    const printsAnswer =
      code.includes("System.out.println");

    return (
      readsInput &&
      calculatesTotalSquares &&
      calculatesBlackSquares &&
      printsAnswer
    );
  },
},
{
  id: 2,
  level: 1,
  challengeNumber: 2,
  totalChallengesInLevel: 2,

  title: "BMI",

  instruction: `Body Mass Index (BMI) is a commonly used metric in healthcare. The formula for BMI is:

BMI = Mass (kg) / Height² (m)

Write a program that receives input for the mass (kg) and height (m) of a patient and outputs their BMI rounded down to the nearest whole number.

Examples:
Input: 58 1.73 Answer: 19
Input: 82 1.82 Answer: 24

Tests your program with the following cases:

Give your answer as a number only with no spaces, e.g. 1234

1a) 40 1.47
1b) 120 1.76
1c) 100 2.20
1d) 228 1.90`,

  starterCode: `public class Main {
    public static void main(String[] args) {

        // Calculate the BMI and round it down
    }
}`,

  expectedOutput: `Examples:
Input: 58 1.73 Answer: 19
Input: 82 1.82 Answer: 24`,

  points: 220,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      (
        code.includes("nextDouble") ||
        code.includes("nextFloat")
      );

    const declaresMass =
      code.includes("double mass") ||
      code.includes("float mass");

    const declaresHeight =
      code.includes("double height") ||
      code.includes("float height");

    const calculatesHeightSquared =
      code.includes("height * height") ||
      code.includes("height*height") ||
      code.includes("Math.pow(height, 2)") ||
      code.includes("Math.pow(height,2)");

    const calculatesBMI =
      code.includes("mass /") ||
      code.includes("mass/");

    const roundsDown =
      code.includes("Math.floor");

    const storesWholeNumber =
      code.includes("int bmi") ||
      code.includes("long bmi") ||
      code.includes("(int)") ||
      code.includes("(long)");

    const printsResult =
      code.includes("System.out.println") &&
      code.includes("bmi");

    return (
      readsInput &&
      declaresMass &&
      declaresHeight &&
      calculatesHeightSquared &&
      calculatesBMI &&
      roundsDown &&
      storesWholeNumber &&
      printsResult
    );
  },
},
  {
  id: 3,
  level: 2,
  challengeNumber: 1,
  totalChallengesInLevel: 2,

  title: "Oshakati Heatwave Detector",

  instruction:
    "Oshakati has been experiencing a heatwave since November. A heatwave is a sequence of consecutive days where the temperature is at least 30°C. Write a Java program that first reads the number of days, then reads the temperature for each day, and outputs the length of the longest heatwave experienced in Oshakati. Example input: 7 28 31 33 29 35 36 37. Example output: Longest heatwave: 3 days.",

  starterCode: `

public class Main {
    public static void main(String[] args) {
      

        // Read each temperature and find the longest heatwave

     
    }
}`,

  expectedOutput: "Longest heatwave: 3 days",

  points: 140,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      code.includes("nextInt");

    const declaresDays =
      code.includes("int days");

    const declaresCounters =
      code.includes("int currentHeatwave") &&
      code.includes("int longestHeatwave");

    const usesLoop =
      code.includes("for") ||
      code.includes("while");

    const readsTemperature =
      code.includes("int temperature") &&
      (
        code.includes(
          "temperature = input.nextInt()"
        ) ||
        code.includes(
          "temperature=input.nextInt()"
        )
      );

    const checksHeatwaveTemperature =
      code.includes("temperature >= 30") ||
      code.includes("temperature>=30");

    const increasesCurrentHeatwave =
      code.includes("currentHeatwave++") ||
      code.includes("++currentHeatwave") ||
      code.includes("currentHeatwave += 1") ||
      code.includes("currentHeatwave+=1") ||
      code.includes(
        "currentHeatwave = currentHeatwave + 1"
      ) ||
      code.includes(
        "currentHeatwave=currentHeatwave+1"
      );

    const hasElseBranch =
      code.includes("else");

    const resetsAfterCoolDay =
      /else\s*\{[^}]*currentHeatwave\s*=\s*0\s*;/s.test(
        code
      );

    const comparesLongestHeatwave =
      code.includes(
        "currentHeatwave > longestHeatwave"
      ) ||
      code.includes(
        "currentHeatwave>longestHeatwave"
      ) ||
      code.includes("Math.max");

    const updatesLongestHeatwave =
      code.includes(
        "longestHeatwave = currentHeatwave"
      ) ||
      code.includes(
        "longestHeatwave=currentHeatwave"
      ) ||
      code.includes(
        "longestHeatwave = Math.max"
      ) ||
      code.includes(
        "longestHeatwave=Math.max"
      );

    const printsResult =
      code.includes("System.out.println") &&
      code.includes("Longest heatwave:") &&
      code.includes("longestHeatwave") &&
      code.includes('" days"');

    return (
      readsInput &&
      declaresDays &&
      declaresCounters &&
      usesLoop &&
      readsTemperature &&
      checksHeatwaveTemperature &&
      increasesCurrentHeatwave &&
      hasElseBranch &&
      resetsAfterCoolDay &&
      comparesLongestHeatwave &&
      updatesLongestHeatwave &&
      printsResult
    );
  },
},

{
  id: 4,
  level: 2,
  challengeNumber: 2,
  totalChallengesInLevel: 2,

  title: "Tree Growth",

  instruction: `In a virtual forest, a tree’s name determines its growth speed.

Each letter in the tree’s name is assigned a value as follows:

• Vowels (a, e, i, o, u) are 5 points each.
• Special consonants (b, c, d, f, g) are 3 points each.
• All other consonants are 2 points each.

The sum of these points determines the tree’s growth speed as follows:

Sum Points          Growth speed
Less than 25        Slow
25 to 35            Medium
Greater than 35     Fast

Task
Write a program which reads in the name of the tree and outputs the tree’s growth speed.

Examples:
Input: boabab
Output: Slow

Explanation: The sum points of boabab is 3 + 5 + 5 + 3 + 5 + 3 = 24. Since 24 is less than 25 the growth speed is Slow.

Input: pineapple
Output: Medium

Explanation: The sum points of pineapple is 2 + 5 + 2 + 5 + 5 + 2 + 2 + 2 + 5 = 30. Since 30 is in the range 25 to 35 the growth speed is Medium.

Test your program with the following cases:

2.a. oak
2.b. magnificent
2.c. sequoia
2.d. yellowwood`,

  starterCode: `public class Main {
    public static void main(String[] args) {

        // Calculate the tree's growth speed
    }
}`,

  expectedOutput: `Example 1:
Input: boabab
Output: Slow

Example 2:
Input: pineapple
Output: Medium`,

  points: 150,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      (
        code.includes("nextLine(") ||
        code.includes("next(")
      );

    const usesLoop =
      code.includes("for") ||
      code.includes("while");

    const accessesCharacters =
      code.includes("charAt");

    const handlesLetterCase =
      code.includes("toLowerCase") ||
      code.includes("toUpperCase") ||
      code.includes("Character.toLowerCase") ||
      code.includes("Character.toUpperCase");

    const checksIndividualVowels =
      (
        code.includes("== 'a'") ||
        code.includes('== "a"')
      ) &&
      (
        code.includes("== 'e'") ||
        code.includes('== "e"')
      ) &&
      (
        code.includes("== 'i'") ||
        code.includes('== "i"')
      ) &&
      (
        code.includes("== 'o'") ||
        code.includes('== "o"')
      ) &&
      (
        code.includes("== 'u'") ||
        code.includes('== "u"')
      );

    const checksVowelsUsingString =
      code.includes('"aeiou".contains') ||
      code.includes('"aeiou".indexOf');

    const checksVowels =
      checksIndividualVowels ||
      checksVowelsUsingString;

    const checksIndividualSpecialConsonants =
      (
        code.includes("== 'b'") ||
        code.includes('== "b"')
      ) &&
      (
        code.includes("== 'c'") ||
        code.includes('== "c"')
      ) &&
      (
        code.includes("== 'd'") ||
        code.includes('== "d"')
      ) &&
      (
        code.includes("== 'f'") ||
        code.includes('== "f"')
      ) &&
      (
        code.includes("== 'g'") ||
        code.includes('== "g"')
      );

    const checksSpecialConsonantsUsingString =
      code.includes('"bcdfg".contains') ||
      code.includes('"bcdfg".indexOf');

    const checksSpecialConsonants =
      checksIndividualSpecialConsonants ||
      checksSpecialConsonantsUsingString;

    const awardsFivePoints =
      /\+=\s*5/.test(code) ||
      /=\s*[^;]+\+\s*5/.test(code);

    const awardsThreePoints =
      /\+=\s*3/.test(code) ||
      /=\s*[^;]+\+\s*3/.test(code);

    const awardsTwoPoints =
      /\+=\s*2/.test(code) ||
      /=\s*[^;]+\+\s*2/.test(code);

    const checksSlowRange =
      /<\s*25/.test(code);

    const checksMediumRange =
      /<=\s*35/.test(code) ||
      /<\s*36/.test(code);

    const containsGrowthSpeeds =
      code.includes('"Slow"') &&
      code.includes('"Medium"') &&
      code.includes('"Fast"');

    const printsResult =
      code.includes("System.out.print");

    return (
      readsInput &&
      usesLoop &&
      accessesCharacters &&
      handlesLetterCase &&
      checksVowels &&
      checksSpecialConsonants &&
      awardsFivePoints &&
      awardsThreePoints &&
      awardsTwoPoints &&
      checksSlowRange &&
      checksMediumRange &&
      containsGrowthSpeeds &&
      printsResult
    );
  },
},

 {
  id: 5,
  level: 3,
  challengeNumber: 1,
  totalChallengesInLevel: 2,

  title: "Unfolding Sheets",

  instruction: `A sheet is a large rectangular piece of cloth. Sheets are typically folded in half, multiple times, to make them compact for storage.

Task

Write a program that reads 3 integers: the length of the sheet when folded, the width of sheet when folded, and the number of times the sheet has been folded in half.

The program must output the area of the sheet when completely unfolded.

The length and width of the folded sheet are given in centimeters. The output must be in square centimeters.

Examples

Input:
100
200
1

Output:
40000

Input:
250
250
0

Output:
62500

Input:
70
95
2

Output:
26600`,

  starterCode: `

public class Main {
    public static void main(String[] args) {
        // Unfold the sheet and calculate its full area
    }
}`,

  expectedOutput: `Example 1:
Input:
100
200
1

Output:
40000

Example 2:
Input:
250
250
0

Output:
62500

Example 3:
Input:
70
95
2

Output:
26600`,

  points: 160,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      code.includes("nextInt");

    const declaresMeasurements =
      code.includes("int length") &&
      code.includes("int width") &&
      code.includes("int folds");

    const calculatesFoldedArea =
      code.includes("length * width") ||
      code.includes("length*width") ||
      code.includes("width * length") ||
      code.includes("width*length");

    const usesLoop =
      code.includes("for") ||
      code.includes("while");

    const doublesArea =
      code.includes("area *= 2") ||
      code.includes("area*=2") ||
      code.includes("area = area * 2") ||
      code.includes("area=area*2") ||
      code.includes("area = 2 * area") ||
      code.includes("area=2*area");

    const usesFoldCount =
      code.includes("folds");

    const printsArea =
      code.includes("System.out.println(area)") ||
      code.includes("System.out.print(area)");

    return (
      readsInput &&
      declaresMeasurements &&
      calculatesFoldedArea &&
      usesLoop &&
      doublesArea &&
      usesFoldCount &&
      printsArea
    );
  },
},
 {
  id: 6,
  level: 3,
  challengeNumber: 2,
  totalChallengesInLevel: 2,

  title: "Circle",

  instruction: `An important part of Data Science is data visualization. To produce the below visualization, the first step is to determine which points are outside the circle. Points outside the circle are then labelled BLUE, and points inside or on the circle are labelled RED.

The circle has a radius of 1. For a point (x, y) the distance to the centre is √(x² + y²). If the distance to the centre of a point is more than 1 it is outside the circle.

Task

Given the point (x, y), write a program that outputs BLUE if the point lies outside the circle and outputs RED if the point lies inside or on the circle.

The first line of input contains the coordinates x and y.

Examples

Input: 0.1 0.3    Answer: RED
Input: 0.9 0.53   Answer: BLUE

Test your program with the following cases:

a) 0.9 0.8
b) 0.2 0.96
c) -0.5 0.87
d) 0.83 -0.55`,

  starterCode: `public class Main {
    public static void main(String[] args) {

        // Determine whether the point is
        // inside, on, or outside the circle
    }
}`,

  expectedOutput: `Examples:

Input: 0.1 0.3
Answer: RED

Input: 0.9 0.53
Answer: BLUE`,

  points: 170,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      (
        code.includes("nextDouble") ||
        code.includes("nextFloat")
      );

    const declaresCoordinates =
      (
        code.includes("double x") ||
        code.includes("float x")
      ) &&
      (
        code.includes("double y") ||
        code.includes("float y")
      );

    const calculatesDistanceSquared =
      (
        code.includes("x * x") ||
        code.includes("x*x")
      ) &&
      (
        code.includes("y * y") ||
        code.includes("y*y")
      );

    const checksOutsideCircle =
      code.includes("> 1") ||
      code.includes(">1") ||
      code.includes("> 1.0") ||
      code.includes(">1.0");

    const usesDecision =
      code.includes("if") &&
      code.includes("else");

    const printsBlue =
      code.includes(
        'System.out.println("BLUE")'
      ) ||
      code.includes(
        'System.out.print("BLUE")'
      );

    const printsRed =
      code.includes(
        'System.out.println("RED")'
      ) ||
      code.includes(
        'System.out.print("RED")'
      );

    return (
      readsInput &&
      declaresCoordinates &&
      calculatesDistanceSquared &&
      checksOutsideCircle &&
      usesDecision &&
      printsBlue &&
      printsRed
    );
  },
},

{
  id: 7,
  level: 4,
  challengeNumber: 1,
  totalChallengesInLevel: 2,

  title: "DNA Corruption",

  instruction: `Bongi, the astronaut, needs your help. Without the protection of the atmosphere, her DNA is being corrupted by the sun’s radiation! Luckily, our cells come with backup DNA. Help Bongi figure out which strands of her DNA have been corrupted.

A strand of DNA is a string of the 4 characters: T, A, C and G. The characters form two pairs. The first pair is (A, T). The second pair is (G, C). If two characters are in the same pair, they are considered opposite. That is, T is the opposite of A, and A is the opposite of T. G is the opposite of C, and C is the opposite of G.

Task

Write a program that takes two strings of length 5 as input. The first string is the original DNA, and the second string is the backup DNA. Your program must output “OK” if every character in the backup strand of DNA is the opposite of the corresponding character in the original strand of DNA. Otherwise, output “CORRUPTED”.

Example 1:

Input: ACTAG TGATC
Answer: OK

Explanation: Reading from left to right of the original DNA: The opposite of A is T. The opposite of C is G. The opposite of T is A. The opposite of A is T. The opposite of G is C. All the characters in the backup are the opposite of the original. The DNA is “OK”.

Example 2:

Input: GTACG CACGC
Answer: CORRUPTED

Explanation: The third character of the original DNA is A. The opposite of A is T, but the third character of the backup DNA is C. The DNA is "CORRUPTED".

Test your program with the following cases:

a) ACACA TGTCT
b) ATGGC GCCAT
c) TCGCT AGCGA
d) TTGAC TTGAC`,

  starterCode: `public class Main {
    public static void main(String[] args) {

        // Check whether every DNA character
        // has the correct opposite character
    }
}`,

  expectedOutput: `Example 1:

Input: ACTAG TGATC
Answer: OK

Example 2:

Input: GTACG CACGC
Answer: CORRUPTED`,

  points: 180,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      (
        code.includes("next()") ||
        code.includes("nextLine()")
      );

    const declaresTwoStrings =
      (
        code.includes("String originalDNA") ||
        code.includes("String dna1")
      ) &&
      (
        code.includes("String backupDNA") ||
        code.includes("String dna2")
      );

    const usesLoop =
      code.includes("for") ||
      code.includes("while");

    const accessesCharacters =
      code.includes("charAt");

    const checksA =
      code.includes("== 'A'");

    const checksT =
      code.includes("== 'T'");

    const checksG =
      code.includes("== 'G'");

    const checksC =
      code.includes("== 'C'");

    const hasComplementRules =
      checksA &&
      checksT &&
      checksG &&
      checksC;

    const tracksCorruption =
      code.includes("boolean corrupted") ||
      code.includes("boolean isCorrupted") ||
      code.includes("boolean is_corrupted");

    const marksCorrupted =
      code.includes("corrupted = true") ||
      code.includes("corrupted=true") ||
      code.includes("isCorrupted = true") ||
      code.includes("isCorrupted=true") ||
      code.includes("is_corrupted = true") ||
      code.includes("is_corrupted=true");

    const usesDecision =
      code.includes("if") &&
      code.includes("else");

    const printsOK =
      code.includes(
        'System.out.println("OK")'
      ) ||
      code.includes(
        'System.out.print("OK")'
      );

    const printsCorrupted =
      code.includes(
        'System.out.println("CORRUPTED")'
      ) ||
      code.includes(
        'System.out.print("CORRUPTED")'
      );

    return (
      readsInput &&
      declaresTwoStrings &&
      usesLoop &&
      accessesCharacters &&
      hasComplementRules &&
      tracksCorruption &&
      marksCorrupted &&
      usesDecision &&
      printsOK &&
      printsCorrupted
    );
  },
},
{
  id: 8,
  level: 4,
  challengeNumber: 2,
  totalChallengesInLevel: 2,

  title: "Sandpile",

  instruction: `In front of you is a large sandpile on a wooden table. The wooden table has length L. You have measured that i units from the left the sandpile has height hᵢ.

During your measurements, you accidentally bumped the table causing your sandpile to change shape and for even some of the sand to fall on the floor!

The sandpile changes shape according to the following avalanche rule:

If a height of hᵢ is more than a unit taller than either hᵢ₊₁ or hᵢ₋₁, the height hᵢ avalanches. Meaning that it sends one unit of sand to the left and one unit of sand to the right. Note an avalanche can trigger another avalanche, and that the edge of the table h₀ and hL₊₁ have height 0. When the height h₁ or hL avalanches, one of the units of sand falls off the table.

Making use of the avalanche rule, write a program that will be able to tell how much sand fell off the table. (Hint: The tests guarantee that no matter in which order the avalanches occur, the amount of sand that falls off the table is the same.)

Input

The first line of input is L the length of the table.
The second line of input are the heights h₁, h₂, ..., hL.

Output

The amount of sand that falls off the table.

Example 1

3
1 4 1
Answer: 2

Example 2

3
3 2 1
Answer: 3

Example 3

4
1 2 3 1
Answer: 2

Explanation of first example: The sandpile goes through the following avalanches highlighted in red. Sand falls off the table during the second and third avalanches.

1 4 1 → 2 2 2 → 0 3 2 → 0 4 0 → 1 2 1

Tests

a)
3
3 1 2

b)
5
1 1 6 1 1

c)
4
4 3 2 1

d)
5
1 7 1 7 1`,

  starterCode: `import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Sandpile {

    public static boolean avalanche(
        List<Integer> H,
        int index
    ) {
        // Simulate an avalanche
        return false;
    }

    public static int sum(
        List<Integer> arr
    ) {
        // Calculate the sum of the sand
        return 0;
    }

    public static void main(String[] args) {
        Scanner scanner =
            new Scanner(System.in);

        int n = scanner.nextInt();

        List<Integer> h =
            new ArrayList<>();

        for (int i = 0; i < n; ++i) {
            h.add(scanner.nextInt());
        }

        // Simulate avalanches until stable
        // Print how much sand fell off

        scanner.close();
    }
}`,

  expectedOutput: `Example 1:
Input:
3
1 4 1
Answer: 2

Example 2:
Input:
3
3 2 1
Answer: 3

Example 3:
Input:
4
1 2 3 1
Answer: 2`,

  points: 200,

  validate(code) {
    const importsCollections =
      code.includes("ArrayList") &&
      code.includes("List");

    const readsInput =
      code.includes("Scanner") &&
      code.includes("nextInt");

    const storesHeights =
      code.includes("List<Integer>") &&
      (
        code.includes("h.add") ||
        code.includes("H.add") ||
        code.includes("heights.add")
      );

    const hasAvalancheMethod =
      code.includes(
        "static boolean avalanche"
      ) ||
      code.includes(
        "public static boolean avalanche"
      );

    const hasSumMethod =
      code.includes("static int sum") ||
      code.includes("public static int sum");

    const getsLeftNeighbour =
      code.includes("index - 1") ||
      code.includes("index-1");

    const getsRightNeighbour =
      code.includes("index + 1") ||
      code.includes("index+1");

    const handlesLeftEdge =
      code.includes("index > 0") ||
      code.includes("index>0");

    const handlesRightEdge =
      code.includes(
        "index < H.size() - 1"
      ) ||
      code.includes(
        "index<H.size()-1"
      ) ||
      code.includes(
        "index < h.size() - 1"
      ) ||
      code.includes(
        "index<h.size()-1"
      ) ||
      code.includes(
        "index < heights.size() - 1"
      ) ||
      code.includes(
        "index<heights.size()-1"
      );

    const checksLeftStability =
      code.includes(
        "<= left_H + 1"
      ) ||
      code.includes(
        "<= left_H+1"
      ) ||
      code.includes(
        "<= leftHeight + 1"
      ) ||
      code.includes(
        "<= leftHeight+1"
      ) ||
      code.includes(
        "> left_H + 1"
      ) ||
      code.includes(
        "> leftHeight + 1"
      );

    const checksRightStability =
      code.includes(
        "<= right_H + 1"
      ) ||
      code.includes(
        "<= right_H+1"
      ) ||
      code.includes(
        "<= rightHeight + 1"
      ) ||
      code.includes(
        "<= rightHeight+1"
      ) ||
      code.includes(
        "> right_H + 1"
      ) ||
      code.includes(
        "> rightHeight + 1"
      );

    const removesTwoUnits =
      code.includes("- 2") ||
      code.includes("-2") ||
      code.includes("-= 2") ||
      code.includes("-=2");

    const addsToLeftNeighbour =
      (
        code.includes("index - 1") ||
        code.includes("index-1")
      ) &&
      (
        code.includes("+ 1") ||
        code.includes("+1") ||
        code.includes("+= 1") ||
        code.includes("+=1")
      );

    const addsToRightNeighbour =
      (
        code.includes("index + 1") ||
        code.includes("index+1")
      ) &&
      (
        code.includes("+ 1") ||
        code.includes("+1") ||
        code.includes("+= 1") ||
        code.includes("+=1")
      );

    const calculatesSum =
      code.includes("arr.size()") &&
      code.includes("arr.get");

    const tracksStartingSand =
      code.includes("sand_at_start") ||
      code.includes("sandAtStart");

    const repeatsUntilStable =
      code.includes("while") &&
      (
        code.includes(
          "avalanche_finished"
        ) ||
        code.includes(
          "avalancheFinished"
        ) ||
        code.includes("stable") ||
        code.includes("finished")
      );

    const callsAvalanche =
      code.includes("avalanche(h, i)") ||
      code.includes("avalanche(H, i)") ||
      code.includes(
        "avalanche(heights, i)"
      );

    const tracksEndingSand =
      code.includes("sand_at_end") ||
      code.includes("sandAtEnd");

    const printsFallenSand =
      code.includes("System.out.println") &&
      (
        code.includes(
          "sand_at_start - sand_at_end"
        ) ||
        code.includes(
          "sand_at_start-sand_at_end"
        ) ||
        code.includes(
          "sandAtStart - sandAtEnd"
        ) ||
        code.includes(
          "sandAtStart-sandAtEnd"
        )
      );

    return (
      importsCollections &&
      readsInput &&
      storesHeights &&
      hasAvalancheMethod &&
      hasSumMethod &&
      getsLeftNeighbour &&
      getsRightNeighbour &&
      handlesLeftEdge &&
      handlesRightEdge &&
      checksLeftStability &&
      checksRightStability &&
      removesTwoUnits &&
      addsToLeftNeighbour &&
      addsToRightNeighbour &&
      calculatesSum &&
      tracksStartingSand &&
      repeatsUntilStable &&
      callsAvalanche &&
      tracksEndingSand &&
      printsFallenSand
    );
  },
},
  {
  id: 9,
  level: 5,
  challengeNumber: 1,
  totalChallengesInLevel: 2,

  title: "Fibonacci",

  instruction: `Input file: standard input
Output file: standard output
Time limit: 0.5 seconds
Memory limit: 256 megabytes

The first few elements of the Fibonacci sequence are

1, 1, 2, 3, 5, 8, 13, 21, ...

The next number in the Fibonacci sequence is obtained by summing the previous two numbers. For example, the next number in the sequence will be 13 + 21 = 34.

Write a program to find the Nth Fibonacci number.

Input

The first and only line of input consists of a single integer N (1 ≤ N ≤ 45).

Output

Output the Nth Fibonacci number.

Scoring

Subtask 1: (10 points) Examples.

Subtask 2: (90 points) No further restrictions.

Examples

Standard input:
3

Standard output:
2

Standard input:
6

Standard output:
8

Note

It is guaranteed that the output is less than 2³¹.`,

  starterCode: `public class Main {
    public static void main(String[] args) {

        // Calculate the Nth Fibonacci number

    }
}`,

  expectedOutput: `Example 1:

Standard input:
3

Standard output:
2

Example 2:

Standard input:
6

Standard output:
8`,

  points: 240,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      code.includes("nextInt");

    const declaresN =
      code.includes("int n") ||
      code.includes("int N");

    const declaresStartingValues =
      (
        code.includes("int first = 1") ||
        code.includes("int first=1") ||
        code.includes("long first = 1") ||
        code.includes("long first=1") ||
        code.includes("int a = 1") ||
        code.includes("int a=1") ||
        code.includes("long a = 1") ||
        code.includes("long a=1")
      ) &&
      (
        code.includes("int second = 1") ||
        code.includes("int second=1") ||
        code.includes("long second = 1") ||
        code.includes("long second=1") ||
        code.includes("int b = 1") ||
        code.includes("int b=1") ||
        code.includes("long b = 1") ||
        code.includes("long b=1")
      );

    const usesLoop =
      code.includes("for") ||
      code.includes("while");

    const addsPreviousNumbers =
      code.includes("first + second") ||
      code.includes("first+second") ||
      code.includes("a + b") ||
      code.includes("a+b");

    const updatesFirstValue =
      code.includes("first = second") ||
      code.includes("first=second") ||
      code.includes("a = b") ||
      code.includes("a=b") ||
      code.includes("a = temp") ||
      code.includes("a=temp");

    const updatesSecondValue =
      code.includes("second = next") ||
      code.includes("second=next") ||
      code.includes("second = result") ||
      code.includes("second=result") ||
      code.includes("b = next") ||
      code.includes("b=next") ||
      code.includes("b = result") ||
      code.includes("b=result");

    const printsResult =
      (
        code.includes("System.out.println") ||
        code.includes("System.out.print")
      ) &&
      (
        code.includes("first") ||
        code.includes("second") ||
        code.includes("a") ||
        code.includes("b") ||
        code.includes("result")
      );

    return (
      readsInput &&
      declaresN &&
      declaresStartingValues &&
      usesLoop &&
      addsPreviousNumbers &&
      updatesFirstValue &&
      updatesSecondValue &&
      printsResult
    );
  },
},
{
  id: 10,
  level: 5,
  challengeNumber: 2,
  totalChallengesInLevel: 2,

  title: "Change",

  instruction: `Input file: standard input
Output file: standard output
Time limit: 1 second
Memory limit: 256 megabytes

When a customer buys a product and pays an amount greater than the selling price, the teller gives the customer their change.

There are sometimes multiple ways to give a certain amount of change. For example, if a customer needs R6 in change, the teller can give three R2’s or give one R5 and one R1. Savvy tellers give the change which minimizes the total number of coins and notes given. So, a savvy teller would give one R5 and one R1.

Write a program which outputs the number of coins and notes a savvy teller would need to make change. The output should be in increasing order of the value of the coins and notes i.e. output the number of R1’s then R2’s, then R5’s and so on.

Input

A single integer X (1 ≤ X ≤ 1 000 000), the amount your program must make change for.

Output

A single line of 8 space separated integers, the number of R1 coins needed, then the number of R2 coins needed and so on.

Scoring

Subtask 1: (0 points) Examples.

Subtask 2: (10 points) 1 ≤ X ≤ 10.

Subtask 3: (90 points) No further restrictions.

Examples

Standard input:
6

Standard output:
1 0 1 0 0 0 0 0

Standard input:
4

Standard output:
0 2 0 0 0 0 0 0

Note

South African currency consists of R1, R2 and R5 coins, and R10, R20, R50, R100 and R200 notes.

There is only ever one way a savvy teller can make an amount of change.

Explanation of examples:

1. To make R6 of change a savvy teller would use one R1 and one R5.

2. To make R4 of change a savvy teller would use two R2s.`,

  starterCode: `public class Main {
    public static void main(String[] args) {

        // Calculate the number of each
        // coin and note required

        // Print the answers from R1 to R200
    }
}`,

  expectedOutput: `Example 1:

Standard input:
6

Standard output:
1 0 1 0 0 0 0 0

Example 2:

Standard input:
4

Standard output:
0 2 0 0 0 0 0 0`,

  points: 250,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      code.includes("nextInt");

    const declaresAmount =
      code.includes("int amount") ||
      code.includes("int X") ||
      code.includes("int x");

    const declaresDenominations =
      code.includes("int[] denominations") ||
      code.includes("int[] coins") ||
      code.includes("int denominations[]") ||
      code.includes("int coins[]");

    const includesAllDenominations =
      code.includes("200") &&
      code.includes("100") &&
      code.includes("50") &&
      code.includes("20") &&
      code.includes("10") &&
      code.includes("5") &&
      code.includes("2") &&
      code.includes("1");

    const declaresCounts =
      code.includes("int[] counts") ||
      code.includes("int[] answer") ||
      code.includes("int[] ans") ||
      code.includes("int counts[]") ||
      code.includes("int answer[]") ||
      code.includes("int ans[]");

    const usesLoop =
      code.includes("for") ||
      code.includes("while");

    const usesDivision =
      code.includes("/") &&
      (
        code.includes("denominations") ||
        code.includes("coins")
      );

    const usesRemainder =
      (
        code.includes("%") ||
        code.includes("%=")
      ) &&
      (
        code.includes("denominations") ||
        code.includes("coins")
      );

    const printsFromSmallestToLargest =
      (
        (
          code.includes("i = 7") ||
          code.includes("i=7")
        ) &&
        (
          code.includes("i >= 0") ||
          code.includes("i>=0")
        )
      ) ||
      (
        code.includes("counts[7]") &&
        code.includes("counts[0]")
      ) ||
      (
        code.includes("answer[7]") &&
        code.includes("answer[0]")
      ) ||
      (
        code.includes("ans[7]") &&
        code.includes("ans[0]")
      );

    const printsResults =
      (
        code.includes("System.out.print") ||
        code.includes("System.out.println")
      ) &&
      (
        code.includes("counts[") ||
        code.includes("answer[") ||
        code.includes("ans[")
      );

    return (
      readsInput &&
      declaresAmount &&
      declaresDenominations &&
      includesAllDenominations &&
      declaresCounts &&
      usesLoop &&
      usesDivision &&
      usesRemainder &&
      printsFromSmallestToLargest &&
      printsResults
    );
  },
},{
  id: 11,
  level: 6,
  challengeNumber: 1,
  totalChallengesInLevel: 2,

  title: "Wordle",

  instruction: `Input file: standard input
Output file: standard output
Time limit: 1 second
Memory limit: 256 megabytes

The simple browser-based video game, Wordle, took the internet by storm. A player must try to guess a secret word of a given length. After each guess, the game colour codes each letter of the guess according to the correct answer.

• Gray (-) means that this letter does not appear in the word at all.

• Yellow (Y) means that this letter appears in the secret word, but it’s in the wrong spot within the word. (See example 2 for further information).

• Green (G) means that this letter appears in the secret word, and it’s in exactly the right place.

Write a program which takes the target word and player’s guess as input, and outputs the colours G, Y and - according to the above rules.

Input

The first line of input consists of a string of less than 200 characters, the secret word.

The second line of input consists of a string of less than 200 characters, the player’s guess.

Both strings are guaranteed to consist of the uppercase letters A to Z. Both strings are guaranteed to be of the same length.

Output

Output the colour coding of the player’s guess.

Scoring

Subtask 1: (0 points) Examples.

Subtask 2: (50 points) It is guaranteed that the correct solution will consist of only G and -.

Subtask 3: (50 points) No further restrictions.

Examples

Standard input:
MUSIC
MOUSE

Standard output:
G-YY-

Standard input:
BBQERS
BUBBLE

Standard output:
G-Y--Y

Standard input:
CRANE
CROWD

Standard output:
GG---

Standard input:
SOUND
SPOON

Standard output:
G-Y-Y`,

  starterCode: `public class Main {
    public static void main(String[] args) {

        // Read the target word and player's guess

        // Build the colour coding
    }
}`,

  expectedOutput: `Example 1:

Standard input:
MUSIC
MOUSE

Standard output:
G-YY-

Example 2:

Standard input:
BBQERS
BUBBLE

Standard output:
G-Y--Y

Example 3:

Standard input:
CRANE
CROWD

Standard output:
GG---

Example 4:

Standard input:
SOUND
SPOON

Standard output:
G-Y-Y`,

  points: 280,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      (
        code.includes("nextLine") ||
        code.includes("next()")
      );

    const declaresTargetAndGuess =
      code.includes("String target") &&
      code.includes("String guess");

    const declaresFrequencyArray =
      code.includes("int[] remaining") &&
      code.includes("26");

    const declaresAnswer =
      code.includes("char[] answer") ||
      code.includes("String answer") ||
      code.includes("StringBuilder answer");

    const usesTwoPasses =
      (
        code.match(/for\s*\(/g) ||
        []
      ).length >= 2;

    const checksExactMatch =
      code.includes(
        "target.charAt(i) == guess.charAt(i)"
      ) ||
      code.includes(
        "guess.charAt(i) == target.charAt(i)"
      );

    const countsUnmatchedTargetLetters =
      code.includes(
        "target.charAt(i) - 'A'"
      ) &&
      (
        code.includes("++") ||
        code.includes("+= 1")
      );

    const checksRemainingLetters =
      code.includes(
        "guess.charAt(i) - 'A'"
      ) &&
      code.includes("> 0");

    const decreasesRemainingCount =
      code.includes("--") ||
      code.includes("-= 1");

    const producesGreen =
      code.includes("'G'") ||
      code.includes('"G"');

    const producesYellow =
      code.includes("'Y'") ||
      code.includes('"Y"');

    const producesGray =
      code.includes("'-'") ||
      code.includes('"-"');

    const printsAnswer =
      (
        code.includes("System.out.println") ||
        code.includes("System.out.print")
      ) &&
      (
        code.includes("answer") ||
        code.includes("new String")
      );

    return (
      readsInput &&
      declaresTargetAndGuess &&
      declaresFrequencyArray &&
      declaresAnswer &&
      usesTwoPasses &&
      checksExactMatch &&
      countsUnmatchedTargetLetters &&
      checksRemainingLetters &&
      decreasesRemainingCount &&
      producesGreen &&
      producesYellow &&
      producesGray &&
      printsAnswer
    );
  },
},
{
  id: 12,
  level: 6,
  challengeNumber: 2,
  totalChallengesInLevel: 2,

  title: "Heat",

  instruction: `Input file: standard input
Output file: standard output
Time limit: 1 second
Memory limit: 256 megabytes

Formula 1 racecars are used to cool their fuel by circulating it around their engine. However, this practice has been banned. The FIA would like to ensure that no teams are performing the banned practice. The FIA installed sensors to measure the ambient temperature as well as the racecar’s fuel temperature.

The ambient temperature is measured once, whereas the fuel temperature is measured at 3 separate intervals. The FIA suspects a team is cheating if any of the fuel temperature measurements are 10°C less than the ambient temperature.

If a team is suspected of cheating, your program must output “Low”, otherwise your program must output “Ok”. Please note, that the evaluator is case-sensitive.

Input

The first line of input is a single integer A (1 ≤ A ≤ 1000), the ambient temperature.

The second line of input contains 3 space separated integers xᵢ (1 ≤ xᵢ ≤ 1000), the racecar’s fuel temperature at the 3 separate intervals.

Output

Output the word “Low” if the team is suspected of cheating otherwise output “Ok”.

Scoring

Subtask 1: (0 points) Examples.

Subtask 2: (50 points) It is guaranteed that the fuel temperature is higher than the ambient temperature.

Subtask 3: (50 points) No further restrictions.`,

  starterCode: `public class Main {
    public static void main(String[] args) {

        // Read the ambient temperature

        // Read the three fuel temperatures

        // Determine whether the team is suspected
        // of cheating
    }
}`,

  expectedOutput: `Example 1:

Input:
28
13 25 19

Output:
Low

Example 2:

Input:
30
20 21 20

Output:
Ok

Example 3:

Input:
35
40 30 29

Output:
Ok`,

  points: 300,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      code.includes("nextInt");

    const declaresAmbientTemperature =
      code.includes("int A") ||
      code.includes("int ambient") ||
      code.includes("int ambientTemperature");

    const readsThreeTemperatures =
      code.includes("for") ||
      code.includes("while") ||
      (
        code.match(/nextInt\s*\(/g) ||
        []
      ).length >= 4;

    const declaresFuelTemperature =
      code.includes("int x") ||
      code.includes("int fuel") ||
      code.includes("int temperature") ||
      code.includes("int fuelTemperature");

    const checksUsingA =
      code.includes("x < A - 10") ||
      code.includes("x<A-10") ||
      code.includes("A - x > 10") ||
      code.includes("A-x>10");

    const checksUsingAmbient =
      code.includes(
        "fuelTemperature < ambientTemperature - 10"
      ) ||
      code.includes(
        "fuelTemperature<ambientTemperature-10"
      ) ||
      code.includes(
        "temperature < ambientTemperature - 10"
      ) ||
      code.includes(
        "temperature<ambientTemperature-10"
      ) ||
      code.includes(
        "ambientTemperature - fuelTemperature > 10"
      ) ||
      code.includes(
        "ambientTemperature-fuelTemperature>10"
      ) ||
      code.includes(
        "ambient - fuel > 10"
      ) ||
      code.includes(
        "ambient-fuel>10"
      );

    const checksTemperatureDifference =
      checksUsingA ||
      checksUsingAmbient;

    const tracksSuspicion =
      code.includes("boolean suspicious") ||
      code.includes("boolean cheating") ||
      code.includes("boolean low");

    const marksSuspicious =
      code.includes("suspicious = true") ||
      code.includes("suspicious=true") ||
      code.includes("cheating = true") ||
      code.includes("cheating=true") ||
      code.includes("low = true") ||
      code.includes("low=true");

    const printsLow =
      code.includes(
        'System.out.println("Low")'
      ) ||
      code.includes(
        'System.out.print("Low")'
      );

    const printsOk =
      code.includes(
        'System.out.println("Ok")'
      ) ||
      code.includes(
        'System.out.print("Ok")'
      );

    return (
      readsInput &&
      declaresAmbientTemperature &&
      readsThreeTemperatures &&
      declaresFuelTemperature &&
      checksTemperatureDifference &&
      tracksSuspicion &&
      marksSuspicious &&
      printsLow &&
      printsOk
    );
  },
},
  {
  id: 13,
  level: 7,
  challengeNumber: 1,
  totalChallengesInLevel: 2,

  title: "Cake",

  instruction: `Input file: standard input
Output file: standard output
Time limit: 1 second
Memory limit: 256 megabytes

Your friend’s birthday is coming up. In celebration, you would like to bake as many cakes as possible for them.

You have a cake recipe which needs e eggs, m litres of milk, and f kilograms of flour. In your house, you have in store E eggs, M litres of milk, and F kilograms of flour.

You are even willing to spend a total of R Rands on ingredients. The nearby grocery store sells egg for R3, a litre of milk for R20, and a kilo of flour for R15.

Using the ingredients in your house and the money at your disposal, what is the maximum number of cakes you can bake?

Input

The first line of input contains four space-separated integers E, M, F, and R (0 ≤ E; M; F; R ≤ 10⁶), the number of eggs, milk, flour, and Rands you have at your disposal.

The next line of input contains three space-separated integers e, m, and f (1 ≤ e; m; f ≤ 10⁶), the amount of eggs, milk, and flour needed to bake one cake.

Output

Output a single integer, the maximum number of cakes which you can bake.

Scoring

Subtask 1: (0 points) Examples.

Subtask 2: (50 points) You are not willing to spend any money i.e. R = 0.

Subtask 3: (50 points) No further restrictions.

Examples

Standard input:
6 3 4 0
3 1 2

Standard output:
2

Standard input:
6 3 4 40
3 1 2

Standard output:
3

Note

Explanation of Example 1

In the first example, you start off with 6 eggs, 3 litres of milk, and 4 kilos of flour. It takes 6 eggs, 2 litres of milk, and 4 kilos of flour to make 2 cakes. You cannot make any more cake because you do not have any eggs or flour left and have no money to buy more.

Explanation of Example 2

Again, you start off with 6 eggs, 3 litres of milk, and 4 kilos of flour. It takes 6 eggs, 2 litres of milk, and 4 kilos of flour to make 2 cakes. Since you have 1 litre of milk left, you can use your R40 rand to buy 3 eggs (R9 = 3 × R3) and 2 kilos of flour (R30 = 2 × R15), and still have R1 left over. You can bake another cake with the bought ingredients to bake a total of 3 cakes.`,

  starterCode: `

public class Main {

 
        // Calculate the cost of missing ingredients

    }

    public static void main(String[] args) {
 
    }
}`,

  expectedOutput: `Example 1:

Standard input:
6 3 4 0
3 1 2

Standard output:
2

Example 2:

Standard input:
6 3 4 40
3 1 2

Standard output:
3`,

  points: 320,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      (
        code.includes("nextLong") ||
        code.includes("nextInt")
      );

    const readsAvailableIngredients =
      (
        code.includes("eggsAvailable") ||
        code.includes("long E") ||
        code.includes("int E")
      ) &&
      (
        code.includes("milkAvailable") ||
        code.includes("long M") ||
        code.includes("int M")
      ) &&
      (
        code.includes("flourAvailable") ||
        code.includes("long F") ||
        code.includes("int F")
      );

    const readsMoney =
      code.includes("long R") ||
      code.includes("int R") ||
      code.includes("long money") ||
      code.includes("int money");

    const readsRecipe =
      (
        code.includes("eggsPerCake") ||
        code.includes("long e") ||
        code.includes("int e")
      ) &&
      (
        code.includes("milkPerCake") ||
        code.includes("long m") ||
        code.includes("int m")
      ) &&
      (
        code.includes("flourPerCake") ||
        code.includes("long f") ||
        code.includes("int f")
      );

    const hasCostMethod =
      code.includes("costForCakes");

    const calculatesRequiredEggs =
      code.includes("cakes * eggsPerCake") ||
      code.includes("cakes*eggsPerCake") ||
      code.includes("cakes * e") ||
      code.includes("cakes*e");

    const calculatesRequiredMilk =
      code.includes("cakes * milkPerCake") ||
      code.includes("cakes*milkPerCake") ||
      code.includes("cakes * m") ||
      code.includes("cakes*m");

    const calculatesRequiredFlour =
      code.includes("cakes * flourPerCake") ||
      code.includes("cakes*flourPerCake") ||
      code.includes("cakes * f") ||
      code.includes("cakes*f");

    const calculatesMissingIngredients =
      code.includes("Math.max");

    const usesIngredientPrices =
      (
        code.includes("* 3") ||
        code.includes("*3")
      ) &&
      (
        code.includes("* 20") ||
        code.includes("*20")
      ) &&
      (
        code.includes("* 15") ||
        code.includes("*15")
      );

    const searchesForMaximum =
      code.includes("while") ||
      code.includes("for");

    const comparesCostWithMoney =
      (
        code.includes("<= R") ||
        code.includes("<=R") ||
        code.includes("<= money") ||
        code.includes("<=money")
      ) &&
      code.includes("costForCakes");

    const printsAnswer =
      (
        code.includes("System.out.println") ||
        code.includes("System.out.print")
      ) &&
      (
        code.includes("low") ||
        code.includes("answer") ||
        code.includes("maximum")
      );

    return (
      readsInput &&
      readsAvailableIngredients &&
      readsMoney &&
      readsRecipe &&
      hasCostMethod &&
      calculatesRequiredEggs &&
      calculatesRequiredMilk &&
      calculatesRequiredFlour &&
      calculatesMissingIngredients &&
      usesIngredientPrices &&
      searchesForMaximum &&
      comparesCostWithMoney &&
      printsAnswer
    );
  },
},
 {
  id: 14,
  level: 7,
  challengeNumber: 2,
  totalChallengesInLevel: 2,

  title: "Pizza Party",

  instruction: `Input file: standard input
Output file: standard output
Time limit: 1 second
Memory limit: 256 megabytes

A group of 2N friends are going to a restaurant for some pizza. After looking at the menu, the iᵗʰ person in the group decides to buy a pizza with price Cᵢ.

When the group of friends arrive at the till to order the pizzas, the cashier informs the group that there is 2-for-1 special running with a special rule. The rule says that for every pizza paid for, the group gets a cheaper (or equal in value) pizza for free.

The friend group was unprepared for the special. They have asked you to figure out what is the best way to use the 2-for-1 special to pay the least amount possible for their pizzas.

Input

The first line of input contains a single integer 2N (1 ≤ 2N ≤ 2 · 10⁵) — the size of the group.

The second line of input contains 2N integers C₁ ≤ C₂ ≤ ... ≤ C₂N (1 ≤ Cᵢ ≤ 10⁹) — the prices of the pizzas, sorted in ascending order.

Output

Your program must output a single integer — the least amount of money needed to buy all the pizzas.

The final answer may be too large to store in a 32-bit integer. You may need to use a 64-bit integer as described below.

Delphi/Pascal: Use Int64 instead of Integer.
Java: Use long instead of int.
C/C++: Use long long instead of int.
Python: You don’t have to worry. Normal integers will work.

Scoring

Subtask 1: (0 points) Examples.

Subtask 2: (10 points) N = 2.

Subtask 3: (40 points) C₁ ≥ C₂ ≥ ... ≥ C₂N.

Subtask 4: (40 points) N ≤ 1000.

Subtask 5: (10 points) No further restrictions.

Examples

Standard input:
6
101 129 145 150 160 169

Standard output:
448`,

  starterCode: `

public class Main {
    public static void main(String[] args) {

        // Read the number of pizzas

        // Read the pizza prices and calculate
        // the least amount of money needed
    }
}`,

  expectedOutput: `Standard input:
6
101 129 145 150 160 169

Standard output:
448`,

  points: 320,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      (
        code.includes("nextInt") ||
        code.includes("nextLong")
      );

    const declaresPizzaCount =
      code.includes("int numberOfPizzas") ||
      code.includes("int pizzaCount") ||
      code.includes("int n") ||
      code.includes("int N");

    const storesTotalAsLong =
      code.includes("long totalCost") ||
      code.includes("long total") ||
      code.includes("long answer") ||
      code.includes("long minimumCost");

    const usesLoop =
      code.includes("for") ||
      code.includes("while");

    const readsPizzaPrice =
      code.includes("long price") ||
      code.includes("int price") ||
      code.includes("long pizzaPrice") ||
      code.includes("int pizzaPrice");

    const selectsEverySecondPizza =
      /i\s*%\s*2\s*==\s*1/.test(code) ||
      /i\s*\+=\s*2/.test(code) ||
      /i\s*=\s*i\s*\+\s*2/.test(code);

    const addsPriceToTotal =
      code.includes("totalCost +=") ||
      code.includes("totalCost+=") ||
      code.includes("total +=") ||
      code.includes("total+=") ||
      code.includes("answer +=") ||
      code.includes("answer+=") ||
      code.includes("minimumCost +=") ||
      code.includes("minimumCost+=");

    const printsAnswer =
      (
        code.includes("System.out.println") ||
        code.includes("System.out.print")
      ) &&
      (
        code.includes("totalCost") ||
        code.includes("total") ||
        code.includes("answer") ||
        code.includes("minimumCost")
      );

    return (
      readsInput &&
      declaresPizzaCount &&
      storesTotalAsLong &&
      usesLoop &&
      readsPizzaPrice &&
      selectsEverySecondPizza &&
      addsPriceToTotal &&
      printsAnswer
    );
  },
},
{
  id: 15,
  level: 8,
  challengeNumber: 1,
  totalChallengesInLevel: 2,

  title: "Jelly Babies",

  instruction: `Input file: standard input
Output file: standard output
Time limit: 1 second
Memory limit: 256 megabytes

Scientist have discovered that when jelly babies are placed in a bioreactor they explode producing more jelly babies and sometimes some jelly tots. Furthermore, the colour of the jelly baby determines what it produces when it explodes. Jelly tots, however, are inert and never explode.

The scientists have decided to make use of the discovery by using jelly babies to produce jelly tots. There are N different jelly baby colours, and the scientists start with sᵢ jelly babies of colour i. For each colour, the scientists know what is produced after the jelly baby explodes. For example, when a red jelly baby explodes it produces 2 green jelly babies and 1 jelly tot, and when a green jelly baby explodes it produces 3 jelly tots.

For safety reasons, the scientists can only extract the jelly tots out of the bioreactor once all the jelly babies have exploded. This is important because some jelly babies lead to reactions that never stop exploding. For example, the yellow jelly baby explodes into a yellow jelly baby and a jelly tot. After the first yellow jelly baby explodes, the next yellow jelly baby will explode, and then the next and the next and the next...

In this situation, the scientists will never be able to extract the potentially infinite jelly tots produced, and so the total jelly tots produced will be 0.

Given the starting number of jelly babies placed in the reactor, as well as the formulas describing what the jelly babies produce, output the number of jelly tots the scientists will extract from the bioreactor.

Input

The first line of input contains a single integer N (1 ≤ N ≤ 100) the number of jelly baby colours.

The next line contains N space-separated integers sᵢ (1 ≤ sᵢ ≤ 10⁹), where sᵢ is the number of jelly babies of colour i initially placed into the bioreactor.

The next N lines each contain N + 1 space-separated integers xᵢⱼ (0 ≤ xᵢⱼ ≤ 10⁹). The ith line describes the jelly babies and jelly tots produced when a jelly baby of colour i explodes, specifically for j ≤ N, The integer xᵢⱼ is the number of jelly babies of colour j produced and xᵢN is the number of jelly tots produced.

Output

Output a single integer T, the number of jelly tots the scientists can collect from the bioreactor.

As explained in the task statement, if the reaction never ends the number of jelly tots collected is T = 0.

Your program must output 0 as well.

It is guaranteed that 0 ≤ T ≤ 2⁶⁰, that is the answer is guaranteed to fit into a signed 64 bit integer but may not fit into a standard signed 32 bit integer. This means for each of the respective languages you should be using the following types

Delphi/Pascal: Use Int64 instead of Integer.

Java: Use long instead of int.

C/C++: Use long long instead of int.

Python: You don’t have to worry. Normal integers will work.

Scoring

Subtask 1: (0 points) Examples

Subtask 2: (30 points) It is guaranteed that the jelly babies will eventually stop exploding after at most 100 000 explosions.

Subtask 3: (30 points) It is guaranteed that the jelly babies will eventually stop exploding.

Subtask 4: (40 points) No further restrictions.

Examples

Standard input:
2
2 1
0 2 1
0 0 3

Standard output:
17

Standard input:
2
1 1
0 1 0
1 0 1

Standard output:
0`,

  starterCode: `import java.util.Scanner;

public class Main {

    static int n;

    static long[][] babiesProduced;
    static long[] totsProduced;
    static long[] memo;

    static int[] state;
    static boolean infinite = false;

    static long calculate(int colour) {
        // Calculate the number of jelly tots produced
        // by one jelly baby of this colour

        return 0;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Read the number of jelly baby colours

        // Read the starting jelly babies

        // Read the production formulas

        // Calculate the number of jelly tots

        input.close();
    }
}`,

  expectedOutput: `Example 1:

Standard input:
2
2 1
0 2 1
0 0 3

Standard output:
17

Example 2:

Standard input:
2
1 1
0 1 0
1 0 1

Standard output:
0`,

  points: 350,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      (
        code.includes("nextLong") ||
        code.includes("nextInt")
      );

    const usesLongArrays =
      code.includes("long[]") &&
      code.includes("long[][]");

    const storesStartingBabies =
      code.includes("startingBabies");

    const storesProductionRules =
      code.includes("babiesProduced") &&
      code.includes("totsProduced");

    const usesStateArray =
      code.includes("int[] state");

    const detectsCycle =
      /state\s*\[\s*colour\s*\]\s*==\s*1/.test(
        code
      );

    const usesCompletedState =
      /state\s*\[\s*colour\s*\]\s*==\s*2/.test(
        code
      );

    const marksCurrent =
      /state\s*\[\s*colour\s*\]\s*=\s*1/.test(
        code
      );

    const marksComplete =
      /state\s*\[\s*colour\s*\]\s*=\s*2/.test(
        code
      );

    const usesMemo =
      code.includes("memo[colour]");

    const usesRecursion =
      code.includes("calculate(j)") ||
      code.includes("calculate(nextColour)");

    const checksProducedBabies =
      code.includes(
        "babiesProduced[colour][j] > 0"
      ) ||
      code.includes(
        "babiesProduced[colour][j]>0"
      );

    const multipliesProducedResults =
      code.includes(
        "babiesProduced[colour][j] * calculate(j)"
      ) ||
      code.includes(
        "babiesProduced[colour][j]*calculate(j)"
      );

    const checksStartingBabies =
      code.includes(
        "startingBabies[i] > 0"
      ) ||
      code.includes(
        "startingBabies[i]>0"
      );

    const multipliesStartingBabies =
      code.includes(
        "startingBabies[i] * calculate(i)"
      ) ||
      code.includes(
        "startingBabies[i]*calculate(i)"
      );

    const tracksInfiniteReaction =
      code.includes("boolean infinite") &&
      code.includes("infinite = true");

    const outputsZero =
      code.includes(
        "System.out.println(0)"
      ) ||
      code.includes(
        "System.out.print(0)"
      );

    const printsTotal =
      (
        code.includes("System.out.println") ||
        code.includes("System.out.print")
      ) &&
      code.includes("total");

    return (
      readsInput &&
      usesLongArrays &&
      storesStartingBabies &&
      storesProductionRules &&
      usesStateArray &&
      detectsCycle &&
      usesCompletedState &&
      marksCurrent &&
      marksComplete &&
      usesMemo &&
      usesRecursion &&
      checksProducedBabies &&
      multipliesProducedResults &&
      checksStartingBabies &&
      multipliesStartingBabies &&
      tracksInfiniteReaction &&
      outputsZero &&
      printsTotal
    );
  },
},
{
  id: 16,
  level: 8,
  challengeNumber: 2,
  totalChallengesInLevel: 2,

  title: "Water bucket",

  instruction: `Input file: standard input
Output file: standard output
Time limit: 1 second
Memory limit: 512 megabytes

After a long drought, it begins raining in a 2-dimensional world.

There are N raindrops positioned at integer coordinates (xᵢ, yᵢ). At the end of each second, each raindrop falls down one unit. For example, a raindrop at position (xᵢ, yᵢ) falls to (xᵢ, yᵢ - 1). Once a raindrop hits the ground, it disappears.

The villagers have constructed a large water bucket of length L. The water bucket is placed just above the ground on y = 1 at a position of your choosing. If the left endpoint of the water bucket is (lᵢ, 1), then the right endpoint is (lᵢ + L - 1, 1). If any raindrops fall into the water bucket, that is, if there is a raindrop (xᵢ, yᵢ) such that lᵢ ≤ xᵢ ≤ lᵢ + L and yᵢ = 1, then the water bucket collects the raindrop.

The villagers would like to collect as much rain as possible. They have put a computer chip and wheels on the water bucket, which enables it to move 1 unit left or right at the beginning of each second (or stay stationary). The villagers have asked you to program the computer chip so the water bucket collects as much water as possible. Given the positions of the water droplets, determine the optimal starting position and path of the water bucket to collect as many raindrops as possible.

Input

The first line of input contains two space-separated integers N (1 ≤ N ≤ 10³) and L (1 ≤ L ≤ 10³). The next N lines contain two space-separated integers, the starting position of the water droplets xᵢ, yᵢ: (0 ≤ xᵢ < 10³), (2 ≤ yᵢ < 10³). It is guaranteed that the position of the water droplets is unique.

Output

The first line should consist of a single integer, the maximum number of raindrops that can be collected. The second line of output must consist of a single integer T (1 ≤ T ≤ 10³). If the second line of output is empty, you will only receive 50% for the subtask (see Scoring).

Of the next T lines, the jth line must be the position of the left lⱼ (0 ≤ lⱼ < 10³) endpoint of the bucket at second j.

Scoring

You will receive 50% of the score of every subtask if you correctly output the maximum number of raindrops that can be collected. To achieve 100% of the score of every subtask, you must also output the optimal path of the bucket.

Subtask 1: (0 points) Examples.

Subtask 2: (30 points) xᵢ; yᵢ < 5.

Subtask 2: (70 points) No further restrictions.

Examples

Standard input:
4 3
0 2
3 3
4 4
1 5

Standard output:
4
4
0
1
2
1

Standard input:
5 3
1 2
4 2
3 2
6 3
7 4

Standard output:
4
3
3
4
5

Note

Explanation of Example 1:

The water bucket moves first, and then the raindrops fall. Explicitly, the simulation works as follows:

1. The water bucket is placed.
2. The raindrops fall.
3. The water bucket moves.
4. Repeat from step 2.`,

  starterCode: `import java.util.Arrays;
import java.util.Scanner;

public class Main {

    static final int POSITION_COUNT = 1000;

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int n = input.nextInt();
        int length = input.nextInt();

        int[] x = new int[n];
        int[] y = new int[n];

        int maximumTime = 0;

        for (int i = 0; i < n; i++) {
            x[i] = input.nextInt();
            y[i] = input.nextInt();

            maximumTime =
                Math.max(maximumTime, y[i] - 1);
        }

        // Determine the optimal starting position
        // and path of the water bucket.

        // Print:
        // 1. Maximum number of raindrops collected
        // 2. Number of seconds in the path
        // 3. Left endpoint of the bucket at each second

        input.close();
    }
}`,

  expectedOutput: `Example 1:

Standard input:
4 3
0 2
3 3
4 4
1 5

Standard output:
4
4
0
1
2
1

Example 2:

Standard input:
5 3
1 2
4 2
3 2
6 3
7 4

Standard output:
4
3
3
4
5`,

  points: 400,

  validate(code) {
    const readsInput =
      code.includes("Scanner") &&
      code.includes("nextInt");

    const readsNAndL =
      (
        code.includes("int n") ||
        code.includes("int N")
      ) &&
      (
        code.includes("int length") ||
        code.includes("int L")
      );

    const storesRaindrops =
      (
        code.includes("int[] x") &&
        code.includes("int[] y")
      ) ||
      code.includes("Raindrop") ||
      code.includes("List<Raindrop>");

    const tracksArrivalTime =
      (
        code.includes("maximumTime") ||
        code.includes("maxTime")
      ) &&
      (
        code.includes("y[i] - 1") ||
        code.includes("y[i]-1") ||
        code.includes("drop.y - 1") ||
        code.includes("drop.y-1")
      );

    const usesDynamicProgramming =
      code.includes("int[][] dp") ||
      code.includes("long[][] dp") ||
      code.includes("int[][] best") ||
      code.includes("long[][] best");

    const storesParents =
      code.includes("int[][] parent") ||
      code.includes("int[][] previous");

    const considersLeftMovement =
      code.includes("position - 1") ||
      code.includes("position-1") ||
      code.includes("left - 1") ||
      code.includes("left-1");

    const considersRightMovement =
      code.includes("position + 1") ||
      code.includes("position+1") ||
      code.includes("left + 1") ||
      code.includes("left+1");

    const checksBucketRange =
      code.includes("length - 1") ||
      code.includes("length-1") ||
      code.includes("L - 1") ||
      code.includes("L-1");

    const countsRaindrops =
      code.includes("arrivals") ||
      code.includes("dropsAtTime") ||
      code.includes("prefix");

    const reconstructsPath =
      code.includes("path") &&
      (
        code.includes("parent") ||
        code.includes("previous")
      );

    const printsMaximum =
      (
        code.includes("System.out.println") ||
        code.includes("System.out.print")
      ) &&
      (
        code.includes("maximumCollected") ||
        code.includes("maxCollected") ||
        code.includes("answer")
      );

    const printsPathLength =
      /System\.out\.println\s*\(\s*maximumTime\s*\)/.test(
        code
      ) ||
      /System\.out\.println\s*\(\s*maxTime\s*\)/.test(
        code
      ) ||
      /System\.out\.println\s*\(\s*path\.length\s*\)/.test(
        code
      ) ||
      /System\.out\.println\s*\(\s*path\.size\(\)\s*\)/.test(
        code
      );

    const printsPositions =
      /System\.out\.println\s*\(\s*path\s*\[/.test(
        code
      ) ||
      /System\.out\.println\s*\(\s*path\.get\s*\(/.test(
        code
      );

    return (
      readsInput &&
      readsNAndL &&
      storesRaindrops &&
      tracksArrivalTime &&
      usesDynamicProgramming &&
      storesParents &&
      considersLeftMovement &&
      considersRightMovement &&
      checksBucketRange &&
      countsRaindrops &&
      reconstructsPath &&
      printsMaximum &&
      printsPathLength &&
      printsPositions
    );
  },
},
];

// Keep the existing hints, grouped by challenge and revealed in order.
const hintTemplate = document.createElement("template");
hintTemplate.innerHTML = javaDocumentation.content;
const challengeHints = Array.from(
  hintTemplate.content.querySelectorAll(".documentation-section"),
  section => Array.from(section.querySelectorAll(":scope > p, :scope > ol > li"),
    hint => hint.innerHTML)
);

function updateDocumentation() {
  const challenge = challenges[currentChallengeIndex];
  const hints = challengeHints[currentChallengeIndex] || [];
  revealedHintCount = Math.min(revealedHintCount, hints.length);
  documentationTitle.textContent = challenge
    ? `Level ${challenge.level} — Challenge ${challenge.challengeNumber} Hints`
    : "Challenge Hints";
  documentationContent.innerHTML = revealedHintCount === 0
    ? "<p>Try solving the challenge</p>"
    : `<ol>${hints.slice(0, revealedHintCount).map(hint => `<li>${hint}</li>`).join("")}</ol>`;
  if (revealedHintCount > 0 && revealedHintCount === hints.length) {
    documentationContent.insertAdjacentHTML("beforeend",
      "<p>All hints for this challenge have been revealed. Review them and try again.</p>");
  }
}

function revealNextHint() {
  revealedHintCount += 1;
  updateDocumentation();
  saveChallengeState();
  const latestHint = documentationContent.querySelector("ol > li:last-child");
  if (latestHint) latestHint.scrollIntoView({ block: "nearest" });
}


function showScreen(screenToShow) {
  landingScreen.classList.add("hidden");
  adventureScreen.classList.add("hidden");

  screenToShow.classList.remove("hidden");
}



function showExplorer() {
  explorer.classList.add("is-moving");
}
function hideExplorer() {
  explorer.classList.remove("is-moving");
}



function startAdventure() {
  clearMovementTimer();
  clearDelayedAction();
  clearSavedChallenge();

  gameFinished = false;

  revealedHintCount = 0;
  currentChallengeIndex = 0;
  currentCheckpointIndex = 0;
  currentLevel = 1;

  score = 0;
  completedLevels = 0;

  scoreDisplay.textContent = "0";
  levelDisplay.textContent = "1";
  progressDisplay.textContent = "0/8";

  resetChallengeControls();
  updateDocumentation();

  challengeOverlay.classList.add(
    "hidden"
  );

  showScreen(adventureScreen);

  explorer.style.left = "10%";
  explorer.style.top = "82%";
  explorer.style.transform =
    "translate(-50%, -50%)";

  hideExplorer();

  if (jungleMusic) {
    jungleMusic.currentTime = 0;

    jungleMusic
      .play()
      .catch(() => {
        console.log(
          "The browser did not start the background music."
        );
      });
  }

  delayedActionId =
    window.setTimeout(() => {
      moveExplorerToCheckpoint();
    }, 500);
}

function returnToLanding() {
  clearMovementTimer();
  clearDelayedAction();
  clearSavedChallenge();

  gameFinished = false;

  hideExplorer();

  challengeOverlay.classList.add(
    "hidden"
  );

  if (jungleMusic) {
    jungleMusic.pause();
    jungleMusic.currentTime = 0;
  }

  explorer.style.left = "10%";
  explorer.style.top = "82%";

  showScreen(landingScreen);
}

function resetChallengeControls() {
  codeEditor.disabled = false;
  runButton.disabled = false;
  submitButton.disabled = false;

}
function clearDelayedAction() {
  if (delayedActionId !== null) {
    window.clearTimeout(
      delayedActionId
    );

    delayedActionId = null;
  }
}

function moveExplorerToCheckpoint() {
  const checkpoint =
    checkpoints[currentCheckpointIndex];

  if (!checkpoint) {
    hideExplorer();
    finishAdventure();
    return;
  }

  clearMovementTimer();

  showExplorer();

  requestAnimationFrame(() => {
    explorer.style.left =
      checkpoint.left;

    explorer.style.top =
      checkpoint.top;
  });

  movementTimerId =
    window.setTimeout(() => {
      hideExplorer();
      startCurrentLevel();
    }, 2850);
}

function clearMovementTimer() {
  if (movementTimerId !== null) {
    window.clearTimeout(
      movementTimerId
    );

    movementTimerId = null;
  }
}

function startCurrentLevel() {
  const challenge =
    challenges[currentChallengeIndex];

  if (!challenge) {
    finishAdventure();
    return;
  }


  currentLevel =
    challenge.level;

  levelDisplay.textContent =
    String(currentLevel);


  openChallenge(
    currentChallengeIndex
  );
}

function completeCurrentLevel() {
  clearSavedChallenge();

  completedLevels += 1;

  progressDisplay.textContent =
    `${completedLevels}/8`;

  if (currentLevel >= 8) {
    finishAdventure();
    return;
  }

  currentCheckpointIndex += 1;

  const nextChallenge =
    challenges[currentChallengeIndex];

  if (nextChallenge) {
    currentLevel =
      nextChallenge.level;

    levelDisplay.textContent =
      String(currentLevel);
  }

  delayedActionId =
    window.setTimeout(() => {
      moveExplorerToCheckpoint();
    }, 700);
}

function saveChallengeState() {
  if (
    gameFinished ||
    challengeOverlay.classList.contains("hidden") ||
    codeEditor.disabled
  ) {
    return;
  }

  const state = {
    currentChallengeIndex,
    currentCheckpointIndex,
    currentLevel,
    score,
    completedLevels,
    revealedHintCount,
    editorCode: codeEditor.value
  };

  sessionStorage.setItem(
    CHALLENGE_STATE_KEY,
    JSON.stringify(state)
  );
}

function clearSavedChallenge() {
  sessionStorage.removeItem(
    CHALLENGE_STATE_KEY
  );

}

function restoreChallengeState() {
  const savedState =
    sessionStorage.getItem(
      CHALLENGE_STATE_KEY
    );

  if (!savedState) {
    return false;
  }

  try {
    const state = JSON.parse(savedState);
    if (!Number.isInteger(state.currentChallengeIndex) ||
        !challenges[state.currentChallengeIndex]) {
      clearSavedChallenge();
      return false;
    }

    currentChallengeIndex =
      state.currentChallengeIndex ?? 0;

    currentCheckpointIndex =
      state.currentCheckpointIndex ?? 0;

    currentLevel =
      state.currentLevel ?? 1;

    score =
      state.score ?? 0;

    completedLevels =
      state.completedLevels ?? 0;


    gameFinished = false;


    scoreDisplay.textContent =
      String(score);

    levelDisplay.textContent =
      String(currentLevel);

    progressDisplay.textContent =
      `${completedLevels}/8`;

    resetChallengeControls();
    updateDocumentation();

    showScreen(adventureScreen);
    hideExplorer();

    openChallenge(
      currentChallengeIndex
    );

    if (
      typeof state.editorCode === "string"
    ) {
      codeEditor.value =
        state.editorCode;
    }

    revealedHintCount = Number.isInteger(state.revealedHintCount)
      ? Math.max(0, state.revealedHintCount) : 0;
    updateDocumentation();

    saveChallengeState();

    return true;
  } catch (error) {
    console.error(
      "Could not restore challenge:",
      error
    );

    clearSavedChallenge();
    return false;
  }
}

function openChallenge(index) {
  revealedHintCount = 0;
  const challenge =
    challenges[index];

  if (!challenge) {
    finishAdventure();
    return;
  }

  updateDocumentation();

  challengeLevel.textContent =
    `Level ${challenge.level} — Challenge ${challenge.challengeNumber} of ${challenge.totalChallengesInLevel}`;

  challengeTitle.textContent =
    challenge.title;

  challengeInstruction.textContent =
    challenge.instruction;

  challengePoints.textContent =
    String(challenge.points);

  codeEditor.value =
    challenge.starterCode;

  consoleOutput.textContent =
    "Ready...";

  feedbackMessage.textContent =
    "";

  resetChallengeControls();

  challengeOverlay.classList.remove(
    "hidden"
  );
  
saveChallengeState();
}


function normalizeCode(code) {
  return code
    .replace(/\s+/g, " ")
    .trim();
}



function runCode() {
  const challenge =
    challenges[currentChallengeIndex];

  if (
    !challenge ||
    gameFinished ||
    codeEditor.disabled
  ) {
    return;
  }

  const normalizedCode =
    normalizeCode(
      codeEditor.value
    );

  const correct =
    challenge.validate(
      normalizedCode
    );

  if (correct) {
    consoleOutput.textContent =
      challenge.expectedOutput;

    feedbackMessage.textContent =
      "The simulated test passed. Submit your solution to continue.";
  } else {
    consoleOutput.textContent =
      "No valid output";

    feedbackMessage.textContent =
      "Check your Java code and try again. Review the hints for help.";
    revealNextHint();
  }
}


function submitSolution() {
  const challenge =
    challenges[currentChallengeIndex];

  if (
    !challenge ||
    gameFinished ||
    codeEditor.disabled
  ) {
    return;
  }

  const normalizedCode =
    normalizeCode(
      codeEditor.value
    );

  const correct =
    challenge.validate(
      normalizedCode
    );

  if (!correct) {
    consoleOutput.textContent =
      "Wrong answer";

    feedbackMessage.textContent =
      "The path remains closed. Review the hints and try again.";
    revealNextHint();

    return;
  }

  clearSavedChallenge();
  runButton.disabled = true;
  submitButton.disabled = true;
  codeEditor.disabled = true;

  consoleOutput.textContent =
    challenge.expectedOutput;

  const earnedPoints = challenge.points;

  score += earnedPoints;

  scoreDisplay.textContent =
    String(score);

  feedbackMessage.textContent =
    `Challenge cleared! You earned ${earnedPoints} points.`;

  const completedLevel =
    challenge.level;

  currentChallengeIndex += 1;

  const nextChallenge =
    challenges[
      currentChallengeIndex
    ];

  clearDelayedAction();

  delayedActionId =
    window.setTimeout(() => {
      if (
        nextChallenge &&
        nextChallenge.level ===
          completedLevel
      ) {
        openChallenge(
          currentChallengeIndex
        );

        return;
      }

      challengeOverlay.classList.add(
        "hidden"
      );

      completeCurrentLevel();
    }, 1300);
}


function finishAdventure() {
  clearMovementTimer();
  clearDelayedAction();
  

  gameFinished = true;

  completedLevels = 8;

  hideExplorer();

  challengeOverlay.classList.remove(
    "hidden"
  );

  challengeLevel.textContent =
    "Adventure Complete";

  challengeTitle.textContent =
    "Jeremy Java Academy Explorer Certification";

  challengeInstruction.textContent =
    "You completed all eight Java jungle levels and all sixteen programming challenges.";

  challengePoints.textContent =
    String(score);

  codeEditor.value =
    `// Final score: ${score}
// Levels completed: 8
// Challenges completed: 16
// Explorer Certification achieved`;

  codeEditor.disabled = true;
  runButton.disabled = true;
  submitButton.disabled = true;

  consoleOutput.textContent =
    `Final score: ${score}`;

  feedbackMessage.textContent =
    "Excellent work, Explorer! You completed the entire Java adventure.";

  progressDisplay.textContent =
    "8/8";
}


function handleEditorTab(event) {
  if (event.key !== "Tab") {
    return;
  }

  event.preventDefault();

  const start =
    codeEditor.selectionStart;

  const end =
    codeEditor.selectionEnd;

  const currentValue =
    codeEditor.value;

  const indentation =
    "    ";

  codeEditor.value =
    currentValue.substring(0, start) +
    indentation +
    currentValue.substring(end);

  codeEditor.selectionStart =
    start + indentation.length;

  codeEditor.selectionEnd =
    start + indentation.length;
}



function initializeGame() {
  if (!verifyRequiredElements()) {
    return;
  }

  updateDocumentation();

  startButton.addEventListener(
    "click",
    startAdventure
  );

  backButton.addEventListener(
    "click",
    returnToLanding
  );

  runButton.addEventListener(
    "click",
    runCode
  );

  submitButton.addEventListener(
    "click",
    submitSolution
  );

  codeEditor.addEventListener(
    "keydown",
    handleEditorTab
  );
  codeEditor.addEventListener(
  "input",
  saveChallengeState
);

restoreChallengeState();
}
function verifyRequiredElements() {
  const requiredElements = {
    landingScreen,
    adventureScreen,
    challengeOverlay,
    startButton,
    backButton,
    explorer,
    levelDisplay,
    scoreDisplay,
    progressDisplay,
    challengeLevel,
    challengeTitle,
    challengeInstruction,
    challengePoints,
    documentationTitle,
    documentationContent,
    codeEditor,
    runButton,
    submitButton,
    consoleOutput,
    feedbackMessage,
  };

  const missingElements = Object.entries(requiredElements)
    .filter(([, element]) => element === null)
    .map(([name]) => name);

  if (missingElements.length > 0) {
    console.error(
      "Missing HTML elements:",
      missingElements
    );

    return false;
  }

  if (
    typeof challenges === "undefined" ||
    !Array.isArray(challenges)
  ) {
    console.error(
      "The challenges array is missing."
    );

    return false;
  }

  if (
    typeof javaDocumentation === "undefined"
  ) {
    console.error(
      "The javaDocumentation object is missing."
    );

    return false;
  }

  return true;
}
initializeGame()