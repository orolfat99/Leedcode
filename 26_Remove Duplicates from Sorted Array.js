var removeDuplicates = function(nums) {
    
    if (nums.length ===0) return 0;
    let counter=0;
    for (let i=0; i< nums.length;i++){
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        // update the array in place
        nums[counter] = nums[i];
        counter++;
    }
    return counter;
};
