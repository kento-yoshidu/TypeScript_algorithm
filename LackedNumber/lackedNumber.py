def lackedNumber(S):
    for i in range(10):
        if str(i) not in S:
            return i