const students = ["kunal","rahul","sejal","piyush","yash"]

for(const school of students){
        console.log(`hello ${school}`)
}
 
// finding largest number from the given Array
const marks = [88,74,44,124,541]

let larg = marks[0]
for(let i=1; i<marks.length;i++)
{
    if(marks[i]>larg){
        larg=marks[i]
    }
   
}
console.log(larg)
