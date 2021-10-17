#https://leetcode.com/problems/remove-element/

def remove_a nums, val
  for i in 0..nums.length do
    if nums[i] == val 
      nums.delete_at(i)
    end
  end
  p nums.count
end

# remove_a([3,2,2,3], 3)

#//https://leetcode.com/problems/single-number/

def single_number nums
  nums.sort!
  answer = 0
  for i in 0..nums.length 
    if i == nums.length - 1
      answer = nums[i]
    elsif nums[i] == nums[i + 1]
      i += 2
    else 
      answer = nums[i]
    end
  end
 p answer
end 

# single_number [1]

#https://leetcode.com/problems/palindrome-number/

def isPalindrome x
  answer = true
  str_x = x.to_s
  if str_x != str_x.reverse 
    answer = false
  end
  p answer
end

# isPalindrome 21

#https://leetcode.com/problems/length-of-last-word/

def last_word s 
  sArr = s.split(" ")
  answer = 0
  answerArr = sArr.filter{|sA| sA != ""}
  answer = answerArr[answerArr.length - 1].length
  p answer
end

# p last_word "   fly me   to   the moon  "

#https://leetcode.com/problems/sqrtx/

def my_sqrt x
	answer = Math.sqrt(x)
  answer = answer.floor
	p answer
end

# my_sqrt(8)

#https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

def smallestIntegerFinder args
  answer = args.min()
  answer
end

# p smallestIntegerFinder([34, -345, -1, 100])

#https://www.codewars.com/kata/58649884a1659ed6cb000072/train/ruby

def update_light(current)
  if current == "red" 
    "green"
  elsif current == "yellow"
    "red"
  elsif current == "green"
    "yellow"
  end
end

# p update_light("red")

#https://www.codewars.com/kata/583710ccaa6717322c000105/train/ruby

def simple_multiplication(number)
  if number.even? == true
   number * 8
  else
    number * 9
  end
end

# p simple_multiplication 2

#https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/ruby

def flatten_and_sort(array)
  sorted = array.flatten
  sorted.sort
end

# p flatten_and_sort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])

#https://www.codewars.com/kata/5601409514fc93442500010b/train/ruby

def better_than_average(arr, points)
  avg = arr.sum / arr.length
  if points > avg
    true
  else 
    false
  end
end

# p better_than_average([1,2,3], 4)

#https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/ruby

def freqSeq(str, sep)
  strArr = str.split("")
  tally_hash = strArr.tally
  # p tally_hash[strArr[0]]
  answerArr = []
  for i in 0...strArr.length do
    val = tally_hash[strArr[i]]
    answerArr.push(val)
  end
  answerArr.join("#{sep}")
end

# p freqSeq("hello world", "-")