-module(a_infinite_coins).
-export([main/0]).

infinite_coins(N, A) ->
  Amari = N / 500,

  case Amari =< A of
    true -> "Yes";
    false -> "No"
  end.

main() ->
  io:format("~p ~n", [infinite_coins(2018, 218) =:= "Yes"]),
  io:format("~p ~n", [infinite_coins(2763, 0) =:= "No"]),
  io:format("~p ~n", [infinite_coins(37, 514) =:= "Yes"]).
