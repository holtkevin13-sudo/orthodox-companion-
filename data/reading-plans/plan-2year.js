// Orthodox Study Bible — Two-Year Reading Plan
// 730 days. Odd days = OT only. Even days = Psalms + Proverbs + NT.
// Source: The Orthodox Study Bible (Thomas Nelson)
// OT text: LXX2012 (data/lxx/BOOK.json). NT text: NKJV via API.Bible.

const PLAN_2YEAR = [
  null, // index 0 unused — plan is 1-indexed
  // DAY 1
  {ot:{ref:"Gn 1-3",book:"GEN",ch:1}},
  // DAY 2
  {ps:{ref:"Ps 1; 2",ch:1},pr:{ref:"Pr 1:1-5",ch:1},nt:{ref:"Mt 1",book:"MAT",ch:1}},
  // DAY 3
  {ot:{ref:"Gn 4-7",book:"GEN",ch:4}},
  // DAY 4
  {ps:{ref:"Ps 3; 4",ch:3},pr:{ref:"Pr 1:6-10",ch:1},nt:{ref:"Mt 2",book:"MAT",ch:2}},
  // DAY 5
  {ot:{ref:"Gn 8:1-11:9",book:"GEN",ch:8}},
  // DAY 6
  {ps:{ref:"Ps 5",ch:5},pr:{ref:"Pr 1:11-15",ch:1},nt:{ref:"Mt 3",book:"MAT",ch:3}},
  // DAY 7
  {ot:{ref:"Gn 11:10-15:21",book:"GEN",ch:11}},
  // DAY 8
  {ps:{ref:"Ps 6",ch:6},pr:{ref:"Pr 1:16-19",ch:1},nt:{ref:"Mt 4",book:"MAT",ch:4}},
  // DAY 9
  {ot:{ref:"Gn 16-18",book:"GEN",ch:16}},
  // DAY 10
  {ps:{ref:"Ps 7",ch:7},pr:{ref:"Pr 1:20-24",ch:1},nt:{ref:"Mt 5:1-20",book:"MAT",ch:5}},
  // DAY 11
  {ot:{ref:"Gn 19-21",book:"GEN",ch:19}},
  // DAY 12
  {ps:{ref:"Ps 8",ch:8},pr:{ref:"Pr 1:25-29",ch:1},nt:{ref:"Mt 5:21-48",book:"MAT",ch:5}},
  // DAY 13
  {ot:{ref:"Gn 22-24:49",book:"GEN",ch:22}},
  // DAY 14
  {ps:{ref:"Ps 9:1-17",ch:9},pr:{ref:"Pr 1:30-35",ch:1},nt:{ref:"Mt 6:1-18",book:"MAT",ch:6}},
  // DAY 15
  {ot:{ref:"Gn 24:50-26:35",book:"GEN",ch:24}},
  // DAY 16
  {ps:{ref:"Ps 9:18-39",ch:9},pr:{ref:"Pr 2:1-5",ch:2},nt:{ref:"Mt 6:19-34",book:"MAT",ch:6}},
  // DAY 17
  {ot:{ref:"Gn 27; 28",book:"GEN",ch:27}},
  // DAY 18
  {ps:{ref:"Ps 10; 11",ch:10},pr:{ref:"Pr 2:6-9",ch:2},nt:{ref:"Mt 7",book:"MAT",ch:7}},
  // DAY 19
  {ot:{ref:"Gn 29; 30",book:"GEN",ch:29}},
  // DAY 20
  {ps:{ref:"Ps 12; 13",ch:12},pr:{ref:"Pr 2:10-16",ch:2},nt:{ref:"Mt 8:1-17",book:"MAT",ch:8}},
  // DAY 21
  {ot:{ref:"Gn 31; 32",book:"GEN",ch:31}},
  // DAY 22
  {ps:{ref:"Ps 14; 15",ch:14},pr:{ref:"Pr 2:17-23",ch:2},nt:{ref:"Mt 8:18-34",book:"MAT",ch:8}},
  // DAY 23
  {ot:{ref:"Gn 33-35",book:"GEN",ch:33}},
  // DAY 24
  {ps:{ref:"Ps 16",ch:16},pr:{ref:"Pr 3:1-5",ch:3},nt:{ref:"Mt 9:1-17",book:"MAT",ch:9}},
  // DAY 25
  {ot:{ref:"Gn 36; 37",book:"GEN",ch:36}},
  // DAY 26
  {ps:{ref:"Ps 17:1-17",ch:17},pr:{ref:"Pr 3:6-10",ch:3},nt:{ref:"Mt 9:18-38",book:"MAT",ch:9}},
  // DAY 27
  {ot:{ref:"Gn 38-40",book:"GEN",ch:38}},
  // DAY 28
  {ps:{ref:"Ps 17:18-32",ch:17},pr:{ref:"Pr 3:11-16",ch:3},nt:{ref:"Mt 10:1-23",book:"MAT",ch:10}},
  // DAY 29
  {ot:{ref:"Gn 41; 42",book:"GEN",ch:41}},
  // DAY 30
  {ps:{ref:"Ps 17:33-51",ch:17},pr:{ref:"Pr 3:17-22",ch:3},nt:{ref:"Mt 10:24-42",book:"MAT",ch:10}},
  // DAY 31
  {ot:{ref:"Gn 43-45",book:"GEN",ch:43}},
  // DAY 32
  {ps:{ref:"Ps 18",ch:18},pr:{ref:"Pr 3:23-27",ch:3},nt:{ref:"Mt 11",book:"MAT",ch:11}},
  // DAY 33
  {ot:{ref:"Gn 46-48",book:"GEN",ch:46}},
  // DAY 34
  {ps:{ref:"Ps 19",ch:19},pr:{ref:"Pr 3:28-32",ch:3},nt:{ref:"Mt 12:1-21",book:"MAT",ch:12}},
  // DAY 35
  {ot:{ref:"Gn 49; 50",book:"GEN",ch:49}},
  // DAY 36
  {ps:{ref:"Ps 20",ch:20},pr:{ref:"Pr 3:33-38",ch:3},nt:{ref:"Mt 12:22-50",book:"MAT",ch:12}},
  // DAY 37
  {ot:{ref:"Ex 1-3",book:"EXO",ch:1}},
  // DAY 38
  {ps:{ref:"Ps 21:1-19",ch:21},pr:{ref:"Pr 4:1-8",ch:4},nt:{ref:"Mt 13:1-30",book:"MAT",ch:13}},
  // DAY 39
  {ot:{ref:"Ex 4:1-6:27",book:"EXO",ch:4}},
  // DAY 40
  {ps:{ref:"Ps 21:20-32",ch:21},pr:{ref:"Pr 4:9-12",ch:4},nt:{ref:"Mt 13:31-58",book:"MAT",ch:13}},
  // DAY 41
  {ot:{ref:"Ex 6:28-9:35",book:"EXO",ch:6}},
  // DAY 42
  {ps:{ref:"Ps 22; 23",ch:22},pr:{ref:"Pr 4:13-18",ch:4},nt:{ref:"Mt 14:1-21",book:"MAT",ch:14}},
  // DAY 43
  {ot:{ref:"Ex 10-12",book:"EXO",ch:10}},
  // DAY 44
  {ps:{ref:"Ps 24:1-11",ch:24},pr:{ref:"Pr 4:19-23",ch:4},nt:{ref:"Mt 14:22-36",book:"MAT",ch:14}},
  // DAY 45
  {ot:{ref:"Ex 13-15",book:"EXO",ch:13}},
  // DAY 46
  {ps:{ref:"Ps 24:12-22",ch:24},pr:{ref:"Pr 4:24-28",ch:4},nt:{ref:"Mt 15:1-20",book:"MAT",ch:15}},
  // DAY 47
  {ot:{ref:"Ex 16-18",book:"EXO",ch:16}},
  // DAY 48
  {ps:{ref:"Ps 25",ch:25},pr:{ref:"Pr 5:1-6",ch:5},nt:{ref:"Mt 15:21-39",book:"MAT",ch:15}},
  // DAY 49
  {ot:{ref:"Ex 19-21",book:"EXO",ch:19}},
  // DAY 50
  {ps:{ref:"Ps 26",ch:26},pr:{ref:"Pr 5:7-14",ch:5},nt:{ref:"Mt 16",book:"MAT",ch:16}},
  // DAY 51
  {ot:{ref:"Ex 22-24",book:"EXO",ch:22}},
  // DAY 52
  {ps:{ref:"Ps 27",ch:27},pr:{ref:"Pr 5:15-19",ch:5},nt:{ref:"Mt 17",book:"MAT",ch:17}},
  // DAY 53
  {ot:{ref:"Ex 25-27",book:"EXO",ch:25}},
  // DAY 54
  {ps:{ref:"Ps 28",ch:28},pr:{ref:"Pr 5:20-23",ch:5},nt:{ref:"Mt 18:1-20",book:"MAT",ch:18}},
  // DAY 55
  {ot:{ref:"Ex 28; 29",book:"EXO",ch:28}},
  // DAY 56
  {ps:{ref:"Ps 29",ch:29},pr:{ref:"Pr 6:1-6",ch:6},nt:{ref:"Mt 18:21-35",book:"MAT",ch:18}},
  // DAY 57
  {ot:{ref:"Ex 30-32",book:"EXO",ch:30}},
  // DAY 58
  {ps:{ref:"Ps 30:1-14",ch:30},pr:{ref:"Pr 6:7-12",ch:6},nt:{ref:"Mt 19",book:"MAT",ch:19}},
  // DAY 59
  {ot:{ref:"Ex 33; 34",book:"EXO",ch:33}},
  // DAY 60
  {ps:{ref:"Ps 30:15-25",ch:30},pr:{ref:"Pr 6:13-16",ch:6},nt:{ref:"Mt 20:1-16",book:"MAT",ch:20}},
  // DAY 61
  {ot:{ref:"Ex 35-37",book:"EXO",ch:35}},
  // DAY 62
  {ps:{ref:"Ps 31",ch:31},pr:{ref:"Pr 6:17-19",ch:6},nt:{ref:"Mt 20:17-34",book:"MAT",ch:20}},
  // DAY 63
  {ot:{ref:"Ex 38-40",book:"EXO",ch:38}},
  // DAY 64
  {ps:{ref:"Ps 32:1-12",ch:32},pr:{ref:"Pr 6:20-25",ch:6},nt:{ref:"Mt 21:1-22",book:"MAT",ch:21}},
  // DAY 65
  {ot:{ref:"Lv 1-4",book:"LEV",ch:1}},
  // DAY 66
  {ps:{ref:"Ps 32:13-22",ch:32},pr:{ref:"Pr 6:26-31",ch:6},nt:{ref:"Mt 21:23-46",book:"MAT",ch:21}},
  // DAY 67
  {ot:{ref:"Lv 5:1-7:10",book:"LEV",ch:5}},
  // DAY 68
  {ps:{ref:"Ps 33:1-11",ch:33},pr:{ref:"Pr 6:32-36",ch:6},nt:{ref:"Mt 22:1-22",book:"MAT",ch:22}},
  // DAY 69
  {ot:{ref:"Lv 7:11-9:24",book:"LEV",ch:7}},
  // DAY 70
  {ps:{ref:"Ps 33:12-23",ch:33},pr:{ref:"Pr 6:37-40",ch:6},nt:{ref:"Mt 22:23-46",book:"MAT",ch:22}},
  // DAY 71
  {ot:{ref:"Lv 10-12",book:"LEV",ch:10}},
  // DAY 72
  {ps:{ref:"Ps 34:1-16",ch:34},pr:{ref:"Pr 7:1-6",ch:7},nt:{ref:"Mt 23:1-22",book:"MAT",ch:23}},
  // DAY 73
  {ot:{ref:"Lv 13",book:"LEV",ch:13}},
  // DAY 74
  {ps:{ref:"Ps 34:17-28",ch:34},pr:{ref:"Pr 7:7-12",ch:7},nt:{ref:"Mt 23:23-39",book:"MAT",ch:23}},
  // DAY 75
  {ot:{ref:"Lv 14; 15",book:"LEV",ch:14}},
  // DAY 76
  {ps:{ref:"Ps 35",ch:35},pr:{ref:"Pr 7:13-20",ch:7},nt:{ref:"Mt 24:1-28",book:"MAT",ch:24}},
  // DAY 77
  {ot:{ref:"Lv 16-18",book:"LEV",ch:16}},
  // DAY 78
  {ps:{ref:"Ps 36:1-20",ch:36},pr:{ref:"Pr 7:21-24",ch:7},nt:{ref:"Mt 24:29-51",book:"MAT",ch:24}},
  // DAY 79
  {ot:{ref:"Lv 19-21",book:"LEV",ch:19}},
  // DAY 80
  {ps:{ref:"Ps 36:21-40",ch:36},pr:{ref:"Pr 7:25-27",ch:7},nt:{ref:"Mt 25:1-30",book:"MAT",ch:25}},
  // DAY 81
  {ot:{ref:"Lv 22; 23",book:"LEV",ch:22}},
  // DAY 82
  {ps:{ref:"Ps 37:1-11",ch:37},pr:{ref:"Pr 8:1-5",ch:8},nt:{ref:"Mt 25:31-46",book:"MAT",ch:25}},
  // DAY 83
  {ot:{ref:"Lv 24; 25",book:"LEV",ch:24}},
  // DAY 84
  {ps:{ref:"Ps 37:12-23",ch:37},pr:{ref:"Pr 8:6-10",ch:8},nt:{ref:"Mt 26:1-25",book:"MAT",ch:26}},
  // DAY 85
  {ot:{ref:"Lv 26; 27",book:"LEV",ch:26}},
  // DAY 86
  {ps:{ref:"Ps 38",ch:38},pr:{ref:"Pr 8:11-16",ch:8},nt:{ref:"Mt 26:26-46",book:"MAT",ch:26}},
  // DAY 87
  {ot:{ref:"Nm 1; 2",book:"NUM",ch:1}},
  // DAY 88
  {ps:{ref:"Ps 39",ch:39},pr:{ref:"Pr 8:17-21",ch:8},nt:{ref:"Mt 26:47-75",book:"MAT",ch:26}},
  // DAY 89
  {ot:{ref:"Nm 3:1-4:33",book:"NUM",ch:3}},
  // DAY 90
  {ps:{ref:"Ps 40",ch:40},pr:{ref:"Pr 8:22-26",ch:8},nt:{ref:"Mt 27:1-26",book:"MAT",ch:27}},
  // DAY 91
  {ot:{ref:"Nm 4:34-6:26",book:"NUM",ch:4}},
  // DAY 92
  {ps:{ref:"Ps 41; 42",ch:41},pr:{ref:"Pr 8:27-31",ch:8},nt:{ref:"Mt 27:27-44",book:"MAT",ch:27}},
  // DAY 93
  {ot:{ref:"Nm 7:1-8:4",book:"NUM",ch:7}},
  // DAY 94
  {ps:{ref:"Ps 43:1-9",ch:43},pr:{ref:"Pr 8:32-35",ch:8},nt:{ref:"Mt 27:45-66",book:"MAT",ch:27}},
  // DAY 95
  {ot:{ref:"Nm 8:5-10:36",book:"NUM",ch:8}},
  // DAY 96
  {ps:{ref:"Ps 43:10-27",ch:43},pr:{ref:"Pr 9:1-6",ch:9},nt:{ref:"Mt 28",book:"MAT",ch:28}},
  // DAY 97
  {ot:{ref:"Nm 11:1-14:10",book:"NUM",ch:11}},
  // DAY 98
  {ps:{ref:"Ps 44",ch:44},pr:{ref:"Pr 9:7-11",ch:9},nt:{ref:"Mk 1:1-20",book:"MRK",ch:1}},
  // DAY 99
  {ot:{ref:"Nm 14:11-15:41",book:"NUM",ch:14}},
  // DAY 100
  {ps:{ref:"Ps 45",ch:45},pr:{ref:"Pr 9:12-15",ch:9},nt:{ref:"Mk 1:21-45",book:"MRK",ch:1}},
  // DAY 101
  {ot:{ref:"Nm 16:1-18:19",book:"NUM",ch:16}},
  // DAY 102
  {ps:{ref:"Ps 46",ch:46},pr:{ref:"Pr 9:16-20",ch:9},nt:{ref:"Mk 2",book:"MRK",ch:2}},
  // DAY 103
  {ot:{ref:"Nm 18:20-21:9",book:"NUM",ch:18}},
  // DAY 104
  {ps:{ref:"Ps 47",ch:47},pr:{ref:"Pr 9:21-25",ch:9},nt:{ref:"Mk 3:1-19",book:"MRK",ch:3}},
  // DAY 105
  {ot:{ref:"Nm 21:10-22:41",book:"NUM",ch:21}},
  // DAY 106
  {ps:{ref:"Ps 48:1-10",ch:48},pr:{ref:"Pr 10:1-6",ch:10},nt:{ref:"Mk 3:20-35",book:"MRK",ch:3}},
  // DAY 107
  {ot:{ref:"Nm 23; 24",book:"NUM",ch:23}},
  // DAY 108
  {ps:{ref:"Ps 48:11-21",ch:48},pr:{ref:"Pr 10:7-11",ch:10},nt:{ref:"Mk 4:1-20",book:"MRK",ch:4}},
  // DAY 109
  {ot:{ref:"Nm 25:1-27:11",book:"NUM",ch:25}},
  // DAY 110
  {ps:{ref:"Ps 49:1-15",ch:49},pr:{ref:"Pr 10:12-16",ch:10},nt:{ref:"Mk 4:21-41",book:"MRK",ch:4}},
  // DAY 111
  {ot:{ref:"Nm 27:12-29:39",book:"NUM",ch:27}},
  // DAY 112
  {ps:{ref:"Ps 49:16-23",ch:49},pr:{ref:"Pr 10:17-22",ch:10},nt:{ref:"Mk 5:1-20",book:"MRK",ch:5}},
  // DAY 113
  {ot:{ref:"Nm 30; 31",book:"NUM",ch:30}},
  // DAY 114
  {ps:{ref:"Ps 50:1-10",ch:50},pr:{ref:"Pr 10:23-27",ch:10},nt:{ref:"Mk 5:21-43",book:"MRK",ch:5}},
  // DAY 115
  {ot:{ref:"Nm 32; 33",book:"NUM",ch:32}},
  // DAY 116
  {ps:{ref:"Ps 50:11-21",ch:50},pr:{ref:"Pr 10:28-33",ch:10},nt:{ref:"Mk 6:1-29",book:"MRK",ch:6}},
  // DAY 117
  {ot:{ref:"Nm 34-36",book:"NUM",ch:34}},
  // DAY 118
  {ps:{ref:"Ps 51",ch:51},pr:{ref:"Pr 11:1-5",ch:11},nt:{ref:"Mk 6:30-56",book:"MRK",ch:6}},
  // DAY 119
  {ot:{ref:"Dt 1; 2",book:"DEU",ch:1}},
  // DAY 120
  {ps:{ref:"Ps 52; 53",ch:52},pr:{ref:"Pr 11:6-10",ch:11},nt:{ref:"Mk 7:1-23",book:"MRK",ch:7}},
  // DAY 121
  {ot:{ref:"Dt 3; 4",book:"DEU",ch:3}},
  // DAY 122
  {ps:{ref:"Ps 54:1-12",ch:54},pr:{ref:"Pr 11:11-15",ch:11},nt:{ref:"Mk 7:24-37",book:"MRK",ch:7}},
  // DAY 123
  {ot:{ref:"Dt 5-7",book:"DEU",ch:5}},
  // DAY 124
  {ps:{ref:"Ps 54:13-24",ch:54},pr:{ref:"Pr 11:16-20",ch:11},nt:{ref:"Mk 8:1-21",book:"MRK",ch:8}},
  // DAY 125
  {ot:{ref:"Dt 8-10",book:"DEU",ch:8}},
  // DAY 126
  {ps:{ref:"Ps 55",ch:55},pr:{ref:"Pr 11:21-25",ch:11},nt:{ref:"Mk 8:22-9:1",book:"MRK",ch:8}},
  // DAY 127
  {ot:{ref:"Dt 11-13",book:"DEU",ch:11}},
  // DAY 128
  {ps:{ref:"Ps 56",ch:56},pr:{ref:"Pr 11:26-30",ch:11},nt:{ref:"Mk 9:2-29",book:"MRK",ch:9}},
  // DAY 129
  {ot:{ref:"Dt 14-16",book:"DEU",ch:14}},
  // DAY 130
  {ps:{ref:"Ps 57",ch:57},pr:{ref:"Pr 12:1-5",ch:12},nt:{ref:"Mk 9:30-50",book:"MRK",ch:9}},
  // DAY 131
  {ot:{ref:"Dt 17-19",book:"DEU",ch:17}},
  // DAY 132
  {ps:{ref:"Ps 58",ch:58},pr:{ref:"Pr 12:6-10",ch:12},nt:{ref:"Mk 10:1-31",book:"MRK",ch:10}},
  // DAY 133
  {ot:{ref:"Dt 20-22",book:"DEU",ch:20}},
  // DAY 134
  {ps:{ref:"Ps 59",ch:59},pr:{ref:"Pr 12:11-15",ch:12},nt:{ref:"Mk 10:32-52",book:"MRK",ch:10}},
  // DAY 135
  {ot:{ref:"Dt 23-25",book:"DEU",ch:23}},
  // DAY 136
  {ps:{ref:"Ps 60",ch:60},pr:{ref:"Pr 12:16-20",ch:12},nt:{ref:"Mk 11:1-19",book:"MRK",ch:11}},
  // DAY 137
  {ot:{ref:"Dt 26:1-28:14",book:"DEU",ch:26}},
  // DAY 138
  {ps:{ref:"Ps 61",ch:61},pr:{ref:"Pr 12:21-25",ch:12},nt:{ref:"Mk 11:20-33",book:"MRK",ch:11}},
  // DAY 139
  {ot:{ref:"Dt 28:15-29:28",book:"DEU",ch:28}},
  // DAY 140
  {ps:{ref:"Ps 62",ch:62},pr:{ref:"Pr 12:26-31",ch:12},nt:{ref:"Mk 12:1-27",book:"MRK",ch:12}},
  // DAY 141
  {ot:{ref:"Dt 30; 31",book:"DEU",ch:30}},
  // DAY 142
  {ps:{ref:"Ps 63",ch:63},pr:{ref:"Pr 13:1-5",ch:13},nt:{ref:"Mk 12:28-44",book:"MRK",ch:12}},
  // DAY 143
  {ot:{ref:"Dt 32",book:"DEU",ch:32}},
  // DAY 144
  {ps:{ref:"Ps 64",ch:64},pr:{ref:"Pr 13:6-10",ch:13},nt:{ref:"Mk 13:1-23",book:"MRK",ch:13}},
  // DAY 145
  {ot:{ref:"Dt 33; 34",book:"DEU",ch:33}},
  // DAY 146
  {ps:{ref:"Ps 65",ch:65},pr:{ref:"Pr 13:11-15",ch:13},nt:{ref:"Mk 13:24-37",book:"MRK",ch:13}},
  // DAY 147
  {ot:{ref:"Jos 1-3",book:"JOS",ch:1}},
  // DAY 148
  {ps:{ref:"Ps 66",ch:66},pr:{ref:"Pr 13:16-21",ch:13},nt:{ref:"Mk 14:1-31",book:"MRK",ch:14}},
  // DAY 149
  {ot:{ref:"Jos 4-6",book:"JOS",ch:4}},
  // DAY 150
  {ps:{ref:"Ps 67:1-20",ch:67},pr:{ref:"Pr 13:22-27",ch:13},nt:{ref:"Mk 14:32-52",book:"MRK",ch:14}},
  // DAY 151
  {ot:{ref:"Jos 7-9",book:"JOS",ch:7}},
  // DAY 152
  {ps:{ref:"Ps 67:21-36",ch:67},pr:{ref:"Pr 14:1-5",ch:14},nt:{ref:"Mk 14:53-72",book:"MRK",ch:14}},
  // DAY 153
  {ot:{ref:"Jos 10; 11",book:"JOS",ch:10}},
  // DAY 154
  {ps:{ref:"Ps 68:1-20",ch:68},pr:{ref:"Pr 14:6-10",ch:14},nt:{ref:"Mk 15:1-20",book:"MRK",ch:15}},
  // DAY 155
  {ot:{ref:"Jos 12-14",book:"JOS",ch:12}},
  // DAY 156
  {ps:{ref:"Ps 68:21-37",ch:68},pr:{ref:"Pr 14:11-15",ch:14},nt:{ref:"Mk 15:21-47",book:"MRK",ch:15}},
  // DAY 157
  {ot:{ref:"Jos 15-17",book:"JOS",ch:15}},
  // DAY 158
  {ps:{ref:"Ps 69",ch:69},pr:{ref:"Pr 14:16-20",ch:14},nt:{ref:"Mk 16",book:"MRK",ch:16}},
  // DAY 159
  {ot:{ref:"Jos 18-20",book:"JOS",ch:18}},
  // DAY 160
  {ps:{ref:"Ps 70:1-13",ch:70},pr:{ref:"Pr 14:21-25",ch:14},nt:{ref:"Lk 1:1-25",book:"LUK",ch:1}},
  // DAY 161
  {ot:{ref:"Jos 21-22",book:"JOS",ch:21}},
  // DAY 162
  {ps:{ref:"Ps 70:14-24",ch:70},pr:{ref:"Pr 14:26-30",ch:14},nt:{ref:"Lk 1:26-56",book:"LUK",ch:1}},
  // DAY 163
  {ot:{ref:"Jos 23; 24",book:"JOS",ch:23}},
  // DAY 164
  {ps:{ref:"Ps 71",ch:71},pr:{ref:"Pr 14:31-36",ch:14},nt:{ref:"Lk 1:57-80",book:"LUK",ch:1}},
  // DAY 165
  {ot:{ref:"Jdg 1; 2",book:"JDG",ch:1}},
  // DAY 166
  {ps:{ref:"Ps 72:1-14",ch:72},pr:{ref:"Pr 15:1-5",ch:15},nt:{ref:"Lk 2:1-24",book:"LUK",ch:2}},
  // DAY 167
  {ot:{ref:"Jdg 3; 4",book:"JDG",ch:3}},
  // DAY 168
  {ps:{ref:"Ps 72:15-28",ch:72},pr:{ref:"Pr 15:6-10",ch:15},nt:{ref:"Lk 2:25-52",book:"LUK",ch:2}},
  // DAY 169
  {ot:{ref:"Jdg 5:1-6:10",book:"JDG",ch:5}},
  // DAY 170
  {ps:{ref:"Ps 73:1-11",ch:73},pr:{ref:"Pr 15:11-15",ch:15},nt:{ref:"Lk 3:1-20",book:"LUK",ch:3}},
  // DAY 171
  {ot:{ref:"Jdg 6:11-7:25",book:"JDG",ch:6}},
  // DAY 172
  {ps:{ref:"Ps 73:12-23",ch:73},pr:{ref:"Pr 15:16-20",ch:15},nt:{ref:"Lk 3:21-38",book:"LUK",ch:3}},
  // DAY 173
  {ot:{ref:"Jdg 8; 9",book:"JDG",ch:8}},
  // DAY 174
  {ps:{ref:"Ps 74",ch:74},pr:{ref:"Pr 15:21-26",ch:15},nt:{ref:"Lk 4:1-30",book:"LUK",ch:4}},
  // DAY 175
  {ot:{ref:"Jdg 10; 11",book:"JDG",ch:10}},
  // DAY 176
  {ps:{ref:"Ps 75",ch:75},pr:{ref:"Pr 15:27-32",ch:15},nt:{ref:"Lk 4:31-44",book:"LUK",ch:4}},
  // DAY 177
  {ot:{ref:"Jdg 12-14",book:"JDG",ch:12}},
  // DAY 178
  {ps:{ref:"Ps 76:1-10",ch:76},pr:{ref:"Pr 15:33-38",ch:15},nt:{ref:"Lk 5:1-16",book:"LUK",ch:5}},
  // DAY 179
  {ot:{ref:"Jdg 15-17",book:"JDG",ch:15}},
  // DAY 180
  {ps:{ref:"Ps 76:11-21",ch:76},pr:{ref:"Pr 16:1-5",ch:16},nt:{ref:"Lk 5:17-39",book:"LUK",ch:5}},
  // DAY 181
  {ot:{ref:"Jdg 18; 19",book:"JDG",ch:18}},
  // DAY 182
  {ps:{ref:"Ps 77:1-17",ch:77},pr:{ref:"Pr 16:6-10",ch:16},nt:{ref:"Lk 6:1-26",book:"LUK",ch:6}},
  // DAY 183
  {ot:{ref:"Jdg 20; 21",book:"JDG",ch:20}},
  // DAY 184
  {ps:{ref:"Ps 77:18-37",ch:77},pr:{ref:"Pr 16:11-15",ch:16},nt:{ref:"Lk 6:27-49",book:"LUK",ch:6}},
  // DAY 185
  {ot:{ref:"Ru 1-4",book:"RUT",ch:1}},
  // DAY 186
  {ps:{ref:"Ps 77:38-55",ch:77},pr:{ref:"Pr 16:16-20",ch:16},nt:{ref:"Lk 7:1-17",book:"LUK",ch:7}},
  // DAY 187
  {ot:{ref:"1Kg 1:1-2:17",book:"1SA",ch:1}},
  // DAY 188
  {ps:{ref:"Ps 77:56-72",ch:77},pr:{ref:"Pr 16:21-25",ch:16},nt:{ref:"Lk 7:18-50",book:"LUK",ch:7}},
  // DAY 189
  {ot:{ref:"1Kg 2:18-4:22",book:"1SA",ch:2}},
  // DAY 190
  {ps:{ref:"Ps 78",ch:78},pr:{ref:"Pr 16:26-31",ch:16},nt:{ref:"Lk 8:1-25",book:"LUK",ch:8}},
  // DAY 191
  {ot:{ref:"1Kg 5-7",book:"1SA",ch:5}},
  // DAY 192
  {ps:{ref:"Ps 79",ch:79},pr:{ref:"Pr 17:1-5",ch:17},nt:{ref:"Lk 8:26-56",book:"LUK",ch:8}},
  // DAY 193
  {ot:{ref:"1Kg 8:1-10:16",book:"1SA",ch:8}},
  // DAY 194
  {ps:{ref:"Ps 80",ch:80},pr:{ref:"Pr 17:6-10",ch:17},nt:{ref:"Lk 9:1-17",book:"LUK",ch:9}},
  // DAY 195
  {ot:{ref:"1Kg 10:17-13:22",book:"1SA",ch:10}},
  // DAY 196
  {ps:{ref:"Ps 81",ch:81},pr:{ref:"Pr 17:11-15",ch:17},nt:{ref:"Lk 9:18-36",book:"LUK",ch:9}},
  // DAY 197
  {ot:{ref:"1Kg 14:1-15:9",book:"1SA",ch:14}},
  // DAY 198
  {ps:{ref:"Ps 82",ch:82},pr:{ref:"Pr 17:16-20",ch:17},nt:{ref:"Lk 9:37-62",book:"LUK",ch:9}},
  // DAY 199
  {ot:{ref:"1Kg 15:10-17:30",book:"1SA",ch:15}},
  // DAY 200
  {ps:{ref:"Ps 83",ch:83},pr:{ref:"Pr 17:21-25",ch:17},nt:{ref:"Lk 10:1-24",book:"LUK",ch:10}},
  // DAY 201
  {ot:{ref:"1Kg 18-21:1",book:"1SA",ch:18}},
  // DAY 202
  {ps:{ref:"Ps 84",ch:84},pr:{ref:"Pr 17:26-30",ch:17},nt:{ref:"Lk 10:25-42",book:"LUK",ch:10}},
  // DAY 203
  {ot:{ref:"1Kg 21:2-23:28",book:"1SA",ch:21}},
  // DAY 204
  {ps:{ref:"Ps 85",ch:85},pr:{ref:"Pr 18:1-5",ch:18},nt:{ref:"Lk 11:1-28",book:"LUK",ch:11}},
  // DAY 205
  {ot:{ref:"1Kg 24; 25",book:"1SA",ch:24}},
  // DAY 206
  {ps:{ref:"Ps 86",ch:86},pr:{ref:"Pr 18:6-11",ch:18},nt:{ref:"Lk 11:29-54",book:"LUK",ch:11}},
  // DAY 207
  {ot:{ref:"1Kg 26-28",book:"1SA",ch:26}},
  // DAY 208
  {ps:{ref:"Ps 87",ch:87},pr:{ref:"Pr 18:11-17",ch:18},nt:{ref:"Lk 12:1-34",book:"LUK",ch:12}},
  // DAY 209
  {ot:{ref:"1Kg 29-31",book:"1SA",ch:29}},
  // DAY 210
  {ps:{ref:"Ps 88:1-19",ch:88},pr:{ref:"Pr 18:18-23",ch:18},nt:{ref:"Lk 12:35-59",book:"LUK",ch:12}},
  // DAY 211
  {ot:{ref:"2Kg 1; 2",book:"2SA",ch:1}},
  // DAY 212
  {ps:{ref:"Ps 88:20-38",ch:88},pr:{ref:"Pr 19:1-6",ch:19},nt:{ref:"Lk 13:1-21",book:"LUK",ch:13}},
  // DAY 213
  {ot:{ref:"2Kg 3; 4",book:"2SA",ch:3}},
  // DAY 214
  {ps:{ref:"Ps 88:39-53",ch:88},pr:{ref:"Pr 19:7-12",ch:19},nt:{ref:"Lk 13:22-35",book:"LUK",ch:13}},
  // DAY 215
  {ot:{ref:"2Kg 5-7",book:"2SA",ch:5}},
  // DAY 216
  {ps:{ref:"Ps 89",ch:89},pr:{ref:"Pr 19:13-18",ch:19},nt:{ref:"Lk 14:1-24",book:"LUK",ch:14}},
  // DAY 217
  {ot:{ref:"2Kg 8-11",book:"2SA",ch:8}},
  // DAY 218
  {ps:{ref:"Ps 90",ch:90},pr:{ref:"Pr 19:19-24",ch:19},nt:{ref:"Lk 14:25-35",book:"LUK",ch:14}},
  // DAY 219
  {ot:{ref:"2Kg 12; 13",book:"2SA",ch:12}},
  // DAY 220
  {ps:{ref:"Ps 91",ch:91},pr:{ref:"Pr 19:25-29",ch:19},nt:{ref:"Lk 15:1-10",book:"LUK",ch:15}},
  // DAY 221
  {ot:{ref:"2Kg 14; 15",book:"2SA",ch:14}},
  // DAY 222
  {ps:{ref:"Ps 92",ch:92},pr:{ref:"Pr 20:1-5",ch:20},nt:{ref:"Lk 15:11-32",book:"LUK",ch:15}},
  // DAY 223
  {ot:{ref:"2Kg 16-18:18",book:"2SA",ch:16}},
  // DAY 224
  {ps:{ref:"Ps 93:1-15",ch:93},pr:{ref:"Pr 20:6-10",ch:20},nt:{ref:"Lk 16",book:"LUK",ch:16}},
  // DAY 225
  {ot:{ref:"2Kg 18:19-19:44",book:"2SA",ch:18}},
  // DAY 226
  {ps:{ref:"Ps 93:16-23",ch:93},pr:{ref:"Pr 20:11-15",ch:20},nt:{ref:"Lk 17:1-19",book:"LUK",ch:17}},
  // DAY 227
  {ot:{ref:"2Kg 20; 21",book:"2SA",ch:20}},
  // DAY 228
  {ps:{ref:"Ps 94",ch:94},pr:{ref:"Pr 20:16-20",ch:20},nt:{ref:"Lk 17:20-37",book:"LUK",ch:17}},
  // DAY 229
  {ot:{ref:"2Kg 22:1-23:7",book:"2SA",ch:22}},
  // DAY 230
  {ps:{ref:"Ps 95",ch:95},pr:{ref:"Pr 20:21-25",ch:20},nt:{ref:"Lk 18:1-17",book:"LUK",ch:18}},
  // DAY 231
  {ot:{ref:"2Kg 23:8-24:25",book:"2SA",ch:23}},
  // DAY 232
  {ps:{ref:"Ps 96",ch:96},pr:{ref:"Pr 21:1-5",ch:21},nt:{ref:"Lk 18:18-43",book:"LUK",ch:18}},
  // DAY 233
  {ot:{ref:"3Kg 1:1-2:25",book:"1KI",ch:1}},
  // DAY 234
  {ps:{ref:"Ps 97; 98",ch:97},pr:{ref:"Pr 21:6-10",ch:21},nt:{ref:"Lk 19:1-27",book:"LUK",ch:19}},
  // DAY 235
  {ot:{ref:"3Kg 2:26-3:27",book:"1KI",ch:2}},
  // DAY 236
  {ps:{ref:"Ps 99; 100",ch:99},pr:{ref:"Pr 21:11-15",ch:21},nt:{ref:"Lk 19:28-48",book:"LUK",ch:19}},
  // DAY 237
  {ot:{ref:"3Kg 4-6",book:"1KI",ch:4}},
  // DAY 238
  {ps:{ref:"Ps 101:1-15",ch:101},pr:{ref:"Pr 21:16-20",ch:21},nt:{ref:"Lk 20:1-26",book:"LUK",ch:20}},
  // DAY 239
  {ot:{ref:"3Kg 7:1-8:52",book:"1KI",ch:7}},
  // DAY 240
  {ps:{ref:"Ps 101:16-29",ch:101},pr:{ref:"Pr 21:21-25",ch:21},nt:{ref:"Lk 20:27-47",book:"LUK",ch:20}},
  // DAY 241
  {ot:{ref:"3Kg 8:53-10:33",book:"1KI",ch:8}},
  // DAY 242
  {ps:{ref:"Ps 102:1-12",ch:102},pr:{ref:"Pr 21:26-30",ch:21},nt:{ref:"Lk 21:1-19",book:"LUK",ch:21}},
  // DAY 243
  {ot:{ref:"3Kg 11:1-12:25",book:"1KI",ch:11}},
  // DAY 244
  {ps:{ref:"Ps 102:13-22",ch:102},pr:{ref:"Pr 22:1-5",ch:22},nt:{ref:"Lk 21:20-38",book:"LUK",ch:21}},
  // DAY 245
  {ot:{ref:"3Kg 12:26-13:34",book:"1KI",ch:12}},
  // DAY 246
  {ps:{ref:"Ps 103:1-18",ch:103},pr:{ref:"Pr 22:6-10",ch:22},nt:{ref:"Lk 22:1-23",book:"LUK",ch:22}},
  // DAY 247
  {ot:{ref:"3Kg 14-16",book:"1KI",ch:14}},
  // DAY 248
  {ps:{ref:"Ps 103:19-35",ch:103},pr:{ref:"Pr 22:11-15",ch:22},nt:{ref:"Lk 22:24-46",book:"LUK",ch:22}},
  // DAY 249
  {ot:{ref:"3Kg 17:1-19:9",book:"1KI",ch:17}},
  // DAY 250
  {ps:{ref:"Ps 104:1-15",ch:104},pr:{ref:"Pr 22:16-20",ch:22},nt:{ref:"Lk 22:47-71",book:"LUK",ch:22}},
  // DAY 251
  {ot:{ref:"3Kg 19:10-21:22",book:"1KI",ch:19}},
  // DAY 252
  {ps:{ref:"Ps 104:16-27",ch:104},pr:{ref:"Pr 22:21-26",ch:22},nt:{ref:"Lk 23:1-25",book:"LUK",ch:23}},
  // DAY 253
  {ot:{ref:"3Kg 21:23-22:50",book:"1KI",ch:21}},
  // DAY 254
  {ps:{ref:"Ps 104:28-45",ch:104},pr:{ref:"Pr 22:27-31",ch:22},nt:{ref:"Lk 23:26-56",book:"LUK",ch:23}},
  // DAY 255
  {ot:{ref:"4Kg 1-3",book:"2KI",ch:1}},
  // DAY 256
  {ps:{ref:"Ps 105:1-15",ch:105},pr:{ref:"Pr 23:1-5",ch:23},nt:{ref:"Lk 24:1-35",book:"LUK",ch:24}},
  // DAY 257
  {ot:{ref:"4Kg 4; 5",book:"2KI",ch:4}},
  // DAY 258
  {ps:{ref:"Ps 105:16-31",ch:105},pr:{ref:"Pr 23:6-12",ch:23},nt:{ref:"Lk 24:36-53",book:"LUK",ch:24}},
  // DAY 259
  {ot:{ref:"4Kg 6:1-8:6",book:"2KI",ch:6}},
  // DAY 260
  {ps:{ref:"Ps 105:32-48",ch:105},pr:{ref:"Pr 23:13-18",ch:23},nt:{ref:"Jn 1:1-28",book:"JHN",ch:1}},
  // DAY 261
  {ot:{ref:"4Kg 8:7-9:37",book:"2KI",ch:8}},
  // DAY 262
  {ps:{ref:"Ps 106:1-14",ch:106},pr:{ref:"Pr 23:19-23",ch:23},nt:{ref:"Jn 1:29-51",book:"JHN",ch:1}},
  // DAY 263
  {ot:{ref:"4Kg 10; 11",book:"2KI",ch:10}},
  // DAY 264
  {ps:{ref:"Ps 106:15-30",ch:106},pr:{ref:"Pr 23:24-27",ch:23},nt:{ref:"Jn 2",book:"JHN",ch:2}},
  // DAY 265
  {ot:{ref:"4Kg 12-14",book:"2KI",ch:12}},
  // DAY 266
  {ps:{ref:"Ps 106:31-43",ch:106},pr:{ref:"Pr 23:28-32",ch:23},nt:{ref:"Jn 3:1-21",book:"JHN",ch:3}},
  // DAY 267
  {ot:{ref:"4Kg 15:1-17:23",book:"2KI",ch:15}},
  // DAY 268
  {ps:{ref:"Ps 107",ch:107},pr:{ref:"Pr 23:33-36",ch:23},nt:{ref:"Jn 3:22-36",book:"JHN",ch:3}},
  // DAY 269
  {ot:{ref:"4Kg 17:24-18:37",book:"2KI",ch:17}},
  // DAY 270
  {ps:{ref:"Ps 108:1-20",ch:108},pr:{ref:"Pr 24:1-6",ch:24},nt:{ref:"Jn 4:1-26",book:"JHN",ch:4}},
  // DAY 271
  {ot:{ref:"4Kg 19; 20",book:"2KI",ch:19}},
  // DAY 272
  {ps:{ref:"Ps 108:21-31",ch:108},pr:{ref:"Pr 24:7-12",ch:24},nt:{ref:"Jn 4:27-54",book:"JHN",ch:4}},
  // DAY 273
  {ot:{ref:"4Kg 21:1-23:20",book:"2KI",ch:21}},
  // DAY 274
  {ps:{ref:"Ps 109; 110",ch:109},pr:{ref:"Pr 24:13-18",ch:24},nt:{ref:"Jn 5:1-15",book:"JHN",ch:5}},
  // DAY 275
  {ot:{ref:"4Kg 23:21-25:30",book:"2KI",ch:23}},
  // DAY 276
  {ps:{ref:"Ps 111; 112",ch:111},pr:{ref:"Pr 24:19-23",ch:24},nt:{ref:"Jn 5:16-47",book:"JHN",ch:5}},
  // DAY 277
  {ot:{ref:"1Ch 1-3",book:"1CH",ch:1}},
  // DAY 278
  {ps:{ref:"Ps 113:1-11",ch:113},pr:{ref:"Pr 24:24-27",ch:24},nt:{ref:"Jn 6:1-21",book:"JHN",ch:6}},
  // DAY 279
  {ot:{ref:"1Ch 4:1-6:33",book:"1CH",ch:4}},
  // DAY 280
  {ps:{ref:"Ps 113:12-26",ch:113},pr:{ref:"Pr 24:29-34",ch:24},nt:{ref:"Jn 6:22-50",book:"JHN",ch:6}},
  // DAY 281
  {ot:{ref:"1Ch 6:34-8:40",book:"1CH",ch:6}},
  // DAY 282
  {ps:{ref:"Ps 114",ch:114},pr:{ref:"Pr 24:35-39",ch:24},nt:{ref:"Jn 6:51-71",book:"JHN",ch:6}},
  // DAY 283
  {ot:{ref:"1Ch 9:1-11:9",book:"1CH",ch:9}},
  // DAY 284
  {ps:{ref:"Ps 115; 116",ch:115},pr:{ref:"Pr 25:1-5",ch:25},nt:{ref:"Jn 7:1-36",book:"JHN",ch:7}},
  // DAY 285
  {ot:{ref:"1Ch 11:10-13:14",book:"1CH",ch:11}},
  // DAY 286
  {ps:{ref:"Ps 117:1-16",ch:117},pr:{ref:"Pr 25:6-11",ch:25},nt:{ref:"Jn 7:37-8:2",book:"JHN",ch:7}},
  // DAY 287
  {ot:{ref:"1Ch 14:1-16:35",book:"1CH",ch:14}},
  // DAY 288
  {ps:{ref:"Ps 117:17-29",ch:117},pr:{ref:"Pr 25:12-16",ch:25},nt:{ref:"Jn 8:3-30",book:"JHN",ch:8}},
  // DAY 289
  {ot:{ref:"1Ch 16:36-19:19",book:"1CH",ch:16}},
  // DAY 290
  {ps:{ref:"Ps 118:1-16",ch:118},pr:{ref:"Pr 25:17-21",ch:25},nt:{ref:"Jn 8:31-59",book:"JHN",ch:8}},
  // DAY 291
  {ot:{ref:"1Ch 20-22",book:"1CH",ch:20}},
  // DAY 292
  {ps:{ref:"Ps 118:17-32",ch:118},pr:{ref:"Pr 25:22-26",ch:25},nt:{ref:"Jn 9:1-12",book:"JHN",ch:9}},
  // DAY 293
  {ot:{ref:"1Ch 23-25",book:"1CH",ch:23}},
  // DAY 294
  {ps:{ref:"Ps 118:33-48",ch:118},pr:{ref:"Pr 25:27-31",ch:25},nt:{ref:"Jn 9:13-41",book:"JHN",ch:9}},
  // DAY 295
  {ot:{ref:"1Ch 26; 27",book:"1CH",ch:26}},
  // DAY 296
  {ps:{ref:"Ps 118:49-64",ch:118},pr:{ref:"Pr 26:1-5",ch:26},nt:{ref:"Jn 10:1-21",book:"JHN",ch:10}},
  // DAY 297
  {ot:{ref:"1Ch 28; 29",book:"1CH",ch:28}},
  // DAY 298
  {ps:{ref:"Ps 118:65-80",ch:118},pr:{ref:"Pr 26:6-9",ch:26},nt:{ref:"Jn 10:22-42",book:"JHN",ch:10}},
  // DAY 299
  {ot:{ref:"2Ch 1-4",book:"2CH",ch:1}},
  // DAY 300
  {ps:{ref:"Ps 118:81-96",ch:118},pr:{ref:"Pr 26:10-13",ch:26},nt:{ref:"Jn 11:1-37",book:"JHN",ch:11}},
  // DAY 301
  {ot:{ref:"2Ch 5; 6",book:"2CH",ch:5}},
  // DAY 302
  {ps:{ref:"Ps 118:97-112",ch:118},pr:{ref:"Pr 26:14-17",ch:26},nt:{ref:"Jn 11:38-57",book:"JHN",ch:11}},
  // DAY 303
  {ot:{ref:"2Ch 7-9",book:"2CH",ch:7}},
  // DAY 304
  {ps:{ref:"Ps 118:113-128",ch:118},pr:{ref:"Pr 26:18-23",ch:26},nt:{ref:"Jn 12:1-28",book:"JHN",ch:12}},
  // DAY 305
  {ot:{ref:"2Ch 10-13",book:"2CH",ch:10}},
  // DAY 306
  {ps:{ref:"Ps 118:129-144",ch:118},pr:{ref:"Pr 26:24-29",ch:26},nt:{ref:"Jn 12:29-50",book:"JHN",ch:12}},
  // DAY 307
  {ot:{ref:"2Ch 14-17",book:"2CH",ch:14}},
  // DAY 308
  {ps:{ref:"Ps 118:145-160",ch:118},pr:{ref:"Pr 27:1-6",ch:27},nt:{ref:"Jn 13:1-17",book:"JHN",ch:13}},
  // DAY 309
  {ot:{ref:"2Ch 18-20",book:"2CH",ch:18}},
  // DAY 310
  {ps:{ref:"Ps 118:161-176",ch:118},pr:{ref:"Pr 27:7-12",ch:27},nt:{ref:"Jn 13:18-38",book:"JHN",ch:13}},
  // DAY 311
  {ot:{ref:"2Ch 21:1-24:14",book:"2CH",ch:21}},
  // DAY 312
  {ps:{ref:"Ps 119; 120",ch:119},pr:{ref:"Pr 27:13-18",ch:27},nt:{ref:"Jn 14",book:"JHN",ch:14}},
  // DAY 313
  {ot:{ref:"2Ch 24:15-26:23",book:"2CH",ch:24}},
  // DAY 314
  {ps:{ref:"Ps 121; 122",ch:121},pr:{ref:"Pr 27:19-24",ch:27},nt:{ref:"Jn 15",book:"JHN",ch:15}},
  // DAY 315
  {ot:{ref:"2Ch 27-29",book:"2CH",ch:27}},
  // DAY 316
  {ps:{ref:"Ps 123; 124",ch:123},pr:{ref:"Pr 27:25-29",ch:27},nt:{ref:"Jn 16",book:"JHN",ch:16}},
  // DAY 317
  {ot:{ref:"2Ch 30-32",book:"2CH",ch:30}},
  // DAY 318
  {ps:{ref:"Ps 125; 126",ch:125},pr:{ref:"Pr 28:1-5",ch:28},nt:{ref:"Jn 17",book:"JHN",ch:17}},
  // DAY 319
  {ot:{ref:"2Ch 33; 34",book:"2CH",ch:33}},
  // DAY 320
  {ps:{ref:"Ps 127; 128",ch:127},pr:{ref:"Pr 28:6-11",ch:28},nt:{ref:"Jn 18:1-27",book:"JHN",ch:18}},
  // DAY 321
  {ot:{ref:"2Ch 35; 36",book:"2CH",ch:35}},
  // DAY 322
  {ps:{ref:"Ps 129; 130",ch:129},pr:{ref:"Pr 28:12-15",ch:28},nt:{ref:"Jn 18:28-19:4",book:"JHN",ch:18}},
  // DAY 323
  {ot:{ref:"1Ez 1:1-2:11",book:"EZR",ch:1}},
  // DAY 324
  {ps:{ref:"Ps 131",ch:131},pr:{ref:"Pr 28:16-20",ch:28},nt:{ref:"Jn 19:5-24",book:"JHN",ch:19}},
  // DAY 325
  {ot:{ref:"1Ez 2:12-4:42",book:"EZR",ch:2}},
  // DAY 326
  {ps:{ref:"Ps 132; 133",ch:132},pr:{ref:"Pr 28:21-25",ch:28},nt:{ref:"Jn 19:25-42",book:"JHN",ch:19}},
  // DAY 327
  {ot:{ref:"1Ez 4:43-5:45",book:"EZR",ch:4}},
  // DAY 328
  {ps:{ref:"Ps 134:1-12",ch:134},pr:{ref:"Pr 28:26-30",ch:28},nt:{ref:"Jn 20",book:"JHN",ch:20}},
  // DAY 329
  {ot:{ref:"1Ez 5:46-7:15",book:"EZR",ch:5}},
  // DAY 330
  {ps:{ref:"Ps 134:13-21",ch:134},pr:{ref:"Pr 29:1-6",ch:29},nt:{ref:"Jn 21",book:"JHN",ch:21}},
  // DAY 331
  {ot:{ref:"1Ez 8:1-70",book:"EZR",ch:8}},
  // DAY 332
  {ps:{ref:"Ps 135:1-15",ch:135},pr:{ref:"Pr 29:7-12",ch:29},nt:{ref:"Acts 1",book:"ACT",ch:1}},
  // DAY 333
  {ot:{ref:"1Ez 8:71-9:55",book:"EZR",ch:8}},
  // DAY 334
  {ps:{ref:"Ps 135:16-26",ch:135},pr:{ref:"Pr 29:13-18",ch:29},nt:{ref:"Acts 2:1-21",book:"ACT",ch:2}},
  // DAY 335
  {ot:{ref:"2Ez 1-3",book:"NEH",ch:1}},
  // DAY 336
  {ps:{ref:"Ps 136; 137",ch:136},pr:{ref:"Pr 29:19-23",ch:29},nt:{ref:"Acts 2:22-47",book:"ACT",ch:2}},
  // DAY 337
  {ot:{ref:"2Ez 4:1-6:14",book:"NEH",ch:4}},
  // DAY 338
  {ps:{ref:"Ps 138:1-12",ch:138},pr:{ref:"Pr 29:24-28",ch:29},nt:{ref:"Acts 3",book:"ACT",ch:3}},
  // DAY 339
  {ot:{ref:"2Ez 6:15-8:30",book:"NEH",ch:6}},
  // DAY 340
  {ps:{ref:"Ps 138:13-24",ch:138},pr:{ref:"Pr 30:1-5",ch:30},nt:{ref:"Acts 4:1-22",book:"ACT",ch:4}},
  // DAY 341
  {ot:{ref:"2Ez 8:31-10:44",book:"NEH",ch:8}},
  // DAY 342
  {ps:{ref:"Ps 139",ch:139},pr:{ref:"Pr 30:6-10",ch:30},nt:{ref:"Acts 4:23-37",book:"ACT",ch:4}},
  // DAY 343
  {ot:{ref:"Neh 1-3",book:"NEH",ch:1}},
  // DAY 344
  {ps:{ref:"Ps 140",ch:140},pr:{ref:"Pr 30:11-15",ch:30},nt:{ref:"Acts 5:1-16",book:"ACT",ch:5}},
  // DAY 345
  {ot:{ref:"Neh 4:1-7:3",book:"NEH",ch:4}},
  // DAY 346
  {ps:{ref:"Ps 141",ch:141},pr:{ref:"Pr 30:16-21",ch:30},nt:{ref:"Acts 5:17-42",book:"ACT",ch:5}},
  // DAY 347
  {ot:{ref:"Neh 7:4-8:18",book:"NEH",ch:7}},
  // DAY 348
  {ps:{ref:"Ps 142",ch:142},pr:{ref:"Pr 30:22-25",ch:30},nt:{ref:"Acts 6",book:"ACT",ch:6}},
  // DAY 349
  {ot:{ref:"Neh 9-11",book:"NEH",ch:9}},
  // DAY 350
  {ps:{ref:"Ps 143",ch:143},pr:{ref:"Pr 30:26-30",ch:30},nt:{ref:"Acts 7:1-21",book:"ACT",ch:7}},
  // DAY 351
  {ot:{ref:"Neh 12; 13",book:"NEH",ch:12}},
  // DAY 352
  {ps:{ref:"Ps 144:1-9",ch:144},pr:{ref:"Pr 30:31-35",ch:30},nt:{ref:"Acts 7:22-43",book:"ACT",ch:7}},
  // DAY 353
  {ot:{ref:"Tb 1-3",book:"TOB",ch:1}},
  // DAY 354
  {ps:{ref:"Ps 144:10-21",ch:144},pr:{ref:"Pr 31:1-5",ch:31},nt:{ref:"Acts 7:44-60",book:"ACT",ch:7}},
  // DAY 355
  {ot:{ref:"Tb 4-6",book:"TOB",ch:4}},
  // DAY 356
  {ps:{ref:"Ps 145",ch:145},pr:{ref:"Pr 31:6-9",ch:31},nt:{ref:"Acts 8:1-25",book:"ACT",ch:8}},
  // DAY 357
  {ot:{ref:"Tb 7-11",book:"TOB",ch:7}},
  // DAY 358
  {ps:{ref:"Ps 146; 147",ch:146},pr:{ref:"Pr 31:10-15",ch:31},nt:{ref:"Acts 8:26-40",book:"ACT",ch:8}},
  // DAY 359
  {ot:{ref:"Tb 12-14",book:"TOB",ch:12}},
  // DAY 360
  {ps:{ref:"Ps 148",ch:148},pr:{ref:"Pr 31:16-20",ch:31},nt:{ref:"Acts 9:1-18",book:"ACT",ch:9}},
  // DAY 361
  {ot:{ref:"Jdt 1-4",book:"JDT",ch:1}},
  // DAY 362
  {ps:{ref:"Ps 149",ch:149},pr:{ref:"Pr 31:21-25",ch:31},nt:{ref:"Acts 9:19-43",book:"ACT",ch:9}},
  // DAY 363
  {ot:{ref:"Jdt 5-7",book:"JDT",ch:5}},
  // DAY 364
  {ps:{ref:"Ps 150; 151",ch:150},pr:{ref:"Pr 31:26-30",ch:31},nt:{ref:"Acts 10:1-23",book:"ACT",ch:10}},
  // DAY 365
  {ot:{ref:"Jdt 8-10",book:"JDT",ch:8}},
  // DAY 366
  {ps:{ref:"Ps 1; 2",ch:1},pr:{ref:"Pr 1:1-5",ch:1},nt:{ref:"Acts 10:24-48",book:"ACT",ch:10}},
  // DAY 367
  {ot:{ref:"Jdt 11-13",book:"JDT",ch:11}},
  // DAY 368
  {ps:{ref:"Ps 3; 4",ch:3},pr:{ref:"Pr 1:6-10",ch:1},nt:{ref:"Acts 11",book:"ACT",ch:11}},
  // DAY 369
  {ot:{ref:"Jdt 14-16",book:"JDT",ch:14}},
  // DAY 370
  {ps:{ref:"Ps 5",ch:5},pr:{ref:"Pr 1:11-15",ch:1},nt:{ref:"Acts 12",book:"ACT",ch:12}},
  // DAY 371
  {ot:{ref:"Est 1; 2",book:"EST",ch:1}},
  // DAY 372
  {ps:{ref:"Ps 6",ch:6},pr:{ref:"Pr 1:16-19",ch:1},nt:{ref:"Acts 13:1-25",book:"ACT",ch:13}},
  // DAY 373
  {ot:{ref:"Est 3; 4",book:"EST",ch:3}},
  // DAY 374
  {ps:{ref:"Ps 7",ch:7},pr:{ref:"Pr 1:20-24",ch:1},nt:{ref:"Acts 13:26-52",book:"ACT",ch:13}},
  // DAY 375
  {ot:{ref:"Est 5:1-8:12",book:"EST",ch:5}},
  // DAY 376
  {ps:{ref:"Ps 8",ch:8},pr:{ref:"Pr 1:25-29",ch:1},nt:{ref:"Acts 14",book:"ACT",ch:14}},
  // DAY 377
  {ot:{ref:"Est 8:12a-10:3k",book:"EST",ch:8}},
  // DAY 378
  {ps:{ref:"Ps 9:1-17",ch:9},pr:{ref:"Pr 1:30-35",ch:1},nt:{ref:"Acts 15:1-21",book:"ACT",ch:15}},
  // DAY 379
  {ot:{ref:"1Mc 1:1-2:14",book:"1MA",ch:1}},
  // DAY 380
  {ps:{ref:"Ps 9:18-39",ch:9},pr:{ref:"Pr 2:1-5",ch:2},nt:{ref:"Acts 15:22-41",book:"ACT",ch:15}},
  // DAY 381
  {ot:{ref:"1Mc 2:15-3:41",book:"1MA",ch:2}},
  // DAY 382
  {ps:{ref:"Ps 10; 11",ch:10},pr:{ref:"Pr 2:6-9",ch:2},nt:{ref:"Acts 16:1-18",book:"ACT",ch:16}},
  // DAY 383
  {ot:{ref:"1Mc 3:42-4:61",book:"1MA",ch:3}},
  // DAY 384
  {ps:{ref:"Ps 12; 13",ch:12},pr:{ref:"Pr 2:10-16",ch:2},nt:{ref:"Acts 16:19-40",book:"ACT",ch:16}},
  // DAY 385
  {ot:{ref:"1Mc 5:1-6:17",book:"1MA",ch:5}},
  // DAY 386
  {ps:{ref:"Ps 14; 15",ch:14},pr:{ref:"Pr 2:17-23",ch:2},nt:{ref:"Acts 17:1-15",book:"ACT",ch:17}},
  // DAY 387
  {ot:{ref:"1Mc 6:18-7:50",book:"1MA",ch:6}},
  // DAY 388
  {ps:{ref:"Ps 16",ch:16},pr:{ref:"Pr 3:1-5",ch:3},nt:{ref:"Acts 17:16-34",book:"ACT",ch:17}},
  // DAY 389
  {ot:{ref:"1Mc 8:1-9:53",book:"1MA",ch:8}},
  // DAY 390
  {ps:{ref:"Ps 17:1-17",ch:17},pr:{ref:"Pr 3:6-10",ch:3},nt:{ref:"Acts 18",book:"ACT",ch:18}},
  // DAY 391
  {ot:{ref:"1Mc 9:54-10:58",book:"1MA",ch:9}},
  // DAY 392
  {ps:{ref:"Ps 17:18-32",ch:17},pr:{ref:"Pr 3:11-16",ch:3},nt:{ref:"Acts 19:1-22",book:"ACT",ch:19}},
  // DAY 393
  {ot:{ref:"1Mc 10:59-11:53",book:"1MA",ch:10}},
  // DAY 394
  {ps:{ref:"Ps 17:33-51",ch:17},pr:{ref:"Pr 3:17-22",ch:3},nt:{ref:"Acts 19:23-41",book:"ACT",ch:19}},
  // DAY 395
  {ot:{ref:"1Mc 11:54-13:11",book:"1MA",ch:11}},
  // DAY 396
  {ps:{ref:"Ps 18",ch:18},pr:{ref:"Pr 3:23-27",ch:3},nt:{ref:"Acts 20:1-16",book:"ACT",ch:20}},
  // DAY 397
  {ot:{ref:"1Mc 13:12-14:24",book:"1MA",ch:13}},
  // DAY 398
  {ps:{ref:"Ps 19",ch:19},pr:{ref:"Pr 3:28-32",ch:3},nt:{ref:"Acts 20:17-38",book:"ACT",ch:20}},
  // DAY 399
  {ot:{ref:"1Mc 14:25-16:24",book:"1MA",ch:14}},
  // DAY 400
  {ps:{ref:"Ps 20",ch:20},pr:{ref:"Pr 3:33-38",ch:3},nt:{ref:"Acts 21:1-16",book:"ACT",ch:21}},
  // DAY 401
  {ot:{ref:"2Mc 1; 2",book:"2MA",ch:1}},
  // DAY 402
  {ps:{ref:"Ps 21:1-19",ch:21},pr:{ref:"Pr 4:1-8",ch:4},nt:{ref:"Acts 21:17-40",book:"ACT",ch:21}},
  // DAY 403
  {ot:{ref:"2Mc 3:1-4:29",book:"2MA",ch:3}},
  // DAY 404
  {ps:{ref:"Ps 21:20-32",ch:21},pr:{ref:"Pr 4:9-12",ch:4},nt:{ref:"Acts 22:1-29",book:"ACT",ch:22}},
  // DAY 405
  {ot:{ref:"2Mc 4:30-6:31",book:"2MA",ch:4}},
  // DAY 406
  {ps:{ref:"Ps 22; 23",ch:22},pr:{ref:"Pr 4:13-18",ch:4},nt:{ref:"Acts 22:30-23:11",book:"ACT",ch:22}},
  // DAY 407
  {ot:{ref:"2Mc 7:1-8:20",book:"2MA",ch:7}},
  // DAY 408
  {ps:{ref:"Ps 24:1-11",ch:24},pr:{ref:"Pr 4:19-23",ch:4},nt:{ref:"Acts 23:12-35",book:"ACT",ch:23}},
  // DAY 409
  {ot:{ref:"2Mc 8:21-10:23",book:"2MA",ch:8}},
  // DAY 410
  {ps:{ref:"Ps 24:12-22",ch:24},pr:{ref:"Pr 4:24-28",ch:4},nt:{ref:"Acts 24",book:"ACT",ch:24}},
  // DAY 411
  {ot:{ref:"2Mc 10:24-12:16",book:"2MA",ch:10}},
  // DAY 412
  {ps:{ref:"Ps 25",ch:25},pr:{ref:"Pr 5:1-6",ch:5},nt:{ref:"Acts 25",book:"ACT",ch:25}},
  // DAY 413
  {ot:{ref:"2Mc 12:17-14:17",book:"2MA",ch:12}},
  // DAY 414
  {ps:{ref:"Ps 26",ch:26},pr:{ref:"Pr 5:7-14",ch:5},nt:{ref:"Acts 26",book:"ACT",ch:26}},
  // DAY 415
  {ot:{ref:"2Mc 14:18-15:39",book:"2MA",ch:14}},
  // DAY 416
  {ps:{ref:"Ps 27",ch:27},pr:{ref:"Pr 5:15-19",ch:5},nt:{ref:"Acts 27:1-20",book:"ACT",ch:27}},
  // DAY 417
  {ot:{ref:"3Mc 1; 2",book:"3MA",ch:1}},
  // DAY 418
  {ps:{ref:"Ps 28",ch:28},pr:{ref:"Pr 5:20-23",ch:5},nt:{ref:"Acts 27:21-44",book:"ACT",ch:27}},
  // DAY 419
  {ot:{ref:"3Mc 3; 4",book:"3MA",ch:3}},
  // DAY 420
  {ps:{ref:"Ps 29",ch:29},pr:{ref:"Pr 6:1-6",ch:6},nt:{ref:"Acts 28",book:"ACT",ch:28}},
  // DAY 421
  {ot:{ref:"3Mc 5",book:"3MA",ch:5}},
  // DAY 422
  {ps:{ref:"Ps 30:1-14",ch:30},pr:{ref:"Pr 6:7-12",ch:6},nt:{ref:"Rom 1",book:"ROM",ch:1}},
  // DAY 423
  {ot:{ref:"3Mc 6; 7",book:"3MA",ch:6}},
  // DAY 424
  {ps:{ref:"Ps 30:15-25",ch:30},pr:{ref:"Pr 6:13-16",ch:6},nt:{ref:"Rom 2",book:"ROM",ch:2}},
  // DAY 425
  {ot:{ref:"Job 1; 2",book:"JOB",ch:1}},
  // DAY 426
  {ps:{ref:"Ps 31",ch:31},pr:{ref:"Pr 6:17-19",ch:6},nt:{ref:"Rom 3",book:"ROM",ch:3}},
  // DAY 427
  {ot:{ref:"Job 3; 4",book:"JOB",ch:3}},
  // DAY 428
  {ps:{ref:"Ps 32:1-12",ch:32},pr:{ref:"Pr 6:20-25",ch:6},nt:{ref:"Rom 4",book:"ROM",ch:4}},
  // DAY 429
  {ot:{ref:"Job 5; 6",book:"JOB",ch:5}},
  // DAY 430
  {ps:{ref:"Ps 32:13-22",ch:32},pr:{ref:"Pr 6:26-31",ch:6},nt:{ref:"Rom 5",book:"ROM",ch:5}},
  // DAY 431
  {ot:{ref:"Job 7; 8",book:"JOB",ch:7}},
  // DAY 432
  {ps:{ref:"Ps 33:1-11",ch:33},pr:{ref:"Pr 6:32-36",ch:6},nt:{ref:"Rom 6",book:"ROM",ch:6}},
  // DAY 433
  {ot:{ref:"Job 9; 10",book:"JOB",ch:9}},
  // DAY 434
  {ps:{ref:"Ps 33:12-23",ch:33},pr:{ref:"Pr 6:37-40",ch:6},nt:{ref:"Rom 7",book:"ROM",ch:7}},
  // DAY 435
  {ot:{ref:"Job 11-13",book:"JOB",ch:11}},
  // DAY 436
  {ps:{ref:"Ps 34:1-16",ch:34},pr:{ref:"Pr 7:1-6",ch:7},nt:{ref:"Rom 8:1-17",book:"ROM",ch:8}},
  // DAY 437
  {ot:{ref:"Job 14; 15",book:"JOB",ch:14}},
  // DAY 438
  {ps:{ref:"Ps 34:17-28",ch:34},pr:{ref:"Pr 7:7-12",ch:7},nt:{ref:"Rom 8:18-39",book:"ROM",ch:8}},
  // DAY 439
  {ot:{ref:"Job 16-18",book:"JOB",ch:16}},
  // DAY 440
  {ps:{ref:"Ps 35",ch:35},pr:{ref:"Pr 7:13-20",ch:7},nt:{ref:"Rom 9:1-13",book:"ROM",ch:9}},
  // DAY 441
  {ot:{ref:"Job 19; 20",book:"JOB",ch:19}},
  // DAY 442
  {ps:{ref:"Ps 36:1-20",ch:36},pr:{ref:"Pr 7:21-24",ch:7},nt:{ref:"Rom 9:14-33",book:"ROM",ch:9}},
  // DAY 443
  {ot:{ref:"Job 21; 22",book:"JOB",ch:21}},
  // DAY 444
  {ps:{ref:"Ps 36:21-40",ch:36},pr:{ref:"Pr 7:25-27",ch:7},nt:{ref:"Rom 10",book:"ROM",ch:10}},
  // DAY 445
  {ot:{ref:"Job 23-25",book:"JOB",ch:23}},
  // DAY 446
  {ps:{ref:"Ps 37:1-11",ch:37},pr:{ref:"Pr 8:1-5",ch:8},nt:{ref:"Rom 11:1-15",book:"ROM",ch:11}},
  // DAY 447
  {ot:{ref:"Job 26-28",book:"JOB",ch:26}},
  // DAY 448
  {ps:{ref:"Ps 37:12-23",ch:37},pr:{ref:"Pr 8:6-10",ch:8},nt:{ref:"Rom 11:16-36",book:"ROM",ch:11}},
  // DAY 449
  {ot:{ref:"Job 29; 30",book:"JOB",ch:29}},
  // DAY 450
  {ps:{ref:"Ps 38",ch:38},pr:{ref:"Pr 8:11-16",ch:8},nt:{ref:"Rom 12",book:"ROM",ch:12}},
  // DAY 451
  {ot:{ref:"Job 31; 32",book:"JOB",ch:31}},
  // DAY 452
  {ps:{ref:"Ps 39",ch:39},pr:{ref:"Pr 8:17-21",ch:8},nt:{ref:"Rom 13",book:"ROM",ch:13}},
  // DAY 453
  {ot:{ref:"Job 33:1-34:9",book:"JOB",ch:33}},
  // DAY 454
  {ps:{ref:"Ps 40",ch:40},pr:{ref:"Pr 8:22-26",ch:8},nt:{ref:"Rom 14",book:"ROM",ch:14}},
  // DAY 455
  {ot:{ref:"Job 34:10-35:16",book:"JOB",ch:34}},
  // DAY 456
  {ps:{ref:"Ps 41; 42",ch:41},pr:{ref:"Pr 8:27-31",ch:8},nt:{ref:"Rom 15:1-21",book:"ROM",ch:15}},
  // DAY 457
  {ot:{ref:"Job 36; 37",book:"JOB",ch:36}},
  // DAY 458
  {ps:{ref:"Ps 43:1-9",ch:43},pr:{ref:"Pr 8:32-35",ch:8},nt:{ref:"Rom 15:22-33",book:"ROM",ch:15}},
  // DAY 459
  {ot:{ref:"Job 38",book:"JOB",ch:38}},
  // DAY 460
  {ps:{ref:"Ps 43:10-27",ch:43},pr:{ref:"Pr 9:1-6",ch:9},nt:{ref:"Rom 16",book:"ROM",ch:16}},
  // DAY 461
  {ot:{ref:"Job 39; 40",book:"JOB",ch:39}},
  // DAY 462
  {ps:{ref:"Ps 44",ch:44},pr:{ref:"Pr 9:7-11",ch:9},nt:{ref:"1Co 1",book:"1CO",ch:1}},
  // DAY 463
  {ot:{ref:"Job 41; 42",book:"JOB",ch:41}},
  // DAY 464
  {ps:{ref:"Ps 45",ch:45},pr:{ref:"Pr 9:12-15",ch:9},nt:{ref:"1Co 2",book:"1CO",ch:2}},
  // DAY 465
  {ot:{ref:"Ecc 1; 2",book:"ECC",ch:1}},
  // DAY 466
  {ps:{ref:"Ps 46",ch:46},pr:{ref:"Pr 9:16-20",ch:9},nt:{ref:"1Co 3",book:"1CO",ch:3}},
  // DAY 467
  {ot:{ref:"Ecc 3:1-5:6",book:"ECC",ch:3}},
  // DAY 468
  {ps:{ref:"Ps 47",ch:47},pr:{ref:"Pr 9:21-25",ch:9},nt:{ref:"1Co 4",book:"1CO",ch:4}},
  // DAY 469
  {ot:{ref:"Ecc 5:7-7:29",book:"ECC",ch:5}},
  // DAY 470
  {ps:{ref:"Ps 48:1-10",ch:48},pr:{ref:"Pr 10:1-6",ch:10},nt:{ref:"1Co 5",book:"1CO",ch:5}},
  // DAY 471
  {ot:{ref:"Ecc 8:1-10:10",book:"ECC",ch:8}},
  // DAY 472
  {ps:{ref:"Ps 48:11-21",ch:48},pr:{ref:"Pr 10:7-11",ch:10},nt:{ref:"1Co 6",book:"1CO",ch:6}},
  // DAY 473
  {ot:{ref:"Ecc 10:11-12:14",book:"ECC",ch:10}},
  // DAY 474
  {ps:{ref:"Ps 49:1-15",ch:49},pr:{ref:"Pr 10:12-16",ch:10},nt:{ref:"1Co 7:1-24",book:"1CO",ch:7}},
  // DAY 475
  {ot:{ref:"SS 1; 2",book:"SNG",ch:1}},
  // DAY 476
  {ps:{ref:"Ps 49:16-23",ch:49},pr:{ref:"Pr 10:17-22",ch:10},nt:{ref:"1Co 7:25-40",book:"1CO",ch:7}},
  // DAY 477
  {ot:{ref:"SS 3; 4",book:"SNG",ch:3}},
  // DAY 478
  {ps:{ref:"Ps 50:1-10",ch:50},pr:{ref:"Pr 10:23-27",ch:10},nt:{ref:"1Co 8",book:"1CO",ch:8}},
  // DAY 479
  {ot:{ref:"SS 5; 6",book:"SNG",ch:5}},
  // DAY 480
  {ps:{ref:"Ps 50:11-21",ch:50},pr:{ref:"Pr 10:28-33",ch:10},nt:{ref:"1Co 9",book:"1CO",ch:9}},
  // DAY 481
  {ot:{ref:"SS 7; 8",book:"SNG",ch:7}},
  // DAY 482
  {ps:{ref:"Ps 51",ch:51},pr:{ref:"Pr 11:1-5",ch:11},nt:{ref:"1Co 10:1-13",book:"1CO",ch:10}},
  // DAY 483
  {ot:{ref:"WSol 1; 2",book:"WIS",ch:1}},
  // DAY 484
  {ps:{ref:"Ps 52; 53",ch:52},pr:{ref:"Pr 11:6-10",ch:11},nt:{ref:"1Co 10:14-11:1",book:"1CO",ch:10}},
  // DAY 485
  {ot:{ref:"WSol 3; 4",book:"WIS",ch:3}},
  // DAY 486
  {ps:{ref:"Ps 54:1-12",ch:54},pr:{ref:"Pr 11:11-15",ch:11},nt:{ref:"1Co 11:2-16",book:"1CO",ch:11}},
  // DAY 487
  {ot:{ref:"WSol 5; 6",book:"WIS",ch:5}},
  // DAY 488
  {ps:{ref:"Ps 54:13-24",ch:54},pr:{ref:"Pr 11:16-20",ch:11},nt:{ref:"1Co 11:17-34",book:"1CO",ch:11}},
  // DAY 489
  {ot:{ref:"WSol 7; 8",book:"WIS",ch:7}},
  // DAY 490
  {ps:{ref:"Ps 55",ch:55},pr:{ref:"Pr 11:21-25",ch:11},nt:{ref:"1Co 12:1-30",book:"1CO",ch:12}},
  // DAY 491
  {ot:{ref:"WSol 9; 10",book:"WIS",ch:9}},
  // DAY 492
  {ps:{ref:"Ps 56",ch:56},pr:{ref:"Pr 11:26-30",ch:11},nt:{ref:"1Co 12:31-13:13",book:"1CO",ch:12}},
  // DAY 493
  {ot:{ref:"WSol 11:1-12:11",book:"WIS",ch:11}},
  // DAY 494
  {ps:{ref:"Ps 57",ch:57},pr:{ref:"Pr 12:1-5",ch:12},nt:{ref:"1Co 14:1-25",book:"1CO",ch:14}},
  // DAY 495
  {ot:{ref:"WSol 12:12-13:19",book:"WIS",ch:12}},
  // DAY 496
  {ps:{ref:"Ps 58",ch:58},pr:{ref:"Pr 12:6-10",ch:12},nt:{ref:"1Co 14:26-40",book:"1CO",ch:14}},
  // DAY 497
  {ot:{ref:"WSol 14",book:"WIS",ch:14}},
  // DAY 498
  {ps:{ref:"Ps 59",ch:59},pr:{ref:"Pr 12:11-15",ch:12},nt:{ref:"1Co 15:1-34",book:"1CO",ch:15}},
  // DAY 499
  {ot:{ref:"WSol 15:1-16:14",book:"WIS",ch:15}},
  // DAY 500
  {ps:{ref:"Ps 60",ch:60},pr:{ref:"Pr 12:16-20",ch:12},nt:{ref:"1Co 15:35-58",book:"1CO",ch:15}},
  // DAY 501
  {ot:{ref:"WSol 16:15-18:4",book:"WIS",ch:16}},
  // DAY 502
  {ps:{ref:"Ps 61",ch:61},pr:{ref:"Pr 12:21-25",ch:12},nt:{ref:"1Co 16",book:"1CO",ch:16}},
  // DAY 503
  {ot:{ref:"WSol 18:5-19:22",book:"WIS",ch:18}},
  // DAY 504
  {ps:{ref:"Ps 62",ch:62},pr:{ref:"Pr 12:26-31",ch:12},nt:{ref:"2Co 1:1-22",book:"2CO",ch:1}},
  // DAY 505
  {ot:{ref:"WSir 1; 2",book:"SIR",ch:1}},
  // DAY 506
  {ps:{ref:"Ps 63",ch:63},pr:{ref:"Pr 13:1-5",ch:13},nt:{ref:"2Co 1:23-2:17",book:"2CO",ch:1}},
  // DAY 507
  {ot:{ref:"WSir 3; 4",book:"SIR",ch:3}},
  // DAY 508
  {ps:{ref:"Ps 64",ch:64},pr:{ref:"Pr 13:6-10",ch:13},nt:{ref:"2Co 3",book:"2CO",ch:3}},
  // DAY 509
  {ot:{ref:"WSir 5; 6",book:"SIR",ch:5}},
  // DAY 510
  {ps:{ref:"Ps 65",ch:65},pr:{ref:"Pr 13:11-15",ch:13},nt:{ref:"2Co 4",book:"2CO",ch:4}},
  // DAY 511
  {ot:{ref:"WSir 7; 8",book:"SIR",ch:7}},
  // DAY 512
  {ps:{ref:"Ps 66",ch:66},pr:{ref:"Pr 13:16-21",ch:13},nt:{ref:"2Co 5",book:"2CO",ch:5}},
  // DAY 513
  {ot:{ref:"WSir 9; 10",book:"SIR",ch:9}},
  // DAY 514
  {ps:{ref:"Ps 67:1-20",ch:67},pr:{ref:"Pr 13:22-27",ch:13},nt:{ref:"2Co 6",book:"2CO",ch:6}},
  // DAY 515
  {ot:{ref:"WSir 11; 12",book:"SIR",ch:11}},
  // DAY 516
  {ps:{ref:"Ps 67:21-36",ch:67},pr:{ref:"Pr 14:1-5",ch:14},nt:{ref:"2Co 7",book:"2CO",ch:7}},
  // DAY 517
  {ot:{ref:"WSir 13; 14",book:"SIR",ch:13}},
  // DAY 518
  {ps:{ref:"Ps 68:1-20",ch:68},pr:{ref:"Pr 14:6-10",ch:14},nt:{ref:"2Co 8",book:"2CO",ch:8}},
  // DAY 519
  {ot:{ref:"WSir 15; 16",book:"SIR",ch:15}},
  // DAY 520
  {ps:{ref:"Ps 68:21-37",ch:68},pr:{ref:"Pr 14:11-15",ch:14},nt:{ref:"2Co 9",book:"2CO",ch:9}},
  // DAY 521
  {ot:{ref:"WSir 17; 18",book:"SIR",ch:17}},
  // DAY 522
  {ps:{ref:"Ps 69",ch:69},pr:{ref:"Pr 14:16-20",ch:14},nt:{ref:"2Co 10",book:"2CO",ch:10}},
  // DAY 523
  {ot:{ref:"WSir 19; 20",book:"SIR",ch:19}},
  // DAY 524
  {ps:{ref:"Ps 70:1-13",ch:70},pr:{ref:"Pr 14:21-25",ch:14},nt:{ref:"2Co 11:1-15",book:"2CO",ch:11}},
  // DAY 525
  {ot:{ref:"WSir 21; 22",book:"SIR",ch:21}},
  // DAY 526
  {ps:{ref:"Ps 70:14-24",ch:70},pr:{ref:"Pr 14:26-30",ch:14},nt:{ref:"2Co 11:16-33",book:"2CO",ch:11}},
  // DAY 527
  {ot:{ref:"WSir 23:1-24:18",book:"SIR",ch:23}},
  // DAY 528
  {ps:{ref:"Ps 71",ch:71},pr:{ref:"Pr 14:31-36",ch:14},nt:{ref:"2Co 12",book:"2CO",ch:12}},
  // DAY 529
  {ot:{ref:"WSir 24:19-25:25",book:"SIR",ch:24}},
  // DAY 530
  {ps:{ref:"Ps 72:1-14",ch:72},pr:{ref:"Pr 15:1-5",ch:15},nt:{ref:"2Co 13",book:"2CO",ch:13}},
  // DAY 531
  {ot:{ref:"WSir 26; 27",book:"SIR",ch:26}},
  // DAY 532
  {ps:{ref:"Ps 72:15-28",ch:72},pr:{ref:"Pr 15:6-10",ch:15},nt:{ref:"Gal 1",book:"GAL",ch:1}},
  // DAY 533
  {ot:{ref:"WSir 28; 29",book:"SIR",ch:28}},
  // DAY 534
  {ps:{ref:"Ps 73:1-11",ch:73},pr:{ref:"Pr 15:11-15",ch:15},nt:{ref:"Gal 2",book:"GAL",ch:2}},
  // DAY 535
  {ot:{ref:"WSir 30; 31",book:"SIR",ch:30}},
  // DAY 536
  {ps:{ref:"Ps 73:12-23",ch:73},pr:{ref:"Pr 15:16-20",ch:15},nt:{ref:"Gal 3",book:"GAL",ch:3}},
  // DAY 537
  {ot:{ref:"WSir 32; 33",book:"SIR",ch:32}},
  // DAY 538
  {ps:{ref:"Ps 74",ch:74},pr:{ref:"Pr 15:21-26",ch:15},nt:{ref:"Gal 4",book:"GAL",ch:4}},
  // DAY 539
  {ot:{ref:"WSir 34; 35",book:"SIR",ch:34}},
  // DAY 540
  {ps:{ref:"Ps 75",ch:75},pr:{ref:"Pr 15:27-32",ch:15},nt:{ref:"Gal 5",book:"GAL",ch:5}},
  // DAY 541
  {ot:{ref:"WSir 36; 37",book:"SIR",ch:36}},
  // DAY 542
  {ps:{ref:"Ps 76:1-10",ch:76},pr:{ref:"Pr 15:33-38",ch:15},nt:{ref:"Gal 6",book:"GAL",ch:6}},
  // DAY 543
  {ot:{ref:"WSir 38:1-39:11",book:"SIR",ch:38}},
  // DAY 544
  {ps:{ref:"Ps 76:11-21",ch:76},pr:{ref:"Pr 16:1-5",ch:16},nt:{ref:"Eph 1",book:"EPH",ch:1}},
  // DAY 545
  {ot:{ref:"WSir 39:12-40:30",book:"SIR",ch:39}},
  // DAY 546
  {ps:{ref:"Ps 77:1-17",ch:77},pr:{ref:"Pr 16:6-10",ch:16},nt:{ref:"Eph 2",book:"EPH",ch:2}},
  // DAY 547
  {ot:{ref:"WSir 41; 42",book:"SIR",ch:41}},
  // DAY 548
  {ps:{ref:"Ps 77:18-37",ch:77},pr:{ref:"Pr 16:11-15",ch:16},nt:{ref:"Eph 3",book:"EPH",ch:3}},
  // DAY 549
  {ot:{ref:"WSir 43:1-44:18",book:"SIR",ch:43}},
  // DAY 550
  {ps:{ref:"Ps 77:38-55",ch:77},pr:{ref:"Pr 16:16-20",ch:16},nt:{ref:"Eph 4:1-24",book:"EPH",ch:4}},
  // DAY 551
  {ot:{ref:"WSir 44:19-45:26",book:"SIR",ch:44}},
  // DAY 552
  {ps:{ref:"Ps 77:56-72",ch:77},pr:{ref:"Pr 16:21-25",ch:16},nt:{ref:"Eph 4:25-5:14",book:"EPH",ch:4}},
  // DAY 553
  {ot:{ref:"WSir 46; 47",book:"SIR",ch:46}},
  // DAY 554
  {ps:{ref:"Ps 78",ch:78},pr:{ref:"Pr 16:26-31",ch:16},nt:{ref:"Eph 5:15-33",book:"EPH",ch:5}},
  // DAY 555
  {ot:{ref:"WSir 48; 49",book:"SIR",ch:48}},
  // DAY 556
  {ps:{ref:"Ps 79",ch:79},pr:{ref:"Pr 17:1-5",ch:17},nt:{ref:"Eph 6",book:"EPH",ch:6}},
  // DAY 557
  {ot:{ref:"WSir 50",book:"SIR",ch:50}},
  // DAY 558
  {ps:{ref:"Ps 80",ch:80},pr:{ref:"Pr 17:6-10",ch:17},nt:{ref:"Php 1",book:"PHP",ch:1}},
  // DAY 559
  {ot:{ref:"WSir 51",book:"SIR",ch:51}},
  // DAY 560
  {ps:{ref:"Ps 81",ch:81},pr:{ref:"Pr 17:11-15",ch:17},nt:{ref:"Php 2",book:"PHP",ch:2}},
  // DAY 561
  {ot:{ref:"Hos 1; 2",book:"HOS",ch:1}},
  // DAY 562
  {ps:{ref:"Ps 82",ch:82},pr:{ref:"Pr 17:16-20",ch:17},nt:{ref:"Php 3:1-4:1",book:"PHP",ch:3}},
  // DAY 563
  {ot:{ref:"Hos 3-5",book:"HOS",ch:3}},
  // DAY 564
  {ps:{ref:"Ps 83",ch:83},pr:{ref:"Pr 17:21-25",ch:17},nt:{ref:"Php 4:2-23",book:"PHP",ch:4}},
  // DAY 565
  {ot:{ref:"Hos 6; 7",book:"HOS",ch:6}},
  // DAY 566
  {ps:{ref:"Ps 84",ch:84},pr:{ref:"Pr 17:26-30",ch:17},nt:{ref:"Col 1",book:"COL",ch:1}},
  // DAY 567
  {ot:{ref:"Hos 8; 9",book:"HOS",ch:8}},
  // DAY 568
  {ps:{ref:"Ps 85",ch:85},pr:{ref:"Pr 18:1-5",ch:18},nt:{ref:"Col 2",book:"COL",ch:2}},
  // DAY 569
  {ot:{ref:"Hos 10:1-12:7",book:"HOS",ch:10}},
  // DAY 570
  {ps:{ref:"Ps 86",ch:86},pr:{ref:"Pr 18:6-11",ch:18},nt:{ref:"Col 3:1-4:1",book:"COL",ch:3}},
  // DAY 571
  {ot:{ref:"Hos 12:8-14:10",book:"HOS",ch:12}},
  // DAY 572
  {ps:{ref:"Ps 87",ch:87},pr:{ref:"Pr 18:11-17",ch:18},nt:{ref:"Col 4:2-18",book:"COL",ch:4}},
  // DAY 573
  {ot:{ref:"Am 1:1-5:3",book:"AMO",ch:1}},
  // DAY 574
  {ps:{ref:"Ps 88:1-19",ch:88},pr:{ref:"Pr 18:18-23",ch:18},nt:{ref:"1Th 1",book:"1TH",ch:1}},
  // DAY 575
  {ot:{ref:"Am 5:4-9:15",book:"AMO",ch:5}},
  // DAY 576
  {ps:{ref:"Ps 88:20-38",ch:88},pr:{ref:"Pr 19:1-6",ch:19},nt:{ref:"1Th 2",book:"1TH",ch:2}},
  // DAY 577
  {ot:{ref:"Mic 1-4",book:"MIC",ch:1}},
  // DAY 578
  {ps:{ref:"Ps 88:39-53",ch:88},pr:{ref:"Pr 19:7-12",ch:19},nt:{ref:"1Th 3",book:"1TH",ch:3}},
  // DAY 579
  {ot:{ref:"Mic 5-7",book:"MIC",ch:5}},
  // DAY 580
  {ps:{ref:"Ps 89",ch:89},pr:{ref:"Pr 19:13-18",ch:19},nt:{ref:"1Th 4",book:"1TH",ch:4}},
  // DAY 581
  {ot:{ref:"Joel 1-4",book:"JOL",ch:1}},
  // DAY 582
  {ps:{ref:"Ps 90",ch:90},pr:{ref:"Pr 19:19-24",ch:19},nt:{ref:"1Th 5",book:"1TH",ch:5}},
  // DAY 583
  {ot:{ref:"Ob",book:"OBA",ch:1}},
  // DAY 584
  {ps:{ref:"Ps 91",ch:91},pr:{ref:"Pr 19:25-29",ch:19},nt:{ref:"2Th 1",book:"2TH",ch:1}},
  // DAY 585
  {ot:{ref:"Jon 1-4",book:"JON",ch:1}},
  // DAY 586
  {ps:{ref:"Ps 92",ch:92},pr:{ref:"Pr 20:1-5",ch:20},nt:{ref:"2Th 2",book:"2TH",ch:2}},
  // DAY 587
  {ot:{ref:"Nah 1-3",book:"NAM",ch:1}},
  // DAY 588
  {ps:{ref:"Ps 93:1-15",ch:93},pr:{ref:"Pr 20:6-10",ch:20},nt:{ref:"2Th 3",book:"2TH",ch:3}},
  // DAY 589
  {ot:{ref:"Hab 1-3",book:"HAB",ch:1}},
  // DAY 590
  {ps:{ref:"Ps 93:16-23",ch:93},pr:{ref:"Pr 20:11-15",ch:20},nt:{ref:"1Ti 1",book:"1TI",ch:1}},
  // DAY 591
  {ot:{ref:"Zep 1-3",book:"ZEP",ch:1}},
  // DAY 592
  {ps:{ref:"Ps 94",ch:94},pr:{ref:"Pr 20:16-20",ch:20},nt:{ref:"1Ti 2",book:"1TI",ch:2}},
  // DAY 593
  {ot:{ref:"Hag 1; 2",book:"HAG",ch:1}},
  // DAY 594
  {ps:{ref:"Ps 95",ch:95},pr:{ref:"Pr 20:21-25",ch:20},nt:{ref:"1Ti 3",book:"1TI",ch:3}},
  // DAY 595
  {ot:{ref:"Zec 1-5",book:"ZEC",ch:1}},
  // DAY 596
  {ps:{ref:"Ps 96",ch:96},pr:{ref:"Pr 21:1-5",ch:21},nt:{ref:"1Ti 4",book:"1TI",ch:4}},
  // DAY 597
  {ot:{ref:"Zec 6-9",book:"ZEC",ch:6}},
  // DAY 598
  {ps:{ref:"Ps 97; 98",ch:97},pr:{ref:"Pr 21:6-10",ch:21},nt:{ref:"1Ti 5",book:"1TI",ch:5}},
  // DAY 599
  {ot:{ref:"Zec 10-14",book:"ZEC",ch:10}},
  // DAY 600
  {ps:{ref:"Ps 99; 100",ch:99},pr:{ref:"Pr 21:11-15",ch:21},nt:{ref:"1Ti 6",book:"1TI",ch:6}},
  // DAY 601
  {ot:{ref:"Mal 1-3",book:"MAL",ch:1}},
  // DAY 602
  {ps:{ref:"Ps 101:1-15",ch:101},pr:{ref:"Pr 21:16-20",ch:21},nt:{ref:"2Ti 1",book:"2TI",ch:1}},
  // DAY 603
  {ot:{ref:"Is 1-4",book:"ISA",ch:1}},
  // DAY 604
  {ps:{ref:"Ps 101:16-29",ch:101},pr:{ref:"Pr 21:21-25",ch:21},nt:{ref:"2Ti 2",book:"2TI",ch:2}},
  // DAY 605
  {ot:{ref:"Is 5-9",book:"ISA",ch:5}},
  // DAY 606
  {ps:{ref:"Ps 102:1-12",ch:102},pr:{ref:"Pr 21:26-30",ch:21},nt:{ref:"2Ti 3",book:"2TI",ch:3}},
  // DAY 607
  {ot:{ref:"Is 10-14",book:"ISA",ch:10}},
  // DAY 608
  {ps:{ref:"Ps 102:13-22",ch:102},pr:{ref:"Pr 22:1-5",ch:22},nt:{ref:"2Ti 4",book:"2TI",ch:4}},
  // DAY 609
  {ot:{ref:"Is 15-21",book:"ISA",ch:15}},
  // DAY 610
  {ps:{ref:"Ps 103:1-18",ch:103},pr:{ref:"Pr 22:6-10",ch:22},nt:{ref:"Tts 1",book:"TIT",ch:1}},
  // DAY 611
  {ot:{ref:"Is 22-26",book:"ISA",ch:22}},
  // DAY 612
  {ps:{ref:"Ps 103:19-35",ch:103},pr:{ref:"Pr 22:11-15",ch:22},nt:{ref:"Tts 2",book:"TIT",ch:2}},
  // DAY 613
  {ot:{ref:"Is 27-30",book:"ISA",ch:27}},
  // DAY 614
  {ps:{ref:"Ps 104:1-15",ch:104},pr:{ref:"Pr 22:16-20",ch:22},nt:{ref:"Tts 3",book:"TIT",ch:3}},
  // DAY 615
  {ot:{ref:"Is 31-36",book:"ISA",ch:31}},
  // DAY 616
  {ps:{ref:"Ps 104:16-27",ch:104},pr:{ref:"Pr 22:21-26",ch:22},nt:{ref:"Phm",book:"PHM",ch:1}},
  // DAY 617
  {ot:{ref:"Is 37-40",book:"ISA",ch:37}},
  // DAY 618
  {ps:{ref:"Ps 104:28-45",ch:104},pr:{ref:"Pr 22:27-31",ch:22},nt:{ref:"Heb 1",book:"HEB",ch:1}},
  // DAY 619
  {ot:{ref:"Is 41-43",book:"ISA",ch:41}},
  // DAY 620
  {ps:{ref:"Ps 105:1-15",ch:105},pr:{ref:"Pr 23:1-5",ch:23},nt:{ref:"Heb 2",book:"HEB",ch:2}},
  // DAY 621
  {ot:{ref:"Is 44-47",book:"ISA",ch:44}},
  // DAY 622
  {ps:{ref:"Ps 105:16-31",ch:105},pr:{ref:"Pr 23:6-12",ch:23},nt:{ref:"Heb 3",book:"HEB",ch:3}},
  // DAY 623
  {ot:{ref:"Is 48-51",book:"ISA",ch:48}},
  // DAY 624
  {ps:{ref:"Ps 105:32-48",ch:105},pr:{ref:"Pr 23:13-18",ch:23},nt:{ref:"Heb 4",book:"HEB",ch:4}},
  // DAY 625
  {ot:{ref:"Is 52-57",book:"ISA",ch:52}},
  // DAY 626
  {ps:{ref:"Ps 106:1-14",ch:106},pr:{ref:"Pr 23:19-23",ch:23},nt:{ref:"Heb 5",book:"HEB",ch:5}},
  // DAY 627
  {ot:{ref:"Is 58-62",book:"ISA",ch:58}},
  // DAY 628
  {ps:{ref:"Ps 106:15-30",ch:106},pr:{ref:"Pr 23:24-27",ch:23},nt:{ref:"Heb 6",book:"HEB",ch:6}},
  // DAY 629
  {ot:{ref:"Is 63-66",book:"ISA",ch:63}},
  // DAY 630
  {ps:{ref:"Ps 106:31-43",ch:106},pr:{ref:"Pr 23:28-32",ch:23},nt:{ref:"Heb 7",book:"HEB",ch:7}},
  // DAY 631
  {ot:{ref:"Jer 1-3",book:"JER",ch:1}},
  // DAY 632
  {ps:{ref:"Ps 107",ch:107},pr:{ref:"Pr 23:33-36",ch:23},nt:{ref:"Heb 8",book:"HEB",ch:8}},
  // DAY 633
  {ot:{ref:"Jer 4-6",book:"JER",ch:4}},
  // DAY 634
  {ps:{ref:"Ps 108:1-20",ch:108},pr:{ref:"Pr 24:1-6",ch:24},nt:{ref:"Heb 9",book:"HEB",ch:9}},
  // DAY 635
  {ot:{ref:"Jer 7-9",book:"JER",ch:7}},
  // DAY 636
  {ps:{ref:"Ps 108:21-31",ch:108},pr:{ref:"Pr 24:7-12",ch:24},nt:{ref:"Heb 10:1-18",book:"HEB",ch:10}},
  // DAY 637
  {ot:{ref:"Jer 10-13",book:"JER",ch:10}},
  // DAY 638
  {ps:{ref:"Ps 109; 110",ch:109},pr:{ref:"Pr 24:13-18",ch:24},nt:{ref:"Heb 10:19-39",book:"HEB",ch:10}},
  // DAY 639
  {ot:{ref:"Jer 14-16",book:"JER",ch:14}},
  // DAY 640
  {ps:{ref:"Ps 111; 112",ch:111},pr:{ref:"Pr 24:19-23",ch:24},nt:{ref:"Heb 11:1-22",book:"HEB",ch:11}},
  // DAY 641
  {ot:{ref:"Jer 17-19",book:"JER",ch:17}},
  // DAY 642
  {ps:{ref:"Ps 113:1-11",ch:113},pr:{ref:"Pr 24:24-27",ch:24},nt:{ref:"Heb 11:23-40",book:"HEB",ch:11}},
  // DAY 643
  {ot:{ref:"Jer 20-22",book:"JER",ch:20}},
  // DAY 644
  {ps:{ref:"Ps 113:12-26",ch:113},pr:{ref:"Pr 24:29-34",ch:24},nt:{ref:"Heb 12:1-27",book:"HEB",ch:12}},
  // DAY 645
  {ot:{ref:"Jer 23-26",book:"JER",ch:23}},
  // DAY 646
  {ps:{ref:"Ps 114",ch:114},pr:{ref:"Pr 24:35-39",ch:24},nt:{ref:"Heb 12:28-13:25",book:"HEB",ch:12}},
  // DAY 647
  {ot:{ref:"Jer 27; 28",book:"JER",ch:27}},
  // DAY 648
  {ps:{ref:"Ps 115; 116",ch:115},pr:{ref:"Pr 25:1-5",ch:25},nt:{ref:"Jas 1",book:"JAS",ch:1}},
  // DAY 649
  {ot:{ref:"Jer 29-31",book:"JER",ch:29}},
  // DAY 650
  {ps:{ref:"Ps 117:1-16",ch:117},pr:{ref:"Pr 25:6-11",ch:25},nt:{ref:"Jas 2",book:"JAS",ch:2}},
  // DAY 651
  {ot:{ref:"Jer 32-35",book:"JER",ch:32}},
  // DAY 652
  {ps:{ref:"Ps 117:17-29",ch:117},pr:{ref:"Pr 25:12-16",ch:25},nt:{ref:"Jas 3",book:"JAS",ch:3}},
  // DAY 653
  {ot:{ref:"Jer 36-38",book:"JER",ch:36}},
  // DAY 654
  {ps:{ref:"Ps 118:1-16",ch:118},pr:{ref:"Pr 25:17-21",ch:25},nt:{ref:"Jas 4",book:"JAS",ch:4}},
  // DAY 655
  {ot:{ref:"Jer 39-41",book:"JER",ch:39}},
  // DAY 656
  {ps:{ref:"Ps 118:17-32",ch:118},pr:{ref:"Pr 25:22-26",ch:25},nt:{ref:"Jas 5",book:"JAS",ch:5}},
  // DAY 657
  {ot:{ref:"Jer 42-44",book:"JER",ch:42}},
  // DAY 658
  {ps:{ref:"Ps 118:33-48",ch:118},pr:{ref:"Pr 25:27-31",ch:25},nt:{ref:"1Pt 1",book:"1PE",ch:1}},
  // DAY 659
  {ot:{ref:"Jer 45-48",book:"JER",ch:45}},
  // DAY 660
  {ps:{ref:"Ps 118:49-64",ch:118},pr:{ref:"Pr 26:1-5",ch:26},nt:{ref:"1Pt 2",book:"1PE",ch:2}},
  // DAY 661
  {ot:{ref:"Jer 49-52",book:"JER",ch:49}},
  // DAY 662
  {ps:{ref:"Ps 118:65-80",ch:118},pr:{ref:"Pr 26:6-9",ch:26},nt:{ref:"1Pt 3",book:"1PE",ch:3}},
  // DAY 663
  {ot:{ref:"Bar 1; 2",book:"BAR",ch:1}},
  // DAY 664
  {ps:{ref:"Ps 118:81-96",ch:118},pr:{ref:"Pr 26:10-13",ch:26},nt:{ref:"1Pt 4",book:"1PE",ch:4}},
  // DAY 665
  {ot:{ref:"Bar 3-5",book:"BAR",ch:3}},
  // DAY 666
  {ps:{ref:"Ps 118:97-112",ch:118},pr:{ref:"Pr 26:14-17",ch:26},nt:{ref:"1Pt 5",book:"1PE",ch:5}},
  // DAY 667
  {ot:{ref:"EJer",book:"LJE",ch:1}},
  // DAY 668
  {ps:{ref:"Ps 118:113-128",ch:118},pr:{ref:"Pr 26:18-23",ch:26},nt:{ref:"2Pt 1",book:"2PE",ch:1}},
  // DAY 669
  {ot:{ref:"Lam 1",book:"LAM",ch:1}},
  // DAY 670
  {ps:{ref:"Ps 118:129-144",ch:118},pr:{ref:"Pr 26:24-29",ch:26},nt:{ref:"2Pt 2",book:"2PE",ch:2}},
  // DAY 671
  {ot:{ref:"Lam 2",book:"LAM",ch:2}},
  // DAY 672
  {ps:{ref:"Ps 118:145-160",ch:118},pr:{ref:"Pr 27:1-5",ch:27},nt:{ref:"2Pt 3",book:"2PE",ch:3}},
  // DAY 673
  {ot:{ref:"Lam 3",book:"LAM",ch:3}},
  // DAY 674
  {ps:{ref:"Ps 118:161-176",ch:118},pr:{ref:"Pr 27:6-10",ch:27},nt:{ref:"1Jn 1:1-2:1",book:"1JO",ch:1}},
  // DAY 675
  {ot:{ref:"Lam 4",book:"LAM",ch:4}},
  // DAY 676
  {ps:{ref:"Ps 119; 120",ch:119},pr:{ref:"Pr 27:11-15",ch:27},nt:{ref:"1Jn 2:2-27",book:"1JO",ch:2}},
  // DAY 677
  {ot:{ref:"Lam 5",book:"LAM",ch:5}},
  // DAY 678
  {ps:{ref:"Ps 121; 122",ch:121},pr:{ref:"Pr 27:16-20",ch:27},nt:{ref:"1Jn 2:28-3:24",book:"1JO",ch:2}},
  // DAY 679
  {ot:{ref:"Ezk 1-3",book:"EZK",ch:1}},
  // DAY 680
  {ps:{ref:"Ps 123; 124",ch:123},pr:{ref:"Pr 27:21-24",ch:27},nt:{ref:"1Jn 4:1-19",book:"1JO",ch:4}},
  // DAY 681
  {ot:{ref:"Ezk 4-7",book:"EZK",ch:4}},
  // DAY 682
  {ps:{ref:"Ps 125; 126",ch:125},pr:{ref:"Pr 27:25-29",ch:27},nt:{ref:"1Jn 4:20-5:21",book:"1JO",ch:4}},
  // DAY 683
  {ot:{ref:"Ezk 8-11",book:"EZK",ch:8}},
  // DAY 684
  {ps:{ref:"Ps 127; 128",ch:127},pr:{ref:"Pr 28:1-5",ch:28},nt:{ref:"2Jn",book:"???",ch:1}},
  // DAY 685
  {ot:{ref:"Ezk 12-14",book:"EZK",ch:12}},
  // DAY 686
  {ps:{ref:"Ps 129; 130",ch:129},pr:{ref:"Pr 28:6-11",ch:28},nt:{ref:"3Jn",book:"???",ch:1}},
  // DAY 687
  {ot:{ref:"Ezk 15; 16",book:"EZK",ch:15}},
  // DAY 688
  {ps:{ref:"Ps 131",ch:131},pr:{ref:"Pr 28:12-15",ch:28},nt:{ref:"Jud",book:"JUD",ch:1}},
  // DAY 689
  {ot:{ref:"Ezk 17-19",book:"EZK",ch:17}},
  // DAY 690
  {ps:{ref:"Ps 132; 133",ch:132},pr:{ref:"Pr 28:16-20",ch:28},nt:{ref:"Rev 1",book:"REV",ch:1}},
  // DAY 691
  {ot:{ref:"Ezk 20; 21",book:"EZK",ch:20}},
  // DAY 692
  {ps:{ref:"Ps 134:1-12",ch:134},pr:{ref:"Pr 28:21-25",ch:28},nt:{ref:"Rev 2",book:"REV",ch:2}},
  // DAY 693
  {ot:{ref:"Ezk 22; 23",book:"EZK",ch:22}},
  // DAY 694
  {ps:{ref:"Ps 134:13-21",ch:134},pr:{ref:"Pr 28:26-30",ch:28},nt:{ref:"Rev 3",book:"REV",ch:3}},
  // DAY 695
  {ot:{ref:"Ezk 24-26",book:"EZK",ch:24}},
  // DAY 696
  {ps:{ref:"Ps 135:1-15",ch:135},pr:{ref:"Pr 29:1-6",ch:29},nt:{ref:"Rev 4; 5",book:"REV",ch:4}},
  // DAY 697
  {ot:{ref:"Ezk 27-29",book:"EZK",ch:27}},
  // DAY 698
  {ps:{ref:"Ps 135:16-26",ch:135},pr:{ref:"Pr 29:7-12",ch:29},nt:{ref:"Rev 6",book:"REV",ch:6}},
  // DAY 699
  {ot:{ref:"Ezk 30-32",book:"EZK",ch:30}},
  // DAY 700
  {ps:{ref:"Ps 136; 137",ch:136},pr:{ref:"Pr 29:13-18",ch:29},nt:{ref:"Rev 7",book:"REV",ch:7}},
  // DAY 701
  {ot:{ref:"Ezk 33-35",book:"EZK",ch:33}},
  // DAY 702
  {ps:{ref:"Ps 138:1-12",ch:138},pr:{ref:"Pr 29:19-23",ch:29},nt:{ref:"Rev 8",book:"REV",ch:8}},
  // DAY 703
  {ot:{ref:"Ezk 36; 37",book:"EZK",ch:36}},
  // DAY 704
  {ps:{ref:"Ps 138:13-24",ch:138},pr:{ref:"Pr 29:24-28",ch:29},nt:{ref:"Rev 9",book:"REV",ch:9}},
  // DAY 705
  {ot:{ref:"Ezk 38:1-40:23",book:"EZK",ch:38}},
  // DAY 706
  {ps:{ref:"Ps 139",ch:139},pr:{ref:"Pr 30:1-5",ch:30},nt:{ref:"Rev 10",book:"REV",ch:10}},
  // DAY 707
  {ot:{ref:"Ezk 40:24-41:26",book:"EZK",ch:40}},
  // DAY 708
  {ps:{ref:"Ps 140",ch:140},pr:{ref:"Pr 30:6-10",ch:30},nt:{ref:"Rev 11",book:"REV",ch:11}},
  // DAY 709
  {ot:{ref:"Ezk 42; 43",book:"EZK",ch:42}},
  // DAY 710
  {ps:{ref:"Ps 141",ch:141},pr:{ref:"Pr 30:11-15",ch:30},nt:{ref:"Rev 12",book:"REV",ch:12}},
  // DAY 711
  {ot:{ref:"Ezk 44-46",book:"EZK",ch:44}},
  // DAY 712
  {ps:{ref:"Ps 142",ch:142},pr:{ref:"Pr 30:16-21",ch:30},nt:{ref:"Rev 13",book:"REV",ch:13}},
  // DAY 713
  {ot:{ref:"Ezk 47; 48",book:"EZK",ch:47}},
  // DAY 714
  {ps:{ref:"Ps 143",ch:143},pr:{ref:"Pr 30:22-25",ch:30},nt:{ref:"Rev 14",book:"REV",ch:14}},
  // DAY 715
  {ot:{ref:"Dan Sus 1-Dan 1:21",book:"DAN",ch:1}},
  // DAY 716
  {ps:{ref:"Ps 144:1-9",ch:144},pr:{ref:"Pr 30:26-30",ch:30},nt:{ref:"Rev 15:1-16:7",book:"REV",ch:15}},
  // DAY 717
  {ot:{ref:"Dan 2:1-3:24",book:"DAN",ch:2}},
  // DAY 718
  {ps:{ref:"Ps 144:10-21",ch:144},pr:{ref:"Pr 30:31-35",ch:30},nt:{ref:"Rev 16:8-21",book:"REV",ch:16}},
  // DAY 719
  {ot:{ref:"Dan 3:25-66",book:"DAN",ch:3}},
  // DAY 720
  {ps:{ref:"Ps 145",ch:145},pr:{ref:"Pr 31:1-5",ch:31},nt:{ref:"Rev 17",book:"REV",ch:17}},
  // DAY 721
  {ot:{ref:"Dan 3:67-4:18",book:"DAN",ch:3}},
  // DAY 722
  {ps:{ref:"Ps 146",ch:146},pr:{ref:"Pr 31:6-9",ch:31},nt:{ref:"Rev 18",book:"REV",ch:18}},
  // DAY 723
  {ot:{ref:"Dan 4:19-6:29",book:"DAN",ch:4}},
  // DAY 724
  {ps:{ref:"Ps 147",ch:147},pr:{ref:"Pr 31:10-15",ch:31},nt:{ref:"Rev 19",book:"REV",ch:19}},
  // DAY 725
  {ot:{ref:"Dan 7; 8",book:"DAN",ch:7}},
  // DAY 726
  {ps:{ref:"Ps 148",ch:148},pr:{ref:"Pr 31:16-20",ch:31},nt:{ref:"Rev 20",book:"REV",ch:20}},
  // DAY 727
  {ot:{ref:"Dan 9:1-11:28",book:"DAN",ch:9}},
  // DAY 728
  {ps:{ref:"Ps 149",ch:149},pr:{ref:"Pr 31:21-25",ch:31},nt:{ref:"Rev 21",book:"REV",ch:21}},
  // DAY 729
  {ot:{ref:"Dan 11:29-Bel 42",book:"DAN",ch:11}},
  // DAY 730
  {ps:{ref:"Ps 150; 151",ch:150},pr:{ref:"Pr 31:26-30",ch:31},nt:{ref:"Rev 22",book:"REV",ch:22}},
];

if (typeof module !== "undefined") module.exports = { PLAN_2YEAR };