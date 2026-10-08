window.SET_DATA = {
  title: "Inequality Mock Test 2",
  questions: [
    // Q1
    {
      q: "The graph of a real-valued function \\(f(x)\\) is the following. (The graph shows \\(y = 0\\) for \\(x \\leq 0\\) and \\(y = 2x\\) for \\(x > 0\\).) The function is",
      options: [
        "(A). \\(f(x) = x - |x|\\)",
        "(B). \\(f(x) = x + |x|\\)",
        "(C). \\(f(x) = 2x\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },

    // Q2
    {
      q: "If \\(f(x + y,\\ x - y) = xy\\) then the arithmetic mean of \\(f(x, y)\\) and \\(f(y, x)\\) is",
      options: [
        "(A). \\(x\\)",
        "(B). \\(y\\)",
        "(C). \\(0\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },

    // Q3
    {
      q: "The graph of the function \\(y = f(x)\\) is symmetrical about the line \\(x = 2\\). Then",
      options: [
        "(A). \\(f(x + 2) = f(x - 2)\\)",
        "(B). \\(f(2 + x) = f(2 - x)\\)",
        "(C). \\(f(x) = f(-x)\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },

    // Q4
    {
      q: "Let \\(f(x) = \\begin{cases} x^2, & 0 < x < 2 \\\\ 2x - 3, & 2 \\leq x < 3 \\\\ x + 2, & x \\geq 3 \\end{cases}\\). Then (one or more options may be correct)",
      options: [
        "(A). \\(f\\{f(f(3/2))\\} = f(3/2)\\)",
        "(B). \\(1 + f\\{f(f(5/2))\\} = f(5/2)\\)",
        "(C). \\(f\\{f(5/2)\\} = f(f(3/2))\\)",
        "(D). None of these"
      ],
      correct: "(A)"
    },

    // Q5
    {
      q: "Let \\(f(x) = x(2 - x)\\), \\(0 \\leq x \\leq 2\\). If the definition of \\(f\\) is extended over the set \\(R - [0, 2]\\) by \\(f(x + 2) = f(x)\\) then \\(f\\) is a",
      options: [
        "(A). periodic function of period 1",
        "(B). nonperiodic function",
        "(C). periodic function of period 2",
        "(D). periodic function of period \\(\\dfrac{1}{2}\\)"
      ],
      correct: "(C)"
    },

    // Q6
    {
      q: "If \\(f(x) = \\sin^2 x + \\sin^2\\!\\left(x + \\dfrac{\\pi}{3}\\right) + \\cos x \\cdot \\cos\\!\\left(x + \\dfrac{\\pi}{3}\\right)\\) and \\(g\\!\\left(\\dfrac{5}{4}\\right) = 1\\) then \\((g \\circ f)(x)\\) is",
      options: [
        "(A). a polynomial of the first degree in \\(\\sin x\\), \\(\\cos x\\)",
        "(B). a constant function",
        "(C). a polynomial of the second degree in \\(\\sin x\\), \\(\\cos x\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },

    // Q7
    {
      q: "If \\(f(x) = x^n\\), \\(n \\in N\\) and \\((g \\circ f)(x) = ng(x)\\) then \\(g(x)\\) can be",
      options: [
        "(A). \\(n|x|\\)",
        "(B). \\(3 \\cdot \\sqrt[3]{x}\\)",
        "(C). \\(e^x\\)",
        "(D). \\(\\log|x|\\)"
      ],
      correct: "(D)"
    },

    // Q8
    {
      q: "If \\(g\\{f(x)\\} = |\\sin x|\\) and \\(f\\{g(x)\\} = (\\sin \\sqrt{x})^2\\) then",
      options: [
        "(A). \\(f(x) = \\sin^2 x,\\ g(x) = \\sqrt{x}\\)",
        "(B). \\(f(x) = \\sin x,\\ g(x) = |x|\\)",
        "(C). \\(f(x) = x^2,\\ g(x) = \\sin \\sqrt{x}\\)",
        "(D). \\(f\\) and \\(g\\) cannot be determined"
      ],
      correct: "(A)"
    },

    // Q9
    {
      q: "If \\(f(x) = \\dfrac{1}{1 - x}\\), \\(x \\neq 0, 1\\), then the graph of the function \\(y = f\\{f(f(x))\\}\\), \\(x > 1\\), is",
      options: [
        "(A). a circle",
        "(B). an ellipse",
        "(C). a straight line",
        "(D). a pair of straight lines"
      ],
      correct: "(C)"
    },

    // Q10
    {
      q: "If \\(f(x)\\) is a polynomial function of the second degree such that \\(f(-3) = 6\\), \\(f(0) = 6\\) and \\(f(2) = 11\\) then the graph of the function \\(f(x)\\) cuts the ordinate \\(x = 1\\) at the point",
      options: [
        "(A). \\((1,\\ 8)\\)",
        "(B). \\((1,\\ 4)\\)",
        "(C). \\((1,\\ -2)\\)",
        "(D). none of these"
      ],
      correct: "(A)"
    },

    // Q11
    {
      q: "Let \\(f(x)\\) be a function whose domain is \\([-5, 7]\\). Let \\(g(x) = |2x + 5|\\). Then the domain of \\((f \\circ g)(x)\\) is",
      options: [
        "(A). \\([-5, 1]\\)",
        "(B). \\([-4, 0]\\)",
        "(C). \\([-6, 1]\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },

    // Q12
    {
      q: "Let \\(f: (-\\infty, 1] \\to (-\\infty, 1]\\) such that \\(f(x) = x(2 - x)\\). Then \\(f^{-1}(x)\\) is",
      options: [
        "(A). \\(1 + \\sqrt{1 - x}\\)",
        "(B). \\(1 - \\sqrt{1 - x}\\)",
        "(C). \\(\\sqrt{1 - x}\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },

    // Q13
    {
      q: "If \\(f(x) = 3x - 5\\) then \\(f^{-1}(x)\\)",
      options: [
        "(A). is given by \\(\\dfrac{1}{3x - 5}\\)",
        "(B). is given by \\(\\dfrac{x + 5}{3}\\)",
        "(C). does not exist because \\(f\\) is not one-one",
        "(D). does not exist because \\(f\\) is not onto"
      ],
      correct: "(B)"
    },

    // Q14
    {
      q: "If the function \\(f: [1, +\\infty) \\to [1, +\\infty)\\) is defined by \\(f(x) = 2^{x(x-1)}\\) then \\(f^{-1}(x)\\) is",
      options: [
        "(A). \\(\\left(\\dfrac{1}{2}\\right)^{x(x-1)}\\)",
        "(B). \\(\\dfrac{1}{2}\\left(1 + \\sqrt{1 + 4\\log_2 x}\\right)\\)",
        "(C). \\(\\dfrac{1}{2}\\left(1 - \\sqrt{1 + 4\\log_2 x}\\right)\\)",
        "(D). not defined"
      ],
      correct: "(B)"
    },

    // Q15
    {
      q: "If the function \\(f: R \\to R\\) be such that \\(f(x) = x - [x]\\), where \\([y]\\) denotes the greatest integer less than or equal to \\(y\\), then \\(f^{-1}(x)\\) is",
      options: [
        "(A). \\(\\dfrac{1}{x - [x]}\\)",
        "(B). \\([x] - x\\)",
        "(C). not defined",
        "(D). none of these"
      ],
      correct: "(C)"
    },

    // Q16
    {
      q: "The inverse function of the function \\(f(x) = \\dfrac{e^x - e^{-x}}{e^x + e^{-x}}\\) is",
      options: [
        "(A). \\(\\dfrac{1}{2}\\log\\dfrac{1 + x}{1 - x}\\)",
        "(B). \\(\\dfrac{1}{2}\\log\\dfrac{2 + x}{2 - x}\\)",
        "(C). \\(\\dfrac{1}{2}\\log\\dfrac{1 - x}{1 + x}\\)",
        "(D). none of these"
      ],
      correct: "(A)"
    },

    // Q17
    {
      q: "Let \\(f(x) = \\begin{cases} 4, & x < -1 \\\\ -4x, & -1 \\leq x \\leq 0 \\end{cases}\\). If \\(f(x)\\) is an even function in \\(R\\) then the definition of \\(f(x)\\) in \\((0, +\\infty)\\) is",
      options: [
        "(A). \\(f(x) = \\begin{cases} 4x, & 0 < x \\leq 1 \\\\ 4, & x > 1 \\end{cases}\\)",
        "(B). \\(f(x) = \\begin{cases} 4x, & 0 < x \\leq 1 \\\\ -4, & x > 1 \\end{cases}\\)",
        "(C). \\(f(x) = \\begin{cases} 4, & 0 < x \\leq 1 \\\\ 4x, & x > 1 \\end{cases}\\)",
        "(D). none of these"
      ],
      correct: "(A)"
    },

    // Q18
    {
      q: "If \\(f(x) = \\begin{cases} x^2 \\sin\\dfrac{\\pi x}{2}, & |x| < 1 \\\\ x|x|, & |x| \\geq 1 \\end{cases}\\) then \\(f(x)\\) is",
      options: [
        "(A). an even function",
        "(B). an odd function",
        "(C). a periodic function",
        "(D). none of these"
      ],
      correct: "(B)"
    },

    // Q19
    {
      q: "The period of the function \\(f(x) = \\left|\\sin\\dfrac{x}{2}\\right| + |\\cos x|\\) is",
      options: [
        "(A). \\(2\\pi\\)",
        "(B). \\(\\pi\\)",
        "(C). \\(4\\pi\\)",
        "(D). none of these"
      ],
      correct: "(A)"
    },

    // Q20
    {
      q: "If \\(f(x)\\) is a periodic function of the period \\(k\\) then \\(f(kx + a)\\), where \\(a\\) is a constant, is a periodic function of the period",
      options: [
        "(A). \\(k\\)",
        "(B). \\(1\\)",
        "(C). \\(\\dfrac{k}{a}\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },

    // Q21
    {
      q: "For positive real numbers \\(a\\), \\(b\\) and \\(c\\), which one of the following holds?",
      options: [
        "(A). \\(a^2 + b^2 + c^2 \\geq bc + ca + ab\\)",
        "(B). \\((b + c)(c + a)(a + b) \\leq 8abc\\)",
        "(C). \\(\\dfrac{a}{b} + \\dfrac{b}{c} + \\dfrac{c}{a} \\leq 3\\)",
        "(D). \\(a^3 + b^3 + c^3 \\geq abc\\)"
      ],
      correct: "(A)"
    },

    // Q22
    {
      q: "For positive real numbers \\(a\\), \\(b\\) and \\(c\\), which of the following holds?",
      options: [
        "(A). \\(a + b + c > 3 \\Rightarrow a^2 + b^2 + c^2 > 3\\)",
        "(B). \\(a^6 + b^6 \\leq 12a^2b^2 - 64\\)",
        "(C). \\(a + b + c = \\alpha = \\dfrac{1}{a} + \\dfrac{1}{b} + \\dfrac{1}{c} \\leq \\dfrac{9}{\\alpha}\\)",
        "(D). None of the above"
      ],
      correct: "(A)"
    },

    // Q23
    {
      q: "For positive real numbers \\(a\\), \\(b\\) and \\(c\\), such that \\(a + b + c = p\\), which one holds?",
      options: [
        "(A). \\((p - a)(p - b)(p - c) \\geq \\dfrac{8}{27}p^3\\)",
        "(B). \\((p - a)(p - b)(p - c) \\geq 8abc\\)",
        "(C). \\(\\dfrac{bc}{a} + \\dfrac{ca}{b} + \\dfrac{ab}{c} \\geq p\\)",
        "(D). None of the above"
      ],
      correct: "(B)"
    },

    // Q24
    {
      q: "The minimum value of \\(P = bcx + cay + abz\\), when \\(xyz = abc\\), is",
      options: [
        "(A). \\(3abc\\)",
        "(B). \\(6abc\\)",
        "(C). \\(abc\\)",
        "(D). \\(4abc\\)"
      ],
      correct: "(A)"
    },

    // Q25
    {
      q: "The greatest value of \\(P = a^2 b^3 c^4\\), when \\(a + b + c = 18\\), is",
      options: [
        "(A). \\(P = 4^4 \\cdot 6^4 \\cdot 8^4\\)",
        "(B). \\(P = 4^2 \\cdot 6^3 \\cdot 8^4\\)",
        "(C). \\(P = 3^2 \\cdot 6^3 \\cdot 8^4\\)",
        "(D). \\(P = 4^2 \\cdot 6^2 \\cdot 8^2\\)"
      ],
      correct: "(B)"
    },

    // Q26
    {
      q: "If \\(x_1, x_2, \\ldots, x_n\\) are any real numbers and \\(n\\) is any positive integer, then",
      options: [
        "(A). \\(n\\displaystyle\\sum_{i=1}^{n} x_i^2 < \\left(\\displaystyle\\sum_{i=1}^{n} x_i\\right)^2\\)",
        "(B). \\(n\\displaystyle\\sum_{i=1}^{n} x_i^2 \\geq \\left(\\displaystyle\\sum_{i=1}^{n} x_i\\right)^2\\)",
        "(C). \\(\\displaystyle\\sum_{i=1}^{n} x_i^2 \\geq n\\left(\\displaystyle\\sum_{i=1}^{n} x_i\\right)^2\\)",
        "(D). None of these"
      ],
      correct: "(B)"
    },

    // Q27
    {
      q: "If \\(x\\), \\(y\\) and \\(z\\) are positive real numbers such that \\(x + y + z = 2\\), then",
      options: [
        "(A). \\((2 - x)(2 - y)(2 - z) \\geq 8xyz\\)",
        "(B). \\(x^{-1} + y^{-1} + z^{-1} \\geq \\dfrac{1}{2}\\)",
        "(C). \\((2 - x)(2 - y)(2 - z) < 8xyz\\)",
        "(D). None of the above"
      ],
      correct: "(A)"
    },

    // Q28
    {
      q: "For non-negative real numbers such that \\(a_1 + a_2 + \\cdots + a_n = p\\) and \\(q = \\displaystyle\\sum_{i < j} a_i a_j\\), then",
      options: [
        "(A). \\(q \\leq \\dfrac{1}{2}p^2\\)",
        "(B). \\(q > \\dfrac{1}{4}p^2\\)",
        "(C). \\(q < \\dfrac{p}{2}\\)",
        "(D). \\(q > \\dfrac{p^2}{2}\\)"
      ],
      correct: "(A)"
    },

    // Q29
    {
      q: "The period of the function \\(f(x) = 4\\cos(2x + 3)\\) is",
      options: [
        "(A). \\(2\\pi\\)",
        "(B). \\(\\dfrac{\\pi}{2}\\)",
        "(C). \\(\\pi\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },

    // Q30
    {
      q: "The period of the function \\(f(x) = 3\\sin\\dfrac{\\pi x}{3} + 4\\cos\\dfrac{\\pi x}{4}\\) is",
      options: [
        "(A). \\(6\\)",
        "(B). \\(24\\)",
        "(C). \\(8\\)",
        "(D). \\(2\\pi\\)"
      ],
      correct: "(B)"
    },

    // Q31
    {
      q: "Let \\(f(x) = \\cos\\sqrt{p}\\,x\\), where \\(p = [a]\\) is the greatest integer less than or equal to \\(a\\). If the period of \\(f(x)\\) is \\(\\pi\\) then",
      options: [
        "(A). \\(a \\in [4, 5]\\)",
        "(B). \\(a = 4, 5\\)",
        "(C). \\(a \\in [4, 5)\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },

    // Q32
    {
      q: "Let \\(f(x) = \\cos 3x + \\sin \\sqrt{3}x\\). Then \\(f(x)\\) is",
      options: [
        "(A). a periodic function of period \\(2\\pi\\)",
        "(B). a periodic function of period \\(\\sqrt{3}\\pi\\)",
        "(C). not a periodic function",
        "(D). none of these"
      ],
      correct: "(C)"
    },

    // Q33
    {
      q: "The function \\(f(x) = \\sin\\dfrac{\\pi x}{n!} - \\cos\\dfrac{\\pi x}{(n+1)!}\\) is",
      options: [
        "(A). not periodic",
        "(B). periodic, with period \\(2(n!)\\)",
        "(C). periodic, with period \\((n+1)\\)",
        "(D). none of these"
      ],
      correct: "(D)"
    },

    // Q34
    {
      q: "The function \\(f(x) = x - [x] + \\cos x\\), where \\([x]\\) is the greatest integer less than or equal to \\(x\\), is a",
      options: [
        "(A). periodic function of indeterminate period",
        "(B). periodic function of period \\(2\\pi\\)",
        "(C). nonperiodic function",
        "(D). periodic function of period \\(1\\)"
      ],
      correct: "(C)"
    },

    // Q35
    {
      q: "Let \\(f(x) = nx + n - [nx + n] + \\tan\\dfrac{\\pi x}{2}\\), where \\([x]\\) is the greatest integer \\(\\leq x\\) and \\(n \\in N\\). It is",
      options: [
        "(A). a periodic function of period \\(1\\)",
        "(B). a periodic function of period \\(4\\)",
        "(C). not periodic",
        "(D). a periodic function of period \\(2\\)"
      ],
      correct: "(D)"
    },

    // Q36
    {
      q: "The product of all the solutions of the equation \\(|(x - 2)|^2 - 3|x - 2| + 2 = 0\\) is",
      options: [
        "(A). \\(2\\)",
        "(B). \\(-4\\)",
        "(C). \\(0\\)",
        "(D). None of these"
      ],
      correct: "(C)"
    },

    // Q37
    {
      q: "Which of the following statement(s) is/are correct?",
      options: [
        "(A). \\(a > b \\Rightarrow ax > bx\\), \\(x \\neq 0\\), \\((a, b, x \\in R)\\)",
        "(B). \\(|x| > |y| \\Rightarrow x > y\\) \\((x, y \\in R)\\)",
        "(C). \\(a > b \\Rightarrow \\dfrac{1}{a} > \\dfrac{1}{b}\\)",
        "(D). \\(a > b \\Rightarrow a + c > b + c\\)"
      ],
      correct: "(D)"
    },

    // Q38
    {
      q: "Solution of \\(|x - 1| + |x - 2| + |x - 3| \\geq 6\\) is",
      options: [
        "(A). \\([0, 4]\\)",
        "(B). \\((-\\infty, -2) \\cup [4, \\infty)\\)",
        "(C). \\((-\\infty, 0] \\cup [4, \\infty)\\)",
        "(D). None of these"
      ],
      correct: "(C)"
    },

    // Q39
    {
      q: "If \\(\\log_4 5 = a\\) and \\(\\log_5 6 = b\\), then \\(\\log_3 2\\) is equal to",
      options: [
        "(A). \\(\\dfrac{1}{2a + 1}\\)",
        "(B). \\(\\dfrac{1}{2b + 1}\\)",
        "(C). \\(2ab + 1\\)",
        "(D). \\(\\dfrac{1}{2ab - 1}\\)"
      ],
      correct: "(D)"
    },

    // Q40
    {
      q: "If \\(\\log_5 a \\cdot \\log_a x = 2\\), then \\(x\\) is equal to",
      options: [
        "(A). \\(125\\)",
        "(B). \\(a^2\\)",
        "(C). \\(25\\)",
        "(D). None of these"
      ],
      correct: "(C)"
    },

    // Q41
    {
      q: "The number of solutions of \\(\\log_2(x + 5) = 6 - x\\) is",
      options: [
        "(A). \\(2\\)",
        "(B). \\(0\\)",
        "(C). \\(3\\)",
        "(D). None of these"
      ],
      correct: "(D)"
    },

    // Q42
    {
      q: "The solution set of \\(\\log_2|4 - 5x| > 2\\) is",
      options: [
        "(A). \\(\\left(\\dfrac{8}{5}, +\\infty\\right)\\)",
        "(B). \\(\\left(\\dfrac{4}{5}, \\dfrac{8}{5}\\right)\\)",
        "(C). \\((-\\infty, 0) \\cup \\left(\\dfrac{8}{5}, +\\infty\\right)\\)",
        "(D). None of these"
      ],
      correct: "(C)"
    },

    // Q43
    {
      q: "The set of real values of \\(x\\) for which \\(\\log_{0.2}\\dfrac{x + 2}{x} \\leq 1\\) is",
      options: [
        "(A). \\(\\left(-\\infty, -\\dfrac{5}{2}\\right] \\cup (0, +\\infty)\\)",
        "(B). \\(\\left[\\dfrac{5}{2}, +\\infty\\right)\\)",
        "(C). \\((-\\infty, -2) \\cup (0, +\\infty)\\)",
        "(D). None of these"
      ],
      correct: "(A)"
    },

    // Q44
    {
      q: "The number of real values of the parameter \\(k\\) for which \\((\\log_{16} x)^2 - \\log_{16} x + \\log_{16} k = 0\\) with real coefficients will have exactly one solution, is",
      options: [
        "(A). \\(2\\)",
        "(B). \\(1\\)",
        "(C). \\(4\\)",
        "(D). None of these"
      ],
      correct: "(A)"
    },

    // Q45
    {
      q: "\\(x^{\\log_x a \\times \\log_a y \\times \\log_y z}\\) is equal to",
      options: [
        "(A). \\(x\\)",
        "(B). \\(y\\)",
        "(C). \\(z\\)",
        "(D). None of these"
      ],
      correct: "(C)"
    },

    // Q46
    {
      q: "If \\(\\log x \\cdot \\log y \\cdot \\log z = (y - z)(z - x)(x - y)\\), then",
      options: [
        "(A). \\(x^y \\cdot y^z \\cdot z^x = 1\\)",
        "(B). \\(x^x \\cdot y^y \\cdot z^z = 1\\)",
        "(C). \\(\\sqrt[3]{x} \\cdot \\sqrt[3]{y} \\cdot \\sqrt[3]{z} = 1\\)",
        "(D). None of the above"
      ],
      correct: "(B)"
    },

    // Q47
    {
      q: "The solution set of the inequation \\(\\log_{1/3}(x^2 + x + 1) + 1 > 0\\) is",
      options: [
        "(A). \\((-\\infty, -2) \\cup (1, +\\infty)\\)",
        "(B). \\([-1, 2]\\)",
        "(C). \\((-2, 1)\\)",
        "(D). \\((-\\infty, +\\infty)\\)"
      ],
      correct: "(C)"
    },

    // Q48
    {
      q: "Let \\(f(x) = \\sqrt{\\log_{10} x^2}\\). The set of all values of \\(x\\) for which \\(f(x)\\) is real, is",
      options: [
        "(A). \\([-1, 1]\\)",
        "(B). \\([1, +\\infty)\\)",
        "(C). \\((-\\infty, -1]\\)",
        "(D). \\((-\\infty, -1] \\cup [1, +\\infty)\\)"
      ],
      correct: "(D)"
    },

    // Q49
    {
      q: "If \\(x_n > x_{n-1} > \\cdots > x_2 > x_1 > 1\\), then the value of \\(\\log_{x_1} \\log_{x_2} \\log_{x_3} \\cdots \\log_{x_n} x_n^{x_{n-1}}\\) is",
      options: [
        "(A). \\(0\\)",
        "(B). \\(1\\)",
        "(C). \\(2\\)",
        "(D). None of these"
      ],
      correct: "(B)"
    },

    // Q50
    {
      q: "\\(4^{\\sin^2 x} + 4^{\\cos^2 x}\\) is equal to",
      options: [
        "(A). \\(\\leq 4\\)",
        "(B). \\(\\geq 4\\)",
        "(C). \\(\\leq 2\\)",
        "(D). \\(\\geq 2\\)"
      ],
      correct: "(B)"
    },

    // Q51
    {
      q: "If \\(y = 3^{x-1} + 3^{-x-1}\\), then the least value of \\(y\\) is",
      options: [
        "(A). \\(2\\)",
        "(B). \\(6\\)",
        "(C). \\(\\dfrac{2}{3}\\)",
        "(D). \\(\\dfrac{3}{2}\\)"
      ],
      correct: "(C)"
    },

    // Q52
    {
      q: "Minimum value of \\(\\dfrac{b + c}{a} + \\dfrac{c + a}{b} + \\dfrac{a + b}{c}\\) (for real positive numbers \\(a, b, c\\)) is",
      options: [
        "(A). \\(1\\)",
        "(B). \\(2\\)",
        "(C). \\(4\\)",
        "(D). \\(6\\)"
      ],
      correct: "(D)"
    },

    // Q53
    {
      q: "If \\(a\\), \\(b\\) and \\(c\\) are different positive real numbers such that \\(b + c - a\\), \\(c + a - b\\) and \\(a + b - c\\) are positive, then \\((b + c - a)(c + a - b)(a + b - c) - abc\\) is",
      options: [
        "(A). positive",
        "(B). negative",
        "(C). non-positive",
        "(D). non-negative"
      ],
      correct: "(B)"
    },

    // Q54
    {
      q: "If the product of \\(n\\) positive numbers is unity, then their sum is",
      options: [
        "(A). a negative integer",
        "(B). divisible by \\(n\\)",
        "(C). never less than \\(n\\)",
        "(D). equal to \\(n + \\dfrac{1}{n}\\)"
      ],
      correct: "(C)"
    },

    // Q55
    {
      q: "For positive numbers \\(a\\), \\(b\\) and \\(c\\), the least value of \\((a^2 + b^2 + c^2)\\!\\left(\\dfrac{1}{a^2} + \\dfrac{1}{b^2} + \\dfrac{1}{c^2}\\right)\\) is",
      options: [
        "(A). \\(3\\)",
        "(B). \\(9\\)",
        "(C). \\(\\dfrac{27}{4}\\)",
        "(D). None of the above"
      ],
      correct: "(B)"
    }
  ]
};
