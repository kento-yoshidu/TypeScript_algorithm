-module(a_rgb_cards).
-export([main/0]).

rgb_cards(R, G, B) ->
  Rgb = R * 100 + G * 10 + B,
  case Rgb rem 4 of
    0 -> "YES";
    _ -> "NO"
    end.

main() ->
  io:format("~p ~n", [rgb_cards(4, 3, 2) =:= "YES"]),
  io:format("~p ~n", [rgb_cards(2, 3, 4) =:= "NO"]),
  io:format("~p ~n", [rgb_cards(5, 6, 7) =:= "NO"]).
