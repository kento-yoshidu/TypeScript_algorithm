def souwa(num, total)
  (num != 0) ? souwa(num -1, num + total) : total
end

puts(souwa(5, 0))