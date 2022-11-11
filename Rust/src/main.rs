mod intersection;
mod euclidean_algorithm;
mod rightmost;

fn main() {
    println!("{}", intersection::intersection::run(0, 3, 1, 5));
    println!("{}", euclidean_algorithm::euclidean_algorithm::run(20, 10));
}
