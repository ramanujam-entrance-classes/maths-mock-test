window.SET_DATA = {
  title: "Computer Mock Test 2",
  questions: [
	// Q1
	{
	q: "Assuming all numbers are in \\(2's\\) complement representation, which of the following numbers is divisible by \\(11111011\\)?",
	options: [
	"(A). \\(11100100\\)",
	"(B). \\(11010111\\)",
	"(C). \\(11011011\\)",
	"(D). None of the above"
	],
	correct: "(A)"
	},
	// Q2
	{
	q: "A switching circuit that produces one in a set of input bits an output based on the control value of control bits is termed as",
	options: [
	"(A). full adder",
	"(B). inverter",
	"(C). multiplexer",
	"(D). converter"
	],
	correct: "(C)"
	},
	// Q3
	{
	q: "A computer with a \\(32\\) bit word size uses \\(2\\)'s complement to represent numbers. The range of integers that can be represented by this computer is",
	options: [
	"(A). \\(-2^{32}\\) to \\(2^{32}\\)",
	"(B). \\(-2^{31}\\) to \\(2^{32}\\)",
	"(C). \\(-2^{31}\\) to \\(2^{32}-1\\)",
	"(D). \\(-2^{32}\\) to \\(2^{31}\\)"
	],
	correct: "(C)"
	},
	// Q4
	{
	q: "To change upper case to the lower case letter in ASCII, correct mask and operation should be",
	options: [
	"(A). \\(0100000\\) and NOR",
	"(B). \\(0100000\\) and NAND",
	"(C). \\(0100000\\) and OR",
	"(D). None of the above"
	],
	correct: "(C)"
	},
	// Q5
	{
	q: "Why is the width of a data bus so important to the processing speed of a computer?",
	options: [
	"(A). The narrower it is, the greater the computer's processing speed.",
	"(B). The wider it is, the more data can fit into the main memory.",
	"(C). The wider it is, the greater the computer's processing speed.",
	"(D). The wider it is, the slower the computer's processing speed."
	],
	correct: "(B)"
	},
	// Q6
	{
	q: "The ASCII code of \\(A\\) is",
	options: [
	"(A). \\(66D\\)",
	"(B). \\(41H\\)",
	"(C). \\(01000010\\)",
	"(D). \\(01100011\\)"
	],
	correct: "(B)"
	},
	// Q7
	{
	q: "An eight bit byte is capable of representing how many different characters?",
	options: [
	"(A). \\(64\\)",
	"(B). \\(128\\)",
	"(C). \\(256\\)",
	"(D). \\(512\\)"
	],
	correct: "(C)"
	},
	// Q8
	{
	q: "The least significant bit of the binary number, which is equivalent to any odd decimal number is",
	options: [
	"(A). \\(0\\)",
	"(B). \\(1\\)",
	"(C). \\(1\\) or \\(0\\)",
	"(D). All of these"
	],
	correct: "(B)"
	},
	// Q9
	{
	q: `Which of the following Boolean expression represents the shaded portion of the Venn diagram? Here, '.' represents an AND operation and '+' denotes an OR operation.
		<br> <img src="images/computer_mocktest2_q9.png" alt="Question 9 Diagram" style="max-width:100%; height:auto; display:block; margin:auto;">`,
	options: [
	"(A). \\(Z' + (X.Y)\\)",
	"(B). \\(Z.(X + Y)\\)",
	"(C). \\((Z.X') + Y\\)",
	"(D). \\(Z'.(X + Y)\\)"
	],
	correct: "(B)"
	},
	// Q10
	{
	q: "Consider \\(x\\) and \\(y\\) be some Boolean variables, '+' denotes the OR operation and '.' denotes the AND operation. What will be the simplified form of the Boolean expression \\(x.(x + y)\\)?",
	options: [
	"(A). \\(y\\)",
	"(B). \\(1\\)",
	"(C). \\(0\\)",
	"(D). \\(x\\)"
	],
	correct: "(D)"
	},
	// Q11
	{
	q: "Which one of the following is not a valid rule of Boolean algebra?",
	options: [
	"(A). \\(A + 1 = 1\\)",
	"(B). \\(A = A'\\)",
	"(C). \\(AA = A\\)",
	"(D). \\(A + 0 = A\\)"
	],
	correct: "(B)"
	},
	// Q12
	{
	q: "When two binary numbers are added, then an overflow will never occur, if",
	options: [
	"(A). both numbers of same sign",
	"(B). the carry into the sign bit position and out of sign bit position are not equal",
	"(C). the carry into the sign bit position and out of sign bit position are equal",
	"(D). the carry into the sign bit position is \\(1\\)"
	],
	correct: "(D)"
	},
	// Q13
	{
	q: "The sum of \\(11010 + 01111\\) equals to",
	options: [
	"(A). \\(101001\\)",
	"(B). \\(101010\\)",
	"(C). \\(110101\\)",
	"(D). \\(101000\\)"
	],
	correct: "(A)"
	},
	// Q14
	{
	q: "Which protocol needs to be installed for Internet access on a network?",
	options: [
	"(A). TCP/IP",
	"(B). TELNET",
	"(C). IPX/SPX",
	"(D). Net BEUI"
	],
	correct: "(A)"
	},
	// Q15
	{
	q: "A petabyte represents approximately",
	options: [
	"(A). \\(1000\\) gigabytes",
	"(B). \\(1000\\) kilobytes",
	"(C). \\(1000\\) terabytes",
	"(D). \\(1000\\) yottabytes"
	],
	correct: "(C)"
	},
	// Q16
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
	// Q17
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
	// Q18
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
	// Q19
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
	// Q20
	{
	q: "What is the equivalent decimal value of the unsigned binary number \\(10101.10101_2\\)?",
	options: [
	"(A). \\(51.125\\)",
	"(B). \\(125.25\\)",
	"(C). \\(25.375\\)",
	"(D). \\(21.65625\\)"
	],
	correct: "(D)"
	}
 ]
};
