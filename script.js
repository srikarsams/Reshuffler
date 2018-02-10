
alert("Welcome to the TRX Reshuffling Tool! Click OK when you're ready!\n After providing all the inputs, please press 'CTRL+SHIFT+I' and copy the output!");
//Input prompt for siteId

var siteId = Number(prompt("Please enter the Site ID:"));

//Input prompt for TRX config

var trx900 = prompt("Please enter the TRX config. of G900:");
var trx1800 = prompt("Please enter the TRX config. of G1800:");

var TRX900 = [];
var TRX1800 = [];

for (var i = 0;i < trx900.length;i++) {
	TRX900[i] = Number(trx900[i]);
}

for (var i = 0;i < trx1800.length;i++) {
	TRX1800[i] = Number(trx1800[i]);
}

//Input prompt for TG's

var numOfTg = Number(prompt("Please enter the number of DUGS installed onsite:"));

var tgId = [];

for (var i = 0;i < numOfTg;i++){
	tgId[i] = Number(prompt("Please enter the TG" +i +" :"));
}

//Deciding the post TRX config.

var combinedTrx = [];
var count = 0;


for (var i = 0;i < TRX900.length;i++){
	combinedTrx[i] = TRX900[i] + TRX1800[i];
	count += combinedTrx[i];
}

var numOfPtg = 0;

if (count <=12){
	numOfPtg = 1;
} else if(count <= 24){
	if (((combinedTrx[0] + combinedTrx[1]) <= 12) || ((combinedTrx[0] + combinedTrx[2]) <= 12) || ((combinedTrx[1] + combinedTrx[2]) <= 12)) {
		numOfPtg = 2;
	} else{
		numOfPtg = 3;
	}
}

//Get the confirmation for Post-config.
var scenario = 0;
console.log("Please find the Post-config below for the site " + siteId + " :" );
console.log("\n");
if (numOfPtg === 1){
	scenario = 1;
	var dug1Trx = [TRX900,TRX1800];
	console.log("DUG1" + "[" + tgId[0] + "] :" + "G900[" + TRX900[0] + "|" + TRX900[1] + "|"  + TRX900[2] + "] " + "G1800[" + TRX1800[0] + "|" + TRX1800[1] + "|"  + TRX1800[2] + "]: ");
	console.log("=================");
} else if(numOfPtg === 2){
	if((combinedTrx[0] + combinedTrx[1]) <= 12){
		scenario = 2;
		var dug1Trx = [[TRX900[0],TRX900[1]],[TRX1800[0],TRX1800[1]]];
		var dug2Trx = [[TRX900[2]],[TRX1800[2]]];
		console.log("DUG1" + "[" + tgId[0] + "] :" + "G900[" + TRX900[0] + "|" + TRX900[1] + "] " + "G1800[" + TRX1800[0] + "|" + TRX1800[1] + "]: ");
		console.log("DUG2" + "[" + tgId[1] + "] :" + "G900[" + TRX900[2] + "] " + "G1800[" + TRX1800[2] + "]: ");
		console.log("=================");
	}else if((combinedTrx[0] + combinedTrx[2]) <= 12) {
		scenario = 3;
		var dug1Trx = [[TRX900[0],TRX900[2]],[TRX1800[0],TRX1800[2]]];
		var dug2Trx = [[TRX900[1]],[TRX1800[1]]];
		console.log("DUG1" + "[" + tgId[0] + "] :" + "G900[" + TRX900[0] + "|" + TRX900[2] + "] " + "G1800[" + TRX1800[0] + "|" + TRX1800[2] + "]: ");
		console.log("DUG2" + "[" + tgId[1] + "] :" + "G900[" + TRX900[1] + "] " + "G1800[" + TRX1800[1] + "]: ");
		console.log("=================");
	}else{
		scenario = 4;
		var dug1Trx = [[TRX900[1],TRX900[2]],[TRX1800[1],TRX1800[2]]];
		var dug2Trx = [[TRX900[0]],[TRX1800[0]]];		
		console.log("DUG1" + "[" + tgId[0] + "] :" + "G900[" + TRX900[1] + "|" + TRX900[2] + "] " + "G1800[" + TRX1800[1] + "|" + TRX1800[2] + "]: ");
		console.log("DUG2" + "[" + tgId[1] + "] :" + "G900[" + TRX900[0] + "] " + "G1800[" + TRX1800[0] + "]: ");
		console.log("=================");	
	}	
}else{
	scenario = 5;
	var dug1Trx = [[TRX900[0]],[TRX1800[0]]];
	var dug2Trx = [[TRX900[1]],[TRX1800[1]]];
	var dug3Trx = [[TRX900[2]],[TRX1800[2]]];
	console.log("DUG1" + "[" + tgId[0] + "] :" + "G900[" + TRX900[0] + "] " + "G1800[" + TRX1800[0] + "]: ");
	console.log("DUG2" + "[" + tgId[1] + "] :" + "G900[" + TRX900[1] + "] " + "G1800[" + TRX1800[1] + "]: ");
	console.log("DUG3" + "[" + tgId[2] + "] :" + "G900[" + TRX900[2] + "] " + "G1800[" + TRX1800[2] + "]: "); 
	console.log("=================");
}

