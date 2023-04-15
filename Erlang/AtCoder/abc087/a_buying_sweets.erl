-module(a_buying_sweets).
-export([main/0]).

buying_sweets(X, A, B) ->
  Amari = X - A,
  Count = floor(Amari / B),
  Amari - Count * B.

main() ->
  io:format("~p ~n", [buying_sweets(1234, 150, 100) =:= 84]),
  io:format("~p ~n", [buying_sweets(1000, 108, 108) =:= 28]),
  io:format("~p ~n", [buying_sweets(579, 123, 456) =:= 0]),
  io:format("~p ~n", [buying_sweets(7477, 549, 593) =:= 405]).
