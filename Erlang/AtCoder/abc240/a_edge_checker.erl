-module(a_edge_checker).
-export([main/0]).

% AとBの絶対値を計算し、値が1か9ならYesを返し、そうでないならNoを返す
a_edge_checker(A, B) ->
  case (abs (A - B)) of
    1 -> "Yes";
    9 -> "Yes";
    _ -> "No"
  end.

main() ->
  io:format("~p ~n", [a_edge_checker(1, 10) =:= "Yes"]),
  io:format("~p ~n", [a_edge_checker(5, 4) =:= "Yes"]),
  io:format("~p ~n", [a_edge_checker(5, 1) =:= "No"]).
