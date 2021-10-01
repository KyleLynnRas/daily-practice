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

single_number [1]