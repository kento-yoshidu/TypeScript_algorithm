def jog(seconds, speed, rest, X):
    time = 0
    distance = 0

    while True:
        for i in range(seconds):
            distance += speed
            time += 1
            if time == X:
                return distance
        
        for i in range(rest):
            time += 1
            if time == X:
                return distance

def jogging(input):
    [tSeconds, tSpeed, tRest, aSeconds, aSpeed, aRest, X] = [int(s) for s in input.split(" ")]

    takahashi = jog(tSeconds, tSpeed, tRest, X)
    aoki = jog(aSeconds, aSpeed, aRest, X)

    if takahashi > aoki:
        return "Takahashi"
    elif takahashi < aoki:
        return "Aoki"
    else:
        return "Draw"
