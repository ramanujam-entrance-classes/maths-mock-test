window.SET_DATA = {
  title: "Boolean Algebra Mock Test 1",
  questions: [
  // Q1
  {
    q: "Simplified Boolean Expression: \\(F(A, B, C) = A \\cdot \\bar{B} \\cdot C + A \\cdot B \\cdot C + A \\cdot \\bar{B} \\cdot \\bar{C}\\)",
    options: [
      "(A). \\(A \\cdot (C + \\bar{B})\\)",
      "(B). \\(A \\cdot B\\)",
      "(C). \\(A + C\\)",
      "(D). \\(B \\cdot \\bar{C}\\)"
    ],
    correct: "(A)"
  },
  // Q2
  {
    q: "Simplified Boolean Expression: \\(F(A, B, C) = A \\cdot B + \\bar{A} \\cdot C + B \\cdot C\\)",
    options: [
      "(A). \\(A \\cdot B + C\\)",
      "(B). \\(A \\cdot B + \\bar{A} \\cdot C\\)",
      "(C). \\(A + B \\cdot C\\)",
      "(D). \\(\\bar{A} \\cdot \\bar{B}\\)"
    ],
    correct: "(B)"
  },
  // Q3
  {
    q: "Minimized Boolean Expression: \\(F(A, B, C) = \\bar{A}BC + A\\bar{B}C + ABC\\)",
    options: [
      "(A). \\(A + B\\)",
      "(B). \\(C(A + B)\\)",
      "(C). \\(A \\cdot B\\)",
      "(D). \\(\\bar{A} + \\bar{B}\\)"
    ],
    correct: "(B)"
  },
  // Q4
  {
    q: "Minimize the expression \\(Y = A + A\\bar{B} + AB\\):",
    options: [
      "(A). \\(B\\)",
      "(B). \\(A\\)",
      "(C). \\(A + B\\)",
      "(D). \\(1\\)"
    ],
    correct: "(B)"
  },
  // Q5
  {
    q: "Reduce the logic expression \\(Y = AB + A(B + C) + B(B + C)\\):",
    options: [
      "(A). \\(A + C\\)",
      "(B). \\(B + AC\\)",
      "(C). \\(B + C\\)",
      "(D). \\(AB + C\\)"
    ],
    correct: "(B)"
  },
  // Q6
  {
    q: "Simplify the Boolean function \\(F = (A + B)(A + \\bar{B} + C)\\):",
    options: [
      "(A). \\(B + C\\)",
      "(B). \\(A + BC\\)",
      "(C). \\(A + B\\)",
      "(D). \\(AC + B\\)"
    ],
    correct: "(B)"
  },
  // Q7
  {
    q: "Minimize the expression \\(Y = A\\bar{B} + \\bar{A}B + AB + \\bar{A}\\bar{B}\\):",
    options: [
      "(A). \\(0\\)",
      "(B). \\(1\\)",
      "(C). \\(A\\)",
      "(D). \\(B\\)"
    ],
    correct: "(B)"
  },
  // Q8
  {
    q: "Simplify \\(F = \\overline{A + \\bar{B}} + \\overline{\\bar{A} + B}\\):",
    options: [
      "(A). \\(A \\oplus B\\)",
      "(B). \\(A \\odot B\\)",
      "(C). \\(A + B\\)",
      "(D). \\(AB\\)"
    ],
    correct: "(B)"
  },
  // Q9
  {
    q: "Minimize \\(F = (A + B)(\\bar{A} + C)(B + C)\\):",
    options: [
      "(A). \\(AB + C\\)",
      "(B). \\(AC + \\bar{A}B\\)",
      "(C). \\(A + BC\\)",
      "(D). \\(B(A + C)\\)"
    ],
    correct: "(B)"
  },
  // Q10
  {
    q: "Simplify the Boolean logic \\(Y = A(A + B + C)(\\bar{A} + B + C)(A + \\bar{B} + C)\\):",
    options: [
      "(A). \\(A + B\\)",
      "(B). \\(AC\\)",
      "(C). \\(A + C\\)",
      "(D). \\(BC\\)"
    ],
    correct: "(B)"
  },
  // Q11
  {
    q: "Reduce \\(F = \\overline{(A + \\bar{B}C)} \\cdot (B + \\bar{A}C)\\) to its most minimal expression:",
    options: [
      "(A). \\(A\\bar{B}C\\)",
      "(B). \\(\\bar{A}B\\bar{C}\\)",
      "(C). \\(\\bar{A}\\bar{B}C\\)",
      "(D). \\(AB\\bar{C}\\)"
    ],
    correct: "(B)"
  },
  // Q12
  {
    q: "Simplify \\(Y = (A \\oplus B) + AB\\):",
    options: [
      "(A). \\(A + B\\)",
      "(B). \\(A \\odot B\\)",
      "(C). \\(AB\\)",
      "(D). \\(1\\)"
    ],
    correct: "(A)"
  },
  // Q13
  {
    q: "Minimize the expression \\(F = AB + \\bar{A}C + BC\\):",
    options: [
      "(A). \\(AB + BC\\)",
      "(B). \\(AB + \\bar{A}C\\)",
      "(C). \\(\\bar{A}C + B\\)",
      "(D). \\(A + BC\\)"
    ],
    correct: "(B)"
  },
  // Q14
  {
    q: "Reduce \\(Y = \\overline{\\bar{A}(B + \\bar{C})} \\cdot (A + B)\\):",
    options: [
      "(A). \\(A + \\bar{B}\\)",
      "(B). \\(A + BC\\)",
      "(C). \\(B + C\\)",
      "(D). \\(AB + C\\)"
    ],
    correct: "(B)"
  },
  // Q15
  {
    q: "Minimize the expression \\(Y = A\\bar{B}\\bar{C} + A\\bar{B}C + ABC\\):",
    options: [
      "(A). \\(A\\bar{B}\\)",
      "(B). \\(A(\\bar{B} + C)\\)",
      "(C). \\(AC\\)",
      "(D). \\(A + B\\)"
    ],
    correct: "(B)"
  },
  // Q16
  {
    q: "Simplify \\(F = \\overline{(A + B)} \\cdot (\\bar{A} + \\bar{B})\\):",
    options: [
      "(A). \\(\\bar{A} + \\bar{B}\\)",
      "(B). \\(\\bar{A}\\bar{B}\\)",
      "(C). \\(A + B\\)",
      "(D). \\(0\\)"
    ],
    correct: "(B)"
  },
  // Q17
  {
    q: "Reduce \\(Y = (A \\odot B) \\oplus A\\):",
    options: [
      "(A). \\(A\\)",
      "(B). \\(\\bar{B}\\)",
      "(C). \\(B\\)",
      "(D). \\(\\bar{A}\\)"
    ],
    correct: "(B)"
  },
  // Q18
  {
    q: "Minimize \\(F = AB + A(B + \\bar{C}) + B(A + C)\\):",
    options: [
      "(A). \\(A + B\\)",
      "(B). \\(A + BC\\)",
      "(C). \\(B + AC\\)",
      "(D). \\(AB + C\\)"
    ],
    correct: "(B)"
  },
  // Q19
  {
    q: "Simplify \\(Y = \\overline{A + B \\cdot \\bar{C}} + \\bar{A}\\bar{B}\\):",
    options: [
      "(A). \\(\\bar{A}B\\)",
      "(B). \\(\\bar{A}\\bar{B} + \\bar{A}C\\)",
      "(C). \\(\\bar{A}C\\)",
      "(D). \\(\\bar{B}C\\)"
    ],
    correct: "(B)"
  },
  // Q20
  {
    q: "Minimize the expression \\(F = (A + B + C)(A + B\\bar{C}) + \\bar{A}\\bar{B}\\):",
    options: [
      "(A). \\(A + B\\)",
      "(B). \\(A + B\\)",
      "(C). \\(A + \\bar{B}\\)",
      "(D). \\(1\\)"
    ],
    correct: "(B)"
  }
 ]
};