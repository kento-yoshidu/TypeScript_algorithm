pub fn run(r: u8, g: u8, b: u8) -> String {
    let temp = r * 100 + g * 10 + b;

    if temp % 4 == 0 {
        String::from("Yes")
    } else {
        String::from("No")
    }
}
