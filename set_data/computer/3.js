window.SET_DATA = {
  title: "Computer Mock Test 3",
  questions: [
	// Q1
	{
	q: "What is the hexadecimal representation of the decimal number \\(265\\)?",
	options: [
	"(A). \\(0\\)x\\(109\\)",
	"(B). \\(0\\)x\\(411\\)",
	"(C). \\(0\\)x\\(100001001\\)",
	"(D). \\(0\\)x\\(190\\)"
	],
	correct: "(A)"
	},
	// Q2
	{
	q: "Debugger is a program that",
	options: [
	"(A). links object code to produce an executable",
	"(B). compiles source code to object code",
	"(C). does not allow step by step execution of a segment of program",
	"(D). allows to set breakpoints, execute a segment of program and display contents of Register"
	],
	correct: "(D)"
	},
	// Q3
	{
	q: "In computer architecture, which of the following correctly matches the fundamental unit used in the CPU, cache, and main memory respectively?",
	options: [
	"(A). CPU \\(\\rightarrow\\) Block, Cache \\(\\rightarrow\\) Word, Memory \\(\\rightarrow\\) Page",
	"(B). CPU \\(\\rightarrow\\) Block, Cache \\(\\rightarrow\\) Page, Memory \\(\\rightarrow\\) Word",
	"(C). CPU \\(\\rightarrow\\) Word, Cache \\(\\rightarrow\\) Block, Memory \\(\\rightarrow\\) Page",
	"(D). CPU \\(\\rightarrow\\) Page, Cache \\(\\rightarrow\\) Word, Memory \\(\\rightarrow\\) Block"
	],
	correct: "(C)"
	},
	// Q4
	{
	q: "Given the Boolean expression \\((A \\oplus B) \\land (B \\rightarrow C)\\), which of the following rows in the truth table would have an output of \\(1\\) (True)?",
	options: [
	"(A). \\(A = 1, B = 0, C = 1\\)",
	"(B). \\(A = 0, B = 0, C = 0\\)",
	"(C). \\(A = 1, B = 1, C = 1\\)",
	"(D). \\(A = 0, B = 1, C = 0\\)"
	],
	correct: "(A)"
	},
	// Q5
	{
	q: "Which of the following secondary storage devices has the fastest access time: Optical Drive, Magnetic Tape Drive, Hard Disk Drive (HDD), Solid State Drive (SSD)?",
	options: [
	"(A). Optical Drive",
	"(B). Hard Disk Drive (HDD)",
	"(C). Solid State Drive (SSD)",
	"(D). Magnetic Tape Drive"
	],
	correct: "(C)"
	},
	// Q6
	{
	q: "Which of the following statements about ASCII and Unicode is correct?",
	options: [
	"(A). ASCII uses \\(16\\) bits per character, while Unicode uses only \\(7\\) bits.",
	"(B). ASCII can represent more characters than Unicode because it uses fewer bits per character.",
	"(C). Unicode is backward compatible with ASCII and includes all ASCII characters in its encoding.",
	"(D). Unicode and ASCII are completely different and share no common characters."
	],
	correct: "(C)"
	},
	// Q7
	{
	q: `In the design of a control unit of a processor, two common approaches are used: hardware control and microprogrammed control. Consider the following statements: <br>I. Hardware control units are generally faster but more difficult to modify than microprogrammed control units. <br>II. In a horizontal microprogrammed control unit, each control signal has a separate bit in the control word. <br>III. Vertical microprogramming leads to longer control words but provides greater parallelism. <br>IV. Microprogrammed control units are typically easier to implement and modify than hardware control units.`,
	options: [
	"(A). I, III and IV only",
	"(B). II, III and IV only",
	"(C). I, II and IV only",
	"(D). I, II, III and IV"
	],
	correct: "(C)"
	},
	// Q8
	{
	q: "Consider the Boolean expression \\(X = \\overline{(A + B) \\cdot C}\\) over two Boolean variables \\(A\\) and \\(B\\). Which one of the following Boolean expressions is equivalent to the given Boolean expression \\(X\\)?",
	options: [
	"(A). \\(\\bar{A} \\cdot \\bar{B} + \\bar{C}\\)",
	"(B). \\(A \\cdot C + \\bar{B} \\cdot \\bar{C}\\)",
	"(C). \\(\\bar{A} \\cdot \\bar{B} + C\\)",
	"(D). \\(\\bar{A} + \\bar{B} \\cdot \\bar{C}\\)"
	],
	correct: "(A)"
	},
	// Q9
	{
	q: `Consider a \\(9\\)-bit representation. Which of the following correctly gives the smallest number that can be represented in: <br>(i) \\(1\\)'s complement, <br>(ii) \\(2\\)'s complement`,
	options: [
	"(A). (i) \\(-255\\), (ii) \\(-255\\)",
	"(B). (i) \\(-256\\), (ii) \\(-256\\)",
	"(C). (i) \\(-256\\), (ii) \\(-255\\)",
	"(D). (i) \\(-255\\), (ii) \\(-256\\)"
	],
	correct: "(D)"
	},
	// Q10
	{
	q: "Suppose that \\(C\\) represents the set of all countries, \\(R\\) represents the set of all countries that have at least one river flowing through it, \\(M\\) represents the set of all countries that have at least one mountain in it, and \\(D\\) represents the set of all countries that have at least one desert in it. It is given that \\((R \\cup M \\cup D) = C\\). Which one of the following gives the set of all countries that have either a mountain or a river, but does not have a desert in it? The notation \\(D^C\\) represents the complement of the set \\(D\\) with respect to the universal set \\(C\\).",
	options: [
	"(A). \\((R \\cup M) - (R \\cap M)\\)",
	"(B). \\((R \\cup M) \\cap D^C\\)",
	"(C). \\((R \\cup M) - (R \\cap M \\cap D^C)\\)",
	"(D). \\((R \\cap M) \\cap D^C\\)"
	],
	correct: "(B)"
	},
	// Q11
	{
	q: "An I/O processor controls the flow of information between",
	options: [
	"(A). cache memory and I/O devices",
	"(B). main memory and I/O devices",
	"(C). two I/O devices",
	"(D). cache and main memories"
	],
	correct: "(B)"
	},
	// Q12
	{
	q: "Which of the following devices will take highest time in taking the backup of the data from a computer?",
	options: [
	"(A). Magnetic disk",
	"(B). Pen drive",
	"(C). CD",
	"(D). Magnetic tape"
	],
	correct: "(D)"
	},
	// Q13
	{
	q: "ROM is a kind of",
	options: [
	"(A). primary memory",
	"(B). cache memory",
	"(C). removable memory",
	"(D). secondary memory"
	],
	correct: "(D)"
	},
	// Q14
	{
	q: "The errors that can be pointed out by compilers are",
	options: [
	"(A). syntax errors",
	"(B). semantic errors",
	"(C). logical errors",
	"(D). internal errors"
	],
	correct: "(A)"
	},
	// Q15
	{
	q: "Let \\(x = 11111010\\) and \\(y = 00001010\\) be two \\(8\\)-bit \\(2\\)'s complement numbers. Their product in \\(2\\)'s complement notation is",
	options: [
	"(A). \\(11000100\\)",
	"(B). \\(10011100\\)",
	"(C). \\(10100101\\)",
	"(D). \\(11010101\\)"
	],
	correct: "(A)"
	},
	// Q16
	{
	q: "The range of numbers that can be stored in \\(8\\) bits, if negative numbers are stored in \\(2\\)'s complement form is",
	options: [
	"(A). \\(-128\\) to \\(+128\\)",
	"(B). \\(-128\\) to \\(+127\\)",
	"(C). \\(-127\\) to \\(+128\\)",
	"(D). \\(-127\\) to \\(+127\\)"
	],
	correct: "(B)"
	},
	// Q17
	{
	q: "Primary storage is ___ as compared to secondary memory.",
	options: [
	"(A). slow and expensive",
	"(B). fast and inexpensive",
	"(C). fast and expensive",
	"(D). slow and inexpensive"
	],
	correct: "(C)"
	},
	// Q18
	{
	q: "Which of the following units is used to supervise each instruction in the CPU?",
	options: [
	"(A). Control unit",
	"(B). Accumulator",
	"(C). ALU",
	"(D). Control Register"
	],
	correct: "(A)"
	},
	// Q19
	{
	q: "\\((2FA0C)_{16}\\) is equivalent to",
	options: [
	"(A). \\((195084)_{10}\\)",
	"(B). \\((00101111101000001100)_2\\)",
	"(C). Both (a) and (b)",
	"(D). None of the above"
	],
	correct: "(C)"
	},
	// Q20
	{
	q: "The decimal equivalent of octal number \\(111010\\) is",
	options: [
	"(A). \\(81\\)",
	"(B). \\(72\\)",
	"(C). \\(71\\)",
	"(D). \\(61\\)"
	],
	correct: "(B)"
	}
 ]
};
