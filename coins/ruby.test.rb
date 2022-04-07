require "minitest/autorun"
require "./ruby.rb"

class Test < Minitest::Test
  def test_sample
    assert_equal 1, coins(1, 0, 0, 500)
    assert_equal 2, coins(1, 5, 0, 500)
    assert_equal 7, coins(1, 5, 10, 500)
  end
end
