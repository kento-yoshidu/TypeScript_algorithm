import unittest

from jogging import jogging

class MyTest(unittest.TestCase):
    def test_main(self):
        self.assertEqual("Takahashi", jogging("4 3 3 6 2 5 10"))
        self.assertEqual("Aoki", jogging("3 1 4 1 5 9 2")),
        self.assertEqual("Draw", jogging("1 1 1 1 1 1 1"))

if __name__ == "__main__":
    unittest.main()