var trxa = [];

if (dug1Trx.length > 0){
	for(var i =0;i < dug1Trx.length;i++){
		for(var j = 0;j < dug1Trx[i].length;j++){
			trxa.push(dug1Trx[i][j]);
		}
	}	
}

if(numOfPtg >= 2 ){
	var trxb = [];
	if (dug2Trx.length > 0){
		for(var i =0;i < dug2Trx.length;i++){
			for(var j = 0;j < dug2Trx[i].length;j++){
				trxb.push(dug2Trx[i][j]);
			}
		}	
	}
}

if(numOfPtg >= 3){
	var trxc = [];
	if (dug3Trx.length > 0){
		for(var i =0;i < dug3Trx.length;i++){
			for(var j = 0;j < dug3Trx[i].length;j++){
				trxc.push(dug3Trx[i][j]);
			}
		}	
	}
}

if(scenario === 1){
	var tx = [];
	var cell = [];
	var band = [];
	var ant = [];
	var count1=0;
	var count2=0;
	var mctri = [];
	for (var i=0;i < trxa.length;i++){
		for (var z = 0;z < trxa[i];z++){
			mctri.push(i);
		}
	}
	for (var i = 0;i < (trxa.length / 2);i++){
		count1 += trxa[i];
	}
	for (var i = (trxa.length / 2);i < trxa.length;i++){
		count2 += trxa[i];
	}
	for(var i =0;i < (count1 + count2);i++){
		tx.push(i);
	}
	for(var i = 0;i < trxa.length;i++){
		if(i < trxa.length/2){
			for(var j = 0;j < trxa[i];j++){
				band.push("900");
				ant.push("1");
			}
		}else{
			for(var k = 0;k < trxa[i];k++){
				band.push("1800");
				ant.push("2");
		}
		}
	}
	for(var i =0;i < trxa.length;i++){
		if(i === 0 || i === 3){
			for(var j=0;j < trxa[i];j++){
				cell.push("A");
			}
		}
		if(i === 1 || i === 4){
			for(var j=0;j < trxa[i];j++){
				cell.push("B");
			}
		}
		if(i === 2 || i === 5){
			for(var j=0;j < trxa[i];j++){
				cell.push("C");
			}
		}
	}
}

