from moveRight import moveRight

import unittest

class MyTest(unittest.TestCase):
    def test_main(self):
        self.assertEqual("0101", moveRight("1011"))

if __name__ == "__main__":
    unittest.main()
