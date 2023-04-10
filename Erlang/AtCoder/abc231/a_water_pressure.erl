-module(a_water_pressure).
-export([main/0]).

a_water_pressure(D) ->
  D / 100.

main() ->
  io:format("~p ~n", [a_water_pressure(1000) =:= 10.0]),
  io:format("~p ~n", [a_water_pressure(50) =:= 0.5]),
  io:format("~p ~n", [a_water_pressure(3141) =:= 31.41]).
