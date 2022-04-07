def coins(coin1, coin2, coin3, x)
  count = 0

  (0..coin1).each {|a|
    (0..coin2).each {|b|
      (0..coin3).each {|c|
        (x == (500*a + 100*b + 50*c)) && count += 1
      }
    }
  }

  return count
end
