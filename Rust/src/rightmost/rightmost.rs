pub fn right_most(input: &str) -> i8 {
    let mut result: i8 = -1;

    for (i, c) in input.chars().enumerate() {
        if c == 'a' {
            result = i as i8 + 1;
        }
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test() {
        assert_eq!(right_most("abcdaxayz"), 7);
        assert_eq!(right_most("bcbbbz"), -1);
        assert_eq!(right_most("aaaaa"), 5);
    }
}
