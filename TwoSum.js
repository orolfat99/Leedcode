for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            if (num[j] === target -num[i])
            {
                return [i,j];
            }
        }
    }
