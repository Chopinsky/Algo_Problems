package challenges

/**
A gene string can be represented by an 8-character long string, with choices from "A", "C", "G", "T".

Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is defined as ONE single character changed in the gene string.

For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation.

Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.

Now, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return -1.

Note:

Starting point is assumed to be valid, so it might not be included in the bank.
If multiple mutations are needed, all mutations during in the sequence must be valid.
You may assume start and end string is not the same.

Example 1:

start: "AACCGGTT"
end:   "AACCGGTA"
bank: ["AACCGGTA"]

return: 1

Example 2:

start: "AACCGGTT"
end:   "AAACGGTA"
bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

return: 2

Example 3:

start: "AAAAACCC"
end:   "AACCCCCC"
bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

return: 3
*/

func minMutation(start string, end string, bank []string) int {
	dict := make(map[string]bool)
	for _, g := range bank {
		dict[g] = true
	}

	if !dict[end] {
		return -1
	}

	stack := make([]string, 0, len(bank))
	tmp := make([]string, 0, len(bank))
	base := []byte{'A', 'C', 'G', 'T'}

	stack = append(stack, start)
	var count int

	for len(stack) > 0 {
		count++

		for _, g := range stack {
			str := []byte(g)

			for i, src := range str {
				for _, rep := range base {
					if src == rep {
						continue
					}

					str[i] = rep
					next := string(str)

					if next == end {
						return count
					}

					if dict[next] {
						tmp = append(tmp, next)
						dict[next] = false
					}
				}

				// reset
				str[i] = src
			}
		}

		stack, tmp = tmp, stack
		tmp = tmp[:0]
	}

	return -1
}
