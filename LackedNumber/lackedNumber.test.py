import unittest

from lackedNumber import lackedNumber

class MyTest(unittest.TestCase):
    def test_main(self):
      a = 6
      self.assertEqual(a, lackedNumber("012345789"))
    
    def test_second(self):
      a = 0
      self.assertEqual(a, lackedNumber("123456789"))

if __name__ == "__main__":
  unittest.main()