if (scenario === 2){
	var tx = [];
	var cell = [];
	var band = [];
	var ant = [];
	var count1=0;
	var count2=0;
	var mctri = [];
	for (var i=0;i < trxa.length;i++){
		for (var z = 0;z < trxa[i];z++){
			mctri.push(i);
		}
	}
	for (var i = 0;i < (trxa.length / 2);i++){
		count1 += trxa[i];
	}
	for (var i = (trxa.length / 2);i < trxa.length;i++){
		count2 += trxa[i];
	}
	for(var i =0;i < (count1 + count2);i++){
		tx.push(i);
	}
	for(var i = 0;i < trxa.length;i++){
		if(i < trxa.length/2){
			for(var j = 0;j < trxa[i];j++){
				band.push("900");
				ant.push("1");
			}
		}else{
			for(var k = 0;k < trxa[i];k++){
				band.push("1800");
				ant.push("2");
		}
		}
	}
	for(var i =0;i < trxa.length;i++){
		if(i === 0 || i === 2){
			for(var j=0;j < trxa[i];j++){
				cell.push("A");
			}
		}
		if(i === 1 || i === 3){
			for(var j=0;j < trxa[i];j++){
				cell.push("B");
			}
		}
	}
	var tx_b = [];
	var cell_b = [];
	var band_b = [];
	var ant_b = [];
	var count1_b=0;
	var count2_b=0;
	var mctri_b = [];
	for (var i=0;i < trxb.length;i++){
		for (var z = 0;z < trxb[i];z++){
			mctri_b.push(i);
		}
	}
	for (var i = 0;i < (trxb.length / 2);i++){
		count1_b += trxb[i];
	}
	for (var i = (trxb.length / 2);i < trxb.length;i++){
		count2_b += trxb[i];
	}
	for(var i =0;i < (count1_b + count2_b);i++){
		tx_b.push(i);
	}
	for(var i = 0;i < trxb.length;i++){
		if(i < trxb.length/2){
			for(var j = 0;j < trxb[i];j++){
				band_b.push("900");
				ant_b.push("1");
			}
		}else{
			for(var k = 0;k < trxb[i];k++){
				band_b.push("1800");
				ant_b.push("2");
		}
		}
	}
	for(var i =0;i < trxb.length;i++){
			for(var j=0;j < trxb[i];j++){
				cell_b.push("C");
		}
	}	

}

if (scenario === 3){
	var tx = [];
	var cell = [];
	var band = [];
	var ant = [];
	var count1=0;
	var count2=0;
	var mctri = [];
	for (var i=0;i < trxa.length;i++){
		for (var z = 0;z < trxa[i];z++){
			mctri.push(i);
		}
	}
	for (var i = 0;i < (trxa.length / 2);i++){
		count1 += trxa[i];
	}
	for (var i = (trxa.length / 2);i < trxa.length;i++){
		count2 += trxa[i];
	}
	for(var i =0;i < (count1 + count2);i++){
		tx.push(i);
	}
	for(var i = 0;i < trxa.length;i++){
		if(i < trxa.length/2){
			for(var j = 0;j < trxa[i];j++){
				band.push("900");
				ant.push("1");
			}
		}else{
			for(var k = 0;k < trxa[i];k++){
				band.push("1800");
				ant.push("2");
		}
		}
	}
	for(var i =0;i < trxa.length;i++){
		if(i === 0 || i === 2){
			for(var j=0;j < trxa[i];j++){
				cell.push("A");
			}
		}
		if(i === 1 || i === 3){
			for(var j=0;j < trxa[i];j++){
				cell.push("C");
			}
		}
	}
	var tx_b = [];
	var cell_b = [];
	var band_b = [];
	var ant_b = [];
	var count1_b=0;
	var count2_b=0;
	var mctri_b = [];
	for (var i=0;i < trxb.length;i++){
		for (var z = 0;z < trxb[i];z++){
			mctri_b.push(i);
		}
	}
	for (var i = 0;i < (trxb.length / 2);i++){
		count1_b += trxb[i];
	}
	for (var i = (trxb.length / 2);i < trxb.length;i++){
		count2_b += trxb[i];
	}
	for(var i =0;i < (count1_b + count2_b);i++){
		tx_b.push(i);
	}
	for(var i = 0;i < trxb.length;i++){
		if(i < trxb.length/2){
			for(var j = 0;j < trxb[i];j++){
				band_b.push("900");
				ant_b.push("1");
			}
		}else{
			for(var k = 0;k < trxb[i];k++){
				band_b.push("1800");
				ant_b.push("2");
		}
		}
	}
	for(var i =0;i < trxb.length;i++){
			for(var j=0;j < trxb[i];j++){
				cell_b.push("B");
		}
	}	

}

