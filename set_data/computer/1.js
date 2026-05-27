window.SET_DATA = {
  title: "Computer Mock Test 1",
  questions: [
	// Q1
	{
	q: "A CPU has an arithmetic unit that adds bytes and then sets its \\(V\\), \\(C\\) and \\(Z\\) flag bits as follows: The \\(V\\)-bit is set if arithmetic overflow occurs. The \\(C\\)-bit is set if a carry-out is generated from the most significant bit during an operation. The \\(Z\\)-bit is set if the result is zero. What are the values of the \\(V\\), \\(C\\) and \\(Z\\) flag bits respectively after the \\(8\\)-bit bytes \\(1100\\ 1100\\) and \\(1000\\ 1111\\) are added?",
	options: [
	"(A). \\(0,0,0\\)",
	"(B). \\(1,1,0\\)",
	"(C). \\(1,1,1\\)",
	"(D). \\(0,1,0\\)"
	],
	correct: "(B)"
	},
	// Q2
	{
	q: "Which one of the following statements is always true?",
	options: [
	"(A). A compiled program uses more memory than an interpreted program.",
	"(B). A compiler converts a program to a lower level language for execution.",
	"(C). A compiler for a high level language takes less memory than its interpreter.",
	"(D). Compiled programs take more time to execute than interpreted programs."
	],
	correct: "(B)"
	},
	// Q3
	{
	q: "Floating point numbers in a computer are represented using a \\(10\\)-bit mantissa (including a sign bit) and a \\(7\\)-bit exponent (including a sign bit). What is the approximate value of the maximum number, which can be represented? Assume that the mantissa is stored in the normalised form, that is, without leading zeroes.",
	options: [
	"(A). \\(2^{128}\\)",
	"(B). \\(2^{127}\\)",
	"(C). \\(2^{64}\\)",
	"(D). \\(2^{63}\\)"
	],
	correct: "(D)"
	},
	// Q4
	{
	q: "The capacity of a memory unit is defined by the number of words multiplied by the number of bits per word. How many separate address and data lines are needed for a memory of \\(4K \\times 16\\)?",
	options: [
	"(A). \\(10\\) address lines and \\(16\\) data lines",
	"(B). \\(12\\) address lines and \\(10\\) data lines",
	"(C). \\(12\\) address lines and \\(16\\) data lines",
	"(D). \\(12\\) address lines and \\(8\\) data lines"
	],
	correct: "(C)"
	},
	// Q5
	{
	q: "The main disadvantage of direct mapping of cache organization is that",
	options: [
	"(A). it doesn't allow simultaneous access to the intended data and its tag.",
	"(B). it is more expensive than other type of organizations.",
	"(C). the cache hit ratio is degraded if two or more blocks used alternatively map onto the same block frame in the cache.",
	"(D). the number of blocks required for the cache increases linearly with the size of the main memory."
	],
	correct: "(D)"
	},
	// Q6
	{
	q: "Let \\(A[1...10]\\) be an array, let \\(A[i] = 2i\\) for \\(1 \\le i \\le 10\\). After the assignment \\(j = A[A[5]]\\) is executed, the value of \\(A[j]\\) is equal to",
	options: [
	"(A). Undefined",
	"(B). \\(1\\)",
	"(C). \\(5\\)",
	"(D). \\(10\\)"
	],
	correct: "(A)"
	},
	// Q7
	{
	q: "The first instruction of bootstrap loader program of an operating system is stored in",
	options: [
	"(A). RAM",
	"(B). BIOS",
	"(C). Hard disk",
	"(D). None of these"
	],
	correct: "(B)"
	},
	// Q8
	{
	q: "The function \\(ABC + A'BC + ABC' + A'B'C\\) is equivalent to",
	options: [
	"(A). \\(AC' + AB + A'C\\)",
	"(B). \\(AB' + AC' + A'C\\)",
	"(C). \\(A'B + AC' + AB'\\)",
	"(D). \\(A'B + AC + AB'\\)"
	],
	correct: "(B)"
	},
	// Q9
	{
	q: "The addition of \\(4\\) bit, \\(2\\)'s complement binary numbers \\(1101\\) and \\(0100\\) results in",
	options: [
	"(A). \\(0001\\) and an overflow",
	"(B). \\(1001\\) and no overflow",
	"(C). \\(0001\\) and no overflow",
	"(D). \\(1001\\) and an overflow"
	],
	correct: "(C)"
	},
	// Q10
	{
	q: "Given \\(\\sqrt{(224)_r} = (13)_r\\), the value of radix \\(r\\) is",
	options: [
	"(A). \\(10\\)",
	"(B). \\(8\\)",
	"(C). \\(6\\)",
	"(D). \\(5\\)"
	],
	correct: "(D)"
	},
	// Q11
	{
	q: "Let \\(A = 11111010\\) and \\(B = 00001010\\) be two \\(8\\)-bit \\(2\\)'s complement numbers. Their product in \\(2\\)'s complement is",
	options: [
	"(A). \\(11000100\\)",
	"(B). \\(10011100\\)",
	"(C). \\(10100101\\)",
	"(D). \\(11010101\\)"
	],
	correct: "(A)"
	},
	// Q12
	{
	q: `Identify the logic function performed by the circuit.
		<br> <img src="images/computer_mocktest1_q12.png" alt="Question 12 Diagram" style="max-width:100%; height:auto; display:block; margin:auto;">`,
	options: [
	"(A). Exclusive OR",
	"(B). Exclusive NOR",
	"(C). NAND",
	"(D). NOR"
	],
	correct: "(B)"
	},
	// Q13
	{
	q: `Which of the following is (are) true about virtual memory systems that uses pages? 
		<br>I. The virtual address space can be larger than the amount of physical memory. 
		<br>II. Programs must be resident in main memory throughout their execution. 
		<br>III. Pages correspond to semantic characteristics of the programs.`,
	options: [
	"(A). I only",
	"(B). II only",
	"(C). I and II",
	"(D). I and III"
	],
	correct: "(C)"
	},
	// Q14
	{
	q: "The minimum number of gates needed to implement the Boolean function \\(f(x,y,z)= z(x+y)+\\overline{(\\overline{z}+x+y)(\\overline{x}+\\overline{y})}\\) is",
	options: [
	"(A). \\(2\\)",
	"(B). \\(3\\)",
	"(C). \\(4\\)",
	"(D). \\(5\\)"
	],
	correct: "(A)"
	},
	// Q15
	{
	q: "How many bits are required to store an ASCII character?",
	options: [
	"(A). \\(7\\)",
	"(B). \\(6\\)",
	"(C). \\(8\\)",
	"(D). None of these"
	],
	correct: "(A)"
	},
	// Q16
	{
	q: "On receiving an interrupt from an I/O device, the CPUs",
	options: [
	"(A). hand over the control of address and data bus to interrupting device",
	"(B). branch off to interrupt service subroutine immediately",
	"(C). branch off to interrupt service subroutine after completion of current instruction",
	"(D). None of the above"
	],
	correct: "(C)"
	},
	// Q17
	{
	q: "Micro-programmed control unit is",
	options: [
	"(A). faster than hard-wired unit",
	"(B). slower than hard-wired unit",
	"(C). to facilitate easy implementation of new instructions",
	"(D). both (B) and (C)"
	],
	correct: "(A)"
	},
	// Q18
	{
	q: "Index register in a digital computer is used for",
	options: [
	"(A). pointing to the stack address",
	"(B). indirect addressing",
	"(C). keeping track of the number of times loop is executed",
	"(D). address modification"
	],
	correct: "(B)"
	},
	// Q19
	{
	q: "In the virtual memory system, the address space specified by address lines of the CPU must be ..... than the physical memory size and ..... than the secondary storage size.",
	options: [
	"(A). smaller, smaller",
	"(B). smaller, larger",
	"(C). larger, smaller",
	"(D). larger, larger"
	],
	correct: "(C)"
	},
	// Q20
	{
	q: "The switching expression corresponding to \\(f(A,B,C,D)=\\Sigma(1,4,5,9,11,12)\\) is",
	options: [
	"(A). \\(B\\overline{C}\\overline{D}+\\overline{A}\\overline{C}D+\\overline{A}BD\\)",
	"(B). \\(AB\\overline{C}+ACD+\\overline{B}\\overline{C}D\\)",
	"(C). \\(AC\\overline{D}+\\overline{A}B\\overline{C}-A\\overline{C}\\overline{D}\\)",
	"(D). \\(\\overline{A}BD+AC\\overline{D}+BC\\overline{D}\\)"
	],
	correct: "(A)"
	}
 ]
};
