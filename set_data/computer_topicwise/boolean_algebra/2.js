window.SET_DATA = {
  title: "Boolean Algebra Mock Test 2",
  questions: [
  // Q1
  {
    q: "The Boolean function \\(f(A, B, C) = A + A'B + A'B'C\\) simplifies to:",
    options: [
      "(A). \\(A + B + C\\)",
      "(B). \\(AB + C\\)",
      "(C). \\(A' + B + C\\)",
      "(D). \\(A + B'C\\)"
    ],
    correct: "(A)"
  },
  // Q2
  {
    q: "The complement of the dual of expression \\(A \\cdot (B + C)\\) is:",
    options: [
      "(A). \\(A + B \\cdot C\\)",
      "(B). \\(A' + B' \\cdot C'\\)",
      "(C). \\(A' \\cdot (B' + C')\\)",
      "(D). \\((A + B) \\cdot (A + C)\\)"
    ],
    correct: "(B)"
  },
  // Q3
  {
    q: "The dual of expression \\(A'B + AC'\\) is obtained by replacing operators and constants as:",
    options: [
      "(A). \\((A' + B)(A + C')\\)",
      "(B). \\(A'B + AC'\\)",
      "(C). \\((A + B')(A' + C)\\)",
      "(D). \\(A' + B \\cdot A + C'\\)"
    ],
    correct: "(A)"
  },
  // Q4
  {
    q: "According to Self-Dual property, which of the following functions is self-dual?",
    options: [
      "(A). \\(AB + BC + CA\\)",
      "(B). \\(A + B + C\\)",
      "(C). \\(ABC\\)",
      "(D). \\(A + BC\\)"
    ],
    correct: "(A)"
  },
  // Q5
  {
    q: "The expression \\((A + B)(A + C)(B + C)\\) simplifies using the consensus theorem to:",
    options: [
      "(A). \\((A + B)(B + C)\\)",
      "(B). \\((A + B)(A + C)\\)",
      "(C). \\((A + C)(B + C)\\)",
      "(D). \\(A + BC\\)"
    ],
    correct: "(B)"
  },
  // Q6
  {
    q: "For \\(n\\) Boolean variables, the total number of self-dual functions possible is:",
    options: [
      "(A). \\(2^{n-1}\\)",
      "(B). \\(2^{2^n}\\)",
      "(C). \\(2^{2^{n-1}}\\)",
      "(D). \\(2^n\\)"
    ],
    correct: "(C)"
  },
  // Q7
  {
    q: "The simplified form of expression \\(A'B'C + A'BC + AB'C + ABC\\) is:",
    options: [
      "(A). \\(C\\)",
      "(B). \\(A + B\\)",
      "(C). \\(AB\\)",
      "(D). \\(A' + C\\)"
    ],
    correct: "(A)"
  },
  // Q8
  {
    q: "The logic expression \\(A \\oplus B \\oplus A\\) simplifies directly to:",
    options: [
      "(A). \\(A\\)",
      "(B). \\(B\\)",
      "(C). \\(0\\)",
      "(D). \\(1\\)"
    ],
    correct: "(B)"
  },
  // Q9
  {
    q: "If \\(F(A, B, C) = A + B'C\\), then the complement \\(F'\\) is given by:",
    options: [
      "(A). \\(A'(B + C')\\)",
      "(B). \\(A' + BC'\\)",
      "(C). \\(A'(B' + C)\\)",
      "(D). \\(A + BC'\\)"
    ],
    correct: "(A)"
  },
  // Q10
  {
    q: "Expressing XNOR operation \\(A \\odot B\\) in basic Boolean algebra yields:",
    options: [
      "(A). \\(AB + A'B'\\)",
      "(B). \\(A'B + AB'\\)",
      "(C). \\((A + B)(A' + B')\\)",
      "(D). \\(A'B'\\)"
    ],
    correct: "(A)"
  },
  // Q11
  {
    q: "What is the value of \\(A \\oplus A \\oplus A \\dots\\) repeated \\(n\\) times when \\(n\\) is even?",
    options: [
      "(A). \\(A\\)",
      "(B). \\(1\\)",
      "(C). \\(0\\)",
      "(D). \\(A'\\)"
    ],
    correct: "(C)"
  },
  // Q12
  {
    q: "The expression \\((A + B)(A' + C)\\) is equivalent to:",
    options: [
      "(A). \\(AC + A'B\\)",
      "(B). \\(AB + A'C\\)",
      "(C). \\(A + BC\\)",
      "(D). \\(A'(B + C)\\)"
    ],
    correct: "(A)"
  },
  // Q13
  {
    q: "Number of neutral (balanced) Boolean functions for \\(n\\) variables where output has equal \\(0\\)s and \\(1\\)s is:",
    options: [
      "(A). \\(2^{2^{n}-1}\\)",
      "(B). \\(\\binom{2^n}{2^{n-1}}\\)",
      "(C). \\(2^{n-1}\\)",
      "(D). \\(2^{2^n}\\)"
    ],
    correct: "(B)"
  },
  // Q14
  {
    q: "The Boolean expression \\((A + B')(A' + B)\\) evaluates to:",
    options: [
      "(A). \\(A \\oplus B\\)",
      "(B). \\(A \\odot B\\)",
      "(C). \\(AB\\)",
      "(D). \\(A'B'\\)"
    ],
    correct: "(B)"
  },
  // Q15
  {
    q: "Minimal expression for \\((A + B + C)(A + B + C')\\) is:",
    options: [
      "(A). \\(A + B\\)",
      "(B). \\(A + C\\)",
      "(C). \\(B + C\\)",
      "(D). \\(ABC\\)"
    ],
    correct: "(A)"
  },
  // Q16
  {
    q: "The dual of \\(A \\cdot B + A' \\cdot C + B \\cdot C\\) is:",
    options: [
      "(A). \\((A + B)(A' + C)(B + C)\\)",
      "(B). \\(A'B' + AC' + B'C'\\)",
      "(C). \\((A' + B')(A + C')(B' + C')\\)",
      "(D). \\(AB + A'C\\)"
    ],
    correct: "(A)"
  },
  // Q17
  {
    q: "The expression \\(AB + A'C + BC\\) is logically equivalent to \\(AB + A'C\\). Which term is redundant?",
    options: [
      "(A). \\(AB\\)",
      "(B). \\(A'C\\)",
      "(C). \\(BC\\)",
      "(D). \\(\\text{None}\\)"
    ],
    correct: "(C)"
  },
  // Q18
  {
    q: "If \\(x + y = x + z\\) and \\(x' + y = x' + z\\), then:",
    options: [
      "(A). \\(x = y\\)",
      "(B). \\(y = z\\)",
      "(C). \\(x = z\\)",
      "(D). \\(x = y = z\\)"
    ],
    correct: "(B)"
  },
  // Q19
  {
    q: "Simplified form of expression \\(A'B'C' + A'B'C + A'BC' + A'BC\\) is:",
    options: [
      "(A). \\(A'\\)",
      "(B). \\(B'\\)",
      "(C). \\(C'\\)",
      "(D). \\(0\\)"
    ],
    correct: "(A)"
  },
  // Q20
  {
    q: "The complement of expression \\((A + B')(A' + B)\\) is:",
    options: [
      "(A). \\(A \\oplus B\\)",
      "(B). \\(A \\odot B\\)",
      "(C). \\(AB + A'B'\\)",
      "(D). \\(1\\)"
    ],
    correct: "(A)"
  }
 ]
};