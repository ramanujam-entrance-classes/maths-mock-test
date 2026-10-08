window.SET_DATA = {
  title: "Function Mock Test 2",
  questions: [
    // Q1
    {
      q: "If \\(f: R \\to S\\), defined by \\(f(x) = \\sin x - \\sqrt{3} \\cos x + 1\\), is onto, then the interval of \\(S\\) is",
      options: [
        "(A). \\([0, 1]\\)",
        "(B). \\([-1, 1]\\)",
        "(C). \\([0, 3]\\)",
        "(D). \\([-1, 3]\\)"
      ],
      correct: "(D)"
    },

    // Q2
    {
      q: "If \\(f(x) = \\begin{cases} |x|, & x \\leq 1 \\\\ 2-x, & x > 1 \\end{cases}\\), then \\(fof(x)\\) is equal to",
      options: [
        "(A). \\(\\begin{cases} |2-|x||, & x < -1 \\\\ |x|, & -1 \\leq x \\leq 1 \\\\ |2-x|, & x > 1 \\end{cases}\\)",
        "(B). \\(\\begin{cases} |x|, & x < -1 \\\\ |2-|x||, & -1 \\leq x \\leq 1 \\\\ |2-x|, & x > 1 \\end{cases}\\)",
        "(C). \\(\\begin{cases} |2-x|, & x < -1 \\\\ |x|, & -1 \\leq x \\leq 1 \\\\ |2-|x||, & x > 1 \\end{cases}\\)",
        "(D). none of these"
      ],
      correct: "(A)"
    },

    // Q3
    {
      q: "Let \\(A = \\{x \\in R : -1 \\leq x \\leq 1\\} = B\\). Then, the mapping \\(f: A \\to B\\) given by \\(f(x) = x|x|\\) is",
      options: [
        "(A). injective but not surjective",
        "(B). surjective but not injective",
        "(C). bijective",
        "(D). none of these"
      ],
      correct: "(C)"
    },

    // Q4
    {
      q: "If \\(f: R \\to (-1, 1)\\) is defined by \\(f(x) = \\dfrac{-x|x|}{1 + x^2}\\), then \\(f^{-1}(x)\\) equals",
      options: [
        "(A). \\(\\sqrt{\\dfrac{|x|}{1-|x|}}\\)",
        "(B). \\(-\\operatorname{Sgn}(x)\\sqrt{\\dfrac{|x|}{1-|x|}}\\)",
        "(C). \\(-\\sqrt{\\dfrac{x}{1-x}}\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },

    // Q5
    {
      q: "Let \\(f: R \\to R\\) be given by \\(f(x) = [x]^2 + [x+1] - 3\\), where \\([x]\\) denotes the greatest integer less than or equal to \\(x\\). Then, \\(f(x)\\) is",
      options: [
        "(A). many-one and onto",
        "(B). many-one and into",
        "(C). one-one and into",
        "(D). one-one and onto"
      ],
      correct: "(B)"
    },

    // Q6
    {
      q: "Let \\(M\\) be the set of all \\(2 \\times 2\\) matrices with entries from the set \\(R\\) of real numbers. Then, the function \\(f: M \\to R\\) defined by \\(f(A) = |A|\\) for every \\(A \\in M\\), is",
      options: [
        "(A). one-one and onto",
        "(B). neither one-one nor onto",
        "(C). one-one but not onto",
        "(D). onto but not one-one"
      ],
      correct: "(D)"
    },

    // Q7
    {
      q: "The function \\(f: [0, \\infty) \\to R\\) given by \\(f(x) = \\dfrac{x}{x+1}\\), is",
      options: [
        "(A). one-one and onto",
        "(B). one-one but not onto",
        "(C). onto but not one-one",
        "(D). neither one-one nor onto"
      ],
      correct: "(B)"
    },

    // Q8
    {
      q: "Two functions \\(f: R \\to R\\) and \\(g: R \\to R\\) are defined as follows: \\(f(x) = \\begin{cases} 0, & x \\in Q \\\\ 1, & x \\notin Q \\end{cases}\\), \\(g(x) = \\begin{cases} -1, & x \\in Q \\\\ 0, & x \\notin Q \\end{cases}\\). Then, \\(gof(e) + fog(\\pi) =\\)",
      options: [
        "(A). \\(-1\\)",
        "(B). \\(0\\)",
        "(C). \\(1\\)",
        "(D). \\(2\\)"
      ],
      correct: "(A)"
    },

    // Q9
    {
      q: "The range of the function \\(f(x) = {}^{7-x}P_{x-3}\\) is",
      options: [
        "(A). \\(\\{1, 2, 3, 4, 5\\}\\)",
        "(B). \\(\\{1, 2, 3, 4, 5, 6\\}\\)",
        "(C). \\(\\{1, 2, 3, 4\\}\\)",
        "(D). \\(\\{1, 2, 3\\}\\)"
      ],
      correct: "(D)"
    },

    // Q10
    {
      q: "A function \\(f\\) from the set of natural numbers to integers defined by \\(f(n) = \\begin{cases} \\dfrac{n-1}{2}, & \\text{when } n \\text{ is odd} \\\\ -\\dfrac{n}{2}, & \\text{when } n \\text{ is even} \\end{cases}\\) is",
      options: [
        "(A). neither one-one nor onto",
        "(B). one-one but not onto",
        "(C). onto but not one-one",
        "(D). one-one and onto both"
      ],
      correct: "(D)"
    },

    // Q11
    {
      q: "Let \\(f: (-1, 1) \\to B\\) be a function defined by \\(f(x) = \\tan^{-1}\\!\\left(\\dfrac{2x}{1-x^2}\\right)\\), then \\(f\\) is both one-one and onto when \\(B\\) is the interval",
      options: [
        "(A). \\(\\left(-\\dfrac{\\pi}{2},\\ \\dfrac{\\pi}{2}\\right)\\)",
        "(B). \\(\\left[-\\dfrac{\\pi}{2},\\ \\dfrac{\\pi}{2}\\right]\\)",
        "(C). \\(\\left[0,\\ \\dfrac{\\pi}{2}\\right)\\)",
        "(D). \\(\\left(0,\\ \\dfrac{\\pi}{2}\\right)\\)"
      ],
      correct: "(A)"
    },

    // Q12
    {
      q: "Let \\(f: R \\to R\\) be a function defined by \\(f(x) = |x|\\) for all \\(x \\in R\\), and let \\(A = (0, 1)\\), then \\(f^{-1}(A)\\) equals",
      options: [
        "(A). \\((-1, 1)\\)",
        "(B). \\((0, 1)\\)",
        "(C). \\((-1, 0)\\)",
        "(D). none of these"
      ],
      correct: "(A)"
    },

    // Q13
    {
      q: "The function \\(f: (-\\infty, -1] \\to (0, e^2]\\) defined by \\(f(x) = e^{x^2 - 3x + 2}\\) is",
      options: [
        "(A). one-one and onto",
        "(B). one-one and into",
        "(C). many-one and into",
        "(D). many-one and onto"
      ],
      correct: "(B)"
    },

    // Q14
    {
      q: "If \\(f: R \\to R\\), \\(g: R \\to R\\) and \\(h: R \\to R\\) be three functions given by \\(f(x) = x^2 - 1\\), \\(g(x) = \\sqrt{x^2 + 1}\\) and \\(h(x) = \\begin{cases} 0, & x \\leq 0 \\\\ x, & x > 0 \\end{cases}\\), then the composite function \\((h \\circ f \\circ g)(x)\\) is given by",
      options: [
        "(A). \\(\\begin{cases} -x^2, & x < 0 \\\\ 0, & x = 0 \\\\ x^2, & x > 0 \\end{cases}\\)",
        "(B). \\(\\begin{cases} x^2, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases}\\)",
        "(C). \\(\\begin{cases} x^2, & x > 0 \\\\ 0, & x \\leq 0 \\end{cases}\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },

    // Q15
    {
      q: "If \\(F: [1, \\infty) \\to [2, \\infty)\\) is given by \\(f(x) = x + \\dfrac{1}{x}\\), then \\(f^{-1}(x)\\) equals",
      options: [
        "(A). \\(\\dfrac{x + \\sqrt{x^2 - 4}}{2}\\)",
        "(B). \\(\\dfrac{x}{1 + x^2}\\)",
        "(C). \\(\\dfrac{x - \\sqrt{x^2 - 4}}{2}\\)",
        "(D). \\(1 + \\sqrt{x^2 - 4}\\)"
      ],
      correct: "(A)"
    },

    // Q16
    {
      q: "Let \\(g(x) = 1 + x - [x]\\) and \\(f(x) = \\begin{cases} -1, & x < 0 \\\\ 0, & x = 0 \\\\ 1, & x > 0 \\end{cases}\\), where \\([x]\\) denotes the greatest integer less than or equal to \\(x\\). Then, for all \\(x\\), \\(f(g(x))\\) is equal to",
      options: [
        "(A). \\(x\\)",
        "(B). \\(1\\)",
        "(C). \\(f(x)\\)",
        "(D). \\(g(x)\\)"
      ],
      correct: "(B)"
    },

    // Q17
    {
      q: "Let \\(f(x) = \\dfrac{\\alpha x}{x+1}\\), \\(x \\neq -1\\). Then, for what value of \\(\\alpha\\) is \\(f(f(x)) = x\\)?",
      options: [
        "(A). \\(\\sqrt{2}\\)",
        "(B). \\(-\\sqrt{2}\\)",
        "(C). \\(1\\)",
        "(D). \\(-1\\)"
      ],
      correct: "(D)"
    },

    // Q18
    {
      q: "Let the function \\(f: R \\to R\\) be defined by \\(f(x) = 2x + \\sin x\\). Then, \\(f\\) is",
      options: [
        "(A). one-to-one and onto",
        "(B). one-to-one but not onto",
        "(C). onto but not one-to-one",
        "(D). neither one-to-one nor onto"
      ],
      correct: "(A)"
    },

    // Q19
    {
      q: "Suppose \\(f(x) = (x+1)^2\\) for all \\(x \\geq -1\\). If \\(g(x)\\) is the function whose graph is the reflection of the graph of \\(f(x)\\) with respect to the line \\(y = x\\), then \\(g(x)\\) equals",
      options: [
        "(A). \\(-\\sqrt{x} - 1\\), \\(x \\geq 0\\)",
        "(B). \\(\\dfrac{1}{(x+1)^2}\\), \\(x > -1\\)",
        "(C). \\(\\sqrt{x+1}\\), \\(x \\geq -1\\)",
        "(D). \\(\\sqrt{x} - 1\\), \\(x \\geq 0\\)"
      ],
      correct: "(D)"
    },

    // Q20
    {
      q: "The distinct linear functions which map \\([-1, 1]\\) onto \\([0, 2]\\) are",
      options: [
        "(A). \\(f(x) = x+1,\\ g(x) = -x+1\\)",
        "(B). \\(f(x) = x-1,\\ g(x) = x+1\\)",
        "(C). \\(f(x) = -x-1,\\ g(x) = x-1\\)",
        "(D). none of these"
      ],
      correct: "(A)"
    },

    // Q21
    {
      q: "The values of \\(a\\) and \\(b\\) for which the map \\(f: R \\to R\\), given by \\(f(x) = ax + b\\) (\\(a, b \\in R\\)), is a bijection with \\(fof\\) as identity function, are",
      options: [
        "(A). \\(a = 1,\\ b \\in R\\)",
        "(B). \\((a = 1,\\ b = 0)\\) or \\((a = -1,\\ b \\in R)\\)",
        "(C). \\(a = \\pm 1,\\ b \\in R\\)",
        "(D). \\(a = \\pm 1,\\ b = 0\\)"
      ],
      correct: "(B)"
    },

    // Q22
    {
      q: "The value of parameter \\(\\alpha\\), for which the function \\(f: R \\to R\\) given by \\(f(x) = 1 + \\alpha x\\), \\(\\alpha \\neq 0\\) is the inverse of itself, is",
      options: [
        "(A). \\(-2\\)",
        "(B). \\(-1\\)",
        "(C). \\(1\\)",
        "(D). \\(2\\)"
      ],
      correct: "(B)"
    },

    // Q23
    {
      q: "Let \\(f: [2, \\infty) \\to X\\) be defined by \\(f(x) = 4x - x^2\\). Then, \\(f\\) is invertible, if \\(X =\\)",
      options: [
        "(A). \\([2, \\infty)\\)",
        "(B). \\((-\\infty, 2]\\)",
        "(C). \\((-\\infty, 4]\\)",
        "(D). \\([4, \\infty)\\)"
      ],
      correct: "(C)"
    },

    // Q24
    {
      q: "If \\(f: A \\to B\\) given by \\(3^{f(x)} + 2^{-x} = 4\\) is a bijection, then",
      options: [
        "(A). \\(A = \\{x \\in R : -1 < x < \\infty\\}\\), \\(B = \\{x \\in R : 2 < x < 4\\}\\)",
        "(B). \\(A = \\{x \\in R : -3 < x < \\infty\\}\\), \\(B = \\{x \\in R : 0 < x < 4\\}\\)",
        "(C). \\(A = \\{x \\in R : -2 < x < \\infty\\}\\), \\(B = \\{x \\in R : 0 < x < 4\\}\\)",
        "(D). none of these"
      ],
      correct: "(D)"
    },

    // Q25
    {
      q: "Let \\(A = \\left\\{x : 0 \\leq x < \\dfrac{\\pi}{2}\\right\\}\\) and \\(f: R \\to A\\) be an onto function given by \\(f(x) = \\tan^{-1}(x^2 + x + \\lambda)\\), where \\(\\lambda\\) is a constant. Then",
      options: [
        "(A). \\(\\lambda > 0\\)",
        "(B). \\(\\lambda \\geq \\dfrac{1}{4}\\)",
        "(C). \\(\\lambda < \\dfrac{1}{4}\\)",
        "(D). \\(0 \\leq \\lambda \\leq 1\\)"
      ],
      correct: "(B)"
    },

    // Q26
    {
      q: "Let \\(f(x) = x^2\\) and \\(g(x) = 2^x\\). Then, the solution set of the equation \\(f(g(x)) = g(f(x))\\) is",
      options: [
        "(A). \\(R\\)",
        "(B). \\(\\{0\\}\\)",
        "(C). \\(\\{0, 2\\}\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },

    // Q27
    {
      q: "Let \\(f(x) = \\log_{x^2} 25\\) and \\(g(x) = \\log_x 5\\). Then, \\(f(x) = g(x)\\) holds for \\(x\\) belonging to",
      options: [
        "(A). \\(R\\)",
        "(B). \\(\\{x : 0 < x < \\infty,\\ x \\neq 1\\}\\)",
        "(C). \\(\\phi\\)",
        "(D). none of these"
      ],
      correct: "(B)"
    },

    // Q28
    {
      q: "If \\(g(f(x)) = |\\sin x|\\) and \\(f(g(x)) = (\\sin \\sqrt{x})^2\\), then",
      options: [
        "(A). \\(f(x) = \\sin^2 x,\\ g(x) = \\sqrt{x}\\)",
        "(B). \\(f(x) = \\sin x,\\ g(x) = |x|\\)",
        "(C). \\(f(x) = x^2,\\ g(x) = \\sin \\sqrt{x}\\)",
        "(D). \\(f\\) and \\(g\\) cannot be determined"
      ],
      correct: "(A)"
    },

    // Q29
    {
      q: "The inverse of the function \\(f: R \\to \\{x \\in R : x < 1\\}\\) given by \\(f(x) = \\dfrac{e^x - e^{-x}}{e^x + e^{-x}}\\) is",
      options: [
        "(A). \\(\\dfrac{1}{2}\\log\\dfrac{1+x}{1-x}\\)",
        "(B). \\(\\dfrac{1}{2}\\log\\dfrac{2+x}{2-x}\\)",
        "(C). \\(\\dfrac{1}{2}\\log\\dfrac{1-x}{1+x}\\)",
        "(D). none of these"
      ],
      correct: "(A)"
    },

    // Q30
    {
      q: "\\(f: R \\to R\\) given by \\(f(x) = 2x + |\\cos x|\\) is",
      options: [
        "(A). one-one and into",
        "(B). one-one and onto",
        "(C). many-one and into",
        "(D). many-one and onto"
      ],
      correct: "(B)"
    },

    // Q31
    {
      q: "The function \\(f: N \\to N\\) given by \\(f(n) = n - (-1)^n\\) is",
      options: [
        "(A). one-one and onto",
        "(B). many-one and onto",
        "(C). one-one and into",
        "(D). many-one and into"
      ],
      correct: "(A)"
    },

    // Q32
    {
      q: "Let \\(A = \\{x \\in R : x \\geq 1\\}\\). The inverse of the function \\(f: A \\to A\\) given by \\(f(x) = 2^{x(x-1)}\\) is",
      options: [
        "(A). \\(\\left(\\dfrac{1}{2}\\right)^{x(x-1)}\\)",
        "(B). \\(\\dfrac{1}{2}\\left(1 + \\sqrt{1 + 4\\log_2 x}\\right)\\)",
        "(C). \\(\\dfrac{1}{2}\\left(1 - \\sqrt{1 + 4\\log_2 x}\\right)\\)",
        "(D). not defined"
      ],
      correct: "(B)"
    },

    // Q33
    {
      q: "Let \\(f(x) = \\dfrac{1}{1-x}\\). Then, \\((f \\circ (f \\circ f))(x)\\) is",
      options: [
        "(A). \\(x\\) for all \\(x \\in R\\)",
        "(B). \\(x\\) for all \\(x \\in R - \\{1\\}\\)",
        "(C). \\(x\\) for all \\(x \\in R - \\{0, 1\\}\\)",
        "(D). none of these"
      ],
      correct: "(C)"
    },

    // Q34
    {
      q: "Let \\(A = \\left\\{x \\in R : x \\geq \\dfrac{1}{2}\\right\\}\\) and \\(B = \\left\\{x \\in R : x \\geq \\dfrac{3}{4}\\right\\}\\). If \\(f: A \\to B\\) is defined as \\(f(x) = x^2 - x + 1\\), then the solution set of the equation \\(f(x) = f^{-1}(x)\\) is",
      options: [
        "(A). \\(\\{1\\}\\)",
        "(B). \\(\\{2\\}\\)",
        "(C). \\(\\left\\{\\dfrac{1}{2}\\right\\}\\)",
        "(D). none of these"
      ],
      correct: "(A)"
    },

    // Q35
    {
      q: "Let the function \\(f: R - \\{-b\\} \\to R - \\{1\\}\\) be defined by \\(f(x) = \\dfrac{x+a}{x+b}\\), \\(a \\neq b\\), then",
      options: [
        "(A). \\(f\\) is one-one but not onto",
        "(B). \\(f\\) is onto but not one-one",
        "(C). \\(f\\) is both one-one and onto",
        "(D). none of these"
      ],
      correct: "(C)"
    },

    // Q36
    {
      q: "If \\(f(x) + f(1-x) = 2\\), then the value of \\(f\\!\\left(\\dfrac{1}{2001}\\right) + f\\!\\left(\\dfrac{2}{2001}\\right) + \\cdots + f\\!\\left(\\dfrac{2000}{2001}\\right)\\) is",
      options: [
        "(A). \\(2000\\)",
        "(B). \\(2001\\)",
        "(C). \\(1999\\)",
        "(D). \\(1998\\)"
      ],
      correct: "(A)"
    },

    // Q37
    {
      q: "If \\(f(x)\\) is a polynomial satisfying \\(f(x) \\cdot f\\!\\left(\\dfrac{1}{x}\\right) = f(x) + f\\!\\left(\\dfrac{1}{x}\\right)\\) and \\(f(3) = 28\\), then \\(f(4)\\) is given by",
      options: [
        "(A). \\(63\\)",
        "(B). \\(65\\)",
        "(C). \\(67\\)",
        "(D). \\(68\\)"
      ],
      correct: "(B)"
    },

    // Q38
    {
      q: "The number of functions \\(f\\) from the set \\(A = \\{0, 1, 2\\}\\) into the set \\(B = \\{0, 1, 2, 3, 4, 5, 6, 7\\}\\) such that \\(f(i) \\leq f(j)\\) for \\(i < j\\) and \\(i, j \\in A\\) is",
      options: [
        "(A). \\({}^8C_3\\)",
        "(B). \\({}^8C_3 + 2({}^8C_2)\\)",
        "(C). \\({}^{10}C_3\\)",
        "(D). None of these"
      ],
      correct: "(C)"
    },

    // Q39
    {
      q: "The total number of relations that exist from the set \\(A\\) with \\(m\\) elements into the set \\(A \\times A\\) is",
      options: [
        "(A). \\(m^2\\)",
        "(B). \\(m^3\\)",
        "(C). \\(m\\)",
        "(D). None of these"
      ],
      correct: "(D)"
    },

    // Q40
    {
      q: "Set \\(A\\) has \\(3\\) elements and set \\(B\\) has \\(4\\) elements. The number of injection that can be defined from \\(A\\) to \\(B\\) is",
      options: [
        "(A). \\(144\\)",
        "(B). \\(12\\)",
        "(C). \\(24\\)",
        "(D). \\(64\\)"
      ],
      correct: "(C)"
    },

    // Q41
    {
      q: "If the function \\(f: [1, \\infty) \\to [1, \\infty)\\) is defined by \\(f(x) = 2^{x(x-1)}\\), then \\(f^{-1}(x)\\) is",
      options: [
        "(A). \\(\\left(\\dfrac{1}{2}\\right)^{x(x-1)}\\)",
        "(B). \\(\\dfrac{1}{2}\\left(1 + \\sqrt{1 + 4\\log_2 x}\\right)\\)",
        "(C). \\(\\dfrac{1}{2}\\left(1 - \\sqrt{1 + 4\\log_2 x}\\right)\\)",
        "(D). Not defined"
      ],
      correct: "(B)"
    },

    // Q42
    {
      q: "The number of one-to-one function from \\(\\{1, 2, 3\\}\\) to \\(\\{1, 2, 3, 4, 5\\}\\) is",
      options: [
        "(A). \\(125\\)",
        "(B). \\(243\\)",
        "(C). \\(10\\)",
        "(D). \\(60\\)"
      ],
      correct: "(D)"
    },

    // Q43
    {
      q: "If the graph of \\(y = (x-2)^2 - 3\\) is shifted by \\(5\\) units up along \\(Y\\)-axis and \\(2\\) units to the right along the \\(X\\)-axis, then the equation of the resultant graph is",
      options: [
        "(A). \\(y = x^2 + 2\\)",
        "(B). \\(y = (x-2)^2 + 5\\)",
        "(C). \\(y = (x+2)^2 + 2\\)",
        "(D). \\(y = (x-4)^2 + 2\\)"
      ],
      correct: "(D)"
    },

    // Q44
    {
      q: "Which of the following functions is inverse of itself?",
      options: [
        "(A). \\(f(x) = \\dfrac{1-x}{1+x}\\)",
        "(B). \\(f(x) = 3^{\\log x}\\)",
        "(C). \\(f(x) = 3^{x(x+1)}\\)",
        "(D). None of these"
      ],
      correct: "(A)"
    },

    // Q45
    {
      q: "The function \\(f(x) = \\log\\left(x + \\sqrt{x^2 + 1}\\right)\\) is",
      options: [
        "(A). an even function",
        "(B). an odd function",
        "(C). a periodic function",
        "(D). Neither an even nor an odd function"
      ],
      correct: "(B)"
    },

    // Q46
    {
      q: "Number of onto (surjective) functions from \\(A\\) to \\(B\\) if \\(n(A) = 6\\) and \\(n(B) = 3\\) is",
      options: [
        "(A). \\(2^6 - 2\\)",
        "(B). \\(3^6 - 3\\)",
        "(C). \\(340\\)",
        "(D). \\(540\\)"
      ],
      correct: "(D)"
    },

    // Q47
    {
      q: "Inverse of the function \\(f(x) = \\dfrac{10^x - 10^{-x}}{10^x + 10^{-x}}\\) is",
      options: [
        "(A). \\(\\log_{10}(2-x)\\)",
        "(B). \\(\\dfrac{1}{2}\\log_{10}\\!\\left(\\dfrac{1+x}{1-x}\\right)\\)",
        "(C). \\(\\dfrac{1}{2}\\log_{10}(2x-1)\\)",
        "(D). \\(\\dfrac{1}{4}\\log_{10}\\!\\left(\\dfrac{2x}{2-x}\\right)\\)"
      ],
      correct: "(B)"
    },

    // Q48
    {
      q: "The function \\(f(x) = \\log\\left(x + \\sqrt{x^2 + 1}\\right)\\) is",
      options: [
        "(A). an even function",
        "(B). an odd function",
        "(C). a periodic function",
        "(D). Neither an even nor an odd function"
      ],
      correct: "(B)"
    },

    // Q49
    {
      q: "The domain of the function \\(f(x) = \\dfrac{\\cos^{-1} x}{[x]}\\) is",
      options: [
        "(A). \\([-1, 0) \\cup \\{1\\}\\)",
        "(B). \\([-1, 1]\\)",
        "(C). \\([-1, 1)\\)",
        "(D). None of these"
      ],
      correct: "(A)"
    },

    // Q50
    {
      q: "The graph of function \\(f(x) = \\log_e\\!\\left(x^3 + \\sqrt{x^6 + 1}\\right)\\) is symmetric about",
      options: [
        "(A). \\(x\\)-axis",
        "(B). \\(y\\)-axis",
        "(C). origin",
        "(D). \\(y = x\\)"
      ],
      correct: "(C)"
    },

    // Q51
    {
      q: "Let \\(R\\) be reflexive relation on the finite set \\(A\\) having \\(10\\) elements and if \\(m\\) is the number of ordered pair in \\(R\\), then",
      options: [
        "(A). \\(m \\geq 10\\)",
        "(B). \\(m = 100\\)",
        "(C). \\(m = 10\\)",
        "(D). \\(m \\leq 10\\)"
      ],
      correct: "(A)"
    },

    // Q52
    {
      q: "A real valued function \\(f\\) is defined as \\(f(x) = \\begin{cases} -1, & -2 \\leq x \\leq 0 \\\\ x-1, & 0 \\leq x \\leq 2 \\end{cases}\\). Which of the following statement is FALSE?",
      options: [
        "(A). \\(f(|x|) = |x| - 1\\), if \\(0 \\leq x \\leq 1\\)",
        "(B). \\(|f(x)| = x - 1\\), if \\(1 \\leq x \\leq 2\\)",
        "(C). \\(f(|x|) + |f(x)| = 1\\), if \\(0 \\leq x \\leq 1\\)",
        "(D). \\(f(|x|) - |f(x)| = 0\\), if \\(1 \\leq x \\leq 2\\)"
      ],
      correct: "(C)"
    }
  ]
};
