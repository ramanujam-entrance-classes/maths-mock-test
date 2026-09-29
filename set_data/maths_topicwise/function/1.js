window.SET_DATA = {
  title: "Function Mock Test 1",
  questions: [
    // Q1
    {
      q: "Which of the following functions has period \\(2\\pi\\)?",
      options: [
        "(A). \\(f(x) = \\sin\\left(2\\pi x + \\dfrac{\\pi}{3}\\right) + 2\\sin\\left(3\\pi x + \\dfrac{\\pi}{4}\\right) + 3\\sin 5\\pi x\\)",
        "(B). \\(f(x) = \\sin\\dfrac{\\pi x}{3} + \\sin\\dfrac{\\pi x}{4}\\)",
        "(C). \\(f(x) = \\sin x + \\cos 2x\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },
    // Q2
    {
      q: "If \\(f(x) = a^x\\), which of the following equalities hold?",
      options: [
        "(A). \\(f(x+2) - 2f(x+1) + f(x) = (a-1)^2 f(x)\\)",
        "(B). \\(f(-x)f(x) + 1 = 0\\)",
        "(C). \\(f(x+y) = f(x) + f(y)\\)",
        "(D). \\(f(x+3) - 2f(x+2) + f(x+1) = (a-2)^2 f(x+1)\\)"
      ],
      correct: "(A)"
    },
    // Q3
    {
      q: "The interval in which the function \\(y = \\dfrac{x-1}{x^2-3x+3}\\) transforms the real line is",
      options: [
        "(A). \\((0, \\infty)\\)",
        "(B). \\((-\\infty, \\infty)\\)",
        "(C). \\([0, 1]\\)",
        "(D). \\(\\left[-\\dfrac{1}{3}, 1\\right] - \\{0\\}\\)"
      ],
      correct: "(D)"
    },
    // Q4
    {
      q: "Let \\(f(x) = |x - 1|\\). Then,",
      options: [
        "(A). \\(f(x^2) = [f(x)]^2\\)",
        "(B). \\(f(|x|) = |f(x)|\\)",
        "(C). \\(f(x+y) = f(x) + f(y)\\)",
        "(D). none of these"
      ],
      correct: "(D)"
    },
    // Q5
    {
      q: "Let \\(C\\) denote the set of all complex numbers. The function \\(f: C \\to C\\) defined by \\(f(x) = \\dfrac{ax+b}{cx+d}\\) for \\(x \\in C\\), where \\(bd \\neq 0\\) reduces to a constant function if:",
      options: [
        "(A). \\(a = c\\)",
        "(B). \\(b = d\\)",
        "(C). \\(ad = bc\\)",
        "(D). \\(ab = cd\\)"
      ],
      correct: "(C)"
    },
    // Q6
    {
      q: "If \\(f(x) = ax + b\\) and \\(g(x) = cx + d\\), then \\(f(g(x)) = g(f(x)) \\Leftrightarrow\\)",
      options: [
        "(A). \\(f(a) = g(c)\\)",
        "(B). \\(f(b) = g(b)\\)",
        "(C). \\(f(d) = g(b)\\)",
        "(D). \\(f(c) = g(a)\\)"
      ],
      correct: "(C)"
    },
    // Q7
    {
      q: "The domain of definition of the function \\(f(x) = x \\cdot \\dfrac{1 + 2(x+4)^{-0.5}}{2-(x+4)^{0.5}} + (x+4)^{0.5} + 4(x+4)^{0.5}\\) is",
      options: [
        "(A). \\(R\\)",
        "(B). \\((-4, 4)\\)",
        "(C). \\(R^+\\)",
        "(D). \\((-4, 0) \\cup (0, \\infty)\\)"
      ],
      correct: "(D)"
    },
    // Q8
    {
      q: "Which of the following functions is not an injective map(s)?",
      options: [
        "(A). \\(f(x) = |x+1|,\\ x \\in [-1, \\infty)\\)",
        "(B). \\(g(x) = x + \\dfrac{1}{x},\\ x \\in (0, \\infty)\\)",
        "(C). \\(h(x) = x^2 + 4x - 5,\\ x \\in (0, \\infty)\\)",
        "(D). \\(k(x) = e^{-x},\\ x \\in [0, \\infty)\\)"
      ],
      correct: "(B)"
    },
    // Q9
    {
      q: `The maximum possible domain \\(D\\) and the corresponding range \\(E\\), for the real function \\(f(x) = (-1)^x\\) to exist is`,
      options: [
        "(A). \\(D = R,\\ E = [-1, 1]\\)",
        "(B). \\(D = I\\) (the set of integers), \\(E = [-1, 1]\\)",
        "(C). \\(D = R,\\ E = \\{-1, 1\\}\\)",
        `(D). \\(D = I,\\ E = \\begin{cases} +1 & \\text{when } x = 0 \\text{ or even} \\\\ -1, & \\text{when } x \\text{ is odd} \\end{cases}\\)`
      ],
      correct: "(D)"
    },
    // Q10
    {
      q: "The function \\(f(x) = \\log_{10}\\!\\left(x + \\sqrt{x^2+1}\\right)\\) is",
      options: [
        "(A). an even function",
        "(B). an odd function",
        "(C). periodic function",
        "(D). none of these"
      ],
      correct: "(B)"
    },
    // Q11
    {
      q: "The function \\(f(x) = \\cos\\!\\left\\{\\log_{10}\\!\\left(x + \\sqrt{x^2+1}\\right)\\right\\}\\) is",
      options: [
        "(A). even",
        "(B). odd",
        "(C). constant",
        "(D). none of these"
      ],
      correct: "(A)"
    },
    // Q12
    {
      q: "\\(f(x) = \\sqrt{\\sin^{-1}\\!\\left(\\log_2 x\\right)}\\) exists for",
      options: [
        "(A). \\(x \\in (1, 2)\\)",
        "(B). \\(x \\in [1, 2]\\)",
        "(C). \\(x \\in [2, \\infty)\\)",
        "(D). \\(x \\in (0, \\infty)\\)"
      ],
      correct: "(B)"
    },
    // Q13
    {
      q: "The function \\(f(x) = \\sqrt{\\cos(\\sin x)} + \\sin^{-1}\\!\\left(\\dfrac{1+x^2}{2x}\\right)\\) is defined for",
      options: [
        "(A). \\(x \\in \\{-1, 1\\}\\)",
        "(B). \\(x \\in [-1, 1]\\)",
        "(C). \\(x \\in R\\)",
        "(D). \\(x \\in (-1, 1)\\)"
      ],
      correct: "(A)"
    },
    // Q14
    {
      q: "The function \\(f(x) = |\\cos x|\\) is periodic with period",
      options: [
        "(A). \\(2\\pi\\)",
        "(B). \\(\\pi\\)",
        "(C). \\(\\dfrac{\\pi}{2}\\)",
        "(D). \\(\\dfrac{\\pi}{4}\\)"
      ],
      correct: "(B)"
    },
    // Q15
    {
      q: "If a function \\(f(x)\\) is defined for \\(x \\in [0, 1]\\), then the function \\(f(2x+3)\\) is defined for",
      options: [
        "(A). \\(x \\in [0, 1]\\)",
        "(B). \\(x \\in \\left[-\\dfrac{3}{2}, -1\\right]\\)",
        "(C). \\(x \\in R\\)",
        "(D). \\(x \\in \\left[-\\dfrac{3}{2}, 1\\right]\\)"
      ],
      correct: "(B)"
    },
    // Q16
    {
      q: "The period of the function \\(f(x) = \\sin^4 x + \\cos^4 x\\) is",
      options: [
        "(A). \\(\\pi\\)",
        "(B). \\(\\dfrac{\\pi}{2}\\)",
        "(C). \\(2\\pi\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },
    // Q17
    {
      q: "Which of the following functions is inverse of itself?",
      options: [
        "(A). \\(f(x) = \\dfrac{1-x}{1+x}\\)",
        "(B). \\(g(x) = 5^{\\log x}\\)",
        "(C). \\(h(x) = 2^{x(x-1)}\\)",
        "(D). none of these"
      ],
      correct: "(A)"
    },
    // Q18
    {
      q: "If \\(f(-x) = -f(x)\\), then \\(f(x)\\) is",
      options: [
        "(A). an even function",
        "(B). an odd function",
        "(C). neither odd nor even",
        "(D). periodic function"
      ],
      correct: "(B)"
    },
    // Q19
    {
      q: "The value of the function \\(f(x) = 3\\sin\\!\\left(\\sqrt{\\dfrac{\\pi^2}{16} - x^2}\\right)\\) lies in the interval",
      options: [
        "(A). \\(\\left[-\\dfrac{\\pi}{4}, \\dfrac{\\pi}{4}\\right]\\)",
        "(B). \\(\\left[0, \\dfrac{3}{\\sqrt{2}}\\right]\\)",
        "(C). \\((-3, 3)\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },
    // Q20
    {
      q: "If \\(f(x) = \\dfrac{x-1}{x+1}\\), then \\(f(2x)\\) is",
      options: [
        "(A). \\(\\dfrac{f(x)+1}{f(x)+3}\\)",
        "(B). \\(\\dfrac{3f(x)+1}{f(x)+3}\\)",
        "(C). \\(\\dfrac{f(x)+3}{f(x)+1}\\)",
        "(D). \\(\\dfrac{f(x)+3}{3f(x)+1}\\)"
      ],
      correct: "(B)"
    },
    // Q21
    {
      q: "Given \\(f(x) = \\log_{10}\\!\\left(\\dfrac{1+x}{1-x}\\right)\\) and \\(g(x) = \\dfrac{3x+x^3}{1+3x^2}\\), then \\(f \\circ g(x)\\) equals",
      options: [
        "(A). \\(-f(x)\\)",
        "(B). \\(3f(x)\\)",
        "(C). \\([f(x)]^3\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },
    // Q22
    {
      q: "If \\(f(x) = 2x^6 + 3x^4 + 4x^2\\), then \\(f'(x)\\) is",
      options: [
        "(A). an even function",
        "(B). an odd function",
        "(C). neither even nor odd",
        "(D). none of the above"
      ],
      correct: "(B)"
    },
    // Q23
    {
      q: "If \\(f(x)\\) is an even function, then the curve \\(y = f(x)\\) is symmetric about",
      options: [
        "(A). \\(x\\)-axis",
        "(B). \\(y\\)-axis",
        "(C). both the axes",
        "(D). none of these"
      ],
      correct: "(B)"
    },
    // Q24
    {
      q: "If \\(f(x)\\) is an odd function, then the curve \\(y = f(x)\\) is symmetric",
      options: [
        "(A). about \\(x\\)-axis",
        "(B). about \\(y\\)-axis",
        "(C). about both the axes",
        "(D). in opposite quadrants"
      ],
      correct: "(D)"
    },
    // Q25
    {
      q: "Which of the following functions is periodic?",
      options: [
        "(A). \\(f(x) = x + \\sin x\\)",
        "(B). \\(f(x) = \\cos\\sqrt{x}\\)",
        "(C). \\(f(x) = \\cos x^2\\)",
        "(D). \\(f(x) = \\cos^2 x\\)"
      ],
      correct: "(D)"
    },
    // Q26
    {
      q: "Let the function \\(f(x) = x^2 + x + \\sin x - \\cos x + \\log(1+|x|)\\) be defined on the interval \\([0, 1]\\). The odd extension of \\(f(x)\\) to the interval \\([-1, 1]\\) is",
      options: [
        "(A). \\(x^2 + x + \\sin x + \\cos x - \\log(1+|x|)\\)",
        "(B). \\(-x^2 + x + \\sin x + \\cos x - \\log(1+|x|)\\)",
        "(C). \\(-x^2 + x + \\sin x - \\cos x + \\log(1+|x|)\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },
    // Q27
    {
      q: "The domain of definition of the function \\(f(x) = {}^{7-x}P_{x-3}\\) is",
      options: [
        "(A). \\([3, 7]\\)",
        "(B). \\(\\{3, 4, 5, 6, 7\\}\\)",
        "(C). \\(\\{3, 4, 5\\}\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },
    // Q28
    {
      q: "The range of the function \\(f(x) = {}^{7-x}P_{x-3}\\) is",
      options: [
        "(A). \\(\\{1, 2, 3\\}\\)",
        "(B). \\(\\{1, 2, 3, 4, 5, 6\\}\\)",
        "(C). \\(\\{1, 2, 3, 4\\}\\)",
        "(D). \\(\\{1, 2, 3, 4, 5\\}\\)"
      ],
      correct: "(A)"
    },
    // Q29
    {
      q: "If \\(f(x) = \\cos^{-1}\\!\\left(\\dfrac{2-|x|}{4}\\right) + \\left[\\log_{10}(3-x)\\right]^{-1}\\), then its domain is",
      options: [
        "(A). \\([-2, 6]\\)",
        "(B). \\([-6, 2) \\cup (2, 3)\\)",
        "(C). \\([-6, 2]\\)",
        "(D). \\([-2, 2) \\cup (2, 3]\\)"
      ],
      correct: "(B)"
    },
    // Q30
    {
      q: "If \\(D\\) is the set of all real \\(x\\) such that \\(1 - e^{\\frac{1}{x}-1}\\) is positive, then \\(D\\) is equal to",
      options: [
        "(A). \\((-\\infty, 1]\\)",
        "(B). \\((-\\infty, 0)\\)",
        "(C). \\((1, \\infty)\\)",
        "(D). \\((-\\infty, 0) \\cup (1, \\infty)\\)"
      ],
      correct: "(D)"
    },
    // Q31
    {
      q: `If \\(f(x)\\) is defined on \\([0, 1]\\) by the rule \\(f(x) = \\begin{cases} x, & \\text{if } x \\text{ is rational} \\\\ 1-x, & \\text{if } x \\text{ is irrational} \\end{cases}\\), then for all \\(x \\in [0, 1]\\), \\(f(f(x))\\) is`,
      options: [
        "(A). constant",
        "(B). \\(1+x\\)",
        "(C). \\(x\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },
    // Q32
    {
      q: "The function \\(f(x) = \\dfrac{\\sin^4 x + \\cos^4 x}{x + x^2 \\tan x}\\) is",
      options: [
        "(A). even",
        "(B). odd",
        "(C). periodic with period \\(\\pi\\)",
        "(D). periodic with period \\(2\\pi\\)"
      ],
      correct: "(B)"
    },
    // Q33
    {
      q: "The function \\(f(x) = \\dfrac{\\sec^4 x + cosec^4 x}{x^3 + x^4 \\cot x}\\) is",
      options: [
        "(A). even",
        "(B). odd",
        "(C). neither even nor odd",
        "(D). periodic with period \\(\\pi\\)"
      ],
      correct: "(B)"
    },
    // Q34
    {
      q: "Let \\(f(x) = x\\) and \\(g(x) = |x|\\) for all \\(x \\in R\\). Then, the function \\(\\phi(x)\\) satisfying \\([\\phi(x) - f(x)]^2 + [\\phi(x) - g(x)]^2 = 0\\) is",
      options: [
        "(A). \\(\\phi(x) = x,\\ x \\in [0, \\infty)\\)",
        "(B). \\(\\phi(x) = x,\\ x \\in R\\)",
        "(C). \\(\\phi(x) = -x,\\ x \\in (-\\infty, 0]\\)",
        "(D). \\(\\phi(x) = x + |x|,\\ x \\in R\\)"
      ],
      correct: "(A)"
    },
    // Q35
    {
      q: "Let \\(f: R \\to R\\) be a function defined by \\(f(x) = -\\dfrac{|x|^3 + |x|}{1+x^2}\\), then the graph of \\(f(x)\\) lies in the",
      options: [
        "(A). I and II quadrants",
        "(B). I and III quadrants",
        "(C). II and III quadrants",
        "(D). III and IV quadrants"
      ],
      correct: "(D)"
    },
    // Q36
    {
      q: "The function \\(f(x) = \\log_{10}\\!\\left(\\dfrac{1+x}{1-x}\\right)\\) satisfies the equation",
      options: [
        "(A). \\(f(x+2) - 2f(x+1) + f(x) = 0\\)",
        "(B). \\(f(x+1) + f(x) = f(x(x+1))\\)",
        "(C). \\(f(x_1)f(x_2) = f(x_1 + x_2)\\)",
        "(D). \\(f(x_1) + f(x_2) = f\\!\\left(\\dfrac{x_1+x_2}{1+x_1 x_2}\\right)\\)"
      ],
      correct: "(D)"
    },
    // Q37
    {
      q: "If a function \\(f(x)\\) satisfies the condition \\(f\\!\\left(x + \\dfrac{1}{x}\\right) = x^2 + \\dfrac{1}{x^2}\\), \\(x \\neq 0\\), then \\(f(x)\\) equals",
      options: [
        "(A). \\(x^2 - 2\\) for all \\(x \\neq 0\\)",
        "(B). \\(x^2 - 2\\) for all \\(x\\) satisfying \\(|x| \\geq 2\\)",
        "(C). \\(x^2 - 2\\) for all \\(x\\) satisfying \\(|x| < 2\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },
    // Q38
    {
      q: "If \\(f(x+2y,\\ x-2y) = xy\\), then \\(f(x, y)\\) equals",
      options: [
        "(A). \\(\\dfrac{x^2-y^2}{8}\\)",
        "(B). \\(\\dfrac{x^2-y^2}{4}\\)",
        "(C). \\(\\dfrac{x^2+y^2}{4}\\)",
        "(D). \\(\\dfrac{x^2-y^2}{2}\\)"
      ],
      correct: "(A)"
    },
    // Q39
    {
      q: "If \\(f(x) = x - \\dfrac{1}{x}\\), \\(x \\neq 0\\), then \\(f(x^2)\\) equals",
      options: [
        "(A). \\(f(x) + f(-x)\\)",
        "(B). \\(f(x)f(-x)\\)",
        "(C). \\(f(x) - f(-x)\\)",
        "(D). none of these"
      ],
      correct: "(D)"
    },
    // Q40
    {
      q: "A polynomial function \\(f(x)\\) satisfies the condition \\(f(x)f\\!\\left(\\dfrac{1}{x}\\right) = f(x) + f\\!\\left(\\dfrac{1}{x}\\right)\\). If \\(f(10) = 1001\\), then \\(f(20) =\\)",
      options: [
        "(A). 2002",
        "(B). 8008",
        "(C). 8001",
        "(D). none of these"
      ],
      correct: "(C)"
    },
    // Q41
    {
      q: "The function \\(f(x) = \\max\\{(1-x),\\ (1+x),\\ 2\\}\\), \\(x \\in (-\\infty, \\infty)\\) is equivalent to",
      options: [
        `(A). \\(f(x) = \\begin{cases} 1-x, & x \\leq -1 \\\\ 2, & -1 < x < 1 \\\\ 1+x, & x \\geq 1 \\end{cases}\\)`,
        `(B). \\(f(x) = \\begin{cases} 1+x, & x \\leq -1 \\\\ 2, & -1 < x < 1 \\\\ 1-x, & x \\geq 1 \\end{cases}\\)`,
        `(C). \\(f(x) = \\begin{cases} 1-x, & x \\leq -1 \\\\ 1, & -1 < x < 1 \\\\ 1+x, & x \\geq 1 \\end{cases}\\)`,
        "(D). none of these"
      ],
      correct: "(A)"
    },
    // Q42
    {
      q: "If \\(f(x) = x^3 - x\\) and \\(\\phi(x) = \\sin 2x\\), then",
      options: [
        "(A). \\(\\phi(f(2)) = \\sin 2\\)",
        "(B). \\(\\phi(f(1)) = 1\\)",
        "(C). \\(f\\!\\left(\\phi\\!\\left(\\dfrac{\\pi}{12}\\right)\\right) = -\\dfrac{3}{8}\\)",
        "(D). \\(f(f(1)) = 2\\)"
      ],
      correct: "(C)"
    },
    // Q43
    {
      q: "Let \\(f(x) = \\min\\{x,\\ x^2\\}\\), for every \\(x \\in R\\). Then,",
      options: [
        `(A). \\(f(x) = \\begin{cases} x, & x \\geq 1 \\\\ x^2, & 0 \\leq x < 1 \\\\ x, & x < 0 \\end{cases}\\)`,
        `(B). \\(f(x) = \\begin{cases} x^2, & x \\geq 1 \\\\ x, & x < 1 \\end{cases}\\)`,
        `(C). \\(f(x) = \\begin{cases} x, & x \\geq 1 \\\\ x^2, & x < 1 \\end{cases}\\)`,
        `(D). \\(f(x) = \\begin{cases} x^2, & x \\geq 1 \\\\ x, & 0 \\leq x < 1 \\\\ x^2, & x < 0 \\end{cases}\\)`
      ],
      correct: "(A)"
    },
    // Q44
    {
      q: "The domain of the function \\(f(x)\\) given by \\(f(x) = \\dfrac{\\sqrt{4-x^2}}{\\sin^{-1}(2-x)}\\) is",
      options: [
        "(A). \\([0, 2]\\)",
        "(B). \\([0, 2)\\)",
        "(C). \\([1, 2)\\)",
        "(D). \\([1, 2]\\)"
      ],
      correct: "(C)"
    },
    // Q45
    {
      q: "The domain of the function \\(f(x)\\) given by \\(f(x) = \\sqrt{\\dfrac{-\\log_{0.3}(x-1)}{-x^2+3x+18}}\\) is",
      options: [
        "(A). \\([2, 6]\\)",
        "(B). \\((2, 6)\\)",
        "(C). \\([2, 6)\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },
    // Q46
    {
      q: "The domain of definition of the function \\(f(x) = \\sqrt{\\log_{10}\\!\\left(\\dfrac{5x-x^2}{4}\\right)}\\) is",
      options: [
        "(A). \\([1, 4]\\)",
        "(B). \\((1, 4)\\)",
        "(C). \\((0, 5)\\)",
        "(D). \\([0, 5]\\)"
      ],
      correct: "(A)"
    },
    // Q47
    {
      q: "The range of the function \\(f(x) = \\dfrac{1}{2-\\cos 3x}\\) is [EAMCET 2007]",
      options: [
        "(A). \\(\\left[-\\dfrac{1}{3}, 0\\right]\\)",
        "(B). \\(R\\)",
        "(C). \\(\\left[\\dfrac{1}{3}, 1\\right]\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },
    // Q48
    {
      q: "If the function \\(f: R \\to A\\) given by \\(f(x) = \\dfrac{x^2}{x^2+1}\\) is a surjection, then \\(A =\\)",
      options: [
        "(A). \\(R\\)",
        "(B). \\([0, 1]\\)",
        "(C). \\((0, 1]\\)",
        "(D). \\([0, 1)\\)"
      ],
      correct: "(D)"
    },
    // Q49
    {
      q: "The domain of definition of the function \\(f(x) = \\dfrac{1}{\\sqrt{|x|-x}}\\) is",
      options: [
        "(A). \\(R\\)",
        "(B). \\((0, \\infty)\\)",
        "(C). \\((-\\infty, 0)\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },
    // Q50
    {
      q: "The set of values of \\(x\\) for which the function \\(f(x) = \\dfrac{1}{x} + 2^{\\sin^{-1}x} + \\dfrac{1}{\\sqrt{x-2}}\\) exists is",
      options: [
        "(A). \\(R\\)",
        "(B). \\(R - \\{0\\}\\)",
        "(C). \\(\\phi\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    }
  ]
};
