//#1
//console.log("HELLO WORLD")


// //#2
// 
// var total = function (arr) {
// 	var num = 0;
// 	for (var i = 2; i < arr.length; i++) {
// 	num += num(arr[i])
// 	}
// 	return num
// }
// 	console.log(total(process.argv))

//#3
//read a file, print number of new lines (\n) to the console.log
// Write a program that uses a single synchronous filesystem operation to  
//   read a file and print the number of newlines (\n) it contains to the  
//   console (stdout), similar to running cat file | wc -l.  
   
//   The full path to the file to read will be provided as the first  
//   command-line argument (i.e., process.argv[2]). You do not need to make  
//   your own test file.  

// var fs = require ('fs')
// //declare source file
// var source = process.argv[2]//ex. notes.md to read
// //declare target file's name
// // var final = process.argv[3]//ex. notes2.md write a copy then add \n to all lines
// //
// var copySource = fs.readFileSync(source, 'utf-8')
// // console.log('final ', final)
// // console.log('copysource ', copySource)

// // fs.writeFileSync(final,copySource)

// // var str = buf.toString(copySource)
// var last = copySource.split("\n")
// console.log(last.length-1)

//#4 LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 // ## MY FIRST ASYNC I/O! (Exercise 4 of 13)  
   
 //  Write a program that uses a single asynchronous filesystem operation to  
 //  read a file and print the number of newlines it contains to the console  
 //  (stdout), similar to running cat file | wc -l.  
   
 //  The full path to the file to read will be provided as the first  
 //  command-line argument.  
   
 // ─────────────────────────────────────────────────────────────────────────────  
   
 // # HINTS  
   
 //  The solution to this problem is almost the same as the previous problem  
 //  except you must now do it the Node.js way: asynchronous.  
   
 //  Instead of fs.readFileSync() you will want to use fs.readFile() and  
 //  instead of using the return value of this method you need to collect the  
 //  value from a callback function that you pass in as the second argument. To  
 //  learn more about callbacks, check out:  
 //  (https://github.com/maxogden/art-of-node#callbacks).  
   
 //  Remember that idiomatic Node.js callbacks normally have the signature:  
   
 //     function callback (err, data) { /* ... */ }  
   
 //  so you can check if an error occurred by checking whether the first  
 //  argument is truthy. If there is no error, you should have your Buffer  
 //  object as the second argument. As with readFileSync(), you can supply  
 //  'utf8' as the second argument and put the callback as the third argument  
 //  and you will get a String instead of a Buffer.  
   
 //  Documentation on the fs module can be found by pointing your browser here:  
//  //  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html  
// var fs = require ('fs')
// //declare source file
// var source = process.argv[2]//ex. notes.md to read
// //declare target file's name
// // var final = process.argv[3]//ex. notes2.md write a copy then add \n to all lines
// var last;
// var copySource = fs.readFile(source, 'utf-8', function (err, data) {
// 	if(err){
// 		console.log('err?', err)
// 	}

// 	var lineSplit = (data.split("\n"))
// 	//console.log(lineSplit)
// 	console.log(lineSplit.length-1)
// })


//#5

// var fs = require('fs')

// //declare source file
// var source = process.argv[2]//ex. list  of files
// var fileExt = '.'+process.argv[3]//ex. file extension to search for 
// // var fileExt = `"." + ${search}`
// console.log(fileExt)

// var final = fs.readdir(source, 'utf-8', function (err, list) {
// 	if(err){
// 		console.log('err?', err)
// 	}
// 	for (var i = 0; i < list.length; i++) {
// 		if (`${source}.extname(list[i]) === fileExt && fileExt.length<1`) {
// 			return list[i]
// 		}	
// 		console.log(fileExt)
// 	}
// })

// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         	if (path.extname(file) === ext) {
// 	          console.log(file)
// 	        }
//       })
// })



//#6


