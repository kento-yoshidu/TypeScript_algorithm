-module(a_we_love_golf).
-export([main/0]).

main() ->
  Lis = [apple,banana,candy],
	Fun = fun(M)-> io:format("[~p]~n",[M]) end,
	lists:foreach(Fun,Lis).
