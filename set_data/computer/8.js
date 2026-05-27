window.SET_DATA = {
  title: "Computer Mock Test 8",
  questions: [
	// Q1
	{
	q: "The time required for fetching and execution of one machine instruction is",
	options: [
	"(A). Delay time",
	"(B). Seek time",
	"(C). Real time",
	"(D). CPU cycle"
	],
	correct: "(D)"
	},
	// Q2
	{
	q: "The number of minterms in a \\(n\\) variable truth table is",
	options: [
	"(A). \\(n^2\\)",
	"(B). \\((n-1)^2\\)",
	"(C). \\(2^n\\)",
	"(D). \\(2^{n-1}\\)"
	],
	correct: "(C)"
	},
	// Q3
	{
	q: "The maximum and minimum value represented in signed \\(16\\)-bit \\(2\\)'s complement representation are",
	options: [
	"(A). \\(0\\) and \\(32767\\)",
	"(B). \\(0\\) and \\(65535\\)",
	"(C). \\(-16384\\) and \\(16383\\)",
	"(D). \\(-32768\\) and \\(32767\\)"
	],
	correct: "(D)"
	},
	// Q4
	{
	q: "A bulb in the staircase has two switches, one switch is at the ground floor and the other one is at the first floor. The bulb can be turned ON and also can be turned OFF by any of the switches irrespective of the state of the other switch. The logic of the switching of the bulb resembles",
	options: [
	"(A). XOR Gate",
	"(B). AND Gate",
	"(C). OR Gate",
	"(D). XNOR Gate"
	],
	correct: "(A)"
	},
	// Q5
	{
	q: "What is a potential problem of \\(1\\)'s complement representation of numbers?",
	options: [
	"(A). Binary subtractions are not possible",
	"(B). There are two different representations of zero",
	"(C). Multiplication of two numbers cannot be carried out",
	"(D). Binary additions are not possible"
	],
	correct: "(B)"
	},
	// Q6
	{
	q: "A wrong sentence related to FAT \\(32\\) and NTFS file systems is",
	options: [
	"(A). FAT \\(32\\) has lower disk utilisation compared to NTFS",
	"(B). Read and write speeds of NTFS are faster than that of FAT \\(32\\)",
	"(C). FAT \\(32\\) store individual files of size up to \\(32\\) GB",
	"(D). NTFS stands for New Technology File System"
	],
	correct: "(C)"
	},
	// Q7
	{
	q: `Consider the circuit shown below and find minimum number of NAND gates required to design it.
		<br> <img src="images/computer_mocktest8_q7.png" alt="Question 7 Diagram" style="max-width:100%; height:auto; display:block; margin:auto;">`,
	options: [
	"(A). \\(4\\)",
	"(B). \\(6\\)",
	"(C). \\(3\\)",
	"(D). \\(5\\)"
	],
	correct: "(A)"
	},
	// Q8
	{
	q: "Consider the following minterm expression for \\(F\\): \\(F(P,Q,R,S)=\\Sigma(0,2,5,7,8,10,13,15)\\). The minterms \\(2,7,8,13\\) are don't care terms. The minimal sum of products form for \\(F\\) is",
	options: [
	"(A). \\(\\overline{Q}S+Q\\overline{S}\\)",
	"(B). \\(\\overline{Q}\\,\\overline{S}+QS\\)",
	"(C). \\(\\overline{Q}\\,\\overline{R}\\,\\overline{S}+\\overline{Q}R\\overline{S}+Q\\overline{R}S+QRS\\)",
	"(D). \\(\\overline{P}Q\\overline{S}+PQS+PQS+PQ\\overline{S}\\)"
	],
	correct: "(C)"
	},
	// Q9
	{
	q: "The reduced form of the Boolean function \\(F=xyz+xyz'+x'yz+xy'z\\) is",
	options: [
	"(A). \\(xy+yz\\)",
	"(B). \\(x+yz+xz\\)",
	"(C). \\(x+y+z\\)",
	"(D). \\(xy+yz+xz\\)"
	],
	correct: "(D)"
	},
	// Q10
	{
	q: "If a processor clock is rated as \\(2500\\) million cycles per second, then its clock period is",
	options: [
	"(A). \\(250\\times10^{-10}\\) sec",
	"(B). \\(4.00\\times10^{-10}\\) sec",
	"(C). \\(1.00\\times10^{-10}\\) sec",
	"(D). \\(5.00\\times10^{-10}\\) sec"
	],
	correct: "(B)"
	},
	// Q11
	{
	q: "Suppose we have a \\(10\\)-bit computer that uses \\(10\\)-bit int (\\(2\\)'s complement representation). The number representation of \\(-35\\) is",
	options: [
	"(A). \\(0000100011\\)",
	"(B). \\(1100100011\\)",
	"(C). \\(1111011101\\)",
	"(D). \\(1111011101\\)"
	],
	correct: "(C)"
	},
	// Q12
	{
	q: "Consider the following Boolean expression for \\(F\\): \\(F(P,Q,R,S)=PQ+\\overline{P}QR+\\overline{P}Q\\overline{R}S\\). The minimum sum of products form of \\(F\\) is",
	options: [
	"(A). \\(PQ+QR+QS\\)",
	"(B). \\(P+Q+R+S\\)",
	"(C). \\(\\overline{P}+\\overline{Q}+\\overline{R}+\\overline{S}\\)",
	"(D). \\(\\overline{P}R+P\\overline{R}S+P\\)"
	],
	correct: "(A)"
	},
	// Q13
	{
	q: "What is the name of the storage device that compensates the difference in rates of flow of data from one device to another?",
	options: [
	"(A). Cache",
	"(B). Buffer",
	"(C). Concentrator",
	"(D). RAM"
	],
	correct: "(B)"
	},
	// Q14
	{
	q: "Equivalent of the decimal number \\((25375)_{10}\\) in binary form",
	options: [
	"(A). \\((110010111)_2\\)",
	"(B). \\((11101011)_2\\)",
	"(C). \\((11011111)_2\\)",
	"(D). \\((11001101)_2\\)"
	],
	correct: "(A)"
	},
	// Q15
	{
	q: "Which of the following registers is used to keep track of address of the memory location where the next instruction is located?",
	options: [
	"(A). Program Counter",
	"(B). Memory Data Register",
	"(C). Instruction counters",
	"(D). Memory Address Register"
	],
	correct: "(A)"
	},
	// Q16
	{
	q: "A CPU generates \\(32\\)-bit virtual addresses. The page size is \\(4\\) KB. The processor has a translation look-aside buffer (TLB) which can hold a total of \\(128\\) page table entries and is \\(4\\)-way set associative. The minimum size of the TLB tag is",
	options: [
	"(A). \\(13\\) bits",
	"(B). \\(20\\) bits",
	"(C). \\(11\\) bits",
	"(D). \\(15\\) bits"
	],
	correct: "(D)"
	},
	// Q17
	{
	q: "Which of the following is true about Von Neumann architecture?",
	options: [
	"(A). It has separate storage for input/output operations",
	"(B). It has a separate processing unit for data and instructions",
	"(C). It has separate memory for data and instructions",
	"(D). It has a single memory unit for both data and instructions"
	],
	correct: "(D)"
	},
	// Q18
	{
	q: "Let \\(\\oplus\\) and \\(\\odot\\) denote the Exclusive-OR and Exclusive-NOR operations respectively. Which one of the following is not correct?",
	options: [
	"(A). \\(\\overline{P}\\oplus\\overline{Q}=P\\odot Q\\)",
	"(B). \\(\\overline{P}\\oplus Q=P\\odot Q\\)",
	"(C). \\(\\overline{P}\\oplus\\overline{Q}=P\\oplus Q\\)",
	"(D). \\((P\\oplus\\overline{P})\\oplus Q=(P\\odot\\overline{P})\\odot\\overline{Q}\\)"
	],
	correct: "(D)"
	},
	// Q19
	{
	q: "Suppose we have a \\(10\\)-bit computer that uses \\(10\\)-bit floating point computational unit (Float number uses IEEE floating-point arithmetic where a floating point number has \\(1\\) sign bit, \\(5\\) exponent bits, and \\(4\\) fraction bits). The representation for \\(+\\infty\\) (plus infinity) is",
	options: [
	"(A). \\(0\\ 11111\\ 0000\\)",
	"(B). \\(1\\ 11111\\ 0000\\)",
	"(C). \\(0\\ 00000\\ 1111\\)",
	"(D). \\(0\\ 11111\\ 1111\\)"
	],
	correct: "(A)"
	},
	// Q20
	{
	q: "How many \\(32K\\times1\\) RAM chips are needed to provide a memory capacity of \\(256\\) K-bytes?",
	options: [
	"(A). \\(8\\)",
	"(B). \\(128\\)",
	"(C). \\(64\\)",
	"(D). \\(32\\)"
	],
	correct: "(C)"
	}
 ]
};
