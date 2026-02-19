const board = [
/* row 0 */
[
{color:"blank",number:0,coordinate:[0,0]},
{color:"blank",number:0,coordinate:[0,1]},
{color:"blank",number:0,coordinate:[0,2]},
{color:"blank",number:0,coordinate:[0,3]},
{color:"blank",number:0,coordinate:[0,4]},
{color:"gray",number:11,coordinate:[0,5]},
{color:"red",number:22,coordinate:[0,6]},
{color:"blue",number:45,coordinate:[0,7]},
{color:"yellow",number:58,coordinate:[0,8]},
{color:"white",number:43,coordinate:[0,9]},
{color:"blue",number:20,coordinate:[0,10]},
{color:"gray",number:10,coordinate:[0,11]},
{color:"blank",number:0,coordinate:[0,12]}
],

/* row 1 */
[
{color:"blank",number:0,coordinate:[1,0]},
{color:"white",number:1,coordinate:[1,1]},
{color:"blue",number:15,coordinate:[1,2]},
{color:"purple",number:34,coordinate:[1,3]},
{color:"yellow",number:52,coordinate:[1,4]},
{color:"white",number:74,coordinate:[1,5]},
{color:"red",number:81,coordinate:[1,6]},
{color:"yellow",number:72,coordinate:[1,7]},
{color:"green",number:50,coordinate:[1,8]},
{color:"red",number:32,coordinate:[1,9]},
{color:"yellow",number:14,coordinate:[1,10]},
{color:"white",number:2,coordinate:[1,11]},
{color:"blank",number:0,coordinate:[1,12]}
],

/* row 2 */
[
{color:"blank",number:0,coordinate:[2,0]},
{color:"white",number:13,coordinate:[2,1]},
{color:"yellow",number:36,coordinate:[2,2]},
{color:"green",number:66,coordinate:[2,3]},
{color:"white",number:85,coordinate:[2,4]},
{color:"green",number:94,coordinate:[2,5]},
{color:"white",number:111,coordinate:[2,6]},
{color:"purple",number:89,coordinate:[2,7]},
{color:"white",number:81,coordinate:[2,8]},
{color:"yellow",number:67,coordinate:[2,9]},
{color:"blue",number:39,coordinate:[2,10]},
{color:"purple",number:16,coordinate:[2,11]},
{color:"blank",number:0,coordinate:[2,12]}
],

/* row 3 */
[
{color:"blank",number:0,coordinate:[3,0]},
{color:"gray",number:12,coordinate:[3,1]},
{color:"red",number:29,coordinate:[3,2]},
{color:"white",number:61,coordinate:[3,3]},
{color:"yellow",number:100,coordinate:[3,4]},
{color:"red",number:103,coordinate:[3,5]},
{color:"purple",number:119,coordinate:[3,6]},
{color:"blue",number:128,coordinate:[3,7]},
{color:"green",number:117,coordinate:[3,8]},
{color:"blue",number:104,coordinate:[3,9]},
{color:"white",number:98,coordinate:[3,10]},
{color:"green",number:63,coordinate:[3,11]},
{color:"yellow",number:31,coordinate:[3,12]}
],

/* row 4 */
[
{color:"blank",number:0,coordinate:[4,0]},
{color:"yellow",number:23,coordinate:[4,1]},
{color:"blue",number:51,coordinate:[4,2]},
{color:"purple",number:83,coordinate:[4,3]},
{color:"red",number:105,coordinate:[4,4]},
{color:"blue",number:123,coordinate:[4,5]},
{color:"red",number:131,coordinate:[4,6]},
{color:"green",number:140,coordinate:[4,7]},
{color:"purple",number:129,coordinate:[4,8]},
{color:"green",number:121,coordinate:[4,9]},
{color:"red",number:101,coordinate:[4,10]},
{color:"purple",number:84,coordinate:[4,11]},
{color:"white",number:21,coordinate:[4,12]}
],

/* row 5 */
[
{color:"gray",number:41,coordinate:[5,0]},
{color:"red",number:75,coordinate:[5,1]},
{color:"white",number:95,coordinate:[5,2]},
{color:"blue",number:118,coordinate:[5,3]},
{color:"purple",number:134,coordinate:[5,4]},
{color:"green",number:141,coordinate:[5,5]},
{color:"purple",number:146,coordinate:[5,6]},
{color:"blue",number:142,coordinate:[5,7]},
{color:"purple",number:130,coordinate:[5,8]},
{color:"blue",number:120,coordinate:[5,9]},
{color:"white",number:93,coordinate:[5,10]},
{color:"red",number:69,coordinate:[5,11]},
{color:"yellow",number:42,coordinate:[5,12]}
],

/* row 6 */
[
{color:"yellow",number:60,coordinate:[6,0]},
{color:"white",number:78,coordinate:[6,1]},
{color:"yellow",number:109,coordinate:[6,2]},
{color:"red",number:125,coordinate:[6,3]},
{color:"green",number:137,coordinate:[6,4]},
{color:"blue",number:148,coordinate:[6,5]},
{color:"goal",number:1000,coordinate:[6,6]},
{color:"red",number:147,coordinate:[6,7]},
{color:"blue",number:139,coordinate:[6,8]},
{color:"green",number:126,coordinate:[6,9]},
{color:"yellow",number:112,coordinate:[6,10]},
{color:"white",number:80,coordinate:[6,11]},
{color:"blue",number:59,coordinate:[6,12]}
],

/* row 7 */
[
{color:"purple",number:46,coordinate:[7,0]},
{color:"yellow",number:76,coordinate:[7,1]},
{color:"blue",number:90,coordinate:[7,2]},
{color:"green",number:115,coordinate:[7,3]},
{color:"purple",number:136,coordinate:[7,4]},
{color:"red",number:143,coordinate:[7,5]},
{color:"green",number:145,coordinate:[7,6]},
{color:"purple",number:144,coordinate:[7,7]},
{color:"green",number:133,coordinate:[7,8]},
{color:"red",number:113,coordinate:[7,9]},
{color:"white",number:92,coordinate:[7,10]},
{color:"purple",number:73,coordinate:[7,11]},
{color:"white",number:48,coordinate:[7,12]}
],

/* row 8 */
[
{color:"white",number:24,coordinate:[8,0]},
{color:"green",number:56,coordinate:[8,1]},
{color:"white",number:87,coordinate:[8,2]},
{color:"purple",number:108,coordinate:[8,3]},
{color:"red",number:124,coordinate:[8,4]},
{color:"blue",number:132,coordinate:[8,5]},
{color:"red",number:138,coordinate:[8,6]},
{color:"green",number:135,coordinate:[8,7]},
{color:"blue",number:122,coordinate:[8,8]},
{color:"purple",number:102,coordinate:[8,9]},
{color:"green",number:88,coordinate:[8,10]},
{color:"yellow",number:55,coordinate:[8,11]},
{color:"red",number:26,coordinate:[8,12]}
],

/* row 9 */
[
{color:"gray",number:5,coordinate:[9,0]},
{color:"yellow",number:33,coordinate:[9,1]},
{color:"purple",number:64,coordinate:[9,2]},
{color:"white",number:97,coordinate:[9,3]},
{color:"green",number:106,coordinate:[9,4]},
{color:"purple",number:114,coordinate:[9,5]},
{color:"blue",number:127,coordinate:[9,6]},
{color:"red",number:116,coordinate:[9,7]},
{color:"purple",number:107,coordinate:[9,8]},
{color:"yellow",number:99,coordinate:[9,9]},
{color:"white",number:65,coordinate:[9,10]},
{color:"blue",number:30,coordinate:[9,11]},
{color:"gray",number:8,coordinate:[9,12]}
],

/* row 10 */
[
{color:"blank",number:0,coordinate:[10,0]},
{color:"white",number:17,coordinate:[10,1]},
{color:"yellow",number:37,coordinate:[10,2]},
{color:"green",number:62,coordinate:[10,3]},
{color:"yellow",number:82,coordinate:[10,4]},
{color:"blue",number:91,coordinate:[10,5]},
{color:"white",number:110,coordinate:[10,6]},
{color:"purple",number:96,coordinate:[10,7]},
{color:"yellow",number:86,coordinate:[10,8]},
{color:"white",number:68,coordinate:[10,9]},
{color:"red",number:38,coordinate:[10,10]},
{color:"yellow",number:15,coordinate:[10,11]},
{color:"blank",number:0,coordinate:[10,12]}
],

/* row 11 */
[
{color:"blank",number:0,coordinate:[11,0]},
{color:"white",number:4,coordinate:[11,1]},
{color:"blue",number:19,coordinate:[11,2]},
{color:"white",number:35,coordinate:[11,3]},
{color:"red",number:54,coordinate:[11,4]},
{color:"yellow",number:77,coordinate:[11,5]},
{color:"green",number:79,coordinate:[11,6]},
{color:"red",number:71,coordinate:[11,7]},
{color:"blue",number:53,coordinate:[11,8]},
{color:"green",number:25,coordinate:[11,9]},
{color:"purple",number:18,coordinate:[11,10]},
{color:"white",number:3,coordinate:[11,11]},
{color:"blank",number:0,coordinate:[11,12]}
],

/* row 12 */
[
{color:"blank",number:0,coordinate:[12,0]},
{color:"blank",number:0,coordinate:[12,1]},
{color:"blank",number:0,coordinate:[12,2]},
{color:"blank",number:0,coordinate:[12,3]},
{color:"blank",number:0,coordinate:[12,4]},
{color:"gray",number:6,coordinate:[12,5]},
{color:"yellow",number:28,coordinate:[12,6]},
{color:"white",number:44,coordinate:[12,7]},
{color:"purple",number:57,coordinate:[12,8]},
{color:"white",number:47,coordinate:[12,9]},
{color:"yellow",number:27,coordinate:[12,10]},
{color:"gray",number:7,coordinate:[12,11]},
{color:"blank",number:0,coordinate:[12,12]}
]
];
