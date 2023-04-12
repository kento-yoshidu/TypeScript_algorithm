-module(a_serval_vs_monster).
-export([main/0]).

a_serval_vs_monster(HP, AT) ->
  ceil(HP / AT).

main() ->
  io:format("~p ~n", [a_serval_vs_monster(10, 5) =:= 3]),
  io:format("~p ~n", [a_serval_vs_monster(1, 10000) =:= 1]),
  io:format("~p ~n", [a_serval_vs_monster(10000, 1) =:= 10000]).
