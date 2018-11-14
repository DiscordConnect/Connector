{"filter":false,"title":"index.js","tooltip":"/index.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"remove","lines":["'"],"id":185}],[{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["\""],"id":186}],[{"start":{"row":19,"column":0},"end":{"row":33,"column":2},"action":"remove","lines":["connection.query(","  \"CREATE TABLE `reports` (                   \\","\t `id` serial NOT NULL DEFAULT '1',          \\","   `reporter` bigint,                         \\","   `category` TEXT,                           \\","\t `reason` TEXT,                             \\","\t `channelID` bigint,                        \\","\t `messageID` bigint,                        \\","\t `reportedUsers` bigint[],                  \\","\t `confirmations` bigint[],                  \\","\t CONSTRAINT reports_pk PRIMARY KEY (`id`)   \\","\t ) WITH (                                   \\","\t   OIDS=FALSE                               \\","\t );\"",");"],"id":187}],[{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"remove","lines":["",""],"id":188}],[{"start":{"row":19,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["/*","db.run(","  \"CREATE TABLE IF NOT EXISTS `reported_users` (        \\","  `reported_user` TEXT NOT NULL,                        \\","  `report_id`\tINTEGER UNIQUE,                           \\","\t`channel_id`\tTEXT,                                   \\","\t`message_id` TEXT );\"",");*/"],"id":189},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"remove","lines":["",""]},{"start":{"row":17,"column":26},"end":{"row":18,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":33},"action":"remove","lines":["require(\"./utils/db.js\")(client);"],"id":190},{"start":{"row":7,"column":36},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":1,"column":24},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":191},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["c"]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["o"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["n"]},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["s"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["t"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":[" "]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["d"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["b"]}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":[" "],"id":192},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["="]}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":[" "],"id":193},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["r"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["e"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["q"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["u"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["i"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["r"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":20},"action":"insert","lines":["()"],"id":194}],[{"start":{"row":2,"column":19},"end":{"row":2,"column":21},"action":"insert","lines":["''"],"id":195}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["/"],"id":196},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["."]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["."],"id":197},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"remove","lines":["/"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":21},"action":"remove","lines":["''"]}],[{"start":{"row":2,"column":19},"end":{"row":2,"column":21},"action":"insert","lines":["\"\""],"id":198}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["."],"id":199},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["/"]},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["u"]},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["t"]},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["i"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["l"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["s"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["/"]}],[{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["d"],"id":200},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["j"]}],[{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"remove","lines":["j"],"id":201}],[{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["b"],"id":202},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["."]},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"remove","lines":["s"],"id":203}],[{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["s"],"id":204}],[{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"remove","lines":["s"],"id":205}],[{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["j"],"id":206},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["s"]}],[{"start":{"row":29,"column":5},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":207},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"insert","lines":["  "]},{"start":{"row":30,"column":2},"end":{"row":30,"column":3},"action":"insert","lines":["d"]},{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":["b"]},{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["."]}],[{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["c"],"id":208},{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"insert","lines":["o"]},{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"insert","lines":["n"]},{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["n"]},{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["e"]},{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["c"]},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["t"]},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["I"]},{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":["O"]}],[{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"remove","lines":["O"],"id":209},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"remove","lines":["I"]}],[{"start":{"row":30,"column":12},"end":{"row":30,"column":14},"action":"insert","lines":["()"],"id":210}],[{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":[";"],"id":211}],[{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"remove","lines":[";"],"id":212},{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"remove","lines":[")"]},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"remove","lines":["("]}],[{"start":{"row":30,"column":12},"end":{"row":30,"column":14},"action":"insert","lines":["()"],"id":213}],[{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":[";"],"id":214}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["."],"id":215}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":28},"action":"remove","lines":["utils"],"id":222},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["u"]},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["t"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["i"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["l"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["."],"id":223}],[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":224},{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["c"]},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["l"]},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["i"]},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["e"]},{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"insert","lines":["n"]},{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"insert","lines":["t"]},{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":["."]},{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":["b"]},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["d"]}],[{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":[" "],"id":225},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["="]}],[{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":[" "],"id":226}],[{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"remove","lines":[" "],"id":227},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"remove","lines":["="]},{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"remove","lines":[" "]},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"remove","lines":["d"]},{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"remove","lines":["b"]}],[{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":["d"],"id":228},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["b"]}],[{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":[" "],"id":229},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["="]}],[{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":[" "],"id":230},{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"insert","lines":["d"]},{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"insert","lines":["b"]},{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":[";"]}],[{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"remove","lines":[";"],"id":231}],[{"start":{"row":31,"column":0},"end":{"row":32,"column":0},"action":"remove","lines":["  db.connect();",""],"id":232}],[{"start":{"row":46,"column":3},"end":{"row":47,"column":0},"action":"insert","lines":["",""],"id":233}],[{"start":{"row":47,"column":0},"end":{"row":48,"column":0},"action":"insert","lines":["  db.connect();",""],"id":234}],[{"start":{"row":47,"column":15},"end":{"row":48,"column":0},"action":"remove","lines":["",""],"id":235}],[{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"remove","lines":["  "],"id":236},{"start":{"row":46,"column":3},"end":{"row":47,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":46,"column":3},"end":{"row":47,"column":0},"action":"insert","lines":["",""],"id":237},{"start":{"row":47,"column":0},"end":{"row":48,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":1},"action":"insert","lines":["/"],"id":238},{"start":{"row":48,"column":1},"end":{"row":48,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":33,"column":39},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":239},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"insert","lines":["  "]},{"start":{"row":34,"column":2},"end":{"row":34,"column":3},"action":"insert","lines":["m"]},{"start":{"row":34,"column":3},"end":{"row":34,"column":4},"action":"insert","lines":["s"]},{"start":{"row":34,"column":4},"end":{"row":34,"column":5},"action":"insert","lines":["g"]},{"start":{"row":34,"column":5},"end":{"row":34,"column":6},"action":"insert","lines":["."]},{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"insert","lines":["c"]},{"start":{"row":34,"column":7},"end":{"row":34,"column":8},"action":"insert","lines":["h"]}],[{"start":{"row":34,"column":2},"end":{"row":34,"column":8},"action":"remove","lines":["msg.ch"],"id":240},{"start":{"row":34,"column":2},"end":{"row":34,"column":3},"action":"insert","lines":["c"]},{"start":{"row":34,"column":3},"end":{"row":34,"column":4},"action":"insert","lines":["o"]},{"start":{"row":34,"column":4},"end":{"row":34,"column":5},"action":"insert","lines":["n"]},{"start":{"row":34,"column":5},"end":{"row":34,"column":6},"action":"insert","lines":["s"]},{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"insert","lines":["o"]},{"start":{"row":34,"column":7},"end":{"row":34,"column":8},"action":"insert","lines":["l"]},{"start":{"row":34,"column":8},"end":{"row":34,"column":9},"action":"insert","lines":["e"]},{"start":{"row":34,"column":9},"end":{"row":34,"column":10},"action":"insert","lines":["."]},{"start":{"row":34,"column":10},"end":{"row":34,"column":11},"action":"insert","lines":["l"]},{"start":{"row":34,"column":11},"end":{"row":34,"column":12},"action":"insert","lines":["g"]}],[{"start":{"row":34,"column":11},"end":{"row":34,"column":12},"action":"remove","lines":["g"],"id":241}],[{"start":{"row":34,"column":11},"end":{"row":34,"column":12},"action":"insert","lines":["o"],"id":242},{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":["g"]}],[{"start":{"row":34,"column":13},"end":{"row":34,"column":15},"action":"insert","lines":["()"],"id":243}],[{"start":{"row":34,"column":14},"end":{"row":34,"column":16},"action":"insert","lines":["''"],"id":244}],[{"start":{"row":34,"column":15},"end":{"row":34,"column":16},"action":"insert","lines":["g"],"id":245},{"start":{"row":34,"column":16},"end":{"row":34,"column":17},"action":"insert","lines":["o"]},{"start":{"row":34,"column":17},"end":{"row":34,"column":18},"action":"insert","lines":["t"]}],[{"start":{"row":34,"column":18},"end":{"row":34,"column":19},"action":"insert","lines":[" "],"id":246},{"start":{"row":34,"column":19},"end":{"row":34,"column":20},"action":"insert","lines":["m"]},{"start":{"row":34,"column":20},"end":{"row":34,"column":21},"action":"insert","lines":["e"]},{"start":{"row":34,"column":21},"end":{"row":34,"column":22},"action":"insert","lines":["s"]},{"start":{"row":34,"column":22},"end":{"row":34,"column":23},"action":"insert","lines":["s"]},{"start":{"row":34,"column":23},"end":{"row":34,"column":24},"action":"insert","lines":["a"]},{"start":{"row":34,"column":24},"end":{"row":34,"column":25},"action":"insert","lines":["g"]},{"start":{"row":34,"column":25},"end":{"row":34,"column":26},"action":"insert","lines":["e"]}],[{"start":{"row":36,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["",""],"id":247}],[{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"insert","lines":["  "],"id":248}],[{"start":{"row":36,"column":2},"end":{"row":37,"column":0},"action":"insert","lines":["  console.log('got message')",""],"id":249}],[{"start":{"row":36,"column":30},"end":{"row":37,"column":0},"action":"remove","lines":["",""],"id":250}],[{"start":{"row":36,"column":17},"end":{"row":36,"column":28},"action":"remove","lines":["got message"],"id":251},{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"insert","lines":["a"]}],[{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"remove","lines":["a"],"id":252}],[{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"insert","lines":["h"],"id":253},{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"insert","lines":["a"]},{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["s"]}],[{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"insert","lines":[" "],"id":254},{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["p"]},{"start":{"row":36,"column":22},"end":{"row":36,"column":23},"action":"insert","lines":["r"]},{"start":{"row":36,"column":23},"end":{"row":36,"column":24},"action":"insert","lines":["e"]},{"start":{"row":36,"column":24},"end":{"row":36,"column":25},"action":"insert","lines":["f"]},{"start":{"row":36,"column":25},"end":{"row":36,"column":26},"action":"insert","lines":["i"]},{"start":{"row":36,"column":26},"end":{"row":36,"column":27},"action":"insert","lines":["x"]},{"start":{"row":36,"column":27},"end":{"row":36,"column":28},"action":"insert","lines":["."]}],[{"start":{"row":36,"column":2},"end":{"row":36,"column":4},"action":"remove","lines":["  "],"id":255}],[{"start":{"row":39,"column":30},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":256},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"insert","lines":["  "]},{"start":{"row":40,"column":2},"end":{"row":40,"column":3},"action":"insert","lines":["c"]},{"start":{"row":40,"column":3},"end":{"row":40,"column":4},"action":"insert","lines":["o"]},{"start":{"row":40,"column":4},"end":{"row":40,"column":5},"action":"insert","lines":["n"]},{"start":{"row":40,"column":5},"end":{"row":40,"column":6},"action":"insert","lines":["s"]},{"start":{"row":40,"column":6},"end":{"row":40,"column":7},"action":"insert","lines":["o"]},{"start":{"row":40,"column":7},"end":{"row":40,"column":8},"action":"insert","lines":["l"]},{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":["e"]},{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"insert","lines":["."]},{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["l"]},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["o"]},{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["g"]}],[{"start":{"row":40,"column":13},"end":{"row":40,"column":15},"action":"insert","lines":["()"],"id":257}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":["a"],"id":258},{"start":{"row":40,"column":15},"end":{"row":40,"column":16},"action":"insert","lines":["r"]},{"start":{"row":40,"column":16},"end":{"row":40,"column":17},"action":"insert","lines":["g"]},{"start":{"row":40,"column":17},"end":{"row":40,"column":18},"action":"insert","lines":["s"]}],[{"start":{"row":41,"column":45},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":259},{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "]},{"start":{"row":42,"column":2},"end":{"row":42,"column":3},"action":"insert","lines":["c"]},{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"insert","lines":["o"]},{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["s"]}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"remove","lines":["s"],"id":260}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["n"],"id":261},{"start":{"row":42,"column":5},"end":{"row":42,"column":6},"action":"insert","lines":["s"]},{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["o"]},{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"insert","lines":["l"]},{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["e"]},{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["."]},{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":["l"]},{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":["o"]},{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"insert","lines":["g"]}],[{"start":{"row":42,"column":13},"end":{"row":42,"column":15},"action":"insert","lines":["()"],"id":262}],[{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"insert","lines":["c"],"id":263},{"start":{"row":42,"column":15},"end":{"row":42,"column":16},"action":"insert","lines":["o"]},{"start":{"row":42,"column":16},"end":{"row":42,"column":17},"action":"insert","lines":["m"]},{"start":{"row":42,"column":17},"end":{"row":42,"column":18},"action":"insert","lines":["m"]},{"start":{"row":42,"column":18},"end":{"row":42,"column":19},"action":"insert","lines":["a"]},{"start":{"row":42,"column":19},"end":{"row":42,"column":20},"action":"insert","lines":["n"]},{"start":{"row":42,"column":20},"end":{"row":42,"column":21},"action":"insert","lines":["d"]}],[{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"remove","lines":["  console.log('got message')",""],"id":264}],[{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"remove","lines":["  console.log('has prefix.')",""],"id":265}],[{"start":{"row":38,"column":13},"end":{"row":38,"column":19},"action":"remove","lines":["(args)"],"id":266}],[{"start":{"row":38,"column":2},"end":{"row":38,"column":13},"action":"remove","lines":["console.log"],"id":267},{"start":{"row":38,"column":0},"end":{"row":38,"column":2},"action":"remove","lines":["  "]},{"start":{"row":37,"column":30},"end":{"row":38,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":39,"column":2},"end":{"row":39,"column":22},"action":"remove","lines":["console.log(command)"],"id":268},{"start":{"row":39,"column":0},"end":{"row":39,"column":2},"action":"remove","lines":["  "]},{"start":{"row":38,"column":45},"end":{"row":39,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":33,"column":39},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":269},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"insert","lines":["  "]},{"start":{"row":34,"column":2},"end":{"row":35,"column":0},"action":"insert","lines":["",""]},{"start":{"row":35,"column":0},"end":{"row":35,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":35,"column":2},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":271},{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":35,"column":2},"end":{"row":38,"column":61},"action":"insert","lines":["  var args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g)","  var command = args.shift().toLowerCase()","","  if (msg.content.indexOf(client.config.prefix) !== 0) return"],"id":272}],[{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"remove","lines":["    var args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g)",""],"id":273}],[{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"remove","lines":["  var args = message.content.substring(config.prefix.length).split(/ +/g)",""],"id":274},{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"insert","lines":["    var args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g)",""]}],[{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"remove","lines":["  var command = args.shift().toLowerCase()",""],"id":275}],[{"start":{"row":42,"column":0},"end":{"row":43,"column":0},"action":"remove","lines":["  var command = message.args[0].toLowerCase()",""],"id":276},{"start":{"row":42,"column":0},"end":{"row":43,"column":0},"action":"insert","lines":["  var command = args.shift().toLowerCase()",""]}],[{"start":{"row":40,"column":2},"end":{"row":40,"column":4},"action":"remove","lines":["  "],"id":277}],[{"start":{"row":41,"column":21},"end":{"row":41,"column":29},"action":"remove","lines":[".shift()"],"id":278}],[{"start":{"row":38,"column":0},"end":{"row":39,"column":0},"action":"remove","lines":["  if (!message.content.startsWith(config.prefix)) return",""],"id":279},{"start":{"row":37,"column":2},"end":{"row":38,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"remove","lines":["  "],"id":280},{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"remove","lines":["",""]},{"start":{"row":34,"column":2},"end":{"row":35,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":34,"column":6},"end":{"row":34,"column":9},"action":"remove","lines":["msg"],"id":281},{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"insert","lines":["m"]},{"start":{"row":34,"column":7},"end":{"row":34,"column":8},"action":"insert","lines":["e"]},{"start":{"row":34,"column":8},"end":{"row":34,"column":9},"action":"insert","lines":["s"]},{"start":{"row":34,"column":9},"end":{"row":34,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":34,"column":6},"end":{"row":34,"column":10},"action":"remove","lines":["mess"],"id":282},{"start":{"row":34,"column":6},"end":{"row":34,"column":13},"action":"insert","lines":["message"]}],[{"start":{"row":36,"column":13},"end":{"row":36,"column":16},"action":"remove","lines":["msg"],"id":283},{"start":{"row":36,"column":13},"end":{"row":36,"column":20},"action":"insert","lines":["message"]}],[{"start":{"row":33,"column":39},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":284},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":34,"column":2},"end":{"row":35,"column":0},"action":"insert","lines":["  if (msg.author.bot) return",""],"id":285}],[{"start":{"row":34,"column":2},"end":{"row":34,"column":4},"action":"remove","lines":["  "],"id":286}],[{"start":{"row":34,"column":6},"end":{"row":34,"column":9},"action":"remove","lines":["msg"],"id":287},{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"insert","lines":["m"]},{"start":{"row":34,"column":7},"end":{"row":34,"column":8},"action":"insert","lines":["e"]},{"start":{"row":34,"column":8},"end":{"row":34,"column":9},"action":"insert","lines":["s"]},{"start":{"row":34,"column":9},"end":{"row":34,"column":10},"action":"insert","lines":["s"]},{"start":{"row":34,"column":10},"end":{"row":34,"column":11},"action":"insert","lines":["a"]},{"start":{"row":34,"column":11},"end":{"row":34,"column":12},"action":"insert","lines":["g"]},{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":["e"]}],[{"start":{"row":39,"column":21},"end":{"row":39,"column":22},"action":"remove","lines":[";"],"id":288}],[{"start":{"row":36,"column":30},"end":{"row":36,"column":36},"action":"remove","lines":["client"],"id":289}],[{"start":{"row":36,"column":30},"end":{"row":36,"column":31},"action":"remove","lines":["."],"id":290}],[{"start":{"row":38,"column":35},"end":{"row":38,"column":42},"action":"remove","lines":["client."],"id":291}],[{"start":{"row":50,"column":1},"end":{"row":50,"column":2},"action":"remove","lines":["/"],"id":292},{"start":{"row":50,"column":0},"end":{"row":50,"column":1},"action":"remove","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":23},"end":{"row":5,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":22,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1541788532374,"hash":"3577cc19ef8a23a644829d45de5983a8d21a7da3"}