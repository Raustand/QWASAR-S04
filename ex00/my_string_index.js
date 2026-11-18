
/*
**
** QWASAR.IO -- my_string_index
**
**
** @param {String} param_1
** @param {Character} param_2
** @return {integer}
**
*/


function my_string_index(haystack, needle) {
    var index = 0;

    while (index < haystack.length) {
        if(haystack[index] == needle) {
            return index;
        }
        index += 1;
    }
    return -1;

};
//console.log(my_string_index("aaaaa", "b"));