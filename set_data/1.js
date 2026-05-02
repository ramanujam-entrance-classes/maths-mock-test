window.SET_DATA = {
  title: "Mathematics Mock Test 1",
  questions: [
	// Q1
	{
	q: "\\(x(x^{n-1} - n\\alpha^{n-1}) + \\alpha^n (n - 1)\\) is divisible by \\((x - \\alpha)^2\\) for:",
	options: [
	"(A). \\(n > 1\\)",
	"(B). \\(n > 2\\)",
	"(C). \\(\\text{all } n \\in \\mathbb{N}\\)",
	"(D). \\(\\text{None of these}\\)"
	],
	correct: "(A)"
	},
	// Q2
	{
	q: "If \\(\\alpha, \\beta\\) are the roots of \\(ax^2 - 2bx + c = 0\\) and \\(\\alpha + h, \\beta + h\\) are those of \\(Ax^2 + 2Bx + C = 0\\), then",
	options: [
	"(A). \\(h = \\frac{b}{a} - \\frac{B}{A}\\)",
	"(B). \\(\\frac{1}{2}\\left(\\frac{b}{a} - \\frac{B}{A}\\right)\\)",
	"(C). \\(\\frac{b^2 - ac}{a^2} = \\frac{B^2 - AC}{A^2}\\)",
	"(D). \\(\\frac{b^2 - 4ac}{a^2} = \\frac{B^2 - 4AC}{A^2}\\)"
	],
	correct: "(C)"
	},
	// Q3
	{
	q: `Let \\(X = \\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{bmatrix}, 
	A = \\begin{bmatrix} 1 & -1 & 2 \\\\ 2 & 0 & 1 \\\\ 3 & 2 & 1 \\end{bmatrix}\\) 
	and \\(B = \\begin{bmatrix} 3 \\\\ 1 \\\\ 4 \\end{bmatrix}.\\) If \\(AX = B\\), then \\(X\\) is equal to:`,
	options: [
	"(A). \\(\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}\\)",
	"(B). \\(\\begin{bmatrix} -1 \\\\ -2 \\\\ 3 \\end{bmatrix}\\)",
	"(C). \\(\\begin{bmatrix} -1 \\\\ -2 \\\\ -3 \\end{bmatrix}\\)",
	"(D). \\(\\begin{bmatrix} -1 \\\\ 2 \\\\ 3 \\end{bmatrix}\\)"
	],
	correct: "(D)"
	},
	// Q4
	{
	q: `If \\(U_n =\\) <span style='font-size:13px'>\\( \\begin{vmatrix} 1 & k & k \\\\ 2n & k^2 + k + 1 & k^2 + k \\\\ 2n - 1 & k^2 & k^2 + k + 1 \\end{vmatrix}\\) </span>
	and \\(\\sum_{n=1}^{k} U_n = 72\\), then \\(k =\\)`,
	options: [
	"(A). \\(8\\)",
	"(B). \\(9\\)",
	"(C). \\(6\\)",
	"(D). \\(\\text{None of these}\\)"
	],
	correct: "(A)"
	},
	// Q5
	{
	q: "The value of \\(\\int_0^\\pi |\\sin^3 \\theta| d\\theta\\) is:",
	options: [
	"(A). \\(0\\)",
	"(B). \\(\\pi\\)",
	"(C). \\(\\frac{4}{3}\\)",
	"(D). \\(\\frac{3}{8}\\)"
	],
	correct: "(C)"
	},
	// Q6
	{
	q: "A square matrix \\(P\\) satisfies \\(P^2 = I - P\\), where \\(I\\) is the identity matrix. If \\(P^n = 5I - 8P\\), then \\(n\\) is equal to:",
	options: [
	"(A). \\(4\\)",
	"(B). \\(5\\)",
	"(C). \\(6\\)",
	"(D). \\(7\\)"
	],
	correct: "(C)"
	},
	// Q7
	{
	q: "\\(\\int \\frac{dx}{\\sqrt[4]{(x-1)^3 (x+2)^5}}\\) is equal to:",
	options: [
	"(A). \\(\\frac{3}{4} \\sqrt{\\frac{x-1}{x+2}} + C\\)",
	"(B). \\(\\frac{4}{3} \\sqrt{\\frac{x-1}{x+2}} + C\\)",
	"(C). \\(\\frac{4}{3} \\sqrt{\\frac{x+2}{x-1}} + C\\)",
	"(D). \\(\\text{None of these}\\)"
	],
	correct: "(D)"
	},
	// Q8
	{
	q: "The equation \\(\\sin^4 x - 2\\cos^2 x + a^2 = 0\\) is solvable for \\(x \\in R\\) if",
	options: [
	"(A). \\(-\\sqrt{2} \\le a \\le \\sqrt{2}\\)",
	"(B). \\(-\\sqrt{3} \\le a \\le \\sqrt{3}\\)",
	"(C). \\(-1 \\le a \\le 1\\)",
	"(D). None of these"
	],
	correct: "(A)"
	},
	// Q9
	{
	q: "The values of \\(x\\) which satisfy the trigonometric equation \\(\\tan^{-1}\\left(\\frac{x-1}{x-2}\\right) + \\tan^{-1}\\left(\\frac{x+1}{x+2}\\right) = \\frac{\\pi}{4}\\) are:",
	options: [
	"(A). \\(\\pm \\frac{1}{\\sqrt{2}}\\)",
	"(B). \\(\\pm \\sqrt{2}\\)",
	"(C). \\(\\pm \\frac{1}{2}\\)",
	"(D). \\(\\pm 2\\)"
	],
	correct: "(A)"
	},
	// Q10
	{
	q: `If \\(P = \\begin{bmatrix} \\frac{\\sqrt{3}}{2} & -\\frac{1}{2} \\\\ \\frac{1}{2} & \\frac{\\sqrt{3}}{2} \\end{bmatrix}\\), \\(A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}\\) and \\(Q = PAP^T\\), then \\(P^T Q^{2005} P\\) is:`,
	options: [
	"(A). \\(\\begin{bmatrix} 1 & 2005 \\\\ 0 & 1 \\end{bmatrix}\\)",
	"(B). \\(\\begin{bmatrix} 1 & 2005 \\\\ 2005 & 1 \\end{bmatrix}\\)",
	"(C). \\(\\begin{bmatrix} 1 & 0 \\\\ 2005 & 1 \\end{bmatrix}\\)",
	"(D). \\(\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}\\)"
	],
	correct: "(A)"
	},
	// Q11
	{
	q: "The general solution of the equation \\(2 \\sum_{r=1}^{n} \\cos(r^2 x) \\sin(rx) = 1\\) is:",
	options: [
	"(A). \\(\\frac{4p+1}{n(n+1)} \\cdot \\frac{\\pi}{2}, \\; \\forall p \\in I\\)",
	"(B). \\(\\frac{4p-1}{n(n+1)} \\cdot \\frac{\\pi}{2}, \\; \\forall p \\in I\\)",
	"(C). \\(2p\\pi + \\frac{\\pi}{6}, \\; \\forall p \\in I\\)",
	"(D). None of these"
	],
	correct: "(A)"
	},
	// Q12
	{
	q: "The number of solutions of the equation \\(1 + 2\\cos\\left(\\frac{x}{4}\\right) \\sin^3\\left(\\frac{x}{4}\\right) = 0\\), \\(\\forall x \\in [-\\pi, \\pi]\\) is:",
	options: [
	"(A). \\(3\\)",
	"(B). \\(2\\)",
	"(C). \\(1\\)",
	"(D). \\(0\\)"
	],
	correct: "(D)"
	},
	// Q13
	{
	q: "The least value of \\(|a|\\) for which \\(\\tan \\theta\\) and \\(\\cot \\theta\\) are roots of the equation \\(x^2 + ax + b = 0\\) is:",
	options: [
	"(A). \\(3\\)",
	"(B). \\(2\\)",
	"(C). \\(1\\)",
	"(D). \\(0\\)"
	],
	correct: "(B)"
	},
	// Q14
	{
	q: "The graph of \\( f(x) = \\frac{x^5}{20} - \\frac{x^4}{12} + 5 \\) has:",
	options: [
	"(A). no relative extreme, and has only one point of inflexion",
	"(B). two relative maximas, one relative minimum, and two points of inflexion",
	"(C). one relative maximas, one relative minimum, and only one point of inflexion",
	"(D). one relative maximas, one relative minima, and two points of inflexions"
	],
	correct: "(C)"
	},
	// Q15
	{
	q: "Let \\( f(x) = ax^7 + bx^3 + cx - 5 \\), where \\( a, b \\) and \\( c \\) are constants. If \\( f(-7) = 7 \\), the \\( f(7) \\) equals:",
	options: [
	"(A). \\(-17\\)",
	"(B). \\(-7\\)",
	"(C). \\(14\\)",
	"(D). \\(21\\)"
	],
	correct: "(A)"
	},
	// Q16
	{
	q: "The value of \\( \\cos^{-1}(\\cos \\frac{5\\pi}{3}) + \\sin^{-1}(\\cos \\frac{5\\pi}{3}) \\) is:",
	options: [
	"(A). \\(\\frac{10\\pi}{3}\\)",
	"(B). \\(0\\)",
	"(C). \\(\\frac{\\pi}{2}\\)",
	"(D). \\(\\frac{5\\pi}{3}\\)"
	],
	correct: "(C)"
	},
	// Q17
	{
	q: "Number of integral values of \\( x \\) for which the inequality \\( \\log_{10} \\left( \\frac{2x - 2007}{x + 1} \\right) \\leq 0 \\) holds true, are:",
	options: [
	"(A). \\(1004\\)",
	"(B). \\(1005\\)",
	"(C). \\(2007\\)",
	"(D). \\(2008\\)"
	],
	correct: "(D)"
	},
	// Q18
	{
	q: " \\( 2 \\sin^2 \\left( \\frac{\\pi}{2} \\cos^2 x \\right) = 1 - \\cos (\\pi \\sin 2x) \\) if:",
	options: [
	"(A). \\( \\tan x = -\\frac{1}{2} \\)",
	"(B). \\( \\tan x = \\frac{1}{2} \\)",
	"(C). \\( x = (2n+1)\\frac{\\pi}{2}, n \\in I \\)",
	"(D). None of these"
	],
	correct: "(D)"
	},
	// Q19
	{
	q: "Which of the following solutions of the equation \\( \\sin x \\cos x \\cos 2x \\cos 8x = 0.25 \\sin 12x \\) are correct.",
	options: [
	"(A). \\( \\frac{n\\pi}{8} \\)",
	"(B). \\( \\frac{(2n+1)\\pi}{8} \\)",
	"(C). \\( \\frac{(2n+1)\\pi}{4} \\)",
	"(D). None of these"
	],
	correct: "(D)"
	},
	// Q20
	{
	q: "The number of integral values of \\( k \\) for which the equation \\( 7 \\cos x + 5 \\sin x = 2k + 1 \\) has a solution is:",
	options: [
	"(A). \\(4\\)",
	"(B). \\(8\\)",
	"(C). \\(10\\)",
	"(D). \\(12\\)"
	],
	correct: "(B)"
	},
	// Q21
	{
	q: "If \\( \\cos(\\sin x) = \\frac{1}{\\sqrt{2}} \\), then \\( x \\) must lie in the interval:",
	options: [
	"(A). \\(\\left(-\\frac{\\pi}{2}, 0\\right)\\)",
	"(B). \\(\\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)\\)",
	"(C). \\(\\left(\\frac{\\pi}{2}, \\pi\\right)\\)",
	"(D). \\(\\left(\\pi, \\frac{3\\pi}{2}\\right)\\)"
	],
	correct: "(B)"
	},
	// Q22
	{
	q: "Let \\( 2 \\sin^2 x + 3 \\sin x - 2 > 0 \\) and \\( x^2 - x - 2 < 0 \\) (\\( x \\) measured in radians) then \\( x \\) lies in the interval:",
	options: [
	"(A). \\(\\left(\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right)\\)",
	"(B). \\(\\left(-1, \\frac{5\\pi}{6}\\right)\\)",
	"(C). \\(\\left(-1, 2\\right)\\)",
	"(D). \\(\\left(\\frac{\\pi}{6}, 2\\right)\\)"
	],
	correct: "(D)"
	},
	// Q23
	{
	q: "\\(\\int \\frac{dx}{x^2 + 4x + 13}\\) is equal to:",
	options: [
	"(A). \\(\\log(x^2 + 4x + 13) + c\\)",
	"(B). \\(\\frac{1}{3} \\tan^{-1}\\left(\\frac{x + 2}{3}\\right) + c\\)",
	"(C). \\(\\log(2x + 4) + c\\)",
	"(D). \\(\\frac{2x + 4}{(x^2 + 4x + 13)^2} + c\\)"
	],
	correct: "(B)"
	},
	// Q24
	{
	q: "\\(\\int_0^{\\pi/4}\\) \\((\\cos x - \\sin x)dx\\) + \\(\\int_{\\pi/4}^{5\\pi/4}\\) \\((\\sin x - \\cos x)dx\\) + \\(\\int_{2\\pi}^{\\pi/4}\\) \\((\\cos x - \\sin x)dx\\) is equal to:",
	options: [
	"(A). \\(\\sqrt{2} - 2\\)",
	"(B). \\(2\\sqrt{2} - 2\\)",
	"(C). \\(3\\sqrt{2} - 2\\)",
	"(D). \\(4\\sqrt{2} - 2\\)"
	],
	correct: "(D)"
	},
	// Q25
	{
	q: "The distance between the lines \\(3x + 4y = 9\\) and \\(6x + 8y = 15\\) is:",
	options: [
	"(A). \\(\\frac{3}{2}\\)",
	"(B). \\(\\frac{3}{10}\\)",
	"(C). \\(6\\)",
	"(D). None of these"
	],
	correct: "(B)"
	},
	// Q26
	{
	q: "If \\(\\tan x = \\left(\\frac{b}{a}\\right)\\), then the value of \\(a \\cos 2x + b \\sin 2x\\) is:",
	options: [
	"(A). \\(a\\)",
	"(B). \\(a - b\\)",
	"(C). \\(a + b\\)",
	"(D). \\(b\\)"
	],
	correct: "(A)"
	},
	// Q27
	{
	q: "The maximum value of \\(3 \\cos \\theta + 4 \\sin \\theta\\) is :",
	options: [
	"(A). \\(3\\)",
	"(B). \\(4\\)",
	"(C). \\(5\\)",
	"(D). None of these"
	],
	correct: "(C)"
	},
	// Q28
	{
	q: "In a triangle \\(ABC\\), right angled at \\(C\\), the value of \\(\\cot A + \\cot B\\) is :",
	options: [
	"(A). \\(\\frac{c^2}{ab}\\)",
	"(B). \\(a + b\\)",
	"(C). \\(\\frac{a^2}{bc}\\)",
	"(D). \\(\\frac{b^2}{ac}\\)"
	],
	correct: "(A)"
	},
	// Q29
	{
	q: "The value of \\(2^{1/4} \\cdot 4^{1/8} \\cdot 8^{1/16} \\cdot 16^{1/32} \\ldots\\) is :",
	options: [
	"(A). \\(\\frac{3}{2}\\)",
	"(B). \\(\\frac{5}{2}\\)",
	"(C). \\(2\\)",
	"(D). \\(1\\)"
	],
	correct: "(C)"
	},
	// Q30
	{
	q: "The domain of the function \\(\\sin^{-1}(\\log_2(x^2/2))\\) is :",
	options: [
	"(A). \\([-1, 2] - \\{0\\}\\)",
	"(B). \\([-2, 2] - (-1, 1)\\)",
	"(C). \\([-2, 2] - \\{0\\}\\)",
	"(D). \\([1, 2]\\)"
	],
	correct: "(B)"
	},
	// Q31
	{
	q: "Evaluate \\(\\lim_{x \\to \\infty} \\frac{(2x - 3)(3x - 4)}{(4x - 5)(5x - 6)}\\) :",
	options: [
	"(A). \\(\\frac{1}{10}\\)",
	"(B). \\(0\\)",
	"(C). \\(\\frac{1}{5}\\)",
	"(D). \\(\\frac{3}{10}\\)"
	],
	correct: "(D)"
	},
	// Q32
	{
	q: "Function \\(f(x) = \\begin{cases} x - 1, & x < 2 \\\\ 2x - 3, & x \\geq 2 \\end{cases}\\) is a continuous function :",
	options: [
	"(A). for \\(x = 2\\) only",
	"(B). for all real values of \\(x\\) such that \\(x \\ne 2\\)",
	"(C). for all real values of \\(x\\)",
	"(D). for all integral values of \\(x\\) only"
	],
	correct: "(C)"
	},
	// Q33
	{
	q: "Differential coefficient of \\(\\sqrt{\\sec \\sqrt{x}}\\) is :",
	options: [
	"(A). \\(\\frac{1}{4\\sqrt{x}} \\sec \\sqrt{x} \\sin \\sqrt{x}\\)",
	"(B). \\(\\frac{1}{4\\sqrt{x}} (\\sec \\sqrt{x})^{3/2} \\sin \\sqrt{x}\\)",
	"(C). \\(\\frac{1}{2} \\sqrt{x} \\sec \\sqrt{x} \\sin \\sqrt{x}\\)",
	"(D). \\(\\frac{1}{2} \\sqrt{x} (\\sec \\sqrt{x})^{3/2} \\sin \\sqrt{x}\\)"
	],
	correct: "(B)"
	},
	// Q34
	{
	q: "The function \\(x^5 - 5x^4 + 5x^3 - 1\\) is :",
	options: [
	"(A). neither maximum nor minimum at \\(x = 0\\)",
	"(B). maximum at \\(x = 0\\)",
	"(C). maximum at \\(x = 1\\) and minimum at \\(x = 3\\)",
	"(D). minimum at \\(x = 0\\)"
	],
	correct: "(C)"
	},
	// Q35
	{
	q: "If \\(x = y\\sqrt{1 - y^2}\\), then \\(\\frac{dy}{dx}\\) is equal to :",
	options: [
	"(A). \\(x\\)",
	"(B). \\(\\sqrt{\\frac{1 - y^2}{1 + 2y^2}}\\)",
	"(C). \\(\\frac{\\sqrt{1 - y^2}}{1 - 2y^2}\\)",
	"(D). \\(0\\)"
	],
	correct: "(C)"
	},
	// Q36
	{
	q: "The value of: \\(1 - \\log 2 + \\frac{(\\log 2)^2}{2!} - \\frac{(\\log 2)^3}{3!} + \\ldots\\) is:",
	options: [
	"(A). \\(\\log 3\\)",
	"(B). \\(\\log 2\\)",
	"(C). \\(\\frac{1}{2}\\)",
	"(D). None of these"
	],
	correct: "(C)"
	},
	// Q37
	{
	q: "The maximum value of \\(f(x) = \\frac{x}{4 + x + x^2}\\) on \\([-1,1]\\) is:",
	options: [
	"(A). \\(-\\frac{1}{3}\\)",
	"(B). \\(-\\frac{1}{4}\\)",
	"(C). \\(\\frac{1}{5}\\)",
	"(D). \\(\\frac{1}{6}\\)"
	],
	correct: "(D)"
	},
	// Q38
	{
	q: "\\(\\int \\frac{e^x}{(2 + e^x)(e^x + 1)}\\, dx\\) is equal to:",
	options: [
	"(A). \\(\\log\\left(\\frac{e^x + 1}{e^x + 2}\\right) + c\\)",
	"(B). \\(\\log\\left(\\frac{e^x + 2}{e^x + 1}\\right) + c\\)",
	"(C). \\(\\frac{e^x + 1}{e^x + 2} + c\\)",
	"(D). \\(\\frac{e^x + 2}{e^x + 1} + c\\)"
	],
	correct: "(A)"
	},
	// Q39
	{
	q: "If \\(\\sin \\alpha\\) and \\(\\cos \\alpha\\) are the roots of the equation \\(px^2 + qx + r = 0\\), then:",
	options: [
	"(A). \\(p^2 + q^2 - 2pr = 0\\)",
	"(B). \\(p^2 - q^2 + 2pr = 0\\)",
	"(C). \\(p^2 - q^2 - 2pr = 0\\)",
	"(D). \\(p^2 + q^2 + 2pr = 0\\)"
	],
	correct: "(C)"
	},
	// Q40
	{
	q: "The general value of \\(\\theta\\) in the equation \\(\\cos \\theta = \\frac{1}{\\sqrt{2}},\\ \\tan \\theta = -1\\) is:",
	options: [
	"(A). \\(2n\\pi \\pm \\frac{\\pi}{6},\\ n \\in I\\)",
	"(B). \\(2n\\pi \\pm \\frac{7\\pi}{4},\\ n \\in I\\)",
	"(C). \\(n\\pi + (-1)^n \\frac{\\pi}{3},\\ n \\in I\\)",
	"(D). \\(n\\pi + (-1)^n \\frac{\\pi}{4},\\ n \\in I\\)"
	],
	correct: "(B)"
	},
	// Q41
	{
	q: "In a \\(\\Delta ABC\\), if \\(r_1 = 2r_2 = 3r_3\\), then:",
	options: [
	"(A). \\(\\frac{a}{b} = \\frac{4}{5}\\)",
	"(B). \\(\\frac{a}{b} = \\frac{5}{4}\\)",
	"(C). \\(a + b - 2c = 0\\)",
	"(D). \\(2a = b + c\\)"
	],
	correct: "(C)"
	},
	// Q42
	{
	q: "At \\(x = 0\\), the function \\(f(x) = |x|\\) is :",
	options: [
	"(A). continuous but not differentiable",
	"(B). discontinuous and differentiable",
	"(C). discontinuous and not differentiable",
	"(D). continuous and differentiable"
	],
	correct: "(B)"
	},
	// Q43
	{
	q: "The range of \\(f(x) = \\cos x - \\sin x\\) is :",
	options: [
	"(A). \\([-1, 1]\\)",
	"(B). \\((-1, 2)\\)",
	"(C). \\([-(\\pi/2), (\\pi/2)]\\)",
	"(D). \\([-\\sqrt{2}, \\sqrt{2}]\\)"
	],
	correct: "(D)"
	},
	// Q44
	{
	q: "The value of \\(\\lim_{x \\to \\infty} \\frac{x^2 + bx + 4}{x^2 + ax + 5}\\) is :",
	options: [
	"(A). \\(\\frac{b}{a}\\)",
	"(B). \\(0\\)",
	"(C). \\(1\\)",
	"(D). \\(\\frac{4}{5}\\)"
	],
	correct: "(B)"
	},
	// Q45
	{
	q: "Let \\(f(x) = \\begin{cases} \\frac{\\sin(\\pi x)}{5x}, & x \\ne 0 \\\\ k, & x = 0 \\end{cases}\\). If \\(f(x)\\) is continuous at \\(x = 0\\), then \\(k\\) is equal to :",
	options: [
	"(A). \\(\\frac{\\pi}{5}\\)",
	"(B). \\(\\frac{5}{\\pi}\\)",
	"(C). \\(1\\)",
	"(D). \\(0\\)"
	],
	correct: "(A)"
	},
	// Q46
	{
	q: "Let the functions \\(f, g, h\\) are defined from the set of real numbers \\(\\mathbb{R}\\) to \\(\\mathbb{R}\\) such that \\(f(x) = x^2 - 1\\), \\(g(x) = \\sqrt{x^2 + 1}\\) and \\(h(x) = \\begin{cases} 0, & x < 0 \\\\ x, & x \\ge 0 \\end{cases}\\) then \\(h \\circ (f \\circ g)(x)\\) is defined by :",
	options: [
	"(A). \\(x\\)",
	"(B). \\(x^2\\)",
	"(C). \\(0\\)",
	"(D). \\(\\text{None of these}\\)"
	],
	correct: "(A)"
	},
	// Q47
	{
	q: "The angle of elevation of the sun, if the length of the shadow of a tower is \\(\\sqrt{3}\\) times the height of the pole, is :",
	options: [
	"(A). \\(150^\\circ\\)",
	"(B). \\(30^\\circ\\)",
	"(C). \\(60^\\circ\\)",
	"(D). \\(45^\\circ\\)"
	],
	correct: "(C)"
	},
	// Q48
	{
	q: "If the function \\(y = \\frac{ax + b}{(x - 4)(x - 1)}\\) has an extremum at \\(P(2, -1)\\), then the values of \\(a\\) and \\(b\\) are:",
	options: [
	"(A). \\(a = 0, b = 1\\)",
	"(B). \\(a = 0, b = -1\\)",
	"(C). \\(a = 1, b = 0\\)",
	"(D). \\(a = -1, b = 0\\)"
	],
	correct: "(C)"
	},
	// Q49
	{
	q: "The limit \\(\\lim_{x \\to 0} \\left[ \\frac{e^x - e^{\\sin x}}{x - \\sin x} \\right]\\) is equal to:",
	options: [
	"(A). \\(-1\\)",
	"(B). \\(0\\)",
	"(C). \\(1\\)",
	"(D). None of these"
	],
	correct: "(C)"
	},
	// Q50
	{
	q: "If function \\(f(x)\\) is continuous at \\(x = 0\\), then the value of \\(a\\) is: \n\\(f(x) = \\begin{cases} a \\sin\\left(\\frac{\\pi}{2} + x\\right), & \\text{when } x \\ne 0 \\\\ 8, & \\text{when } x = 0 \\end{cases}\\)",
	options: [
	"(A). \\(8\\)",
	"(B). \\(\\frac{1}{8}\\)",
	"(C). \\(0\\)",
	"(D). None of these"
	],
	correct: "(A)"
	}
 ]
};
