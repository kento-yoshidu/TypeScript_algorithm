-module(a_ferris_wheel).
-export([main/0]).

ferris_wheel(A, B) when A >= 13 ->
  B;
ferris_wheel(A, B) when A >= 6 ->
  B / 2;
ferris_wheel(A, B) ->
  0.


main() ->
  io:format("~p ~n", [ferris_wheel(30, 100) =:= 100]),
  io:format("~p ~n", [ferris_wheel(12, 100) =:= 50.0]),
  io:format("~p ~n", [ferris_wheel(0, 100) =:= 0]).