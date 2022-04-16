import collections

x = []
y = []

for _ in range(3):
  x_temp, y_temp = [int(x) for x in "1 2 3".split()]
  x.append(x_temp)
  y.append(y_temp)

  x_count = collections.Counter(x)

  print(x_count)
