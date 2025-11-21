// https://school.programmers.co.kr/learn/courses/30/lessons/43165?gad_source=1&gad_campaignid=22799790467&gbraid=0AAAAAC_c4nDFyu5gqzLtbJkjXlv4ADdL4&gclid=Cj0KCQjwgpzIBhCOARIsABZm7vHol_iwvh4aqLZEpy_hbaiZQlhpIf4nf6eMeD3903o_Ut9asTuBMXYaAgc7EALw_wcB

function solution(numbers, target) {
    let count = 0;

    function backtrack(index, sum){
        if(index === numbers.length){
            if(sum === target) count++;
            return;
        }

        backtrack(index + 1, sum + numbers[index]);
        backtrack(index + 1, sum - numbers[index]);
    }

    backtrack(0, 0);
    return count;
}