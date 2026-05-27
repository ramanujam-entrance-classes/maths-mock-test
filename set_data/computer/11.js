window.SET_DATA = {
  title: "Computer Mock Test 11",
  questions: [
	// Q1
	{
	q: "Which of the following is the CORRECT truth table for the XOR Gate with two binary inputs \\(A\\) and \\(B\\)?",
	options: [
	`(A). <table style="text-align:center;width:100%;border:1px solid black;border-collapse:collapse;">
			<tr>
				<th style="text-align:center;border:1px solid black"> \\(A\\) </th>
				<th style="text-align:center;border:1px solid black"> \\(B\\) </th>
				<th style="text-align:center;border:1px solid black"> \\(A \\ XOR \\ B\\) </th>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
			</tr>
		  </table>`,
	`(B). <table style="text-align:center;width:100%;border:1px solid black;border-collapse:collapse;">
			<tr>
				<th style="text-align:center;border:1px solid black"> \\(A\\) </th>
				<th style="text-align:center;border:1px solid black"> \\(B\\) </th>
				<th style="text-align:center;border:1px solid black"> \\(A \\ XOR \\ B\\) </th>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
			</tr>
		  </table>`,
	`(C). <table style="text-align:center;width:100%;border:1px solid black;border-collapse:collapse;">
			<tr>
				<th style="text-align:center;border:1px solid black"> \\(A\\) </th>
				<th style="text-align:center;border:1px solid black"> \\(B\\) </th>
				<th style="text-align:center;border:1px solid black"> \\(A \\ XOR \\ B\\) </th>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
			</tr>
		  </table>`,
	`(D). <table style="text-align:center;width:100%;border:1px solid black;border-collapse:collapse;">
			<tr>
				<th style="text-align:center;border:1px solid black"> \\(A\\) </th>
				<th style="text-align:center;border:1px solid black"> \\(B\\) </th>
				<th style="text-align:center;border:1px solid black"> \\(A \\ XOR \\ B\\) </th>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
			</tr>
			<tr>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
				<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
			</tr>
		  </table>`
	],
	correct: "(C)"
	},
	// Q2
	{
	q: "In an instruction execution pipeline, the earliest that the instruction TLB and data TLB can be accessed are",
	options: [
	"(A). Fetch stage and memory stage respectively",
	"(B). Memory stage and execute stage respectively",
	"(C). Memory stage and memory stage respectively",
	"(D). Fetch stage and fetch stage respectively"
	],
	correct: "(A)"
	},
	// Q3
	{
	q: "In \\(8\\)-bit two's complement arithmetic, compute the result of the following addition: \\(A=10011001\\), \\(B=11010111\\). What is the resulting \\(8\\)-bit binary value?",
	options: [
	"(A). \\(11100100\\)",
	"(B). \\(01110001\\)",
	"(C). Result is invalid",
	"(D). \\(01110000\\)"
	],
	correct: "(C)"
	},
	// Q4
	{
	q: "Consider a system with a CPU having \\(6\\) registers and \\(32\\)-bit instructions. The maximum possible size of the main memory is \\(512\\text{KB}\\) \\((1K=2^{10})\\). Each instruction takes two registers and one memory address as operands. Which one of the following correctly gives the maximum possible distinct instructions that can be there in the instruction set of the CPU?",
	options: [
	"(A). \\(256\\)",
	"(B). \\(128\\)",
	"(C). \\(64\\)",
	"(D). \\(1024\\)"
	],
	correct: "(B)"
	},
	// Q5
	{
	q: "What is the equivalent decimal value of the unsigned binary number \\(10101.10101_2\\)?",
	options: [
	"(A). \\(51.125\\)",
	"(B). \\(125.25\\)",
	"(C). \\(25.375\\)",
	"(D). \\(21.65625\\)"
	],
	correct: "(D)"
	},
	// Q6
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
	// Q7
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
	// Q8
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
	// Q9
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
	// Q10
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
	// Q11
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
	// Q12
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
	// Q13
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
	// Q14
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
	// Q15
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
	// Q16
	{
	q: "Match all items in Group \\(1\\) with correct options from those given in Group \\(2\\). Group \\(1\\): P. Intermediate representation, Q. Top-down parsing, R. Runtime environments, S. Register allocation. Group \\(2\\): \\(1\\). Activation records, \\(2\\). Code generation, \\(3\\). Leftmost derivation, \\(4\\). Graph colouring.",
	options: [
	"(A). P-2, Q-3, R-1, S-4",
	"(B). P-4, Q-2, R-3, S-1",
	"(C). P-1, Q-2, R-3, S-4",
	"(D). P-2, Q-3, R-4, S-1"
	],
	correct: "(A)"
	},
	// Q17
	{
	q: "The binary number \\(111.101\\) is to be stored in an \\(8\\)-bit fraction + \\(6\\)-bit exponent normalised format. Choose the correct representation:",
	options: [
	"(A). Fraction: \\(11101000\\), Exponent: \\(000010\\)",
	"(B). Fraction: \\(11010100\\), Exponent: \\(000011\\)",
	"(C). Fraction: \\(11101000\\), Exponent: \\(000011\\)",
	"(D). Fraction: \\(11010100\\), Exponent: \\(000010\\)"
	],
	correct: "(A)"
	},
	// Q18
	{
	q: "Assume \\(x'\\) represents negation of \\(x\\). The Boolean expression \\(x'y + xy' + x'y'\\) is equivalent to",
	options: [
	"(A). \\(x + y\\)",
	"(B). \\(x' + y\\)",
	"(C). \\(x \\oplus y'\\)",
	"(D). \\(x' + y'\\)"
	],
	correct: "(D)"
	},
	// Q19
	{
	q: "The time taken by the CPU to fetch and execute a single instruction from memory is called",
	options: [
	"(A). instruction cycle",
	"(B). seek time",
	"(C). context switch time",
	"(D). clock pulse duration"
	],
	correct: "(A)"
	},
	// Q20
	{
	q: "A computer system executes \\(10^6\\) instructions per second. A program \\(P\\) takes \\((3n^2 + 5n)\\) instructions to complete, where \\(n\\) is the input size. If \\(n = 2000\\), what is the approximate execution time of the program?",
	options: [
	"(A). \\(12\\) seconds",
	"(B). \\(14.5\\) seconds",
	"(C). \\(13\\) seconds",
	"(D). \\(11\\) seconds"
	],
	correct: "(A)"
	}
 ]
};