if (scenario === 4){
	var tx = [];
	var cell = [];
	var band = [];
	var ant = [];
	var count1=0;
	var count2=0;
	var mctri = [];
	for (var i=0;i < trxa.length;i++){
		for (var z = 0;z < trxa[i];z++){
			mctri.push(i);
		}
	}
	for (var i = 0;i < (trxa.length / 2);i++){
		count1 += trxa[i];
	}
	for (var i = (trxa.length / 2);i < trxa.length;i++){
		count2 += trxa[i];
	}
	for(var i =0;i < (count1 + count2);i++){
		tx.push(i);
	}
	for(var i = 0;i < trxa.length;i++){
		if(i < trxa.length/2){
			for(var j = 0;j < trxa[i];j++){
				band.push("900");
				ant.push("1");
			}
		}else{
			for(var k = 0;k < trxa[i];k++){
				band.push("1800");
				ant.push("2");
		}
		}
	}
	for(var i =0;i < trxa.length;i++){
		if(i === 0 || i === 2){
			for(var j=0;j < trxa[i];j++){
				cell.push("B");
			}
		}
		if(i === 1 || i === 3){
			for(var j=0;j < trxa[i];j++){
				cell.push("C");
			}
		}
	}
	var tx_b = [];
	var cell_b = [];
	var band_b = [];
	var ant_b = [];
	var count1_b=0;
	var count2_b=0;
	var mctri_b = [];
	for (var i=0;i < trxb.length;i++){
		for (var z = 0;z < trxb[i];z++){
			mctri_b.push(i);
		}
	}
	for (var i = 0;i < (trxb.length / 2);i++){
		count1_b += trxb[i];
	}
	for (var i = (trxb.length / 2);i < trxb.length;i++){
		count2_b += trxb[i];
	}
	for(var i =0;i < (count1_b + count2_b);i++){
		tx_b.push(i);
	}
	for(var i = 0;i < trxb.length;i++){
		if(i < trxb.length/2){
			for(var j = 0;j < trxb[i];j++){
				band_b.push("900");
				ant_b.push("1");
			}
		}else{
			for(var k = 0;k < trxb[i];k++){
				band_b.push("1800");
				ant_b.push("2");
		}
		}
	}
	for(var i =0;i < trxb.length;i++){
			for(var j=0;j < trxb[i];j++){
				cell_b.push("A");
		}
	}	

}



// Generating the Deletion script.
console.log("\n");
console.log("DELETION SCRIPT: ");
console.log("====================");
function deleteTg(tgNum) {
	console.log("RXMOP:MO=RXOTG-"+tgNum+",subord;");
	console.log("rxbli:mo=rxotg-"+tgNum+",subord,force;");
	console.log("rxese:mo=rxotg-"+tgNum+",subord;");
	for(var i=0;i <12;i++){
		console.log("RXMOC:MO=RXOTRX-"+tgNum+"-"+i+",MCTRI=undef;");
	}
	for(var i=0;i <5;i++){
		console.log("RXMOe:MO=RXOMCTR-"+tgNum+"-"+i+";");
	}
	for(var i=0;i <12;i++){
		console.log("RXMOE:MO=RXOTS-"+tgNum+"-"+i+"-0&&-7;");
	}
	for(var i=0;i <12;i++){
		console.log("RXMOE:MO=RXORX-"+tgNum+"-"+i+";");
	}
	for(var i=0;i <12;i++){
		console.log("RXMOE:MO=RXOTX-"+tgNum+"-"+i+";");
	}
	for(var i=0;i <12;i++){
		console.log("RXMOE:MO=RXOTRX-"+tgNum+"-"+i+";");
	}
	console.log("rxcdp:mo=rxotg-"+tgNum+";");
}

for(var i = 0;i < tgId.length;i++){
	console.log("\n");
	console.log("!!Deletion script for " + tgId[i] + ":");
	console.log("\n");
	deleteTg(tgId[i]);
}

console.log("\n");
console.log("!!End of Deletion Script.");

//Finding Total TRX per DUG

console.log("\n");
var totalTrx = [0,0,0];

if(1 <= numOfPtg){
	for(var i =0;i < dug1Trx.length;i++){
		for(var j = 0;j < dug1Trx[i].length;j++){
			totalTrx[0]+=dug1Trx[i][j];
		}
	}
}

