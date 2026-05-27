window.SET_DATA = {
  title: "Computer Mock Test 6",
  questions: [
	// Q1
	{
	q: "Consider a hard disk with \\(16\\) recording surfaces \\((0-15)\\) having \\(16384\\) cylinders \\((0-16383)\\) and each cylinder contains \\(64\\) sectors \\((0-63)\\). Data storage capacity in each sector is \\(512\\) bytes. Data are organised cylinder-wise and the addressing format is \\(<\\text{cylinder no., surface no., sector no.}>\\). A file of size \\(42797\\) KB is stored in the disk and the starting disk location of the file is \\(<1200, 9, 40>\\). What is the cylinder number of the last sector of the file, if it is stored in a continuous manner?",
	options: [
	"(A). \\(1284\\)",
	"(B). \\(1282\\)",
	"(C). \\(1286\\)",
	"(D). \\(1288\\)"
	],
	correct: "(A)"
	},
	// Q2
	{
	q: "Consider the following minterm expression for \\(F\\). \\(F(P,Q,R,S) = \\Sigma 0,2,5,7,8,10,13,15\\). The minterms \\(2,7,8\\) and \\(13\\) are ‘do not care’ terms. The minimal sum-of-product form for \\(F\\) is",
	options: [
	"(A). \\(Q\\overline{S} + \\overline{Q}S\\)",
	"(B). \\(QS + \\overline{Q}\\,\\overline{S}\\)",
	"(C). \\(\\overline{Q}\\,\\overline{R}\\,\\overline{S} + \\overline{Q}R\\overline{S} + Q\\overline{R}S + QRS\\)",
	"(D). \\(\\overline{P}\\,\\overline{Q}S + \\overline{P}QS + PQS + P\\overline{Q}\\,\\overline{S}\\)"
	],
	correct: "(B)"
	},
	// Q3
	{
	q: `The Boolean expression represented by the following Venn diagram is
		<br> <img src="images/computer_mocktest6_q3.png" alt="Question 3 Diagram" style="max-width:100%; height:auto; display:block; margin:auto;">`,
	options: [
	"(A). \\(a \\text{ XOR } b\\)",
	"(B). \\(a'b + ab'\\)",
	"(C). \\(ab + a'b'\\)",
	"(D). \\((a + b')(a' + b)\\)"
	],
	correct: "(C)"
	},
	// Q4
	{
	q: "The range of \\(n\\)-bit signed magnitude representation is",
	options: [
	"(A). \\(0\\) to \\(2^n - 1\\)",
	"(B). \\(-(2^{n-1}-1)\\) to \\((2^{n-1}-1)\\)",
	"(C). \\(-(2^n-1)\\) to \\((2^{n-1}-1)\\)",
	"(D). \\(0\\) to \\(2^{n-1}-1\\)"
	],
	correct: "(B)"
	},
	// Q5
	{
	q: "A hard disk has a rotational speed of \\(6000\\) rpm. Its average latency time is",
	options: [
	"(A). \\(5 \\times 10^{-3}\\) sec",
	"(B). \\(0.05\\) sec",
	"(C). \\(1\\) sec",
	"(D). \\(0.5\\) sec"
	],
	correct: "(A)"
	},
	// Q6
	{
	q: "The \\(2\\)'s complement representation of the number \\((-100)_{10}\\) in an \\(8\\)-bit computer is",
	options: [
	"(A). \\(10011011\\)",
	"(B). \\(01100100\\)",
	"(C). \\(11100100\\)",
	"(D). \\(10011100\\)"
	],
	correct: "(D)"
	},
	// Q7
	{
	q: "The number of terms in the product of sum canonical form of \\(|(x_1 + x_2)(x_3x_4)|\\) is",
	options: [
	"(A). \\(7\\)",
	"(B). \\(8\\)",
	"(C). \\(9\\)",
	"(D). \\(10\\)"
	],
	correct: "(C)"
	},
	// Q8
	{
	q: "Find the odd one out:",
	options: [
	"(A). HTTP",
	"(B). FCFS",
	"(C). HTML",
	"(D). TCP/IP"
	],
	correct: "(B)"
	},
	// Q9
	{
	q: "Consider the equation \\((43)_x = (y3)_8\\) where \\(x\\) and \\(y\\) are unknown. The number of possible solutions are",
	options: [
	"(A). \\(4\\)",
	"(B). \\(6\\)",
	"(C). \\(5\\)",
	"(D). \\(7\\)"
	],
	correct: "(C)"
	},
	// Q10
	{
	q: "Subtract \\((1010)_2\\) from \\((1101)_2\\) using first complement",
	options: [
	"(A). \\((1100)_2\\)",
	"(B). \\((0101)_2\\)",
	"(C). \\((1001)_2\\)",
	"(D). \\((0011)_2\\)"
	],
	correct: "(D)"
	},
	// Q11
	{
	q: "The process when processor fetch or decode another instruction during the execution of current instruction is called",
	options: [
	"(A). Supercomputing",
	"(B). Pipelining",
	"(C). Cloud computing",
	"(D). Grid computing"
	],
	correct: "(B)"
	},
	// Q12
	{
	q: "Which of the following is used by ALU to store the intermediate results?",
	options: [
	"(A). Stack",
	"(B). Heap",
	"(C). Registers",
	"(D). Accumulators"
	],
	correct: "(D)"
	},
	// Q13
	{
	q: "One TeraByte \\((TB)\\) = ............ GB and One ExaByte \\((EB)\\) = ............ GB",
	options: [
	"(A). \\(2^{10}\\) GB, \\(2^{16}\\) GB",
	"(B). \\(2^{10}\\) GB, \\(2^{20}\\) GB",
	"(C). \\(2^{10}\\) GB, \\(2^{24}\\) GB",
	"(D). \\(2^{10}\\) GB, \\(2^{30}\\) GB"
	],
	correct: "(D)"
	},
	// Q14
	{
	q: "The cache memory is more effective because of",
	options: [
	"(A). Memory localisation",
	"(B). Locality of reference",
	"(C). Memory size",
	"(D). None of the mentioned"
	],
	correct: "(B)"
	},
	// Q15
	{
	q: "Which of the following is the fastest means of memory access for CPU?",
	options: [
	"(A). Registers",
	"(B). Cache",
	"(C). Main memory",
	"(D). Stack"
	],
	correct: "(A)"
	},
	// Q16
	{
	q: "The number \\((2217)_8\\) is equivalent to",
	options: [
	"(A). \\((608)_{16}\\)",
	"(B). \\((028F)_{16}\\)",
	"(C). \\((048F)_{16}\\)",
	"(D). \\((2297)_{10}\\)"
	],
	correct: "(C)"
	},
	// Q17
	{
	q: "To fetch data from the secondary memory which one of the following register is used?",
	options: [
	"(A). MAR",
	"(B). PC",
	"(C). IR",
	"(D). MBR"
	],
	correct: "(A)"
	},
	// Q18
	{
	q: "The binary multiplication \\(00 * 11\\) will give",
	options: [
	"(A). \\(11\\)",
	"(B). \\(00\\)",
	"(C). \\(01\\)",
	"(D). \\(10\\)"
	],
	correct: "(B)"
	},
	// Q19
	{
	q: "Consider a computer system with speed of \\(10^6\\) instructions per second. A program \\(P\\), having \\(2n^2\\) steps is run on this system, where \\(n\\) is the input size. If \\(n = 10000\\), what is the execution time for \\(P\\)?",
	options: [
	"(A). \\(1.2\\) s",
	"(B). \\(20\\) s",
	"(C). \\(100\\) s",
	"(D). \\(200\\) s"
	],
	correct: "(D)"
	},
	// Q20
	{
	q: "To access the I/O devices, the status flag is continuously checked in",
	options: [
	"(A). Program controlled I/O",
	"(B). Memory mapped I/O",
	"(C). I/O mapped",
	"(D). None of these"
	],
	correct: "(A)"
	}	
 ]
};
