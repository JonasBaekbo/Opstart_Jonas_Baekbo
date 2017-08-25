var tal = [10, 34, 77, 12, 51, 352, 6, 1, 64, 23];
tal.forEach(function (item, index, arr) {
    if (arr[++index] < item) {
        console.log(tal[index] + ' er mindre end ' + item);
    } else if (index == arr.length) {
        console.log(item + ' er det sidste tal i rækken');
    }
    else {
        console.log(tal[index] + ' er større end ' + item);
    }
    item[index];
});