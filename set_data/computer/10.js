window.SET_DATA = {
  title: "Computer Mock Test 10",
  questions: [
	// Q1
	{
	q: "Given that numbers \\(A\\) and \\(B\\) are two \\(8\\)-bit \\(2\\)'s Complement numbers with \\(A=11111111\\) and \\(B=10000011\\). Then, sum \\(A+B\\) is",
	options: [
	"(A). \\(00000010\\)",
	"(B). \\(11111100\\)",
	"(C). \\(11111110\\)",
	"(D). \\(00000000\\)"
	],
	correct: "(C)"
	},
	// Q2
	{
	q: "Consider an arbitrary number system with independent digits as \\(0,1\\) and \\(A\\). If we generate first few numbers in sequence as \\(00,01,0A,10,11,1A\\) and if this process is continued to generate the numbers then the position of \\(10A\\) is",
	options: [
	"(A). \\(15\\)",
	"(B). \\(12\\)",
	"(C). \\(9\\)",
	"(D). \\(10\\)"
	],
	correct: "(B)"
	},
	// Q3
	{
	q: `The Boolean expression for the following truth table is<br>
		<table style="text-align:center;width:100%;border:1px solid black;border-collapse:collapse;">
		<tr>
		<th style="text-align:center;border:1px solid black"> \\(x\\) </th>
		<th style="text-align:center;border:1px solid black"> \\(y\\) </th>
		<th style="text-align:center;border:1px solid black"> \\(z\\) </th>
		<th style="text-align:center;border:1px solid black"> \\(F\\) </th>
		</tr>
		<tr>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		</tr>
		<tr>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		</tr>
		<tr>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		</tr>
		<tr>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		</tr>
		<tr>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		</tr>
		<tr>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		</tr>
		<tr>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(0\\) </td>
		</tr>
		<tr>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		<td style="text-align:center;border:1px solid black"> \\(1\\) </td>
		</tr>
		</table>
	`,
	options: [
	"(A). \\(F=x'yz'+xy'z+xy'z'\\)",
	"(B). \\(F=x'y'z'+xy'z+xyz'\\)",
	"(C). \\(F=x'yz'+xy'z+xyz\\)",
	"(D). None of these"
	],
	correct: "(C)"
	},
	// Q4
	{
	q: "Consider the following \\(4\\)-bit binary numbers represented in the \\(2\\)'s complement form: \\(1101\\) and \\(0100\\). What would be the result when we add them?",
	options: [
	"(A). \\(0001\\) and an overflow",
	"(B). \\(1001\\) and no overflow",
	"(C). \\(1001\\) and an overflow",
	"(D). \\(0001\\) and no overflow"
	],
	correct: "(D)"
	},
	// Q5
	{
	q: "Which of the following interfaces perform the transfer of data between the memory and the I/O peripheral without involving the CPU?",
	options: [
	"(A). Branch Interface",
	"(B). Serial Interface",
	"(C). DMA",
	"(D). DDA"
	],
	correct: "(C)"
	},
	// Q6
	{
	q: "Which of the following is the smallest unit of data in a computer?",
	options: [
	"(A). Byte",
	"(B). Bit",
	"(C). Nibble",
	"(D). KB"
	],
	correct: "(B)"
	},
	// Q7
	{
	q: `Consider the program below which uses six temporary variables \\(a,b,c,d,e\\) and \\(f\\). <br>
		a=10 \\implies b=20 <br>
		c=30 \\implies d=a+c <br>
		e=b+d \\implies f=c+e <br>
		b=c+e \\implies e=b+f <br>
		d=5+e <br>
		return d+f <br>
		Assuming that all the above operations take their operands from registers, the minimum number of registers needed to execute this program without spilling is`,
	options: [
	"(A). \\(5\\)",
	"(B). \\(6\\)",
	"(C). \\(3\\)",
	"(D). \\(4\\)"
	],
	correct: "(C)"
	},
	// Q8
	{
	q: "The quotient, if the binary number \\(11010111\\) is divided by \\(101\\), is",
	options: [
	"(A). \\(101011\\)",
	"(B). \\(101010\\)",
	"(C). \\(101101\\)",
	"(D). \\(111001\\)"
	],
	correct: "(A)"
	},
	// Q9
	{
	q: "Which of the following components is used to establish a communication link between a CPU and the peripheral device to transfer data?",
	options: [
	"(A). Memory address register",
	"(B). Instruction register",
	"(C). Memory data register",
	"(D). Index register"
	],
	correct: "(C)"
	},
	// Q10
	{
	q: "A computer system has \\(16\\)-bit wide address/data bus that uses RAM chips of \\(4K \\times 8\\)-bit capacity. The number of RAM chips needed to provide a memory capacity of \\(64\\text{Kbytes}\\) is",
	options: [
	"(A). \\(32\\)",
	"(B). \\(16\\)",
	"(C). \\(64\\)",
	"(D). \\(8\\)"
	],
	correct: "(B)"
	},
	// Q11
	{
	q: "The primary purpose of cache memory in a computer system is",
	options: [
	"(A). to manage input and output operations between the CPU and peripherals",
	"(B). to temporarily store frequently accessed data and instructions for faster access by the CPU",
	"(C). to permanently store data and programs",
	"(D). to provide additional storage space when the main memory is full"
	],
	correct: "(B)"
	},
	// Q12
	{
	q: "Which of the following do not affects CPU performance?",
	options: [
	"(A). Cache size",
	"(B). Number of cores",
	"(C). Amount of RAM",
	"(D). Clock speed"
	],
	correct: "(C)"
	},
	// Q13
	{
	q: "A CPU generates \\(32\\)-bit virtual addresses. The page size is \\(4\\text{KB}\\). The processor has a translation look-aside buffer (TLB) which can hold a total of \\(128\\)-page table entries and is \\(4\\) way set associative. The minimum size of the TLB tag is",
	options: [
	"(A). \\(11\\text{ bits}\\)",
	"(B). \\(15\\text{ bits}\\)",
	"(C). \\(13\\text{ bits}\\)",
	"(D). \\(20\\text{ bits}\\)"
	],
	correct: "(B)"
	},
	// Q14
	{
	q: `In the figure, the circle stands for employed, the square stands for a social worker, the triangle stands for illiterate, and the rectangle stands for truthful. Study the figure with its regions and find the number of neither truthful nor illiterate people among the employed only.
		<br> <img src="images/computer_mocktest10_q14.png" alt="Question 14 Diagram" style="max-width:100%; height:auto; display:block; margin:auto;">`,
	options: [
	"(A). \\(4\\)",
	"(B). \\(8\\)",
	"(C). \\(1\\)",
	"(D). \\(11\\)"
	],
	correct: "(B)"
	},
	// Q15
	{
	q: "Cache memory functions as an intermediary between",
	options: [
	"(A). RAM and ROM",
	"(B). CPU and RAM",
	"(C). CPU and Hard Disk",
	"(D). None of the above"
	],
	correct: "(B)"
	},
	// Q16
	{
	q: "Let the given numbers \\(11001\\), \\(1001\\) and \\(111001\\) correspond to the \\(2\\)'s complement representation. Then, with which one of the following decimal numbers, the given numbers match?",
	options: [
	"(A). \\(-7,-7,-7\\)",
	"(B). \\(-15,-7,-7\\)",
	"(C). \\(-7,-15,-7\\)",
	"(D). \\(-7,-7,-15\\)"
	],
	correct: "(A)"
	},
	// Q17
	{
	q: `Dynamic RAM (DRAM) stores each bit of data in a separate capacitor. Due to leakage, the stored charge tends to dissipate over time and needs to be refreshed periodically. Consider the following statements: <br>P. DRAM requires refreshing because it uses capacitors to store bits. <br>Q. SRAM does not require refreshing because it uses flip-flops instead of capacitors. <br>R. DRAM is faster than SRAM because it needs less frequent access. <br>S. DRAM is more suitable for main memory than SRAM due to its density.`,
	options: [
	"(A). All statements \\(P,Q,R\\) and \\(S\\) are true",
	"(B). Only \\(P\\) and \\(Q\\) are true; \\(R\\) is false and \\(S\\) is irrelevant",
	"(C). \\(P\\) and \\(S\\) are true; \\(Q\\) and \\(R\\) are false",
	"(D). \\(P,Q\\) and \\(S\\) are true; \\(R\\) is false"
	],
	correct: "(D)"
	},
	// Q18
	{
	q: `Consider a system running under two types of workloads:<br> (a) \\(CPU\\)-intensive jobs, <br> (b) \\(I/O\\)-intensive jobs. <br>Which of the following statements about the relative performance of Interrupt-driven I/O and Programmed I/O is correct?`,
	options: [
	"(A). Interrupt-driven I/O performs better for CPU-intensive jobs by freeing the CPU, while programmed I/O performs better for I/O-intensive jobs due to tighter control",
	"(B). Interrupt-driven I/O performs better in both CPU-intensive and I/O-intensive workloads because it always reduces CPU involvement",
	"(C). Programmed I/O performs better for CPU-intensive jobs, while interrupt-driven I/O performs better for I/O-intensive jobs",
	"(D). Programmed I/O performs better in both CPU-intensive and I/O-intensive workloads because it gives the CPU full control"
	],
	correct: "(A)"
	},
	// Q19
	{
	q: "Consider the Boolean function in a CPU control unit: \\(Y=(A+B\\cdot C)\\cdot(\\bar{A}\\cdot B+C)\\)",
	options: [
	"(A). \\(A\\cdot B+C\\)",
	"(B). \\(A\\cdot C+\\bar{A}\\cdot B+B\\cdot\\bar{C}\\)",
	"(C). \\(A\\cdot C+B\\cdot\\bar{C}\\)",
	"(D). \\(A\\cdot C+\\bar{A}\\cdot B\\cdot\\bar{C}\\)"
	],
	correct: "(D)"
	},
	// Q20
	{
	q: `Given an unsigned \\(32\\)-bit integer \\(x\\), which of the following \\(C/C++\\) expressions correctly toggles \\(m\\) bits starting from position \\(p\\) (with the least significant bit at position \\(0\\))?
		<br><b>Assume:</b><br>
		x is the input integer; p is the starting position of the bit range (0-based, LSB at position 0); m is the number of bits to toggle; and No overflow or invalid input conditions occur. <br>
		Which of the following correctly toggles m bits of x starting from position p?`,
	options: [
	"(A). \\( x \\ \\& \\ \\sim(((1 \\ll m)-1) \\ll p) \\)",
	"(B). \\( x^{((1 \\ll m) \\ll p)} \\)",
	"(C). \\( x^{(((1 \\ll m)-1) \\ll p)} \\)",
	"(D). \\( x|((1 \\ll m) \\ll p) \\)"
	],
	correct: "(C)"
	}
 ]
};
