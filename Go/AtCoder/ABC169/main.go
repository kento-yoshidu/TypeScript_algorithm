package main

import (
  "fmt"
  "./hello"
)

func main() {
  s := hello.GetHello("山澤さん")
  fmt.Println(s)
}
