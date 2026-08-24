window.SET_DATA = {
  title: "Mathematical Induction Mock Test 1",
  questions: [
  // Q1
  {
    q: "The sum of the series\n$$\\frac{5}{13} + \\frac{55}{(13)^2} + \\frac{555}{(13)^3} + \\frac{5555}{(13)^4} + \\dots \\infty$$",
    options: [
      "(A). \\(\\frac{55}{39}\\)",
      "(B). \\(\\frac{65}{39}\\)",
      "(C). \\(\\frac{110}{169}\\)",
      "(D). \\(\\frac{65}{36}\\)"
    ],
    correct: "(D)"
  },
  // Q2
  {
    q: "The sum of the infinite series\n$$\\frac{1}{1 \\cdot 4} + \\frac{1}{4 \\cdot 7} + \\frac{1}{7 \\cdot 10} + \\dots \\infty \n$$ is equal to:",
    options: [
      "(A). \\(\\frac{1}{3}\\)",
      "(B). \\(\\frac{1}{4}\\)",
      "(C). \\(\\frac{38}{27}\\)",
      "(D). none of these"
    ],
    correct: "(A)"
  },
  // Q3
  {
    q: `The odd positive integers are arranged in a triangle as follows :
        <br> <img src="images/maths_topicwise_mathematical_induction_1/maths_topicwise_mathematical_induction_1_q3.png" alt="Question 3 Diagram" style="max-width:100%; height:auto; display:block; margin:auto;"> <br>
        Find the sum of the numbers in the \\(n\\text{th}\\) row of this arrangement :`,
    options: [
      "(A). \\(n^2 + n\\)",
      "(B). \\(2n^2 - 2 + n\\)",
      "(C). \\(n^3\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q4
  {
    q: "Find the sum to \\(n\\) terms of the series\n$$\\log a + \\log \\frac{a^3}{b} + \\log \\frac{a^5}{b^2} + \\log \\frac{a^7}{b^3} + \\dots$$",
    options: [
      "(A). \\(\\log \\left( \\frac{a^{2n}}{b^{n-1}} \\right)^{n/2}\\)",
      "(B). \\(\\log \\frac{a^{2n-1}}{b^{n-1}}\\)",
      "(C). \\(\\log \\frac{a^{2n}}{b^n}\\)",
      "(D). none of these"
    ],
    correct: "(A)"
  },
  // Q5
  {
    q: "The value of \\((0.2)^{\\log_{\\sqrt{5}}\\left(\\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\dots\\right)} :\\)",
    options: [
      "(A). \\(2\\)",
      "(B). \\(\\frac{1}{2}\\)",
      "(C). \\(4\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q6
  {
    q: "What is the sum of \\(n\\) terms of the series\n\\(-1 + 1^2 - 2 + 2^2 - 3 + 3^2 \\dots ?\\)",
    options: [
      "(A). \\(\\frac{n(n^2 + 1)}{3}\\)",
      "(B). \\(n^2 + n\\)",
      "(C). \\(\\frac{n(n^2 - 1)}{3}\\)",
      "(D). none of these"
    ],
    correct: "(D)"
  },
  // Q7
  {
    q: "Find the sum of \\(1 + \\frac{2}{3} + \\frac{4}{9} + \\frac{6}{27} + \\frac{8}{81} + \\frac{10}{243} + \\dots \\infty :\\)",
    options: [
      "(A). \\(\\frac{2}{3}\\)",
      "(B). \\(\\frac{5}{2}\\)",
      "(C). \\(\\frac{19}{45}\\)",
      "(D). \\(\\frac{81}{17}\\)"
    ],
    correct: "(B)"
  },
  // Q8
  {
    q: `Sum of \\(n\\) terms of the series \n
        <span style='font-size:13px'>$$\\log a + \\log\\left(\\frac{a^2}{b}\\right) + \\log\\left(\\frac{a^3}{b^2}\\right) + \\log\\left(\\frac{a^4}{b^3}\\right) + \\dots \\text{ is :}$$ </span>`,
    options: [
      "(A). \\(\\log \\left[ \\frac{a^n}{b^{n-1}} \\right]^{n/2}\\)",
      "(B). \\(\\log \\left[ \\frac{a^{n+1}}{b^{n-1}} \\right]^{n/2}\\)",
      "(C). \\(\\log \\left[ \\frac{a^n}{b^n} \\right]^{n/2}\\)",
      "(D). \\(\\log \\left[ \\frac{a^{n+1}}{b^n} \\right]^{n/2}\\)"
    ],
    correct: "(B)"
  },
  // Q9
  {
    q: "The sum to \\(n\\) terms of the series\n$$1^2 + (1^2 + 3^2) + (1^2 + 3^2 + 5^2) + \\dots \\text{ is :}$$",
    options: [
      "(A). \\(\\frac{1}{3} (n^3 + n^2 + 1)\\)",
      "(B). \\(\\frac{1}{6} n(n + 1)(2n^2 + 2n - 1)\\)",
      "(C). \\(\\frac{1}{3} (2n^2 + 2n - 1)\\)",
      "(D). none of these"
    ],
    correct: "(B)"
  },
  // Q10
  {
    q: `Find the sum to \\(n\\) terms of the series\n
        <span style='font-size:13px'>
          $$1 + (1 + 2) + (1 + 2 + 3) + (1 + 2 + 3 + 4) + \\dots :$$
        </span>`,
    options: [
      "(A). \\(\\frac{n(n + 1)(2n + 1)}{6}\\)",
      "(B). \\(\\frac{n(n + 1)(n + 2)}{6}\\)",
      "(C). \\(\\frac{n(n + 1)(n + 2)}{12}\\)",
      "(D). \\(\\frac{n(n + 1)}{2}\\)"
    ],
    correct: "(B)"
  },
  // Q11
  {
    q: "The sum to \\(n\\) terms of the series\n$$\\frac{3}{1^2 \\cdot 2^2} + \\frac{5}{2^2 \\cdot 3^2} + \\frac{7}{3^2 \\cdot 4^2} + \\dots \\text{ is :}$$",
    options: [
      "(A). \\(\\frac{n^2 - 2n}{(n - 1)^2}\\)",
      "(B). \\(\\frac{n^2 + 2n}{(n + 1)^2}\\)",
      "(C). \\(\\frac{2n^2 + 1}{n}\\)",
      "(D). none of these"
    ],
    correct: "(B)"
  },
  // Q12
  {
    q: `The natural numbers are written as follows :
        <br> <img src="images/maths_topicwise_mathematical_induction_1/maths_topicwise_mathematical_induction_1_q12.png" alt="Question 12 Diagram" style="max-width:100%; height:auto; display:block; margin:auto;"> <br>
        The sum of numbers in the \\(n\\text{th}\\) row is :`,
    options: [
      "(A). \\(\\frac{n(n + 1)}{2}\\)",
      "(B). \\(\\frac{n^2 + 1}{2}\\)",
      "(C). \\(\\frac{n(n^2 + 1)}{2}\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q13
  {
    q: `The sum to \\(n\\) terms of the series 
        <span style='font-size:13px'>
        \n$$\\frac{1}{\\sqrt{1} + \\sqrt{3}} + \\frac{1}{\\sqrt{3} + \\sqrt{5}} + \\frac{1}{\\sqrt{5} + \\sqrt{7}} + \\dots \\text{ is :}$$
        </span>`,
    options: [
      "(A). \\(\\sqrt{2n + 1}\\)",
      "(B). \\(\\frac{1}{2} \\sqrt{2n + 1}\\)",
      "(C). \\(\\sqrt{2n - 1}\\)",
      "(D). \\(\\frac{1}{2} \\{\\sqrt{2n + 1} - 1\\}\\)"
    ],
    correct: "(D)"
  },
  // Q14
  {
    q: "The sum to \\(n\\) terms of the series, where \\(n\\) is an even number :\n$$1^2 - 2^2 + 3^2 - 4^2 + 5^2 - 6^2 + \\dots :$$",
    options: [
      "(A). \\(n(n + 1)\\)",
      "(B). \\(\\frac{n(n + 1)}{2}\\)",
      "(C). \\(-\\frac{n(n + 1)}{2}\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q15
  {
    q: "\\(\\underbrace{666 \\dots 6}_{n\\text{-digits}}\\) + \\(\\underbrace{888 \\dots 8}_{n\\text{-digits}}\\) is equal to :",
    options: [
      "(A). \\(14(n^2 - 1)\\)",
      "(B). \\(\\frac{48}{9} (10^{2n} - 1)\\)",
      "(C). \\(\\frac{14}{9} (10^n - 1)\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q16
  {
    q: "Find the sum to \\(n\\) terms of the series \\(3 + 6 + 10 + 16 + \\dots :\\)",
    options: [
      "(A). \\(\\frac{n(n - 1)}{2} - 1\\)",
      "(B). \\(n(n + 1) + 2^n - 1\\)",
      "(C). \\(n(n + 2) + 1\\)",
      "(D). \\(3(2n + 1) - 2^n\\)"
    ],
    correct: "(B)"
  },
  // Q17
  {
    q: "The sum to \\(n\\) terms of the series \\(1 + (1 + 3) + (1 + 3 + 5) + \\dots\\) is :",
    options: [
      "(A). \\(\\left[\\frac{n(n + 1)}{2}\\right]^2\\)",
      "(B). \\(n^2\\)",
      "(C). \\(\\frac{n(n + 1)(2n + 1)}{6}\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q18
  {
    q: "The sum to \\(n\\) terms of the series\n$$1^2 + (1^2 + 3^2) + (1^2 + 3^2 + 5^2) + \\dots \\text{ is :}$$",
    options: [
      "(A). \\(\\frac{1}{3} (n^4 + 2n^2)\\)",
      "(B). \\(\\frac{1}{3} (n^3 + 3n^2 - n)\\)",
      "(C). \\(\\frac{1}{6} n(n + 1)(2n^2 + 2n - 1)\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q19
  {
    q: "Find the sum to \\(n\\) terms :\n$$1 + 2x + 3x^2 + 4x^3 + \\dots; x \\neq 1 :$$",
    options: [
      "(A). \\(1 + nx^n\\)",
      "(B). \\(\\frac{x(x + 1)}{2} + x^n\\)",
      "(C). \\(\\frac{1 - x^n}{(1 - x)^2}\\)",
      "(D). \\(\\left\\{ \\frac{1 - x^n}{(1 - x)^2} - \\frac{nx^n}{(1 - x)} \\right\\}\\)"
    ],
    correct: "(D)"
  },
  // Q20
  {
    q: "Find the sum to \\(n\\) terms of \\(1 + 3x + 5x^2 + 7x^3 + \\dots, x \\neq 1.\\)",
    options: [
      "(A). \\(2(1 - x^{n-1})\\)",
      "(B). \\(\\frac{2x(1 - x^{n-1})}{(1 - x^2)}\\)",
      "(C). \\(\\frac{2x(1 - x^{n-1})}{(1 - x)^2} + \\frac{1 - (2n - 1)x^n}{(1 - x)}\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q21
  {
    q: "Find the sum to first \\(n\\) terms :\n$$1 + \\frac{2}{3} + \\frac{3}{3^2} + \\frac{4}{3^3} + \\dots$$",
    options: [
      "(A). \\(\\frac{3}{4} - \\frac{3 + 2n}{4(3^{n-1})}\\)",
      "(B). \\(\\frac{9}{4} - \\frac{3}{4} \\left[ \\frac{3 + 2n}{3^n} \\right]\\)",
      "(C). \\(2n - \\left( \\frac{1}{n} \\right)^2\\)",
      "(D). none of these"
    ],
    correct: "(B)"
  },
  // Q22
  {
    q: "Find the sum to \\(n\\) terms of\n$$3 \\cdot 2 + 5 \\cdot 2^2 + 7 \\cdot 2^3 + \\dots$$",
    options: [
      "(A). \\(2^{n+2} - 2^{n+1} - 2\\)",
      "(B). \\(n \\cdot 2^{n+2} - 2^{n+1} + 2\\)",
      "(C). \\(n \\cdot 2^{n+2} + 2^{n-2}\\)",
      "(D). none of these"
    ],
    correct: "(B)"
  },
  // Q23
  {
    q: "Find the sum of the series :\n$$1 + \\frac{4}{5} + \\frac{7}{5^2} + \\frac{10}{5^3} + \\dots \\text{ to } n \\text{ terms :}$$",
    options: [
      "(A). \\(\\frac{35}{16} + \\frac{7n}{5}\\)",
      "(B). \\(\\frac{12n - 7}{16(5^{n-1})}\\)",
      "(C). \\(\\frac{35}{16} - \\left[ \\frac{12n + 7}{16(5^{n-1})} \\right]\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q24
  {
    q: "Find the sum to \\(n\\) terms of the series \\(1 + 3 + 7 + 15 + \\dots\\)",
    options: [
      "(A). \\([(2^n - 1) - n]\\)",
      "(B). \\([(2^n - 1) + n]\\)",
      "(C). \\([2(2^n - 1) - n]\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q25
  {
    q: "Find the sum of \\(\\frac{1}{2} + \\frac{3}{2^2} + \\frac{5}{2^3} + \\dots + \\frac{2n - 1}{2^n} :\\)",
    options: [
      "(A). \\(\\left( \\frac{2n - 3}{2^n} \\right)\\)",
      "(B). \\(\\left( 3 - \\frac{2n + 3}{2^n} \\right)\\)",
      "(C). \\(\\left( \\frac{2n + 3}{2^n} \\right)\\)",
      "(D). none of these"
    ],
    correct: "(B)"
  },
  // Q26
  {
    q: "Find the sum to \\(n\\) terms of the series\n$$11 + 102 + 1003 + 10004 + \\dots :$$",
    options: [
      "(A). \\((10^n - 1) + \\frac{n(n + 1)}{2}\\)",
      "(B). \\(\\frac{10}{9}(10^n - 1) + \\frac{n(n + 1)}{2}\\)",
      "(C). \\(10^n + n^2 - 1\\)",
      "(D). none of these"
    ],
    correct: "(B)"
  },
  // Q27
  {
    q: `Find the sum to first \\(n\\) groups of\n
        <span style='font-size:13px'>
        $$(1) + (1 + 3) + (1 + 3 + 9) + (1 + 3 + 9 + 27) + \\dots$$
        </span>`,
    options: [
      "(A). \\(\\frac{1}{2}(3^n - 1)\\)",
      "(B). \\(\\frac{3}{4}(3^n - 1) - \\frac{n}{2}\\)",
      "(C). \\(n^2 + 1\\)",
      "(D). none of these"
    ],
    correct: "(B)"
  },
  // Q28
  {
    q: "The sum of first \\(n\\) terms of the series \\(\\frac{1}{2} + \\frac{3}{4} + \\frac{7}{8} + \\frac{15}{16} + \\dots\\)",
    options: [
      "(A). \\(2^n - 1\\)",
      "(B). \\(1 - 2^{-n}\\)",
      "(C). \\(2^n - n + 1\\)",
      "(D). \\(n + 2^{-n} - 1\\)"
    ],
    correct: "(D)"
  },
  // Q29
  {
    q: `The series of natural numbers is written as follows :
        <br> <img src="images/maths_topicwise_mathematical_induction_1/maths_topicwise_mathematical_induction_1_q29.png" alt="Question 29 Diagram" style="max-width:100%; height:auto; display:block; margin:auto;"> <br>
        Find the sum of the numbers in the \\(n\\text{th}\\) row :`,
    options: [
      "(A). \\(n^3 + 1\\)",
      "(B). \\((2n)^2 - 1\\)",
      "(C). \\(n^3 + (n - 1)^3\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q30
  {
    q: "Find the sum to \\(n\\) terms of the series\n$$7 + 77 + 777 + 7777 + \\dots$$",
    options: [
      "(A). \\(\\frac{7}{9} \\{ 10(10^n - 1) - n \\}\\)",
      "(B). \\(\\frac{7}{9} \\left\\{ \\frac{10}{9}(10^n - 1) - n \\right\\}\\)",
      "(C). \\(7 \\left\\{ \\frac{10}{9}(10^n - 1) - n \\right\\}\\)",
      "(D). none of these"
    ],
    correct: "(B)"
  },
  // Q31
  {
    q: "Find the sum to \\(n\\) terms of \\(0.8 + 0.88 + 0.888 + \\dots\\)",
    options: [
      "(A). \\(\\frac{8}{9} \\left[ \\frac{1}{9} \\{ 1 - (0.1)^n \\} \\right]\\)",
      "(B). \\(\\frac{8}{9} \\left[ \\frac{1}{10} \\{ 1 - (0.1)^n \\} \\right]\\)",
      "(C). \\(\\frac{8}{9} \\left[ n - \\frac{1}{9} \\{ 1 - (0.1)^n \\} \\right]\\)",
      "(D). none of these"
    ],
    correct: "(C)"
  },
  // Q32
  {
    q: `The sum of \\(n\\) terms of the series\n
        <span style='font-size:13px'>
        $$1 + (1 + a) + (1 + a + a^2) + (1 + a + a^2 + a^3) + \\dots,$$ is
        </span>`,
    options: [
      "(A). \\(\\frac{n}{1 - a} - \\frac{a(1 - a^n)}{(1 - a)^2}\\)",
      "(B). \\(\\frac{n}{1 - a} + \\frac{a(1 - a^n)}{(1 - a)^2}\\)",
      "(C). \\(\\frac{n}{1 - a} + \\frac{a(1 + a^n)}{(1 - a)^2}\\)",
      "(D). -\\(\\frac{n}{1 - a} + \\frac{a(1 - a^n)}{(1 - a)^2}\\)"
    ],
    correct: "(A)"
  },
  // Q33
  {
    q: "If \\(3 + 5 + 9 + 17 + 33 + \\dots \\text{ to } n \\)\\(\\text{ terms} = 2^{n+1} + n - 2\\), then \\(n\\text{th}\\) term of LHS is",
    options: [
      "(A). \\(3^n - 1\\)",
      "(B). \\(2n + 1\\)",
      "(C). \\(2^n + 1\\)",
      "(D). \\(3n - 1\\)"
    ],
    correct: "(C)"
  },
  // Q34
  {
    q: "\\(7^{2n} + 3^{n-1} \\cdot 2^{3n-3}\\) is divisible by",
    options: [
      "(A). \\(24\\)",
      "(B). \\(25\\)",
      "(C). \\(9\\)",
      "(D). \\(13\\)"
    ],
    correct: "(B)"
  },
  // Q35
  {
    q: "For all \\(n \\in N\\), \\(10^n + 3 \\cdot 4^{n+2} + 5\\) is divisible by",
    options: [
      "(A). \\(23\\)",
      "(B). \\(3\\)",
      "(C). \\(9\\)",
      "(D). \\(207\\)"
    ],
    correct: "(C)"
  },
  // Q36
  {
    q: "If \\(n \\in N\\), then \\(x^{2n-1} + y^{2n-1}\\) is divisible by",
    options: [
      "(A). \\(x + y\\)",
      "(B). \\(x - y\\)",
      "(C). \\(x^2 + y^2\\)",
      "(D). none of these"
    ],
    correct: "(A)"
  },
  // Q37
  {
    q: "The sum of the cubes of three consecutive natural numbers is divisible by",
    options: [
      "(A). \\(7\\)",
      "(B). \\(9\\)",
      "(C). \\(25\\)",
      "(D). \\(26\\)"
    ],
    correct: "(B)"
  },
  // Q38
  {
    q: "\\(\\frac{(n + 2)!}{(n - 1)!}\\) is divisible by",
    options: [
      "(A). \\(6\\)",
      "(B). \\(11\\)",
      "(C). \\(24\\)",
      "(D). \\(26\\)"
    ],
    correct: "(A)"
  },
  // Q39
  {
    q: "For all \\(n \\in N\\), \\(n^4\\) is less than",
    options: [
      "(A). \\(10^n\\)",
      "(B). \\(4^n\\)",
      "(C). \\(5^n\\)",
      "(D). \\(10^{10}\\)"
    ],
    correct: "(A)"
  },
  // Q40
  {
    q: "For all \\(n \\in N\\), \\(1 + \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{3}} + \\dots + \\frac{1}{\\sqrt{n}}\\) is",
    options: [
      "(A). equal to \\(\\sqrt{n}\\)",
      "(B). less than or equal to \\(\\sqrt{n}\\)",
      "(C). greater than or equal to \\(\\sqrt{n}\\)",
      "(D). none of these"
    ],
    correct: "(B)"
  },
  // Q41
  {
    q: "For all \\(n \\in N\\), \\(\\sum n\\)",
    options: [
      "(A). < \\(\\frac{(2n + 1)^2}{8}\\)",
      "(B). > \\(\\frac{(2n + 1)^2}{8}\\)",
      "(C). = \\(\\frac{(2n + 1)^2}{8}\\)",
      "(D). none of these"
    ],
    correct: "(A)"
  },
  // Q42
  {
    q: "For all \\(n \\in N\\), \\(\\cos \\theta \\cos 2\\theta \\cos 4\\theta \\dots \\cos 2^{n-1} \\theta\\) equals to",
    options: [
      "(A). \\(\\frac{\\sin 2^n \\theta}{2^n \\sin \\theta}\\)",
      "(B). \\(\\frac{\\sin 2^n \\theta}{\\sin \\theta}\\)",
      "(C). \\(\\frac{\\cos 2^n \\theta}{2^n \\cos 2\\theta}\\)",
      "(D). \\(\\frac{\\cos 2^n \\theta}{2^n \\sin \\theta}\\)"
    ],
    correct: "(A)"
  },
  // Q43
  {
    q: "\\(\\frac{\\frac{1}{2}\\cdot\\frac{2}{2}}{1^3} + \\frac{\\frac{2}{2}\\cdot\\frac{3}{2}}{1^3 + 2^3} + \\frac{\\frac{3}{2}\\cdot\\frac{4}{2}}{1^3 + 2^3 + 3^3} + \\dots \\text{up to } n\\)\\( \\text{ terms} =\\)",
    options: [
      "(A). \\(\\frac{n - 1}{n}\\)",
      "(B). \\(\\frac{n}{n + 1}\\)",
      "(C). \\(\\frac{n + 1}{n + 2}\\)",
      "(D). \\(\\frac{n + 1}{n}\\)"
    ],
    correct: "(B)"
  },
  // Q44
  {
    q: "\\(\\frac{1}{3 \\cdot 5} + \\frac{1}{5 \\cdot 7} + \\frac{1}{7 \\cdot 9} + \\dots \\text{to } n \\text{ terms} =\\)",
    options: [
      "(A). \\(\\frac{n}{3(2n + 3)}\\)",
      "(B). \\(\\frac{n}{2n + 3}\\)",
      "(C). \\(\\frac{1}{(n + 2)(n + 4)}\\)",
      "(D). none of these"
    ],
    correct: "(A)"
  },
  // Q45
  {
    q: "For \\(n \\in N\\), \\(x^{n+1} + (x + 1)^{2n-1}\\) is divisible by",
    options: [
      "(A). \\(x\\)",
      "(B). \\(x + 1\\)",
      "(C). \\(x^2 + x + 1\\)",
      "(D). \\(x^2 - x + 1\\)"
    ],
    correct: "(C)"
  },
  // Q46
  {
    q: "The product of three consecutive natural numbers is divisible by",
    options: [
      "(A). \\(3\\)",
      "(B). \\(8\\)",
      "(C). \\(6\\)",
      "(D). \\(11\\)"
    ],
    correct: "(C)"
  },
  // Q47
  {
    q: "For \\(n \\in N\\), \\(3^{2n+2} - 2^3 n - 9\\) is divisible by",
    options: [
      "(A). \\(3\\)",
      "(B). \\(9\\)",
      "(C). \\(64\\)",
      "(D). \\(81\\)"
    ],
    correct: "(C)"
  },
  // Q48
  {
    q: "The sum to \\(n\\) terms of the series\n$$1 + 2\\left(1 + \\frac{1}{n}\\right) + 3\\left(1 + \\frac{1}{n}\\right)^2 + \\dots$$ is given by",
    options: [
      "(A). \\(n^2\\)",
      "(B). \\(n(n + 1)\\)",
      "(C). \\(n\\left(1 + \\frac{1}{n}\\right)^2\\)",
      "(D). none of these"
    ],
    correct: "(A)"
  },
  // Q49
  {
    q: "The sum to \\(n\\) terms of the series\n$$\\frac{3}{1^2} + \\frac{5}{1^2 + 2^2} + \\frac{7}{1^2 + 2^2 + 3^2} + \\dots, \\text{is}$$",
    options: [
      "(A). \\(\\frac{6n}{n + 1}\\)",
      "(B). \\(\\frac{9n}{n + 1}\\)",
      "(C). \\(\\frac{12n}{n + 1}\\)",
      "(D). \\(\\frac{3n}{n + 1}\\)"
    ],
    correct: "(A)"
  },
  // Q50
  {
    q: "The sum to \\(n\\) terms of the series\n$$\\frac{1}{\\sqrt{1} + \\sqrt{3}} + \\frac{1}{\\sqrt{3} + \\sqrt{5}} + \\frac{1}{\\sqrt{5} + \\sqrt{7}} +$$ \\dots, is",
    options: [
      "(A). \\(\\sqrt{2n + 1}\\)",
      "(B). \\(\\frac{1}{2}\\sqrt{2n + 1}\\)",
      "(C). \\(\\sqrt{2n + 1} - 1\\)",
      "(D). \\(\\frac{1}{2}(\\sqrt{2n + 1} - 1)\\)"
    ],
    correct: "(D)"
  }
 ]
};
