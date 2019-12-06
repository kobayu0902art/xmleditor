import eel
import xml.etree.ElementTree as ET

####################################

from tkinter import filedialog, Tk
import platform
 
root = Tk()
root.geometry("0x0")
root.overrideredirect(1)
root.withdraw()
root.attributes("-topmost",True)
system = platform.system()
 
@eel.expose
def pyselect_file():
    if system == "Windows":
        root.deiconify()
    root.update()
    root.lift()
    root.focus_force()
    path_str = filedialog.askopenfilename()
    root.update()
    if system == "Windows":
        root.withdraw()
    return path_str

###################################

@eel.expose
def pyxmlload(s):
	path=s
	path=path.replace('"','')
	tree = ET.parse(path)
	root=tree.getroot()
	
	//Xpath replace
	mediacode = root.find('Xpath').get('Value')
	pagecode = root.find('Xpath').get('Value')
	publishdate = root.find('Xpath').get('Value')
	npid = root.find('Xpath').get('Value')
	text = root.find('Xpath').text
	numofupdate = root.find('Xpath').get('Value')
	sozname = root.find('Xpath').text
	#print(sozname)
	group = root.find('Xpath').get('Value')
	nsid = root.find('Xpath').get('Value')
	
	eel.loaddisp(mediacode,pagecode,publishdate,npid,text,numofupdate,sozname,group,nsid)


@eel.expose
def pyxmledit(s,outputpath,mediacode,pagecode,publishdate,npid,text,numofupdate,sozname,group,nsid):
	path=s
	path=path.replace('"','')
	tree = ET.parse(path)
	root=tree.getroot()
	
	//Xpath replace
	root.find('Xpath').attrib['Value'] = mediacode 
	root.find('Xpath').attrib['Value'] = pagecode
	root.find('Xpath').attrib['Value'] = publishdate
	root.find('Xpath').attrib['Value'] = npid
	root.find('Xpath').text = text
	root.find('Xpath').attrib['Value'] = numofupdate
	root.find('Xpath').text = sozname
	root.find('Xpath').attrib['Value'] = group
	root.find('Xpath').attrib['Value'] = nsid
	outputpath=outputpath.replace('"','')
	tree.write(outputpath, encoding='UTF-8',method='xml')
	eel.resultdisp()
	
eel.init("web")
eel.start("main.html")