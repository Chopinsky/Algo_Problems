package shared

import "fmt"

// DEBUG ...
var DEBUG = false

// Dirs ...
var Dirs = []int{-1, 0, 1, 0, -1}

// Problem ...
type Problem interface {
	Solve()
}

// Print ...
func Print(num int, res, calc interface{}) {
	fmt.Println("\n >> Solving Problem #", num+1, "<<")
	fmt.Println("Caculation: ", calc)
	fmt.Println("Expecting:  ", res)
	fmt.Println()
}

// SetDebug ...
func SetDebug(val bool) {
	DEBUG = val
}

// DebugMode ...
func DebugMode() bool {
	return DEBUG
}