if(2 <= numOfPtg){
	for(var i =0;i < dug2Trx.length;i++){
		for(var j = 0;j < dug2Trx[i].length;j++){
			totalTrx[1]+=dug2Trx[i][j];
		}
	}
}

if(3 <= numOfPtg){
	for(var i =0;i < dug3Trx.length;i++){
		for(var j = 0;j < dug3Trx[i].length;j++){
			totalTrx[2]+=dug3Trx[i][j];
		}
	}
}


//TRX initiation

function trxInit(tgNum,num){
	if(1 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-0,TEI=0,DCP1=178,DCP2=179&&186,SIG=scconc,sc=0;");
	}
	if(2 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-1,TEI=1,DCP1=187,DCP2=188&&195,SIG=scconc,sc=1;");
	}
	if(3 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-2,TEI=2,DCP1=196,DCP2=197&&204,SIG=scconc,sc=2;");
	}
	if(4 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-3,TEI=3,DCP1=205,DCP2=206&&213,SIG=scconc,sc=3;");
	}
	if(5 <= num){	
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-4,TEI=4,DCP1=214,DCP2=215&&222,SIG=scconc,sc=0;");
	}
	if(6 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-5,TEI=5,DCP1=223,DCP2=224&&231,SIG=scconc,sc=1;");
	}
	if(7 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-6,TEI=6,DCP1=232,DCP2=233&&240,SIG=scconc,sc=2;");
	}
	if(8 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-7,TEI=7,DCP1=241,DCP2=242&&249,SIG=scconc,sc=3;");
	}
	if(9 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-8,TEI=8,DCP1=250,DCP2=251&&258,SIG=scconc,sc=0;");
	}
	if(10 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-9,TEI=9,DCP1=259,DCP2=260&&267,SIG=scconc,sc=1;");
	}
	if(11 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-10,TEI=10,DCP1=268,DCP2=269&&276,SIG=scconc,sc=2;");
	}
	if(12 <= num){
		console.log("rxmoi:mo=rxotrx-" + tgNum + "-11,TEI=11,DCP1=277,DCP2=278&&285,SIG=scconc,sc=3;");
	}
}

function trxCell(tgNum){
	if (tgNum === tgId[0]){
		for(var i = 0;i < (count1 + count2);i++){
			console.log("RXMOC:MO=RXOTRX-"+tgNum+"-" +tx[i]+",CELL="+siteId+cell[i]+";");
		}
	}else if(tgNum === tgId[1]){
		for(var i = 0;i < (count1_b + count2_b);i++){
			console.log("RXMOC:MO=RXOTRX-"+tgNum+"-" +tx_b[i]+",CELL="+siteId+cell_b[i]+";");
		}
	}else{

	}
}

function trxBand(tgNum){
	if (tgNum === tgId[0]){
		for(var i = 0;i < (count1 + count2);i++){
			console.log("RXMOI:MO=RXOTX-"+tgNum+"-"+tx[i]+",BAND=GSM"+band[i]+",MPWR=40;");
		}
	}else if(tgNum === tgId[1]){
		for(var i = 0;i < (count1_b + count2_b);i++){
			console.log("RXMOI:MO=RXOTX-"+tgNum+"-"+tx_b[i]+",BAND=GSM"+band_b[i]+",MPWR=40;");
		}
	}else{

	}	
}

function trxAntenna(tgNum){
	if (tgNum === tgId[0]){
		for(var i = 0;i < (count1 + count2);i++){
			console.log("RXMOC:MO=RXOTX-"+tgNum+"-"+tx[i]+",ANT="+siteId+cell[i]+ant[i]+",CELL="+siteId+cell[i]+";");
		}
	}else if(tgNum === tgId[1]){
		for(var i = 0;i < (count1_b + count2_b);i++){
			console.log("RXMOC:MO=RXOTX-"+tgNum+"-"+tx_b[i]+",ANT="+siteId+cell_b[i]+ant_b[i]+",CELL="+siteId+cell_b[i]+";");
		}
	}else{

	}
}

