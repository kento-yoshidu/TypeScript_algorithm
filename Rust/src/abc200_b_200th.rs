pub fn run(input: &str) {
    let v: Vec<&str> = input.split(' ').collect();

    let mut n: i32 = v[0].parse().unwrap();
    let k: i32 = v[1].parse().unwrap();

    for i in 1..=k {
        if n % 200 == 0 {
            n = n / 200;
        } else {

        }
    }

    println!("{}", n);
}
