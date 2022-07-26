fn func(m: i32, n: i32) -> i32 {
    if n == 0 {
        return m;
    } else {
        return func(n, m % n);
    }
}

fn main() {
    let result = func(10, 5);

    println!("{}", result);
}