function trxRfBranch(tgNum){
	if (tgNum === tgId[0]){
		for(var i = 0;i < (count1 + count2);i++){
			console.log("RXMOI:MO=RXORX-"+tgNum+"-"+tx[i]+",BAND=GSM"+band[i]+",RXD=AB;");
		}
	}else if(tgNum === tgId[1]){
		for(var i = 0;i < (count1_b + count2_b);i++){
			console.log("RXMOI:MO=RXORX-"+tgNum+"-"+tx_b[i]+",BAND=GSM"+band_b[i]+",RXD=AB;");
		}
	}else{

	}
}

function trxTs(tgNum){
	if (tgNum === tgId[0]){
		for(var i = 0;i < (count1 + count2);i++){
			console.log("RXMOI:MO=RXOTS-"+tgNum+"-"+tx[i]+"-0&&-7;");
		}
	}else if(tgNum === tgId[1]){
		for(var i = 0;i < (count1_b + count2_b);i++){
			console.log("RXMOI:MO=RXOTS-"+tgNum+"-"+tx_b[i]+"-0&&-7;");
		}
	}else{

	}
}

function trxMctr(tgNum){
	if (tgNum === tgId[0]){
		for(var i = 0;i < trxa.length;i++){
			if(trxa[i] > 0){
				console.log("RXMOi:MO=RXOMCTR-"+tgNum+"-"+tx[i]+",MAXPWR=48,MAXTRX="+trxa[i]+";");
			}
		}
	}else if(tgNum === tgId[1]){
		for(var i = 0;i < trxb.length;i++){
			if(trxb[i] > 0){
				console.log("RXMOi:MO=RXOMCTR-"+tgNum+"-"+tx_b[i]+",MAXPWR=48,MAXTRX="+trxb[i]+";");
			}
		}
	}else{

	}	
}

function trxMixed(tgNum){
	if (tgNum === tgId[0]){
		for(var i = 0;i < trxa.length;i++){
			if(trxa[i] > 0){
				console.log("RXMOC:MO=RXOMCTR-"+tgNum+"-"+tx[i]+",MIXEDMODE=ON;");
			}
		}		
	}else if(tgNum === tgId[1]){
		for(var i = 0;i < trxb.length;i++){
			if(trxb[i] > 0){
				console.log("RXMOC:MO=RXOMCTR-"+tgNum+"-"+tx_b[i]+",MIXEDMODE=ON;");
			}
		}
	}else{

	}
}

function trxMctri(tgNum){
	if (tgNum === tgId[0]){
		for(var i = 0;i < (count1 + count2);i++){
			console.log("RXMOC:MO=RXOTRX-"+tgNum+"-"+tx[i]+",MCTRI="+mctri[i]+";");
		}	
	}else if(tgNum === tgId[1]){
		for(var i = 0;i < (count1_b + count2_b);i++){
			console.log("RXMOC:MO=RXOTRX-"+tgNum+"-"+tx_b[i]+",MCTRI="+mctri_b[i]+";");
		}
	}else{

	}
}

function trxNodeg(tgNum){
	console.log("rxmoc:mo=rxotg-"+tgNum+",CLUSTERID=undef;");
	console.log("RXMOC:MO=RXOTF-"+tgNum+",TFMODE=SA,FSOFFSET=0,SYNCSRC=DEFAULT;");
	console.log("rxesi:mo=rxotg-"+tgNum+",subord;");
	console.log("rxble:mo=rxotg-"+tgNum+",subord;")	
}

for(var i =0;i < numOfPtg;i++){
	console.log("Script for TG " + tgId[i] + " :");
	console.log("\n");
	trxInit(tgId[i],totalTrx[i]);
	console.log("\n");
	trxCell(tgId[i]);
	console.log("\n");
	trxBand(tgId[i]);
	console.log("\n");
	trxAntenna(tgId[i]);
	console.log("\n");
	trxRfBranch(tgId[i]);
	console.log("\n");
	trxTs(tgId[i]);
	console.log("\n");
	trxMctr(tgId[i]);
	console.log("\n");
	trxMixed(tgId[i]);
	console.log("\n");
	trxMctri(tgId[i]);
	console.log("\n");
	trxNodeg(tgId[i]);
	console.log("\n");
}

alert("Script generated! After pressing OK, pls press 'CTRL+SHIFT+I', then select the 'Console' tab and copy the output!\n If any errors found, please let me know!");