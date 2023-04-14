-module(a_plus_minus_x).
-import(lists,[max/1]).
-export([main/0]).

a_plus_minus_x(A, B) ->
  max([A + B, A - B, A * B]).

main() ->
  io:format("~p ~n", [a_plus_minus_x(-13, 3) =:= -10]),
  io:format("~p ~n", [a_plus_minus_x(1, -33) =:= 34]),
  io:format("~p ~n", [a_plus_minus_x(13, 3) =:= 39]).
