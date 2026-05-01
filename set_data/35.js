window.SET_DATA = {
  title: "Mathematics Mock Test 5",
  questions: [
	// Q1
	{
	q: `The number of values of \\(x\\) in \\((0, \\pi)\\) satisfying the equation <span style='font-size:15px'> \\((\\sqrt{3} \\sin x + \\cos x)^{\\sqrt{\\sqrt{3} \\sin 2x - \\cos 2x + 2}}\\)\\( = 4\\) </span>, is`,
	options: [
	"(A). \\(0\\)",
	"(B). \\(1\\)",
	"(C). \\(2\\)",
	"(D). none of these"
	],
	correct: "(B)"
	},
	// Q2
	{
	q: "\\(\\int \\frac{f'(x)}{f(x) \\log\\{f(x)\\}} \\, dx =\\)",
	options: [
	"(A). \\(\\frac{f(x)}{\\log\\{f(x)\\}} + C\\)",
	"(B). \\(f(x) \\log f(x) + C\\)",
	"(C). \\(\\log\\{\\log f(x)\\} + C\\)",
	"(D). \\(\\frac{1}{\\log\\{\\log f(x)\\}} + C\\)"
	],
	correct: "(C)"
	},
	// Q3
	{
	q: "\\(\\int \\frac{e^x}{(2 + e^x)(e^x + 1)} \\, dx =\\)",
	options: [
	"(A). \\(\\log \\left(\\frac{e^x + 1}{e^x + 2}\\right) + C\\)",
	"(B). \\(\\log \\left(\\frac{e^x + 2}{e^x + 1}\\right) + C\\)",
	"(C). \\(\\frac{e^x + 1}{e^x + 2} + C\\)",
	"(D). \\(\\frac{e^x + 2}{e^x + 1} + C\\)"
	],
	correct: "(B)"
	},
	// Q4
	{
	q: "\\(\\int \\frac{1 + x + \\sqrt{x + x^2}}{\\sqrt{x} + \\sqrt{1 + x}} \\, dx =\\)",
	options: [
	"(A). \\(\\frac{1}{2} \\sqrt{1 + x} + C\\)",
	"(B). \\(\\frac{2}{3} (1 + x)^{3/2} + C\\)",
	"(C). \\(\\sqrt{1 + x} + C\\)",
	"(D). \\(2(1 + x)^{3/2} + C\\)"
	],
	correct: "(B)"
	},
	// Q5
	{
	q: "The value of \\(\\frac{1}{r_1^2} + \\frac{1}{r_2^2} + \\frac{1}{r_3^2} + \\frac{1}{r^2}\\), is",
	options: [
	"(A). \\(0\\)",
	"(B). \\(\\frac{a^2 + b^2 + c^2}{\\Delta^2}\\)",
	"(C). \\(\\frac{\\Delta^2}{a^2 + b^2 + c^2}\\)",
	"(D). \\(\\frac{a^2 + b^2 + c^2}{\\Delta^2}\\)"
	],
	correct: "(B)"
	},
	// Q6
	{
	q: "If \\(y = x^{x^{x^{\\cdots}}}\\), then \\(\\frac{dy}{dx}\\) is equal to",
	options: [
	"(A). \\(y x^{y-1}\\)",
	"(B). \\(\\frac{y^2}{x(1 - y \\log x)}\\)",
	"(C). \\(\\frac{y}{x(1 + y \\log x)}\\)",
	"(D). none of these"
	],
	correct: "(C)"
	},
	// Q7
	{
	q: "If in a triangle ABC, \\(\\cos 3A + \\cos 3B + \\cos 3C = 1\\), then one angle must be exactly equal to",
	options: [
	"(A). \\(30^\\circ\\)",
	"(B). \\(60^\\circ\\)",
	"(C). \\(90^\\circ\\)",
	"(D). \\(120^\\circ\\)"
	],
	correct: "(D)"
	},
	// Q8
	{
	q: "The equivalent definition of \\(f(x) = \\max\\{-|1 - x^2|, 2|x| - 2, \\)\\(1 - \\frac{7}{2}|x|\\}\\), is",
	options: [
	"(A). \\(\\begin{cases}-2x+2, & x < -1 \\\\ x^2-1, & -1 \\le x < \\frac{1}{2} \\\\ 1 + \\frac{7x}{2}, & -\\frac{1}{2} \\le x < 0 \\\\ 1 - \\frac{7x}{2}, & 0 \\le x < \\frac{1}{2} \\\\ x^2-1, & \\frac{1}{2} \\le x < 1 \\\\ 2x-2, & x \\ge 1 \\end{cases}\\)",
	"(B). \\(\\begin{cases}-2x-2, & x < -1 \\\\ -x^2-1, & -1 \\le x < \\frac{1}{2} \\\\ 1 + \\frac{7x}{2}, & -\\frac{1}{2} \\le x < 0 \\\\ 1 - \\frac{7x}{2}, & 0 \\le x < \\frac{1}{2} \\\\ x^2-1, & \\frac{1}{2} \\le x < 1 \\\\ 2x-2, & x \\ge 1 \\end{cases}\\)",
	"(C). \\(\\begin{cases}-2x+2, & x \\le -1 \\\\ x^2-1, & -1 \\le x < 0 \\\\ 1 + 7x, & 0 \\le x < 1 \\\\ 2x-2, & x \\ge 1 \\end{cases}\\)",
	"(D). none of these"
	],
	correct: "(A)"
	},
	// Q9
	{
	q: "If \\(x \\in R\\), then \\(f(x) = \\sin^{-1}\\left(\\frac{2x}{1 + x^2}\\right)\\) is equal to",
	options: [
	"(A). \\(2 \\tan^{-1} x\\)",
	`(B). <span style='font-size:13px'> \\(\\begin{cases}-\\pi - 2\\tan^{-1}x, & -\\infty < x < -1 \\\\ 2\\tan^{-1}x, & -1 \\le x \\le 1 \\\\ \\pi - 2\\tan^{-1}x, & 1 < x < \\infty \\end{cases}\\) </span>`,
	`(C). <span style='font-size:13px'> \\(\\begin{cases}-\\pi - 2\\tan^{-1}x, & -\\infty < x < -1 \\\\ 2\\tan^{-1}x, & -1 \\le x \\le 1 \\\\ \\pi - 2\\tan^{-1}x, & 1 < x < \\infty \\end{cases}\\) </span>`,
	`(D). <span style='font-size:13px'> \\(\\begin{cases}-\\pi + 2\\tan^{-1}x, & -\\infty < x \\le -1 \\\\ 2\\tan^{-1}x, & -1 < x < 1 \\\\ \\pi - 2\\tan^{-1}x, & 1 \\le x < \\infty \\end{cases}\\) </span>`
	],
	correct: "(B)"
	},
	// Q10
	{
	q: "The minimum value of \\(\\left(1 + \\frac{1}{\\sin^n \\alpha}\\right)\\left(1 + \\frac{1}{\\cos^n \\alpha}\\right)\\) is",
	options: [
	"(A). \\(1\\)",
	"(B). \\(2\\)",
	"(C). \\((1 + 2^{n/2})^2\\)",
	"(D). \\(4\\)"
	],
	correct: "(C)"
	},
	// Q11
	{
	q: "If \\(\\int \\frac{x^2 + 4}{x^4 + 16} \\, dx = \\frac{1}{a} \\tan^{-1}\\left(\\frac{x^2 - 4}{ax}\\right) + C\\), then \\(a =\\)",
	options: [
	"(A). \\(4\\)",
	"(B). \\(2\\sqrt{2}\\)",
	"(C). \\(2\\)",
	"(D). \\(\\sqrt{2}\\)"
	],
	correct: "(B)"
	},
	// Q12
	{
	q: "The value of \\(\\lim_{x \\to \\infty} \\frac{\\left(\\int_0^x e^x \\, dx\\right)^2}{\\int_0^x e^{2x^2} \\, dx}\\), is",
	options: [
	"(A). \\(1\\)",
	"(B). \\(2\\)",
	"(C). \\(3\\)",
	"(D). \\(0\\)"
	],
	correct: "(D)"
	},
	// Q13
	{
	q: "The value of \\(\\int_1^4 e^{\\sqrt{x}} \\, dx\\), is",
	options: [
	"(A). \\(e^2\\)",
	"(B). \\(2e^2\\)",
	"(C). \\(4e^2\\)",
	"(D). \\(3e^2\\)"
	],
	correct: "(B)"
	},
	// Q14
	{
	q: "The value of \\(\\int_0^{1000} e^{x - [x]} \\, dx\\), is",
	options: [
	"(A). \\(\\frac{e^{1000} - 1}{1000}\\)",
	"(B). \\(\\frac{e^{1000} - 1}{e - 1}\\)",
	"(C). \\(1000(e - 1)\\)",
	"(D). \\(\\frac{e - 1}{1000}\\)"
	],
	correct: "(C)"
	},
	// Q15
	{
	q: "The function \\(f(x) = a \\sin x + \\frac{1}{3} \\sin 3x\\) has maximum value at \\(x = \\frac{\\pi}{3}\\). The value of \\(a\\), is",
	options: [
	"(A). \\(3\\)",
	"(B). \\(\\frac{1}{3}\\)",
	"(C). \\(2\\)",
	"(D). \\(\\frac{1}{2}\\)"
	],
	correct: "(C)"
	},
	// Q16
	{
	q: "If \\(ax + \\frac{b}{x} > c\\) for all positive values of \\(x\\) and \\(a, b, c\\) are positive constants, then",
	options: [
	"(A). \\(ab \\ge \\frac{c^2}{4}\\)",
	"(B). \\(ab < \\frac{c^2}{4}\\)",
	"(C). \\(bc \\ge \\frac{a^2}{4}\\)",
	"(D). \\(ac \\ge \\frac{b^2}{4}\\)"
	],
	correct: "(A)"
	},
	// Q17
	{
	q: "The greatest value of \\(f(x) = \\cos \\left(x e^{[x]} + 7x^2 - 3x\\right)\\), \\(x \\in [-1, \\infty)\\), is",
	options: [
	"(A). \\(-1\\)",
	"(B). \\(1\\)",
	"(C). \\(0\\)",
	"(D). \\(\\cos 1\\)"
	],
	correct: "(B)"
	},
	// Q18
	{
	q: "The equivalent definition of \\(f(x) = \\max \\{x^2, (1 - x)^2, 2x(1 - x)\\}\\), where \\(0 \\le x \\le 1\\),",
	options: [
	`(A). <span style='font-size:13px'> \\(f(x) = \\begin{cases} x^2, & 0 \\le x \\le \\frac{1}{3} \\\\ 2x(1-x), & \\frac{1}{3} \\le x \\le \\frac{2}{3} \\\\ (1-x)^2, & \\frac{2}{3} \\le x \\le 1 \\end{cases}\\) </span>`,
	`(B). <span style='font-size:13px'> \\(f(x) = \\begin{cases} (1-x)^2, & 0 \\le x \\le \\frac{1}{3} \\\\ 2x(1-x), & \\frac{1}{3} \\le x \\le \\frac{2}{3} \\\\ x^2, & \\frac{2}{3} \\le x \\le 1 \\end{cases}\\) </span>`,
	`(C). <span style='font-size:13px'> \\(f(x) = \\begin{cases} x^2, & 0 \\le x \\le \\frac{1}{2} \\\\ (1-x)^2, & \\frac{1}{2} \\le x \\le 1 \\end{cases}\\) </span>`,
	"(D). none of these"
	],
	correct: "(B)"
	},
	// Q19
	{
	q: "The period of the function \\(f(x) = 4 \\sin^4 \\left(\\frac{4x - 3\\pi}{6\\pi^2}\\right) + 2 \\cos \\left(\\frac{4x - 6\\pi}{2\\pi^2}\\right)\\) is",
	options: [
	"(A). \\(\\frac{3\\pi^2}{4}\\)",
	"(B). \\(\\frac{3\\pi^3}{4}\\)",
	"(C). \\(\\frac{4\\pi^2}{3}\\)",
	"(D). \\(\\frac{4\\pi^3}{3}\\)"
	],
	correct: "(B)"
	},
	// Q20
	{
	q: "Consider the following relations 
		\\(R = {(x, y) | x, y \\) are real numbers and \\(x = wy\\) for some rational number \\(w } \\); 
		\\(S = {\\left(\\frac{m}{n}, \\frac{p}{q}\\right) | m, n, p, q\\) are integers such that \\(n, q \\ne 0\\) and \\(qm = pn}\\). Then,",
	options: [
	"(A). \\(R\\) is an equivalence relation but \\(S\\) is not an equivalence relation",
	"(B). Neither \\(R\\) nor \\(S\\) is an equivalence relation",
	"(C). \\(S\\) is an equivalence relation but \\(R\\) is not an equivalence relation",
	"(D). \\(R\\) and \\(S\\) both are equivalence relation"
	],
	correct: "(C)"
	},
	// Q21
	{
	q: "If \\(f : [0, \\infty) \\to [0, \\infty)\\) and \\(f(x) = \\frac{x}{1 + x}\\), then \\(f\\) is",
	options: [
	"(A). one-one and onto",
	"(B). one-one but not onto",
	"(C). onto but not one-one",
	"(D). Neither one-one nor onto"
	],
	correct: "(B)"
	},
	// Q22
	{
	q: "At a point \\(15\\) metres away from the base of a \\(15\\) metres high house, the angle of elevation of the top is",
	options: [
	"(A). \\(90^\\circ\\)",
	"(B). \\(60^\\circ\\)",
	"(C). \\(30^\\circ\\)",
	"(D). \\(45^\\circ\\)"
	],
	correct: "(D)"
	},
	// Q23
	{
	q: "Let \\(f(x) = \\frac{1}{\\sqrt{18 - x^2}}\\). The value of \\(\\lim_{x \\to 3} \\frac{f(x) - f(3)}{x - 3}\\), is",
	options: [
	"(A). \\(0\\)",
	"(B). \\(-\\frac{1}{9}\\)",
	"(C). \\(-\\frac{1}{3}\\)",
	"(D). \\(\\frac{1}{9}\\)"
	],
	correct: "(D)"
	},
	// Q24
	{
	q: "If \\(f(x) = \\frac{2}{x - 3}\\), \\(g(x) = \\frac{x - 3}{x + 4}\\) and \\(h(x) = -\\frac{2(2x + 1)}{x^2 + x - 12}\\), then \\(\\lim_{x \\to 3} \\{f(x) + g(x) + h(x)\\}\\), is",
	options: [
	"(A). \\(-2\\)",
	"(B). \\(-1\\)",
	"(C). \\(-\\frac{2}{7}\\)",
	"(D). \\(0\\)"
	],
	correct: "(A)"
	},
	// Q25
	{
	q: "The length of the normal to the curve \\(x = a(\\theta + \\sin \\theta), y = a(1 - \\cos \\theta)\\), at \\(\\theta = \\frac{\\pi}{2}\\), is",
	options: [
	"(A). \\(2a\\)",
	"(B). \\(a\\sqrt{2}\\)",
	"(C). \\(\\frac{a}{2}\\)",
	"(D). \\(\\frac{a}{\\sqrt{2}}\\)"
	],
	correct: "(B)"
	},
	// Q26
	{
	q: "The value of the integral \\(\\int_{-\\pi}^{\\pi} (\\cos ax - \\sin bx)^2 \\, dx\\), where \\(a\\) and \\(b\\) are integers, is",
	options: [
	"(A). \\(-\\pi\\)",
	"(B). \\(0\\)",
	"(C). \\(\\pi\\)",
	"(D). \\(2\\pi\\)"
	],
	correct: "(D)"
	},
	// Q27
	{
	q: "If \\(x = \\frac{1}{2}(\\sqrt{3} + 1)\\), then the value of expression \\(4x^3 + 2x^2 - 8x + 7\\), is equal to",
	options: [
	"(A). \\(10\\)",
	"(B). \\(5\\)",
	"(C). \\(0\\)",
	"(D). \\(-2\\)"
	],
	correct: "(A)"
	},
	// Q28
	{
	q: `If \\(A = \\begin{bmatrix} 1 & -2 & -3 \\\\ 2 & 1 & -2 \\\\ 3 & 2 & 1 \\end{bmatrix}\\), then A is`,
	options: [
	"(A). \\(\\text{symmetric matrix}\\)",
	"(B). \\(\\text{a skew-symmetric matrix}\\)",
	"(C). \\(\\text{a singular matrix}\\)",
	"(D). \\(\\text{non-singular matrix}\\)"
	],
	correct: "(D)"
	},
	// Q29
	{
	q: "If \\(\\sin x + \\sin^2 x = 1\\), then the value of \\(\\cos^{12} x + 3\\cos^{10} x + 3\\cos^8 x + \\cos^6 x\\) is",
	options: [
	"(A). \\(-1\\)",
	"(B). \\(1\\)",
	"(C). \\(-2\\)",
	"(D). \\(2\\)"
	],
	correct: "(B)"
	},
	// Q30
	{
	q: "The maximum value of \\(\\frac{\\log_e x}{x}\\) is",
	options: [
	"(A). \\(1\\)",
	"(B). \\(\\frac{2}{e}\\)",
	"(C). \\(e\\)",
	"(D). \\(\\frac{1}{e}\\)"
	],
	correct: "(D)"
	},
	// Q31
	{
	q: "If \\(A + B + C = \\pi\\) and \\(x = \\sin \\frac{A}{2} \\sin \\frac{B}{2} \\sin \\frac{C}{2}\\), then",
	options: [
	"(A). \\(x \\geq \\frac{1}{8}\\)",
	"(B). \\(x \\leq \\frac{1}{8}\\)",
	"(C). \\(x \\geq \\frac{1}{2}\\)",
	"(D). \\(x \\leq \\frac{1}{2}\\)"
	],
	correct: "(B)"
	},
	// Q32
	{
	q: "If \\(I(m,n) = \\int_0^1 t^m (1 - t)^n \\, dt\\), then the expression for \\(I(m,n)\\) in terms of \\(I(m+1, n-1)\\) is",
	options: [
	"(A). \\(\\frac{2^n}{m+1} + \\frac{n}{m+1} I(m+1, n-1)\\)",
	"(B). \\(\\frac{n}{m+1} I(m+1, n-1)\\)",
	"(C). \\(\\frac{2^n}{m+1} + \\frac{n}{m+1} I(m+1, n-1)\\)",
	"(D). \\(\\frac{m}{n+1} I(m+1, n-1)\\)"
	],
	correct: "(B)"
	},
	// Q33
	{
	q: "If \\(\\int f(x) \\, dx = \\psi(x)\\), then \\(\\int x^5 f(x^3) \\, dx\\) is equal to",
	options: [
	"(A). \\(\\frac{1}{3} \\left\\{ x^3 \\phi(x^3) - \\int x^2 \\phi(x^3) \\, dx \\right\\} + C\\)",
	"(B). \\(\\frac{1}{3} x^3 \\phi(x^3) - 3 \\int x^3 \\phi(x^3) \\, dx + C\\)",
	"(C). \\(\\frac{1}{3} x^3 \\phi(x^3) - \\int x^2 \\phi(x^3) \\, dx + C\\)",
	"(D). \\(\\frac{1}{3} \\left\\{ x^3 \\phi(x^3) - \\int x^3 \\phi(x^3) \\, dx \\right\\} + C\\)"
	],
	correct: "(C)"
	},
	// Q34
	{
	q: "Let \\(y = x^2 e^{-x}\\), then the interval in which \\(y\\) increases with respect to x is",
	options: [
	"(A). \\((-\\infty, \\infty)\\)",
	"(B). \\((-2, 0)\\)",
	"(C). \\((2, \\infty)\\)",
	"(D). \\((0, 2)\\)"
	],
	correct: "(A)"
	},
	// Q35
	{
	q: "The interval in which the function \\(f(x) = x e^{2-x}\\) increases, is",
	options: [
	"(A). \\((-\\infty, 0)\\)",
	"(B). \\((2, \\infty)\\)",
	"(C). \\((0, 2)\\)",
	"(D). none of these"
	],
	correct: "(B)"
	},
	// Q36
	{
	q: "Between any two real roots of the equation \\(e^x \\sin x - 1 = 0\\), the equation \\(e^x \\cos x + 1 = 0\\) has",
	options: [
	"(A). at least one root",
	"(B). at most one root",
	"(C). exactly one root",
	"(D). no root"
	],
	correct: "(A)"
	},
	// Q37
	{
	q: "If \\(a + b + c = 0\\), then the equation \\(3ax^2 + 2bx + c = 0\\) has, in the interval \\((0, 1)\\).",
	options: [
	"(A). at least one root",
	"(B). at most one root",
	"(C). no root",
	"(D). none of these"
	],
	correct: "(A)"
	},
	// Q38
	{
	q: "The value of c in Rolle’s theorem when \\(f(x) = 2x^3 - 5x^2 - 4x + 3\\), \\(x \\in [\\frac{1}{2}, 3]\\) is",
	options: [
	"(A). \\(2\\)",
	"(B). \\(-\\frac{1}{3}\\)",
	"(C). \\(-2\\)",
	"(D). \\(\\frac{2}{3}\\)"
	],
	correct: "(A)"
	},
	// Q39
	{
	q: "Let \\(f(x) = [2x^3 - 5]\\), where \\([\\ ]\\) denotes the greatest integer function. Then number of points in \\((1, 2)\\) where the function is discontinuous, is",
	options: [
	"(A). \\(0\\)",
	"(B). \\(13\\)",
	"(C). \\(10\\)",
	"(D). \\(3\\)"
	],
	correct: "(B)"
	},
	// Q40
	{
	q: "Given that \\(f(x)\\) is a differentiable function of \\(x\\) and that \\(f(x)f(y) = f(x) + f(y) + f(xy) - 2\\) and that \\(f(2) = 5\\). Then, \\(f(3)\\) is equal to",
	options: [
	"(A). \\(10\\)",
	"(B). \\(24\\)",
	"(C). \\(15\\)",
	"(D). none of these"
	],
	correct: "(A)"
	},
	// Q41
	{
	q: "If \\(\\sin x = \\lambda\\) has exactly one solution in \\([0, \\frac{9\\pi}{4}]\\) then the number of values of \\(\\lambda\\), is",
	options: [
	"(A). \\(0\\)",
	"(B). \\(1\\)",
	"(C). \\(2\\)",
	"(D). \\(3\\)"
	],
	correct: "(C)"
	},
	// Q42
	{
	q: "In a \\(\\triangle ABC\\), if \\(a = 13\\), \\(b = 14\\), \\(c = 15\\), then \\(\\sin \\frac{A}{2}\\) =",
	options: [
	"(A). \\(\\frac{1}{\\sqrt{5}}\\)",
	"(B). \\(\\frac{2}{\\sqrt{5}}\\)",
	"(C). \\(\\frac{3}{\\sqrt{5}}\\)",
	"(D). \\(\\frac{4}{\\sqrt{5}}\\)"
	],
	correct: "(A)"
	},
	// Q43
	{
	q: "If \\(A\\) is an obtuse angle, then \\(\\frac{\\sin^3 A - \\cos^3 A}{\\sin A - \\cos A} + \\frac{\\sin A}{\\sqrt{1 + \\tan^2 A}} - \\)\\(2 \\tan A \\cot A\\) is always equal to",
	options: [
	"(A). \\(1\\)",
	"(B). \\(-1\\)",
	"(C). \\(2\\)",
	"(D). none of these"
	],
	correct: "(B)"
	},
	// Q44
	{
	q: "If \\(8 \\sin^3 x \\sin 3x = \\sum_{r=0}^{n} a_r \\cos r x\\) is an identity in \\(x\\), then \\(n =\\)",
	options: [
	"(A). \\(3\\)",
	"(B). \\(4\\)",
	"(C). \\(6\\)",
	"(D). \\(9\\)"
	],
	correct: "(C)"
	},
	// Q45
	{
	q: "The number of triplets satisfying \\(\\sin^{-1} x + \\cos^{-1} y + \\sin^{-1} z = 2\\pi\\), is",
	options: [
	"(A). \\(0\\)",
	"(B). \\(2\\)",
	"(C). \\(1\\)",
	"(D). \\(\\text{infinite}\\)"
	],
	correct: "(C)"
	},
	// Q46
	{
	q: `For \\(A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 2 \\\\ 0 & 6 \\end{bmatrix}\\) and \\(B = \\begin{bmatrix} 5 & 4 & 6 \\\\ 4 & 1 & 2 \\\\ -5 & -1 & 1 \\end{bmatrix}\\)`,
	options: [
	"(A). \\(AB\\) exists",
	"(B). \\(A + B\\) exists",
	"(C). \\(BA\\) exists",
	"(D). None of these"
	],
	correct: "(C)"
	},
	// Q47
	{
	q: `If \\(A = \\begin{bmatrix} 0 & -4 & 1 \\\\ 2 & \\lambda & -3 \\\\ 1 & 2 & -1 \\end{bmatrix}\\), then \\(A^{-1}\\) exists if`,
	options: [
	"(A). \\(\\lambda = 4\\)",
	"(B). \\(\\lambda \\ne 8\\)",
	"(C). \\(\\lambda \\ne 4\\)",
	"(D). None of these"
	],
	correct: "(B)"
	},
	// Q48
	{
	q: `If \\(A = \\begin{bmatrix} 4 & -1 & -4 \\\\ 3 & 0 & -4 \\\\ 3 & -1 & -3 \\end{bmatrix}\\), then \\(A^2\\) is equal to`,
	options: [
	"(A). \\(A\\)",
	"(B). \\(A^T\\)",
	"(C). \\(I\\)",
	"(D). None of these"
	],
	correct: "(C)"
	},
	// Q49
	{
	q: "If \\(\\int e^x \\left( \\frac{1 - \\sin x}{1 - \\cos x} \\right) dx = f(x) + \\text{Constant}\\), then \\(f(x)\\) is equal to",
	options: [
	"(A). \\(e^x \\cot\\left(\\frac{x}{2}\\right) + C\\)",
	"(B). \\(e^{-x} \\cot\\left(\\frac{x}{2}\\right) + C\\)",
	"(C). \\(- e^x \\cot\\left(\\frac{x}{2}\\right) + C\\)",
	"(D). \\(- e^{-x} \\cot\\left(\\frac{x}{2}\\right) + C\\)"
	],
	correct: "(C)"
	},
	// Q50
	{
	q: "The equation of the normal to the parabola, \\(x^2 = 8y\\) at \\(x = 4\\) is",
	options: [
	"(A). \\(x + y = 6\\)",
	"(B). \\(x + 2y = 0\\)",
	"(C). \\(3 - 2y = 0\\)",
	"(D). \\(x + y = 2\\)"
	],
	correct: "(A)"
	}
 ]
};
