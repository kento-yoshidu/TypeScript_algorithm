-module(a_apple_pie).
-export([main/0]).

apple_pie(A, P) ->
  floor((A * 3 + P) / 2).

main() ->
  io:format("~p ~n", [apple_pie(1, 3) =:= 3]),
  io:format("~p ~n", [apple_pie(0, 1) =:= 0]),
  io:format("~p ~n", [apple_pie(32, 21) =:= 58]).
