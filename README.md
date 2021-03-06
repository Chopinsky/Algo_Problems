# LeetCode Problems

This repository contains a collection of solutions to some interesting `LeetCode` problems. The solutions are written in `Go` and you can check the results by running the corresponding problem.

## Run Go Problems

At the project root, run the following command

```go
$ go run . -n=<problem_number>
```

## How to run a JavaScript specific problem

Download the repository and enter the folder, then at your command-line tool execute:

```node
$ node ./js-problems/main.js $1 $2
```

- The `$1` parameter is optional, if specified, it will run the solution with the same name of the problem folder. By default we will run the "FreqStack" solution.
- The `$2` parameter is optional, it can be `-d` or `--debug`, if specified, it will run the debug mode for the solution.
