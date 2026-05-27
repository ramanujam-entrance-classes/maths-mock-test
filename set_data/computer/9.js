window.SET_DATA = {
  title: "Computer Mock Test 9",
  questions: [
	// Q1
	{
	q: "The range of the exponent \\(E\\) in the IEEE754 double precision (Binary \\(64\\)) format is",
	options: [
	"(A). \\(-1023\\leq E\\leq1023\\)",
	"(B). \\(-1022\\leq E\\leq1022\\)",
	"(C). \\(-1023\\leq E\\leq1022\\)",
	"(D). \\(-1022\\leq E\\leq1023\\)"
	],
	correct: "(C)"
	},
	// Q2
	{
	q: "Which of the following components is not a part of an instruction format in CPU processing?",
	options: [
	"(A). Source operand",
	"(B). Register file",
	"(C). Destination operand",
	"(D). Opcode"
	],
	correct: "(B)"
	},
	// Q3
	{
	q: "Any given truth table can be represented by",
	options: [
	"(A). a product of sum Boolean expression",
	"(B). a Karnaugh map",
	"(C). a sum of product Boolean expression",
	"(D). All of the options"
	],
	correct: "(D)"
	},
	// Q4
	{
	q: "The expression \\(P+QR\\) is the reduced form of",
	options: [
	"(A). \\((P+Q)R\\)",
	"(B). \\((P+R)Q\\)",
	"(C). \\((P+Q)(P+R)\\)",
	"(D). \\(PQ+QR\\)"
	],
	correct: "(C)"
	},
	// Q5
	{
	q: "The \\(6\\)-bit \\(2\\)'s complement binary number \\(011010\\) is given. What is its equivalent hexadecimal representation, preserving the \\(2\\)'s complement interpretation?",
	options: [
	"(A). \\((1A)_{16}\\)",
	"(B). \\((2A)_{16}\\)",
	"(C). \\((1B)_{16}\\)",
	"(D). \\((1C)_{16}\\)"
	],
	correct: "(A)"
	},
	// Q6
	{
	q: "Which part of the instruction format is responsible for specifying how to access the operands during execution?",
	options: [
	"(A). Opcode",
	"(B). Program Counter",
	"(C). Addressing Mode",
	"(D). Control Unit"
	],
	correct: "(C)"
	},
	// Q7
	{
	q: "A hypothetical number system uses digits \\(\\{0,1,X\\}\\). Its numbers are ordered lexicographically: \\(00,01,0X,10,\\ldots\\). Which digit sequence is at the \\(10^{th}\\) position?",
	options: [
	"(A). \\(X0\\)",
	"(B). \\(XX\\)",
	"(C). \\(1X\\)",
	"(D). \\(10\\)"
	],
	correct: "(B)"
	},
	// Q8
	{
	q: "For which values of \\(x\\) and \\(y\\) does the Boolean function \\(f=x'y+xy'+x'y'\\) output \\(0\\)?",
	options: [
	"(A). \\(x=1, y=1\\)",
	"(B). \\(x=0, y=1\\)",
	"(C). \\(x=1, y=0\\)",
	"(D). \\(f\\) is always \\(1\\)"
	],
	correct: "(A)"
	},
	// Q9
	{
	q: "Two \\(4\\)-bit \\(2\\)'s complement numbers, \\(0111\\) and \\(1001\\), are added. What is the result and overflow status?",
	options: [
	"(A). \\(1111\\), overflow",
	"(B). \\(0000\\), No overflow",
	"(C). \\(1111\\), No overflow",
	"(D). \\(0000\\), overflow"
	],
	correct: "(B)"
	},
	// Q10
	{
	q: "In a Venn diagram of \\(4\\) sets (Employed, Illiterate, Social Worker, Truthful), what logic term defines: “People who are Employed but neither Illiterate nor Truthful”?",
	options: [
	"(A). \\(E \\cap I' \\cap T'\\)",
	"(B). \\(E \\cap (I \\cap T)'\\)",
	"(C). \\((E \\cup I)' \\cup T\\)",
	"(D). \\((E \\cap T) \\cup I'\\)"
	],
	correct: "(A)"
	},
	// Q11
	{
	q: "In instruction \\(ADD\\ P1,[3000]\\), what is \\([3000]\\) indicating in terms of CPU design?",
	options: [
	"(A). Direct operand",
	"(B). Indirect address",
	"(C). Immediate data",
	"(D). Effective address"
	],
	correct: "(D)"
	},
	// Q12
	{
	q: "A processor with a \\(1\\text{GHz}\\) clock runs \\(2 \\times 10^6\\) instructions in \\(4\\text{ms}\\). What is the CPI (cycles per instruction)?",
	options: [
	"(A). \\(1\\)",
	"(B). \\(2\\)",
	"(C). \\(4\\)",
	"(D). \\(0.5\\)"
	],
	correct: "(B)"
	},
	// Q13
	{
	q: "A system with \\(16\\)-bit addressing and \\(2K \\times 8\\)-bit RAM chips requires how many chips to build \\(64\\text{KB}\\) memory?",
	options: [
	"(A). \\(32\\)",
	"(B). \\(16\\)",
	"(C). \\(64\\)",
	"(D). \\(8\\)"
	],
	correct: "(A)"
	},
	// Q14
	{
	q: "A control unit generates which of the following during instruction execution?",
	options: [
	"(A). Arithmetic logic",
	"(B). Control signals",
	"(C). Register values",
	"(D). Memory contents"
	],
	correct: "(B)"
	},
	// Q15
	{
	q: "In floating-point representation, which part defines the precision of the number?",
	options: [
	"(A). Exponent",
	"(B). Sign Bit",
	"(C). Mantissa",
	"(D). Decimal Point"
	],
	correct: "(C)"
	},
	// Q16
	{
	q: "If \\(F=(A+B)\\cdot(A'+C)\\), simplify \\(F\\) using Boolean algebra. Which of the following expressions is equivalent?",
	options: [
	"(A). \\(AB+AC\\)",
	"(B). \\(AB+A'C\\)",
	"(C). \\(A+BC\\)",
	"(D). \\(A'C+AB\\)"
	],
	correct: "(B)"
	},
	// Q17
	{
	q: "A \\(32\\)-bit system with \\(4\\text{KB}\\) page size uses \\(4\\)-way set associative TLB with \\(256\\) entries. What is the TLB tag size?",
	options: [
	"(A). \\(17\\text{ bits}\\)",
	"(B). \\(19\\text{ bits}\\)",
	"(C). \\(20\\text{ bits}\\)",
	"(D). \\(13\\text{ bits}\\)"
	],
	correct: "(B)"
	},
	// Q18
	{
	q: "In logic design, a multiplexer with \\(4\\) select lines can select how many inputs?",
	options: [
	"(A). \\(8\\)",
	"(B). \\(16\\)",
	"(C). \\(32\\)",
	"(D). \\(64\\)"
	],
	correct: "(B)"
	},
	// Q19
	{
	q: "A processor uses \\(2\\)'s complement representation for negative numbers. If an \\(8\\)-bit register contains \\(10011010\\), what is its equivalent signed decimal value?",
	options: [
	"(A). \\(-102\\)",
	"(B). \\(-38\\)",
	"(C). \\(-58\\)",
	"(D). \\(-118\\)"
	],
	correct: "(A)"
	},
	// Q20
	{
	q: "Which type of memory is burned during manufacturing and cannot be modified later?",
	options: [
	"(A). EEPROM",
	"(B). Static RAM",
	"(C). PROM",
	"(D). Masked ROM"
	],
	correct: "(D)"
	}
 ]
};
