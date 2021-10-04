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