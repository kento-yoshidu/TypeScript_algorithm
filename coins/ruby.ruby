def coins(coin1, coin2, coin3, x)
  count = 0
  roopCount = 0

  (0..coin1).each {|a|
    (0..coin2).each {|b|
      (0..coin3).each {|c|
        roopCount += 1
        (x == (500*a + 100*b + 50*c)) && count += 1
      }
    }
  }

  puts count 
  puts roopCount
end

coins(1, 5, 10, 500)
