pub fn run(a: i8, b: i8, c: i8, d: i8) -> &'static str {
    let mut t_hp = a;
    let t_at = b;
    let mut a_hp = c;
    let a_at = d;

    let mut result = "";

    while t_hp >= 0 && a_hp >= 0 {
        println!("{}, {}", t_hp, a_hp);
        a_hp = a_hp - t_at;

        if a_hp <= 0 {
            result = "Yes";
            break;
        }

        t_hp = t_hp - a_at;

        if t_hp <= 0 {
            result = "No";
            break;
        }

    };

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test() {
        assert_eq!("No", run(10, 9, 10, 10));
        assert_eq!("Yes", run(46, 4, 40, 5));
    }
}
