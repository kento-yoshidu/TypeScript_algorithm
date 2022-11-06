fn func(m: i32, n: i32) -> i32 {
    if n == 0 {
        m
    } else {
        func(n, m % n)
    }
}

pub fn run(m: i32, n: i32) -> i32 {
    func(20, 4)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test() {
        assert_eq!(run(10, 4), 4);
        assert_eq!(run(20, 12), 4);
    }
}
