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
    println!("{}", atcoder::abc125::a_biscuit_generator::run(3, 5, 7));
    println!("{}", atcoder::abc125::a_biscuit_generator::run(3, 2, 9));
    println!("{}", atcoder::abc125::a_biscuit_generator::run(20, 20, 19));
}
