window.SET_DATA = {
  title: "Mathematical Induction Mock Test 2",
  questions: [
  // Q1
  {
    q: "\\(1 \\cdot 2^1 + 2 \\cdot 2^2 + 3 \\cdot 2^3 + \\dots + n \\cdot 2^n\\) is equal to:",
    options: [
      "(A). \\((n - 1)2^{n+1} + 2\\)",
      "(B). \\(n2^{n+1} - 2\\)",
      "(C). \\((n + 1)2^n - 2\\)",
      "(D). \\((n - 1)2^n + 2\\)"
    ],
    correct: "(A)"
  },
  // Q2
  {
    q: "The greatest integer dividing \\(n(n^2 - 1)(n^2 - 4)\\) for all \\(n \\in \\mathbb{N}\\) is:",
    options: [
      "(A). \\(24\\)",
      "(B). \\(60\\)",
      "(C). \\(120\\)",
      "(D). \\(180\\)"
    ],
    correct: "(C)"
  },
  // Q3
  {
    q: "\\(\\sum_{k=1}^{n} k(k!)\\) is equal to:",
    options: [
      "(A). \\((n + 1)! - 1\\)",
      "(B). \\(n! - 1\\)",
      "(C). \\((n + 1)! + 1\\)",
      "(D). \\(n! + 1\\)"
    ],
    correct: "(A)"
  },
  // Q4
  {
    q: "\\(\\sum_{k=1}^{n} \\frac{k}{(k + 1)!}\\) is equal to:",
    options: [
      "(A). \\(1 - \\frac{1}{(n + 1)!}\\)",
      "(B). \\(\\frac{1}{(n + 1)!}\\)",
      "(C). \\(1 - \\frac{1}{n!}\\)",
      "(D). \\(\\frac{n}{(n + 1)!}\\)"
    ],
    correct: "(A)"
  },
  // Q5
  {
    q: "\\(2^{3n} - 7n - 1\\) is divisible by:",
    options: [
      "(A). \\(7\\)",
      "(B). \\(14\\)",
      "(C). \\(49\\)",
      "(D). \\(21\\)"
    ],
    correct: "(C)"
  },
  // Q6
  {
    q: "\\(1 + 2 + 2^2 + 2^3 + \\dots + 2^{n-1}\\) is equal to:",
    options: [
      "(A). \\(2^n - 1\\)",
      "(B). \\(2^{n-1} - 1\\)",
      "(C). \\(2^{n+1} - 1\\)",
      "(D). \\(2^n + 1\\)"
    ],
    correct: "(A)"
  },
  // Q7
  {
    q: "If \\(n\\) is an odd positive integer, \\(n(n^2 - 1)\\) is divisible by:",
    options: [
      "(A). \\(12\\)",
      "(B). \\(24\\)",
      "(C). \\(36\\)",
      "(D). \\(48\\)"
    ],
    correct: "(B)"
  },
  // Q8
  {
    q: "\\(1 + 4 + 7 + \\dots + (3n - 2)\\) is equal to:",
    options: [
      "(A). \\(\\frac{n(3n - 1)}{2}\\)",
      "(B). \\(\\frac{n(3n + 1)}{2}\\)",
      "(C). \\(\\frac{3n^2 - 1}{2}\\)",
      "(D). \\(n(3n - 2)\\)"
    ],
    correct: "(A)"
  },
  // Q9
  {
    q: "\\(3^{2n+1} + 2^{n+2}\\) is divisible by \\(7\\) for all:",
    options: [
      "(A). \\(n \\in \\mathbb{N}\\)",
      "(B). \\text{Even } n\\)",
      "(C). \\text{Odd } n\\)",
      "(D). \\(n \\ge 2\\)"
    ],
    correct: "(A)"
  },
  // Q10
  {
    q: "\\(1^2 - 2^2 + 3^2 - 4^2 + \\dots + (-1)^{n-1}n^2\\) is equal to:",
    options: [
      "(A). \\((-1)^{n-1} \\frac{n(n + 1)}{2}\\)",
      "(B). \\((-1)^n \\frac{n(n + 1)}{2}\\)",
      "(C). \\(\\frac{n(n + 1)}{2}\\)",
      "(D). \\((-1)^{n-1} n^2\\)"
    ],
    correct: "(A)"
  },
  // Q11
  {
    q: "\\(3^{3n} - 26n - 1\\) is divisible by:",
    options: [
      "(A). \\(13\\)",
      "(B). \\(169\\)",
      "(C). \\(676\\)",
      "(D). \\(26\\)"
    ],
    correct: "(C)"
  },
  // Q12
  {
    q: "For \\(n \\ge 1, 1 + \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{3}} + \\dots + \\frac{1}{\\sqrt{n}} >\\):",
    options: [
      "(A). \\(\\sqrt{n}\\)",
      "(B). \\(n\\)",
      "(C). \\(2\\sqrt{n}\\)",
      "(D). \\(\\frac{\\sqrt{n}}{2}\\)"
    ],
    correct: "(A)"
  },
  // Q13
  {
    q: "For all \\(n \\in \\mathbb{N}, n^5 - 5n^3 + 4n\\) is divisible by:",
    options: [
      "(A). \\(24\\)",
      "(B). \\(60\\)",
      "(C). \\(120\\)",
      "(D). \\(240\\)"
    ],
    correct: "(C)"
  },
  // Q14
  {
    q: "\\(1 + \\frac{1}{2^2} + \\frac{1}{3^2} + \\dots + \\frac{1}{n^2} <\\):",
    options: [
      "(A). \\(2 - \\frac{1}{n}\\)",
      "(B). \\(2 + \\frac{1}{n}\\)",
      "(C). \\(1 - \\frac{1}{n}\\)",
      "(D). \\(2 - \\frac{1}{n^2}\\)"
    ],
    correct: "(A)"
  },
  // Q15
  {
    q: "\\(2^{n+2} \\cdot 3^n + 5n - 4\\) is divisible by \\(25\\) for all:",
    options: [
      "(A). \\(n \\in \\mathbb{N}\\)",
      "(B). \\text{Odd } n\\)",
      "(C). \\text{Even } n\\)",
      "(D). \\(n \\ge 5\\)"
    ],
    correct: "(A)"
  },
  // Q16
  {
    q: "\\(1 \\cdot n + 2(n - 1) + 3(n - 2) + \\dots + n \\cdot 1\\) is equal to:",
    options: [
      "(A). \\(\\frac{n(n + 1)(n + 2)}{6}\\)",
      "(B). \\(\\frac{n(n + 1)(2n + 1)}{6}\\)",
      "(C). \\(\\frac{n^2(n + 1)}{4}\\)",
      "(D). \\(\\frac{n(n + 1)}{3}\\)"
    ],
    correct: "(A)"
  },
  // Q17
  {
    q: "\\(6^{n+2} + 7^{2n+1}\\) is divisible by \\(43\\) for all:",
    options: [
      "(A). \\(n \\in \\mathbb{N}\\)",
      "(B). Even \\(n\\)",
      "(C). Odd \\(n\\)",
      "(D). \\(n > 3\\)"
    ],
    correct: "(A)"
  },
  // Q18
  {
	q: "If \\(A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}\\), then \\(A^n\\) for \\(n \\in \\mathbb{N}\\) is:",
	options: [
		"(A). \\(\\begin{bmatrix} 1 & n \\\\ 0 & 1 \\end{bmatrix}\\)",
		"(B). \\(\\begin{bmatrix} 1 & 1 \\\\ 0 & n \\end{bmatrix}\\)",
		"(C). \\(\\begin{bmatrix} n & n \\\\ 0 & n \\end{bmatrix}\\)",
		"(D). \\(\\begin{bmatrix} 1 & 2^n \\\\ 0 & 1 \\end{bmatrix}\\)"
	],
	correct: "(A)"
  },
  // Q19
  {
    q: "\\(n^3 + 5n\\) is divisible by \\(6\\) for all:",
    options: [
      "(A). \\(n \\in \\mathbb{N}\\)",
      "(B). \\(\\text{Even } n\\)",
      "(C). \\(\\text{Odd } n\\)",
      "(D). \\(n > 10\\)"
    ],
    correct: "(A)"
  },
  // Q20
  {
	q: "If \\(A = \\begin{bmatrix} \\cos \\theta & \\sin \\theta \\\\ -\\sin \\theta & \\cos \\theta \\end{bmatrix}\\), then \\(A^n\\) is:",
	options: [
		"(A). \\(\\begin{bmatrix} \\cos n\\theta & \\sin n\\theta \\\\ -\\sin n\\theta & \\cos n\\theta \\end{bmatrix}\\)",
		"(B). \\(\\begin{bmatrix} \\cos^n \\theta & \\sin^n \\theta \\\\ -\\sin^n \\theta & \\cos^n \\theta \\end{bmatrix}\\)",
		"(C). \\(\\begin{bmatrix} n \\cos \\theta & n \\sin \\theta \\\\ -n \\sin \\theta & n \\cos \\theta \\end{bmatrix}\\)",
		"(D). \\(\\begin{bmatrix} \\cos n\\theta & -\\sin n\\theta \\\\ \\sin n\\theta & \\cos n\\theta \\end{bmatrix}\\)"
	],
	correct: "(A)"
  },
  // Q21
  {
    q: "\\(n(n^2 - 1)(n + 2)\\) is always divisible by:",
    options: [
      "(A). \\(12\\)",
      "(B). \\(24\\)",
      "(C). \\(36\\)",
      "(D). \\(48\\)"
    ],
    correct: "(B)"
  },
  // Q22
  {
    q: "De Moivre's Theorem states\n$$(\\cos \\theta + i \\sin \\theta)^n =:$$",
    options: [
      "(A). \\(\\cos n\\theta + i \\sin n\\theta\\)",
      "(B). \\(\\cos^n \\theta + i \\sin^n \\theta\\)",
      "(C). \\(n(\\cos \\theta + i \\sin \\theta)\\)",
      "(D). \\(\\cos n\\theta - i \\sin n\\theta\\)"
    ],
    correct: "(A)"
  },
  // Q23
  {
    q: "\\(5^{2n} - 3^{2n}\\) is divisible by \\(16\\) for all:",
    options: [
      "(A). \\(n \\in \\mathbb{N}\\)",
      "(B). \\(\\text{Even } n\\)",
      "(C). \\(\\text{Odd } n\\)",
      "(D). \\(n > 2\\)"
    ],
    correct: "(A)"
  },
  // Q24
  {
    q: "\\(1^2 + 3^2 + 5^2 + \\dots + (2n - 1)^2\\) is equal to:",
    options: [
      "(A). \\(\\frac{n(4n^2 - 1)}{3}\\)",
      "(B). \\(\\frac{n(2n + 1)(2n - 1)}{6}\\)",
      "(C). \\(\\frac{4n^3 - n}{6}\\)",
      "(D). \\(\\frac{n(n + 1)(2n + 1)}{3}\\)"
    ],
    correct: "(A)"
  },
  // Q25
  {
    q: "\\(1 + 3 + 5 + \\dots + (2n - 1)\\) is equal to:",
    options: [
      "(A). \\(n^2\\)",
      "(B). \\(n(n + 1)\\)",
      "(C). \\(n(n - 1)\\)",
      "(D). \\(2n^2\\)"
    ],
    correct: "(A)"
  },
  // Q26
  {
    q: "For all \\(n \\in \\mathbb{N}, 5^{2n} - 1\\) is divisible by:",
    options: [
      "(A). \\(12\\)",
      "(B). \\(24\\)",
      "(C). \\(13\\)",
      "(D). \\(25\\)"
    ],
    correct: "(B)"
  },
  // Q27
  {
    q: "\\(1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\dots + n(n + 1)\\) is equal to:",
    options: [
      "(A). \\(\\frac{n(n + 1)(n + 2)}{3}\\)",
      "(B). \\(\\frac{n(n + 1)(2n + 1)}{3}\\)",
      "(C). \\(\\frac{n(n + 1)(n + 2)}{6}\\)",
      "(D). \\(\\frac{n(n + 1)}{3}\\)"
    ],
    correct: "(A)"
  },
  // Q28
  {
    q: "The number \\(n(n^2 - 1)\\) is always divisible by:",
    options: [
      "(A). \\(6\\)",
      "(B). \\(12\\)",
      "(C). \\(24\\)",
      "(D). \\(5\\)"
    ],
    correct: "(A)"
  },
  // Q29
  {
    q: "\\(\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\dots + \\frac{1}{n(n + 1)}\\) is equal to:",
    options: [
      "(A). \\(\\frac{n}{n + 1}\\)",
      "(B). \\(\\frac{1}{n + 1}\\)",
      "(C). \\(\\frac{n + 1}{n}\\)",
      "(D). \\(\\frac{n}{2(n + 1)}\\)"
    ],
    correct: "(A)"
  },
  // Q30
  {
    q: "\\(2^{3n} - 1\\) is divisible by \\(7\\) for all:",
    options: [
      "(A). \\(n \\in \\mathbb{N}\\)",
      "(B). \\(\\text{Even } n \\text{ only}\\)",
      "(C). \\(\\text{Prime } n \\text{ only}\\)",
      "(D). \\(n > 5\\)"
    ],
    correct: "(A)"
  },
  // Q31
  {
    q: "\\(\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\frac{1}{5 \\cdot 7} + \\dots + \\frac{1}{(2n - 1)(2n + 1)}\\) is equal to:",
    options: [
      "(A). \\(\\frac{n}{2n + 1}\\)",
      "(B). \\(\\frac{1}{2n + 1}\\)",
      "(C). \\(\\frac{2n}{2n + 1}\\)",
      "(D). \\(\\frac{n}{2(2n + 1)}\\)"
    ],
    correct: "(A)"
  },
  // Q32
  {
    q: "\\(n^5 - n\\) is divisible by \\(5\\) for:",
    options: [
      "(A). \\(n = 5 \\text{ only}\\)",
      "(B). \\(n \\text{ being odd only}\\)",
      "(C). \\(\\text{Every } n \\in \\mathbb{N}\\)",
      "(D). \\(\\text{No value of } n\\)"
    ],
    correct: "(C)"
  },
  // Q33
  {
    q: "For \\(x > -1\\) and \\(n \\in \\mathbb{N}\\), Bernoulli's Inequality states \\((1 + x)^n \\ge\\):",
    options: [
      "(A). \\(1 + nx\\)",
      "(B). \\(1 + n^2 x\\)",
      "(C). \\(1 + x^n\\)",
      "(D). \\(n + x\\)"
    ],
    correct: "(A)"
  },
  // Q34
  {
    q: "The expression \\(4^n + 15n - 1\\) is divisible by:",
    options: [
      "(A). \\(3\\)",
      "(B). \\(6\\)",
      "(C). \\(9\\)",
      "(D). \\(12\\)"
    ],
    correct: "(C)"
  },
  // Q35
  {
    q: "For all integers \\(n \\ge 4, 2^n <\\):",
    options: [
      "(A). \\(n!\\)",
      "(B). \\(n^2\\)",
      "(C). \\(2n\\)",
      "(D). \\(n^3\\)"
    ],
    correct: "(A)"
  },
  // Q36
  {
    q: "\\(n(n + 1)(n + 2)(n + 3)\\) is divisible by which largest integer for all \\(n \\in \\mathbb{N}\\)?",
    options: [
      "(A). \\(6\\)",
      "(B). \\(12\\)",
      "(C). \\(24\\)",
      "(D). \\(48\\)"
    ],
    correct: "(C)"
  },
  // Q37
  {
    q: "\\(\\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right)\\dots\\left(1 - \\frac{1}{n + 1}\\right)\\) is equal to:",
    options: [
      "(A). \\(\\frac{1}{n + 1}\\)",
      "(B). \\(\\frac{n}{n + 1}\\)",
      "(C). \\(\\frac{1}{n}\\)",
      "(D). \\(\\frac{2}{n + 1}\\)"
    ],
    correct: "(A)"
  },
  // Q38
  {
    q: "For \\(n \\ge 1, 3^{2n} + 7\\) is divisible by:",
    options: [
      "(A). \\(4\\)",
      "(B). \\(8\\)",
      "(C). \\(16\\)",
      "(D). \\(3\\)"
    ],
    correct: "(B)"
  },
  // Q39
  {
    q: "\\(\\left(1 + \\frac{1}{1}\\right)\\left(1 + \\frac{1}{2}\\right)\\left(1 + \\frac{1}{3}\\right)\\dots\\left(1 + \\frac{1}{n}\\right)\\) is equal to:",
    options: [
      "(A). \\(n + 1\\)",
      "(B). \\(n\\)",
      "(C). \\(\\frac{n + 1}{2}\\)",
      "(D). \\(\\frac{1}{n}\\)"
    ],
    correct: "(A)"
  },
  // Q40
  {
    q: "For all \\(n \\in \\mathbb{N}, 11^{n+2} + 12^{2n+1}\\) is divisible by:",
    options: [
      "(A). \\(133\\)",
      "(B). \\(121\\)",
      "(C). \\(144\\)",
      "(D). \\(132\\)"
    ],
    correct: "(A)"
  },
  // Q41
  {
    q: "\\(\\cos \\theta \\cdot \\cos 2\\theta \\cdot \\cos 4\\theta \\dots \\cos(2^{n-1}\\theta)\\) is equal to:",
    options: [
      "(A). \\(\\frac{\\sin(2^n \\theta)}{2^n \\sin \\theta}\\)",
      "(B). \\(\\frac{\\cos(2^n \\theta)}{2^n \\sin \\theta}\\)",
      "(C). \\(\\frac{\\sin(2^n \\theta)}{\\sin \\theta}\\)",
      "(D). \\(\\frac{\\sin(2^{n-1} \\theta)}{2^n \\sin \\theta}\\)"
    ],
    correct: "(A)"
  },
  // Q42
  {
    q: "For all \\(n \\in \\mathbb{N}, 2 \\cdot 7^n + 3 \\cdot 5^n - 5\\) is divisible by:",
    options: [
      "(A). \\(12\\)",
      "(B). \\(24\\)",
      "(C). \\(35\\)",
      "(D). \\(70\\)"
    ],
    correct: "(B)"
  },
  // Q43
  {
    q: "\\(1 \\cdot 2^1 + 2 \\cdot 2^2 + 3 \\cdot 2^3 + \\dots + n \\cdot 2^n\\) is equal to:",
    options: [
      "(A). \\((n - 1)2^{n+1} + 2\\)",
      "(B). \\(n2^{n+1} - 2\\)",
      "(C). \\((n + 1)2^n - 2\\)",
      "(D). \\((n - 1)2^n + 2\\)"
    ],
    correct: "(A)"
  },
  // Q44
  {
    q: "\\(\\sum_{k=1}^{n} k(k!)\\) is equal to:",
    options: [
      "(A). \\((n + 1)! - 1\\)",
      "(B). \\(n! - 1\\)",
      "(C). \\((n + 1)! + 1\\)",
      "(D). \\(n(n!)\\)"
    ],
    correct: "(A)"
  },
  // Q45
  {
    q: "For \\(n \\in \\mathbb{N}, n^3 + (n + 1)^3 + (n + 2)^3\\) is always divisible by:",
    options: [
      "(A). \\(6\\)",
      "(B). \\(9\\)",
      "(C). \\(18\\)",
      "(D). \\(27\\)"
    ],
    correct: "(B)"
  },
  // Q46
  {
    q: "\\(\\sum_{k=1}^{n} \\frac{k}{(k + 1)!}\\) is equal to:",
    options: [
      "(A). \\(1 - \\frac{1}{(n + 1)!}\\)",
      "(B). \\(\\frac{1}{(n + 1)!}\\)",
      "(C). \\(1 - \\frac{1}{n!}\\)",
      "(D). \\(\\frac{n}{(n + 1)!}\\)"
    ],
    correct: "(A)"
  },
  // Q47
  {
    q: "For all \\(n \\in \\mathbb{N}, 7^n - 3^n\\) is always divisible by:",
    options: [
      "(A). \\(3\\)",
      "(B). \\(4\\)",
      "(C). \\(5\\)",
      "(D). \\(6\\)"
    ],
    correct: "(B)"
  },
  // Q48
  {
    q: "\\(1 + 2 + 3 + \\dots + n\\) is equal to:",
    options: [
      "(A). \\(\\frac{n(n + 1)}{2}\\)",
      "(B). \\(\\frac{n(n - 1)}{2}\\)",
      "(C). \\(n(n + 1)\\)",
      "(D). \\(\\frac{n^2}{2}\\)"
    ],
    correct: "(A)"
  },
  // Q49
  {
    q: "\\(10^n + 3(4^{n+2}) + 5\\) is divisible by which integer for all \\(n \\in \\mathbb{N}\\)?",
    options: [
      "(A). \\(9\\)",
      "(B). \\(7\\)",
      "(C). \\(11\\)",
      "(D). \\(13\\)"
    ],
    correct: "(A)"
  },
  // Q50
  {
    q: "\\(1^2 + 2^2 + 3^2 + \\dots + n^2\\) is equal to:",
    options: [
      "(A). \\(\\frac{n(n + 1)(2n + 1)}{6}\\)",
      "(B). \\(\\left[\\frac{n(n + 1)}{2}\\right]^2\\)",
      "(C). \\(\\frac{n(n + 1)(n + 2)}{6}\\)",
      "(D). \\(\\frac{n(2n + 1)}{6}\\)"
    ],
    correct: "(A)"
  }
 ]
};
