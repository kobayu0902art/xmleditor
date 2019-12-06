function idisname(){
	if (document.getElementById("idname").checked == true){
	document.getElementById("npid").value = document.getElementById("sozname").value;
	document.getElementById("nsid").value = document.getElementById("sozname").value;
	}
}

function filename(){
	if (document.getElementById("filenameflag").checked == true){
	document.getElementById("filename").value = document.getElementById("sozname").value;
	s = "output/"
	document.getElementById("outputpath").value = s+String(document.getElementById("filename").value)+".dat";
	}
}
function changename(){
	s = "output/"
	document.getElementById("outputpath").value = s+String(document.getElementById("filename").value)+".dat";
}

function idequal(){
	document.getElementById("nsid").value = document.getElementById("npid").value;
}




function xmlload(){
	let s = document.getElementById("input").value;
	eel.pyxmlload(s);
	
	eel.expose(loaddisp)
	function loaddisp(mediacode,pagecode,publishdate,npid,text,numofupdate,sozname,group,nsid){
		document.getElementById("mediacode").value = mediacode;
		document.getElementById("pagecode").value = pagecode;
		document.getElementById("publishdate").value = publishdate;
		document.getElementById("group").value = group;
		document.getElementById("sozname").value = sozname;
		document.getElementById("npid").value = npid;
		document.getElementById("nsid").value = nsid;
		document.getElementById("numofupdate").value = numofupdate;
		document.getElementById("text").value = text;
		
		document.getElementById("mediacodedisp").innerHTML = mediacode;
		document.getElementById("pagecodedisp").innerHTML = pagecode;
		document.getElementById("publishdatedisp").innerHTML = publishdate;
		document.getElementById("groupdisp").innerHTML = group;
		document.getElementById("soznamedisp").innerHTML = sozname;
		document.getElementById("npiddisp").innerHTML = npid;
		document.getElementById("nsiddisp").innerHTML = nsid;
		document.getElementById("numofupdatedisp").innerHTML = numofupdate;
		document.getElementById("textdisp").innerHTML = text;
	}
}

function xmledit(){
	let s = document.getElementById("input").value;
	mediacode = document.getElementById("mediacode").value;
	pagecode = document.getElementById("pagecode").value;
	publishdate = document.getElementById("publishdate").value;
	group = document.getElementById("group").value;
	sozname = document.getElementById("sozname").value;
	npid = document.getElementById("npid").value;
	nsid = document.getElementById("nsid").value;
	numofupdate = document.getElementById("numofupdate").value;
	text = document.getElementById("text").value;
	outputpath = document.getElementById("outputpath").value;
	eel.pyxmledit(s,outputpath,mediacode,pagecode,publishdate,npid,text,numofupdate,sozname,group,nsid);
}

function plus(){
	numofupdate = Number(document.getElementById("numofupdate").value);
	numofupdate += 1;
	document.getElementById("numofupdate").value = String(numofupdate);
}

function minus(){
	numofupdate = Number(document.getElementById("numofupdate").value);
	numofupdate -= 1;
	document.getElementById("numofupdate").value = String(numofupdate);
}


function zero(){
	numofupdate = Number(document.getElementById("numofupdate").value);
	numofupdate = 0;
	document.getElementById("numofupdate").value = String(numofupdate);
}

eel.expose(resultdisp);
function resultdisp() {
    document.getElementById("result").innerHTML = "編集成功";
}


async function select_file() {
	let s = await eel.pyselect_file()();
    //console.log(s);
	document.getElementById("input").value = s;
}