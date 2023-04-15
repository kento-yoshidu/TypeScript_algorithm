/*
    consider
    abc248_a
*/

/* AtCoder Template
// use proconio::input;

fn main() {
    input! {
        a: i32,
        p: i32
    }
    let all_p = a * 3 +p;
    println!("{}", all_p / 2);
}
*/

mod atcoder;

fn main() {
    println!("Hello World");
    atcoder::abc128::a_apple_pie::run(1, 3);
    atcoder::abc128::a_apple_pie::run(0, 1);
    atcoder::abc128::a_apple_pie::run(32, 21);
}
