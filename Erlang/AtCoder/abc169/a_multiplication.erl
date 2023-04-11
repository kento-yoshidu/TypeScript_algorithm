-module(a_multiplication).
-export([main/0]).

a_multiplication(A, B) ->
  A * B.

main() ->
  io:format("~p ~n", [a_multiplication(2, 5) =:= 10]),
  io:format("~p ~n", [a_multiplication(100, 100) =:= 10000]).
